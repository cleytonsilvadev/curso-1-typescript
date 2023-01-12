var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "assistir fark de novo",
    description: "relembrar os detalhes",
    completed: false
};
console.log(todo);
todo.completed = true;
console.log(todo);
var todo1 = {
    title: "assistir fark de novo",
    description: "relembrar os detalhes",
    completed: false
};
console.log(todo1);
todo.completed = true;
console.log(todo1);
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "fechar ghost od tsushima",
    completed: false
};
var todo4 = {
    title: "fechar ghost od tsushima",
    completed: false
};
