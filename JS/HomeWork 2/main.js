/*// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let  arr1 = [2,3,6,8,4]
console.log(arr1);
let  arr2 = ["green","red","black","white","pink"]
console.log(arr2);
let  arr3= [2,3,6,8,4,"green","red","black","white","pink", true, false]
console.log(arr3);*/

/*// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let arr=[];
 arr[0]="Dimarik";
 arr[1]="Vasya";
 arr[2]="Kolya";
 arr[3]="Sasha";
 arr[4]="Taras";

for (let z of arr){
     console.log(z);
 }*/

/*// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i<10; i++) {
    document.write("<div>TEST</div>")
};*/

/*// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0; i<10; i++) {
    document.write(`<div>TEST ${i}</div>`)
}*/

/*// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=1;
while (i<=20){
    document.write("<h1>block</h1>")
    i++
}*/

/*// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j=1;
while (j<=20){
        document.write(`<h1>Count #${j}</h1>`)
    j++
}*/

/*// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr=[3,6,5,4,7,2,9,0,1,10];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}*/

/*// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr=["Test 1","Hello","OWU","COOL","Value","UPPER TEXT","6","lower text","www","10"];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}*/

/*// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr=[4,"Hello","OWU",8,"Value",9999,"6","lower text",3.14,"10"];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}*/

/*
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arr=[true,"Hello","OWU",false,6,2,"6","lower text",true,"10"];
for (const arrElement of arr) {
    if (typeof(arrElement)=="boolean") {
        console.log(arrElement);
    }
};
*/

/*
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr=[true,"Hello","OWU",false,6,2,"6","lower text",true,"10"];
for (const arrElement of arr) {
    if (typeof(arrElement)=="number") {
        console.log(arrElement);
    }
};*/

/*
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arr=[true,"Hello","OWU",false,6,2,"6","lower text",true,"10"];
for (const arrElement of arr) {
    if (typeof(arrElement)=="string") {
        console.log(arrElement);
    }
};*/

/*// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr=[];
arr[0]="Dimarik";
arr[1]=45;
arr[2]="IT DEV";
arr[3]=true;
arr[4]=null;
arr[5]="Toyota";
arr[6]="married";
arr[7]=5;
arr[8]="2 child";
arr[9]=43;

for (let z of arr){
    console.log(z);
};*/

/*
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<10; i++) {
    console.log(i);
    document.write(` ${i}`);
};
*/

/*
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i++) {
    console.log(i);
    document.write(`${i} <br>`);
};*/

/*
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i=i+2) {
    console.log(i);
    document.write(`${i} <br>`);
};
*/

/*
// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

for (let i=2; i<100; i=i+2) {
    console.log(i);
    document.write(`${i} <br>`);
};*/

/*// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i<100; i=i+2) {
    console.log(i);
    document.write(`${i} <br>`);
};*/

/*
// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
for (let i=1; i<100; i=i+2) {
    console.log(i);
    document.write(`${i} <br>`);
};*/

/*
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for ( let i=0; i<2; i++){
    for (let j = 0; j < 60; j++) {
        console.log(i+":",""+j);
    }
};*/

/*
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let i=0; i<2; i++){
    for ( let j=0; j<20; j++){
        for (let k = 0; k <60; k++) {
             console.log(i+":"+j+":"+k);
        }
    }
};*/


// Додатково
/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let ar1=[ 'a', 'b', 'c'];
let word="";
for (let i = 0; i < ar1.length; i++) {
    word=word+ar1[i];
}
console.log(word);*/

/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let ar1=[ 'a', 'b', 'c'];
let word="";
let i = 0;
  while (i<ar1.length){
      word=word+ar1[i];
      i++
  };
console.log(word);*/

/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let ar1=[ 'a', 'b', 'c'];
let word="";
for (let i of ar1){
    word=word+[i];
};
console.log(word);*/

/*// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let ar1=[ 'a', 'b', 'c'];
let word="";
for (let i of ar1){
    word=word+[i];
};
console.log(word);*/


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
/*//     1. перебрати його циклом while
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while (i<arr.length){
    console.log(arr[i]);
    i++;
};*/

/*
//     2. перебрати його циклом for
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let z of arr){
    console.log(z);
};
*/

/*//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=1;
while (i<arr.length){
    console.log(arr[i]);
    i=i+2;
};*/

/*// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 1; i < arr.length; i=i+2) {
    console.log(arr[i]);
   };*/

/*// 5. перебрати циклом while та вивести  числа тільки парні  значення
let arr=[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while (i<arr.length){
    if (arr[i] % 2==0) {
        console.log(arr[i]);
    }
    i++;
};*/

/*// 6. перебрати циклом for та вивести  числа тільки парні  значення
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2==0){
        console.log(arr[i]);
    }
};*/

/*// 7. замінити кожне число кратне 3 на слово "okten"
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3==0){
        arr[i]="okten";
    }
};
console.log(arr);*/

/*// 8. вивести масив в зворотньому порядку.
let arr=[2,17,13,6,22,31,45,66,100,-18];
console.log(arr.reverse());*/


// !! 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/*//     1. перебрати його циклом while
let arr=[2,17,13,6,22,31,45,66,100,-18];
i=9;
while (arr.length>i){
    console.log(arr[i]);
    if (i>0) {
        i--;
    } else  break;
};*/
/*
//     2. перебрати його циклом for
let arr=[2,17,13,6,22,31,45,66,100,-18];
for (let z of arr.reverse()){
    console.log(z);
};
*/
/*//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arr=[2,17,13,6,22,31,45,66,100,-18];
let arr1=arr.reverse();
let i=1;
while (i<arr1.length){
    console.log(arr1[i]);
    i=i+2;
};*/
/*//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr=[2,17,13,6,22,31,45,66,100,-18];
let arr1=arr.reverse();
for (let i = 1; i < arr1.length; i=i+2) {
    console.log(arr1[i]);
   };*/
/*//     5. перебрати циклом while та вивести  числа тільки парні  значення
let arr=[2,17,13,6,22,31,45,66,100,-18];
let arr1=arr.reverse();
let i=0;
while (i<arr1.length){
    if (arr1[i] % 2==0) {
        console.log(arr1[i]);
    }
    i++;
};*/
/*//     6. перебрати циклом for та вивести  числа тільки парні  значення
let arr=[2,17,13,6,22,31,45,66,100,-18];
let arr1=arr.reverse();
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2==0){
        console.log(arr1[i]);
    }
};*/
/*// 7. замінити кожне число кратне 3 на слово "okten"
let arr=[2,17,13,6,22,31,45,66,100,-18];
let arr1=arr.reverse();
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 3==0){
        arr1[i]="okten";
    }
};
console.log(arr1);*/

// 10
// створити пустий масив та :
/*//     - заповнити його 50 парними числами за допомоги циклу.
let arr =[];
for (let i = 0; i < 50; i=i+2) {
    arr.push(i);
    console.log(arr);
}*/
/*// - заповнити його 50 непарними числами за допомоги циклу.
let arr =[];
for (let i = 1; i < 50; i=i+2) {
    arr.push(i);
    console.log(arr);
};*/
