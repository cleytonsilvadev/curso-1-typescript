//accountInfo
//charInfo
//playInfo

type accountInfo={
    id:number|string;
    name: string;
    email?: string;
}

const account : accountInfo ={
    id : 123,
    name:"wilian"

}

type charInfo={
    nickname:string;
    level: number;

}
const char : charInfo={
    nickname: "cleytin",
    level: 100
}

type playerInfo= accountInfo & charInfo;

const  player: playerInfo={
    nickname:"wilian",
    name: "cleytin",
    id:"123",
    level:100,
}