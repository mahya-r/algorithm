//(1)

// let a = 4;
// let b = 9;
// let c = 2;
// let d = 1;

// if(a > c + d){
//     console.log(a*c);
    
// }
// else{
//     console.log(b*d);
    
// }


//(2)

// for(let i = 0 ; i <= 1000 ;i+=2){
//     console.log(i);
    
// }


//(3)

// let sum = 0;
// for(let i = 0; i<= 900; i+=9){
//        sum+=i
    
// }console.log(sum);


//(4)

// let n = 20;
// let sum = 0;
// for(let i = 3; i <= n;i+=3){
//   let p = 1/i;
//   sum +=p
  
// }

// console.log("majmo adad : " , sum );

// let x = 2;
// let n = 4;
// let sum = 0;
// for(let i = 1; i<=n ;i++){
//     let s = x ** i ;
//     sum += s;
// }
// console.log(1 + sum);



// let n = 10;
// let sum = 0;

// for(let i = 1; i<=n ;i++){
//     let u =i*(i - 1);
//     sum += u

// }
// console.log(sum);


//(5)

// let income = 5000;

// if(income < 50000){
//     console.log("moaf");
// }
// else if(income > 50000 && income < 100000){
//     console.log((income * 10)/100);

// }
// else if (income > 100000){
//     console.log((income * 15)/100);

// }



// (6)


// let n =50;
// let replace = n;
// let sum = 0;
// while (n != 0)
//     {
//        let remain = n % 10;
//         n = Math.floor(n/10);
//         sum += remain; 
//     }
//     if(replace % sum === 0 ){
//          console.log("ok");
//     }
//     else {
//         console.log("not ok");
        
//     }



// (7)

// function count(start, end) {
//     let result = [];
// 	for (let i = start + 1; i < end; i++) {
//         if (i % 3 === 0) {
//             result.push(i);
//         }
// 	}
// 	return result;
// }
// let result = count(6, 30);

// console.log(result);


// (8)

// function base3ToBase10(base3Number){

// const base3String = base3Number.tostring();

// let base10Number = 0;
// for(let i = 0; i < base3String.length; i++){
//     const digit = parseInt(base3String[base3String.length - 1 - i],10);
//     if(digit >= 3){
//         throw new Error("مبنای سه نیست");
//     }
//     base10Number += digit * Math.pow(3,i);
// }
// return base10Number;
// }
// console.log(base3ToBase10("1021"));
// console.log(base3ToBase10("210"));



// (9)

// for (let i = 10; i < 100; i++) {
//     let a = Math.floor(i / 10);
//     let b = i % 10;
    
//     if (a == b) { 
//         console.log(i);
//     }
// }

// (10)

// for (var i = 2; i <= 1000; i++) {

//     var notPrime = false;
//     for (var j = 2; j <= i; j++) {
//         if (i % j === 0 && j !== i) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//         console.log(i);
//     }
// }

// (11)


// let n = 40;
// let sum = 0;
// for( let i = 4;i < n; i+=4){
// let result = n / i;
//     sum += result;
// }
// console.log(Math.floor(sum + 4));



// (12)







// const myArr = [];
// for(let i = 1 ; i <= 1000;i++){
//   myArr.push(i);
// }

// function binarySearch(myArr, val) {
//   let start = 0;
//   let end = myArr.length - 1;

//   while (start <= end) {
//       let mid = Math.floor((start + end) / 2);

//       if (myArr[mid] === val) {
//           return mid; 
//       }

//       if (val < myArr[mid]) {
//           end = mid - 1; 
//       } else {
//           start = mid + 1;
//       }
//   }
//   return -1; 
// }



// const randomNum = 752;
// const result = binarySearch(myArr, randomNum);

// if (result === -1) {
//   console.log(randomNum , "not exist");
// } else {
//   console.log(randomNum , "founded in " , `${result}th` , "index");
// }



// // (13)

// let x = 2;
// let y = 3;


// x += y; 
// y = x - y; 
// x -= y; 
// console.log(x , y);


// ---------------------------------


// (14)


// const person = [{
//     name: "mahdi",
//     fund: 100 ,
//     attemptGet: 3,
//     attemptTranfer: 4,
//     getCost:10,
//     transferCost:15
// }]

// person.map(item => {
//     let get = item.attemptGet * item.getCost;
//     let out = item.attemptTranfer * item.transferCost;
//     let cash = (get - out)+item.fund;
//     console.log(cash);
    
    
// })





// (15)

// const member = [
//     { name: "mahdi", id: 1, diplomaId: 0, age: 20, majorId: 22, genderId: 1 },
//     { name: "ali", id: 2, diplomaId: 2, age: 15, majorId: 24, genderId: 1 },
//     { name: "sara", id: 3, diplomaId: 1, age: 34, majorId: 23, genderId: 2 },
//     { name: "rosa", id: 4, diplomaId: 2, age: 17, majorId: 24, genderId: 2 },

// ]







// 1


// const print = []
// for(let element of member){
//     if(element.majorId === 24 && element.genderId == 1){
//         print.push({name: element.name , majorId: element.majorId})
//     }
// }
// console.log("number of students: " , print.length);
// console.log(print);




// 2 

// const print = [];
// for(let element of member){
    

//     if (element.age < 18) {
//         print.push({name: element.name , age: element.age})  
        
//     }
// }
// console.log("number of students: " , print.length);
// console.log(print);



// 3

// const print = []
// for(let element of member){
//     if(element.majorId === 24){
//         print.push({name: element.name , majorId: element.majorId})
//     }
// }
// console.log("precent of students: " , (print.length / member.length)*100 ,"%");





// (16)

// const city = [
//     { shopId: 1 , sell: 25000},
//     { shopId: 2 , sell: 80000},
//     { shopId: 3 , sell: 78000},
//     { shopId: 4 , sell: 10000},

// ]
// let salary;

// city.map(item => {

//     if(item.sell*12 <= 500000){
//         salary = 3 * (item.sell * 12) /100;
//     }
//     else if(item.sell*12 > 500000 || year <= 700000){
//         salary = 5 * (item.sell * 12) /100;

//     }    
//     console.log("shopId : " , item.shopId , "annual income : " , item.sell*12 , "sellers income : " , salary);
    
// })








// just last part of q (max) remain 





//(17)





//(18)




//19



// const number = 4330540;
// const digits = number.toString().split('');
// let evenNum = 0;
// let oddNum = 0;
// let zeroCount = 0;

// digits.map(digit => {
//     const num = parseInt(digit);
//     if (num === 0) {
//         zeroCount++;
//     } else if (num % 2 === 0) {
//         evenNum++;
//     } else {
//         oddNum++;
//     }
// });

// console.log("zoj : " , evenNum);
// console.log("fard : " , oddNum);
// console.log("sefr : " , zeroCount);



//(20)

// function generateNumbers() {
//     const results = [];
    
//     for (let i = 1000; i < 10000; i++) {
//         const ones = i % 10; // رقم یکان
//         const tens = Math.floor(i / 10) % 10; // رقم دهگان
//         const hundreds = Math.floor(i / 100) % 10; // رقم صدگان
//         const thousands = Math.floor(i / 1000); // رقم هزارگان

//         // بررسی شرایط
//         if (ones % 2 === 0 && tens % 2 !== 0 && hundreds % 2 !== 0 && thousands % 2 !== 0) {
//             results.push(i);
//         }
//     }

//     return results;
// }

// const validNumbers = generateNumbers();
// console.log(validNumbers);

