//1
const students = [
    { name: "Asan", math: 85, city: "Almaty", country: "Қазақстан" },
    { name: "Aigerim", math: 92, city: "Astana" }
  ];
  
  const { name, math, city, country = "Қазақстан" } = students[0];
  
  console.log("Аты:", name);
  console.log("Математика бағасы:", math);
  console.log("Қаласы:", city);
  console.log("Мемлекеті:", country);

  //2
const cs1 = ["Амина", "Әділ", "Әлина"];
const cs2 = ["Берік", "Бақыт", "Баян"];

const massiv = ["Директор", ...cs1, ...cs2, "Мұғалім"];

console.log(massiv);