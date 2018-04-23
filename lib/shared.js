"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
function StrictEqualityComparer(x, y) {
    return x === y;
}
exports.StrictEqualityComparer = StrictEqualityComparer;
function EqualityComparer(x, y) {
    return x == y;
}
exports.EqualityComparer = EqualityComparer;
function StringifyComparer(x, y) {
    return JSON.stringify(x) === JSON.stringify(y);
}
exports.StringifyComparer = StringifyComparer;
function NumberComparer(x, y) {
    return x - y;
}
exports.NumberComparer = NumberComparer;
function AsTuple(first, second) {
    return { first: first, second: second };
}
exports.AsTuple = AsTuple;
exports.ErrorString = Object.freeze({
    MoreThanOneElement: "Sequence contains more than one element",
    NoElements: "Sequence contains more than one element",
    NoMatch: "No matching element found",
});
var InvalidOperationException = (function (_super) {
    __extends(InvalidOperationException, _super);
    function InvalidOperationException(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "InvalidOperationException";
        _this.stack = _this.stack || (new Error()).stack;
        return _this;
    }
    return InvalidOperationException;
}(Error));
exports.InvalidOperationException = InvalidOperationException;
var ArgumentOutOfRangeException = (function (_super) {
    __extends(ArgumentOutOfRangeException, _super);
    function ArgumentOutOfRangeException(paramName) {
        var _this = _super.call(this, "Argument " + paramName + " is out of range") || this;
        _this.paramName = paramName;
        _this.name = "ArgumentOutOfRangeException";
        _this.stack = _this.stack || (new Error()).stack;
        return _this;
    }
    return ArgumentOutOfRangeException;
}(RangeError));
exports.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
function toiterator(source) {
    var source_1, source_1_1, value, e_1_1, e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                source_1 = __values(source), source_1_1 = source_1.next();
                _b.label = 1;
            case 1:
                if (!!source_1_1.done) return [3, 4];
                value = source_1_1.value;
                return [4, value];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                source_1_1 = source_1.next();
                return [3, 1];
            case 4: return [3, 7];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3, 7];
            case 6:
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7];
            case 7: return [2];
        }
    });
}
exports.toiterator = toiterator;
