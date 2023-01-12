var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var useraccount = /** @class */ (function () {
    function useraccount(name, age) {
        this.name = name;
        this.age = age;
    }
    useraccount.prototype.logDetails = function () {
        console.log("the player ".concat(this.name, " is ").concat(this.age, " years old"));
    };
    return useraccount;
}());
var characconunt = /** @class */ (function (_super) {
    __extends(characconunt, _super);
    function characconunt(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(characconunt.prototype, "getLevel", {
        get: function () {
            console.log("------get-----");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(characconunt.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    characconunt.prototype.logcharDetails = function () {
        console.log("the player ".concat(this.name, " has the char ").concat(this.nickname, " at level ").concat(this.level));
    };
    return characconunt;
}(useraccount));
//const will =new useraccount("cleytin", 26);
//console.log(will);
//console.log(will.age);
//will.logDetails();
var john = new characconunt("john", 45, "johnmaster", 80);
//john.nickname="willmaster"; nao se le fora da class
console.log(john);
console.log(john.level);
john.logDetails();
john.logcharDetails();
john.setLevel = 499;
console.log(john.getLevel);
