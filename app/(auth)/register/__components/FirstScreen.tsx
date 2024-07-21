"use client";
import { iFirst, iInput } from "@/interfaces";
import { COUNTRIES } from "@/public/utils/constant";
import { POPULAR_COUNTRIES, inputs } from "@/public/utils/data";
import { addInputValue } from "@/public/utils/reducer";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

interface FirstScreenProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const FirstScreen: FC<FirstScreenProps> = ({ setStage }) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([
    {
      value: "Nigeria",
      label: "+234",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.svg.png",
    },
  ]);
  const [state, setState] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const inputData = useSelector((state: any) => state?.inputValue);

  useEffect(() => {
    fetch(COUNTRIES!)
      .then((res: Response) => res.json())
      .then((res: any) => {
        const country = res
          .filter((country: any) =>
            POPULAR_COUNTRIES.includes(country.name.common)
          )
          .map((country: any) => ({
            value: country.name.common,
            label:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
            flag: country.flags.png,
          }));

        setCountries(country);
        setSelectedCountry(country.find((c: any) => c.value === "Nigeria"));
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(addInputValue({ ...inputData, [name]: value }));
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "number") {
      const matchedCountry = countries.find((country: any) =>
        value.startsWith(country.label)
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
      }
    }
    handleInputChange(e);
  };

  const handleForm = (formData: FormData) => {
    setState(true);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const number = formData.get("number");
    const prefix = formData.get("prefix");
    const email = formData.get("email");

    dispatch(
      addInputValue({ firstName, lastName, email, number, country: prefix })
    );

    setTimeout(() => {
      setStage(2);
      setState(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleForm(new FormData(e.currentTarget));
      }}
      className="space-y-3 flex flex-col items-center"
    >
      {inputs.map((el: iInput, i: number) => (
        <input
          key={i}
          type={el.type}
          required
          placeholder={el.placeholder}
          name={el?.name}
          value={inputData[el?.name!] || ""}
          className="duration-300 w-[90%] md:w-[400px] h-[40px] rounded-md border border-gray-400 outline-gray-500 pl-3"
          onChange={handleInputChange}
        />
      ))}

      <div className="w-[90%] md:w-[400px] grid grid-cols-10 gap-2">
        <Select
          required
          options={countries}
          formatOptionLabel={(country: any) => (
            <div className="flex items-center gap-2 text-[15px]">
              {country.flag && (
                <Image
                  height={100}
                  width={100}
                  className="w-[15px] h-[12px]"
                  src={country.flag}
                  alt="country-image"
                />
              )}
              <span>{country.label}</span>
            </div>
          )}
          className="col-span-3"
          name="prefix"
          value={selectedCountry}
          onChange={(value) => setSelectedCountry(value)}
        />

        <input
          type="text"
          required
          placeholder="Phone Number *"
          name="number"
          value={inputData?.number || ""}
          className="col-span-7 duration-300 h-[40px] rounded-md border border-gray-400 outline-gray-500 pl-3"
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button
        type="submit"
        className={`w-full bg-gray-700 rounded-md duration-300 flex items-center justify-center hover:bg-gray-400 text-white text-[20px] font-semibold py-2 cursor-pointer `}
      >
        {state ? <div className="loader" /> : ""}
        {!state && "Continue"}
      </button>
    </form>
  );
};

export default FirstScreen;
