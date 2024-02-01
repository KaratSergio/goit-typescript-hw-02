/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = "male" | "female";

const myGender: Gender = "male";

if (myGender === "male") {
  console.log("Gender: man");
} else if (myGender === "female") {
  console.log("Gender: woman");
}

export {};
