//boolean
let isOpen: boolean
isOpen=true

//string
let message:string
message= `foo ${isOpen}`

//number

let total:number
total= 0xff0

//Array

let items: string[]
items=["FOO","BAR"]

let values: Array<number>
values = [1,2,3]

//tuple
let title:[number, string, string]

title=[1,"foo","BAR"]

//enum
enum colors {
    white ="#fff",
    black ="#000",
}

// any "nao e legal"

let coisa: any;
coisa = [1];

//void

function logger():void{
console.log('foo')
}

//null | undefined
type Bla = string|undefined

//never
function error(): never {
throw new Error("ERROR");
}

//Object
let cart: object;
cart={
    key:"fi"
}

//type inference

let message2="mensagem definida"
message2="string nova"

window.addEventListener("click",(e)=>{
    console.log(e.target);
});
