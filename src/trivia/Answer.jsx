export default function Answer({ children, id, name, onSelect }) {
  return (
    <div className="radio-choice">
      <input type="radio" name={name} id={`${name}${id}`} onChange={onSelect} />
      <label htmlFor={`${name}${id}`}>{children}</label>
    </div>
  );
}
