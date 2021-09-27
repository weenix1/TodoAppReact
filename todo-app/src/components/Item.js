import React from "react";

function Item(props) {
  const { item } = props;
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChecking = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChecking()}
      />
      <label>{item}</label>
    </div>
  );
}

/* function Item(props) {
  const { item } = props;
  const [bg, setBg] = React.useState("");

  const handleMouseOver = () => {
    setBg("red");
  };
  const handleMouseOut = () => {
    setBg("");
  };

  return (
    <p
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ backgroundColor: bg }}
    >
      {item}
    </p>
  );
} */

/*
 */

export default Item;
