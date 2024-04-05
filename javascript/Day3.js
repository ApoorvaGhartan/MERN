// console.log(message)
// var message="hello";
// var age=18;
// console.log(message)
// console.log(age)
// function call(){
// for(var i=0;i<5;i++){
//     console.log(i)
// }
// console.log(i)



//     console.log(message)
// var message="hello";
// var age=18;
// console.log(message)
// console.log(age)

// }
// call()

// function call(){
//     let message= "hello";
//     console.log(message);
// }
// call()


// var age=10;
// console.log(typeof(age))


// let arr=['a','b','c','d','e','f']
// arr[0]='abcd'
// console.log(arr)

// let str='12a';
// let p =parseInt(str);
// let n=Number(str);
// console.log(p,n)

// let a=12;
// let b='12';
// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('No')
// }
// if(a===b){
//     console.log('yes');
// }
// else{
//     console.log('No')
// }


// const str= 'Apoorva';
// const usrName =`My name is : ${str}`;
// console.log(usrName);



// function print(x){
//     console.log(x);
// }
// print('Hello');


//functon declaration
function print(){
    console.log('--');
}
// function assignment(named)
const a=function print(){
    console.log('--');
}
// function assingment(anonymous)
const b =function(){
    console.log('--');
}
print();
a();
b();


let c=2;
switch(c){
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('Two'); 
        break;  
     case 3:
        console.log('Three'); 
        break;
     default:
        console.log('non of them is selected')         
}

const obj = new Object();
obj[1]='one';
obj['name']='Apoorva';
obj[3]='Three'
console.log(obj);

const obj1 ={
    1:'one',
    'name':'Apoorva',
    2:'Three'
}
console.log(obj1)


const val=prompt('enter the value');
console.log(obj[val])
