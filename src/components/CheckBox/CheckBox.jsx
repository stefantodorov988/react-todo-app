import PropTypes from "prop-types";
import "./CheckBox.css";

export const Checkbox = ({
  label,
  checked,
  handleCheckbox,
  ...props
}) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className={checked ? "checked" : ""}
            {...props}
          />
        </div>
        <span style={{ marginLeft: "0.6em" }}>
          {label}
        </span>
      </label>
    </div>
  );
};