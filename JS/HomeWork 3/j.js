/*// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let obj =   {
    weight: 10,
    long: 0.5,
    color: "black",
    height: 30,
    isLive: true
}
console.log(obj);*/

/*
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dogs = ["Roy","Emma","Tisha","Izi","Jeck"];
console.log(dogs);

let human = ["Igor","Vitaliy","Ruslan","Pasha","Maryna"];
console.log(human);
let auto = ["Citroen","Kia","Hyinday","Toyota","Mersades"];
console.log(auto);*/

/*
// -- створити об'єкт (не меньше 5ти властивостей) який описує,
// одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let obj =   {
    weight: 0.5,
    long: 10,
    color: {
        detail1: "white",
        detail2: "yellow"
    },
    height: 20,
    isLive: false,
    shape : ["rectangle","thin"]
}
console.log(obj);*/

/*
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name).
//     Будьте уважні! 4й об'
let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
console.log("статус Андрія: " + users[7].status);
console.log("статус Максима: " + users[10].status);
console.log(users[users.length-2].name);
console.log(users[users.length-9].name);
console.log("вік Олега: " + users[6].age);
console.log("вік Олі: " + users[3].age);
console.log("Вік: " + users[5].age +"  ім'я: "+ users[5].name);
console.log("Вік: " + users[5].age +"  статус: "+ users[5].status);
console.log("=".repeat(50));
*/

/*// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById("content");
console.log(content);
// - отримує текст з блоку з id "rules"
let rules = document.getElementById("rules");
console.log(rules);
// - замініть текст параграфа з id 'content' на будь-який інший
content.textContent="Скоро буде новий текст...";
// - замініть текст параграфа з id 'rules' на будь-який інший
rules.textContent="Тут також буде оновлений текст...";
// - змініть кожному елементу колір фону на червоний
content.style.backgroundColor="red";
rules.style.backgroundColor="red";
// - змініть кожному елементу колір тексту на синій
content.style.color="blue";
rules.style.color="blue";
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let cl =  document.getElementById("rules").className;
console.log(cl);
// - отримати всі елементи з класом fc_rules
let fc = document.getElementsByClassName("fc_rules")
console.log(fc);
// - поміняти колір тексту у всіх елементів fc_rules на червоний*/

/*// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let car = {
    brand: "citroen",
    power: 140,
    owner: {name: "Alex", age: 35, skill: 10 },
    price: 20000,
    year: 2020
}
let cloneCar1=JSON.parse(JSON.stringify(car));
let cloneCar2=JSON.parse(JSON.stringify(car));
cloneCar2.brand="volvo";
cloneCar2.power=75;
cloneCar2.owner["name"]="Petro";
cloneCar2.owner["age"]=25;
cloneCar2.owner["skill"]=8;
cloneCar2.price=15000;

let cloneCar3=JSON.parse(JSON.stringify(car));
cloneCar3.brand="kia";
cloneCar3.power=70;
cloneCar3.owner["name"]="Vitaliy";
cloneCar3.owner["age"]=18;
cloneCar3.owner["skill"]=2;
cloneCar3.price=5000;

let cloneCar4=JSON.parse(JSON.stringify(car));
cloneCar4.brand="hyindai";
cloneCar4.power=145;
cloneCar4.owner["name"]="Andriy";
cloneCar4.owner["age"]=27;
cloneCar4.owner["skill"]=6;
cloneCar4.price=12000;

let cloneCar5=JSON.parse(JSON.stringify(car));
cloneCar5.brand="mersedes";
cloneCar5.power=160;
cloneCar5.owner["name"]="Oleksiy";
cloneCar5.owner["age"]=30;
cloneCar5.owner["skill"]=4;
cloneCar5.price=25000;

let cloneCar6=JSON.parse(JSON.stringify(car));
cloneCar6.brand="mazda";
cloneCar6.power=130;
cloneCar6.owner["name"]="Taras";
cloneCar6.owner["age"]=23;
cloneCar6.owner["skill"]=3;
cloneCar6.price=8000;

let cloneCar7=JSON.parse(JSON.stringify(car));
cloneCar7.brand="toyota";
cloneCar7.power=155;
cloneCar7.owner["name"]="Kolya";
cloneCar7.owner["age"]=45;
cloneCar7.owner["skill"]=5;
cloneCar7.price=14000;

let cloneCar8=JSON.parse(JSON.stringify(car));
cloneCar8.brand="suzuki";
cloneCar8.power=110;
cloneCar8.owner["name"]="Yura";
cloneCar8.owner["age"]=50;
cloneCar8.owner["skill"]=7;
cloneCar8.price=16000;


let cars = [cloneCar1,cloneCar2,cloneCar3,cloneCar4,cloneCar5,cloneCar6,cloneCar7,cloneCar8];
// console.log(JSON.stringify(cars));

let newDrivers = ["driver1","driver2","driver3","driver4"];

for (let i = 0, j=0; i < cars.length; i+=2) {
    cars[i].power+=cars[i].power*0.1;
    cars[i].price+=cars[i].price*0.05;
    cars[i].owner["name"]=newDrivers[j];
    j++;

   }
console.log(cars);
// Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for (let car of cars) {
    if (car.owner.skill<5 && car.owner.age>25) {
        car.owner.skill++;
        console.log(car);
    }
}*/

