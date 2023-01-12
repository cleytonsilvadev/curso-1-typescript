//S=>State
//T=>TYPE
//K=>KEY
//V=>VALUE
//E=>Element

type numorstr= number|string;

function useState<S extends  string|number= number>() {
    let state:S;

function getState(){
    return state;
}
function setState(newState:S){
    state=newState;
}
return{getState,setState};
}

const newState =useState<number>();
newState.setState(456);//number
console.log(newState.getState());
//newState.setState("456");//da erro
//console.log(newState.getState());