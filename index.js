console.log("Hello, world!");//告訴瀏覽器我要輸出一段內容
0.5
1
;("字串")
;("可以隨便打")
true
false

// let a = 10
// let b = 20
// let temp = a // 暫存a值10
// a = b // a變成20
// b = temp // b變成10
// 交換a和b的值
//console.log(a, b)

// == != && || > < 邏輯運算子
//let a = 10;
//let b = 20;
//console.log(a == b); // false
//console.log(a != b); // true
//console.log(a == 10 && b == 20); // true
//console.log(a >= 10 && b <= 30); // true
//console.log(a == 10 || b == 30); // true只要其中一個是對的就是對的

//console.log(1 + 2);
//console.log(2 - 1);
//console.log(1 * 2);
//console.log(6 / 2);
//console.log(7 % 4); // 取餘數
//console.log(2 ** 2); // 2的2次方

// if (a == 10) {
//   console.log("a is 10");
// }else if (a == 11) {
//   console.log("a is 11");
// }else if (a == 15) {
//   console.log("a is 15");
// }
// else {
//   console.log("a is not equal 10 or 15");
// }

//迴圈
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }//i--的話會跳不出迴圈，電腦就會當機
//   console.log("loop is end");// 迴圈結束

//方法
// let double = function (num) {
//   return num * 2;
// }
// let c = double(5);
// console.log(c); // 10

//let sum = 0;
//for (let i = 1; i <= 100; i++) {sum=sum + i;}
//console.log(sum); // 5050

// window.onload=function(){
//     console.log (document.querySelector("#year"))
//     document.querySelector("#year").addEventListener("click", function() {
//         const year = parseInt(document.querySelector("#year").value)
//         //該年份是400的倍數，或是4的倍數，但不可能是100的倍數
//         let result
//         if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//             result = "是閏年"
//         } else {
//             result = "不是閏年"
//         }
//         console.log(year)
//         document.querySelector("#answer").innerHTML =result
//     })
// }

// const isTriangle = function(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         return true
//     } else {
//         return false
//     }
// }
// //三角形特性，兩邊相加大於第三邊
// console.log(isTriangle(1,2,3))//false
// console.log(isTriangle(3,4,5))//true


// const countBMI= function(height, weight) {
//     return weight / (height * height)
// }
// let bmi= countBMI(1.6, 60)
// console.log(bmi) // 22.86
// console.log(countBMI(1.6, 60)) // 22.86

//判斷式大小函式
// const whichIsBig = function(a, b) {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(whichIsBig(07, 22)) 

//請用for迴圈做一個九九乘法表
for (let i = 1; i < 10; i++) {
    //console.log("i=",i);
    for (let j = 1; j < 10; j++) {
        //console.log("j=",j);
        //console.log("ixj=",i*j);

        console.log(i +"*"+ j +"="+ i*j );
        console.log("i=", i, ",j=", j, ",i*j=", i * j);
    }
    
    console.log(" \n");//J已經從1~9跑完了 換行符號給他
}// i從1到9

  console.log("loop is end");// 迴圈結束
//成績判斷
//95-100return "A+"
//90-94 return "A"
//80-89 return "B"
//70 -79 return "C"
//60-69 return "D"
const checkscore = function(score) {}