// TASK 2
/*// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let man={
    name:"Alex",
    age:25,
    height: 170
}
let car={
    brand:"volvo",
    speed:200,
    type: "miniven"
}
let dog ={
    weight: 20,
    pooroda: "taksa",
    long: 60
}
let tv ={
    diagonal: 43,
    isAndroid: true,
    isWiFi: true
}
let laptop ={
    processor: "I7-10",
    memory: "16GB",
    hardDisk: "500GB"
}*/

/*
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
//     Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let laptops ={
    processor1: {model:"I7", generation:10},
    memory1: "16GB",
    hardDisk1: "500GB",
    certificate1: ["UA","US","EU"]
}
*/



// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
//
// for (let value in man) {
//     console.log(value);
// }
// for (let value in car) {
//     console.log(value);
// }
// for (let value in dog) {
//     console.log(value);
// }
// for (let value in tv) {
//     console.log(value);
// }
// for (let value in laptop) {
//     console.log(value);
// }for (let value in laptops) {
//     console.log(value);
// }


/*// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(man));
console.log(Object.keys(car));
console.log(Object.keys(dog));
console.log(Object.keys(tv));
console.log(Object.keys(laptop));
console.log(Object.keys(laptops));*/

/*// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
 let cars=[
     {model:"volvo", year:2019, power:120, color:"white"},
     {model:"citroen", year:2007, power:85, color:"red"},
     {model:"mersedes", year:2017, power:135, color:"black"},
     {model:"kia", year:2006, power:100, color:"yellow"},
     {model:"hyundai", year:2016, power:130, color:"green"},
     {model:"zaz", year:2000, power:60, color:"white"},
     {model:"mazda", year:2019, power:95, color:"black"},
     {model:"seat", year:2008, power:90 , color:"white"},
     {model:"tesla", year:2005, power:77, color:"grey"},
     {model:"ferrari", year:2020, power:250, color:"red"}
 ];
// console.log(cars);*/


/*
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
let cities = [
    {population: 2000000, country: "Ukraine", region:"Kiev" },
    {population: 600000, country: "Ukraine", region:"Kharkiv" },
    {population: 500000, country: "Ukraine", region:"Dnipro" }
];
*/


/*// - Создать массив объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя,
// возраст, пол, стаж.
let auto=[
    {model:"volvo", year:2019, power:120, color:"white", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"citroen", year:2007, power:85, color:"red", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"mersedes", year:2017, power:135, color:"black", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"kia", year:2006, power:100, color:"yellow", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"hyundai", year:2016, power:130, color:"green", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"zaz", year:2000, power:60, color:"white", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"mazda", year:2019, power:95, color:"black", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"seat", year:2008, power:90 , color:"white", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"tesla", year:2005, power:77, color:"grey", driver: {Name:"Taras", age:"23", gender:"man", skills:5}},
    {model:"ferrari", year:2020, power:250, color:"red", driver: {Name:"Taras", age:"23", gender:"man", skills:5}}
];
// console.log(cars);*/


