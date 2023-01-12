type Todo={
    title:string,
    description:string,
    completed:boolean,

};

const todo:Todo={
    title:"assistir fark de novo",
    description:"relembrar os detalhes",
    completed:false,
};
console.log(todo);

todo.completed=true;
console.log(todo);

//readonly
type Todo1={
    title:string,
    description:string,
    completed:boolean,

};

const todo1: Readonly<Todo1>={
    title:"assistir fark de novo",
    description:"relembrar os detalhes",
    completed:false,
};
console.log(todo1);

todo.completed=true;

console.log(todo1);

function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>){
    return{...todo,...fieldsToUpdate}
}


const todo2:Todo=updateTodo(todo, {completed:true})
console.log(todo2)

//pick
type TodoPreview = Pick<Todo,"title" | "completed">
const todo3:TodoPreview={
    title:"fechar ghost od tsushima",
    completed:false
}

//omit
type TodoPreview2=Omit<Todo,"description">
const todo4:TodoPreview={
    title:"fechar ghost od tsushima",
    completed:false
}