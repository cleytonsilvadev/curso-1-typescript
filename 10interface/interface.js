var tlou = {
    title: "the last of us",
    description: "the best game in the world",
    genre: "action",
    plataform: ["ps3", "ps4"],
    getSimilars: function (title) {
        console.log("similar games to ".concat(title, ": uncharted, a plague tales, metro"));
    }
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var lestbehind = {
    title: "THE LAST OF US- LEFT BEHIND",
    description: "you play as ellie before the original game",
    genre: "action",
    plataform: ["ps4"],
    originalGame: tlou,
    newcontent: ["3 hours story", "new characters"]
};
var createGame = /** @class */ (function () {
    function createGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return createGame;
}());
;
// tsc title.ts --watch
//nodemon  title.ts