/*
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let i=0;
while (i<cars.length){
    console.log(cars[i]);
    i++;
}
console.log("+".repeat(50) )
let j=0;
while (j<cities.length){
    console.log(cities[j]);
    j++;
}
console.log("+".repeat(50) )

let k=0;
while (k<auto.length){
    console.log(auto[k]);
    k++;
}
console.log("+".repeat(50) )

*/

/*
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let l = 0; l < cars.length; l++) {
    console.log(cars[l]);
}
console.log("+".repeat(50) )

for (let z = 0; z < cities.length; z++) {
    console.log(cities[z]);
}
console.log("+".repeat(50) )

for (let x = 0; x < auto.length; x++) {
    console.log(auto[x]);
}
console.log("+".repeat(50) )
*/

/*// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const car of cars) {
    console.log(car);
}
console.log("+".repeat(50) )

for (const city of cities) {
    console.log(city);
}
console.log("+".repeat(50) )

for (const autoElement of auto) {
    console.log(autoElement);
}
console.log("+".repeat(50) )*/

/*// - взять объекты из задания 1 и превратить каждый в json.
console.log(JSON.stringify(man));
console.log(JSON.stringify(car));
console.log(JSON.stringify(dog));
console.log(JSON.stringify(tv));
console.log(JSON.stringify(laptop));
console.log(JSON.stringify(laptops));

// - взять json из задания 11 и превратить их обратно в объекты.
console.log(JSON.parse(JSON.stringify(man)));
console.log(JSON.parse(JSON.stringify(car)));
console.log(JSON.parse(JSON.stringify(dog)));
console.log(JSON.parse(JSON.stringify(tv)));
console.log(JSON.parse(JSON.stringify(laptop)));
console.log(JSON.parse(JSON.stringify(laptops)));*/

/*// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let car of cars) {
    console.log(JSON.stringify(car));
}
console.log("-".repeat(20))*/

/*
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cities.length; i++) {
    console.log(JSON.stringify(cities[i]));
}
console.log("-".repeat(20))
*/

/*// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let newAuto=[];
for (const element of auto) {
    newAuto.push(JSON.stringify(element));
}
console.log("-".repeat(20))
console.log(newAuto);
console.log("-".repeat(20))
console.log(auto);*/

/*// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
    ];

// for (let i = 0; i < users.length; i++) {
//     console.log("Name :", users[i].name);
//     for (const skill of users[i].skills) {
//         console.log(skill);
//     }
//
// }*/

/*// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
let allSkills=[];
for (let i = 0; i < users.length; i++) {
    console.log("Name :", users[i].name);
    for (const skill of users[i].skills) {
        allSkills.push(skill);
    }
}
console.log(allSkills);*/

/*
/!*
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users1 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for ( let user of users1) {
    console.log("Name: ", user.name);
    for (let userElement of user.skills) {
        console.log(userElement);
    }
}
*!/


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

*/

// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let adr=[];
//
// for (let user of users) {
//     adr.push(user.address);
// }
// console.log(adr);

/*
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    const div = document.createElement("div")
    let adr="";
    for (let us in user.address) {
        adr=adr + " " + user.address[us];
        div.innerText = `${user.name} ${user.age} ${user.status} ${adr}`;
        document.body.appendChild(div)
    }
}
*/

/*// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    const div = document.createElement("div")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")

    let adr="";
    for (let us in user.address) {
        adr=adr + " " + user.address[us];
        div1.innerText = `${user.name} `;
        div2.innerText = `${user.age}`;
        div3.innerText = `${user.status}`;
        div4.innerText = `${adr}`;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

        document.body.appendChild(div)
    }
};*/

