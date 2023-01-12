//S=>State
//T=>TYPE
//K=>KEY
//V=>VALUE
//E=>Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState(456); //number
console.log(newState.getState());
//newState.setState("456");//da erro
//console.log(newState.getState());
