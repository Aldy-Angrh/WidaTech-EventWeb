import React from "react";
import "../asset/css/Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "blue", "white", "green"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonColor,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
  return (
    <button
      className={`brn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