/*
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам ,
//  блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    const div = document.createElement("div")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")

    let adr="";
    for (let us in user.address) {
        const adrDiv=document.createElement("div")
        adrDiv.innerHTML=user.address[us];
        div4.appendChild(adrDiv);
    }
        div1.innerText = `${user.name} `;
        div2.innerText = `${user.age}`;
        div3.innerText = `${user.status}`;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

        document.body.appendChild(div)
};*/



/*// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];*/
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [
//         {id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

/*
//1 варіант
for (let i = 0; i < usersWithId.length; i++) {
    const userId = usersWithId[i];
    // console.log(userId.id);
    for (const cityWithIdKey in citiesWithId) {
        // console.log(usersWithId[usersWithIdKey].id);
        if (userId.id===citiesWithId[cityWithIdKey].user_id){
            userId.adress=citiesWithId[cityWithIdKey];
        }
    }
}
console.log(usersWithId);

*/

/*
// 2 варіант
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id===city.user_id) {
            user.adress=city;
        }
    }
}
console.log(usersWithId);
*/

// 3 варіант

// usersWithId.forEach(user => {
//     user.adress=citiesWithId.filter(value => value.user_id=user.id)
// });
// console.log(usersWithId);

/*
// - створити розмітці блок з id, class та текстом в середені.
//     Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag

let div = document.createElement("div");
div.id="www";
div.className="cl-1";

div.innerHTML = "<h2>text test text test</h2>>";

document.body.appendChild(div);
console.log(document.getElementById("www").innerText);
let elementcl=document.getElementsByClassName("cl-1");
console.log(elementcl);
for (const cl of elementcl) {
    console.log(cl);
}

let h2=document.getElementsByTagName("h2");
for (const h2Element of h2) {
    console.log(h2Element);
};

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
document.getElementById("www").style.height="200px";
document.getElementById("www").style.width="200px";

for (const h2Element of h2) {
    h2Element.style.width="100px";
    h2Element.style.height="100px";

};
*/

/*
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

let tab= document.createElement("table");
let tr= document.createElement("tr");
let td= document.createElement("td");
let td1= document.createElement("td");
let td2= document.createElement("td");

tr.appendChild(td);
tr.appendChild(td1);
tr.appendChild(td2);

tab.appendChild(tr);

document.body.appendChild(tab);
*/

/*
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let tab= document.createElement("table");
for (let i = 0; i < 10 ; i++) {
    let tr= document.createElement("tr");
    for (let j = 0; j < 3; j++) {
        let td= document.createElement("td");
        tr.appendChild(td);

    }
    tab.appendChild(tr);
}
document.body.appendChild(tab);

*/

/*
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let tab= document.createElement("table");
for (let i = 0; i < 10 ; i++) {
    let tr= document.createElement("tr");
    for (let j = 0; j < 5; j++) {
        let td= document.createElement("td");
        tr.appendChild(td);

    }
    tab.appendChild(tr);
}
document.body.appendChild(tab);
*/

/*
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
let n=prompt("Введіть кількість рядків");
let m=prompt("Введіть кількість стовпців");

let tab= document.createElement("table");
for (let i = 0; i < n ; i++) {
    let tr= document.createElement("tr");
    for (let j = 0; j < m; j++) {
        let td= document.createElement("td");
        tr.appendChild(td);

    }
    tab.appendChild(tr);
}
document.body.appendChild(tab);
*/

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
/*// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class

let elTag = document.getElementsByTagName("*");
for (const elTagElement of elTag) {
        if (elTagElement.getAttribute("class")){
            console.log(elTagElement);
        }
};*/

/*// - знайти всі параграфи ,та змінити текст на hello oktenweb!
let elTag = document.getElementsByTagName("p");
// console.log(elTag);
for (const elTagElement of elTag) {
        elTagElement.innerText="oktenweb";

};*/


/*// - знайти всі div та змінити ім колір на червоний
let elTag = document.getElementsByTagName("div");
// console.log(elTag);
for (const elTagElement of elTag) {
    elTagElement.style.backgroundColor="red";
};
elTagElement.style.backgroundColor="red";

*/

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

