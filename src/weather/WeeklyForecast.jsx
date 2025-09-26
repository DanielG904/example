import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function WeeklyForecast({ days, minTemps, maxTemps }) {
  //restructure data into array of objects eg
  // [{day: 'cc', min:8.5, max:22.0}, {day: '2025-1-2', min:6.9, max:21.5},]
  const data = days.map((day, i) => ({
    xAxis: `${new Date(day).getDate()}/${new Date(day).getMonth() + 1}`,
    day: new Date(day).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    }),
    min: minTemps[i],
    max: maxTemps[i],
  }));

  console.log("data", data);

  return (
     <ResponsiveContainer aspect={1.5}>
      <LineChart
        data={data}
        // margin={{ right: 10, left: 10, top: 10, bottom: 10 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis
          dataKey="xAxis"
          tick={{ fontSize: 10 }}
          interval={0}
          tickLine={{ strokeWidth: 0.3 }}
        />
        <YAxis
          tick={{ fontSize: 10 }}
          interval={0}
          tickLine={{ strokeWidth: 0.3 }}
        />
        <Tooltip content={weeklyTooltip} />
        <Line
          type="natural"
          dataKey="min"
          stroke="#792CFF"
          animationDuration={500}
          animationBegin={200}
          dot={{ r: 3 }}
        />
        <Line
          type="natural"
          dataKey="max"
          stroke="#FF5D5D"
          animationDuration={500}
          animationBegin={100}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function weeklyTooltip({ active, payload, label }) {
  const isVisible = active && payload && payload.length; //only visible if something to display, and active
  const data = payload[0]?.payload;

  return (
    <div
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      className="text-xs bg-[rgb(255_255_255_/_0.8)] p-1 border-1 border-primary-300"
    >
      {isVisible && (
        <>
          {/* <div className="text-[0.6rem]">{data.day}</div> */}
          <div
            className="flex items-center"
            style={{ color: payload[1].color }}
          >
            <FaAngleUp color={payload[1].color} className="mt-0.5" />{" "}
            <span>{data.max}</span>
          </div>
          <div
            className="flex items-center"
            style={{ color: payload[0].color }}
          >
            <FaAngleDown color={payload[0].color} className="mt-0.5" />{" "}
            <span>{data.min}</span>
          </div>
        </>
      )}
    </div>
  );
}
