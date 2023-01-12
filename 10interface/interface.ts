interface Game{
    title:string;
    description: string;
    readonly genre:string;
    plataform?: string[];
    getSimilars?:(title:string)=>void;
}

const tlou:Game={
    title:"the last of us",
    description:"the best game in the world",
    genre:"action",
    plataform: ["ps3","ps4"],
    getSimilars(title:string) {
        console.log(`similar games to ${title}: uncharted, a plague tales, metro`)
    },


};


console.log(tlou.genre)

if(tlou.getSimilars){
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game{
    originalGame:Game;
    newcontent: string[];
}
const lestbehind: DLC={
    title:"THE LAST OF US- LEFT BEHIND",
    description:"you play as ellie before the original game",
    genre:"action",
    plataform:["ps4"],
    originalGame:tlou,
    newcontent:["3 hours story","new characters"],
};

class createGame implements Game{
    title:string;
    description: string;
    genre:string;
    constructor(t:string,d:string,g:string){
        this.title=t;
        this.description=d;
        this.genre=g;
    }
};








// tsc title.ts --watch
//nodemon  title.ts