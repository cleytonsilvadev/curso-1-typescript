abstract class useraccount{
    name: string;
    age: number;


constructor(name:string, age:number){
    this.name= name;
    this.age= age;
}
logDetails():void{
    console.log(`the player ${this.name} is ${this.age} years old`)
}
}


class characconunt extends useraccount{
private nickname:string;
//readonly
level :number;
    constructor(name:string,age:number, nickname:string,level: number){
        super(name,age);
        this.nickname= nickname;
        this.level= level;
    }

    get getLevel(){
        console.log("------get-----");
        return this.level;
    }
    
    set setLevel(level:number){
        this.level= level
    }

    logcharDetails():void{
        console.log(`the player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
}

//const will =new useraccount("cleytin", 26);
//console.log(will);
//console.log(will.age);
//will.logDetails();

const john= new characconunt("john",45,"johnmaster",80);
//john.nickname="willmaster"; nao se le fora da class

console.log(john)
console.log(john.level)
john.logDetails();
john.logcharDetails();

john.setLevel= 499;
console.log(john.getLevel)