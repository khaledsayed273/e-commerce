"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});





const LineChart = () => {
  const [loading, setLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState([]);
  const date = new Date();
  const shortMonth = date.toLocaleString("en-US", { month: "short" });
  function getDaysInCurrentMonth() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const nextMonth = new Date(currentYear, currentMonth + 1, 0);
    return nextMonth.getDate();
  }
  const daysInMonth = getDaysInCurrentMonth();



  const series = [
    {
      data: analyticsData.map((item) => item.y),
    },
  ]


  const options = {
    colors: ["#3C50E0", "#80CAEE"],
    dataLabels: {
      enabled: true,
    },

    chart: {
      width: "100%",
      height: 400,
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
      type: "Days",
      categories: analyticsData.map((item) => item.x),
      // labels: {
      //   formatter: function (val, index) {
      //     const day = analyticsData.map((_, i)  => i);
      //     console.log(val);
          
      //     return day % 2 !== 0 ? val : "";
      //   }
      // }
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
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "60%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };



  function fillMissingDates(data) {

    const pushData = [];

    const dataByDate = data.reduce((acc, { x, y }) => {
      const day = new Date(x).getUTCDate();
      acc[day] = y;
      return acc;
    }, {});

    for (let day = 1; day <= daysInMonth; day++) {
      pushData.push({
        x: `${day.toString().padStart(1)} ${shortMonth}`,
        y: dataByDate[day] || 0,
      });
    }

    return pushData;
  }


  useEffect(() => {
    async function fetchData() {
      const timestamp = Date.now();
      function getFirstDayOfCurrentMonthTimestamp() {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        return firstDay.getTime();
      }
      const firstDayTimestamp = getFirstDayOfCurrentMonthTimestamp();
      try {
        const response = await fetch(`/api/getPageviews?endAt=${timestamp}&startAt=${firstDayTimestamp}`);
        if (!response.ok) {
          return
        }

        const data = await response.json();
        const filledData = fillMissingDates(data.pageviews);
        setAnalyticsData(filledData)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      finally {
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7">
      <div id="chartOne" className="-ms-5">
        {loading ? (
          <div className="h-[500px] w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        ) : (
          <Chart
            options={options}
            series={series}
            type="bar"
            height={500}
            width={"100%"}
          />
        )}
      </div>
    </div>

  );
};

export default LineChart;
