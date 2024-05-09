let person = {
    name: "Sehee Jang",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["lifting", "freediving", "cooking"],
    address: {
        street: "123 Camino REal",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function(){
        console.log('Hello, my name is {this.name}.')
    }
}

console.log(person.hobbies[0]); // Output: lifting