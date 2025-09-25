export default function Results({ result, total }) {
  return (
    <div>
      <h1>Your result!</h1>
      <p>
        {result}/{total}
      </p>
    </div>
  );
}
