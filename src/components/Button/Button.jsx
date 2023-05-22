import "./Button.css";

export const Button = ({handleClick, children, selected}) => {
    const classes = children === selected ? "button selected" : "button";

    return (
        <button className={classes} onClick={handleClick}>{children}</button>
    );
}