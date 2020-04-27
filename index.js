// YDKJS Up & Going

/*

//there is comment here
console.log('hello world');
let x = 5;
console.log(x);
x = 'hello world 2';
console.log(x);
let y = 'mosh';
console.log(y);
let u , z , w;
u = 123;
z = 'string';
w = true;
console.log(u);
console.log(z);
console.log(w);
let interprise = "Water bottle";
console.log(interprise);
let e = "i'm love with shape of you";
console.log(e);
e = 5;
console.log(e);
let x1 = "hello world";
let x2 = 2;
let x3 = 2.2;
let x4 = true;
let x5 = undefined;
let x6 = null;
console.log("x1 = "+x1);
console.log("x2 = "+x2);
console.log("x3 = "+x3);
console.log("x4 = "+x4);
console.log("x5 = "+x5);
console.log("x6 = "+x6);
typeof x1
typeof x2
typeof x3
typeof x4
typeof x5
typeof x6
let person = {
    name : "Sam",
    age : 25,
    country : "Egypt",
    language : "Arabic",
    married : false,
    x : {
        x1 : 1,
        x2 : "2",
    }
};
console.log(person);
console.log(person.age);
console.log(person.name);
person.name = "Islam";
console.log(person.name);
person[name] = 'Carl';
console.log(person[name]);
let LOC = [1,"m",true];
console.log(LOC);
console.log('Array[0] = '+LOC[0]);
console.log('Array[1] = '+LOC[1]);
console.log('Array[2] = '+LOC[2]);
LOC[0] = 5;
LOC[1] = 6;
LOC[2] = undefined;
console.log('after changing :');
console.log('Array[0] = '+LOC[0]);
console.log('Array[1] = '+LOC[1]);
console.log('Array[2] = '+LOC[2]);
console.log('Array[0] = '+LOC[0]);
console.log('Array[1] = '+LOC[1]);
console.log('Length = '+LOC.length);
LOC[9] = 9;
console.log('Length = '+LOC.length);
console.log('Array[5] = '+LOC[5]);
let object ={
    num : 1,
    str : 'ana',
    nu: null
};
console.log(object);
object.num = 10;
console.log("the first thing in object = "+object.num);
function square(num){
    console.log('Square of number '+num+' = '+num * num);
}
square(5);
console.log("hello osama");
function r(x , y){
    for(let i =0;i<y;i++)
        console.log('.'+x+'.');
}
r('sam',9);
let b;
b * 2 ;
function TotalAmountOfPhone(BankAccountBalance){
    const TaxRate = 0.08;
    const PhonePrice = 322;
    const AccessoryPrice = 20;
    let total = PhonePrice + (PhonePrice * TaxRate) + AccessoryPrice;
    if(BankAccountBalance >= total){
        console.log('Total price of phone = $'+total);
        BankAccountBalance = BankAccountBalance - total;
    }
    else console.log("error: you don't have enough money");
}
let a = ["hello world!",1,2,3,4,5,6,7,8,9,false,null,undefined,];


do{
    console.log("Sam Goher");
} while(false);



(
    function home(){
        let names = ['Mohamed','Eman','Islam','Abd El-rahman','Ahmed','Yousef','Alaa'];
        for(let i = 0;i<=6;i++){
            console.log((i+1)+"st person's name: "+names[i]);
        }
    }
)();


let x = (
            function loo(){
                return 10;
            }
        )();
console.log("X = "+x);







//    Closure

function first(x){
    function second(y){
        return x + y;
    }
    return second;
}

let x1 = first(1);
let x10 = first(10);
console.log(x1(1));    // 2  <-- 1  + 1
console.log(x10(1));   // 11 <-- 10 + 1







function a50(x,y,z,a,b,c){
    return 0;
}
a50.length;




//    Scope 1


let x;
x = 5;
function t(){
    x = 6;
    console.log(x);
}
console.log(x);
t();



//    Scope 2

let x;
x = 5;
function t(){
    x = 6;
    console.log(x);
}
t();
console.log(x);

const OtherString = new String('Hello world');

*/

// YDKJS Scope & Closures

// Eval()

/*
function foo(str, a){
    eval(str);
    console.log(a, b);
}
foo(`var b = 19;`, 10);
*/

