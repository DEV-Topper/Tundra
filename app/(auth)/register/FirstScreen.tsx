"use client";
import { iFirst, iInput } from "@/interfaces";
import { COUNTRIES } from "@/public/utils/constant";
import { POPULAR_COUNTRIES, inputs } from "@/public/utils/data";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Select from "react-select";

interface FirstScreenProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const FirstScreen: FC<FirstScreenProps> = ({ setStage }) => {
  const [countries, setCountries] = useState([
    {
      value: "Nigeria",
      label: "+234",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.svg.png",
    },
  ]);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

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

        return countries;
      });
  }, []);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const matchedCountry = countries.find((country: any) =>
      inputValue.startsWith(country.label)
    );
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  };

  const handleForm = (formData: FormData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const number = formData.get("number");
    const prefix = formData.get("prefix");

    const data = { firstName, lastName, number, prefix };

    localStorage.setItem("firstInfo", JSON.stringify(data));

    const timeout: NodeJS.Timeout = setTimeout(() => {
      setStage(data && 2);

      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <form action={handleForm} className="space-y-3">
      {inputs.map((el: iInput, i: number) => (
        <input
          key={i}
          type={el.type}
          required={true}
          placeholder={el.placeholder}
          name={el?.name}
          value={el.value}
          className="duration-300 w-[90%] md:w-[400px] h-[40px] rounded-md border  border-gray-400 outline-gray-500 pl-3"
        />
      ))}

      <div className="w-full md:w-[400px] flex items-center gap-2">
        <Select
          required={true}
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
          className="w-[150px]"
          name="prefix"
          value={selectedCountry}
          onChange={(value) => setSelectedCountry(value)}
          defaultValue={countries.find((c) => c.value === "Nigeria")}
        />

        <input
          type="text"
          required={true}
          placeholder="Phone Number *"
          name="number"
          value={JSON.parse(localStorage.getItem("firstInfo")!)?.number!}
          className="w-[90%] duration-300 h-[40px] rounded-md border border-gray-400 outline-gray-500 pl-3"
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 rounded-md duration-300 hover:bg-gray-400 text-white text-[20px] font-semibold py-2 cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
};

export default FirstScreen;
