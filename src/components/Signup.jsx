import React, { useState } from "react";
import Personal from "./Personal";
import Select from "./Select";

const Signup = () => {
  const [check, setCheck] = useState(true);
  const [active, setActive] = useState("1");
  console.log(active);

  const handleCheck = (type) => {
    setCheck(!check);
  };

  const handleClick = (click) => {
    setActive(click);
  };

  return (
    <div className="pt-[20px] pl-[60px]">
      {active == "1" && <Personal active={active} handleClick={handleClick} />}
      {active == "2" && <Select check={check} handleCheck={handleCheck} />}
    </div>
  );
};

export default Signup;
