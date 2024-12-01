"use client";
import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Context } from "@/store/Context";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = ({ firstDayTimestamp }) => {
  const [loading, setLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState([]);
  const {theme} = useContext(Context)
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
      name: "Viewed",
      data: analyticsData.map((item) => item.y),
    },
  ]

  const options = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      width: "100%",
      height: 500,
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
      labels: {
        formatter: function (val, index) {
          const day = String(index);
          const cleanDay = day.replace(/[^\d]/g, "");
          const dayNumber = parseInt(cleanDay, 10);
          return dayNumber % 2 !== 0 ? val : "";
        },
        rotate: 0
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          xaxis: {
            labels: {
              rotate: -45,
              style: {
                fontSize: '12px',
              }
            }
          },
        }
      },
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
    tooltip: {
      enabled: true,
      theme,
    }
  };

  function fillMissingDates(data) {
    const pushData = [];
    const dataByDate = data.reduce((acc, { x, y }) => {
      const day = new Date(x).getDate();
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

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  useEffect(() => {
    async function fetchData() {
      const timestamp = Date.now();
      try {
        const response = await fetch(`/api/getPageviews?startAt=${firstDayTimestamp}&endAt=${timestamp}&timeZone=${timeZone}`);
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
    <div className="col-span-12 rounded-sm border border-stroke dark:border-gray-700 bg-white dark:bg-cardDark px-5 pb-5 pt-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7">
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
