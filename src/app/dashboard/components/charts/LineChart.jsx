"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart  = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


const options = {
  colors: ["#3C50E0", "#80CAEE"],
  dataLabels: {
    enabled: true,
  },

  chart: {
    width: "100%",
    height: 380,
    type: "bar"
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    type: "Months",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  legend: {
    position: "right",
    verticalAlign: "top",
    containerMargin: {
      left: 40,
      right: 60
    }
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
};


// const options = {
 
//   colors: ["#3C50E0", "#80CAEE"],
//   chart: {
//     width: "100%",
//     height: 380,
//     type: "bar"
//   },

//   responsive: [
//     {
//       breakpoint: 1000,
//       options: {
//         plotOptions: {
//           bar: {
//             horizontal: false
//           }
//         },
//         legend: {
//           position: "bottom"
//         }
//       }
//     }
//   ],
//   grid: {
//     xaxis: {
//       lines: {
//         show: false,
//       },
//     },
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   dataLabels: {
//     enabled: true,
//   },
//   markers: {
//     size: 4,
//     colors: "#fff",
//     strokeColors: ["#3056D3", "#80CAEE"],
//     strokeOpacity: 0.9,
//     strokeDashArray: 0,
//     fillOpacity: 1,
//     discrete: [],
//     hover: {
//       size: undefined,
//       sizeOffset: 5,
//     },
//   },
//   xaxis: {
//     type: "Months",
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
 
// };



const LineChart = () => {
  const series = [
    {
      name: "Product One",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]


  const [analyticsData, setAnalyticsData] = useState(null);
  const [monthPageviews, setMonthPageviews] = useState(null);
  const [valuePageViewsByMonth, setValuePageViewsByMonth] = useState(0);

  const reorderDataByMonth = (series, targetMonth = "Dec", valuePageViewsByMonth) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const targetIndex = months.indexOf(targetMonth);
  
    if (targetIndex === -1) {
      return series;
    }
  
    return series.map((item) => {
      const { data } = item;
      const updatedData = [...data];
  
      updatedData[targetIndex] = valuePageViewsByMonth;
  
      return { ...item, data: updatedData };
    });
  };


  useEffect(() => {
    async function fetchData() {
      const timestamp = Date.now();
      try {
        const response = await fetch(`/api/getPageviews?timestamp=${timestamp}`);
        if (!response.ok) {
          // throw new Error("Failed to fetch Umami stats");
        }

        const data = await response.json();
        const date = new Date(data.pageviews[0].x);
        const month = date.toLocaleString("en-US", { month: "short" });
        setMonthPageviews(month)
        setValuePageViewsByMonth(data.pageviews[0].y);
        setAnalyticsData(data);


      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);


  const [data, setData] = useState([])

  useEffect(() => {
    if (analyticsData !== null) {
      setData()

    }
  }, [analyticsData])


  const result = reorderDataByMonth(series, monthPageviews, valuePageViewsByMonth);

  console.log(result);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:col-span-8">
      <div id="chartOne" className="-ms-5">
        <Chart 
          options={options}
          series={result}
          type="bar"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default LineChart;
