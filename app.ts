// const person: { name: string; age: number } = {
const person = {
  name: "Senad",
  age: 23,
  hobbies: ["Sports", "Programing"],
}

let favoriteActivities: string[]

favoriteActivities = ["Sports"]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
