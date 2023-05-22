import "./Input.css";

export const Input = ({ handleChange, handleKey, value }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={value}
        className="input"
        placeholder="Please enter text"
      />
    </>
  );
};