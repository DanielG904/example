export default function WeatherBlock({ children, title, isLoading }) {
  return (
    <div className="p-5">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
