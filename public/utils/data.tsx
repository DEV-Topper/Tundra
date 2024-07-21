"use client";
import { iInput } from "@/interfaces";
import { useSelector } from "react-redux";

export const inputs: iInput[] = [
  {
    name: "firstName",
    placeholder: "First Name*",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "Last Name*",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email*",
    type: "email",
  },
];
export const POPULAR_COUNTRIES: string[] = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Nigeria",
  "South Africa",
];
