export const getSlugFromString = (val: string): string => {
  if (typeof val === "string")
    return val.toLocaleLowerCase().split(" ").join("-");
  else return "Args not typeof string";
};

export const turnSlugToString = (val: string): string => {
  if (typeof val === "string")
    return val
      .split("-")
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join(" ")
      .replace("_", " - ");
  else return "Args not typeof string";
};

export const rupiahFormatter = (val: number): string => {
  if (typeof val === "number")
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(val)
      .replace(/\D00$/, "")
      .replace(".", ",");
  else return "Agrs not typeof number";
};
