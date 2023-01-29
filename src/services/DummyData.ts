interface TypeFilter {
  id: Number;
  name: string;
  list: String[];
}

const filters: TypeFilter[] = [
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
