import React, { useState } from "react";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value); //The + sign changes the string to a number
    select(+e.currentTarget.value);
  };
  return <div>RatingSelect</div>;
};

export default RatingSelect;
