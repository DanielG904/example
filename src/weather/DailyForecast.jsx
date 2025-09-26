import {
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  AreaChart,
} from "recharts";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function DailyForecast({ times, temps }) {
  //restructure data into array of objects eg
  // [{day: 'cc', min:8.5, max:22.0}, {day: '2025-1-2', min:6.9, max:21.5},]
  const data = times.map((time, i) => ({
    time: new Date(time).toLocaleTimeString([], {
      hour: "numeric",
      hour12: true,
    }),
    temp: temps[i],
  }));

  console.log("data", data);

  return (
    <ResponsiveContainer aspect={1.5}>
      <AreaChart
        data={data}
        // margin={{ right: 10, left: 10, top: 10, bottom: 10 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 10 }}
          tickLine={{ strokeWidth: 0.3 }}
        />
        <YAxis
          tick={{ fontSize: 10 }}
          interval={0}
          tickLine={{ strokeWidth: 0.3 }}
        />
        <Tooltip content={dailyTooltip} />
        <Area
          type="natural"
          dataKey="temp"
          stroke="#792CFF"
          fill="#792CFF"
          animationDuration={500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function dailyTooltip({ active, payload, label }) {
  const isVisible = active && payload && payload.length; //only visible if something to display, and active
  const data = payload[0]?.payload;

  return (
    <div
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      className="text-xs bg-[rgb(255_255_255_/_0.8)] p-1 border-1 border-primary-300"
    >
      {isVisible && (
        <>
          <div className="text-[0.6rem]">{data.time}</div>
          <div
            className="flex items-center"
            style={{ color: payload[0].color }}
          >
            <span>{data.temp}</span>
          </div>
        </>
      )}
    </div>
  );
}
