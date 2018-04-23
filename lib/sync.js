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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var Enumerable = (function () {
    function Enumerable() {
    }
    Enumerable.aggregate = function (source, seedOrFunc, func, resultSelector) {
        if (resultSelector) {
            if (!func) {
                throw new ReferenceError("TAccumulate function is undefined");
            }
            return Enumerable.aggregate_3(source, seedOrFunc, func, resultSelector);
        }
        else if (func) {
            return Enumerable.aggregate_2(source, seedOrFunc, func);
        }
        else {
            return Enumerable.aggregate_1(source, seedOrFunc);
        }
    };
    Enumerable.aggregate_1 = function (source, func) {
        var aggregateValue;
        try {
            for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                var value = source_1_1.value;
                if (aggregateValue) {
                    aggregateValue = func(aggregateValue, value);
                }
                else {
                    aggregateValue = value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (aggregateValue === undefined) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return aggregateValue;
        var e_1, _a;
    };
    Enumerable.aggregate_2 = function (source, seed, func) {
        var aggregateValue = seed;
        try {
            for (var source_2 = __values(source), source_2_1 = source_2.next(); !source_2_1.done; source_2_1 = source_2.next()) {
                var value = source_2_1.value;
                aggregateValue = func(aggregateValue, value);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (source_2_1 && !source_2_1.done && (_a = source_2.return)) _a.call(source_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return aggregateValue;
        var e_2, _a;
    };
    Enumerable.aggregate_3 = function (source, seed, func, resultSelector) {
        var aggregateValue = seed;
        try {
            for (var source_3 = __values(source), source_3_1 = source_3.next(); !source_3_1.done; source_3_1 = source_3.next()) {
                var value = source_3_1.value;
                aggregateValue = func(aggregateValue, value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (source_3_1 && !source_3_1.done && (_a = source_3.return)) _a.call(source_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return resultSelector(aggregateValue);
        var e_3, _a;
    };
    Enumerable.all = function (source, predicate) {
        try {
            for (var source_4 = __values(source), source_4_1 = source_4.next(); !source_4_1.done; source_4_1 = source_4.next()) {
                var item = source_4_1.value;
                if (predicate(item) === false) {
                    return false;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (source_4_1 && !source_4_1.done && (_a = source_4.return)) _a.call(source_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return true;
        var e_4, _a;
    };
    Enumerable.any = function (source, predicate) {
        if (predicate) {
            return Enumerable.any_2(source, predicate);
        }
        else {
            return Enumerable.any_1(source);
        }
    };
    Enumerable.any_1 = function (source) {
        try {
            for (var source_5 = __values(source), source_5_1 = source_5.next(); !source_5_1.done; source_5_1 = source_5.next()) {
                var _ = source_5_1.value;
                return true;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (source_5_1 && !source_5_1.done && (_a = source_5.return)) _a.call(source_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return false;
        var e_5, _a;
    };
    Enumerable.any_2 = function (source, predicate) {
        try {
            for (var source_6 = __values(source), source_6_1 = source_6.next(); !source_6_1.done; source_6_1 = source_6.next()) {
                var item = source_6_1.value;
                if (predicate(item) === true) {
                    return true;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (source_6_1 && !source_6_1.done && (_a = source_6.return)) _a.call(source_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return false;
        var e_6, _a;
    };
    Enumerable.average = function (source, selector) {
        if (selector) {
            return Enumerable.average_2(source, selector);
        }
        else {
            return Enumerable.average_1(source);
        }
    };
    Enumerable.average_1 = function (source) {
        var value;
        var count;
        try {
            for (var source_7 = __values(source), source_7_1 = source_7.next(); !source_7_1.done; source_7_1 = source_7.next()) {
                var item = source_7_1.value;
                value = (value || 0) + item;
                count = (count || 0) + 1;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (source_7_1 && !source_7_1.done && (_a = source_7.return)) _a.call(source_7);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (value === undefined) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return value / count;
        var e_7, _a;
    };
    Enumerable.average_2 = function (source, func) {
        var value;
        var count;
        try {
            for (var source_8 = __values(source), source_8_1 = source_8.next(); !source_8_1.done; source_8_1 = source_8.next()) {
                var item = source_8_1.value;
                value = (value || 0) + func(item);
                count = (count || 0) + 1;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (source_8_1 && !source_8_1.done && (_a = source_8.return)) _a.call(source_8);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (value === undefined) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return value / count;
        var e_8, _a;
    };
    Enumerable.concat = function (first, second) {
        function iterator() {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [5, __values(first)];
                    case 1:
                        _a.sent();
                        return [5, __values(second)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.contains = function (source, value, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        try {
            for (var source_9 = __values(source), source_9_1 = source_9.next(); !source_9_1.done; source_9_1 = source_9.next()) {
                var item = source_9_1.value;
                if (comparer(value, item)) {
                    return true;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (source_9_1 && !source_9_1.done && (_a = source_9.return)) _a.call(source_9);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return false;
        var e_9, _a;
    };
    Enumerable.count = function (source, predicate) {
        if (predicate) {
            return Enumerable.count_2(source, predicate);
        }
        else {
            return Enumerable.count_1(source);
        }
    };
    Enumerable.count_1 = function (source) {
        var count = 0;
        try {
            for (var source_10 = __values(source), source_10_1 = source_10.next(); !source_10_1.done; source_10_1 = source_10.next()) {
                var _ = source_10_1.value;
                count++;
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (source_10_1 && !source_10_1.done && (_a = source_10.return)) _a.call(source_10);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return count;
        var e_10, _a;
    };
    Enumerable.count_2 = function (source, predicate) {
        var count = 0;
        try {
            for (var source_11 = __values(source), source_11_1 = source_11.next(); !source_11_1.done; source_11_1 = source_11.next()) {
                var value = source_11_1.value;
                if (predicate(value) === true) {
                    count++;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (source_11_1 && !source_11_1.done && (_a = source_11.return)) _a.call(source_11);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return count;
        var e_11, _a;
    };
    Enumerable.distinct = function (source, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        function iterator() {
            var distinctElements, _loop_1, source_12, source_12_1, item, e_12_1, e_12, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        distinctElements = [];
                        _loop_1 = function (item) {
                            var foundItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        foundItem = distinctElements.find(function (x) { return comparer(x, item); });
                                        if (!!foundItem) return [3, 2];
                                        distinctElements.push(item);
                                        return [4, item];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2];
                                }
                            });
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        source_12 = __values(source), source_12_1 = source_12.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_12_1.done) return [3, 5];
                        item = source_12_1.value;
                        return [5, _loop_1(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        source_12_1 = source_12.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_12_1 = _b.sent();
                        e_12 = { error: e_12_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (source_12_1 && !source_12_1.done && (_a = source_12.return)) _a.call(source_12);
                        }
                        finally { if (e_12) throw e_12.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.each = function (source, action) {
        function generator() {
            var source_13, source_13_1, value, e_13_1, e_13, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        source_13 = __values(source), source_13_1 = source_13.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_13_1.done) return [3, 4];
                        value = source_13_1.value;
                        action(value);
                        return [4, value];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        source_13_1 = source_13.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_13_1 = _b.sent();
                        e_13 = { error: e_13_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (source_13_1 && !source_13_1.done && (_a = source_13.return)) _a.call(source_13);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(generator);
    };
    Enumerable.elementAt = function (source, index) {
        var i = 0;
        try {
            for (var source_14 = __values(source), source_14_1 = source_14.next(); !source_14_1.done; source_14_1 = source_14.next()) {
                var item = source_14_1.value;
                if (index === i++) {
                    return item;
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (source_14_1 && !source_14_1.done && (_a = source_14.return)) _a.call(source_14);
            }
            finally { if (e_14) throw e_14.error; }
        }
        throw new shared_1.ArgumentOutOfRangeException("index");
        var e_14, _a;
    };
    Enumerable.elementAtOrDefault = function (source, index) {
        var i = 0;
        try {
            for (var source_15 = __values(source), source_15_1 = source_15.next(); !source_15_1.done; source_15_1 = source_15.next()) {
                var item = source_15_1.value;
                if (index === i++) {
                    return item;
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (source_15_1 && !source_15_1.done && (_a = source_15.return)) _a.call(source_15);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
        var e_15, _a;
    };
    Enumerable.enumerateObject = function (source) {
        function iterable() {
            var _a, _b, _i, key;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = [];
                        for (_b in source)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        key = _a[_i];
                        return [4, {
                                first: key,
                                second: source[key],
                            }];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }
        return new BasicEnumerable(iterable);
    };
    Enumerable.except = function (first, second, comparer) {
        if (comparer === void 0) { comparer = shared_1.EqualityComparer; }
        function iterator() {
            var secondArray, first_3, first_3_1, firstItem, exists, j, secondItem, e_16_1, e_16, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        secondArray = __spread(second);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        first_3 = __values(first), first_3_1 = first_3.next();
                        _b.label = 2;
                    case 2:
                        if (!!first_3_1.done) return [3, 5];
                        firstItem = first_3_1.value;
                        exists = false;
                        for (j = 0; j < secondArray.length; j++) {
                            secondItem = secondArray[j];
                            if (comparer(firstItem, secondItem) === true) {
                                exists = true;
                                break;
                            }
                        }
                        if (!(exists === false)) return [3, 4];
                        return [4, firstItem];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        first_3_1 = first_3.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_16_1 = _b.sent();
                        e_16 = { error: e_16_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (first_3_1 && !first_3_1.done && (_a = first_3.return)) _a.call(first_3);
                        }
                        finally { if (e_16) throw e_16.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.first = function (source, predicate) {
        if (predicate) {
            return Enumerable.first_2(source, predicate);
        }
        else {
            return Enumerable.first_1(source);
        }
    };
    Enumerable.first_1 = function (source) {
        var first = source[Symbol.iterator]().next();
        if (first.done === true) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return first.value;
    };
    Enumerable.first_2 = function (source, predicate) {
        try {
            for (var source_16 = __values(source), source_16_1 = source_16.next(); !source_16_1.done; source_16_1 = source_16.next()) {
                var value = source_16_1.value;
                if (predicate(value) === true) {
                    return value;
                }
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (source_16_1 && !source_16_1.done && (_a = source_16.return)) _a.call(source_16);
            }
            finally { if (e_17) throw e_17.error; }
        }
        throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoMatch);
        var e_17, _a;
    };
    Enumerable.firstOrDefault = function (source, predicate) {
        if (predicate) {
            return Enumerable.firstOrDefault_2(source, predicate);
        }
        else {
            return Enumerable.firstOrDefault_1(source);
        }
    };
    Enumerable.firstOrDefault_1 = function (source) {
        var first = source[Symbol.iterator]().next();
        return first.value || null;
    };
    Enumerable.firstOrDefault_2 = function (source, predicate) {
        try {
            for (var source_17 = __values(source), source_17_1 = source_17.next(); !source_17_1.done; source_17_1 = source_17.next()) {
                var value = source_17_1.value;
                if (predicate(value) === true) {
                    return value;
                }
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (source_17_1 && !source_17_1.done && (_a = source_17.return)) _a.call(source_17);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return null;
        var e_18, _a;
    };
    Enumerable.flatten = function (source, shallow) {
        function iterator(source) {
            var source_18, source_18_1, item, e_19_1, e_19, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 9]);
                        source_18 = __values(source), source_18_1 = source_18.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_18_1.done) return [3, 6];
                        item = source_18_1.value;
                        if (!(item[Symbol.iterator] !== undefined && typeof item !== "string")) return [3, 3];
                        return [5, __values(shallow ? item : iterator(item))];
                    case 2:
                        _b.sent();
                        return [3, 5];
                    case 3: return [4, item];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        source_18_1 = source_18.next();
                        return [3, 1];
                    case 6: return [3, 9];
                    case 7:
                        e_19_1 = _b.sent();
                        e_19 = { error: e_19_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (source_18_1 && !source_18_1.done && (_a = source_18.return)) _a.call(source_18);
                        }
                        finally { if (e_19) throw e_19.error; }
                        return [7];
                    case 9: return [2];
                }
            });
        }
        return new BasicEnumerable(function () { return iterator(source); });
    };
    Enumerable.from = function (source) {
        if (Array.isArray(source)) {
            return new BasicEnumerable(function () { return shared_1.toiterator(source); });
        }
        else {
            return new BasicEnumerable(function () { return source; });
        }
    };
    Enumerable.groupBy = function (source, keySelector, comparer) {
        if (comparer) {
            return Enumerable.groupBy_0(source, keySelector, comparer);
        }
        else {
            return Enumerable.groupBy_0_Simple(source, keySelector);
        }
    };
    Enumerable.groupBy_0_Simple = function (source, keySelector) {
        function iterator() {
            var keyMap, source_19, source_19_1, value, key, grouping, _a, _b, _i, value, e_20, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        keyMap = {};
                        try {
                            for (source_19 = __values(source), source_19_1 = source_19.next(); !source_19_1.done; source_19_1 = source_19.next()) {
                                value = source_19_1.value;
                                key = keySelector(value);
                                grouping = keyMap[key];
                                if (grouping) {
                                    grouping.push(value);
                                }
                                else {
                                    keyMap[key] = new Grouping(key, value);
                                }
                            }
                        }
                        catch (e_20_1) { e_20 = { error: e_20_1 }; }
                        finally {
                            try {
                                if (source_19_1 && !source_19_1.done && (_c = source_19.return)) _c.call(source_19);
                            }
                            finally { if (e_20) throw e_20.error; }
                        }
                        _a = [];
                        for (_b in keyMap)
                            _a.push(_b);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        value = _a[_i];
                        return [4, keyMap[value]];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.groupBy_0 = function (source, keySelector, comparer) {
        function generate() {
            var keyMap, source_20, source_20_1, value, key, found, i, group, keyMap_1, keyMap_1_1, keyValue, e_21_1, e_22, _a, e_21, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        keyMap = new Array();
                        try {
                            for (source_20 = __values(source), source_20_1 = source_20.next(); !source_20_1.done; source_20_1 = source_20.next()) {
                                value = source_20_1.value;
                                key = keySelector(value);
                                found = false;
                                for (i = 0; i < keyMap.length; i++) {
                                    group = keyMap[i];
                                    if (comparer(group.key, key)) {
                                        group.push(value);
                                        found = true;
                                        break;
                                    }
                                }
                                if (found === false) {
                                    keyMap.push(new Grouping(key, value));
                                }
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (source_20_1 && !source_20_1.done && (_a = source_20.return)) _a.call(source_20);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 8]);
                        keyMap_1 = __values(keyMap), keyMap_1_1 = keyMap_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!keyMap_1_1.done) return [3, 5];
                        keyValue = keyMap_1_1.value;
                        return [4, keyValue];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        keyMap_1_1 = keyMap_1.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (keyMap_1_1 && !keyMap_1_1.done && (_b = keyMap_1.return)) _b.call(keyMap_1);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(generate);
    };
    Enumerable.groupByWithSel = function (source, keySelector, elementSelector, comparer) {
        if (comparer) {
            return Enumerable.groupBy_1(source, keySelector, elementSelector, comparer);
        }
        else {
            return Enumerable.groupBy_1_Simple(source, keySelector, elementSelector);
        }
    };
    Enumerable.groupBy_1_Simple = function (source, keySelector, elementSelector) {
        function generate() {
            var keyMap, source_21, source_21_1, value, key, grouping, element, _a, _b, _i, value, e_23, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        keyMap = {};
                        try {
                            for (source_21 = __values(source), source_21_1 = source_21.next(); !source_21_1.done; source_21_1 = source_21.next()) {
                                value = source_21_1.value;
                                key = keySelector(value);
                                grouping = keyMap[key];
                                element = elementSelector(value);
                                if (grouping) {
                                    grouping.push(element);
                                }
                                else {
                                    keyMap[key] = new Grouping(key, element);
                                }
                            }
                        }
                        catch (e_23_1) { e_23 = { error: e_23_1 }; }
                        finally {
                            try {
                                if (source_21_1 && !source_21_1.done && (_c = source_21.return)) _c.call(source_21);
                            }
                            finally { if (e_23) throw e_23.error; }
                        }
                        _a = [];
                        for (_b in keyMap)
                            _a.push(_b);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        value = _a[_i];
                        return [4, keyMap[value]];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }
        return new BasicEnumerable(generate);
    };
    Enumerable.groupBy_1 = function (source, keySelector, elementSelector, comparer) {
        function generate() {
            var keyMap, source_22, source_22_1, value, key, found, i, group, element, keyMap_2, keyMap_2_1, keyValue, e_24_1, e_25, _a, e_24, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        keyMap = new Array();
                        try {
                            for (source_22 = __values(source), source_22_1 = source_22.next(); !source_22_1.done; source_22_1 = source_22.next()) {
                                value = source_22_1.value;
                                key = keySelector(value);
                                found = false;
                                for (i = 0; i < keyMap.length; i++) {
                                    group = keyMap[i];
                                    if (comparer(group.key, key)) {
                                        group.push(elementSelector(value));
                                        found = true;
                                        break;
                                    }
                                }
                                if (found === false) {
                                    element = elementSelector(value);
                                    keyMap.push(new Grouping(key, element));
                                }
                            }
                        }
                        catch (e_25_1) { e_25 = { error: e_25_1 }; }
                        finally {
                            try {
                                if (source_22_1 && !source_22_1.done && (_a = source_22.return)) _a.call(source_22);
                            }
                            finally { if (e_25) throw e_25.error; }
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 8]);
                        keyMap_2 = __values(keyMap), keyMap_2_1 = keyMap_2.next();
                        _c.label = 2;
                    case 2:
                        if (!!keyMap_2_1.done) return [3, 5];
                        keyValue = keyMap_2_1.value;
                        return [4, keyValue];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        keyMap_2_1 = keyMap_2.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_24_1 = _c.sent();
                        e_24 = { error: e_24_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (keyMap_2_1 && !keyMap_2_1.done && (_b = keyMap_2.return)) _b.call(keyMap_2);
                        }
                        finally { if (e_24) throw e_24.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(generate);
    };
    Enumerable.groupByWithResult = function (source, keySelector, resultSelector, comparer) {
        if (comparer) {
            return Enumerable.groupBy_2(source, keySelector, resultSelector, comparer);
        }
        else {
            return Enumerable.groupBy_2_Simple(source, keySelector, resultSelector);
        }
    };
    Enumerable.groupBy_2_Simple = function (source, keySelector, resultSelector) {
        function iterator() {
            var groupByResult, groupByResult_1, groupByResult_1_1, group, e_26_1, e_26, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        groupByResult = Enumerable.groupBy_0_Simple(source, keySelector);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        groupByResult_1 = __values(groupByResult), groupByResult_1_1 = groupByResult_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!groupByResult_1_1.done) return [3, 5];
                        group = groupByResult_1_1.value;
                        return [4, resultSelector(group.key, group)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        groupByResult_1_1 = groupByResult_1.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_26_1 = _b.sent();
                        e_26 = { error: e_26_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (groupByResult_1_1 && !groupByResult_1_1.done && (_a = groupByResult_1.return)) _a.call(groupByResult_1);
                        }
                        finally { if (e_26) throw e_26.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.groupBy_2 = function (source, keySelector, resultSelector, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        function iterator() {
            var groupByResult, groupByResult_2, groupByResult_2_1, group, e_27_1, e_27, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        groupByResult = Enumerable.groupBy_0(source, keySelector, comparer);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        groupByResult_2 = __values(groupByResult), groupByResult_2_1 = groupByResult_2.next();
                        _b.label = 2;
                    case 2:
                        if (!!groupByResult_2_1.done) return [3, 5];
                        group = groupByResult_2_1.value;
                        return [4, resultSelector(group.key, group)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        groupByResult_2_1 = groupByResult_2.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_27_1 = _b.sent();
                        e_27 = { error: e_27_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (groupByResult_2_1 && !groupByResult_2_1.done && (_a = groupByResult_2.return)) _a.call(groupByResult_2);
                        }
                        finally { if (e_27) throw e_27.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.GroupByWithResultAndSelector = function (source, keySelector, elementSelector, resultSelector, comparer) {
        if (comparer) {
            return Enumerable.groupBy_3(source, keySelector, elementSelector, resultSelector);
        }
        else {
            return Enumerable.groupBy_3_Simple(source, keySelector, elementSelector, resultSelector);
        }
    };
    Enumerable.groupBy_3 = function (source, keySelector, elementSelector, resultSelector, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        function iterator() {
            var groupByResult, groupByResult_3, groupByResult_3_1, group, e_28_1, e_28, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        groupByResult = Enumerable.groupBy_1(source, keySelector, elementSelector, comparer);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        groupByResult_3 = __values(groupByResult), groupByResult_3_1 = groupByResult_3.next();
                        _b.label = 2;
                    case 2:
                        if (!!groupByResult_3_1.done) return [3, 5];
                        group = groupByResult_3_1.value;
                        return [4, resultSelector(group.key, group)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        groupByResult_3_1 = groupByResult_3.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_28_1 = _b.sent();
                        e_28 = { error: e_28_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (groupByResult_3_1 && !groupByResult_3_1.done && (_a = groupByResult_3.return)) _a.call(groupByResult_3);
                        }
                        finally { if (e_28) throw e_28.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.groupBy_3_Simple = function (source, keySelector, elementSelector, resultSelector) {
        function iterator() {
            var groupByResult, groupByResult_4, groupByResult_4_1, group, e_29_1, e_29, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        groupByResult = Enumerable.groupBy_1_Simple(source, keySelector, elementSelector);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        groupByResult_4 = __values(groupByResult), groupByResult_4_1 = groupByResult_4.next();
                        _b.label = 2;
                    case 2:
                        if (!!groupByResult_4_1.done) return [3, 5];
                        group = groupByResult_4_1.value;
                        return [4, resultSelector(group.key, group)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        groupByResult_4_1 = groupByResult_4.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_29_1 = _b.sent();
                        e_29 = { error: e_29_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (groupByResult_4_1 && !groupByResult_4_1.done && (_a = groupByResult_4.return)) _a.call(groupByResult_4);
                        }
                        finally { if (e_29) throw e_29.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.join = function (outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        function iterator() {
            var innerArray, outer_1, outer_1_1, o, outerKey, innerArray_1, innerArray_1_1, i, innerKey, e_30_1, e_31_1, e_31, _a, e_30, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        innerArray = __spread(inner);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 12, 13, 14]);
                        outer_1 = __values(outer), outer_1_1 = outer_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!outer_1_1.done) return [3, 11];
                        o = outer_1_1.value;
                        outerKey = outerKeySelector(o);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 8, 9, 10]);
                        innerArray_1 = __values(innerArray), innerArray_1_1 = innerArray_1.next();
                        _c.label = 4;
                    case 4:
                        if (!!innerArray_1_1.done) return [3, 7];
                        i = innerArray_1_1.value;
                        innerKey = innerKeySelector(i);
                        if (!(comparer(outerKey, innerKey) === true)) return [3, 6];
                        return [4, resultSelector(o, i)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        innerArray_1_1 = innerArray_1.next();
                        return [3, 4];
                    case 7: return [3, 10];
                    case 8:
                        e_30_1 = _c.sent();
                        e_30 = { error: e_30_1 };
                        return [3, 10];
                    case 9:
                        try {
                            if (innerArray_1_1 && !innerArray_1_1.done && (_b = innerArray_1.return)) _b.call(innerArray_1);
                        }
                        finally { if (e_30) throw e_30.error; }
                        return [7];
                    case 10:
                        outer_1_1 = outer_1.next();
                        return [3, 2];
                    case 11: return [3, 14];
                    case 12:
                        e_31_1 = _c.sent();
                        e_31 = { error: e_31_1 };
                        return [3, 14];
                    case 13:
                        try {
                            if (outer_1_1 && !outer_1_1.done && (_a = outer_1.return)) _a.call(outer_1);
                        }
                        finally { if (e_31) throw e_31.error; }
                        return [7];
                    case 14: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.intersect = function (first, second, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        function iterator() {
            var firstResults, secondResults, i, firstValue, j, secondValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstResults = __spread(first.distinct(comparer));
                        if (firstResults.length === 0) {
                            return [2];
                        }
                        secondResults = __spread(second);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < firstResults.length)) return [3, 6];
                        firstValue = firstResults[i];
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < secondResults.length)) return [3, 5];
                        secondValue = secondResults[j];
                        if (!(comparer(firstValue, secondValue) === true)) return [3, 4];
                        return [4, firstValue];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4:
                        j++;
                        return [3, 2];
                    case 5:
                        i++;
                        return [3, 1];
                    case 6: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.partition = function (source, predicate) {
        var fail = [];
        var pass = [];
        try {
            for (var source_23 = __values(source), source_23_1 = source_23.next(); !source_23_1.done; source_23_1 = source_23.next()) {
                var value = source_23_1.value;
                if (predicate(value) === true) {
                    pass.push(value);
                }
                else {
                    fail.push(value);
                }
            }
        }
        catch (e_32_1) { e_32 = { error: e_32_1 }; }
        finally {
            try {
                if (source_23_1 && !source_23_1.done && (_a = source_23.return)) _a.call(source_23);
            }
            finally { if (e_32) throw e_32.error; }
        }
        return [fail, pass];
        var e_32, _a;
    };
    Enumerable.select = function (source, selector) {
        if (typeof selector === "string") {
            return Enumerable.select_2(source, selector);
        }
        else {
            return Enumerable.select_1(source, selector);
        }
    };
    Enumerable.select_1 = function (source, selector) {
        function iterator() {
            var source_24, source_24_1, value, e_33_1, e_33, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        source_24 = __values(source), source_24_1 = source_24.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_24_1.done) return [3, 4];
                        value = source_24_1.value;
                        return [4, selector(value)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        source_24_1 = source_24.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_33_1 = _b.sent();
                        e_33 = { error: e_33_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (source_24_1 && !source_24_1.done && (_a = source_24.return)) _a.call(source_24);
                        }
                        finally { if (e_33) throw e_33.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.select_2 = function (source, key) {
        function iterator() {
            var source_25, source_25_1, value, e_34_1, e_34, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        source_25 = __values(source), source_25_1 = source_25.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_25_1.done) return [3, 4];
                        value = source_25_1.value;
                        return [4, value[key]];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        source_25_1 = source_25.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_34_1 = _b.sent();
                        e_34 = { error: e_34_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (source_25_1 && !source_25_1.done && (_a = source_25.return)) _a.call(source_25);
                        }
                        finally { if (e_34) throw e_34.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.selectMany = function (source, selector) {
        if (typeof selector === "string") {
            return Enumerable.selectMany_2(source, selector);
        }
        else {
            return Enumerable.selectMany_1(source, selector);
        }
    };
    Enumerable.selectMany_1 = function (source, selector) {
        function iterator() {
            var source_26, source_26_1, value, _a, _b, selectorValue, e_35_1, e_36_1, e_36, _c, e_35, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, 12, 13]);
                        source_26 = __values(source), source_26_1 = source_26.next();
                        _e.label = 1;
                    case 1:
                        if (!!source_26_1.done) return [3, 10];
                        value = source_26_1.value;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        _a = __values(selector(value)), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3, 6];
                        selectorValue = _b.value;
                        return [4, selectorValue];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_35_1 = _e.sent();
                        e_35 = { error: e_35_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_35) throw e_35.error; }
                        return [7];
                    case 9:
                        source_26_1 = source_26.next();
                        return [3, 1];
                    case 10: return [3, 13];
                    case 11:
                        e_36_1 = _e.sent();
                        e_36 = { error: e_36_1 };
                        return [3, 13];
                    case 12:
                        try {
                            if (source_26_1 && !source_26_1.done && (_c = source_26.return)) _c.call(source_26);
                        }
                        finally { if (e_36) throw e_36.error; }
                        return [7];
                    case 13: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.selectMany_2 = function (source, selector) {
        function iterator() {
            var source_27, source_27_1, value, _a, _b, selectorValue, e_37_1, e_38_1, e_38, _c, e_37, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, 12, 13]);
                        source_27 = __values(source), source_27_1 = source_27.next();
                        _e.label = 1;
                    case 1:
                        if (!!source_27_1.done) return [3, 10];
                        value = source_27_1.value;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        _a = __values(value[selector]), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3, 6];
                        selectorValue = _b.value;
                        return [4, selectorValue];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_37_1 = _e.sent();
                        e_37 = { error: e_37_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_37) throw e_37.error; }
                        return [7];
                    case 9:
                        source_27_1 = source_27.next();
                        return [3, 1];
                    case 10: return [3, 13];
                    case 11:
                        e_38_1 = _e.sent();
                        e_38 = { error: e_38_1 };
                        return [3, 13];
                    case 12:
                        try {
                            if (source_27_1 && !source_27_1.done && (_c = source_27.return)) _c.call(source_27);
                        }
                        finally { if (e_38) throw e_38.error; }
                        return [7];
                    case 13: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.single = function (source, predicate) {
        if (predicate) {
            return Enumerable.single_2(source, predicate);
        }
        else {
            return Enumerable.single_1(source);
        }
    };
    Enumerable.single_1 = function (source) {
        var hasValue = false;
        var singleValue = null;
        try {
            for (var source_28 = __values(source), source_28_1 = source_28.next(); !source_28_1.done; source_28_1 = source_28.next()) {
                var value = source_28_1.value;
                if (hasValue === true) {
                    throw new shared_1.InvalidOperationException(shared_1.ErrorString.MoreThanOneElement);
                }
                else {
                    hasValue = true;
                    singleValue = value;
                }
            }
        }
        catch (e_39_1) { e_39 = { error: e_39_1 }; }
        finally {
            try {
                if (source_28_1 && !source_28_1.done && (_a = source_28.return)) _a.call(source_28);
            }
            finally { if (e_39) throw e_39.error; }
        }
        if (hasValue === false) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return singleValue;
        var e_39, _a;
    };
    Enumerable.single_2 = function (source, predicate) {
        var hasValue = false;
        var singleValue = null;
        try {
            for (var source_29 = __values(source), source_29_1 = source_29.next(); !source_29_1.done; source_29_1 = source_29.next()) {
                var value = source_29_1.value;
                if (predicate(value)) {
                    if (hasValue === true) {
                        throw new shared_1.InvalidOperationException(shared_1.ErrorString.MoreThanOneElement);
                    }
                    else {
                        hasValue = true;
                        singleValue = value;
                    }
                }
            }
        }
        catch (e_40_1) { e_40 = { error: e_40_1 }; }
        finally {
            try {
                if (source_29_1 && !source_29_1.done && (_a = source_29.return)) _a.call(source_29);
            }
            finally { if (e_40) throw e_40.error; }
        }
        if (hasValue === false) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoMatch);
        }
        return singleValue;
        var e_40, _a;
    };
    Enumerable.singleOrDefault = function (source, predicate) {
        if (predicate) {
            return Enumerable.singleOrDefault_2(source, predicate);
        }
        else {
            return Enumerable.singleOrDefault_1(source);
        }
    };
    Enumerable.singleOrDefault_1 = function (source) {
        var hasValue = false;
        var singleValue = null;
        try {
            for (var source_30 = __values(source), source_30_1 = source_30.next(); !source_30_1.done; source_30_1 = source_30.next()) {
                var value = source_30_1.value;
                if (hasValue === true) {
                    throw new shared_1.InvalidOperationException(shared_1.ErrorString.MoreThanOneElement);
                }
                else {
                    hasValue = true;
                    singleValue = value;
                }
            }
        }
        catch (e_41_1) { e_41 = { error: e_41_1 }; }
        finally {
            try {
                if (source_30_1 && !source_30_1.done && (_a = source_30.return)) _a.call(source_30);
            }
            finally { if (e_41) throw e_41.error; }
        }
        return singleValue;
        var e_41, _a;
    };
    Enumerable.singleOrDefault_2 = function (source, predicate) {
        var hasValue = false;
        var singleValue = null;
        try {
            for (var source_31 = __values(source), source_31_1 = source_31.next(); !source_31_1.done; source_31_1 = source_31.next()) {
                var value = source_31_1.value;
                if (predicate(value)) {
                    if (hasValue === true) {
                        throw new shared_1.InvalidOperationException(shared_1.ErrorString.MoreThanOneElement);
                    }
                    else {
                        hasValue = true;
                        singleValue = value;
                    }
                }
            }
        }
        catch (e_42_1) { e_42 = { error: e_42_1 }; }
        finally {
            try {
                if (source_31_1 && !source_31_1.done && (_a = source_31.return)) _a.call(source_31);
            }
            finally { if (e_42) throw e_42.error; }
        }
        return singleValue;
        var e_42, _a;
    };
    Enumerable.skipWhile = function (source, predicate) {
        if (predicate.length === 1) {
            return Enumerable.skipWhile_1(source, predicate);
        }
        else {
            return Enumerable.skipWhile_2(source, predicate);
        }
    };
    Enumerable.skipWhile_1 = function (source, predicate) {
        function iterator() {
            var skip, source_32, source_32_1, item, e_43_1, e_43, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        skip = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        source_32 = __values(source), source_32_1 = source_32.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_32_1.done) return [3, 7];
                        item = source_32_1.value;
                        if (!(skip === false)) return [3, 4];
                        return [4, item];
                    case 3:
                        _b.sent();
                        return [3, 6];
                    case 4:
                        if (!(predicate(item) === false)) return [3, 6];
                        skip = false;
                        return [4, item];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        source_32_1 = source_32.next();
                        return [3, 2];
                    case 7: return [3, 10];
                    case 8:
                        e_43_1 = _b.sent();
                        e_43 = { error: e_43_1 };
                        return [3, 10];
                    case 9:
                        try {
                            if (source_32_1 && !source_32_1.done && (_a = source_32.return)) _a.call(source_32);
                        }
                        finally { if (e_43) throw e_43.error; }
                        return [7];
                    case 10: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.skipWhile_2 = function (source, predicate) {
        function iterator() {
            var index, skip, source_33, source_33_1, item, e_44_1, e_44, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        index = 0;
                        skip = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, 10, 11]);
                        source_33 = __values(source), source_33_1 = source_33.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_33_1.done) return [3, 8];
                        item = source_33_1.value;
                        if (!(skip === false)) return [3, 4];
                        return [4, item];
                    case 3:
                        _b.sent();
                        return [3, 6];
                    case 4:
                        if (!(predicate(item, index) === false)) return [3, 6];
                        skip = false;
                        return [4, item];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        index++;
                        _b.label = 7;
                    case 7:
                        source_33_1 = source_33.next();
                        return [3, 2];
                    case 8: return [3, 11];
                    case 9:
                        e_44_1 = _b.sent();
                        e_44 = { error: e_44_1 };
                        return [3, 11];
                    case 10:
                        try {
                            if (source_33_1 && !source_33_1.done && (_a = source_33.return)) _a.call(source_33);
                        }
                        finally { if (e_44) throw e_44.error; }
                        return [7];
                    case 11: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.skip = function (source, count) {
        function iterator() {
            var i, source_34, source_34_1, item, e_45_1, e_45, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        source_34 = __values(source), source_34_1 = source_34.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_34_1.done) return [3, 5];
                        item = source_34_1.value;
                        if (!(i++ >= count)) return [3, 4];
                        return [4, item];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        source_34_1 = source_34.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_45_1 = _b.sent();
                        e_45 = { error: e_45_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (source_34_1 && !source_34_1.done && (_a = source_34.return)) _a.call(source_34);
                        }
                        finally { if (e_45) throw e_45.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.empty = function () {
        var iterator = function () {
            var _a, _b, x, e_46_1, e_46, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values([]), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3, 4];
                        x = _b.value;
                        return [4, x];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_46_1 = _d.sent();
                        e_46 = { error: e_46_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_46) throw e_46.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        };
        return new BasicEnumerable(iterator);
    };
    Enumerable.last = function (source, predicate) {
        if (predicate) {
            return Enumerable.last_2(source, predicate);
        }
        else {
            return Enumerable.last_1(source);
        }
    };
    Enumerable.last_1 = function (source) {
        var last;
        try {
            for (var source_35 = __values(source), source_35_1 = source_35.next(); !source_35_1.done; source_35_1 = source_35.next()) {
                var value = source_35_1.value;
                last = value;
            }
        }
        catch (e_47_1) { e_47 = { error: e_47_1 }; }
        finally {
            try {
                if (source_35_1 && !source_35_1.done && (_a = source_35.return)) _a.call(source_35);
            }
            finally { if (e_47) throw e_47.error; }
        }
        if (!last) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        return last;
        var e_47, _a;
    };
    Enumerable.last_2 = function (source, predicate) {
        var last;
        try {
            for (var source_36 = __values(source), source_36_1 = source_36.next(); !source_36_1.done; source_36_1 = source_36.next()) {
                var value = source_36_1.value;
                if (predicate(value) === true) {
                    last = value;
                }
            }
        }
        catch (e_48_1) { e_48 = { error: e_48_1 }; }
        finally {
            try {
                if (source_36_1 && !source_36_1.done && (_a = source_36.return)) _a.call(source_36);
            }
            finally { if (e_48) throw e_48.error; }
        }
        if (!last) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoMatch);
        }
        return last;
        var e_48, _a;
    };
    Enumerable.lastOrDefault = function (source, predicate) {
        if (predicate) {
            return Enumerable.lastOrDefault_2(source, predicate);
        }
        else {
            return Enumerable.lastOrDefault_1(source);
        }
    };
    Enumerable.lastOrDefault_1 = function (source) {
        var last = null;
        try {
            for (var source_37 = __values(source), source_37_1 = source_37.next(); !source_37_1.done; source_37_1 = source_37.next()) {
                var value = source_37_1.value;
                last = value;
            }
        }
        catch (e_49_1) { e_49 = { error: e_49_1 }; }
        finally {
            try {
                if (source_37_1 && !source_37_1.done && (_a = source_37.return)) _a.call(source_37);
            }
            finally { if (e_49) throw e_49.error; }
        }
        return last;
        var e_49, _a;
    };
    Enumerable.lastOrDefault_2 = function (source, predicate) {
        var last = null;
        try {
            for (var source_38 = __values(source), source_38_1 = source_38.next(); !source_38_1.done; source_38_1 = source_38.next()) {
                var value = source_38_1.value;
                if (predicate(value) === true) {
                    last = value;
                }
            }
        }
        catch (e_50_1) { e_50 = { error: e_50_1 }; }
        finally {
            try {
                if (source_38_1 && !source_38_1.done && (_a = source_38.return)) _a.call(source_38);
            }
            finally { if (e_50) throw e_50.error; }
        }
        return last;
        var e_50, _a;
    };
    Enumerable.max = function (source, selector) {
        if (selector) {
            return Enumerable.max_2(source, selector);
        }
        else {
            return Enumerable.max_1(source);
        }
    };
    Enumerable.max_1 = function (source) {
        var max = null;
        try {
            for (var source_39 = __values(source), source_39_1 = source_39.next(); !source_39_1.done; source_39_1 = source_39.next()) {
                var item = source_39_1.value;
                max = Math.max(max || Number.NEGATIVE_INFINITY, item);
            }
        }
        catch (e_51_1) { e_51 = { error: e_51_1 }; }
        finally {
            try {
                if (source_39_1 && !source_39_1.done && (_a = source_39.return)) _a.call(source_39);
            }
            finally { if (e_51) throw e_51.error; }
        }
        if (max === null) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        else {
            return max;
        }
        var e_51, _a;
    };
    Enumerable.max_2 = function (source, selector) {
        var max = null;
        try {
            for (var source_40 = __values(source), source_40_1 = source_40.next(); !source_40_1.done; source_40_1 = source_40.next()) {
                var item = source_40_1.value;
                max = Math.max(max || Number.NEGATIVE_INFINITY, selector(item));
            }
        }
        catch (e_52_1) { e_52 = { error: e_52_1 }; }
        finally {
            try {
                if (source_40_1 && !source_40_1.done && (_a = source_40.return)) _a.call(source_40);
            }
            finally { if (e_52) throw e_52.error; }
        }
        if (max === null) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        else {
            return max;
        }
        var e_52, _a;
    };
    Enumerable.min = function (source, selector) {
        if (selector) {
            return Enumerable.min_2(source, selector);
        }
        else {
            return Enumerable.min_1(source);
        }
    };
    Enumerable.min_1 = function (source) {
        var min = null;
        try {
            for (var source_41 = __values(source), source_41_1 = source_41.next(); !source_41_1.done; source_41_1 = source_41.next()) {
                var item = source_41_1.value;
                min = Math.min(min || Number.POSITIVE_INFINITY, item);
            }
        }
        catch (e_53_1) { e_53 = { error: e_53_1 }; }
        finally {
            try {
                if (source_41_1 && !source_41_1.done && (_a = source_41.return)) _a.call(source_41);
            }
            finally { if (e_53) throw e_53.error; }
        }
        if (min === null) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        else {
            return min;
        }
        var e_53, _a;
    };
    Enumerable.min_2 = function (source, selector) {
        var min = null;
        try {
            for (var source_42 = __values(source), source_42_1 = source_42.next(); !source_42_1.done; source_42_1 = source_42.next()) {
                var item = source_42_1.value;
                min = Math.min(min || Number.POSITIVE_INFINITY, selector(item));
            }
        }
        catch (e_54_1) { e_54 = { error: e_54_1 }; }
        finally {
            try {
                if (source_42_1 && !source_42_1.done && (_a = source_42.return)) _a.call(source_42);
            }
            finally { if (e_54) throw e_54.error; }
        }
        if (min === null) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        else {
            return min;
        }
        var e_54, _a;
    };
    Enumerable.ofType = function (source, type) {
        var typeCheck = typeof type === "string" ?
            (function (x) { return typeof x === type; }) :
            (function (x) { return x instanceof type; });
        function iterator() {
            var source_43, source_43_1, item, e_55_1, e_55, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        source_43 = __values(source), source_43_1 = source_43.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_43_1.done) return [3, 4];
                        item = source_43_1.value;
                        if (!typeCheck(item)) return [3, 3];
                        return [4, item];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        source_43_1 = source_43.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_55_1 = _b.sent();
                        e_55 = { error: e_55_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (source_43_1 && !source_43_1.done && (_a = source_43.return)) _a.call(source_43);
                        }
                        finally { if (e_55) throw e_55.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.orderByInner = function (source, keySelector) {
        return function lazyMap() {
            var map = new Map();
            try {
                for (var source_44 = __values(source), source_44_1 = source_44.next(); !source_44_1.done; source_44_1 = source_44.next()) {
                    var item = source_44_1.value;
                    var key = keySelector(item);
                    var currentMapping = map.get(key);
                    if (currentMapping) {
                        currentMapping.push(item);
                    }
                    else {
                        map.set(key, [item]);
                    }
                }
            }
            catch (e_56_1) { e_56 = { error: e_56_1 }; }
            finally {
                try {
                    if (source_44_1 && !source_44_1.done && (_a = source_44.return)) _a.call(source_44);
                }
                finally { if (e_56) throw e_56.error; }
            }
            return map;
            var e_56, _a;
        };
    };
    Enumerable.orderBy = function (source, keySelector, comparer) {
        return new OrderedEnumerable(Enumerable.orderByInner(source, keySelector), comparer);
    };
    Enumerable.orderByDescending = function (source, keySelector, comparer) {
        return new OrderedEnumerableDescending(Enumerable.orderByInner(source, keySelector), comparer);
    };
    Enumerable.range = function (start, count) {
        function iterator() {
            var max, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        max = start + count;
                        i = start;
                        _a.label = 1;
                    case 1:
                        if (!(i < max)) return [3, 4];
                        return [4, i];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.repeat = function (element, count) {
        function iterator() {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < count)) return [3, 4];
                        return [4, element];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.reverse = function (source) {
        function iterator() {
            var _a, _b, x, e_57_1, e_57, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(__spread(source).reverse()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3, 4];
                        x = _b.value;
                        return [4, x];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_57_1 = _d.sent();
                        e_57 = { error: e_57_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_57) throw e_57.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.sequenceEquals = function (first, second, comparer) {
        if (comparer === void 0) { comparer = shared_1.StrictEqualityComparer; }
        var firstIterator = first[Symbol.iterator]();
        var secondIterator = second[Symbol.iterator]();
        var firstResult = firstIterator.next();
        var secondResult = secondIterator.next();
        while (!firstResult.done && !secondResult.done) {
            if (!comparer(firstResult.value, secondResult.value)) {
                return false;
            }
            firstResult = firstIterator.next();
            secondResult = secondIterator.next();
        }
        return firstResult.done && secondResult.done;
    };
    Enumerable.sum = function (source, selector) {
        if (selector) {
            return Enumerable.sum_2(source, selector);
        }
        else {
            return Enumerable.sum_1(source);
        }
    };
    Enumerable.sum_1 = function (source) {
        var sum = 0;
        try {
            for (var source_45 = __values(source), source_45_1 = source_45.next(); !source_45_1.done; source_45_1 = source_45.next()) {
                var value = source_45_1.value;
                sum += value;
            }
        }
        catch (e_58_1) { e_58 = { error: e_58_1 }; }
        finally {
            try {
                if (source_45_1 && !source_45_1.done && (_a = source_45.return)) _a.call(source_45);
            }
            finally { if (e_58) throw e_58.error; }
        }
        return sum;
        var e_58, _a;
    };
    Enumerable.sum_2 = function (source, selector) {
        var sum = 0;
        try {
            for (var source_46 = __values(source), source_46_1 = source_46.next(); !source_46_1.done; source_46_1 = source_46.next()) {
                var value = source_46_1.value;
                sum += selector(value);
            }
        }
        catch (e_59_1) { e_59 = { error: e_59_1 }; }
        finally {
            try {
                if (source_46_1 && !source_46_1.done && (_a = source_46.return)) _a.call(source_46);
            }
            finally { if (e_59) throw e_59.error; }
        }
        return sum;
        var e_59, _a;
    };
    Enumerable.take = function (source, amount) {
        function iterator() {
            var amountLeft, source_47, source_47_1, item, e_60_1, e_60, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        amountLeft = amount > 0 ? amount : 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 9]);
                        source_47 = __values(source), source_47_1 = source_47.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_47_1.done) return [3, 6];
                        item = source_47_1.value;
                        if (!(amountLeft-- === 0)) return [3, 3];
                        return [3, 6];
                    case 3: return [4, item];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        source_47_1 = source_47.next();
                        return [3, 2];
                    case 6: return [3, 9];
                    case 7:
                        e_60_1 = _b.sent();
                        e_60 = { error: e_60_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (source_47_1 && !source_47_1.done && (_a = source_47.return)) _a.call(source_47);
                        }
                        finally { if (e_60) throw e_60.error; }
                        return [7];
                    case 9: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.takeWhile = function (source, predicate) {
        if (predicate.length === 1) {
            return Enumerable.takeWhile_1(source, predicate);
        }
        else {
            return Enumerable.takeWhile_2(source, predicate);
        }
    };
    Enumerable.takeWhile_1 = function (source, predicate) {
        function iterator() {
            var source_48, source_48_1, item, e_61_1, e_61, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 8]);
                        source_48 = __values(source), source_48_1 = source_48.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_48_1.done) return [3, 5];
                        item = source_48_1.value;
                        if (!predicate(item)) return [3, 3];
                        return [4, item];
                    case 2:
                        _b.sent();
                        return [3, 4];
                    case 3: return [3, 5];
                    case 4:
                        source_48_1 = source_48.next();
                        return [3, 1];
                    case 5: return [3, 8];
                    case 6:
                        e_61_1 = _b.sent();
                        e_61 = { error: e_61_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (source_48_1 && !source_48_1.done && (_a = source_48.return)) _a.call(source_48);
                        }
                        finally { if (e_61) throw e_61.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.takeWhile_2 = function (source, predicate) {
        function iterator() {
            var index, source_49, source_49_1, item, e_62_1, e_62, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        index = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 9]);
                        source_49 = __values(source), source_49_1 = source_49.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_49_1.done) return [3, 6];
                        item = source_49_1.value;
                        if (!predicate(item, index++)) return [3, 4];
                        return [4, item];
                    case 3:
                        _b.sent();
                        return [3, 5];
                    case 4: return [3, 6];
                    case 5:
                        source_49_1 = source_49.next();
                        return [3, 2];
                    case 6: return [3, 9];
                    case 7:
                        e_62_1 = _b.sent();
                        e_62 = { error: e_62_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (source_49_1 && !source_49_1.done && (_a = source_49.return)) _a.call(source_49);
                        }
                        finally { if (e_62) throw e_62.error; }
                        return [7];
                    case 9: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.thenBy = function (source, keySelector, comparer) {
        function sortInnerMost(item) {
            if (item instanceof Map) {
                try {
                    for (var _a = __values(item.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var key = _b.value;
                        item.set(key, sortInnerMost(item.get(key)));
                    }
                }
                catch (e_63_1) { e_63 = { error: e_63_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_63) throw e_63.error; }
                }
                return item;
            }
            else {
                var map = new Map();
                for (var i = 0; i < item.length; i++) {
                    var value = item[i];
                    var key = keySelector(value);
                    var mapping = map.get(key);
                    if (mapping) {
                        mapping.push(value);
                    }
                    else {
                        map.set(key, [value]);
                    }
                }
                return map;
            }
            var e_63, _c;
        }
        return new OrderedEnumerable(function () { return sortInnerMost(source.getMap()); }, comparer);
    };
    Enumerable.thenByDescending = function (source, keySelector, comparer) {
        function sortInnerMost(item) {
            if (item instanceof Map) {
                try {
                    for (var _a = __values(item.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var key = _b.value;
                        item.set(key, sortInnerMost(item.get(key)));
                    }
                }
                catch (e_64_1) { e_64 = { error: e_64_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_64) throw e_64.error; }
                }
                return item;
            }
            else {
                var map = new Map();
                for (var i = 0; i < item.length; i++) {
                    var value = item[i];
                    var key = keySelector(value);
                    var mapping = map.get(key);
                    if (mapping) {
                        mapping.push(value);
                    }
                    else {
                        map.set(key, [value]);
                    }
                }
                return map;
            }
            var e_64, _c;
        }
        return new OrderedEnumerableDescending(function () { return sortInnerMost(source.getMap()); }, comparer);
    };
    Enumerable.toArray = function (source) {
        return __spread(source);
    };
    Enumerable.toMap = function (source, selector) {
        var map = new Map();
        try {
            for (var source_50 = __values(source), source_50_1 = source_50.next(); !source_50_1.done; source_50_1 = source_50.next()) {
                var value = source_50_1.value;
                var key = selector(value);
                var array = map.get(key);
                if (array === undefined) {
                    map.set(key, [value]);
                }
                else {
                    array.push(value);
                }
            }
        }
        catch (e_65_1) { e_65 = { error: e_65_1 }; }
        finally {
            try {
                if (source_50_1 && !source_50_1.done && (_a = source_50.return)) _a.call(source_50);
            }
            finally { if (e_65) throw e_65.error; }
        }
        return map;
        var e_65, _a;
    };
    Enumerable.toObject = function (source, selector) {
        var map = {};
        try {
            for (var source_51 = __values(source), source_51_1 = source_51.next(); !source_51_1.done; source_51_1 = source_51.next()) {
                var value = source_51_1.value;
                map[selector(value)] = value;
            }
        }
        catch (e_66_1) { e_66 = { error: e_66_1 }; }
        finally {
            try {
                if (source_51_1 && !source_51_1.done && (_a = source_51.return)) _a.call(source_51);
            }
            finally { if (e_66) throw e_66.error; }
        }
        return map;
        var e_66, _a;
    };
    Enumerable.toSet = function (source) {
        return new Set(source);
    };
    Enumerable.union = function (first, second, comparer) {
        if (comparer) {
            return Enumerable.union_2(first, second, comparer);
        }
        else {
            return Enumerable.union_1(first, second);
        }
    };
    Enumerable.union_1 = function (first, second) {
        function iterator() {
            var set, first_4, first_4_1, item, e_67_1, second_1, second_1_1, item, e_68_1, e_67, _a, e_68, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        set = new Set();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 8]);
                        first_4 = __values(first), first_4_1 = first_4.next();
                        _c.label = 2;
                    case 2:
                        if (!!first_4_1.done) return [3, 5];
                        item = first_4_1.value;
                        if (!(set.has(item) === false)) return [3, 4];
                        return [4, item];
                    case 3:
                        _c.sent();
                        set.add(item);
                        _c.label = 4;
                    case 4:
                        first_4_1 = first_4.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_67_1 = _c.sent();
                        e_67 = { error: e_67_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (first_4_1 && !first_4_1.done && (_a = first_4.return)) _a.call(first_4);
                        }
                        finally { if (e_67) throw e_67.error; }
                        return [7];
                    case 8:
                        _c.trys.push([8, 13, 14, 15]);
                        second_1 = __values(second), second_1_1 = second_1.next();
                        _c.label = 9;
                    case 9:
                        if (!!second_1_1.done) return [3, 12];
                        item = second_1_1.value;
                        if (!(set.has(item) === false)) return [3, 11];
                        return [4, item];
                    case 10:
                        _c.sent();
                        set.add(item);
                        _c.label = 11;
                    case 11:
                        second_1_1 = second_1.next();
                        return [3, 9];
                    case 12: return [3, 15];
                    case 13:
                        e_68_1 = _c.sent();
                        e_68 = { error: e_68_1 };
                        return [3, 15];
                    case 14:
                        try {
                            if (second_1_1 && !second_1_1.done && (_b = second_1.return)) _b.call(second_1);
                        }
                        finally { if (e_68) throw e_68.error; }
                        return [7];
                    case 15: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.union_2 = function (first, second, comparer) {
        function iterator() {
            var result, _a, _b, source, source_52, source_52_1, value, exists, result_1, result_1_1, resultValue, e_69_1, e_70_1, e_70, _c, e_69, _d, e_71, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        result = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 12, 13, 14]);
                        _a = __values([first, second]), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3, 11];
                        source = _b.value;
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        source_52 = __values(source), source_52_1 = source_52.next();
                        _f.label = 4;
                    case 4:
                        if (!!source_52_1.done) return [3, 7];
                        value = source_52_1.value;
                        exists = false;
                        try {
                            for (result_1 = __values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                                resultValue = result_1_1.value;
                                if (comparer(value, resultValue) === true) {
                                    exists = true;
                                    break;
                                }
                            }
                        }
                        catch (e_71_1) { e_71 = { error: e_71_1 }; }
                        finally {
                            try {
                                if (result_1_1 && !result_1_1.done && (_e = result_1.return)) _e.call(result_1);
                            }
                            finally { if (e_71) throw e_71.error; }
                        }
                        if (!(exists === false)) return [3, 6];
                        return [4, value];
                    case 5:
                        _f.sent();
                        result.push(value);
                        _f.label = 6;
                    case 6:
                        source_52_1 = source_52.next();
                        return [3, 4];
                    case 7: return [3, 10];
                    case 8:
                        e_69_1 = _f.sent();
                        e_69 = { error: e_69_1 };
                        return [3, 10];
                    case 9:
                        try {
                            if (source_52_1 && !source_52_1.done && (_d = source_52.return)) _d.call(source_52);
                        }
                        finally { if (e_69) throw e_69.error; }
                        return [7];
                    case 10:
                        _b = _a.next();
                        return [3, 2];
                    case 11: return [3, 14];
                    case 12:
                        e_70_1 = _f.sent();
                        e_70 = { error: e_70_1 };
                        return [3, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_70) throw e_70.error; }
                        return [7];
                    case 14: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.where = function (source, predicate) {
        if (predicate.length === 1) {
            return Enumerable.where_1(source, predicate);
        }
        else {
            return Enumerable.where_2(source, predicate);
        }
    };
    Enumerable.where_1 = function (source, predicate) {
        function iterator() {
            var source_53, source_53_1, item, e_72_1, e_72, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        source_53 = __values(source), source_53_1 = source_53.next();
                        _b.label = 1;
                    case 1:
                        if (!!source_53_1.done) return [3, 4];
                        item = source_53_1.value;
                        if (!(predicate(item) === true)) return [3, 3];
                        return [4, item];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        source_53_1 = source_53.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_72_1 = _b.sent();
                        e_72 = { error: e_72_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (source_53_1 && !source_53_1.done && (_a = source_53.return)) _a.call(source_53);
                        }
                        finally { if (e_72) throw e_72.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.where_2 = function (source, predicate) {
        function iterator() {
            var i, source_54, source_54_1, item, e_73_1, e_73, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        source_54 = __values(source), source_54_1 = source_54.next();
                        _b.label = 2;
                    case 2:
                        if (!!source_54_1.done) return [3, 5];
                        item = source_54_1.value;
                        if (!(predicate(item, i++) === true)) return [3, 4];
                        return [4, item];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        source_54_1 = source_54.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_73_1 = _b.sent();
                        e_73 = { error: e_73_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (source_54_1 && !source_54_1.done && (_a = source_54.return)) _a.call(source_54);
                        }
                        finally { if (e_73) throw e_73.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.zip = function (source, second, resultSelector) {
        if (resultSelector) {
            return Enumerable.zip_2(source, second, resultSelector);
        }
        else {
            return Enumerable.zip_1(source, second);
        }
    };
    Enumerable.zip_1 = function (source, second) {
        function iterator() {
            var firstIterator, secondIterator, a, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstIterator = source[Symbol.iterator]();
                        secondIterator = second[Symbol.iterator]();
                        _a.label = 1;
                    case 1:
                        if (!true) return [3, 5];
                        a = firstIterator.next();
                        b = secondIterator.next();
                        if (!(a.done && b.done)) return [3, 2];
                        return [3, 5];
                    case 2: return [4, shared_1.AsTuple(a.value, b.value)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3, 1];
                    case 5: return [2];
                }
            });
        }
        return new BasicEnumerable(iterator);
    };
    Enumerable.zip_2 = function (source, second, resultSelector) {
        return new BasicEnumerable(function () { return zipiterator(source, second, resultSelector); });
    };
    return Enumerable;
}());
exports.Enumerable = Enumerable;
function zipiterator(source, second, resultSelector) {
    var firstIterator, secondIterator, a, b;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstIterator = source[Symbol.iterator]();
                secondIterator = second[Symbol.iterator]();
                _a.label = 1;
            case 1:
                if (!true) return [3, 5];
                a = firstIterator.next();
                b = secondIterator.next();
                if (!(a.done && b.done)) return [3, 2];
                return [3, 5];
            case 2: return [4, resultSelector(a.value, b.value)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [3, 1];
            case 5: return [2];
        }
    });
}
var BaseEnumerable = (function () {
    function BaseEnumerable() {
    }
    BaseEnumerable.prototype.aggregate = function (seedOrFunc, func, resultSelector) {
        return Enumerable.aggregate(this, seedOrFunc, func, resultSelector);
    };
    BaseEnumerable.prototype.all = function (predicate) {
        return Enumerable.all(this, predicate);
    };
    BaseEnumerable.prototype.any = function (predicate) {
        return Enumerable.any(this, predicate);
    };
    BaseEnumerable.prototype.average = function (selector) {
        return Enumerable.average(this, selector);
    };
    BaseEnumerable.prototype.concat = function (second) {
        return Enumerable.concat(this, second);
    };
    BaseEnumerable.prototype.contains = function (value, comparer) {
        return Enumerable.contains(this, value, comparer);
    };
    BaseEnumerable.prototype.count = function (predicate) {
        return Enumerable.count(this, predicate);
    };
    BaseEnumerable.prototype.distinct = function (comparer) {
        return Enumerable.distinct(this, comparer);
    };
    BaseEnumerable.prototype.elementAt = function (index) {
        return Enumerable.elementAt(this, index);
    };
    BaseEnumerable.prototype.elementAtOrDefault = function (index) {
        return Enumerable.elementAtOrDefault(this, index);
    };
    BaseEnumerable.prototype.except = function (second, comparer) {
        return Enumerable.except(this, second, comparer);
    };
    BaseEnumerable.prototype.first = function (predicate) {
        return Enumerable.first(this, predicate);
    };
    BaseEnumerable.prototype.firstOrDefault = function (predicate) {
        return Enumerable.firstOrDefault(this, predicate);
    };
    BaseEnumerable.prototype.each = function (action) {
        return Enumerable.each(this, action);
    };
    BaseEnumerable.prototype.groupBy = function (keySelector, comparer) {
        return Enumerable.groupBy(this, keySelector, comparer);
    };
    BaseEnumerable.prototype.groupByWithSel = function (keySelector, elementSelector, comparer) {
        return Enumerable.groupByWithSel(this, keySelector, elementSelector, comparer);
    };
    BaseEnumerable.prototype.intersect = function (second, comparer) {
        return Enumerable.intersect(this, second, comparer);
    };
    BaseEnumerable.prototype.joinByKey = function (inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
        return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
    };
    BaseEnumerable.prototype.last = function (predicate) {
        return Enumerable.last(this, predicate);
    };
    BaseEnumerable.prototype.lastOrDefault = function (predicate) {
        return Enumerable.lastOrDefault(this, predicate);
    };
    BaseEnumerable.prototype.max = function (selector) {
        return Enumerable.max(this, selector);
    };
    BaseEnumerable.prototype.min = function (selector) {
        return Enumerable.min(this, selector);
    };
    BaseEnumerable.prototype.ofType = function (type) {
        return Enumerable.ofType(this, type);
    };
    BaseEnumerable.prototype.orderBy = function (predicate, comparer) {
        return Enumerable.orderBy(this, predicate, comparer);
    };
    BaseEnumerable.prototype.orderByDescending = function (predicate, comparer) {
        return Enumerable.orderByDescending(this, predicate, comparer);
    };
    BaseEnumerable.prototype.reverse = function () {
        return Enumerable.reverse(this);
    };
    BaseEnumerable.prototype.select = function (keyOrSelector) {
        return Enumerable.select(this, keyOrSelector);
    };
    BaseEnumerable.prototype.selectMany = function (selector) {
        return Enumerable.selectMany(this, selector);
    };
    BaseEnumerable.prototype.sequenceEquals = function (second, comparer) {
        return Enumerable.sequenceEquals(this, second, comparer);
    };
    BaseEnumerable.prototype.single = function (predicate) {
        return Enumerable.single(this, predicate);
    };
    BaseEnumerable.prototype.singleOrDefault = function (predicate) {
        return Enumerable.singleOrDefault(this, predicate);
    };
    BaseEnumerable.prototype.skip = function (count) {
        return Enumerable.skip(this, count);
    };
    BaseEnumerable.prototype.skipWhile = function (predicate) {
        return Enumerable.skipWhile(this, predicate);
    };
    BaseEnumerable.prototype.sum = function (selector) {
        return Enumerable.sum(this, selector);
    };
    BaseEnumerable.prototype.take = function (amount) {
        return Enumerable.take(this, amount);
    };
    BaseEnumerable.prototype.takeWhile = function (predicate) {
        return Enumerable.takeWhile(this, predicate);
    };
    BaseEnumerable.prototype.toArray = function () {
        return Enumerable.toArray(this);
    };
    BaseEnumerable.prototype.toMap = function (selector) {
        return Enumerable.toMap(this, selector);
    };
    BaseEnumerable.prototype.toSet = function () {
        return Enumerable.toSet(this);
    };
    BaseEnumerable.prototype.union = function (second, comparer) {
        return Enumerable.union(this, second, comparer);
    };
    BaseEnumerable.prototype.where = function (predicate) {
        return Enumerable.where(this, predicate);
    };
    BaseEnumerable.prototype.zip = function (second, resultSelector) {
        return Enumerable.zip(this, second, resultSelector);
    };
    return BaseEnumerable;
}());
exports.BaseEnumerable = BaseEnumerable;
var BasicEnumerable = (function (_super) {
    __extends(BasicEnumerable, _super);
    function BasicEnumerable(iterator) {
        var _this = _super.call(this) || this;
        _this.iterator = iterator;
        return _this;
    }
    BasicEnumerable.prototype[Symbol.iterator] = function () {
        return this.iterator();
    };
    return BasicEnumerable;
}(BaseEnumerable));
exports.BasicEnumerable = BasicEnumerable;
var OrderedEnumerable = (function (_super) {
    __extends(OrderedEnumerable, _super);
    function OrderedEnumerable(map, comparer) {
        var _this = _super.call(this, OrderedEnumerable.generate(map, comparer)) || this;
        _this.map = map;
        return _this;
    }
    OrderedEnumerable.unrollAndSort = function (map, comparer) {
        var _a, _b, key, values, _c, _d, value, e_74_1, e_75_1, e_75, _e, e_74, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 12, 13, 14]);
                    _a = __values(__spread(map.keys()).sort(comparer ? comparer : undefined)), _b = _a.next();
                    _g.label = 1;
                case 1:
                    if (!!_b.done) return [3, 11];
                    key = _b.value;
                    values = map.get(key);
                    if (!(values instanceof Map)) return [3, 3];
                    return [5, __values(OrderedEnumerable.unrollAndSort(values, comparer))];
                case 2:
                    _g.sent();
                    return [3, 10];
                case 3:
                    _g.trys.push([3, 8, 9, 10]);
                    _c = __values(values), _d = _c.next();
                    _g.label = 4;
                case 4:
                    if (!!_d.done) return [3, 7];
                    value = _d.value;
                    return [4, value];
                case 5:
                    _g.sent();
                    _g.label = 6;
                case 6:
                    _d = _c.next();
                    return [3, 4];
                case 7: return [3, 10];
                case 8:
                    e_74_1 = _g.sent();
                    e_74 = { error: e_74_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                    }
                    finally { if (e_74) throw e_74.error; }
                    return [7];
                case 10:
                    _b = _a.next();
                    return [3, 1];
                case 11: return [3, 14];
                case 12:
                    e_75_1 = _g.sent();
                    e_75 = { error: e_75_1 };
                    return [3, 14];
                case 13:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_75) throw e_75.error; }
                    return [7];
                case 14: return [2];
            }
        });
    };
    OrderedEnumerable.generate = function (mapFunc, comparer) {
        return function () { return OrderedEnumerable.unrollAndSort(mapFunc(), comparer); };
    };
    OrderedEnumerable.prototype.getMap = function () {
        return this.map();
    };
    OrderedEnumerable.prototype.thenBy = function (keySelector, comparer) {
        return Enumerable.thenBy(this, keySelector, comparer);
    };
    OrderedEnumerable.prototype.thenByDescending = function (keySelector, comparer) {
        return Enumerable.thenByDescending(this, keySelector, comparer);
    };
    return OrderedEnumerable;
}(BasicEnumerable));
exports.OrderedEnumerable = OrderedEnumerable;
var OrderedEnumerableDescending = (function (_super) {
    __extends(OrderedEnumerableDescending, _super);
    function OrderedEnumerableDescending(map, comparer) {
        var _this = _super.call(this, OrderedEnumerableDescending.generate(map, comparer)) || this;
        _this.map = map;
        return _this;
    }
    OrderedEnumerableDescending.unrollAndSort = function (map, comparer) {
        var sortedKeys, i, key, values, _a, _b, value, e_76_1, e_76, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    sortedKeys = __spread(map.keys()).sort(comparer ? comparer : undefined);
                    i = sortedKeys.length - 1;
                    _d.label = 1;
                case 1:
                    if (!(i >= 0)) return [3, 11];
                    key = sortedKeys[i];
                    values = map.get(key);
                    if (!(values instanceof Map)) return [3, 3];
                    return [5, __values(OrderedEnumerableDescending.unrollAndSort(values, comparer))];
                case 2:
                    _d.sent();
                    return [3, 10];
                case 3:
                    _d.trys.push([3, 8, 9, 10]);
                    _a = __values(values), _b = _a.next();
                    _d.label = 4;
                case 4:
                    if (!!_b.done) return [3, 7];
                    value = _b.value;
                    return [4, value];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    _b = _a.next();
                    return [3, 4];
                case 7: return [3, 10];
                case 8:
                    e_76_1 = _d.sent();
                    e_76 = { error: e_76_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_76) throw e_76.error; }
                    return [7];
                case 10:
                    i--;
                    return [3, 1];
                case 11: return [2];
            }
        });
    };
    OrderedEnumerableDescending.generate = function (mapFunc, comparer) {
        return function () { return OrderedEnumerableDescending.unrollAndSort(mapFunc(), comparer); };
    };
    OrderedEnumerableDescending.prototype.getMap = function () {
        return this.map();
    };
    OrderedEnumerableDescending.prototype.thenBy = function (keySelector, comparer) {
        return Enumerable.thenBy(this, keySelector, comparer);
    };
    OrderedEnumerableDescending.prototype.thenByDescending = function (keySelector, comparer) {
        return Enumerable.thenByDescending(this, keySelector, comparer);
    };
    return OrderedEnumerableDescending;
}(BasicEnumerable));
exports.OrderedEnumerableDescending = OrderedEnumerableDescending;
function concatiterator(source1, source2) {
    var source1_1, source1_1_1, x, e_77_1, source2_1, source2_1_1, x, e_78_1, e_77, _a, e_78, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, 6, 7]);
                source1_1 = __values(source1), source1_1_1 = source1_1.next();
                _c.label = 1;
            case 1:
                if (!!source1_1_1.done) return [3, 4];
                x = source1_1_1.value;
                return [4, x];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                source1_1_1 = source1_1.next();
                return [3, 1];
            case 4: return [3, 7];
            case 5:
                e_77_1 = _c.sent();
                e_77 = { error: e_77_1 };
                return [3, 7];
            case 6:
                try {
                    if (source1_1_1 && !source1_1_1.done && (_a = source1_1.return)) _a.call(source1_1);
                }
                finally { if (e_77) throw e_77.error; }
                return [7];
            case 7:
                _c.trys.push([7, 12, 13, 14]);
                source2_1 = __values(source2), source2_1_1 = source2_1.next();
                _c.label = 8;
            case 8:
                if (!!source2_1_1.done) return [3, 11];
                x = source2_1_1.value;
                return [4, x];
            case 9:
                _c.sent();
                _c.label = 10;
            case 10:
                source2_1_1 = source2_1.next();
                return [3, 8];
            case 11: return [3, 14];
            case 12:
                e_78_1 = _c.sent();
                e_78 = { error: e_78_1 };
                return [3, 14];
            case 13:
                try {
                    if (source2_1_1 && !source2_1_1.done && (_b = source2_1.return)) _b.call(source2_1);
                }
                finally { if (e_78) throw e_78.error; }
                return [7];
            case 14: return [2];
        }
    });
}
var ArrayEnumerable = (function (_super) {
    __extends(ArrayEnumerable, _super);
    function ArrayEnumerable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayEnumerable.prototype.aggregate = function (seedOrFunc, func, resultSelector) {
        return Enumerable.aggregate(this, seedOrFunc, func, resultSelector);
    };
    ArrayEnumerable.prototype.all = function (predicate) {
        return _super.prototype.every.call(this, predicate);
    };
    ArrayEnumerable.prototype.any = function (predicate) {
        return this.some(predicate || (function () { return true; }));
    };
    ArrayEnumerable.prototype.average = function (selector) {
        return Enumerable.average(this, selector);
    };
    ArrayEnumerable.prototype.concat = function () {
        var items;
        if (arguments.length === 1) {
            items = arguments[0];
        }
        else {
            items = __spread(arguments);
        }
        if (items instanceof BasicEnumerable) {
            var enumerable_1 = this;
            return new BasicEnumerable(function () { return concatiterator(enumerable_1, items); });
        }
        else {
            return _super.prototype.concat.apply(this, [items]);
        }
    };
    ArrayEnumerable.prototype.contains = function (value, comparer) {
        return Enumerable.contains(this, value, comparer);
    };
    ArrayEnumerable.prototype.count = function (predicate) {
        if (predicate) {
            var count = 0;
            for (var i = 0; i < this.length; i++) {
                if (predicate(this[i]) === true) {
                    count++;
                }
            }
            return count;
        }
        else {
            return this.length;
        }
    };
    ArrayEnumerable.prototype.distinct = function (comparer) {
        return Enumerable.distinct(this, comparer);
    };
    ArrayEnumerable.prototype.elementAt = function (index) {
        if (index >= this.length) {
            throw new shared_1.ArgumentOutOfRangeException("index");
        }
        return this[index];
    };
    ArrayEnumerable.prototype.elementAtOrDefault = function (index) {
        return Enumerable.elementAtOrDefault(this, index);
    };
    ArrayEnumerable.prototype.except = function (second, comparer) {
        return Enumerable.except(this, second, comparer);
    };
    ArrayEnumerable.prototype.first = function (predicate) {
        if (predicate) {
            var value = this.find(predicate);
            if (value === undefined) {
                throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoMatch);
            }
            else {
                return value;
            }
        }
        else {
            if (this.length === 0) {
                throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
            }
            return this[0];
        }
    };
    ArrayEnumerable.prototype.firstOrDefault = function (predicate) {
        if (predicate) {
            var value = this.find(predicate);
            if (value === undefined) {
                return null;
            }
            else {
                return value;
            }
        }
        else {
            return this.length === 0 ? null : this[0];
        }
    };
    ArrayEnumerable.prototype.each = function (action) {
        return Enumerable.each(this, action);
    };
    ArrayEnumerable.prototype.groupBy = function (keySelector, comparer) {
        return Enumerable.groupBy(this, keySelector, comparer);
    };
    ArrayEnumerable.prototype.groupByWithSel = function (keySelector, elementSelector, comparer) {
        return Enumerable.groupByWithSel(this, keySelector, elementSelector, comparer);
    };
    ArrayEnumerable.prototype.intersect = function (second, comparer) {
        return Enumerable.intersect(this, second, comparer);
    };
    ArrayEnumerable.prototype.joinByKey = function (inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
        return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
    };
    ArrayEnumerable.prototype.last = function (predicate) {
        if (predicate) {
            for (var i = this.length - 1; i >= 0; i--) {
                var value = this[i];
                if (predicate(value) === true) {
                    return value;
                }
            }
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoMatch);
        }
        else {
            if (this.length === 0) {
                throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
            }
            return this[this.length - 1];
        }
    };
    ArrayEnumerable.prototype.lastOrDefault = function (predicate) {
        if (predicate) {
            for (var i = this.length - 1; i >= 0; i--) {
                var value = this[i];
                if (predicate(value) === true) {
                    return value;
                }
            }
            return null;
        }
        else {
            return this.length === 0 ? null : this[this.length - 1];
        }
    };
    ArrayEnumerable.prototype.max = function (selector) {
        if (this.length === 0) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        if (selector) {
            var max = Number.MIN_VALUE;
            for (var i = 0; i < this.length; i++) {
                max = Math.max(selector(this[i]), max);
            }
            return max;
        }
        else {
            return Math.max.apply(null, this);
        }
    };
    ArrayEnumerable.prototype.min = function (selector) {
        if (this.length === 0) {
            throw new shared_1.InvalidOperationException(shared_1.ErrorString.NoElements);
        }
        if (selector) {
            var min = Number.MAX_VALUE;
            for (var i = 0; i < this.length; i++) {
                min = Math.min(selector(this[i]), min);
            }
            return min;
        }
        else {
            return Math.min.apply(null, this);
        }
    };
    ArrayEnumerable.prototype.ofType = function (type) {
        return Enumerable.ofType(this, type);
    };
    ArrayEnumerable.prototype.orderBy = function (predicate, comparer) {
        return Enumerable.orderBy(this, predicate, comparer);
    };
    ArrayEnumerable.prototype.orderByDescending = function (predicate, comparer) {
        return Enumerable.orderByDescending(this, predicate, comparer);
    };
    ArrayEnumerable.prototype.reverse = function () {
        _super.prototype.reverse.call(this);
        return this;
    };
    ArrayEnumerable.prototype.select = function (keyOrSelector) {
        return Enumerable.select(this, keyOrSelector);
    };
    ArrayEnumerable.prototype.selectMany = function (selector) {
        return Enumerable.selectMany(this, selector);
    };
    ArrayEnumerable.prototype.sequenceEquals = function (second, comparer) {
        return Enumerable.sequenceEquals(this, second, comparer);
    };
    ArrayEnumerable.prototype.single = function (predicate) {
        return Enumerable.single(this, predicate);
    };
    ArrayEnumerable.prototype.singleOrDefault = function (predicate) {
        return Enumerable.singleOrDefault(this, predicate);
    };
    ArrayEnumerable.prototype.skip = function (count) {
        return Enumerable.skip(this, count);
    };
    ArrayEnumerable.prototype.skipWhile = function (predicate) {
        return Enumerable.skipWhile(this, predicate);
    };
    ArrayEnumerable.prototype.sum = function (selector) {
        return Enumerable.sum(this, selector);
    };
    ArrayEnumerable.prototype.take = function (amount) {
        return Enumerable.take(this, amount);
    };
    ArrayEnumerable.prototype.takeWhile = function (predicate) {
        return Enumerable.takeWhile(this, predicate);
    };
    ArrayEnumerable.prototype.toArray = function () {
        return Enumerable.toArray(this);
    };
    ArrayEnumerable.prototype.toMap = function (selector) {
        return Enumerable.toMap(this, selector);
    };
    ArrayEnumerable.prototype.toSet = function () {
        return Enumerable.toSet(this);
    };
    ArrayEnumerable.prototype.union = function (second, comparer) {
        return Enumerable.union(this, second, comparer);
    };
    ArrayEnumerable.prototype.where = function (predicate) {
        return Enumerable.where(this, predicate);
    };
    ArrayEnumerable.prototype.zip = function (second, resultSelector) {
        return Enumerable.zip(this, second, resultSelector);
    };
    return ArrayEnumerable;
}(Array));
exports.ArrayEnumerable = ArrayEnumerable;
var Grouping = (function (_super) {
    __extends(Grouping, _super);
    function Grouping(key, startingItem) {
        var _this = _super.call(this, 1) || this;
        _this.key = key;
        _this[0] = startingItem;
        return _this;
    }
    return Grouping;
}(ArrayEnumerable));
exports.Grouping = Grouping;
