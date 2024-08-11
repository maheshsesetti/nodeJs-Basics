const person = {
    "name" : "Mahesh Babu",
    "age": 29,
    "greet":() => console.log("Hello world!"),
    "data" : {
     "id":1,
     "name": "jhon"
    }
    // greet(){
    //     console.log("Hello world!");
    // }
};

person.greet();

const copyPerson = {person};

console.log(copyPerson);

const copyPersonData = {...person};

console.log(copyPersonData);



const names = [ "Mahesh","Ramesh","Kumarri"];

console.log(names);
for (const element in names) {
   console.log(names[element]);
}

for (const element of names) {
    console.log(element);
}

names.forEach(element => {
    console.log(element);
});

names.map(element => console.log(element));


const copyNames = [names];
console.log(copyNames);
const copyNameData = [...names];
console.log(copyNameData);



const toArray = (...args) => {
return args;
} 

const personArray = {
    name : "Mahesh Babu",
    age: 29,
    greet:() => console.log("Hello world!"),
    data : {
     id:1,
     name: "jhon",
     list: toArray(1,2,3,4)
    }
    // greet(){
    //     console.log("Hello world!");
    // }
};

console.log(personArray);

const {name,data} = personArray;

console.log(data);










