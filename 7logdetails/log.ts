//type alias

type Uid =number | string

function logDetails(uid:Uid ,item: string){
    console.log(`a product with ${uid} has a title as ${item}.`)
}
function logInfo(uid:Uid ,item: string){
    console.log(`an user with ${uid} has a name as ${item}.`)
}
type Plataform ='windows'|'linux'|'ios'

function renderPlataform(Plataform:Plataform){
    return Plataform
}
renderPlataform('ios');

logDetails(123,"sapato");
logDetails("123","sapato");

logInfo(123,"willian");
logInfo("123","sapato");