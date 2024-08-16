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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Senad",
    age: 23,
    hobbies: ["Sports", "Programing"],
    role: Role.ADMIN,
};
// person.role = [5, "dado"]
// person.role[0] = 10  //tuple
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log(Role.AUTHOR);
}
