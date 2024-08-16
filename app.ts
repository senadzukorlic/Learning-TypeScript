// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   // const person = {
//   name: "Senad",
//   age: 23,
//   hobbies: ["Sports", "Programing"],
//   role: [2, "author"],
// }

enum Role { //enum type
  ADMIN,
  READ_ONLY,
  AUTHOR = 10,
}

const person = {
  name: "Senad",
  age: 23,
  hobbies: ["Sports", "Programing"],
  role: Role.ADMIN,
}

// person.role = [5, "dado"]

// person.role[0] = 10  //tuple type

let favoriteActivities: string[]

favoriteActivities = ["Sports"]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
if (person.role === Role.ADMIN) {
  console.log("is admin")
}
