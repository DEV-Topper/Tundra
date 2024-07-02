import { iInput } from "@/interfaces";

export const inputs: iInput[] = [
  {
    name: "firstName",
    placeholder: "First Name*",
    type: "text",
    value: JSON.parse(localStorage.getItem("firstInfo")!)?.firstName!,
  },
  {
    name: "lastName",
    placeholder: "Last Name*",
    type: "text",
    value: JSON.parse(localStorage.getItem("firstInfo")!)?.lastName!,
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
