export default function WeatherBlock({ children, title, isLoading }) {
  return (
    <div className="p-5 flex-1 min-w-[200px] flex flex-col">
      <h2>{title}</h2>
      <div className="">{children}</div>
    </div>
  );
}
