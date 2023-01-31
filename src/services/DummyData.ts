import type ITypeFilter from "@/interfaces/TypeFilterInterface";

const filters: ITypeFilter[] = [
  {
    id: 1,
    name: "City",
    list: ["Kumasi", "Accra", "Tema"],
  },
  {
    id: 2,
    name: "Region",
    list: ["Ashanti", "Greater Accra", "Bono"],
  },
  {
    id: 3,
    name: "Country",
    list: ["Ghana", "America", "China"],
  },
];

export default filters;
