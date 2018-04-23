"use strict";
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
var sync_1 = require("./sync");
function bindLinq(object) {
    var propertyNames = Object.getOwnPropertyNames(sync_1.BaseEnumerable.prototype)
        .filter(function (v) { return v !== "constructor"; });
    try {
        for (var propertyNames_1 = __values(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
            var prop = propertyNames_1_1.value;
            object.prototype[prop] = object.prototype[prop] || sync_1.BaseEnumerable.prototype[prop];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var e_1, _a;
}
exports.bindLinq = bindLinq;
function bindArray(object) {
    var propertyNames = Object.getOwnPropertyNames(sync_1.ArrayEnumerable.prototype)
        .filter(function (v) { return v !== "constructor"; });
    try {
        for (var propertyNames_2 = __values(propertyNames), propertyNames_2_1 = propertyNames_2.next(); !propertyNames_2_1.done; propertyNames_2_1 = propertyNames_2.next()) {
            var prop = propertyNames_2_1.value;
            object.prototype[prop] = object.prototype[prop] || sync_1.ArrayEnumerable.prototype[prop];
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (propertyNames_2_1 && !propertyNames_2_1.done && (_a = propertyNames_2.return)) _a.call(propertyNames_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var e_2, _a;
}
exports.bindArray = bindArray;
function initializeLinq() {
    bindArray(Array);
    bindLinq(Map);
    bindLinq(Set);
    bindLinq(String);
    bindArray(Int8Array);
    bindArray(Int16Array);
    bindArray(Int32Array);
    bindArray(Uint8Array);
    bindArray(Uint8ClampedArray);
    bindArray(Uint16Array);
    bindArray(Uint32Array);
    bindArray(Float32Array);
    bindArray(Float64Array);
}
exports.initializeLinq = initializeLinq;
