/*
//@component
//@selector
//@useState("dasda")

function log(){

}

class Foo{

}

                        //class decorator

                         //factory
function Logger(prefix:string){
return(target: any)=>{

    console.log(`${prefix}-${target}`)
};
}
@Logger("awesome")
class Foo1{

}

function setAPIVersion(apiVersion:string){
    return(constructor: any)=>{
   return class extends constructor {
    version= apiVersion
   }
}}
//decorator-acotar a versao da api
@setAPIVersion("1.0.0")
class API{}
console.log(new API());
*/
//property decorator
/* function minLenght(length:number){
    return(target:any,key:string)=>{
        console.log(target);
        console.log(key);
    };
}

function minLength(length:number){
    return(target:any,key:string)=>{
        let val =target[key]
        const getter=()=>val;
        const setter = (value:string)=>{
            if(value.length<length){
                console.log(`error: voce nao pode criar ${key} com tamanho menor que ${length}`)
            }else{
                val=value
        }

        };
    Object.defineProperty(target,key,{get:getter,set:setter})
    };
}
class Movie{
    //validação - se for menor que 5 -erro
    @minLength(5)
    title:string;
    
    constructor(t:string){
        this.title=t
    }
}

const movie = new Movie("interstellar")
console.log(movie.title)


//method decorator
function delay(ms:number){
    return(target:any,key:string,description:PropertyDescriptor){
        const originalMethod= description.value;
        description.value=(...args)=>{
            console.log(`esperando ${ms}...`);
            setTimeout(()=>{
                originalMethod.apply(this,args)
            },ms);
            return description
        }
    };
}

class greeter{
    greeting:string;
    constructor(g:string){
        this.greeting=g
    }
    //espera
    @delay(1000)
    greet(){
        console.log(`hello! ${this.greeting}`)
    }
}

const pessoinha= new greeter("pessoinha");
pessoinha.greet();



//parameter decorator
//acessor  decorator

*/ 
