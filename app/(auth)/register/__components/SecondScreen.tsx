import { Option } from "@/interfaces";
import React from "react";
import Select from "react-select";
import DatePicker from "./DatePicker";

const SecondScreen = () => {
  const options: Option[] = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Rather Not Say",
      value: "unknown",
    },
  ];

  return (
    <form>
      <Select
        options={options}
        required
        placeholder="Gender*"
        className="w-[300px] md:w-[400px] rounded-md text-start h-[40px]"
      />

      <DatePicker />
    </form>
  );
};

export default SecondScreen;
