(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeGenerator_1 = require("../Generators/MakeGenerator");
const Aggregate_1 = require("../Queryable/Aggregate");
const All_1 = require("../Queryable/All");
const Any_1 = require("../Queryable/Any");
const Append_1 = require("../Queryable/Append");
const Average_1 = require("../Queryable/Average");
const Chunk_1 = require("../Queryable/Chunk");
const Concat_1 = require("../Queryable/Concat");
const Contains_1 = require("../Queryable/Contains");
const Count_1 = require("../Queryable/Count");
const CrossJoin_1 = require("../Queryable/CrossJoin");
const DefaultIfEmpty_1 = require("../Queryable/DefaultIfEmpty");
const Distinct_1 = require("../Queryable/Distinct");
const DistinctBy_1 = require("../Queryable/DistinctBy");
const ElementAt_1 = require("../Queryable/ElementAt");
const ElementAtOrDefault_1 = require("../Queryable/ElementAtOrDefault");
const Empty_1 = require("../Queryable/Empty");
const Except_1 = require("../Queryable/Except");
const ExceptBy_1 = require("../Queryable/ExceptBy");
const First_1 = require("../Queryable/First");
const FirstOrDefault_1 = require("../Queryable/FirstOrDefault");
const ForEach_1 = require("../Queryable/ForEach");
const FullJoin_1 = require("../Queryable/FullJoin");
const GroupBy_1 = require("../Queryable/GroupBy");
const GroupJoin_1 = require("../Queryable/GroupJoin");
const InnerJoin_1 = require("../Queryable/InnerJoin");
const Intersect_1 = require("../Queryable/Intersect");
const IntersectBy_1 = require("../Queryable/IntersectBy");
const Join_1 = require("../Queryable/Join");
const Last_1 = require("../Queryable/Last");
const LastOrDefault_1 = require("../Queryable/LastOrDefault");
const LeftJoin_1 = require("../Queryable/LeftJoin");
const LongCount_1 = require("../Queryable/LongCount");
const Max_1 = require("../Queryable/Max");
const MaxBy_1 = require("../Queryable/MaxBy");
const MaxOrDefault_1 = require("../Queryable/MaxOrDefault");
const Min_1 = require("../Queryable/Min");
const MinBy_1 = require("../Queryable/MinBy");
const MinOrDefault_1 = require("../Queryable/MinOrDefault");
const OfType_1 = require("../Queryable/OfType");
const OuterJoin_1 = require("../Queryable/OuterJoin");
const Prepend_1 = require("../Queryable/Prepend");
const Replicate_1 = require("../Queryable/Replicate");
const Reverse_1 = require("../Queryable/Reverse");
const RightJoin_1 = require("../Queryable/RightJoin");
const Select_1 = require("../Queryable/Select");
const SelectMany_1 = require("../Queryable/SelectMany");
const SequenceEqual_1 = require("../Queryable/SequenceEqual");
const Single_1 = require("../Queryable/Single");
const SingleOrDefault_1 = require("../Queryable/SingleOrDefault");
const Skip_1 = require("../Queryable/Skip");
const SkipLast_1 = require("../Queryable/SkipLast");
const SkipWhile_1 = require("../Queryable/SkipWhile");
const Step_1 = require("../Queryable/Step");
const Sum_1 = require("../Queryable/Sum");
const Take_1 = require("../Queryable/Take");
const TakeLast_1 = require("../Queryable/TakeLast");
const TakeWhile_1 = require("../Queryable/TakeWhile");
const ToConversions_1 = require("../Queryable/ToConversions");
const Union_1 = require("../Queryable/Union");
const UnionBy_1 = require("../Queryable/UnionBy");
const Where_1 = require("../Queryable/Where");
const Zip_1 = require("../Queryable/Zip");
class Enumerable {
    constructor(data) {
        // This is hacky but lets me split this GIANT class up into a few dozen files.
        this.aggregate_q_ = Aggregate_1.aggregate;
        this.all_q_ = All_1.all;
        this.any_q_ = Any_1.any_q_;
        this.append_q_ = Append_1.append;
        this.average_q_ = Average_1.average;
        // There's no way to do (Number)foo in JavaScript, and casting in TypeScript isn't emitted.
        // So the cast is being aliased to select so you can do foo.cast(num => Number(num))
        this.cast_q_ = Select_1.select;
        this.chunk_q_ = Chunk_1.chunk;
        this.concat_q_ = Concat_1.concat;
        this.contains_q_ = Contains_1.contains;
        this.count_q_ = Count_1.count;
        this.crossJoin_q_ = CrossJoin_1.crossJoin;
        this.defaultIfEmpty_q_ = DefaultIfEmpty_1.defaultIfEmpty;
        this.distinct_q_ = Distinct_1.distinct;
        this.distinctBy_q_ = DistinctBy_1.distinctBy;
        this.elementAt_q_ = ElementAt_1.elementAt;
        this.elementAtOrDefault_q_ = ElementAtOrDefault_1.elementAtOrDefault;
        this.empty_q_ = Empty_1.empty;
        this.except_q_ = Except_1.except;
        this.exceptBy_q_ = ExceptBy_1.exceptBy;
        this.first_q_ = First_1.first;
        this.firstOrDefault_q_ = FirstOrDefault_1.firstOrDefault;
        this.forEach_q_ = ForEach_1.forEach;
        this.fullJoin_q_ = FullJoin_1.fullJoin;
        this.groupBy_q_ = GroupBy_1.groupBy;
        this.groupJoin_q_ = GroupJoin_1.groupJoin;
        this.innerJoin_q_ = InnerJoin_1.innerJoin;
        this.intersect_q_ = Intersect_1.intersect;
        this.intersectBy_q_ = IntersectBy_1.intersectBy;
        this.join_q_ = Join_1.join;
        this.last_q_ = Last_1.last;
        this.lastOrDefault_q_ = LastOrDefault_1.lastOrDefault;
        this.leftJoin_q_ = LeftJoin_1.leftJoin;
        this.longCount_q_ = LongCount_1.longCount;
        this.max_q_ = Max_1.max;
        this.maxBy_q_ = MaxBy_1.maxBy;
        this.maxOrDefault_q_ = MaxOrDefault_1.maxOrDefault;
        this.min_q_ = Min_1.min;
        this.minBy_q_ = MinBy_1.minBy;
        this.minOrDefault_q_ = MinOrDefault_1.minOrDefault;
        this.ofType_q_ = OfType_1.ofType;
        this.outerJoin_q_ = OuterJoin_1.outerJoin;
        this.prepend_q_ = Prepend_1.prepend;
        this.replicate_q_ = Replicate_1.replicate;
        this.reverse_q_ = Reverse_1.reverse;
        this.rightJoin_q_ = RightJoin_1.rightJoin;
        this.select_q_ = Select_1.select;
        this.selectMany_q_ = SelectMany_1.selectMany;
        this.sequenceEqual_q_ = SequenceEqual_1.sequenceEqual;
        this.single_q_ = Single_1.single;
        this.singleOrDefault_q_ = SingleOrDefault_1.singleOrDefault;
        this.skip_q_ = Skip_1.skip;
        this.skipLast_q_ = SkipLast_1.skipLast;
        this.skipWhile_q_ = SkipWhile_1.skipWhile;
        this.step_q_ = Step_1.step;
        this.sum_q_ = Sum_1.sum;
        this.take_q_ = Take_1.take;
        this.takeLast_q_ = TakeLast_1.takeLast;
        this.takeWhile_q_ = TakeWhile_1.takeWhile;
        this.toArray_q_ = ToConversions_1.toArray;
        this.toDictionary_q_ = ToConversions_1.toDictionary;
        this.toHashSet_q_ = ToConversions_1.toHashSet;
        this.toList_q_ = ToConversions_1.toArray;
        this.toLookup_q_ = ToConversions_1.toLookup;
        this.toMap_q_ = ToConversions_1.toMap;
        this.union_q_ = Union_1.union;
        this.unionBy_q_ = UnionBy_1.unionBy;
        this.where_q_ = Where_1.where;
        this.zip_q_ = Zip_1.zip;
        this._cache = [];
        this._isClosed = false;
        // Normally, we'd go ahead and say the data should be an array, nothing but.
        // But let's be flexible and allow anything. If it's not iterable, then it'll become a one-item iterator.
        this._source = this._ensureBackup(MakeGenerator_1.makeGenerator(data));
    }
    static range_q_(start, len) {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable(function* _range() {
            let i = start;
            const maxval = start + len;
            while (i < maxval) {
                yield i;
                i++;
            }
        }());
    }
    static repeat_q_(element, len) {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable(function* _repeat() {
            let i = 0;
            while (i < len) {
                yield element;
                i++;
            }
        }());
    }
    get _data() {
        // There's not a lot of call for selecting from an enumerable more than once, but someone might
        // want to do it. In C# the only real time this happens is when you use the debugger, but it does happen.
        // But when data has been fetched from the generator, it becomes closed, and every generator in its
        // source is also closed. This is built in to JS and not something we can change.
        // But we can cache the data when we fetch it and return the cache if closed.
        if (this._isClosed) {
            return this._cache;
        }
        return this._source;
    }
    *[Symbol.iterator]() {
        for (const item of this._data) {
            yield item;
        }
    }
    return(value) {
        // For some reason, TypeScript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.return(value);
    }
    throw(e) {
        // For some reason, Typescript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.throw(e);
    }
    next() {
        // But it's ok with the exact same code here. Go figure.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.next();
    }
    toJSON() {
        // Writing an Enumerable to JSON exhausts the enumerator.
        return [...this];
    }
    tryGetNonEnumeratedCount_q_(obj) {
        if (this._isClosed) {
            // We don't have out vars in JS so we have to use an object reference.
            if (obj) {
                obj.value = this._cache.length;
            }
            return true;
        }
        // If not closed, this is a generator, and we can't count it without enumerating it.
        return false;
    }
    // This helper allows methods declared in other files to use generator functions without referencing this._data (requiring it
    // to be public) or using the (function*() {})(data) syntax, which is ugly.
    _extend(func) {
        return new Enumerable(func(this));
    }
    *_ensureBackup(data) {
        for (const item of data) {
            this._cache.push(item);
            yield item;
        }
        this._isClosed = true;
    }
}
exports.Enumerable = Enumerable;

},{"../Generators/MakeGenerator":4,"../Queryable/Aggregate":7,"../Queryable/All":8,"../Queryable/Any":9,"../Queryable/Append":10,"../Queryable/Average":11,"../Queryable/Chunk":12,"../Queryable/Concat":13,"../Queryable/Contains":14,"../Queryable/Count":15,"../Queryable/CrossJoin":16,"../Queryable/DefaultIfEmpty":17,"../Queryable/Distinct":18,"../Queryable/DistinctBy":19,"../Queryable/ElementAt":20,"../Queryable/ElementAtOrDefault":21,"../Queryable/Empty":22,"../Queryable/Except":23,"../Queryable/ExceptBy":24,"../Queryable/First":25,"../Queryable/FirstOrDefault":26,"../Queryable/ForEach":27,"../Queryable/FullJoin":28,"../Queryable/GroupBy":29,"../Queryable/GroupJoin":30,"../Queryable/InnerJoin":31,"../Queryable/Intersect":32,"../Queryable/IntersectBy":33,"../Queryable/Join":34,"../Queryable/Last":35,"../Queryable/LastOrDefault":36,"../Queryable/LeftJoin":37,"../Queryable/LongCount":38,"../Queryable/Max":39,"../Queryable/MaxBy":40,"../Queryable/MaxOrDefault":41,"../Queryable/Min":42,"../Queryable/MinBy":43,"../Queryable/MinOrDefault":44,"../Queryable/OfType":45,"../Queryable/OuterJoin":47,"../Queryable/Prepend":48,"../Queryable/Replicate":49,"../Queryable/Reverse":50,"../Queryable/RightJoin":51,"../Queryable/Select":52,"../Queryable/SelectMany":53,"../Queryable/SequenceEqual":54,"../Queryable/Single":55,"../Queryable/SingleOrDefault":56,"../Queryable/Skip":57,"../Queryable/SkipLast":58,"../Queryable/SkipWhile":59,"../Queryable/Step":60,"../Queryable/Sum":61,"../Queryable/Take":62,"../Queryable/TakeLast":63,"../Queryable/TakeWhile":64,"../Queryable/ToConversions":65,"../Queryable/Union":66,"../Queryable/UnionBy":67,"../Queryable/Where":68,"../Queryable/Zip":69}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
const Enumerable_1 = require("./Enumerable");
class OrderedEnumerable extends Enumerable_1.Enumerable {
    constructor(data, orderBy, comparer, descending = false) {
        super(data);
        this._sorters = [];
        this._sorters.push({ orderBy, comparer: IComparer_1.extractComparer(comparer), descending: descending });
    }
    *[Symbol.iterator]() {
        // Need to sort the data. This needs to process the full list, because the last record could be the one
        // that needs to go first.
        // Two possible approaches here. One is to repeatedly attack the list, going after the min record and
        // returning it, which is heavy on the CPU but light on memory, or what I'm going to do, which is load
        // an array and use the built-in sort() method, which is heavy on memory but light on CPU.
        let sortingFunction;
        for (const hat of this._sorters) {
            sortingFunction = buildSorter(hat.orderBy, hat.comparer, hat.descending, sortingFunction);
        }
        const sortedData = [...this._data].sort(sortingFunction);
        for (const item of sortedData) {
            yield item;
        }
    }
    thenBy_q_(orderBy, comparer) {
        if (!orderBy) {
            orderBy = ((o) => o);
        }
        this._sorters.push({ orderBy, comparer: IComparer_1.extractComparer(comparer), descending: false });
        return this;
    }
    thenByDescending_q_(orderBy, comparer) {
        if (!orderBy) {
            orderBy = ((o) => o);
        }
        this._sorters.push({ orderBy, comparer: IComparer_1.extractComparer(comparer), descending: true });
        return this;
    }
}
exports.OrderedEnumerable = OrderedEnumerable;
function buildSorter(keySelector, comparer, descending = false, initial) {
    let compare = IComparer_1.extractComparer(comparer);
    if (!compare) {
        compare = IComparer_1.defaultComparer;
    }
    if (initial) {
        return function _thenBy(x, y) {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return initial(x, y) || compare(key2, key1);
            }
            return initial(x, y) || compare(key1, key2);
        };
    }
    else {
        return function _orderBy(x, y) {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return compare(key2, key1);
            }
            return compare(key1, key2);
        };
    }
}

},{"./../Types/IComparer":71,"./Enumerable":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enumerable_1 = require("./Enumerable/Enumerable");
/**
 * Helper to add extension methods to Array and Set. These methods duplicate the names in Enumerable, but what they do is create a new
 * Enumerable and then pass the call onward, so it seems as if the array is Enumerable.
 *
 * This can be modified to support any object. If you do so, remember to set writable: true so Enumerable can have its own
 * implementations.
 */
function extend(name, extension) {
    Object.defineProperty(Array.prototype, name, {
        value: function _convertToEnumerable() {
            return new Enumerable_1.Enumerable(this)[name](...arguments);
        }
    });
    Object.defineProperty(Set.prototype, name, {
        value: function _convertToEnumerable() {
            return new Enumerable_1.Enumerable(this)[name](...arguments);
        }
    });
}
exports.extend = extend;

},{"./Enumerable/Enumerable":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* makeGenerator(iter) {
    if (typeof iter === "string" || iterableGuard(iter)) {
        yield* iter;
    }
    else if (arrayLikeGuard(iter)) {
        yield* Array.from(iter);
    }
    else {
        yield iter;
    }
}
exports.makeGenerator = makeGenerator;
function iterableGuard(obj) {
    return typeof obj === "object" && obj && Symbol.iterator in obj;
}
function arrayLikeGuard(obj) {
    // I don't think this is perfect but I can't find a way to validate the other part of ArrayLike, the key.
    return typeof obj === "object" && obj &&
        "length" in obj && typeof obj.length === "number" &&
        obj.length >= 0;
}

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeGenerator_1 = require("./MakeGenerator");
/**
 * JS doesn't give a way to restart a generator, which causes a great deal of trouble when you need to check it multiple times.
 * For example, if you do an inner join, you need to check each element of the left with each element of the right.
 * You need the ability to rebuild the generator from the original iterable. But there isn't a reference to the original iterable ANYWHERE.
 * As a result, the only way to make this work is to make a copy of the data as you iterate it.
 * This could double the amount of space needed, but it's a limitation of the technology.
 * We don't actually know if a generator is being used. The type is "object." So you could be wasting memory by using this. No way to know.
 */
class RestartableGenerator {
    constructor(iterable, flexMemory = false) {
        this.backup = [];
        this.iterator = cycleGenerator(iterable, this.backup);
        this.flexMemory = flexMemory;
    }
    [Symbol.iterator]() {
        return this.iterator[Symbol.iterator]();
    }
    asQueryable() {
        return this.iterator.asQueryable();
    }
    restart() {
        if (this.flexMemory) {
            const i = this.backup.slice(0);
            this.backup = [];
            this.iterator = cycleGenerator(i, this.backup);
        }
        else {
            this.iterator = MakeGenerator_1.makeGenerator(this.backup);
        }
    }
}
exports.RestartableGenerator = RestartableGenerator;
function* cycleGenerator(iter, backup) {
    for (const x of iter) {
        backup.push(x);
        yield x;
    }
}
exports.cycleGenerator = cycleGenerator;

},{"./MakeGenerator":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enumerable_1 = require("./Enumerable/Enumerable");
const Extend_1 = require("./Extend");
const Aggregate_1 = require("./Queryable/Aggregate");
const All_1 = require("./Queryable/All");
const Any_1 = require("./Queryable/Any");
const Append_1 = require("./Queryable/Append");
const Average_1 = require("./Queryable/Average");
const Chunk_1 = require("./Queryable/Chunk");
const Concat_1 = require("./Queryable/Concat");
const Contains_1 = require("./Queryable/Contains");
const Count_1 = require("./Queryable/Count");
const CrossJoin_1 = require("./Queryable/CrossJoin");
const DefaultIfEmpty_1 = require("./Queryable/DefaultIfEmpty");
const Distinct_1 = require("./Queryable/Distinct");
const DistinctBy_1 = require("./Queryable/DistinctBy");
const ElementAt_1 = require("./Queryable/ElementAt");
const ElementAtOrDefault_1 = require("./Queryable/ElementAtOrDefault");
const Empty_1 = require("./Queryable/Empty");
const Except_1 = require("./Queryable/Except");
const ExceptBy_1 = require("./Queryable/ExceptBy");
const First_1 = require("./Queryable/First");
const FirstOrDefault_1 = require("./Queryable/FirstOrDefault");
const ForEach_1 = require("./Queryable/ForEach");
const FullJoin_1 = require("./Queryable/FullJoin");
const GroupBy_1 = require("./Queryable/GroupBy");
const GroupJoin_1 = require("./Queryable/GroupJoin");
const InnerJoin_1 = require("./Queryable/InnerJoin");
const Intersect_1 = require("./Queryable/Intersect");
const IntersectBy_1 = require("./Queryable/IntersectBy");
const Join_1 = require("./Queryable/Join");
const Last_1 = require("./Queryable/Last");
const LastOrDefault_1 = require("./Queryable/LastOrDefault");
const LongCount_1 = require("./Queryable/LongCount");
const Max_1 = require("./Queryable/Max");
const MaxBy_1 = require("./Queryable/MaxBy");
const MaxOrDefault_1 = require("./Queryable/MaxOrDefault");
const Min_1 = require("./Queryable/Min");
const MinBy_1 = require("./Queryable/MinBy");
const MinOrDefault_1 = require("./Queryable/MinOrDefault");
const OfType_1 = require("./Queryable/OfType");
const OrderBy_1 = require("./Queryable/OrderBy");
const OuterJoin_1 = require("./Queryable/OuterJoin");
const Prepend_1 = require("./Queryable/Prepend");
const Replicate_1 = require("./Queryable/Replicate");
const Reverse_1 = require("./Queryable/Reverse");
const RightJoin_1 = require("./Queryable/RightJoin");
const Select_1 = require("./Queryable/Select");
const SelectMany_1 = require("./Queryable/SelectMany");
const SequenceEqual_1 = require("./Queryable/SequenceEqual");
const Single_1 = require("./Queryable/Single");
const SingleOrDefault_1 = require("./Queryable/SingleOrDefault");
const Skip_1 = require("./Queryable/Skip");
const SkipLast_1 = require("./Queryable/SkipLast");
const SkipWhile_1 = require("./Queryable/SkipWhile");
const Step_1 = require("./Queryable/Step");
const Sum_1 = require("./Queryable/Sum");
const Take_1 = require("./Queryable/Take");
const TakeLast_1 = require("./Queryable/TakeLast");
const TakeWhile_1 = require("./Queryable/TakeWhile");
const ToConversions_1 = require("./Queryable/ToConversions");
const Union_1 = require("./Queryable/Union");
const UnionBy_1 = require("./Queryable/UnionBy");
const Where_1 = require("./Queryable/Where");
const Zip_1 = require("./Queryable/Zip");
String.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj) {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.length;
    }
    return true;
};
Array.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj) {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.length;
    }
    return true;
};
Set.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj) {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.size;
    }
    return true;
};
Object.prototype.asQueryable = function () {
    // If the object is iterable, this will be an ordinary generator. If it is not,
    // this will be an iterable with a single item. This makes it so I don't have to
    // guess what prototypes need to be modified.
    return new Enumerable_1.Enumerable(this);
};
String.prototype.asQueryable = function () {
    // Strings are iterable, but I didn't want to add all the enumerable methods to them.
    return new Enumerable_1.Enumerable(this);
};
Number.prototype.asQueryable = function () {
    // (4).asQueryable() is treated like range()
    return Enumerable_1.Enumerable.range_q_(0, this);
};
Boolean.prototype.asQueryable = function () {
    if (this) {
        // true.asQueryable() is pretty useless: [false, true] ascending. Might be useful.
        return new Enumerable_1.Enumerable([false, true]);
    }
    else {
        // false.asQueryable() is also pretty useless: [true, false] descending. Might be useful.
        return new Enumerable_1.Enumerable([true, false]);
    }
};
// Add stub functions onto Array.prototype and Set.prototype to make the object into an Enumerable
// and then call the Enumerable method
Extend_1.extend("aggregate_q_", Aggregate_1.aggregate);
Extend_1.extend("all_q_", All_1.all);
Extend_1.extend("any_q_", Any_1.any_q_);
Extend_1.extend("append_q_", Append_1.append);
Extend_1.extend("average_q_", Average_1.average);
Extend_1.extend("cast_q_", Select_1.select);
Extend_1.extend("chunk_q_", Chunk_1.chunk);
Extend_1.extend("concat_q_", Concat_1.concat);
Extend_1.extend("contains_q_", Contains_1.contains);
Extend_1.extend("count_q_", Count_1.count);
Extend_1.extend("crossJoin_q_", CrossJoin_1.crossJoin);
Extend_1.extend("defaultIfEmpty_q_", DefaultIfEmpty_1.defaultIfEmpty);
Extend_1.extend("distinct_q_", Distinct_1.distinct);
Extend_1.extend("distinctBy_q_", DistinctBy_1.distinctBy);
Extend_1.extend("elementAt_q_", ElementAt_1.elementAt);
Extend_1.extend("elementAtOrDefault_q_", ElementAtOrDefault_1.elementAtOrDefault);
Extend_1.extend("empty_q_", Empty_1.empty);
Extend_1.extend("except_q_", Except_1.except);
Extend_1.extend("exceptBy_q_", ExceptBy_1.exceptBy);
Extend_1.extend("first_q_", First_1.first);
Extend_1.extend("firstOrDefault_q_", FirstOrDefault_1.firstOrDefault);
Extend_1.extend("forEach_q_", ForEach_1.forEach);
Extend_1.extend("fullJoin_q_", FullJoin_1.fullJoin);
Extend_1.extend("groupBy_q_", GroupBy_1.groupBy);
Extend_1.extend("groupJoin_q_", GroupJoin_1.groupJoin);
Extend_1.extend("innerJoin_q_", InnerJoin_1.innerJoin);
Extend_1.extend("intersect_q_", Intersect_1.intersect);
Extend_1.extend("intersectBy_q_", IntersectBy_1.intersectBy);
Extend_1.extend("join_q_", Join_1.join);
Extend_1.extend("last_q_", Last_1.last);
Extend_1.extend("lastOrDefault_q_", LastOrDefault_1.lastOrDefault);
Extend_1.extend("leftJoin_q_", LastOrDefault_1.lastOrDefault);
Extend_1.extend("longCount_q_", LongCount_1.longCount);
Extend_1.extend("max_q_", Max_1.max);
Extend_1.extend("maxBy_q_", MaxBy_1.maxBy);
Extend_1.extend("maxOrDefault_q_", MaxOrDefault_1.maxOrDefault);
Extend_1.extend("min_q_", Min_1.min);
Extend_1.extend("minBy_q_", MinBy_1.minBy);
Extend_1.extend("minOrDefault_q_", MinOrDefault_1.minOrDefault);
Extend_1.extend("ofType_q_", OfType_1.ofType);
Extend_1.extend("orderBy_q_", OrderBy_1.orderBy);
Extend_1.extend("orderByDescending_q_", OrderBy_1.orderByDescending);
Extend_1.extend("outerJoin_q_", OuterJoin_1.outerJoin);
Extend_1.extend("prepend_q_", Prepend_1.prepend);
Extend_1.extend("replicate_q_", Replicate_1.replicate);
Extend_1.extend("reverse_q_", Reverse_1.reverse);
Extend_1.extend("rightJoin_q_", RightJoin_1.rightJoin);
Extend_1.extend("select_q_", Select_1.select);
Extend_1.extend("selectMany_q_", SelectMany_1.selectMany);
Extend_1.extend("sequenceEqual_q_", SequenceEqual_1.sequenceEqual);
Extend_1.extend("single_q_", Single_1.single);
Extend_1.extend("singleOrDefault_q_", SingleOrDefault_1.singleOrDefault);
Extend_1.extend("skip_q_", Skip_1.skip);
Extend_1.extend("skipLast_q_", SkipLast_1.skipLast);
Extend_1.extend("skipWhile_q_", SkipWhile_1.skipWhile);
Extend_1.extend("step_q_", Step_1.step);
Extend_1.extend("sum_q_", Sum_1.sum);
Extend_1.extend("take_q_", Take_1.take);
Extend_1.extend("takeLast_q_", TakeLast_1.takeLast);
Extend_1.extend("takeWhile_q_", TakeWhile_1.takeWhile);
Extend_1.extend("toArray_q_", ToConversions_1.toArray);
Extend_1.extend("toDictionary_q_", ToConversions_1.toDictionary);
Extend_1.extend("toList_q_", ToConversions_1.toArray);
Extend_1.extend("toLookup_q_", ToConversions_1.toLookup);
Extend_1.extend("toHashSet_q_", ToConversions_1.toHashSet);
Extend_1.extend("toMap_q_", ToConversions_1.toMap);
Extend_1.extend("union_q_", Union_1.union);
Extend_1.extend("unionBy_q_", UnionBy_1.unionBy);
Extend_1.extend("where_q_", Where_1.where);
Extend_1.extend("zip_q_", Zip_1.zip);
// As a workaround for orderby (javascript can't create a class that references a descendant class),
// add these to the Enumerable class in a way that doesn't explode
Enumerable_1.Enumerable.prototype.orderBy_q_ = OrderBy_1.orderBy;
Enumerable_1.Enumerable.prototype.orderByDescending_q_ = OrderBy_1.orderByDescending;

},{"./Enumerable/Enumerable":1,"./Extend":3,"./Queryable/Aggregate":7,"./Queryable/All":8,"./Queryable/Any":9,"./Queryable/Append":10,"./Queryable/Average":11,"./Queryable/Chunk":12,"./Queryable/Concat":13,"./Queryable/Contains":14,"./Queryable/Count":15,"./Queryable/CrossJoin":16,"./Queryable/DefaultIfEmpty":17,"./Queryable/Distinct":18,"./Queryable/DistinctBy":19,"./Queryable/ElementAt":20,"./Queryable/ElementAtOrDefault":21,"./Queryable/Empty":22,"./Queryable/Except":23,"./Queryable/ExceptBy":24,"./Queryable/First":25,"./Queryable/FirstOrDefault":26,"./Queryable/ForEach":27,"./Queryable/FullJoin":28,"./Queryable/GroupBy":29,"./Queryable/GroupJoin":30,"./Queryable/InnerJoin":31,"./Queryable/Intersect":32,"./Queryable/IntersectBy":33,"./Queryable/Join":34,"./Queryable/Last":35,"./Queryable/LastOrDefault":36,"./Queryable/LongCount":38,"./Queryable/Max":39,"./Queryable/MaxBy":40,"./Queryable/MaxOrDefault":41,"./Queryable/Min":42,"./Queryable/MinBy":43,"./Queryable/MinOrDefault":44,"./Queryable/OfType":45,"./Queryable/OrderBy":46,"./Queryable/OuterJoin":47,"./Queryable/Prepend":48,"./Queryable/Replicate":49,"./Queryable/Reverse":50,"./Queryable/RightJoin":51,"./Queryable/Select":52,"./Queryable/SelectMany":53,"./Queryable/SequenceEqual":54,"./Queryable/Single":55,"./Queryable/SingleOrDefault":56,"./Queryable/Skip":57,"./Queryable/SkipLast":58,"./Queryable/SkipWhile":59,"./Queryable/Step":60,"./Queryable/Sum":61,"./Queryable/Take":62,"./Queryable/TakeLast":63,"./Queryable/TakeWhile":64,"./Queryable/ToConversions":65,"./Queryable/Union":66,"./Queryable/UnionBy":67,"./Queryable/Where":68,"./Queryable/Zip":69}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * aggregate_q_: Applies an accumulator function over a sequence.
 * optional initial value acts as seed value
 * optional selectFunction selects the result
 */
function aggregate(initialOrAccumulator, accumulatorFunction, selectFunction) {
    let initialValueProvided = false;
    let seeded = false;
    let value;
    let accumulator;
    let selector;
    // This is basically the same as reduce, except it doesn't require copying the whole thing to an array first
    // The wack way that typescript does overloads really slops up the code for keeping a linq api
    // It also required two use of "any" above that I did not like doing.
    if (!accumulatorFunction) {
        accumulator = initialOrAccumulator;
    }
    else {
        initialValueProvided = true;
        seeded = true;
        value = initialOrAccumulator;
        accumulator = accumulatorFunction;
        selector = selectFunction;
    }
    for (const item of this) {
        // If there is no seed, then the first value is used as the seed
        // After the first item, it is populated. But typescript doesn't know understand that, so any needs to be used sometimes.
        if (!seeded) {
            value = item;
            seeded = true;
        }
        else {
            value = accumulator(value, item);
        }
    }
    // C# only throws an error in the overload without a seed value.
    if (!seeded) {
        throw new Error("Sequence contains no elements");
    }
    if (selector) {
        return selector(value);
    }
    else {
        // Typescript doesn't understand that _value is not undefined after the _value = item line (unless the iterable type allows it)
        // Unless the iterator contains undefined, of course. That's totally legal in JS
        return value;
    }
}
exports.aggregate = aggregate;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * all_q_: Determines whether all elements of a sequence satisfy a condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function all(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        if (!filter(item, index++)) {
            return false;
        }
    }
    return true;
}
exports.all = all;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * any_q_: Determines whether any elements of a sequence satisfy an optional condition
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function any_q_(filter) {
    for (const item of this) {
        if (!filter) {
            return true;
        }
        let index = 0;
        if (filter(item, index++)) {
            return true;
        }
    }
    return false;
}
exports.any_q_ = any_q_;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * append_q_: Appends a value to the end of the sequence
 */
function append(newItem) {
    return this._extend(function* _append(data) {
        yield* data;
        yield newItem;
    });
}
exports.append = append;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoneType_1 = require("../Types/NoneType");
/**
 * average_q_: computes the average of a sequence of numbers.
 * optional transform function lets us calculate using values obtained by invoking afunction on each element of the sequence.
 */
function average(selectFunction) {
    let sum = 0;
    let count = 0;
    let containsNull = false;
    for (const item of this) {
        let tmp;
        if (selectFunction) {
            tmp = selectFunction(item);
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(tmp)) {
                containsNull = true;
                continue;
            }
        }
        else {
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(item)) {
                containsNull = true;
                continue;
            }
        }
        tmp = Number(item);
        if (isNaN(tmp)) {
            throw new Error("Invalid data type for average.");
        }
        sum = sum + tmp;
        count++;
    }
    if (!count) {
        // In the C# version, if the sequence is all null, this returns null instead of throwing
        if (containsNull) {
            return;
        }
        throw new Error("Sequence contains no elements");
    }
    return sum / count;
}
exports.average = average;

},{"../Types/NoneType":74}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * chunk_q_: splits the elements of a sequence into chunks of size at most "size"
 */
function chunk(size) {
    if (!size || size < 1) {
        throw new Error("Argument out of range");
    }
    return this._extend(function* _chunk(data) {
        let counter = size;
        let tmp = [];
        for (const item of data) {
            tmp.push(item);
            counter--;
            if (counter <= 0) {
                yield tmp;
                tmp = [];
                counter = size;
            }
        }
        if (tmp.length) {
            yield tmp;
        }
    });
}
exports.chunk = chunk;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * concat_q_: concatenates two sequences
 */
function concat(second) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _concat(data) {
        yield* data;
        yield* second;
    });
}
exports.concat = concat;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * contains_q_: determines whether a sequence contains a specified element
 * optional equalityComparer function to indicate if record matches
 */
function contains(value, comparer) {
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    for (const item of this) {
        if (!compare) {
            if (item === value) {
                return true;
            }
        }
        else {
            if ((compare(item, value))) {
                return true;
            }
        }
    }
    return false;
}
exports.contains = contains;

},{"../Types/IEqualityComparer":72}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * count_q_: returns a number that represents how many elements in the specified sequence satisfy an optional condition
 */
function count(condition) {
    let ctr = 0;
    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr++;
            }
        }
        else {
            ctr++;
        }
    }
    return ctr;
}
exports.count = count;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * crossJoin_q_: Create a simple cartesian join (every record from table 1 along with every record from table 2)
 */
function crossJoin(second, selectFunction) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _crossJoin(data) {
        // We need the ability to match the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                yield output(leftItem, rightItem);
            }
            rightGen.restart();
        }
    });
}
exports.crossJoin = crossJoin;

},{"../Generators/RestartableGenerator":5}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * defaultIfEmpty_q_: returns the sequence or the (optional) default value if the sequence is empty.
 * Default in is a paramter. IF it is left out, undefined is returned.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially an empty one.)
 */
function defaultIfEmpty(defaultValue) {
    return this._extend(function* _defaultIfEmpty(data) {
        let empty = true;
        for (const item of data) {
            empty = false;
            yield item;
        }
        if (empty) {
            yield defaultValue;
        }
    });
}
exports.defaultIfEmpty = defaultIfEmpty;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * distinct_q_: Returns distinct elements from a sequence by using an optional equality comparer to compare values
 */
function distinct(comparer) {
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _distinct(data) {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!(history.has(item))) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.distinct = distinct;

},{"./../Types/IEqualityComparer":72}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * distinctBy_q_: Returns distinct elements from a sequence based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
function distinctBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _distinctBy(data) {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!(history.has(key))) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.distinctBy = distinctBy;

},{"./../Types/IEqualityComparer":72}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * elementAt_q_: Returns the element at a specified index in a sequence
 */
function elementAt(index) {
    let i = 0;
    for (const item of this) {
        if (i === index) {
            return item;
        }
        i++;
    }
    throw new Error("Index out of range.");
}
exports.elementAt = elementAt;

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * elementAtOrDefault_q_: Returns the element at a specified index in a sequence.
 * Returns an optional default value if index is out of range, or undefined if not supplied.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have.)
 */
function elementAtOrDefault(index, defaultValue) {
    let i = 0;
    for (const item of this) {
        if (i === index) {
            return item;
        }
        i++;
    }
    return defaultValue;
}
exports.elementAtOrDefault = elementAtOrDefault;

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enumerable_1 = require("../Enumerable/Enumerable");
/**
 * empty_q_: Returns an empty IEnumerable<T> that has the specified type argument.
 * Note that types are typescript-only fictitious entities that aren't emitted.
 */
function empty() {
    return new Enumerable_1.Enumerable([]);
}
exports.empty = empty;

},{"../Enumerable/Enumerable":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * except_q_: Produces the set difference (distinct) of two sequences.
 * optional equality comparer can be used to compare values
 */
function except(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _except(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.
        // Start by loading the history with the second set. Then, we can do what we already did for distinct() and it'll pull out the matches
        const history = new Set();
        for (const item of second) {
            history.add(item);
        }
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!(history.has(item))) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.except = except;

},{"./../Types/IEqualityComparer":72}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * exceptBy_q_: Produces the set difference of two sequences based on keys (distinct keys) returned by a key selector function.
 * optional equality comparer can be used to compare values
 */
function exceptBy(second, keySelector, comparer) {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _exceptBy(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.
        const history = new Set();
        for (const item of second) {
            history.add(keySelector(item));
        }
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!(history.has(key))) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.exceptBy = exceptBy;

},{"./../Types/IEqualityComparer":72}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * first_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty.
 * optional filter condition can be supplied
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function first(matchFunction) {
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            return item;
        }
        else if (matchFunction(item, index++)) {
            return item;
        }
    }
    throw new Error("Sequence has no elements.");
}
exports.first = first;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * firstOrDefault_q_: Returns the first element in a sequence.
 * optional filter condition can be supplied
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 *
 * If the filtered sequence is empty, it returns the default value.
 * The default value is provided by a parameter or is undefined.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially not an empty sequence.)
 *
 * The following method explained: firstOrDefault_q_({ defaultValue }: { defaultValue: T }): T;
 * In JavaScript, if you call the method with a single parameter and want it to be the default, there's no clean way to indicate that this
 * is what you want, it breaks the standard case.
 *
 * Consider the following: arrayOfPredicates.firstOrDefault_q_(myFunc)
 * Is this supposed to be
 *      arrayOfPredicates.where_q_(myFunc).firstOrDefault_q_()
 * or
 *      arrayOfPredicates.firstOrDefault_q_() || myFunc
 *
 * The only to make it work is to call like this:
 *      arrayOfPredicates.firstOrDefault_q_({ defaultValue: something })
 */
function firstOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    let index = 0;
    for (const item of this) {
        if (!tester) {
            return item;
        }
        else if (tester(item, index++)) {
            return item;
        }
    }
    return def;
}
exports.firstOrDefault = firstOrDefault;

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * forEach_q_: Execute a callback function on each row in the enumerable, returning no results.
 */
function forEach(callbackfn, thisArg) {
    if (!callbackfn) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        callbackfn.call(thisArg, item, index++);
    }
}
exports.forEach = forEach;

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * fullJoin_q_: A friendly helper to create a simple full outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function fullJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need a place to track all items in the right that got sent
        const sentRights = new Set();
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    leftMatched = true;
                    sentRights.add(rightItem);
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
        // Now go through the right side once more and send anything that didn't get sent
        for (const rightItem of rightGen) {
            if (!sentRights.has(rightItem)) {
                yield output(undefined, rightItem);
            }
        }
    });
}
exports.fullJoin = fullJoin;

},{"../Generators/RestartableGenerator":5}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
const Grouping_1 = require("../Types/Grouping");
/**
 * Groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key.
 * optional element selection function (either second argument or enclosed in a { element: func } object)
 * optional output projection function (either third argument or enclosed in a { project: func } object)
 * optional equality comparer function (either fourth argument or enclosed in a { equals: func } object)
 *
 * The number of overloads in C# is HUGE. If I were microsoft, I wouldn't have done this, as elementFunction could be
 * handled in keySelector and outputFuntion could be handled by a select() following the groupBy().
 * There's a point beyond which more options becomes less helpful rather than more.
 * See join() for another example of functions people have to google before using.
 *
 * The weaknesses of the typescript typing and overload systems really shine through in a giant like this.
 * Iin javascript it's not possible to know what inputs are provided in a lot of places. The difference between
 * a projection function and a key selector function is that one takes one input and one takes two. This is easy for
 * C# to detect, but in javascript, all functions are just function() that take any number of inputs. Typescript
 * can know which one you're using, but the emitted javascript code has no idea.
 *
 * This overload setup is impossible in JS:
 *      function groupBy_q_(keySelector, elementFunction?: function);
 *      function groupBy_q_(keySelector, outputFunction?: function);
 * because JS sees only:
 *      function groupBy_q_(function, function)
 * Which one was it? No clue.
 *
 * Because of this, as long as you pass
 *  only keySelector, or
 *  only keySelector and elementFunction, o
 *  only keySelector, elementFunction, outputFunction, or
 *  only keySelector, elementFunction, outputFunction and comparer,
 * you don't have to do anything special, but any overload which omits a previous value must be in the form of
 *      const result = arr.groupBy_q_(keySelector, { param3: value })
 * which translates to
 *       const result = arr.groupBy_q_(keySelector, undefined, value)
 */
function groupBy(groupFunction, elementFunction, outputFunction, comparer) {
    if (!groupFunction) {
        throw new Error("Required argument is null");
    }
    let elementor;
    if (elementFunction && typeof elementFunction === "function") {
        elementor = elementFunction;
    }
    else if (elementFunction && "element" in elementFunction) {
        elementor = elementFunction.element;
    }
    let projector;
    if (outputFunction && typeof outputFunction === "function") {
        projector = outputFunction;
    }
    else if (elementFunction && "project" in elementFunction) {
        projector = elementFunction.project;
    }
    else if (outputFunction && "project" in outputFunction) {
        projector = outputFunction.project;
    }
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = IEqualityComparer_1.extractEqualityComparer(comparer);
    }
    else if (elementFunction && "equals" in elementFunction) {
        equalizer = elementFunction.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    return this._extend(function* _groupBy(data) {
        // Even though this is returning as if it's deferred execution, it's not really deferred. It has to process the full list
        // to know what times each individual key appears.
        const cache = new Map();
        for (const row of data) {
            const extractedKey = groupFunction(row);
            let match;
            if (equalizer) {
                for (const innerItem of cache.keys()) {
                    if (equalizer(innerItem, extractedKey)) {
                        match = cache.get(innerItem);
                        break;
                    }
                }
            }
            else {
                match = cache.get(extractedKey);
            }
            if (match) {
                match.add(row);
            }
            else {
                cache.set(extractedKey, new Grouping_1.Grouping(extractedKey, row, elementor));
            }
        }
        for (const row of cache.entries()) {
            if (projector) {
                yield projector(row[0], row[1].values);
            }
            else if (elementor) {
                yield row[1];
            }
            else {
                yield row[1];
            }
        }
    });
}
exports.groupBy = groupBy;

},{"../Types/Grouping":70,"./../Types/IEqualityComparer":72}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
const Grouping_1 = require("../Types/Grouping");
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * groupJoin_q_: Correlates the elements of two sequences based on key equality and groups the results.
 *
 * This is a sort of a combination of outer join and half a group by (only the second sequence is grouped).
 * The output function, which determines the output, is required. This doesn't seem useful enough for me to come up with a default output.
 */
function groupJoin(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector || !outputFunction) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _groupJoin(data) {
        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        const right = [];
        for (const leftItem of data) {
            let grouping;
            for (const rightItem of rightGen) {
                let match = false;
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                if (compare) {
                    match = compare(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    if (grouping) {
                        grouping.add(rightItem);
                    }
                    else {
                        grouping = new Grouping_1.Grouping(leftKey, rightItem);
                    }
                }
            }
            if (grouping) {
                yield outputFunction(leftItem, grouping.values);
            }
            else {
                yield outputFunction(leftItem, []);
            }
            rightGen.restart();
        }
    });
}
exports.groupJoin = groupJoin;

},{"../Generators/RestartableGenerator":5,"../Types/Grouping":70,"../Types/IEqualityComparer":72}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * innerJoin_q_: A friendly helper to create a simple inner join. This combines the two key lookups and the custom equality comparer into a
 * single function input. For most programmers, this is all the complexity you'll need.
 */
function innerJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _innerJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // The right side can theoretically be a generator. We don't know, but we have to take that chance.
        // JS doesn't give a way to restart a generator, so we can only check right once without some extra BS to allow it to restart
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    yield output(leftItem, rightItem);
                }
            }
            rightGen.restart();
        }
    });
}
exports.innerJoin = innerJoin;

},{"../Generators/RestartableGenerator":5}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * intersect_q_: Produces the set intersection of two sequences.
 * optional equality comparer can be provided
 */
function intersect(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _intersect(data) {
        const secondSet = new Set();
        for (const item of second) {
            secondSet.add(item);
        }
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(item, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(item, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (secondSet.has(item) &&
                    !history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.intersect = intersect;

},{"../Types/IEqualityComparer":72}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * intersectBy_q_: Produces the set intersection of two sequences based on keys returned by a key selector function.
 * optional equality comparer can be provided
 */
function intersectBy(second, keySelector, comparer) {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _intersectBy(data) {
        const secondSet = new Set();
        for (const item of second) {
            const key = keySelector(item);
            secondSet.add(key);
        }
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(key, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(key, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (secondSet.has(key) &&
                    !history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.intersectBy = intersectBy;

},{"../Types/IEqualityComparer":72}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * join_q_: Correlates the elements of two sequences based on matching keys. Only records are returned when both sides match.
 * optional equality comparer can be used to compare keys.
 *
 * If the output selector is left out, results are returned as [first row, second row]. This is a change from C#, which requires the output selector.
 *
 * Leaving the output selector out requires passing comparer in as { equals: comparer } if you want to use it. See the long discussion
 * in GroupBy for details.
 */
function join(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector) {
        throw new Error("Required argument is null");
    }
    let output;
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = comparer;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    if (outputFunction && typeof outputFunction === "function") {
        output = outputFunction;
    }
    else {
        // If outputFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _join(data) {
        // Simple nested loops join
        // If this were SQL server, some statistics and index analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            const leftKey = firstKeySelector(leftItem);
            for (const rightItem of rightGen) {
                const rightKey = secondKeySelector(rightItem);
                let match = false;
                if (equalizer) {
                    match = equalizer(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    yield output(leftItem, rightItem);
                }
            }
            rightGen.restart();
        }
    });
}
exports.join = join;

},{"../Generators/RestartableGenerator":5}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * last_q_: Returns the last element in a sequence. Takes an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function last(matchFunction) {
    let found = false;
    let lastItem;
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            found = true;
            lastItem = item;
        }
        else if (matchFunction(item, index++)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem;
    }
    throw new Error("Sequence has no elements.");
}
exports.last = last;

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * lastOrDefault_q_: Returns the last element in a sequence, taking an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 *
 * If the filtered sequence is empty, it returns the default value.
 * The default value is provided by a parameter or is undefined.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially not an empty sequence.)
 *
 * In JavaScript, if you call the method with a single parameter and want it to be the default, there's no clean way to indicate that this
 * is what you want, because it breaks the case where you pass a filter condition. A single predicate could be a filter condition or it
 * could be the default for an array of predicates ... you don't know. Therefore, if you want to pass only a default value, call like
 * this: firstOrDefault_q_({ defaultValue: "NOT FOUND" })
 */
function lastOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    let found = false;
    let lastItem;
    let index = 0;
    for (const item of this) {
        if (!tester) {
            found = true;
            lastItem = item;
        }
        else if (tester(item, index++)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem;
    }
    return def;
}
exports.lastOrDefault = lastOrDefault;

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * leftJoin_q_: A friendly helper to create a simple left outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function leftJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    leftMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
    });
}
exports.leftJoin = leftJoin;

},{"../Generators/RestartableGenerator":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longCount(condition) {
    let ctr = BigInt(0);
    const one = BigInt(1);
    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr = ctr + one;
            }
        }
        else {
            ctr = ctr + one;
        }
    }
    return ctr;
}
exports.longCount = longCount;

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * max_q_: Returns the maximum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the max result returned.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
function max(transform, comparer) {
    let compare;
    if (comparer) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let maxval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            maxval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, maxval) > 0) {
                maxval = current;
            }
        }
        else {
            if (current > maxval) {
                maxval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return maxval;
}
exports.max = max;

},{"./../Types/IComparer":71}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * maxBy_q_: Returns the maximum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 *
 * The difference between MaxBy and Max with a transformation function is that Max returns the output of the transformation while MaxBy
 * returns the original value. This same result could be achieved with Max and a well-designed comparer function, of course.
 */
function maxBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IComparer_1.extractComparer(comparer);
    let first = false;
    let max;
    let maxValue;
    for (const item of this) {
        const current = keySelector(item);
        if (!first) {
            max = current;
            maxValue = item;
            first = true;
        }
        else if (compare) {
            if (compare(current, max) > 0) {
                max = current;
                maxValue = item;
            }
        }
        else {
            if (current > max) {
                max = current;
                maxValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return maxValue;
}
exports.maxBy = maxBy;

},{"./../Types/IComparer":71}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * maxOrDefault_q_: Returns the maximum value in a sequence. If sequence is empty, returns the default value or undefined.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the max result returned.
 * This is a JOIN-specific method. There is no equivalent in C#.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 * If you want to send the defaultValue in anything but the final value, it must be enclosed like so: { defaultValue }
 */
function maxOrDefault(transform, comparer, defaultValue) {
    let def;
    if (defaultValue) {
        def = defaultValue;
    }
    else if (comparer && "defaultValue" in comparer) {
        def = comparer.defaultValue;
    }
    else if (transform && "defaultValue" in transform) {
        def = transform.defaultValue;
    }
    let compare;
    if (comparer && !("defaultValue" in comparer)) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let maxval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            maxval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, maxval) > 0) {
                maxval = current;
            }
        }
        else {
            if (current > maxval) {
                maxval = current;
            }
        }
    }
    if (!first) {
        return def;
    }
    return maxval;
}
exports.maxOrDefault = maxOrDefault;

},{"./../Types/IComparer":71}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * min_q_: Returns the minimum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
function min(transform, comparer) {
    let compare;
    if (comparer) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let minval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            minval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, minval) < 0) {
                minval = current;
            }
        }
        else {
            if (current < minval) {
                minval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return minval;
}
exports.min = min;

},{"./../Types/IComparer":71}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * minBy_q_: Returns the minimum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 *
 * The difference between MinBy and Min with a transformation function is that Min returns the output of the transformation while MinBy
 * returns the original value. This same result could be achieved with Min and a well-designed comparer function, of course.
 */
function minBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IComparer_1.extractComparer(comparer);
    let first = false;
    let min;
    let minValue;
    for (const item of this) {
        const current = keySelector(item);
        if (!first) {
            min = current;
            minValue = item;
            first = true;
        }
        else if (compare) {
            if (compare(current, min) < 0) {
                min = current;
                minValue = item;
            }
        }
        else {
            if (current < min) {
                min = current;
                minValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return minValue;
}
exports.minBy = minBy;

},{"./../Types/IComparer":71}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * minOrDefault_q_: Returns the minimum value in a sequence. If sequence is empty, returns the default value or undefined.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 * This is a JOIN-specific method. There is no equivalent in C#.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 * If you want to send the defaultValue in anything but the final value, it must be enclosed like so: { defaultValue }
 */
function minOrDefault(transform, comparer, defaultValue) {
    let def;
    if (defaultValue) {
        def = defaultValue;
    }
    else if (comparer && "defaultValue" in comparer) {
        def = comparer.defaultValue;
    }
    else if (transform && "defaultValue" in transform) {
        def = transform.defaultValue;
    }
    let compare;
    if (comparer && !("defaultValue" in comparer)) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let minval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            minval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, minval) < 0) {
                minval = current;
            }
        }
        else {
            if (current < minval) {
                minval = current;
            }
        }
    }
    if (!first) {
        return def;
    }
    return minval;
}
exports.minOrDefault = minOrDefault;

},{"./../Types/IComparer":71}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ofType_q_: Filters the elements of an IEnumerable based on a specified type.
 *
 * In JS this is kind of meaningless. If you provide a string, it does a typeof. If you provide a class, it does an instanceof.
 */
function ofType(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _ofType(data) {
        for (const item of data) {
            if (typeof filter === "string") {
                if (typeof item === filter) {
                    // We're just taking it on the coder's honor that filter matches R. No way to actually test it.
                    yield item;
                }
            }
            else {
                if (item instanceof filter) {
                    yield item;
                }
            }
        }
    });
}
exports.ofType = ofType;

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderedEnumerable_1 = require("../Enumerable/OrderedEnumerable");
// WARNING!
// These two methods must be added to Enumerable using prototype modification, because declaring them in the Enumerable class makes the
// browser blow up. It's because of the "new OrderedEnumerable" (which derives from Enumerable) being referenced.
/**
 * orderBy_q_: Sorts the elements of a sequence in ascending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
function orderBy(keySelector, comparer) {
    if (!keySelector) {
        keySelector = ((o) => o);
    }
    return new OrderedEnumerable_1.OrderedEnumerable(this, keySelector, comparer);
}
exports.orderBy = orderBy;
/**
 * orderByDescending_q_: Sorts the elements of a sequence in descending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
function orderByDescending(keySelector, comparer) {
    if (!keySelector) {
        keySelector = ((o) => o);
    }
    return new OrderedEnumerable_1.OrderedEnumerable(this, keySelector, comparer, true);
}
exports.orderByDescending = orderByDescending;

},{"../Enumerable/OrderedEnumerable":2}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * outerJoin_q_: Correlates the elements of two sequences based on matching keys. If no matching record is find in the second sequence, undefined is sent to the output selector.
 * Outer Joins are not provided in LINQ. This is a new function, following the pattern of join_q_();
 * optional equality comparer can be used to compare keys
 * If the output selector is left out, results are returned as [first row, second row].
 * Leaving the output selector out requires passing comparer in as { equals: comparer } if you want to use it.
 */
function outerJoin(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector) {
        throw new Error("Required argument is null");
    }
    let output;
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = comparer;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    if (outputFunction && typeof outputFunction === "function") {
        output = outputFunction;
    }
    else {
        // If outputFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _outerJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some statistics and index analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            const leftKey = firstKeySelector(leftItem);
            for (const rightItem of rightGen) {
                const rightKey = secondKeySelector(rightItem);
                let match = false;
                if (equalizer) {
                    match = equalizer(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    leftMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
    });
}
exports.outerJoin = outerJoin;

},{"../Generators/RestartableGenerator":5}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * prepend_q_: Appends a value to the start of the sequence
 */
function prepend(newItem) {
    return this._extend(function* _prepend(data) {
        yield newItem;
        yield* data;
    });
}
exports.prepend = prepend;

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * replicate_q_: Repeat the items in a sequence a specified number of times.
 */
function replicate(times) {
    return this._extend(function* _take(data) {
        const loop = new RestartableGenerator_1.RestartableGenerator(data);
        while (times > 0) {
            for (const item of loop) {
                yield item;
            }
            loop.restart();
            times--;
        }
    });
}
exports.replicate = replicate;

},{"../Generators/RestartableGenerator":5}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * reverse_q_: Inverts the order of the elements in a sequence
 *
 * Reverse is really pointless. It is already found on the array class, and while this is technically
 * delayed execution, it can only work by going through to the end of the enumerable.
 */
function reverse() {
    return this._extend(function* _reverse(data) {
        // While this is technically delayed execution, it obviously needs to process the entire dataset
        // because it has to get all the way to the last item before returning a row.
        const toReturn = [...data];
        while (toReturn.length) {
            yield toReturn.pop();
        }
    });
}
exports.reverse = reverse;

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * rightJoin_q_: A friendly helper to create a right left outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function rightJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the left side against every right side.
        // If it is a generator, it can't be restarted to allow that.
        const leftGen = new RestartableGenerator_1.RestartableGenerator(data);
        for (const rightItem of second) {
            let rightMatched = false;
            for (const leftItem of leftGen) {
                if (on(leftItem, rightItem)) {
                    rightMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!rightMatched) {
                yield output(undefined, rightItem);
            }
            leftGen.restart();
        }
    });
}
exports.rightJoin = rightJoin;

},{"../Generators/RestartableGenerator":5}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * select_q_: projects each element of a sequence into a new form by calling a transformation function on each element.
 * Optionally, the transformation function can receive the index as a second argument
 *
 * cast() is mapped to select() because in javascript/typescript, runtime cast() doesn't exist
 */
function select(selectFunction) {
    if (!selectFunction) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _select(data) {
        let index = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            yield selectFunction(item, index++);
        }
    });
}
exports.select = select;

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * selectMany_q_: Projects each element of a sequence to an IEnumerable<T>, and flattens the resulting sequences into one sequence using a selector function
 * optionally, the transformation function can receive the index as a second argument
 * an optional output transformation function processes the output of the selector function to produce an output
 */
function selectMany(subSelectFunction, outputFunction) {
    if (!subSelectFunction) {
        throw new Error("Required argument is null");
    }
    if (!outputFunction) {
        // Typescript doesn't know that if R is left out, it's the same as TElement.
        // This would all be easier if typescript had proper overloads.
        outputFunction = ((src, row) => row);
    }
    return this._extend(function* _selectMany(data) {
        let index = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            const iter = subSelectFunction(item, index++);
            for (const subItem of iter) {
                yield outputFunction(item, subItem);
            }
        }
    });
}
exports.selectMany = selectMany;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * sequenceEqual_q_: Determines whether two sequences are equal by comparing their elements.
 * optional equality comparer can be supplied
 */
function sequenceEqual(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    const iter = second[Symbol.iterator]();
    while (true) {
        const val1 = this.next();
        const val2 = iter.next();
        if (val1.done !== val2.done) {
            return false; // not the same length
        }
        if (val1.done) {
            break;
        }
        if (compare) {
            if (!compare(val1.value, val2.value)) {
                return false; // not the same value
            }
        }
        else {
            if (val1.value !== val2.value) {
                return false; // not the same value
            }
        }
    }
    // same length and all items have same values
    return true;
}
exports.sequenceEqual = sequenceEqual;

},{"./../Types/IEqualityComparer":72}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * single_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty or has more than one item.
 * Takes an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function single(matchFunction) {
    let found = false;
    let foundItem;
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (matchFunction(item, index++)) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
    }
    if (found) {
        return foundItem;
    }
    throw new Error("Sequence has no elements.");
}
exports.single = single;

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * singleOrDefault_q_: Returns the first element in a sequence, throwing an exception if the sequence has more than one item.
 * Takes an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 *
 * If the filtered sequence is empty, it returns the default value.
 * The default value is provided by a parameter or is undefined.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially not an empty sequence.)
 *
 * In JavaScript, if you call the method with a single parameter and want it to be the default, there's no clean way to indicate that this
 * is what you want, because it breaks the case where you pass a filter condition. A single predicate could be a filter condition or it
 * could be the default for an array of predicates ... you don't know. Therefore, if you want to pass only a default value, call like
 * this: singleOrDefault_q_({ defaultValue: "NOT FOUND" })
 */
function singleOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    let found = false;
    let foundItem;
    let index = 0;
    for (const item of this) {
        if (!tester) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (tester(item, index++)) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
    }
    if (found) {
        return foundItem;
    }
    return def;
}
exports.singleOrDefault = singleOrDefault;

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skip_q_: Bypasses a specified number of elements in a sequence and then returns the remaining elements
 */
function skip(count) {
    return this._extend(function* _skip(data) {
        for (const item of data) {
            if (count <= 0) {
                yield item;
            }
            count--;
        }
    });
}
exports.skip = skip;

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skipLast_q_: Returns a new enumerable collection that contains the elements from source with the last count elements of the source collection omitted
 */
function skipLast(count) {
    // This is another one which is technically deferred execution, but there's no way to skip the last n items
    // if you don't count the list.
    return this._extend(function* _skipLast(data) {
        let toReturn;
        if (count <= 0) {
            toReturn = data;
        }
        else {
            toReturn = [...data].slice(0, -1 * count);
        }
        yield* toReturn;
    });
}
exports.skipLast = skipLast;

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skipWhile_q_: Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
 *  optionally, the filter function can receive the index as a second argument
 */
function skipWhile(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _skipWhile(data) {
        let index = 0;
        let triggered = false;
        for (const item of data) {
            // Whenever the filter goes false, triggered needs to go true, and it has to be sticky
            triggered = triggered || !filter(item, index++);
            if (triggered) {
                yield item;
            }
        }
    });
}
exports.skipWhile = skipWhile;

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * step_q_: returns every "step" items from a sequence
 *
 * This is a new item that I added because I thought it might be useful.
 */
function step(stepCount) {
    if (stepCount <= 0) {
        throw new Error("Required argument is invalid");
    }
    return this._extend(function* _step(data) {
        let tmpStep = 0;
        for (const item of data) {
            if (tmpStep === 0) {
                yield item;
            }
            // Handle step
            tmpStep++;
            if (tmpStep === stepCount) {
                tmpStep = 0;
            }
        }
    });
}
exports.step = step;

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sum_q_: Computes the sum of the sequence of values that are obtained by invoking an optional transform function on each element of the sequence
 */
function sum(selectFunction) {
    let sumval = 0;
    for (const item of this) {
        if (selectFunction) {
            const valueToAdd = selectFunction(item);
            if (isNaN(valueToAdd)) {
                throw new Error("Sequence contains invalid number after transformation");
            }
            sumval = sumval + valueToAdd;
        }
        else {
            if (typeof item !== 'number' || isNaN(item)) {
                throw new Error("Sequence contains invalid number");
            }
            sumval = sumval + item;
        }
    }
    return sumval;
}
exports.sum = sum;

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * take_q_: Returns a specified number of contiguous elements from the start of a sequence.
 * The skip parameter is a JS-specific modification to implement Range, which is a C#-only object (with an odd syntax)
 */
function take(count, skip = 0) {
    return this._extend(function* _take(data) {
        if (skip < 0) {
            skip = 0;
        }
        for (const item of data) {
            if (skip > 0) {
                skip--;
                continue;
            }
            if (count <= 0) {
                return;
            }
            count--;
            yield item;
        }
    });
}
exports.take = take;

},{}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * takeLast_q_: Returns a new enumerable collection that contains the last count elements from source
 */
function takeLast(count) {
    // This is another one which is technically deferred execution, but there's no way to take the last n items
    // if you don't count the list.
    return this._extend(function* _takeLast(data) {
        if (count <= 0) {
            return;
        }
        yield* [...data].slice(-1 * count);
    });
}
exports.takeLast = takeLast;

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * takeWhile_q_: Returns elements from a sequence as long as a specified condition is true.
 * Optionally, the filter function can receive the index as a second argument
 */
function takeWhile(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _takeWhile(data) {
        let index = 0;
        let triggered = false;
        for (const item of data) {
            // Whenever the filter goes false, triggered needs to go true, and it has to be sticky
            triggered = triggered || !filter(item, index++);
            if (!triggered) {
                yield item;
            }
        }
    });
}
exports.takeWhile = takeWhile;

},{}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lookup_1 = require("../Types/Lookup");
/**
 * toArray_q_: Returns a javascript array containing the sequence values.
 * Aliased to toList_q_ as well.
 */
function toArray() {
    return [...this];
}
exports.toArray = toArray;
/**
 * toHashSet_q_: Returns a Set from an enumerable.
 * The C# ability to send a non-default equality comparer is not included because javascript sets do not allow custom equality.
 */
function toHashSet() {
    const result = new Set();
    for (const item of this) {
        result.add(item);
    }
    return result;
}
exports.toHashSet = toHashSet;
/**
 * toDictionary_q_: Returns a javascript object with string keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript objects do not allow custom equality.
 */
function toDictionary(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    // In C#, toDictionary() can produce dictionaries with no-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    const result = {};
    for (const item of this) {
        const key = keySelector(item);
        if (key in result) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result[key] = elementSelector(item);
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result[key] = item;
        }
    }
    return result;
}
exports.toDictionary = toDictionary;
/**
 * toMap_q_: Returns a javascript Map with specified keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * Note that in general, objects don't make good Map keys.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality.
 */
function toMap(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    // In C#, toDictionary() can produce dictionaries with non-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    // ToMap() method covers the gap.
    const result = new Map();
    for (const item of this) {
        const key = keySelector(item);
        if (result.has(key)) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result.set(key, elementSelector(item));
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item);
        }
    }
    return result;
}
exports.toMap = toMap;
/**
 * toLookup_q_: Returns a Lookup (custom class) Map with specified keys and values, based on a keySelector function and an optional element
 * selector function. A Lookup is like a Map except it allows multiple values to be set for a given key.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality. Behind the
 * scenes, this is till using a map.
 *
 * Note that in general, objects don't make good Map keys.
 */
function toLookup(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const result = new Lookup_1.Lookup();
    for (const item of this) {
        const key = keySelector(item);
        if (elementSelector) {
            result.set(key, elementSelector(item));
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item);
        }
    }
    return result;
}
exports.toLookup = toLookup;

},{"../Types/Lookup":73}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * union_q_: concatenates two sequences returning the set sequence.
 * optional equality comparer can be supplied to compare values
 */
function union(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _union(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.union = union;

},{"../Types/IEqualityComparer":72}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * unionBy_q_: concatenates two sequences returning the set sequence based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
function unionBy(second, keySelector, comparer) {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _unionBy(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.unionBy = unionBy;

},{"../Types/IEqualityComparer":72}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * where_q_: Filters a sequence of values based on a predicate.
 * Optionally, the filter function can receive the index as a second argument
 */
function where(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _where(data) {
        let index = 0;
        for (const item of data) {
            if (filter(item, index++)) {
                yield item;
            }
        }
    });
}
exports.where = where;

},{}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * zip_q_: Produces a sequence of tuples with elements from two or three specified sequences.
 * In place of a third sequence, a function can be provided that combines the first two.
 */
function zip(second, third) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _zip(data) {
        const iter2 = second[Symbol.iterator]();
        let iter3;
        let func3;
        let done3 = false;
        if (third && typeof third === "function") {
            func3 = third;
        }
        else if (third) {
            iter3 = third[Symbol.iterator]();
        }
        while (true) {
            const val1 = data.next();
            const val2 = iter2.next();
            let val3;
            if (iter3) {
                val3 = iter3.next();
                done3 = val3.done;
            }
            // As soon as any of the sequences runs out of data, we halt.
            if (val1.done || val2.done || done3) {
                break;
            }
            if (iter3 && val3) {
                yield [val1.value, val2.value, val3.value];
            }
            else if (func3) {
                yield [val1.value, val2.value, func3(val1.value, val2.value)];
            }
            else {
                yield [val1.value, val2.value];
            }
        }
    });
}
exports.zip = zip;

},{}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grouping {
    constructor(key, value, elementSelectFunction) {
        this.key = key;
        this._values = [value];
        if (elementSelectFunction) {
            this._selector = elementSelectFunction;
        }
        else {
            this._selector = k => k;
        }
    }
    get values() {
        return this._values.map(v => this._selector(v));
    }
    get [Symbol.iterator]() {
        return this._values.map(v => this._selector(v));
    }
    add(value) {
        this._values.push(value);
    }
    toJSON() {
        return this.values;
    }
    toString() {
        return this.values.toString();
    }
}
exports.Grouping = Grouping;

},{}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractComparer(obj) {
    if (!obj) {
        return;
    }
    if (typeof obj === "function") {
        return obj;
    }
    if ("compare" in obj) {
        return obj.compare;
    }
}
exports.extractComparer = extractComparer;
function defaultComparer(x, y) {
    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
    return 0;
}
exports.defaultComparer = defaultComparer;

},{}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractEqualityComparer(obj) {
    if (!obj) {
        return;
    }
    if (typeof obj === "function") {
        return obj;
    }
    if ("equals" in obj) {
        return obj.equals;
    }
}
exports.extractEqualityComparer = extractEqualityComparer;

},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A lookup is a Map that allows multiple values for each key. There is no built-in Javascript analogue.
 */
class Lookup {
    constructor() {
        this._data = new Map();
    }
    get size() {
        return this._data.size;
    }
    [Symbol.iterator]() {
        return this._data[Symbol.iterator]();
    }
    entries() {
        return this._data.entries();
    }
    keys() {
        return this._data.keys();
    }
    values() {
        return this._data.values();
    }
    clear() {
        this._data.clear();
    }
    delete(key) {
        return this._data.delete(key);
    }
    forEach(callbackfn, thisArg) {
        this._data.forEach(callbackfn);
    }
    get(key) {
        return this._data.get(key);
    }
    has(key) {
        return this._data.has(key);
    }
    set(key, value) {
        if (this._data.has(key)) {
            const item = this._data.get(key);
            item.push(value);
        }
        else {
            this._data.set(key, [value]);
        }
        return this;
    }
    toJSON() {
        return this._data;
    }
}
exports.Lookup = Lookup;

},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNone(test) {
    return (test == null || test === undefined);
}
exports.isNone = isNone;

},{}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ichigo_1 = require("./Ichigo");
class ConsoleView extends Ichigo_1.Component {
    constructor() {
        super({
            innerHtml: `
                <h2>Log</h2>
                <div id="consoleLog" :loop=".">
                    <div style="min-height: 10px;"><i-v>.</i-v></div>
                </div>`
        });
        this.viewModel = Ichigo_1.ObservableProxy.proximate([]);
        this.entries = new Ichigo_1.BoundComponent(this.viewModel, {
            parent: this.content,
            selector: '#consoleLog',
            observeAllViewModel: true
        });
    }
    log(thing, result = false) {
        // tslint:disable-next-line:no-console
        console.log(thing);
        this.viewModel.push((result ? '>> ' : '') + clean(thing));
        if (result) {
            this.viewModel.push('');
        }
        function clean(val) {
            if (val === null || val === undefined) {
                return '';
            }
            if (typeof val === 'string') {
                return val;
            }
            return JSON.stringify(val);
        }
    }
}
exports.ConsoleView = ConsoleView;

},{"./Ichigo":76}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRouter = mi5.router.PageRouter;
exports.BoundComponent = mi5.component.BoundComponent;
exports.Component = mi5.component.Component;
exports.ObservableProxy = mi5.observable.ObservableProxy;
exports.createElement = mi5.html.createElement;
exports.escapeHtml = mi5.html.escapeHtml;
exports.paragraph = mi5.html.paragraph;
exports.span = mi5.html.span;

},{}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/PrototypeExtension");
const TestbenchView_1 = require("../tests/TestbenchView");
const Ichigo_1 = require("./Ichigo");
const Test000_1 = require("./Test000");
const Test001_1 = require("./Test001");
const Test002_1 = require("./Test002");
const Test003_1 = require("./Test003");
const Test004_1 = require("./Test004");
const Test005_1 = require("./Test005");
const Test006_1 = require("./Test006");
function main() {
    Ichigo_1.PageRouter.configure([
        { route: 'test/:id=0', payload: Test000_1.Test000 },
        { route: 'test/:id=1', payload: Test001_1.Test001 },
        { route: 'test/:id=2', payload: Test002_1.Test002 },
        { route: 'test/:id=3', payload: Test003_1.Test003 },
        { route: 'test/:id=4', payload: Test004_1.Test004 },
        { route: 'test/:id=5', payload: Test005_1.Test005 },
        { route: 'test/:id=6', payload: Test006_1.Test006 },
    ], TestbenchView_1.TestbenchView, true, '<div>There is no page here.</div>', 'test/0');
}
main();

},{"../src/PrototypeExtension":6,"../tests/TestbenchView":88,"./Ichigo":76,"./Test000":78,"./Test001":79,"./Test002":80,"./Test003":81,"./Test004":82,"./Test005":83,"./Test006":84}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Test the test bench',
            descriptionHtml: `<p>Verify that the test bench works before proceeding. The test bench outputs to the log which is shown below and in the dev tools console. If you don't see "Test successful," then it failed, with an error in the log. Hard to
            show the log in the page if the page is broken, so have to check dev tools after all.</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test000 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            this.console.log("Hello world.");
            // Component rendering is asynchronous (on the microtask queue), so have to test slightly after
            setTimeout(() => {
                try {
                    const logElement = document.getElementById('consoleLog');
                    if (logElement === null) {
                        throw new Error("Rendering failed.");
                    }
                    assert_1.assert(logElement.innerHTML.includes("Hello world."), "Log should update the page.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
                }
                catch (err) {
                    this.log(err.toString());
                    throw err;
                }
            }, 10);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test000 = Test000;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'The Basics',
            descriptionHtml: `<p>
                JOIN to Javascript offers various operations such as filtering, projection, and counting on iterables such as arrays. The JOIN extension methods can be found on arrays, so you can call them directly as in the example <code>people.select_q_(q => q.firstName)</code>. This creates an Enumerable, which is the class behind every JOIN operation. Iterable non-arrays, such as NodeList, must be converted first to an enumerable using the asQueryable extension, as in the example <code>elements.asQueryable().where_q_(q => q.tagName === 'div')</code>.
            </p>
            <p>
                Most of the methods found in JOIN to Javascript are similar to methods found on arrays, but there is an important difference. Methods called on arrays execute when you call them. Methods in JOIN that return the Enumerable class only create the enumerable. They are not executed until you iterate them or call a method that produces a non-enumerable result. This is known as deferred execution.
            </p>
            <p>
                Deferred execution in JOIN is managed through the use of javascript generators, which produce records one by one while you iterate the generator, meaning that they both defer the start of the process and they halt when iteration is completed.
            </p>
            <p>
                To show by way of example, the statements<br/>
                <code>arr.filter(filterFunction).map(mapFunction).slice(0,5)</code><br/>
                and<br/>
                <code>arr.where_q_(filterFunction).select_q_(mapFunction).take_q_(5)</code></br>
                produce the exact same results, but they have these differences:
                <ul>
                    <li>the records in the array are processed that moment, while the records in the enumerable are not processed until you iterate them, such as using a for-of loop</li>
                    <li>filterFunction is called on every record of the array, while in the enumerable it is called only on enough records to produce 5 that match</li>
                    <li>mapFunction is called on every matching record of the array, while in the enumerable it is called at most 5 times</li>
                </ul>
            </p>
            <p>
                Methods that return a single result, such as count_q_() or min_q_() or first_q_() or toArray_q_() or toDictionary_q_() will enumerate the array, the same as looping through with a for-of loop will. Another operation that will materialize the iterable is calling JSON.stringify() on it.
            </p>
            <p>
                Once you iterate an Enumerable, the query will be processed, and the generator providing the data is closed. In C# LINQ to Objects if you want to re-use query data, you call ToArray() on the query and capture the result, but JOIN to Javascript will cache the data returned so later iterations return from the cache. It's still good coding practice to be explicit and use toArray_q_(), but you don't have to.
            </p>
            `
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test001 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            // Create a simple enumerable but do not trigger execution.
            this.log(`const queryable1 = [1, 2, 3].select_q_(a => 3 * a); // created but not executed`);
            const queryable1 = [1, 2, 3].select_q_(a => 3 * a);
            // The status of the generator is hidden in typescript, so to get at private
            // fields we have to cast as any. You can look at this in debug tools:
            // tslint:disable-next-line:no-console
            console.log(queryable1._source);
            this.log(`console.log(queryable1._isClosed); // should be false`);
            // There seems to be no way in code to view the generator status (just red squiggles under [[GeneratorStatus]])
            // so we check the _isClosed flag set on generator close.
            const test01 = queryable1._isClosed;
            this.log(test01, true);
            assert_1.assert(!test01, 'Queryable is not closed when created');
            this.log(`queryable1.toArray_q_(); // materializes the enumerable`);
            this.log(queryable1.toArray_q_(), true);
            this.log(`console.log(queryable1._isClosed); // should be true`);
            const test02 = queryable1._isClosed;
            this.log(test02, true);
            assert_1.assert(test02, 'Queryable is closed after iteration');
            // Generators can only produce data once. If not for the cache, you'd have to specify the whole code
            // [1, 2, 3].select_q_(a => 3 * a) each time, or just store the array output.
            // But the Enumerable class caches the results when you pull them, so when the generator is closed, you pull from the cache.
            this.log(`queryable1.toArray_q_(); // pulls from the cache. in a default generator, this would be {}`);
            const test03 = queryable1.toArray_q_();
            this.log(test03, true);
            assert_1.assert(test03.length === 3, 'toArray still works after close');
            this.log(`['foo', 'bar', 'baz'].asQueryable() // takes an array, converts it to a queryable`);
            const test04 = ['foo', 'bar', 'baz'].asQueryable().toArray_q_();
            this.log(test04, true);
            assert_1.assert(test04[0] === 'foo' && test04[1] === 'bar' && test04[2] === 'baz', 'Enumerate an array');
            this.log(`'abc'.asQueryable() // calling asQueryable() on a string produces a character enumerable ... this has a,b,c`);
            const test05 = 'abc'.asQueryable().toArray_q_();
            this.log(test05, true);
            assert_1.assert(test05[0] === 'a' && test05[1] === 'b' && test05[2] === 'c', 'Strings can be converted to queryable');
            this.log(`(5).asQueryable() // calling asQueryable() on a number produces a range of numbers ... this is a 5-item enumerable having 0,1,2,3,4`);
            const test06 = (5).asQueryable().toArray_q_();
            this.log(test06, true);
            assert_1.assert(test06.length === 5 && test06.all_q_((q, idx) => q === idx), 'Numbers can be converted to queryable');
            this.log(`randomGenerator().asQueryable() // any iterable can be converted to a queryable`);
            // anything can be turned into a queryable, which enables the JOIN methods
            function* randomGenerator() {
                yield 1;
                yield 4;
                yield 16;
            }
            const queryable2 = randomGenerator().asQueryable();
            const test07 = queryable2.toArray_q_();
            this.log(test07, true);
            assert_1.assert(test07[0] === 1 && test07[1] === 4 && test07[2] === 16, 'Iterables can be converted to a queryable');
            this.log(`{name}.asQueryable() // though it's useless, non-iterable objects can be made queryable ... this is a length 1 enumerable containing {name} as its only element`);
            const item = { name: 'Foo' };
            const test08 = item.asQueryable().toArray_q_();
            this.log(test08, true);
            assert_1.assert(test08.length === 1 && test08[0] === item, 'any object can be converted to a queryable');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test001 = Test001;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Conversions',
            descriptionHtml: `<p>These methods are used to convert enumerables into ordinary objects: arrays, maps, sets, lookups</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test002 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            const test01 = [1, 3, 5].toArray_q_();
            this.log(`[1, 3, 5].toArray_q_() // an extremely redundant example ... makes an array`);
            this.log(test01, true);
            assert_1.assert(test01[0] === 1 && test01[1] === 3 && test01[2] === 5, 'Array is created');
            const test02 = [1, 3, 5].toList_q_();
            this.log(`[1, 3, 5].toList_q_() // toList_q_() is aliased to toArray_q_()`);
            this.log(test02, true);
            assert_1.assert(test02[0] === 1 && test02[1] === 3 && test02[2] === 5, 'Array is created by ToList()');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name); // produces an object where keys are Bob and Carol and the values are the object e.g. { name: 'Bob', wins: 20 }`);
            const test03 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name);
            this.log(test03, true);
            assert_1.assert(test03['Bob'].wins === 20, 'Object dictionary is created');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name, q => q.wins) // produces {"Bob":20,"Carol":34}`);
            const test04 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name, q => q.wins);
            this.log(test04, true);
            assert_1.assert(test04['Bob'] === 20, 'Number dictionary is created');
            // Helper function for maps
            function replacer(key, value) {
                if (value instanceof Map) {
                    return Array.from(value.entries().asQueryable().prepend_q_("<- MAP ->"));
                }
                else {
                    return value;
                }
            }
            this.log('Normal JS objects cannot have keys that are not strings, so if you want object keys you must use Map. This is not exceedingly useful because objects do not make good keys.');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name })); // produces a map with { name } keys`);
            const test05 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }));
            this.log(JSON.stringify(test05, replacer), true);
            assert_1.assert(test05.size === 2 && !![...test05.keys()].find(m => m.name === 'Carol'), 'Object map is created');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }), q => q.wins) // produces a map with { name } keys and wins as value`);
            const test06 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }), q => q.wins);
            this.log(JSON.stringify(test06, replacer), true);
            assert_1.assert(test06.size === 2 && [...test06.entries()].find(m => m[0].name === 'Carol')[1] === 34, 'Object map is created with element selector');
            this.log('JS objects and Map do not allow multiple values for a key, so JOIN produces a Lookup, which does.');
            this.log('When you call set() on a lookup, it appends the value instead of overwriting it.');
            this.log('');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name) // Creates a lookup with name as key, helpful when names are duplicated`);
            const test07 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name);
            this.log(JSON.stringify(test07, replacer), true);
            assert_1.assert(test07.size === 2 && test07.get('Carol').length === 2 && !!test07.get('Carol').find(f => f.wins === 10), 'Lookup is created');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name, q => q.wins) // Creates a lookup with name as key and wins as value`);
            const test08 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name, q => q.wins);
            this.log(JSON.stringify(test08, replacer), true);
            assert_1.assert(test08.size === 2 && test08.get('Carol').length === 2 && !!test08.get('Carol').find(f => f === 10), 'Lookup is created');
            this.log(`[1, 2, 2, 3, 4, 1].toHashSet_q_() // produces Set() of its unique values`);
            const test09 = [1, 2, 2, 3, 4, 1].toHashSet_q_();
            this.log([...test09], true);
            assert_1.assert(test09.size === 4 && test09.has(1) && test09.has(2) && test09.has(3) && test09.has(4), 'Set is created');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test002 = Test002;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Basic Single-Sequence Queries',
            descriptionHtml: `<p>The meat of JOIN to javascript is taken up by basic query operations that everyone who works with arrays is used to: filtering elements, projecting results, slicing and skipping, and so on.</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test003 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            // We need this function for testing.
            assert_1.assert(![1, 2, 3].sequenceEqual_q_([2, 3]), 'Not equal: different length 1');
            assert_1.assert(![1, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different length 2');
            assert_1.assert(![1, 2, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different items');
            assert_1.assert([1, 2, 3].sequenceEqual_q_([1, 2, 3]), 'Are equal');
            this.log('Every lesson in queries starts with select. Select projects a function onto every entry in the enumerable.');
            this.log('');
            this.log(`[1, 2, 3, 4, 5].select_q_(s => s * s) // 1,4,9,16,25`);
            const test01 = [1, 2, 3, 4, 5].select_q_(s => s * s).toArray_q_();
            this.log(test01, true);
            assert_1.assert(test01.sequenceEqual_q_([1, 4, 9, 16, 25]), 'Select squares');
            this.log("[1, 2, 3, 4].select_q_((s: number, idx: number) => `${idx}^2=${s}`) // function can take index as 2nd parameter");
            // Typescript is annoying about the argument types. It can't figure them out automatically like usual.
            const test02 = [1, 2, 3, 4].select_q_((s, idx) => `${idx + 1}^2=${s * s}`).toArray_q_();
            this.log(test02, true);
            assert_1.assert(test02.sequenceEqual_q_(["1^2=1", "2^2=4", "3^2=9", "4^2=16"]), "Select with index");
            this.log('The second step in every lesson in queries is "where."');
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].where_q_(q => q % 2 === 0) // 2,4,6,8`);
            const test03 = [1, 2, 3, 4, 5, 6, 7, 8].where_q_(q => q % 2 === 0).toArray_q_();
            this.log(test03, true);
            assert_1.assert(test03.sequenceEqual_q_([2, 4, 6, 8]), 'Where even');
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].where_q_((q: number, idx: number) => idx < 3) // function can take index as 2nd parameter`);
            const test04 = [1, 2, 3, 4, 5, 6, 7, 8].where_q_((q, idx) => idx < 3).toArray_q_();
            this.log(test04, true);
            assert_1.assert(test04.sequenceEqual_q_([1, 2, 3]), 'Where with index');
            this.log("You now know 90% of everything you'll need. But here are some more functions.");
            this.log('');
            this.log(`[1, 2, 3, 4, 5].skip_q_(2) // 3,4,5`);
            const test05 = [1, 2, 3, 4, 5].skip_q_(2).toArray_q_();
            this.log(test05, true);
            assert_1.assert(test05.sequenceEqual_q_([3, 4, 5]), 'Skip first 2');
            this.log(`[1, 2, 3, 4, 5].skipLast_q_(2) // 1,2,3`);
            const test06 = [1, 2, 3, 4, 5].skipLast_q_(2).toArray_q_();
            this.log(test06, true);
            assert_1.assert(test06.sequenceEqual_q_([1, 2, 3]), 'Skip last 2');
            this.log(`[1, 2, 3, 4, 5].skipWhile_q_(q => q !== 3) // skip as long as condition is false, then take rest`);
            const test07 = [1, 2, 3, 4, 5].skipWhile_q_(q => q !== 3).toArray_q_();
            this.log(test07, true);
            assert_1.assert(test07.sequenceEqual_q_([3, 4, 5]), 'Skip until 3');
            this.log(`[1, 2, 3, 4, 5].skipWhile_q_((q: number, idx: number) => idx !== 3) // function can take index as 2nd parameter`);
            const test08 = [1, 2, 3, 4, 5].skipWhile_q_((q, idx) => idx !== 3).toArray_q_();
            this.log(test08, true);
            assert_1.assert(test08.sequenceEqual_q_([4, 5]), 'SkipWhile with index');
            this.log(`[1, 2, 3, 4, 5].take_q_(2) // 1,2`);
            const test09 = [1, 2, 3, 4, 5].take_q_(2).toArray_q_();
            this.log(test09, true);
            assert_1.assert(test09.sequenceEqual_q_([1, 2]), 'Take first 2');
            this.log(`[1, 2, 3, 4, 5].take_q_(3,1) // 2,3,4`);
            const test09skip1 = [1, 2, 3, 4, 5].take_q_(3, 1).toArray_q_();
            this.log(test09skip1, true);
            assert_1.assert(test09skip1.sequenceEqual_q_([2, 3, 4]), 'Take first 3 after skip 1');
            this.log("LINQ doesn't have the ability to iterate through the list skipping every n steps. So I added it.");
            this.log(`[1, 2, 3, 4, 5].step_q_(2) // 1, 3, 5`);
            const test09step1 = [1, 2, 3, 4, 5].step_q_(2).toArray_q_();
            this.log(test09step1, true);
            assert_1.assert(test09step1.sequenceEqual_q_([1, 3, 5]), 'Step every 2');
            this.log(`[1, 2, 3, 4, 5, 6, 7].step_q_(3) // 1, 4, 7`);
            const test09step2 = [1, 2, 3, 4, 5, 6, 7].step_q_(3).toArray_q_();
            this.log(test09step2, true);
            assert_1.assert(test09step2.sequenceEqual_q_([1, 4, 7]), 'Step every 3');
            this.log(`[1, 2, 3, 4, 5].takeLast_q_(2) // 4,5`);
            const test10 = [1, 2, 3, 4, 5].takeLast_q_(2).toArray_q_();
            this.log(test10, true);
            assert_1.assert(test10.sequenceEqual_q_([4, 5]), 'Take last 2');
            this.log(`[1, 2, 3, 4, 5].takeWhile_q_(q => q !== 3) // Return rows until condition is true, then stop`);
            const test11 = [1, 2, 3, 4, 5].takeWhile_q_(q => q !== 3).toArray_q_();
            this.log(test11, true);
            assert_1.assert(test11.sequenceEqual_q_([1, 2]), 'TakeWhile not 3');
            this.log(`[1, 2, 3, 4, 5].takeWhile_q_((q: number, idx: number) => idx !== 3) // function can take index as 2nd parameter`);
            const test12 = [1, 2, 3, 4, 5].takeWhile_q_((q, idx) => idx !== 3).toArray_q_();
            this.log(test12, true);
            assert_1.assert(test12.sequenceEqual_q_([1, 2, 3]), 'TakeWhile with index');
            this.log(`[1, 1, 2, 2, 2, 3, 3, 3, 3].distinct_q_() // 1,2,3`);
            const test13 = [1, 1, 2, 2, 2, 3, 3, 3, 3].distinct_q_().toArray_q_();
            this.log(test13, true);
            assert_1.assert(test13.sequenceEqual_q_([1, 2, 3]), 'Get distinct entries');
            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinct_q_((q, r) => q.a === r.a) // a custom equality comparer can be passed e.g. to allow comparison by key`);
            const test14 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinct_q_((q, r) => q.a === r.a)
                .toArray_q_();
            this.log(test14, true);
            assert_1.assert(test14.map(m => m.a).sequenceEqual_q_([1, 2, 3]), 'Distinct with custom equality');
            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinctBy_q_(q => q.a) // distinctBy() does its check based on a key selector function`);
            this.log("(I know this is almost the same as the previous, but it was added in .Net 6)");
            const test15 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinctBy_q_(q => q.a)
                .toArray_q_();
            this.log(test15, true);
            assert_1.assert(test15.map(m => m.a).sequenceEqual_q_([1, 2, 3]), 'Distinct by key');
            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinctBy_q_(q => q.a, (q, r) => q % 2 === r % 2) // also takes a custom equality comparer`);
            const test16 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinctBy_q_(q => q.a, (q, r) => q % 2 === r % 2)
                .toArray_q_();
            this.log(test16, true);
            assert_1.assert(test16.map(m => m.a).sequenceEqual_q_([1, 2]), 'Distinct by key: one even & one odd');
            this.log("SelectMany() loops through the first level, flattens an array within that level, and returns it at the top level.");
            this.log("const numberSets = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }]; // several examples will work with this");
            this.log(`numberSets.selectMany_q_(q => q.numbers) // 1,3,5,2,4,6,2,5,7,11`);
            const test17 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_(q => q.numbers).toArray_q_();
            this.log(test17, true);
            assert_1.assert(test17.sequenceEqual_q_([1, 3, 5, 2, 4, 6, 2, 5, 7, 11]), 'Select many flattens inside arrays');
            this.log("numberSets.selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `${idx}: ${m}`) // function to get iterable can take index as 2nd parameter");
            // typescript really doesn't want to do any auto-typemapping here
            const test18 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_((q, idx) => q.numbers.map(m => `${idx}: ${m}`)).toArray_q_();
            this.log(test18, true);
            assert_1.assert(test18.sequenceEqual_q_(["0: 1", "0: 3", "0: 5", "1: 2", "1: 4", "1: 6", "2: 2", "2: 5", "2: 7", "2: 11"]), 'SelectMany with index');
            this.log("numberSets.selectMany_q_(q => q.numbers, (s, res) => `${s.type}: ${res}`) // an output function can be provided to project onto the flattened results, letting you combine parent and child");
            const test19 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_(q => q.numbers, (s, res) => `${s.type}: ${res}`).toArray_q_();
            this.log(test19, true);
            assert_1.assert(test19.sequenceEqual_q_(["odd: 1", "odd: 3", "odd: 5", "even: 2", "even: 4", "even: 6", "prime: 2", "prime: 5", "prime: 7", "prime: 11"]), 'SelectMany with output function');
            this.log("numberSets.selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `(#${idx}) ${m}`), (s, res) => `${s.type} ${res}`) // element function can take index as 2nd parameter");
            const test20 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_((q, idx) => q.numbers.map(m => `(#${idx}) ${m}`), (s, res) => `${s.type} ${res}`).toArray_q_();
            this.log(test20, true);
            assert_1.assert(test20.sequenceEqual_q_(["odd (#0) 1", "odd (#0) 3", "odd (#0) 5", "even (#1) 2", "even (#1) 4", "even (#1) 6", "prime (#2) 2", "prime (#2) 5", "prime (#2) 7", "prime (#2) 11"]), "SelectMany with index in output");
            this.log(`[1, 2, 3].cast_q_(num => num.toString()) // Cast() is impossible in JS, so cast_q_() is just an alias for select_q_()`);
            const test21 = [1, 2, 3].cast_q_(num => num.toString()).toArray_q_();
            this.log(test21, true);
            assert_1.assert(test21.sequenceEqual_q_(["1", "2", "3"]), "Cast runs conversion function");
            this.log(`[2, 'two', 3, 'three', 4, 'four'].ofType_q_('number') // OfType() is also nonsense in JS, so this either does typeof (if a string is passed) or instanceof (if anything else)`);
            const test22 = [2, 'two', 3, 'three', 4, 'four'].ofType_q_('number').toArray_q_();
            this.log(test22, true);
            assert_1.assert(test22.sequenceEqual_q_([2, 3, 4]), 'OfType number');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test003 = Test003;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
const Enumerable_1 = require("../src/Enumerable/Enumerable");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Advanced Single-Sequence Queries',
            descriptionHtml: `<p>This page deals with more advanced queries that can be called on a single iterable.</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test004 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            // We need this function for testing.
            assert_1.assert(![1, 2, 3].sequenceEqual_q_([2, 3]), 'Not equal: different length 1');
            assert_1.assert(![1, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different length 2');
            assert_1.assert(![1, 2, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different items');
            assert_1.assert([1, 2, 3].sequenceEqual_q_([1, 2, 3]), 'Are equal');
            // should be [1,2,3]
            this.log(`[1, 2, 3].defaultIfEmpty_q_() // not empty so it passes through`);
            const test01 = [1, 2, 3].defaultIfEmpty_q_().toArray_q_();
            this.log(test01, true);
            assert_1.assert(test01.sequenceEqual_q_([1, 2, 3]), 'DefaultIfEmpty when not empty');
            this.log(`[].defaultIfEmpty_q_(-1) // [-1] when no data`);
            // typescript doesn't know what type [] is supposed to be.
            const test02 = [].defaultIfEmpty_q_(-1).toArray_q_();
            this.log(test02, true);
            assert_1.assert(test02.length === 1 && test02[0] === -1, 'DefaultIfEmpty supplies row when empty iterable');
            this.log(`[1, 2, 3].append_q_(4) // 1,2,3,4`);
            const test03 = [1, 2, 3].append_q_(4).toArray_q_();
            this.log(test03, true);
            assert_1.assert(test03.sequenceEqual_q_([1, 2, 3, 4]), 'Append adds to end of sequence');
            // should be "new first","first","second"
            this.log(`['first', 'second'].prepend_q_('new first') // adds new first to start`);
            const test04 = ['first', 'second'].prepend_q_('new first').toArray_q_();
            this.log(test04, true);
            assert_1.assert(test04.sequenceEqual_q_(['new first', 'first', 'second']), 'Prepend adds to beginning of sequence');
            this.log(`[2, 4, 6, 1, 3, 5, 7].reverse_q_() // reverses the array`);
            const test05 = [2, 4, 6, 1, 3, 5, 7].reverse_q_().toArray_q_();
            this.log(test05, true);
            assert_1.assert(test05.sequenceEqual_q_([7, 5, 3, 1, 6, 4, 2]), 'Reverse reverses all elements');
            this.log(`["A", "B", "C"].replicate_q_(3) // concatenates the sequence with itself n times ... this is a JOIN-specific method not in LINQ`);
            const test06 = ["A", "B", "C"].replicate_q_(3).toArray_q_();
            this.log(test06, true);
            assert_1.assert(test06.sequenceEqual_q_(["A", "B", "C", "A", "B", "C", "A", "B", "C"]), 'Replicate repeats an array');
            this.log(`['a', 'b', 1, 2].empty_q_() // create an empty array of the same type as sequence ... note that type means something in typescript but javascript doesn't care`);
            const test07 = ['a', 'b', 1, 2].empty_q_().toArray_q_();
            this.log(test07, true);
            assert_1.assert(test07.length === 0, 'Empty() returns empty enumerable');
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].chunk_q_(3) // break array into chunks of provided size`);
            const test08 = [1, 2, 3, 4, 5, 6, 7, 8].chunk_q_(3).toArray_q_();
            this.log(test08, true);
            assert_1.assert(JSON.stringify(test08) === "[[1,2,3],[4,5,6],[7,8]]", "Chunk breaks iterable into chunks");
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8, 9].chunk_q_(3) // test even chunk size case`);
            const test08a = [1, 2, 3, 4, 5, 6, 7, 8, 9].chunk_q_(3).toArray_q_();
            this.log(test08a, true);
            assert_1.assert(JSON.stringify(test08a) === "[[1,2,3],[4,5,6],[7,8,9]]", "Chunk breaks iterable into chunks");
            this.log(`orderBy_q_() and orderByDescending_q_() order by the result of a provided key selector method.`);
            this.log('');
            this.log('The result of the two orderBy methods are enumerables that have two methods not found in default Enumerables:');
            this.log(`thenBy_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IFunc2<TKey, TKey, 1 | 0 | -1>): IOrderedEnumerable<T>;`);
            this.log(`thenByDescending_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IFunc2<TKey, TKey, 1 | 0 | -1>): IOrderedEnumerable<T>`);
            this.log('');
            this.log(`['dog', 'fish', 'cat', 'bird', 'iguana', 'turtle'].orderBy_q_(o => o.length).thenByDescending_q_(o => o) // order by word length then reverse alphabetical`);
            const test09 = ['dog', 'fish', 'cat', 'bird', 'iguana', 'turtle'].orderBy_q_(o => o.length).thenByDescending_q_().toArray_q_();
            this.log(test09, true);
            assert_1.assert(test09.sequenceEqual_q_(["dog", "cat", "fish", "bird", "turtle", "iguana"]), 'OrderBy() followed by ThenByDescending()');
            this.log(`['dog', 'fish', 'cat', 'bird', 'iguana', 'turtle'].orderByDescending_q_(o => o.length).thenBy_q_() // reverse length then alphabetical ... empty keySelector is the same as (key => key)`);
            const test10 = ['dog', 'fish', 'cat', 'bird', 'iguana', 'turtle'].orderByDescending_q_(o => o.length).thenBy_q_().toArray_q_();
            this.log(test10, true);
            assert_1.assert(test10.sequenceEqual_q_(["iguana", "turtle", "bird", "fish", "cat", "dog"]), 'OrderByDescending() followed by ThenBy()');
            this.log('The folks at Microsoft gave us a lot of overloads for GroupBy(), most of them not really necessary or extremely useful');
            this.log('');
            this.log(`['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0]) // Group by first letter`);
            const test11 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0]).toArray_q_();
            this.log(test11, true);
            assert_1.assert(JSON.stringify(test11) === `[["Apple","Apricot"],["Canteloupe"],["Banana","Blueberry"]]`, 'Basic GroupBy');
            this.log("While the result of the group operation is an iterable that appears as if it's just an array, it's actually an object that contains fields named 'key' and 'values'");
            this.log('');
            this.log(`['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0]).toArray_q_().map(m => m.key) // see the keys of each group`);
            const test12 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0]).toArray_q_().map(m => m.key);
            this.log(test12, true);
            assert_1.assert(test12.sequenceEqual_q_(["A", "C", "B"]), "Access key of grouping");
            this.log(`['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], u => u.toUpperCase()) // can take an optional transformation to be applied to grouping elements`);
            const test13 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], u => u.toUpperCase()).toArray_q_();
            this.log(test13, true);
            assert_1.assert(JSON.stringify(test13) === `[["APPLE","APRICOT"],["CANTELOUPE"],["BANANA","BLUEBERRY"]]`, "GroupBy with element function");
            this.log("['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], u => u.toUpperCase(), (k, d) => `${k} is for ${d.join(' and ')}`) // can take an optional output transformation to be projected onto the returned groupings");
            const test14 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], u => u.toUpperCase(), (k, d) => `${k} is for ${d.join(' and ')}`).toArray_q_();
            this.log(test14, true);
            assert_1.assert(test14.sequenceEqual_q_(["A is for APPLE and APRICOT", "C is for CANTELOUPE", "B is for BANANA and BLUEBERRY"]), "GroupBy with output function");
            this.log("['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], u => u + '!', (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}`, (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b)) // can take a custom equality comparer");
            const test15 = ['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], u => u + '!', (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}`, (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b)).toArray_q_();
            this.log(test15, true);
            assert_1.assert(test15.sequenceEqual_q_(["Apple! and Banana! and Apricot! start with capital", "canteloupe! and blueberry! start with lowercase"]), "GroupBy with custom equality");
            this.log("Now here's where it turns into a real mess. Up until now, we've just been adding a new parameter at the end.");
            this.log("But what if you want to use only the custom equality, but nothing else. Easy to do in C#. Not so easy in JS.");
            this.log("Typescript has some small amount of overload declaration, but it's very weak and doesn't emit anything.");
            this.log(`Sure, you code the following:`);
            this.log(`function groupBy_q_(keySelector, elementFunction?: function);`);
            this.log(`function groupBy_q_(keySelector, outputFunction?: function);`);
            this.log(`But javascript sees only function groupBy_q_(function, function).`);
            this.log('Which overload was it? Javascript has no idea whatsoever.');
            this.log("So if you want to skip parameters, you have to enclose them in objects.");
            this.log('');
            this.log(`['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }) // custom equality but no element or output functions`);
            const test16 = ['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }).toArray_q_();
            this.log(test16, true);
            assert_1.assert(JSON.stringify(test16) === `[["Apple","Banana","Apricot"],["canteloupe","blueberry"]]`, 'GroupBy with only equality');
            this.log("['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], { project: (k, d) => `${k} is for ${d.join(' and ')}` }) // custom output projector only");
            const test17 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], { project: (k, d) => `${k} is for ${d.join(' and ')}` }).toArray_q_();
            this.log(test17, true);
            assert_1.assert(test17.sequenceEqual_q_(["A is for Apple and Apricot", "C is for Canteloupe", "B is for Banana and Blueberry"]), "GroupBy with only projector");
            this.log("['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { project: (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}` }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }) // everything but element function");
            const test18 = ['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { project: (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}` }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }).toArray_q_();
            this.log(test18, true);
            assert_1.assert(test18.sequenceEqual_q_(["Apple and Banana and Apricot start with capital", "canteloupe and blueberry start with lowercase"]), "GroupBy with no element function");
            this.log(`['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { element: q => q + '!' }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }) // everything but output projector`);
            const test19 = ['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { element: q => q + '!' }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }).toArray_q_();
            this.log(test19, true);
            assert_1.assert(JSON.stringify(test19) === `[["Apple!","Banana!","Apricot!"],["canteloupe!","blueberry!"]]`, 'GroupBy with no output function');
            this.log("['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], { element: u => u.toUpperCase() }, { project: (k, d) => `${k} is for ${d.join(' and ')}` }) // object names used but otherwise same as groupBy(key, element, output)");
            const test20 = ['Apple', 'Canteloupe', 'Banana', 'Apricot', 'Blueberry'].groupBy_q_(q => q[0], { element: u => u.toUpperCase() }, { project: (k, d) => `${k} is for ${d.join(' and ')}` }).toArray_q_();
            this.log(test20, true);
            assert_1.assert(test20.sequenceEqual_q_(["A is for APPLE and APRICOT", "C is for CANTELOUPE", "B is for BANANA and BLUEBERRY"]), "GroupBy with object names");
            this.log("['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { element: u => u + '!' }, { project: (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}` }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }) // everything supplied, just in objects");
            const test21 = ['Apple', 'canteloupe', 'Banana', 'Apricot', 'blueberry'].groupBy_q_(q => q[0], { element: u => u + '!' }, { project: (k, d) => `${d.join(' and ')} start with ${(k.toUpperCase() === k ? 'capital' : 'lowercase')}` }, { equals: (a, b) => (a.toUpperCase() === a) === (b.toUpperCase() === b) }).toArray_q_();
            this.log(test21, true);
            assert_1.assert(test21.sequenceEqual_q_(["Apple! and Banana! and Apricot! start with capital", "canteloupe! and blueberry! start with lowercase"]), 'GroupBy all in objects');
            // Test static methods on Enumerable (not part of IQueryable, but still in System.Linq)...
            this.log(`Enumerable.range_q_(2, 10) // System.Linq also includes two static non-extension methods`);
            const test22 = Enumerable_1.Enumerable.range_q_(2, 10).toArray_q_();
            this.log(test22, true);
            assert_1.assert(test22.sequenceEqual_q_([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 'Range() returns a range of numbers');
            this.log(`Enumerable.repeat_q_("spam", 4) // this is the other`);
            const test23 = Enumerable_1.Enumerable.repeat_q_("spam", 4).toArray_q_();
            this.log(test23, true);
            assert_1.assert(test23.sequenceEqual_q_(["spam", "spam", "spam", "spam"]), 'Repeat() repeats an element');
            this.log("Normally to count an enumerable, you must enumerate it, materializing its data.");
            this.log("LINQ provides this method, tryGetNonEnumeratedCount(), which tries to get the count from the underlying object, when possible");
            this.log("It works using an out var, like all TryGetSomething() methods in C#. This doesn't exist in JS. To make it work, you need to pass an object, which is updated.");
            this.log('');
            this.log(`const countVal = { value: 0 } // now "value" can be updated and the reference returned`);
            this.log('');
            const countVal = { value: 0 };
            this.log(`[1, 2, 3, 4].tryGetNonEnumeratedCount_q_(countVal) // should return true and 4, because this is an array`);
            const count1 = [1, 2, 3, 4].tryGetNonEnumeratedCount_q_(countVal);
            this.log([count1, countVal.value], true);
            assert_1.assert(count1 && countVal.value === 4, "tryGetNonEnumeratedCount returned array count");
            countVal.value = 0;
            this.log(`'nothing is something worth doing'.tryGetNonEnumeratedCount_q_(countVal) // strings can also be counted without enumeration`);
            const count1a = 'nothing is something worth doing'.tryGetNonEnumeratedCount_q_(countVal);
            this.log([count1a, countVal.value], true);
            assert_1.assert(count1a && countVal.value === 32, "tryGetNonEnumeratedCount returned string count");
            countVal.value = 0;
            this.log(`const squares = [1, 2, 3, 4].select_q_(s => s ** 2); squares.tryGetNonEnumeratedCount_q_(countVal) // not possible as the array is buried under a generator`);
            const squares = [1, 2, 3, 4].select_q_(s => Math.pow(s, 2));
            const count2 = squares.tryGetNonEnumeratedCount_q_(countVal);
            // should be false, 0
            this.log([count2, countVal.value], true);
            assert_1.assert(!count2 && countVal.value === 0, 'tryGetNonEnumeratedCount could not get from generator');
            // Now we've gone and materialized it so we can get the count (it's actually the enumerated count)
            this.log(`squares.count_q_(); squares.tryGetNonEnumeratedCount_q_(countVal); // Now that it's been enumerated, you can get the count without enumerating it again`);
            const enumeratedCount = squares.count_q_();
            const count3 = squares.tryGetNonEnumeratedCount_q_(countVal);
            this.log([count3, countVal.value, enumeratedCount], true);
            assert_1.assert(count3 && countVal.value === enumeratedCount, 'tryGetNonEnumeratedCount could get from backup');
            this.log("LINQ doesn't give a way to execute an operation without returning results, but JOIN provides forEach");
            this.log("const forEachTest: string[] = [];\n[1, 2, 3].select_q_(s => s * s).forEach((item, idx) => { forEachTest.push(`${idx}=${item}`); });");
            const forEachTest = [];
            [1, 2, 3].select_q_(s => s * s).forEach_q_((item, idx) => {
                forEachTest.push(`${idx}=${item}`);
            });
            this.log(forEachTest, true);
            assert_1.assert(forEachTest.sequenceEqual_q_(["0=1", "1=4", "2=9"]), "ForEach looped through iterable");
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test004 = Test004;

},{"../src/Enumerable/Enumerable":1,"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Singleton Results',
            descriptionHtml: `<p>Once you have a query, you might want to process that query to get a result, whether it be counting the rows, finding the min or max value, or picking the first or last. These operations will enumerate the dataset (materializing the enumerable) to find the result.</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test005 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAt_q_(3) // like array[3]`);
            const test01 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAt_q_(3);
            this.log(test01, true);
            assert_1.assert(test01 === 'winner', 'Element at 3rd');
            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(3) // works the same way ...`);
            const test02 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(3);
            this.log(test02, true);
            assert_1.assert(test02 === 'winner', 'ElementAtDefault 3rd');
            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(13, 'default') // elementAt_q_(13) would have thrown`);
            const test03 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(13, 'default');
            this.log(test03, true);
            assert_1.assert(test03 === 'default', 'ElementAt with default');
            this.log(`[1, 3, 4, 5].all_q_(num => num % 2 === 1) // check if all are odd`);
            const test04 = [1, 3, 4, 5].all_q_(num => num % 2 === 1);
            this.log(test04, true);
            assert_1.assert(!test04, 'All is false');
            this.log(`[1, 3, 5].all_q_(num => num % 2 === 1) // check if all are odd`);
            const test05 = [1, 3, 5].all_q_(num => num % 2 === 1);
            this.log(test05, true);
            assert_1.assert(test05, 'All is true');
            this.log(`[1, 3, 5].all_q_((num: number, idx: number) => idx < 1) // check if index of all is less than 1 (kind of BS test)`);
            const test05a = [1, 3, 5].all_q_((num, idx) => idx < 1);
            this.log(test05a, true);
            assert_1.assert(!test05a, 'All is false with index');
            this.log(`[1, 2, 3].any_q_() // does sequence have anything`);
            const test06 = [1, 2, 3].any_q_();
            this.log(test06, true);
            assert_1.assert(test06, 'Any with full array');
            this.log(`[1, 2, 3].any_q_(num => num % 2 === 0) // Any can take a filter function, same as where(func).any()`);
            const test07 = [1, 2, 3].any_q_(num => num % 2 === 0);
            this.log(test07, true);
            assert_1.assert(test07, 'Any with filter');
            this.log(`[1, 3].any_q_(num => num % 2 === 0) // should be false`);
            const test08 = [1, 3].any_q_(num => num % 2 === 0);
            this.log(test08, true);
            assert_1.assert(!test08, 'Any with filter and no match');
            this.log(`[1, 3].any_q_((num: number, idx: number) => idx > 10) check if index on any is greater than 10 (kind of BS test)`);
            const test08a = [1, 3].any_q_((num, idx) => idx > 10);
            this.log(test08a, true);
            assert_1.assert(!test08a, 'Any with filter and index');
            this.log(`[1, 2, 3].contains_q_(3) // is element in sequence`);
            const test09 = [1, 2, 3].contains_q_(3);
            this.log(test09, true);
            assert_1.assert(test09, 'Contains with match');
            this.log(`["a", "b", "c"].contains_q_("B") // no match`);
            const test10 = ["a", "b", "c"].contains_q_("B");
            this.log(test10, true);
            assert_1.assert(!test10, 'Contains with no match');
            this.log(`["a", "b", "c"].contains_q_("B") // no match`);
            const test10a = ["a", "b", "c"].contains_q_("B", (x, y) => x.toUpperCase() === y.toUpperCase());
            this.log(test10a, true);
            assert_1.assert(test10a, 'Contains with custom equality');
            this.log(`[1, 2, 2, -2].count_q_() // 4`);
            const test11 = [1, 2, 2, -2].count_q_();
            this.log(test11, true);
            assert_1.assert(test11 === 4, 'Count a sequence');
            this.log(`[1, 2, 3, 4, 5, 6, 7].count_q_(num => num % 2 === 0) // count can take a filter condition, same as where(func).count()`);
            const test12 = [1, 2, 3, 4, 5, 6, 7].count_q_(num => num % 2 === 0);
            this.log(test12, true);
            assert_1.assert(test12 === 3, 'Count with filter');
            this.log(`["x", "y", "z"].longCount_q_() // use longcount to count more than max integer ... only works in ECMAScript 2020 or newer ... probably takes a long time`);
            const test13 = ["x", "y", "z"].longCount_q_();
            this.log(test13.toString(), true); // built-in toJSON can't serialize bigint
            assert_1.assert(test13.toString() === "3", "LongCount a sequence");
            this.log(`["x", "y", "z", "X"].longCount_q_(q => q.toLowerCase() === "x") // also takes a filter`);
            const test14 = ["x", "y", "z", "X"].longCount_q_(q => q.toLowerCase() === "x");
            this.log(test14.toString(), true); // built-in toJSON can't serialize bigint
            assert_1.assert(test14.toString() === "2", "LongCount with filter");
            this.log(`[1, 2, 3, 4, 5].sum_q_() // sum the values`);
            const test15 = [1, 2, 3, 4, 5].sum_q_();
            this.log(test15, true);
            assert_1.assert(test15 === 15, 'Sum sequence values');
            this.log(`[1, 2, 3, 4, 5].sum_q_(q => q * 2) // can apply a transformation function before summing`);
            const test16 = [1, 2, 3, 4, 5].sum_q_(q => q * 2);
            this.log(test16, true);
            assert_1.assert(test16 === 30, 'Sum with transformation');
            this.log(`[1, 3, 4, 4, , undefined].average_q_() // 3 ... throws if empty, can't divide by zero`);
            const test17 = [1, 3, 4, 4, , undefined].average_q_();
            this.log(test17, true);
            assert_1.assert(test17 === 3, 'Average sequence');
            this.log(`[undefined].average_q_() // LINQ says to ignore nulls in nullable numbers, and if all are null, return null`);
            const test17a = [undefined].average_q_();
            this.log(test17a, true);
            assert_1.assert(test17a === undefined, 'Average a null sequence');
            this.log(`[2, 3, 4].first_q_() // 2`);
            const test18 = [2, 3, 4].first_q_();
            this.log(test18, true);
            assert_1.assert(test18 === 2, 'First in sequence');
            // should return 4
            this.log(`[2, 3, 4].first_q_(q => q > 3) // can take a filter function, same as where(func).first()`);
            const test19 = [2, 3, 4].first_q_(q => q > 3);
            this.log(test19, true);
            assert_1.assert(test19 === 4, 'First with filter');
            this.log(`[1, 1, 2, 3, 4].first_q_((q: number, idx: number) => idx === 3) // the filter condition can take index as a parameter (another BS test)`);
            const test19a = [1, 1, 2, 3, 4].first_q_((q, idx) => idx === 3);
            this.log(test19a, true);
            assert_1.assert(test19a === 3, 'First with filter on index');
            this.log(`[2, 3, 4].first_q_(q => q > 100) // this will throw because there are no matches`);
            let throw1 = false;
            try {
                [2, 3, 4].first_q_(q => q > 100);
            }
            catch (_a) {
                throw1 = true;
            }
            assert_1.assert(throw1, 'First threw');
            this.log(`[2, 3, 4].firstOrDefault_q_(q => q > 100, -1) // this will return the value provided (or undefined if none) instead of throwing`);
            const test20 = [2, 3, 4].firstOrDefault_q_((q) => q > 100, -1);
            this.log(test20, true);
            assert_1.assert(test20 === -1, 'FirstOrDefault with default');
            this.log(`[1, 1, 2, 3, 4].firstOrDefault_q_((q: number, idx: number) => idx === 3) // also takes filter with index`);
            const test20a = [1, 1, 2, 3, 4].firstOrDefault_q_((q, idx) => idx === 3);
            this.log(test20a, true);
            assert_1.assert(test20a === 3, 'FirstOrDefault with filter on index');
            this.log("Sometimes this API isn't as clean as the C# API because type checking in JS is ambiguous and because parameters don't actually have names.");
            this.log("In this case, when called with a single input, it's not possible if this is the optional filter or the optional default. It's assumed to be the filter.");
            this.log(`[].firstOrDefault_q_({ defaultValue: -2 }) // Use this format to pass default but no filter.`);
            const test21 = [].firstOrDefault_q_({ defaultValue: -2 });
            this.log(test21, true);
            assert_1.assert(test21 === -2, "FirstOrDefault with only default");
            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_() // can't have first without last`);
            const test22 = ['first', 'second', 'third', 'fourth', 'last'].last_q_();
            this.log(test22, true);
            assert_1.assert(test22 === 'last', 'Last of sequence');
            // should be "fourth"
            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_(q => q[0] === "f") // last can also take filter, same as where(func).last()`);
            const test23 = ['first', 'second', 'third', 'fourth', 'last'].last_q_(q => q[0] === "f");
            this.log(test23, true);
            assert_1.assert(test23 === 'fourth', 'Last with filter');
            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_((q: string, idx: number) => idx < 3) // last filter also allows index`);
            const test23a = ['first', 'second', 'third', 'fourth', 'last'].last_q_((q, idx) => idx < 3);
            this.log(test23a, true);
            assert_1.assert(test23a === 'third', 'Last with filter and index');
            this.log(`['first', 'second', 'third'].last_q_(q => q.length > 100) // just like with first() this will throw`);
            let throw2 = false;
            try {
                ['first', 'second', 'third'].last_q_(q => q.length > 100);
            }
            catch (_b) {
                throw2 = true;
            }
            assert_1.assert(throw2, "Last throws on empty sequence");
            this.log(`['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_(q => q[0] === "X", "default") // doesn't throw, instead returns default`);
            const test24 = ['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q) => q[0] === "X", "default");
            this.log(test24, true);
            assert_1.assert(test24 === 'default', 'LastOrDefault with default');
            this.log(`['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q: string, idx: number) => idx < 3) // filter also allows index`);
            const test24a = ['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q, idx) => idx < 3);
            this.log(test24a, true);
            assert_1.assert(test24a === 'third', 'Last with filter and index');
            this.log(`[].lastOrDefault_q_({ defaultValue: "default" }) // just like with first, passing only default value`);
            const test25 = [].lastOrDefault_q_({ defaultValue: "default" });
            this.log(test25, true);
            assert_1.assert(test25 === 'default', 'LastOrDefault with only default');
            // should be 1
            this.log(`[1].single_q_() // returns record if there is exactly one, throwing if 0 or more than one`);
            const test26 = [1].single_q_();
            this.log(test26, true);
            assert_1.assert(test26 === 1, 'Single record in sequence');
            this.log(`[1, 2].single_q_(q => q % 2 === 0) // takes a filter function, same as where(func).single()`);
            const test27 = [1, 2].single_q_(q => q % 2 === 0);
            this.log(test27, true);
            assert_1.assert(test27 === 2, 'Single with filter');
            this.log(`[1, 2].single_q_((q: number, idx: number) => idx === 0) // filter function can take index`);
            const test27a = [1, 2].single_q_((q, idx) => idx === 0);
            this.log(test27a, true);
            assert_1.assert(test27a === 1, 'Single with filter and index');
            this.log(`[1, 2, 3, 4].single_q_(q => q < 3) // single throws if there are multiple matches`);
            let throw4 = false;
            try {
                [1, 2, 3, 4].single_q_(q => q < 3);
            }
            catch (_c) {
                throw4 = true;
            }
            assert_1.assert(throw4, 'Single throws when multiple returned');
            this.log(`[].single_q_() // Like first() and last(), single() throws on an empty sequence`);
            let throw3 = false;
            try {
                [].single_q_();
            }
            catch (_d) {
                throw3 = true;
            }
            assert_1.assert(throw3, 'Single throws on empty sequence');
            let throw5 = false;
            try {
                [1, 2, 3, 4].single_q_(q => q > 10000);
            }
            catch (_e) {
                throw5 = true;
            }
            assert_1.assert(throw5, 'Single throws on empty sequence with filter');
            this.log(`[1, 2, 3, 4].singleOrDefault_q_(q => q > 1000, -1) // singleOrDefault supplies default value for empty sequence, still throws if multiple`);
            const test28 = [1, 2, 3, 4].singleOrDefault_q_((q) => q > 1000, -1);
            this.log(test28, true);
            assert_1.assert(test28 === -1, "Default returned for singleOrDefault");
            this.log(`[1, 2].singleOrDefault_q_((q: number, idx: number) => idx === 0) // filter function can take index`);
            const test28a = [1, 2].singleOrDefault_q_((q, idx) => idx === 0);
            this.log(test28a, true);
            assert_1.assert(test28a === 1, 'Single with filter and index');
            let throw6 = false;
            try {
                [1, 2, 3, 4].singleOrDefault_q_((q) => q % 2 === 0);
            }
            catch (_f) {
                throw6 = true;
            }
            assert_1.assert(throw6, "SingleOrDefault still throws on multiple");
            this.log(`[2, 3, 5, 7, 6, 4, 1].max_q_() // 7 is maximum`);
            const test29 = [2, 3, 5, 7, 6, 4, 1].max_q_();
            this.log(test29, true);
            assert_1.assert(test29 === 7, 'Max returns maximum');
            this.log(`[2, 3, 5, 6, 4, 1].max_q_(q => q * q) // can take a transformation function applied before maximum, same as select(func).max()`);
            const test30 = [2, 3, 5, 6, 4, 1].max_q_(q => q * q);
            this.log(test30, true);
            assert_1.assert(test30 === 36, 'Max returned with function');
            this.log("Max can take a custom comparer that returns 1 if the first value is greater, -1 is the second, else 0");
            this.log(`const ignoreEvenComparer = (x, y) => {
                x = x % 2 === 0 ? 0 : x;
                y = y % 2 === 0 ? 0 : y;
                if (x > y) {
                    return 1;
                } else if (x < y) {
                    return -1;
                } else {
                    return 0;
                }
            }`);
            const ignoreEvenComparer = (x, y) => {
                x = x % 2 === 0 ? 0 : x;
                y = y % 2 === 0 ? 0 : y;
                if (x > y) {
                    return 1;
                }
                else if (x < y) {
                    return -1;
                }
                else {
                    return 0;
                }
            };
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].max_q_(q => q.n, ignoreEvenComparer) // max not counting evens`);
            const test31 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].max_q_(q => q.n, ignoreEvenComparer);
            this.log(test31, true);
            assert_1.assert(test31 === 5, 'Max with custom comparer and transformation');
            this.log(`[2, 3, 5, 6, 4, 1].max_q_({compare: ignoreEvenComparer }) // custom comparer can be sent as first parameter by putting in IComparer`);
            const test32 = [2, 3, 5, 6, 4, 1].max_q_({
                compare: ignoreEvenComparer
            });
            this.log(test32, true);
            assert_1.assert(test32 === 5, 'Max with custom comparer');
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n) // maxBy uses a key selector function, compares the keys, but returns the element`);
            const test33 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n);
            this.log(test33, true);
            assert_1.assert(test33.n === 6, "MaxBy with key lookup");
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n, ignoreEvenComparer) // maxBy also takes custom comparer`);
            const test34 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n, ignoreEvenComparer);
            this.log(test34, true);
            assert_1.assert(test34.n === 5, 'MaxBy with custom comparer');
            this.log(`[2, 3, 5, 7, 6, 4, 1].min_q_() // 1 is minimum`);
            const test35 = [2, 3, 5, 7, 6, 4, 1].min_q_();
            this.log(test35, true);
            assert_1.assert(test35 === 1, 'Min returns minimum');
            this.log(`[2, 3, 5, 6, 4].min_q_(q => q * q) // min also takes transformation function, same as select(func).min()`);
            const test36 = [2, 3, 5, 6, 4].min_q_(q => q * q);
            this.log(test36, true);
            assert_1.assert(test36 === 4, 'Min with filter');
            const ignoreEvenComparer2 = (x, y) => {
                x = x % 2 === 0 ? 110 : x;
                y = y % 2 === 0 ? 110 : y;
                if (x > y) {
                    return 1;
                }
                else if (x < y) {
                    return -1;
                }
                else {
                    return 0;
                }
            };
            // should be 3 (the custom comparer filters out evens)
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].min_q_(q => q.n, ignoreEvenComparer2) // min also takes custom comparer`);
            const test37 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].min_q_(q => q.n, ignoreEvenComparer2);
            this.log(test37, true);
            assert_1.assert(test37 === 3, "Min with custom comparer and transformation");
            this.log(`[2, 3, 5, 6, 4].min_q_({ compare: ignoreEvenComparer2 })`);
            const test38 = [2, 3, 5, 6, 4].min_q_({
                compare: ignoreEvenComparer2
            });
            this.log(test38, true);
            assert_1.assert(test38 === 3, "Min with custom comparer only");
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n) // also a minBy that takes a key selector`);
            const test39 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n);
            this.log(test39, true);
            assert_1.assert(test39.n === 2, "MinBy returns min with key lookup");
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n, ignoreEvenComparer2) // minBy also takes a custom comparer`);
            const test40 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n, ignoreEvenComparer2);
            this.log(test40, true);
            assert_1.assert(test40.n === 3, 'MinBy with custom comparer');
            this.log("Max() and Min() throw when called on an empty sequence. To handle that, I created 2 JOIN-specific methods.");
            this.log("Because of the way overloads work in JS, if you aren't using all inputs, enclose in { defaultValue }.");
            this.log('');
            this.log(`[].maxOrDefault_q_({ defaultValue: 'default' }) // same as defaultIfEmpty('default').max()`);
            const test41 = [].maxOrDefault_q_({ defaultValue: 'default' });
            this.log(test41, true);
            assert_1.assert(test41 === 'default', 'max value or default');
            this.log(`[].minOrDefault_q_({ defaultValue: 'default' }) // same as defaultIfEmpty('default').min()`);
            const test42 = [].minOrDefault_q_({ defaultValue: 'default' });
            this.log(test42, true);
            assert_1.assert(test42 === 'default', 'min value or default');
            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_(
                (longest, next) => next.length > longest.length ? next : longest
                ) // aggregate acts like reduce(), in this case tracking the max length but it could sum up the results, etc`);
            const test43 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_((longest, next) => next.length > longest.length ? next : longest);
            this.log(test43, true);
            assert_1.assert(test43 === 'passionfruit', 'Aggregate with only functon');
            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => Array.from(next).filter(f => f === 'n').length > Array.from(longest).filter(f => f === 'n').length ? next : longest
            ) // initial value can be provided`);
            const test44 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana', (longest, next) => Array.from(next).filter(f => f === 'n').length > Array.from(longest).filter(f => f === 'n').length ? next : longest);
            this.log(test44, true);
            assert_1.assert(test44 === 'banana', 'Aggregate with initial value');
            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => next.length > longest.length ? next : longest,
                fruit => fruit.toUpperCase()
            ) // can take initial value and a function called upon the final result`);
            const test45 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana', (longest, next) => next.length > longest.length ? next : longest, fruit => fruit.toUpperCase());
            this.log(test45, true);
            assert_1.assert(test45 === 'PASSIONFRUIT', 'Aggregate with initial value and output function');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test005 = Test005;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const assert_1 = require("./assert");
const TestCaseView_1 = require("./TestCaseView");
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Multi-Sequence Queries',
            descriptionHtml: `<p>These functions, which include inner joins, outer joins, concatenation, and semi-joins, compare and/or combine multiple iterables.</p>`
        });
    }
}
// tslint:disable-next-line:max-classes-per-file
class Test006 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Do your testing here
            this.log(`To be equal two sequences need to be the same length and have the same items in the same order.`);
            this.log('');
            this.log(`[1, 2, 3].sequenceEqual_q_([2, 3]) // different lengths`);
            const test01 = [1, 2, 3].sequenceEqual_q_([2, 3]);
            this.log(test01, true);
            assert_1.assert(!test01, "SequenceEqual tests length 1");
            this.log(`[1, 3].sequenceEqual_q_([2, 3, 1]) // different lengths`);
            const test02 = [1, 3].sequenceEqual_q_([2, 3, 1]);
            this.log(test02, true);
            assert_1.assert(!test02, "SequenceEqual tests length 2");
            this.log(`[1, 2, 3].sequenceEqual_q_([2, 3, 1]) // order matters`);
            const test03 = [1, 2, 3].sequenceEqual_q_([2, 3, 1]);
            this.log(test03, true);
            assert_1.assert(!test03, "SequenceEqual tests items");
            this.log(`[1, 2, 3].sequenceEqual_q_([1, 2, 3]) // this is good`);
            const test04 = [1, 2, 3].sequenceEqual_q_([1, 2, 3]);
            this.log(test04, true);
            assert_1.assert(test04, "SequenceEqual matches items and length");
            this.log(`[1, 2, 3].sequenceEqual_q_([-2, -3], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test05 = [1, 2, 3].sequenceEqual_q_([-2, -3], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test05, true);
            assert_1.assert(!test05, 'SequenceEqual with custom comparer tests length 1');
            this.log(`[1, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test06 = [1, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test06, true);
            assert_1.assert(!test06, 'SequenceEqual with custom comparer tests length 2');
            // should be false
            this.log(`[1, 2, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test07 = [1, 2, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test07, true);
            assert_1.assert(!test07, 'SequenceEqual with custom comparer tests items');
            // should be true
            this.log(`[1, 2, 3].sequenceEqual_q_([-1, -2, -3], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test08 = [1, 2, 3].sequenceEqual_q_([-1, -2, -3], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test08, true);
            assert_1.assert(test08, 'SequenceEqual with custom comparer to equate absolute values');
            this.log(`[1, 2].concat_q_([3, 4]) // 1,2,3,4`);
            const test09 = [1, 2].concat_q_([3, 4]).toArray_q_();
            this.log(test09, true);
            assert_1.assert(test09.sequenceEqual_q_([1, 2, 3, 4]), "Concat concatenates sequences");
            this.log(`[1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6]) // 1,2,3,4,5,6 (concatenates and dedupes)`);
            const test10 = [1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6]).toArray_q_();
            this.log(test10, true);
            assert_1.assert(test10.sequenceEqual_q_([1, 2, 3, 4, 5, 6]), "Union concatenates and removes duplicates");
            this.log(`[1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6], (x, y) => x % 2 === y % 2) // custom even/odd comparer`);
            const test11 = [1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6], (x, y) => x % 2 === y % 2).toArray_q_();
            this.log(test11, true);
            assert_1.assert(test11.sequenceEqual_q_([1, 2]), 'union with custom comparer to match evens/odds');
            this.log(`[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x) // does a union on keys returned by key selector function, returning the items`);
            const test12 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x).toArray_q_();
            this.log(test12, true);
            assert_1.assert(JSON.stringify(test12) === `[{"x":1},{"x":2},{"x":3},{"x":4},{"x":5},{"x":6}]`, "unionBy returns one item for each unique key");
            this.log(`[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x, (x, y) => x % 2 === y % 2) // custom even/odd comparer`);
            const test13 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x, (x, y) => x % 2 === y % 2).toArray_q_();
            this.log(test13, true);
            assert_1.assert(test13.length === 2 && test13[0].x === 1 && test13[1].x === 2, "UnionBy with custom comparer to match evens/odds");
            this.log(`['A', 'A', 'C', 'Q', 'B', 'D', 'X'].intersect_q_(['W', 'A', 'C', 'B', 'M']) // deduped records that are in both sequences`);
            const test14 = ['A', 'A', 'C', 'Q', 'B', 'D', 'X'].intersect_q_(['W', 'A', 'C', 'B', 'M']).toArray_q_();
            this.log(test14, true);
            assert_1.assert(test14.sequenceEqual_q_(["A", "C", "B"]), "Intersection returns set result of items in 2 sequences");
            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersect_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong']) // can take a custom equality`);
            const test14a = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersect_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test14a, true);
            assert_1.assert(test14a.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]), "Intersection with custom equality");
            // redundant with the previous but it's in .net 6
            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], q => q[0]) // find deduped keys that are in both sequences and return first item for each`);
            const test15 = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], q => q[0]).toArray_q_();
            this.log(test15, true);
            assert_1.assert(test15.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]), "intersectBy returns intersection by key selected");
            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['watermelon', 'avocado', 'cucumber', 'Berry', 'mango'], q => q[0], (x, y) => x.toLowerCase() === y.toLowerCase()) // custom equality comparer`);
            const test16 = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['watermelon', 'avocado', 'cucumber', 'Berry', 'mango'], q => q[0], (x, y) => x.toLowerCase() === y.toLowerCase()).toArray_q_();
            this.log(test16, true);
            assert_1.assert(test16.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]));
            this.log(`[2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5].except_q_([2.2]) // deduped items from first not in second`);
            const test17 = [2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5].except_q_([2.2]).toArray_q_();
            this.log(test17, true);
            assert_1.assert(test17.sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'Except removes items from second sequence');
            this.log(`[{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].except_q_([{ a: 2.2 }], (q, r) => q.a === r.a) // custom equality comparer`);
            const test18 = [{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].except_q_([{ a: 2.2 }], (q, r) => q.a === r.a)
                .toArray_q_();
            this.log(test18, true);
            assert_1.assert(test18.map(m => m.a).sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'Except with custom equality');
            this.log(`[{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].exceptBy_q_([{ a: 2.2 }], q => q.a) // exceptBy returns exception by key selector`);
            const test19 = [{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].exceptBy_q_([{ a: 2.2 }], q => q.a).toArray_q_();
            this.log(test19, true);
            assert_1.assert(test19.map(m => m.a).sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'ExceptBy uses key selector');
            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }].exceptBy_q_([{ a: 2 }],
                q => q.a, (q, r) => q % 2 === r % 2) // custom equality to make all evens and all odds look the same`);
            const test20 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }].exceptBy_q_([{ a: 2 }], q => q.a, (q, r) => q % 2 === r % 2)
                .toArray_q_();
            this.log(test20, true);
            assert_1.assert(test20.map(m => m.a).sequenceEqual_q_([1]), 'ExceptBy with custom equality');
            this.log("Anyone with SQL experience should know what an Inner Join is.");
            this.log("An inner join matches every item in the first sequence with every item in the second sequence by matching keys, and returns those records where the key match is true, both in the same row");
            this.log("The LINQ join requires you to send two sequences, a key selector for sequence 1, a key selector for sequence 2, and an output projection function to produce the rows to return.");
            this.log('');
            this.log('["Apricot", "Banana", "Cucumber"].join_q_(["Apple", "Canteloupe Island", "Durian", "b-wrong", "Avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`) // joining on first letter, returning left first letter and right full word');
            const test21 = ["Apricot", "Banana", "Cucumber"].join_q_(["Apple", "Canteloupe Island", "Durian", "b-wrong", "Avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`).toArray_q_();
            this.log(test21, true);
            assert_1.assert(test21.sequenceEqual_q_(["A is for Apple", "A is for Avocado", "C is for Canteloupe Island"]), 'Join combines two sequences row-wise');
            this.log('["Apricot", "Banana", "Cucumber"].join_q_(["apple", "canteloupe Island", "durian", "avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`, { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // can take a custom equality comparer');
            const test22 = ["Apricot", "Banana", "Cucumber"].join_q_(["apple", "canteloupe Island", "durian", "avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`, { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }).toArray_q_();
            this.log(test22, true);
            assert_1.assert(test22.sequenceEqual_q_(["A is for apple", "A is for avocado", "C is for canteloupe Island"]), 'Join can take custom equality');
            this.log("In LINQ's join, the output function is required. In JOIN, you can ignore it. If you do so, simple tuples are returned.");
            this.log(`["Apricot", "Banana"].join_q_(["apple", "Canteloupe Island", "Durian", "Avocado"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // skipping the output function`);
            const test23 = ["Apricot", "Banana"].join_q_(["apple", "Canteloupe Island", "Durian", "Avocado"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() });
            this.log(test23, true);
            assert_1.assert(JSON.stringify(test23) === `[["Apricot","apple"],["Apricot","Avocado"]]`, 'Join() with tuple output');
            this.log(`LINQ does not provide an outer join operator. It can be done (in a truly ugly way) in the query syntax, but not in fluent methods`);
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado"], l => l[0], r => r[0], (l, r) => ({ l, r })) // but JOIN does have an outer join`);
            const test24 = ["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado"], l => l[0], r => r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test24, true);
            assert_1.assert(JSON.stringify(test24) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"}]`, 'outerJoin matching Join() syntax');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado", "Apple"], l => l[0], r => r[0]) // default tuple output from join_q_() is also here`);
            const test25 = ["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado", "Apple"], l => l[0], r => r[0]).toArray_q_();
            this.log(test25, true);
            assert_1.assert(JSON.stringify(test25) === `[["Apple","Avocado"],["Apple","Apple"],["Apricot","Avocado"],["Apricot","Apple"],["Banana","Berry"],["Canteloupe",null]]`, 'outerJoin with tuple output');
            this.log(`["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], (l, r) => ({ l, r }), (x, y) => x.toLowerCase() === y.toLowerCase()) // custom equality`);
            const test26 = ["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], (l, r) => ({ l, r }), (x, y) => x.toLowerCase() === y.toLowerCase()).toArray_q_();
            this.log(test26, true);
            assert_1.assert(JSON.stringify(test26) === `[{"l":"Apple","r":"avocado"},{"l":"Apple","r":"apple"},{"l":"Apple","r":"avocado"},{"l":"Apple","r":"apple"},{"l":"Apricot","r":"avocado"},{"l":"Apricot","r":"apple"},{"l":"Banana","r":"berry"},{"l":"Canteloupe"}]`, 'outerJoin with custom equality');
            this.log(`["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // custom equality and tuple output`);
            const test27 = ["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }).toArray_q_();
            this.log(test27, true);
            assert_1.assert(JSON.stringify(test27) === `[["Apple","avocado"],["Apple","apple"],["Apple","avocado"],["Apple","apple"],["Apricot","avocado"],["Apricot","apple"],["Banana","berry"],["Canteloupe",null]]`, 'outerJoin with custom equality and tuple output');
            this.log("The join() in LINQ is kind of a pain. I always find myself wondering what are the inputs, which is the first, which is the second, why did they use 'inner' and 'outer' for things that aren't inner or outer, etc. I keep having to google it. So JOIN contains a friendly version that combines two key selectors and custom equality into a single function.");
            this.log('');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // join on first letter and return objects`);
            const test28 = ["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test28, true);
            assert_1.assert(JSON.stringify(test28) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"}]`, "Basic innerJoin helper");
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]) // returns tuples, output function is optional`);
            const test29 = ["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test29, true);
            assert_1.assert(JSON.stringify(test29) === `[["Apple","Avocado"],["Apricot","Avocado"],["Banana","Berry"]]`, 'InnerJoin helper with tuple output');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a left outer join`);
            const test30 = ["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test30, true);
            assert_1.assert(JSON.stringify(test30) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"}]`, 'LeftJoin helper');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]) // also allows tuple output`);
            const test31 = ["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test31, true);
            assert_1.assert(JSON.stringify(test31) === `[["Apple","Avocado"],["Apricot","Avocado"],["Banana","Berry"],["Canteloupe",null]]`, 'LeftJoin helper with tuple output');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].rightJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a right outer join`);
            const test32 = ["Apple", "Apricot", "Banana", "Canteloupe"].rightJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test32, true);
            assert_1.assert(JSON.stringify(test32) === `[{"l":"Banana","r":"Berry"},{"r":"Watermelon"},{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"}]`, 'RightJoin helper');
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].fullJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a full outer join`);
            const test33 = ["Apple", "Apricot", "Banana", "Canteloupe"].fullJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test33, true);
            assert_1.assert(JSON.stringify(test33) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"},{"r":"Watermelon"}]`, 'FullJoin helper');
            this.log(`[2, 3].crossJoin_q_([5, 6], (l, r) => ({ l, r })) // the join collection isn't complete without a cross join`);
            const test34 = [2, 3].crossJoin_q_([5, 6], (l, r) => ({ l, r })).toArray_q_();
            this.log(test34, true);
            assert_1.assert(JSON.stringify(test34) === `[{"l":2,"r":5},{"l":2,"r":6},{"l":3,"r":5},{"l":3,"r":6}]`, 'CrossJoin helper');
            this.log("GroupJoin is a weird one that sounds like another custom method, but this one comes from Microsoft. A group join is like a combination of outer join and half a groupBy. The left and right side are joined and then the right side is grouped on the joining key. If nothing is on the right, the group list is empty");
            this.log('');
            this.log(`['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['Average', 'Alphabet', 'Cartographer', 'c-wrong'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching })) // join on first letters and group right`);
            const test35 = ['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['Average', 'Alphabet', 'Cartographer', 'c-wrong'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching })).toArray_q_();
            this.log(test35, true);
            assert_1.assert(JSON.stringify(test35) === `[{"word":"Apple","alsoMatching":["Average","Alphabet"]},{"word":"Banana","alsoMatching":[]},{"word":"Apple","alsoMatching":["Average","Alphabet"]},{"word":"Canteloupe","alsoMatching":["Cartographer"]}]`, 'GroupJoin joins and groups');
            this.log(`['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['average', 'Alphabet', 'cartographer'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching }), { equals: (x, y) => x.toUpperCase() === y.toUpperCase() }) // can take a custom equality`);
            const test36 = ['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['average', 'Alphabet', 'cartographer'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching }), { equals: (x, y) => x.toUpperCase() === y.toUpperCase() }).toArray_q_();
            this.log(test36, true);
            assert_1.assert(JSON.stringify(test36) === `[{"word":"Apple","alsoMatching":["average","Alphabet"]},{"word":"Banana","alsoMatching":[]},{"word":"Apple","alsoMatching":["average","Alphabet"]},{"word":"Canteloupe","alsoMatching":["cartographer"]}]`, 'Group join with custom equality');
            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7]) // will return 3 tuples, [1,5], [2,6], and [3,7], one from each sequence in order`);
            const test37 = [1, 2, 3, 4].zip_q_([5, 6, 7]).toArray_q_();
            this.log(test37, true);
            assert_1.assert(JSON.stringify(test37) === `[[1,5],[2,6],[3,7]]`, 'Zip two sequences into a sequence of tuples');
            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7], [8, 9, 10, 11]) // can zip a third tuple`);
            const test38 = [1, 2, 3, 4].zip_q_([5, 6, 7], [8, 9, 10, 11]).toArray_q_();
            this.log(test38, true);
            assert_1.assert(JSON.stringify(test38) === `[[1,5,8],[2,6,9],[3,7,10]]`, 'Zip three sequences');
            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7], (x, y) => x * y) // in place of the third tuple you can send a function that combines the first 2`);
            const test39 = [1, 2, 3, 4].zip_q_([5, 6, 7], (x, y) => x * y).toArray_q_();
            this.log(test39, true);
            assert_1.assert(JSON.stringify(test39) === `[[1,5,5],[2,6,12],[3,7,21]]`, 'Zip two sequences and a virtual sequence');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log(err.toString());
        }
    }
}
exports.Test006 = Test006;

},{"./TestCaseView":85,"./TestCaseViewModel":86,"./assert":89}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestHeader_1 = require("./TestHeader");
const ConsoleView_1 = require("./ConsoleView");
const Ichigo_1 = require("./Ichigo");
class TestCaseView extends Ichigo_1.Component {
    constructor(viewModel) {
        super();
        this.viewModel = viewModel;
        this.appendChild(new TestHeader_1.TestHeader(viewModel));
        this.console = new ConsoleView_1.ConsoleView();
        this.appendChild(this.console);
        // Note: This component is added to the DOM by the PageRouter immediately after construction.
        // Nothing in the inheriting class can reference this component until after it is constructed.
        // Here we don't care.
        this.testCase();
    }
    log(thing, result = false) {
        this.console.log(thing, result);
    }
}
exports.TestCaseView = TestCaseView;

},{"./ConsoleView":75,"./Ichigo":76,"./TestHeader":87}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ichigo_1 = require("./Ichigo");
class TestCaseViewModel {
    constructor({ name, descriptionHtml } = {}) {
        this.name = Ichigo_1.escapeHtml(name);
        this.description = descriptionHtml;
        this.testNumber = Ichigo_1.PageRouter.params.get('id') || '?';
    }
}
exports.TestCaseViewModel = TestCaseViewModel;

},{"./Ichigo":76}],87:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ichigo_1 = require("./Ichigo");
class TestHeader extends Ichigo_1.Component {
    constructor(vm) {
        super();
        if (vm.name) {
            this.appendChild(Ichigo_1.paragraph(`<h1>Test ${vm.testNumber}: ${vm.name}</h1>`));
        }
        if (vm.description) {
            this.appendChild(Ichigo_1.span(vm.description));
        }
    }
}
exports.TestHeader = TestHeader;

},{"./Ichigo":76}],88:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ichigo_1 = require("./Ichigo");
class TestbenchView extends Ichigo_1.Component {
    constructor() {
        super({
            id: 'test-bench',
            innerHtml: `<div>
                <a href="#" class="test-link">Previous Test</a>
                <span id="testHeader">Test #0</span>
                <a href="#" class="test-link" data-next="1">Next Test</a>
            </div>
            <br />
            <layout-body></layout-body>`
        });
        const hdr = this.content.querySelector('#testHeader');
        if (hdr) {
            hdr.innerHTML = "Test #" + Ichigo_1.PageRouter.matchedRoute.params.get('id') || '0';
        }
        // Initialize pager to go through tests.
        for (const l of this.content.querySelectorAll('.test-link')) {
            l.addEventListener('click', this.gotoNextTest.bind(this));
        }
    }
    gotoNextTest(evt) {
        evt.preventDefault();
        const id = Number(Ichigo_1.PageRouter.matchedRoute.params.get('id') || '0');
        let nextid;
        if (evt.currentTarget.dataset.next) {
            nextid = id + 1;
            // At the moment, there's exactly one route per test, so we can cheaply know we're at the end
            // even without any configuration for the tests being in this class. This is a cheat, though,
            // because we could easily have added some other routes.
            if (nextid >= Ichigo_1.PageRouter.allRoutes.length) {
                nextid = 0;
            }
        }
        else {
            nextid = id - 1;
            if (nextid < 0) {
                nextid = Ichigo_1.PageRouter.allRoutes.length - 1;
            }
        }
        const hdr = this.content.querySelector('#testHeader');
        if (hdr) {
            hdr.innerHTML = "Test #" + nextid;
        }
        Ichigo_1.PageRouter.route('test/' + nextid);
    }
}
exports.TestbenchView = TestbenchView;

},{"./Ichigo":76}],89:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(test, message) {
    if (!test) {
        throw new Error(message || 'Failed');
    }
}
exports.assert = assert;

},{}]},{},[77])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdGVwLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiLCJ0ZXN0cy9Db25zb2xlVmlldy5qcyIsInRlc3RzL0ljaGlnby5qcyIsInRlc3RzL1Byb2dyYW0uanMiLCJ0ZXN0cy9UZXN0MDAwLmpzIiwidGVzdHMvVGVzdDAwMS5qcyIsInRlc3RzL1Rlc3QwMDIuanMiLCJ0ZXN0cy9UZXN0MDAzLmpzIiwidGVzdHMvVGVzdDAwNC5qcyIsInRlc3RzL1Rlc3QwMDUuanMiLCJ0ZXN0cy9UZXN0MDA2LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3TW9kZWwuanMiLCJ0ZXN0cy9UZXN0SGVhZGVyLmpzIiwidGVzdHMvVGVzdGJlbmNoVmlldy5qcyIsInRlc3RzL2Fzc2VydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBNYWtlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9NYWtlR2VuZXJhdG9yXCIpO1xuY29uc3QgQWdncmVnYXRlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FnZ3JlZ2F0ZVwiKTtcbmNvbnN0IEFsbF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BbGxcIik7XG5jb25zdCBBbnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQW55XCIpO1xuY29uc3QgQXBwZW5kXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FwcGVuZFwiKTtcbmNvbnN0IEF2ZXJhZ2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQXZlcmFnZVwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NodW5rXCIpO1xuY29uc3QgQ29uY2F0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvbmNhdFwiKTtcbmNvbnN0IENvbnRhaW5zXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvbnRhaW5zXCIpO1xuY29uc3QgQ291bnRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ291bnRcIik7XG5jb25zdCBDcm9zc0pvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ3Jvc3NKb2luXCIpO1xuY29uc3QgRGVmYXVsdElmRW1wdHlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHlcIik7XG5jb25zdCBEaXN0aW5jdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EaXN0aW5jdFwiKTtcbmNvbnN0IERpc3RpbmN0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGlzdGluY3RCeVwiKTtcbmNvbnN0IEVsZW1lbnRBdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbGVtZW50QXRcIik7XG5jb25zdCBFbGVtZW50QXRPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRWxlbWVudEF0T3JEZWZhdWx0XCIpO1xuY29uc3QgRW1wdHlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRW1wdHlcIik7XG5jb25zdCBFeGNlcHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRXhjZXB0XCIpO1xuY29uc3QgRXhjZXB0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRXhjZXB0QnlcIik7XG5jb25zdCBGaXJzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GaXJzdFwiKTtcbmNvbnN0IEZpcnN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZpcnN0T3JEZWZhdWx0XCIpO1xuY29uc3QgRm9yRWFjaF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Gb3JFYWNoXCIpO1xuY29uc3QgRnVsbEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRnVsbEpvaW5cIik7XG5jb25zdCBHcm91cEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0dyb3VwQnlcIik7XG5jb25zdCBHcm91cEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvR3JvdXBKb2luXCIpO1xuY29uc3QgSW5uZXJKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0lubmVySm9pblwiKTtcbmNvbnN0IEludGVyc2VjdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9JbnRlcnNlY3RcIik7XG5jb25zdCBJbnRlcnNlY3RCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9JbnRlcnNlY3RCeVwiKTtcbmNvbnN0IEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSm9pblwiKTtcbmNvbnN0IExhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGFzdFwiKTtcbmNvbnN0IExhc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGFzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IExlZnRKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xlZnRKb2luXCIpO1xuY29uc3QgTG9uZ0NvdW50XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xvbmdDb3VudFwiKTtcbmNvbnN0IE1heF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhcIik7XG5jb25zdCBNYXhCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhCeVwiKTtcbmNvbnN0IE1heE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHRcIik7XG5jb25zdCBNaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluXCIpO1xuY29uc3QgTWluQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluQnlcIik7XG5jb25zdCBNaW5PckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluT3JEZWZhdWx0XCIpO1xuY29uc3QgT2ZUeXBlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL09mVHlwZVwiKTtcbmNvbnN0IE91dGVySm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9PdXRlckpvaW5cIik7XG5jb25zdCBQcmVwZW5kXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1ByZXBlbmRcIik7XG5jb25zdCBSZXBsaWNhdGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmVwbGljYXRlXCIpO1xuY29uc3QgUmV2ZXJzZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SZXZlcnNlXCIpO1xuY29uc3QgUmlnaHRKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JpZ2h0Sm9pblwiKTtcbmNvbnN0IFNlbGVjdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZWxlY3RcIik7XG5jb25zdCBTZWxlY3RNYW55XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlbGVjdE1hbnlcIik7XG5jb25zdCBTZXF1ZW5jZUVxdWFsXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWxcIik7XG5jb25zdCBTaW5nbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2luZ2xlXCIpO1xuY29uc3QgU2luZ2xlT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NpbmdsZU9yRGVmYXVsdFwiKTtcbmNvbnN0IFNraXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcFwiKTtcbmNvbnN0IFNraXBMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBMYXN0XCIpO1xuY29uc3QgU2tpcFdoaWxlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBXaGlsZVwiKTtcbmNvbnN0IFN0ZXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU3RlcFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TdW1cIik7XG5jb25zdCBUYWtlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VcIik7XG5jb25zdCBUYWtlTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlTGFzdFwiKTtcbmNvbnN0IFRha2VXaGlsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlV2hpbGVcIik7XG5jb25zdCBUb0NvbnZlcnNpb25zXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1RvQ29udmVyc2lvbnNcIik7XG5jb25zdCBVbmlvbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9VbmlvblwiKTtcbmNvbnN0IFVuaW9uQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVW5pb25CeVwiKTtcbmNvbnN0IFdoZXJlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1doZXJlXCIpO1xuY29uc3QgWmlwXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1ppcFwiKTtcbmNsYXNzIEVudW1lcmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBoYWNreSBidXQgbGV0cyBtZSBzcGxpdCB0aGlzIEdJQU5UIGNsYXNzIHVwIGludG8gYSBmZXcgZG96ZW4gZmlsZXMuXG4gICAgICAgIHRoaXMuYWdncmVnYXRlX3FfID0gQWdncmVnYXRlXzEuYWdncmVnYXRlO1xuICAgICAgICB0aGlzLmFsbF9xXyA9IEFsbF8xLmFsbDtcbiAgICAgICAgdGhpcy5hbnlfcV8gPSBBbnlfMS5hbnlfcV87XG4gICAgICAgIHRoaXMuYXBwZW5kX3FfID0gQXBwZW5kXzEuYXBwZW5kO1xuICAgICAgICB0aGlzLmF2ZXJhZ2VfcV8gPSBBdmVyYWdlXzEuYXZlcmFnZTtcbiAgICAgICAgLy8gVGhlcmUncyBubyB3YXkgdG8gZG8gKE51bWJlcilmb28gaW4gSmF2YVNjcmlwdCwgYW5kIGNhc3RpbmcgaW4gVHlwZVNjcmlwdCBpc24ndCBlbWl0dGVkLlxuICAgICAgICAvLyBTbyB0aGUgY2FzdCBpcyBiZWluZyBhbGlhc2VkIHRvIHNlbGVjdCBzbyB5b3UgY2FuIGRvIGZvby5jYXN0KG51bSA9PiBOdW1iZXIobnVtKSlcbiAgICAgICAgdGhpcy5jYXN0X3FfID0gU2VsZWN0XzEuc2VsZWN0O1xuICAgICAgICB0aGlzLmNodW5rX3FfID0gQ2h1bmtfMS5jaHVuaztcbiAgICAgICAgdGhpcy5jb25jYXRfcV8gPSBDb25jYXRfMS5jb25jYXQ7XG4gICAgICAgIHRoaXMuY29udGFpbnNfcV8gPSBDb250YWluc18xLmNvbnRhaW5zO1xuICAgICAgICB0aGlzLmNvdW50X3FfID0gQ291bnRfMS5jb3VudDtcbiAgICAgICAgdGhpcy5jcm9zc0pvaW5fcV8gPSBDcm9zc0pvaW5fMS5jcm9zc0pvaW47XG4gICAgICAgIHRoaXMuZGVmYXVsdElmRW1wdHlfcV8gPSBEZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5O1xuICAgICAgICB0aGlzLmRpc3RpbmN0X3FfID0gRGlzdGluY3RfMS5kaXN0aW5jdDtcbiAgICAgICAgdGhpcy5kaXN0aW5jdEJ5X3FfID0gRGlzdGluY3RCeV8xLmRpc3RpbmN0Qnk7XG4gICAgICAgIHRoaXMuZWxlbWVudEF0X3FfID0gRWxlbWVudEF0XzEuZWxlbWVudEF0O1xuICAgICAgICB0aGlzLmVsZW1lbnRBdE9yRGVmYXVsdF9xXyA9IEVsZW1lbnRBdE9yRGVmYXVsdF8xLmVsZW1lbnRBdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5lbXB0eV9xXyA9IEVtcHR5XzEuZW1wdHk7XG4gICAgICAgIHRoaXMuZXhjZXB0X3FfID0gRXhjZXB0XzEuZXhjZXB0O1xuICAgICAgICB0aGlzLmV4Y2VwdEJ5X3FfID0gRXhjZXB0QnlfMS5leGNlcHRCeTtcbiAgICAgICAgdGhpcy5maXJzdF9xXyA9IEZpcnN0XzEuZmlyc3Q7XG4gICAgICAgIHRoaXMuZmlyc3RPckRlZmF1bHRfcV8gPSBGaXJzdE9yRGVmYXVsdF8xLmZpcnN0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmZvckVhY2hfcV8gPSBGb3JFYWNoXzEuZm9yRWFjaDtcbiAgICAgICAgdGhpcy5mdWxsSm9pbl9xXyA9IEZ1bGxKb2luXzEuZnVsbEpvaW47XG4gICAgICAgIHRoaXMuZ3JvdXBCeV9xXyA9IEdyb3VwQnlfMS5ncm91cEJ5O1xuICAgICAgICB0aGlzLmdyb3VwSm9pbl9xXyA9IEdyb3VwSm9pbl8xLmdyb3VwSm9pbjtcbiAgICAgICAgdGhpcy5pbm5lckpvaW5fcV8gPSBJbm5lckpvaW5fMS5pbm5lckpvaW47XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0X3FfID0gSW50ZXJzZWN0XzEuaW50ZXJzZWN0O1xuICAgICAgICB0aGlzLmludGVyc2VjdEJ5X3FfID0gSW50ZXJzZWN0QnlfMS5pbnRlcnNlY3RCeTtcbiAgICAgICAgdGhpcy5qb2luX3FfID0gSm9pbl8xLmpvaW47XG4gICAgICAgIHRoaXMubGFzdF9xXyA9IExhc3RfMS5sYXN0O1xuICAgICAgICB0aGlzLmxhc3RPckRlZmF1bHRfcV8gPSBMYXN0T3JEZWZhdWx0XzEubGFzdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5sZWZ0Sm9pbl9xXyA9IExlZnRKb2luXzEubGVmdEpvaW47XG4gICAgICAgIHRoaXMubG9uZ0NvdW50X3FfID0gTG9uZ0NvdW50XzEubG9uZ0NvdW50O1xuICAgICAgICB0aGlzLm1heF9xXyA9IE1heF8xLm1heDtcbiAgICAgICAgdGhpcy5tYXhCeV9xXyA9IE1heEJ5XzEubWF4Qnk7XG4gICAgICAgIHRoaXMubWF4T3JEZWZhdWx0X3FfID0gTWF4T3JEZWZhdWx0XzEubWF4T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLm1pbl9xXyA9IE1pbl8xLm1pbjtcbiAgICAgICAgdGhpcy5taW5CeV9xXyA9IE1pbkJ5XzEubWluQnk7XG4gICAgICAgIHRoaXMubWluT3JEZWZhdWx0X3FfID0gTWluT3JEZWZhdWx0XzEubWluT3JEZWZhdWx0O1xuICAgICAgICB0aGlzLm9mVHlwZV9xXyA9IE9mVHlwZV8xLm9mVHlwZTtcbiAgICAgICAgdGhpcy5vdXRlckpvaW5fcV8gPSBPdXRlckpvaW5fMS5vdXRlckpvaW47XG4gICAgICAgIHRoaXMucHJlcGVuZF9xXyA9IFByZXBlbmRfMS5wcmVwZW5kO1xuICAgICAgICB0aGlzLnJlcGxpY2F0ZV9xXyA9IFJlcGxpY2F0ZV8xLnJlcGxpY2F0ZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlX3FfID0gUmV2ZXJzZV8xLnJldmVyc2U7XG4gICAgICAgIHRoaXMucmlnaHRKb2luX3FfID0gUmlnaHRKb2luXzEucmlnaHRKb2luO1xuICAgICAgICB0aGlzLnNlbGVjdF9xXyA9IFNlbGVjdF8xLnNlbGVjdDtcbiAgICAgICAgdGhpcy5zZWxlY3RNYW55X3FfID0gU2VsZWN0TWFueV8xLnNlbGVjdE1hbnk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VFcXVhbF9xXyA9IFNlcXVlbmNlRXF1YWxfMS5zZXF1ZW5jZUVxdWFsO1xuICAgICAgICB0aGlzLnNpbmdsZV9xXyA9IFNpbmdsZV8xLnNpbmdsZTtcbiAgICAgICAgdGhpcy5zaW5nbGVPckRlZmF1bHRfcV8gPSBTaW5nbGVPckRlZmF1bHRfMS5zaW5nbGVPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuc2tpcF9xXyA9IFNraXBfMS5za2lwO1xuICAgICAgICB0aGlzLnNraXBMYXN0X3FfID0gU2tpcExhc3RfMS5za2lwTGFzdDtcbiAgICAgICAgdGhpcy5za2lwV2hpbGVfcV8gPSBTa2lwV2hpbGVfMS5za2lwV2hpbGU7XG4gICAgICAgIHRoaXMuc3RlcF9xXyA9IFN0ZXBfMS5zdGVwO1xuICAgICAgICB0aGlzLnN1bV9xXyA9IFN1bV8xLnN1bTtcbiAgICAgICAgdGhpcy50YWtlX3FfID0gVGFrZV8xLnRha2U7XG4gICAgICAgIHRoaXMudGFrZUxhc3RfcV8gPSBUYWtlTGFzdF8xLnRha2VMYXN0O1xuICAgICAgICB0aGlzLnRha2VXaGlsZV9xXyA9IFRha2VXaGlsZV8xLnRha2VXaGlsZTtcbiAgICAgICAgdGhpcy50b0FycmF5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvQXJyYXk7XG4gICAgICAgIHRoaXMudG9EaWN0aW9uYXJ5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvRGljdGlvbmFyeTtcbiAgICAgICAgdGhpcy50b0hhc2hTZXRfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9IYXNoU2V0O1xuICAgICAgICB0aGlzLnRvTGlzdF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0FycmF5O1xuICAgICAgICB0aGlzLnRvTG9va3VwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTG9va3VwO1xuICAgICAgICB0aGlzLnRvTWFwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTWFwO1xuICAgICAgICB0aGlzLnVuaW9uX3FfID0gVW5pb25fMS51bmlvbjtcbiAgICAgICAgdGhpcy51bmlvbkJ5X3FfID0gVW5pb25CeV8xLnVuaW9uQnk7XG4gICAgICAgIHRoaXMud2hlcmVfcV8gPSBXaGVyZV8xLndoZXJlO1xuICAgICAgICB0aGlzLnppcF9xXyA9IFppcF8xLnppcDtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5faXNDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gTm9ybWFsbHksIHdlJ2QgZ28gYWhlYWQgYW5kIHNheSB0aGUgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXksIG5vdGhpbmcgYnV0LlxuICAgICAgICAvLyBCdXQgbGV0J3MgYmUgZmxleGlibGUgYW5kIGFsbG93IGFueXRoaW5nLiBJZiBpdCdzIG5vdCBpdGVyYWJsZSwgdGhlbiBpdCdsbCBiZWNvbWUgYSBvbmUtaXRlbSBpdGVyYXRvci5cbiAgICAgICAgdGhpcy5fc291cmNlID0gdGhpcy5fZW5zdXJlQmFja3VwKE1ha2VHZW5lcmF0b3JfMS5tYWtlR2VuZXJhdG9yKGRhdGEpKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmdlX3FfKHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JhbmdlKCkge1xuICAgICAgICAgICAgbGV0IGkgPSBzdGFydDtcbiAgICAgICAgICAgIGNvbnN0IG1heHZhbCA9IHN0YXJ0ICsgbGVuO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG4gICAgc3RhdGljIHJlcGVhdF9xXyhlbGVtZW50LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JlcGVhdCgpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgfVxuICAgIGdldCBfZGF0YSgpIHtcbiAgICAgICAgLy8gVGhlcmUncyBub3QgYSBsb3Qgb2YgY2FsbCBmb3Igc2VsZWN0aW5nIGZyb20gYW4gZW51bWVyYWJsZSBtb3JlIHRoYW4gb25jZSwgYnV0IHNvbWVvbmUgbWlnaHRcbiAgICAgICAgLy8gd2FudCB0byBkbyBpdC4gSW4gQyMgdGhlIG9ubHkgcmVhbCB0aW1lIHRoaXMgaGFwcGVucyBpcyB3aGVuIHlvdSB1c2UgdGhlIGRlYnVnZ2VyLCBidXQgaXQgZG9lcyBoYXBwZW4uXG4gICAgICAgIC8vIEJ1dCB3aGVuIGRhdGEgaGFzIGJlZW4gZmV0Y2hlZCBmcm9tIHRoZSBnZW5lcmF0b3IsIGl0IGJlY29tZXMgY2xvc2VkLCBhbmQgZXZlcnkgZ2VuZXJhdG9yIGluIGl0c1xuICAgICAgICAvLyBzb3VyY2UgaXMgYWxzbyBjbG9zZWQuIFRoaXMgaXMgYnVpbHQgaW4gdG8gSlMgYW5kIG5vdCBzb21ldGhpbmcgd2UgY2FuIGNoYW5nZS5cbiAgICAgICAgLy8gQnV0IHdlIGNhbiBjYWNoZSB0aGUgZGF0YSB3aGVuIHdlIGZldGNoIGl0IGFuZCByZXR1cm4gdGhlIGNhY2hlIGlmIGNsb3NlZC5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgICB9XG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4odmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlU2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnJldHVybih2YWx1ZSk7XG4gICAgfVxuICAgIHRocm93KGUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlc2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnRocm93KGUpO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICAvLyBCdXQgaXQncyBvayB3aXRoIHRoZSBleGFjdCBzYW1lIGNvZGUgaGVyZS4gR28gZmlndXJlLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLm5leHQoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICAvLyBXcml0aW5nIGFuIEVudW1lcmFibGUgdG8gSlNPTiBleGhhdXN0cyB0aGUgZW51bWVyYXRvci5cbiAgICAgICAgcmV0dXJuIFsuLi50aGlzXTtcbiAgICB9XG4gICAgdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgICAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgb3V0IHZhcnMgaW4gSlMgc28gd2UgaGF2ZSB0byB1c2UgYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBub3QgY2xvc2VkLCB0aGlzIGlzIGEgZ2VuZXJhdG9yLCBhbmQgd2UgY2FuJ3QgY291bnQgaXQgd2l0aG91dCBlbnVtZXJhdGluZyBpdC5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUaGlzIGhlbHBlciBhbGxvd3MgbWV0aG9kcyBkZWNsYXJlZCBpbiBvdGhlciBmaWxlcyB0byB1c2UgZ2VuZXJhdG9yIGZ1bmN0aW9ucyB3aXRob3V0IHJlZmVyZW5jaW5nIHRoaXMuX2RhdGEgKHJlcXVpcmluZyBpdFxuICAgIC8vIHRvIGJlIHB1YmxpYykgb3IgdXNpbmcgdGhlIChmdW5jdGlvbiooKSB7fSkoZGF0YSkgc3ludGF4LCB3aGljaCBpcyB1Z2x5LlxuICAgIF9leHRlbmQoZnVuYykge1xuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoZnVuYyh0aGlzKSk7XG4gICAgfVxuICAgICpfZW5zdXJlQmFja3VwKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzQ2xvc2VkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLkVudW1lcmFibGUgPSBFbnVtZXJhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGVcIik7XG5jbGFzcyBPcmRlcmVkRW51bWVyYWJsZSBleHRlbmRzIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB0aGlzLl9zb3J0ZXJzID0gW107XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyOiBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpLCBkZXNjZW5kaW5nOiBkZXNjZW5kaW5nIH0pO1xuICAgIH1cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgZGF0YS4gVGhpcyBuZWVkcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3QsIGJlY2F1c2UgdGhlIGxhc3QgcmVjb3JkIGNvdWxkIGJlIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCBuZWVkcyB0byBnbyBmaXJzdC5cbiAgICAgICAgLy8gVHdvIHBvc3NpYmxlIGFwcHJvYWNoZXMgaGVyZS4gT25lIGlzIHRvIHJlcGVhdGVkbHkgYXR0YWNrIHRoZSBsaXN0LCBnb2luZyBhZnRlciB0aGUgbWluIHJlY29yZCBhbmRcbiAgICAgICAgLy8gcmV0dXJuaW5nIGl0LCB3aGljaCBpcyBoZWF2eSBvbiB0aGUgQ1BVIGJ1dCBsaWdodCBvbiBtZW1vcnksIG9yIHdoYXQgSSdtIGdvaW5nIHRvIGRvLCB3aGljaCBpcyBsb2FkXG4gICAgICAgIC8vIGFuIGFycmF5IGFuZCB1c2UgdGhlIGJ1aWx0LWluIHNvcnQoKSBtZXRob2QsIHdoaWNoIGlzIGhlYXZ5IG9uIG1lbW9yeSBidXQgbGlnaHQgb24gQ1BVLlxuICAgICAgICBsZXQgc29ydGluZ0Z1bmN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IGhhdCBvZiB0aGlzLl9zb3J0ZXJzKSB7XG4gICAgICAgICAgICBzb3J0aW5nRnVuY3Rpb24gPSBidWlsZFNvcnRlcihoYXQub3JkZXJCeSwgaGF0LmNvbXBhcmVyLCBoYXQuZGVzY2VuZGluZywgc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gWy4uLnRoaXMuX2RhdGFdLnNvcnQoc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNvcnRlZERhdGEpIHtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhlbkJ5X3FfKG9yZGVyQnksIGNvbXBhcmVyKSB7XG4gICAgICAgIGlmICghb3JkZXJCeSkge1xuICAgICAgICAgICAgb3JkZXJCeSA9ICgobykgPT4gbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXI6IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlciksIGRlc2NlbmRpbmc6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhlbkJ5RGVzY2VuZGluZ19xXyhvcmRlckJ5LCBjb21wYXJlcikge1xuICAgICAgICBpZiAoIW9yZGVyQnkpIHtcbiAgICAgICAgICAgIG9yZGVyQnkgPSAoKG8pID0+IG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyOiBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpLCBkZXNjZW5kaW5nOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLk9yZGVyZWRFbnVtZXJhYmxlID0gT3JkZXJlZEVudW1lcmFibGU7XG5mdW5jdGlvbiBidWlsZFNvcnRlcihrZXlTZWxlY3RvciwgY29tcGFyZXIsIGRlc2NlbmRpbmcgPSBmYWxzZSwgaW5pdGlhbCkge1xuICAgIGxldCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmRlZmF1bHRDb21wYXJlcjtcbiAgICB9XG4gICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF90aGVuQnkoeCwgeSkge1xuICAgICAgICAgICAgY29uc3Qga2V5MSA9IGtleVNlbGVjdG9yKHgpO1xuICAgICAgICAgICAgY29uc3Qga2V5MiA9IGtleVNlbGVjdG9yKHkpO1xuICAgICAgICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbCh4LCB5KSB8fCBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWwoeCwgeSkgfHwgY29tcGFyZShrZXkxLCBrZXkyKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfb3JkZXJCeSh4LCB5KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkxID0ga2V5U2VsZWN0b3IoeCk7XG4gICAgICAgICAgICBjb25zdCBrZXkyID0ga2V5U2VsZWN0b3IoeSk7XG4gICAgICAgICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoa2V5MSwga2V5Mik7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG4vKipcbiAqIEhlbHBlciB0byBhZGQgZXh0ZW5zaW9uIG1ldGhvZHMgdG8gQXJyYXkgYW5kIFNldC4gVGhlc2UgbWV0aG9kcyBkdXBsaWNhdGUgdGhlIG5hbWVzIGluIEVudW1lcmFibGUsIGJ1dCB3aGF0IHRoZXkgZG8gaXMgY3JlYXRlIGEgbmV3XG4gKiBFbnVtZXJhYmxlIGFuZCB0aGVuIHBhc3MgdGhlIGNhbGwgb253YXJkLCBzbyBpdCBzZWVtcyBhcyBpZiB0aGUgYXJyYXkgaXMgRW51bWVyYWJsZS5cbiAqXG4gKiBUaGlzIGNhbiBiZSBtb2RpZmllZCB0byBzdXBwb3J0IGFueSBvYmplY3QuIElmIHlvdSBkbyBzbywgcmVtZW1iZXIgdG8gc2V0IHdyaXRhYmxlOiB0cnVlIHNvIEVudW1lcmFibGUgY2FuIGhhdmUgaXRzIG93blxuICogaW1wbGVtZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiogbWFrZUdlbmVyYXRvcihpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVyID09PSBcInN0cmluZ1wiIHx8IGl0ZXJhYmxlR3VhcmQoaXRlcikpIHtcbiAgICAgICAgeWllbGQqIGl0ZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFycmF5TGlrZUd1YXJkKGl0ZXIpKSB7XG4gICAgICAgIHlpZWxkKiBBcnJheS5mcm9tKGl0ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgaXRlcjtcbiAgICB9XG59XG5leHBvcnRzLm1ha2VHZW5lcmF0b3IgPSBtYWtlR2VuZXJhdG9yO1xuZnVuY3Rpb24gaXRlcmFibGVHdWFyZChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogJiYgU3ltYm9sLml0ZXJhdG9yIGluIG9iajtcbn1cbmZ1bmN0aW9uIGFycmF5TGlrZUd1YXJkKG9iaikge1xuICAgIC8vIEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyBwZXJmZWN0IGJ1dCBJIGNhbid0IGZpbmQgYSB3YXkgdG8gdmFsaWRhdGUgdGhlIG90aGVyIHBhcnQgb2YgQXJyYXlMaWtlLCB0aGUga2V5LlxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAmJlxuICAgICAgICBcImxlbmd0aFwiIGluIG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBvYmoubGVuZ3RoID49IDA7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1ha2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL01ha2VHZW5lcmF0b3JcIik7XG4vKipcbiAqIEpTIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byByZXN0YXJ0IGEgZ2VuZXJhdG9yLCB3aGljaCBjYXVzZXMgYSBncmVhdCBkZWFsIG9mIHRyb3VibGUgd2hlbiB5b3UgbmVlZCB0byBjaGVjayBpdCBtdWx0aXBsZSB0aW1lcy5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgZG8gYW4gaW5uZXIgam9pbiwgeW91IG5lZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50IG9mIHRoZSBsZWZ0IHdpdGggZWFjaCBlbGVtZW50IG9mIHRoZSByaWdodC5cbiAqIFlvdSBuZWVkIHRoZSBhYmlsaXR5IHRvIHJlYnVpbGQgdGhlIGdlbmVyYXRvciBmcm9tIHRoZSBvcmlnaW5hbCBpdGVyYWJsZS4gQnV0IHRoZXJlIGlzbid0IGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBpdGVyYWJsZSBBTllXSEVSRS5cbiAqIEFzIGEgcmVzdWx0LCB0aGUgb25seSB3YXkgdG8gbWFrZSB0aGlzIHdvcmsgaXMgdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGRhdGEgYXMgeW91IGl0ZXJhdGUgaXQuXG4gKiBUaGlzIGNvdWxkIGRvdWJsZSB0aGUgYW1vdW50IG9mIHNwYWNlIG5lZWRlZCwgYnV0IGl0J3MgYSBsaW1pdGF0aW9uIG9mIHRoZSB0ZWNobm9sb2d5LlxuICogV2UgZG9uJ3QgYWN0dWFsbHkga25vdyBpZiBhIGdlbmVyYXRvciBpcyBiZWluZyB1c2VkLiBUaGUgdHlwZSBpcyBcIm9iamVjdC5cIiBTbyB5b3UgY291bGQgYmUgd2FzdGluZyBtZW1vcnkgYnkgdXNpbmcgdGhpcy4gTm8gd2F5IHRvIGtub3cuXG4gKi9cbmNsYXNzIFJlc3RhcnRhYmxlR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVyYWJsZSwgZmxleE1lbW9yeSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYmFja3VwID0gW107XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpdGVyYWJsZSwgdGhpcy5iYWNrdXApO1xuICAgICAgICB0aGlzLmZsZXhNZW1vcnkgPSBmbGV4TWVtb3J5O1xuICAgIH1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH1cbiAgICBhc1F1ZXJ5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuYXNRdWVyeWFibGUoKTtcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmxleE1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuYmFja3VwLnNsaWNlKDApO1xuICAgICAgICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpLCB0aGlzLmJhY2t1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yID0gTWFrZUdlbmVyYXRvcl8xLm1ha2VHZW5lcmF0b3IodGhpcy5iYWNrdXApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZXN0YXJ0YWJsZUdlbmVyYXRvciA9IFJlc3RhcnRhYmxlR2VuZXJhdG9yO1xuZnVuY3Rpb24qIGN5Y2xlR2VuZXJhdG9yKGl0ZXIsIGJhY2t1cCkge1xuICAgIGZvciAoY29uc3QgeCBvZiBpdGVyKSB7XG4gICAgICAgIGJhY2t1cC5wdXNoKHgpO1xuICAgICAgICB5aWVsZCB4O1xuICAgIH1cbn1cbmV4cG9ydHMuY3ljbGVHZW5lcmF0b3IgPSBjeWNsZUdlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZS9FbnVtZXJhYmxlXCIpO1xuY29uc3QgRXh0ZW5kXzEgPSByZXF1aXJlKFwiLi9FeHRlbmRcIik7XG5jb25zdCBBZ2dyZWdhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BZ2dyZWdhdGVcIik7XG5jb25zdCBBbGxfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbGxcIik7XG5jb25zdCBBbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbnlcIik7XG5jb25zdCBBcHBlbmRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BcHBlbmRcIik7XG5jb25zdCBBdmVyYWdlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQXZlcmFnZVwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ2h1bmtcIik7XG5jb25zdCBDb25jYXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db25jYXRcIik7XG5jb25zdCBDb250YWluc18xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvbnRhaW5zXCIpO1xuY29uc3QgQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db3VudFwiKTtcbmNvbnN0IENyb3NzSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Nyb3NzSm9pblwiKTtcbmNvbnN0IERlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHlcIik7XG5jb25zdCBEaXN0aW5jdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0XCIpO1xuY29uc3QgRGlzdGluY3RCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0QnlcIik7XG5jb25zdCBFbGVtZW50QXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRcIik7XG5jb25zdCBFbGVtZW50QXRPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRPckRlZmF1bHRcIik7XG5jb25zdCBFbXB0eV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VtcHR5XCIpO1xuY29uc3QgRXhjZXB0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRXhjZXB0XCIpO1xuY29uc3QgRXhjZXB0QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FeGNlcHRCeVwiKTtcbmNvbnN0IEZpcnN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRmlyc3RcIik7XG5jb25zdCBGaXJzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZpcnN0T3JEZWZhdWx0XCIpO1xuY29uc3QgRm9yRWFjaF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZvckVhY2hcIik7XG5jb25zdCBGdWxsSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Z1bGxKb2luXCIpO1xuY29uc3QgR3JvdXBCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0dyb3VwQnlcIik7XG5jb25zdCBHcm91cEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Hcm91cEpvaW5cIik7XG5jb25zdCBJbm5lckpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Jbm5lckpvaW5cIik7XG5jb25zdCBJbnRlcnNlY3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9JbnRlcnNlY3RcIik7XG5jb25zdCBJbnRlcnNlY3RCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ludGVyc2VjdEJ5XCIpO1xuY29uc3QgSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0pvaW5cIik7XG5jb25zdCBMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTGFzdFwiKTtcbmNvbnN0IExhc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0XCIpO1xuY29uc3QgTG9uZ0NvdW50XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTG9uZ0NvdW50XCIpO1xuY29uc3QgTWF4XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWF4XCIpO1xuY29uc3QgTWF4QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhCeVwiKTtcbmNvbnN0IE1heE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heE9yRGVmYXVsdFwiKTtcbmNvbnN0IE1pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01pblwiKTtcbmNvbnN0IE1pbkJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluQnlcIik7XG5jb25zdCBNaW5PckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5PckRlZmF1bHRcIik7XG5jb25zdCBPZlR5cGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PZlR5cGVcIik7XG5jb25zdCBPcmRlckJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT3JkZXJCeVwiKTtcbmNvbnN0IE91dGVySm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL091dGVySm9pblwiKTtcbmNvbnN0IFByZXBlbmRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9QcmVwZW5kXCIpO1xuY29uc3QgUmVwbGljYXRlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmVwbGljYXRlXCIpO1xuY29uc3QgUmV2ZXJzZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1JldmVyc2VcIik7XG5jb25zdCBSaWdodEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SaWdodEpvaW5cIik7XG5jb25zdCBTZWxlY3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZWxlY3RcIik7XG5jb25zdCBTZWxlY3RNYW55XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2VsZWN0TWFueVwiKTtcbmNvbnN0IFNlcXVlbmNlRXF1YWxfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZXF1ZW5jZUVxdWFsXCIpO1xuY29uc3QgU2luZ2xlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2luZ2xlXCIpO1xuY29uc3QgU2luZ2xlT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0XCIpO1xuY29uc3QgU2tpcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NraXBcIik7XG5jb25zdCBTa2lwTGFzdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NraXBMYXN0XCIpO1xuY29uc3QgU2tpcFdoaWxlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcFdoaWxlXCIpO1xuY29uc3QgU3RlcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1N0ZXBcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TdW1cIik7XG5jb25zdCBUYWtlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZVwiKTtcbmNvbnN0IFRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZUxhc3RcIik7XG5jb25zdCBUYWtlV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlV2hpbGVcIik7XG5jb25zdCBUb0NvbnZlcnNpb25zXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVG9Db252ZXJzaW9uc1wiKTtcbmNvbnN0IFVuaW9uXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25cIik7XG5jb25zdCBVbmlvbkJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25CeVwiKTtcbmNvbnN0IFdoZXJlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvV2hlcmVcIik7XG5jb25zdCBaaXBfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9aaXBcIik7XG5TdHJpbmcucHJvdG90eXBlLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyA9IGZ1bmN0aW9uIF90cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgLy8gdGhlcmUgYXJlIG5vIG91dCB2YXJpYWJsZXMgaW4gSlMsIHNvIHdlIGhhdmUgdG8gcHV0IGl0IGluIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgaWYgKG9iaikge1xuICAgICAgICBvYmoudmFsdWUgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuQXJyYXkucHJvdG90eXBlLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyA9IGZ1bmN0aW9uIF90cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgLy8gdGhlcmUgYXJlIG5vIG91dCB2YXJpYWJsZXMgaW4gSlMsIHNvIHdlIGhhdmUgdG8gcHV0IGl0IGluIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgaWYgKG9iaikge1xuICAgICAgICBvYmoudmFsdWUgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuU2V0LnByb3RvdHlwZS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8gPSBmdW5jdGlvbiBfdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgIC8vIHRoZXJlIGFyZSBubyBvdXQgdmFyaWFibGVzIGluIEpTLCBzbyB3ZSBoYXZlIHRvIHB1dCBpdCBpbiBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgIGlmIChvYmopIHtcbiAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5zaXplO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5PYmplY3QucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIElmIHRoZSBvYmplY3QgaXMgaXRlcmFibGUsIHRoaXMgd2lsbCBiZSBhbiBvcmRpbmFyeSBnZW5lcmF0b3IuIElmIGl0IGlzIG5vdCxcbiAgICAvLyB0aGlzIHdpbGwgYmUgYW4gaXRlcmFibGUgd2l0aCBhIHNpbmdsZSBpdGVtLiBUaGlzIG1ha2VzIGl0IHNvIEkgZG9uJ3QgaGF2ZSB0b1xuICAgIC8vIGd1ZXNzIHdoYXQgcHJvdG90eXBlcyBuZWVkIHRvIGJlIG1vZGlmaWVkLlxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmdzIGFyZSBpdGVyYWJsZSwgYnV0IEkgZGlkbid0IHdhbnQgdG8gYWRkIGFsbCB0aGUgZW51bWVyYWJsZSBtZXRob2RzIHRvIHRoZW0uXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKTtcbn07XG5OdW1iZXIucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICg0KS5hc1F1ZXJ5YWJsZSgpIGlzIHRyZWF0ZWQgbGlrZSByYW5nZSgpXG4gICAgcmV0dXJuIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJhbmdlX3FfKDAsIHRoaXMpO1xufTtcbkJvb2xlYW4ucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICAgIC8vIHRydWUuYXNRdWVyeWFibGUoKSBpcyBwcmV0dHkgdXNlbGVzczogW2ZhbHNlLCB0cnVlXSBhc2NlbmRpbmcuIE1pZ2h0IGJlIHVzZWZ1bC5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbZmFsc2UsIHRydWVdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGZhbHNlLmFzUXVlcnlhYmxlKCkgaXMgYWxzbyBwcmV0dHkgdXNlbGVzczogW3RydWUsIGZhbHNlXSBkZXNjZW5kaW5nLiBNaWdodCBiZSB1c2VmdWwuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUoW3RydWUsIGZhbHNlXSk7XG4gICAgfVxufTtcbi8vIEFkZCBzdHViIGZ1bmN0aW9ucyBvbnRvIEFycmF5LnByb3RvdHlwZSBhbmQgU2V0LnByb3RvdHlwZSB0byBtYWtlIHRoZSBvYmplY3QgaW50byBhbiBFbnVtZXJhYmxlXG4vLyBhbmQgdGhlbiBjYWxsIHRoZSBFbnVtZXJhYmxlIG1ldGhvZFxuRXh0ZW5kXzEuZXh0ZW5kKFwiYWdncmVnYXRlX3FfXCIsIEFnZ3JlZ2F0ZV8xLmFnZ3JlZ2F0ZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJhbGxfcV9cIiwgQWxsXzEuYWxsKTtcbkV4dGVuZF8xLmV4dGVuZChcImFueV9xX1wiLCBBbnlfMS5hbnlfcV8pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYXBwZW5kX3FfXCIsIEFwcGVuZF8xLmFwcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJhdmVyYWdlX3FfXCIsIEF2ZXJhZ2VfMS5hdmVyYWdlKTtcbkV4dGVuZF8xLmV4dGVuZChcImNhc3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImNodW5rX3FfXCIsIENodW5rXzEuY2h1bmspO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY29uY2F0X3FfXCIsIENvbmNhdF8xLmNvbmNhdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb250YWluc19xX1wiLCBDb250YWluc18xLmNvbnRhaW5zKTtcbkV4dGVuZF8xLmV4dGVuZChcImNvdW50X3FfXCIsIENvdW50XzEuY291bnQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY3Jvc3NKb2luX3FfXCIsIENyb3NzSm9pbl8xLmNyb3NzSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJkZWZhdWx0SWZFbXB0eV9xX1wiLCBEZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5KTtcbkV4dGVuZF8xLmV4dGVuZChcImRpc3RpbmN0X3FfXCIsIERpc3RpbmN0XzEuZGlzdGluY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGlzdGluY3RCeV9xX1wiLCBEaXN0aW5jdEJ5XzEuZGlzdGluY3RCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbGVtZW50QXRfcV9cIiwgRWxlbWVudEF0XzEuZWxlbWVudEF0KTtcbkV4dGVuZF8xLmV4dGVuZChcImVsZW1lbnRBdE9yRGVmYXVsdF9xX1wiLCBFbGVtZW50QXRPckRlZmF1bHRfMS5lbGVtZW50QXRPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZW1wdHlfcV9cIiwgRW1wdHlfMS5lbXB0eSk7XG5FeHRlbmRfMS5leHRlbmQoXCJleGNlcHRfcV9cIiwgRXhjZXB0XzEuZXhjZXB0KTtcbkV4dGVuZF8xLmV4dGVuZChcImV4Y2VwdEJ5X3FfXCIsIEV4Y2VwdEJ5XzEuZXhjZXB0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZmlyc3RfcV9cIiwgRmlyc3RfMS5maXJzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmaXJzdE9yRGVmYXVsdF9xX1wiLCBGaXJzdE9yRGVmYXVsdF8xLmZpcnN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImZvckVhY2hfcV9cIiwgRm9yRWFjaF8xLmZvckVhY2gpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZnVsbEpvaW5fcV9cIiwgRnVsbEpvaW5fMS5mdWxsSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJncm91cEJ5X3FfXCIsIEdyb3VwQnlfMS5ncm91cEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImdyb3VwSm9pbl9xX1wiLCBHcm91cEpvaW5fMS5ncm91cEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW5uZXJKb2luX3FfXCIsIElubmVySm9pbl8xLmlubmVySm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJpbnRlcnNlY3RfcV9cIiwgSW50ZXJzZWN0XzEuaW50ZXJzZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImludGVyc2VjdEJ5X3FfXCIsIEludGVyc2VjdEJ5XzEuaW50ZXJzZWN0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiam9pbl9xX1wiLCBKb2luXzEuam9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJsYXN0X3FfXCIsIExhc3RfMS5sYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxhc3RPckRlZmF1bHRfcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGVmdEpvaW5fcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibG9uZ0NvdW50X3FfXCIsIExvbmdDb3VudF8xLmxvbmdDb3VudCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhfcV9cIiwgTWF4XzEubWF4KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heEJ5X3FfXCIsIE1heEJ5XzEubWF4QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4T3JEZWZhdWx0X3FfXCIsIE1heE9yRGVmYXVsdF8xLm1heE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5fcV9cIiwgTWluXzEubWluKTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbkJ5X3FfXCIsIE1pbkJ5XzEubWluQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluT3JEZWZhdWx0X3FfXCIsIE1pbk9yRGVmYXVsdF8xLm1pbk9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJvZlR5cGVfcV9cIiwgT2ZUeXBlXzEub2ZUeXBlKTtcbkV4dGVuZF8xLmV4dGVuZChcIm9yZGVyQnlfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib3JkZXJCeURlc2NlbmRpbmdfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nKTtcbkV4dGVuZF8xLmV4dGVuZChcIm91dGVySm9pbl9xX1wiLCBPdXRlckpvaW5fMS5vdXRlckpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicHJlcGVuZF9xX1wiLCBQcmVwZW5kXzEucHJlcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJyZXBsaWNhdGVfcV9cIiwgUmVwbGljYXRlXzEucmVwbGljYXRlKTtcbkV4dGVuZF8xLmV4dGVuZChcInJldmVyc2VfcV9cIiwgUmV2ZXJzZV8xLnJldmVyc2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmlnaHRKb2luX3FfXCIsIFJpZ2h0Sm9pbl8xLnJpZ2h0Sm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJzZWxlY3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNlbGVjdE1hbnlfcV9cIiwgU2VsZWN0TWFueV8xLnNlbGVjdE1hbnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VxdWVuY2VFcXVhbF9xX1wiLCBTZXF1ZW5jZUVxdWFsXzEuc2VxdWVuY2VFcXVhbCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzaW5nbGVfcV9cIiwgU2luZ2xlXzEuc2luZ2xlKTtcbkV4dGVuZF8xLmV4dGVuZChcInNpbmdsZU9yRGVmYXVsdF9xX1wiLCBTaW5nbGVPckRlZmF1bHRfMS5zaW5nbGVPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcF9xX1wiLCBTa2lwXzEuc2tpcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwTGFzdF9xX1wiLCBTa2lwTGFzdF8xLnNraXBMYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBXaGlsZV9xX1wiLCBTa2lwV2hpbGVfMS5za2lwV2hpbGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic3RlcF9xX1wiLCBTdGVwXzEuc3RlcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzdW1fcV9cIiwgU3VtXzEuc3VtKTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VfcV9cIiwgVGFrZV8xLnRha2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZUxhc3RfcV9cIiwgVGFrZUxhc3RfMS50YWtlTGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlV2hpbGVfcV9cIiwgVGFrZVdoaWxlXzEudGFrZVdoaWxlKTtcbkV4dGVuZF8xLmV4dGVuZChcInRvQXJyYXlfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvQXJyYXkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9EaWN0aW9uYXJ5X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0RpY3Rpb25hcnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9MaXN0X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0FycmF5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTG9va3VwX3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0xvb2t1cCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0hhc2hTZXRfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvSGFzaFNldCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b01hcF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9NYXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidW5pb25fcV9cIiwgVW5pb25fMS51bmlvbik7XG5FeHRlbmRfMS5leHRlbmQoXCJ1bmlvbkJ5X3FfXCIsIFVuaW9uQnlfMS51bmlvbkJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIndoZXJlX3FfXCIsIFdoZXJlXzEud2hlcmUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiemlwX3FfXCIsIFppcF8xLnppcCk7XG4vLyBBcyBhIHdvcmthcm91bmQgZm9yIG9yZGVyYnkgKGphdmFzY3JpcHQgY2FuJ3QgY3JlYXRlIGEgY2xhc3MgdGhhdCByZWZlcmVuY2VzIGEgZGVzY2VuZGFudCBjbGFzcyksXG4vLyBhZGQgdGhlc2UgdG8gdGhlIEVudW1lcmFibGUgY2xhc3MgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IGV4cGxvZGVcbkVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnByb3RvdHlwZS5vcmRlckJ5X3FfID0gT3JkZXJCeV8xLm9yZGVyQnk7XG5FbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5wcm90b3R5cGUub3JkZXJCeURlc2NlbmRpbmdfcV8gPSBPcmRlckJ5XzEub3JkZXJCeURlc2NlbmRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYWdncmVnYXRlX3FfOiBBcHBsaWVzIGFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIG92ZXIgYSBzZXF1ZW5jZS5cbiAqIG9wdGlvbmFsIGluaXRpYWwgdmFsdWUgYWN0cyBhcyBzZWVkIHZhbHVlXG4gKiBvcHRpb25hbCBzZWxlY3RGdW5jdGlvbiBzZWxlY3RzIHRoZSByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYWdncmVnYXRlKGluaXRpYWxPckFjY3VtdWxhdG9yLCBhY2N1bXVsYXRvckZ1bmN0aW9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBpbml0aWFsVmFsdWVQcm92aWRlZCA9IGZhbHNlO1xuICAgIGxldCBzZWVkZWQgPSBmYWxzZTtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGFjY3VtdWxhdG9yO1xuICAgIGxldCBzZWxlY3RvcjtcbiAgICAvLyBUaGlzIGlzIGJhc2ljYWxseSB0aGUgc2FtZSBhcyByZWR1Y2UsIGV4Y2VwdCBpdCBkb2Vzbid0IHJlcXVpcmUgY29weWluZyB0aGUgd2hvbGUgdGhpbmcgdG8gYW4gYXJyYXkgZmlyc3RcbiAgICAvLyBUaGUgd2FjayB3YXkgdGhhdCB0eXBlc2NyaXB0IGRvZXMgb3ZlcmxvYWRzIHJlYWxseSBzbG9wcyB1cCB0aGUgY29kZSBmb3Iga2VlcGluZyBhIGxpbnEgYXBpXG4gICAgLy8gSXQgYWxzbyByZXF1aXJlZCB0d28gdXNlIG9mIFwiYW55XCIgYWJvdmUgdGhhdCBJIGRpZCBub3QgbGlrZSBkb2luZy5cbiAgICBpZiAoIWFjY3VtdWxhdG9yRnVuY3Rpb24pIHtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBpbml0aWFsT3JBY2N1bXVsYXRvcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluaXRpYWxWYWx1ZVByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSBpbml0aWFsT3JBY2N1bXVsYXRvcjtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvckZ1bmN0aW9uO1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBzZWVkLCB0aGVuIHRoZSBmaXJzdCB2YWx1ZSBpcyB1c2VkIGFzIHRoZSBzZWVkXG4gICAgICAgIC8vIEFmdGVyIHRoZSBmaXJzdCBpdGVtLCBpdCBpcyBwb3B1bGF0ZWQuIEJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB1bmRlcnN0YW5kIHRoYXQsIHNvIGFueSBuZWVkcyB0byBiZSB1c2VkIHNvbWV0aW1lcy5cbiAgICAgICAgaWYgKCFzZWVkZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIHNlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFjY3VtdWxhdG9yKHZhbHVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDIyBvbmx5IHRocm93cyBhbiBlcnJvciBpbiB0aGUgb3ZlcmxvYWQgd2l0aG91dCBhIHNlZWQgdmFsdWUuXG4gICAgaWYgKCFzZWVkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhhdCBfdmFsdWUgaXMgbm90IHVuZGVmaW5lZCBhZnRlciB0aGUgX3ZhbHVlID0gaXRlbSBsaW5lICh1bmxlc3MgdGhlIGl0ZXJhYmxlIHR5cGUgYWxsb3dzIGl0KVxuICAgICAgICAvLyBVbmxlc3MgdGhlIGl0ZXJhdG9yIGNvbnRhaW5zIHVuZGVmaW5lZCwgb2YgY291cnNlLiBUaGF0J3MgdG90YWxseSBsZWdhbCBpbiBKU1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5hZ2dyZWdhdGUgPSBhZ2dyZWdhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYWxsX3FfOiBEZXRlcm1pbmVzIHdoZXRoZXIgYWxsIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2Ugc2F0aXNmeSBhIGNvbmRpdGlvbi5cbiAqIFRoaXMgY29uZGl0aW9uIGNhbiBvcHRpb25hbGx5IHRha2UgdGhlIGluZGV4IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgKHRoaXMgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBDIyB2ZXJzaW9uKVxuICovXG5mdW5jdGlvbiBhbGwoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWZpbHRlcihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5hbGwgPSBhbGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYW55X3FfOiBEZXRlcm1pbmVzIHdoZXRoZXIgYW55IGVsZW1lbnRzIG9mIGEgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqIFRoaXMgY29uZGl0aW9uIGNhbiBvcHRpb25hbGx5IHRha2UgdGhlIGluZGV4IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgKHRoaXMgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBDIyB2ZXJzaW9uKVxuICovXG5mdW5jdGlvbiBhbnlfcV8oZmlsdGVyKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGlmIChmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuYW55X3FfID0gYW55X3FfO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFwcGVuZF9xXzogQXBwZW5kcyBhIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZChuZXdJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2FwcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCBuZXdJdGVtO1xuICAgIH0pO1xufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE5vbmVUeXBlXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvTm9uZVR5cGVcIik7XG4vKipcbiAqIGF2ZXJhZ2VfcV86IGNvbXB1dGVzIHRoZSBhdmVyYWdlIG9mIGEgc2VxdWVuY2Ugb2YgbnVtYmVycy5cbiAqIG9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbiBsZXRzIHVzIGNhbGN1bGF0ZSB1c2luZyB2YWx1ZXMgb2J0YWluZWQgYnkgaW52b2tpbmcgYWZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgc2VxdWVuY2UuXG4gKi9cbmZ1bmN0aW9uIGF2ZXJhZ2Uoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBjb250YWluc051bGwgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBsZXQgdG1wO1xuICAgICAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHRtcCA9IHNlbGVjdEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICAgICAgLy8gTnVsbGFibGUgbnVtYmVyIGJlaGF2aW91cjogaWYgbnVsbCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKE5vbmVUeXBlXzEuaXNOb25lKHRtcCkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluc051bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTnVsbGFibGUgbnVtYmVyIGJlaGF2aW91cjogaWYgbnVsbCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKE5vbmVUeXBlXzEuaXNOb25lKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnNOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0bXAgPSBOdW1iZXIoaXRlbSk7XG4gICAgICAgIGlmIChpc05hTih0bXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXZlcmFnZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3VtICsgdG1wO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIC8vIEluIHRoZSBDIyB2ZXJzaW9uLCBpZiB0aGUgc2VxdWVuY2UgaXMgYWxsIG51bGwsIHRoaXMgcmV0dXJucyBudWxsIGluc3RlYWQgb2YgdGhyb3dpbmdcbiAgICAgICAgaWYgKGNvbnRhaW5zTnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG59XG5leHBvcnRzLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNodW5rX3FfOiBzcGxpdHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW50byBjaHVua3Mgb2Ygc2l6ZSBhdCBtb3N0IFwic2l6ZVwiXG4gKi9cbmZ1bmN0aW9uIGNodW5rKHNpemUpIHtcbiAgICBpZiAoIXNpemUgfHwgc2l6ZSA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfY2h1bmsoZGF0YSkge1xuICAgICAgICBsZXQgY291bnRlciA9IHNpemU7XG4gICAgICAgIGxldCB0bXAgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRtcDtcbiAgICAgICAgICAgICAgICB0bXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG1wO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY29uY2F0X3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlc1xuICovXG5mdW5jdGlvbiBjb25jYXQoc2Vjb25kKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2NvbmNhdChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCogc2Vjb25kO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGNvbnRhaW5zX3FfOiBkZXRlcm1pbmVzIHdoZXRoZXIgYSBzZXF1ZW5jZSBjb250YWlucyBhIHNwZWNpZmllZCBlbGVtZW50XG4gKiBvcHRpb25hbCBlcXVhbGl0eUNvbXBhcmVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIGlmIHJlY29yZCBtYXRjaGVzXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlLCBjb21wYXJlcikge1xuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChjb21wYXJlKGl0ZW0sIHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY291bnRfcV86IHJldHVybnMgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIGhvdyBtYW55IGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gY291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN0cjtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBjcm9zc0pvaW5fcV86IENyZWF0ZSBhIHNpbXBsZSBjYXJ0ZXNpYW4gam9pbiAoZXZlcnkgcmVjb3JkIGZyb20gdGFibGUgMSBhbG9uZyB3aXRoIGV2ZXJ5IHJlY29yZCBmcm9tIHRhYmxlIDIpXG4gKi9cbmZ1bmN0aW9uIGNyb3NzSm9pbihzZWNvbmQsIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jcm9zc0pvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIG1hdGNoIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcm9zc0pvaW4gPSBjcm9zc0pvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZGVmYXVsdElmRW1wdHlfcV86IHJldHVybnMgdGhlIHNlcXVlbmNlIG9yIHRoZSAob3B0aW9uYWwpIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogRGVmYXVsdCBpbiBpcyBhIHBhcmFtdGVyLiBJRiBpdCBpcyBsZWZ0IG91dCwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgYW4gZW1wdHkgb25lLilcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdElmRW1wdHkoZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2RlZmF1bHRJZkVtcHR5KGRhdGEpIHtcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgeWllbGQgZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHRJZkVtcHR5ID0gZGVmYXVsdElmRW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZGlzdGluY3RfcV86IFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGJ5IHVzaW5nIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0KGNvbXBhcmVyKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kaXN0aW5jdChkYXRhKSB7XG4gICAgICAgIC8vIEtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQgKG5vIHdheSBhcm91bmQgdGhhdCkgYW5kIG9ubHkgcmV0dXJuIGlmIG5vdCBpbiB0aGUgbGlzdC5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGlzdGluY3QgPSBkaXN0aW5jdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBkaXN0aW5jdEJ5X3FfOiBSZXR1cm5zIGRpc3RpbmN0IGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Rpc3RpbmN0QnkoZGF0YSkge1xuICAgICAgICAvLyBLZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkIChubyB3YXkgYXJvdW5kIHRoYXQpIGFuZCBvbmx5IHJldHVybiBpZiBub3QgaW4gdGhlIGxpc3QuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXN0aW5jdEJ5ID0gZGlzdGluY3RCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZS5cIik7XG59XG5leHBvcnRzLmVsZW1lbnRBdCA9IGVsZW1lbnRBdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZS5cbiAqIFJldHVybnMgYW4gb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBpZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIG9yIHVuZGVmaW5lZCBpZiBub3Qgc3VwcGxpZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZS4pXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdE9yRGVmYXVsdChpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuZXhwb3J0cy5lbGVtZW50QXRPckRlZmF1bHQgPSBlbGVtZW50QXRPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG4vKipcbiAqIGVtcHR5X3FfOiBSZXR1cm5zIGFuIGVtcHR5IElFbnVtZXJhYmxlPFQ+IHRoYXQgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZSBhcmd1bWVudC5cbiAqIE5vdGUgdGhhdCB0eXBlcyBhcmUgdHlwZXNjcmlwdC1vbmx5IGZpY3RpdGlvdXMgZW50aXRpZXMgdGhhdCBhcmVuJ3QgZW1pdHRlZC5cbiAqL1xuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbXSk7XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZXhjZXB0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2UgKGRpc3RpbmN0KSBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0KHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdChkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIC8vIFN0YXJ0IGJ5IGxvYWRpbmcgdGhlIGhpc3Rvcnkgd2l0aCB0aGUgc2Vjb25kIHNldC4gVGhlbiwgd2UgY2FuIGRvIHdoYXQgd2UgYWxyZWFkeSBkaWQgZm9yIGRpc3RpbmN0KCkgYW5kIGl0J2xsIHB1bGwgb3V0IHRoZSBtYXRjaGVzXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhpdGVtKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4Y2VwdCA9IGV4Y2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBleGNlcHRCeV9xXzogUHJvZHVjZXMgdGhlIHNldCBkaWZmZXJlbmNlIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24ga2V5cyAoZGlzdGluY3Qga2V5cykgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBleGNlcHRCeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdEJ5KGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICAvLyBBbmQgdGhlIHNlY29uZCBtaWdodCBhbHNvIGJlIGEgZ2VuZXJhdG9yLCBzbyB3ZSBuZWVkIHRvIGV4aGF1c3QgaXRzIHZhbHVlcy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5U2VsZWN0b3IoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5leGNlcHRCeSA9IGV4Y2VwdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGZpcnN0X3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRocm93aW5nIGFuIGV4Y2VwdGlvbiBpZiB0aGUgc2VxdWVuY2UgaXMgZW1wdHkuXG4gKiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uIGNhbiBiZSBzdXBwbGllZFxuICogVGhpcyBjb25kaXRpb24gY2FuIG9wdGlvbmFsbHkgdGFrZSB0aGUgaW5kZXggYXMgdGhlIHNlY29uZCBhcmd1bWVudCAodGhpcyBpcyBub3QgcHJvdmlkZWQgYnkgdGhlIEMjIHZlcnNpb24pXG4gKi9cbmZ1bmN0aW9uIGZpcnN0KG1hdGNoRnVuY3Rpb24pIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqIFRoaXMgY29uZGl0aW9uIGNhbiBvcHRpb25hbGx5IHRha2UgdGhlIGluZGV4IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgKHRoaXMgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBDIyB2ZXJzaW9uKVxuICpcbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogVGhlIGZvbGxvd2luZyBtZXRob2QgZXhwbGFpbmVkOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZSB9OiB7IGRlZmF1bHRWYWx1ZTogVCB9KTogVDtcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgaXQgYnJlYWtzIHRoZSBzdGFuZGFyZCBjYXNlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmc6IGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKG15RnVuYylcbiAqIElzIHRoaXMgc3VwcG9zZWQgdG8gYmVcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMud2hlcmVfcV8obXlGdW5jKS5maXJzdE9yRGVmYXVsdF9xXygpXG4gKiBvclxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXygpIHx8IG15RnVuY1xuICpcbiAqIFRoZSBvbmx5IHRvIG1ha2UgaXQgd29yayBpcyB0byBjYWxsIGxpa2UgdGhpczpcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IHNvbWV0aGluZyB9KVxuICovXG5mdW5jdGlvbiBmaXJzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCF0ZXN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMuZmlyc3RPckRlZmF1bHQgPSBmaXJzdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmb3JFYWNoX3FfOiBFeGVjdXRlIGEgY2FsbGJhY2sgZnVuY3Rpb24gb24gZWFjaCByb3cgaW4gdGhlIGVudW1lcmFibGUsIHJldHVybmluZyBubyByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICBpZiAoIWNhbGxiYWNrZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjYWxsYmFja2ZuLmNhbGwodGhpc0FyZywgaXRlbSwgaW5kZXgrKyk7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBmdWxsSm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGZ1bGwgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gZnVsbEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCBhIHBsYWNlIHRvIHRyYWNrIGFsbCBpdGVtcyBpbiB0aGUgcmlnaHQgdGhhdCBnb3Qgc2VudFxuICAgICAgICBjb25zdCBzZW50UmlnaHRzID0gbmV3IFNldCgpO1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uKGxlZnRJdGVtLCByaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VudFJpZ2h0cy5hZGQocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGVmdE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGdvIHRocm91Z2ggdGhlIHJpZ2h0IHNpZGUgb25jZSBtb3JlIGFuZCBzZW5kIGFueXRoaW5nIHRoYXQgZGlkbid0IGdldCBzZW50XG4gICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICBpZiAoIXNlbnRSaWdodHMuaGFzKHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQodW5kZWZpbmVkLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmZ1bGxKb2luID0gZnVsbEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbmNvbnN0IEdyb3VwaW5nXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvR3JvdXBpbmdcIik7XG4vKipcbiAqIEdyb3VwcyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBhY2NvcmRpbmcgdG8gYSBzcGVjaWZpZWQga2V5IHNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBjcmVhdGVzIGEgcmVzdWx0IHZhbHVlIGZyb20gZWFjaCBncm91cCBhbmQgaXRzIGtleS5cbiAqIG9wdGlvbmFsIGVsZW1lbnQgc2VsZWN0aW9uIGZ1bmN0aW9uIChlaXRoZXIgc2Vjb25kIGFyZ3VtZW50IG9yIGVuY2xvc2VkIGluIGEgeyBlbGVtZW50OiBmdW5jIH0gb2JqZWN0KVxuICogb3B0aW9uYWwgb3V0cHV0IHByb2plY3Rpb24gZnVuY3Rpb24gKGVpdGhlciB0aGlyZCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgcHJvamVjdDogZnVuYyB9IG9iamVjdClcbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGZ1bmN0aW9uIChlaXRoZXIgZm91cnRoIGFyZ3VtZW50IG9yIGVuY2xvc2VkIGluIGEgeyBlcXVhbHM6IGZ1bmMgfSBvYmplY3QpXG4gKlxuICogVGhlIG51bWJlciBvZiBvdmVybG9hZHMgaW4gQyMgaXMgSFVHRS4gSWYgSSB3ZXJlIG1pY3Jvc29mdCwgSSB3b3VsZG4ndCBoYXZlIGRvbmUgdGhpcywgYXMgZWxlbWVudEZ1bmN0aW9uIGNvdWxkIGJlXG4gKiBoYW5kbGVkIGluIGtleVNlbGVjdG9yIGFuZCBvdXRwdXRGdW50aW9uIGNvdWxkIGJlIGhhbmRsZWQgYnkgYSBzZWxlY3QoKSBmb2xsb3dpbmcgdGhlIGdyb3VwQnkoKS5cbiAqIFRoZXJlJ3MgYSBwb2ludCBiZXlvbmQgd2hpY2ggbW9yZSBvcHRpb25zIGJlY29tZXMgbGVzcyBoZWxwZnVsIHJhdGhlciB0aGFuIG1vcmUuXG4gKiBTZWUgam9pbigpIGZvciBhbm90aGVyIGV4YW1wbGUgb2YgZnVuY3Rpb25zIHBlb3BsZSBoYXZlIHRvIGdvb2dsZSBiZWZvcmUgdXNpbmcuXG4gKlxuICogVGhlIHdlYWtuZXNzZXMgb2YgdGhlIHR5cGVzY3JpcHQgdHlwaW5nIGFuZCBvdmVybG9hZCBzeXN0ZW1zIHJlYWxseSBzaGluZSB0aHJvdWdoIGluIGEgZ2lhbnQgbGlrZSB0aGlzLlxuICogSWluIGphdmFzY3JpcHQgaXQncyBub3QgcG9zc2libGUgdG8ga25vdyB3aGF0IGlucHV0cyBhcmUgcHJvdmlkZWQgaW4gYSBsb3Qgb2YgcGxhY2VzLiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiBhIHByb2plY3Rpb24gZnVuY3Rpb24gYW5kIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uIGlzIHRoYXQgb25lIHRha2VzIG9uZSBpbnB1dCBhbmQgb25lIHRha2VzIHR3by4gVGhpcyBpcyBlYXN5IGZvclxuICogQyMgdG8gZGV0ZWN0LCBidXQgaW4gamF2YXNjcmlwdCwgYWxsIGZ1bmN0aW9ucyBhcmUganVzdCBmdW5jdGlvbigpIHRoYXQgdGFrZSBhbnkgbnVtYmVyIG9mIGlucHV0cy4gVHlwZXNjcmlwdFxuICogY2FuIGtub3cgd2hpY2ggb25lIHlvdSdyZSB1c2luZywgYnV0IHRoZSBlbWl0dGVkIGphdmFzY3JpcHQgY29kZSBoYXMgbm8gaWRlYS5cbiAqXG4gKiBUaGlzIG92ZXJsb2FkIHNldHVwIGlzIGltcG9zc2libGUgaW4gSlM6XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbj86IGZ1bmN0aW9uKTtcbiAqICAgICAgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24/OiBmdW5jdGlvbik7XG4gKiBiZWNhdXNlIEpTIHNlZXMgb25seTpcbiAqICAgICAgZnVuY3Rpb24gZ3JvdXBCeV9xXyhmdW5jdGlvbiwgZnVuY3Rpb24pXG4gKiBXaGljaCBvbmUgd2FzIGl0PyBObyBjbHVlLlxuICpcbiAqIEJlY2F1c2Ugb2YgdGhpcywgYXMgbG9uZyBhcyB5b3UgcGFzc1xuICogIG9ubHkga2V5U2VsZWN0b3IsIG9yXG4gKiAgb25seSBrZXlTZWxlY3RvciBhbmQgZWxlbWVudEZ1bmN0aW9uLCBvXG4gKiAgb25seSBrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiwgb3JcbiAqICBvbmx5IGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uIGFuZCBjb21wYXJlcixcbiAqIHlvdSBkb24ndCBoYXZlIHRvIGRvIGFueXRoaW5nIHNwZWNpYWwsIGJ1dCBhbnkgb3ZlcmxvYWQgd2hpY2ggb21pdHMgYSBwcmV2aW91cyB2YWx1ZSBtdXN0IGJlIGluIHRoZSBmb3JtIG9mXG4gKiAgICAgIGNvbnN0IHJlc3VsdCA9IGFyci5ncm91cEJ5X3FfKGtleVNlbGVjdG9yLCB7IHBhcmFtMzogdmFsdWUgfSlcbiAqIHdoaWNoIHRyYW5zbGF0ZXMgdG9cbiAqICAgICAgIGNvbnN0IHJlc3VsdCA9IGFyci5ncm91cEJ5X3FfKGtleVNlbGVjdG9yLCB1bmRlZmluZWQsIHZhbHVlKVxuICovXG5mdW5jdGlvbiBncm91cEJ5KGdyb3VwRnVuY3Rpb24sIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFncm91cEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBlbGVtZW50b3I7XG4gICAgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiB0eXBlb2YgZWxlbWVudEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZWxlbWVudG9yID0gZWxlbWVudEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJlbGVtZW50XCIgaW4gZWxlbWVudEZ1bmN0aW9uKSB7XG4gICAgICAgIGVsZW1lbnRvciA9IGVsZW1lbnRGdW5jdGlvbi5lbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcHJvamVjdG9yO1xuICAgIGlmIChvdXRwdXRGdW5jdGlvbiAmJiB0eXBlb2Ygb3V0cHV0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm9qZWN0b3IgPSBvdXRwdXRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwicHJvamVjdFwiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBwcm9qZWN0b3IgPSBlbGVtZW50RnVuY3Rpb24ucHJvamVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJwcm9qZWN0XCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgcHJvamVjdG9yID0gb3V0cHV0RnVuY3Rpb24ucHJvamVjdDtcbiAgICB9XG4gICAgbGV0IGVxdWFsaXplcjtcbiAgICBpZiAoY29tcGFyZXIgJiYgdHlwZW9mIGNvbXBhcmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBlbGVtZW50RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IG91dHB1dEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9ncm91cEJ5KGRhdGEpIHtcbiAgICAgICAgLy8gRXZlbiB0aG91Z2ggdGhpcyBpcyByZXR1cm5pbmcgYXMgaWYgaXQncyBkZWZlcnJlZCBleGVjdXRpb24sIGl0J3Mgbm90IHJlYWxseSBkZWZlcnJlZC4gSXQgaGFzIHRvIHByb2Nlc3MgdGhlIGZ1bGwgbGlzdFxuICAgICAgICAvLyB0byBrbm93IHdoYXQgdGltZXMgZWFjaCBpbmRpdmlkdWFsIGtleSBhcHBlYXJzLlxuICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkS2V5ID0gZ3JvdXBGdW5jdGlvbihyb3cpO1xuICAgICAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGNhY2hlLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKGlubmVySXRlbSwgZXh0cmFjdGVkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBjYWNoZS5nZXQoaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBjYWNoZS5nZXQoZXh0cmFjdGVkS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIG1hdGNoLmFkZChyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuc2V0KGV4dHJhY3RlZEtleSwgbmV3IEdyb3VwaW5nXzEuR3JvdXBpbmcoZXh0cmFjdGVkS2V5LCByb3csIGVsZW1lbnRvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGNhY2hlLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKHByb2plY3Rvcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHByb2plY3Rvcihyb3dbMF0sIHJvd1sxXS52YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudG9yKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcm93WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcm93WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdyb3VwQnkgPSBncm91cEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG5jb25zdCBHcm91cGluZ18xID0gcmVxdWlyZShcIi4uL1R5cGVzL0dyb3VwaW5nXCIpO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZ3JvdXBKb2luX3FfOiBDb3JyZWxhdGVzIHRoZSBlbGVtZW50cyBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleSBlcXVhbGl0eSBhbmQgZ3JvdXBzIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgaXMgYSBzb3J0IG9mIGEgY29tYmluYXRpb24gb2Ygb3V0ZXIgam9pbiBhbmQgaGFsZiBhIGdyb3VwIGJ5IChvbmx5IHRoZSBzZWNvbmQgc2VxdWVuY2UgaXMgZ3JvdXBlZCkuXG4gKiBUaGUgb3V0cHV0IGZ1bmN0aW9uLCB3aGljaCBkZXRlcm1pbmVzIHRoZSBvdXRwdXQsIGlzIHJlcXVpcmVkLiBUaGlzIGRvZXNuJ3Qgc2VlbSB1c2VmdWwgZW5vdWdoIGZvciBtZSB0byBjb21lIHVwIHdpdGggYSBkZWZhdWx0IG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gZ3JvdXBKb2luKHNlY29uZCwgZmlyc3RLZXlTZWxlY3Rvciwgc2Vjb25kS2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFmaXJzdEtleVNlbGVjdG9yIHx8ICFzZWNvbmRLZXlTZWxlY3RvciB8fCAhb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9ncm91cEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLiBcbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGdyb3VwaW5nO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0S2V5ID0gZmlyc3RLZXlTZWxlY3RvcihsZWZ0SXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXkgPSBzZWNvbmRLZXlTZWxlY3RvcihyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY29tcGFyZShsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZy5hZGQocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwaW5nID0gbmV3IEdyb3VwaW5nXzEuR3JvdXBpbmcobGVmdEtleSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cGluZykge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGxlZnRJdGVtLCBncm91cGluZy52YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0RnVuY3Rpb24obGVmdEl0ZW0sIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ncm91cEpvaW4gPSBncm91cEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogaW5uZXJKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgaW5uZXIgam9pbi4gVGhpcyBjb21iaW5lcyB0aGUgdHdvIGtleSBsb29rdXBzIGFuZCB0aGUgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYVxuICogc2luZ2xlIGZ1bmN0aW9uIGlucHV0LiBGb3IgbW9zdCBwcm9ncmFtbWVycywgdGhpcyBpcyBhbGwgdGhlIGNvbXBsZXhpdHkgeW91J2xsIG5lZWQuXG4gKi9cbmZ1bmN0aW9uIGlubmVySm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2lubmVySm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gVGhlIHJpZ2h0IHNpZGUgY2FuIHRoZW9yZXRpY2FsbHkgYmUgYSBnZW5lcmF0b3IuIFdlIGRvbid0IGtub3csIGJ1dCB3ZSBoYXZlIHRvIHRha2UgdGhhdCBjaGFuY2UuXG4gICAgICAgIC8vIEpTIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byByZXN0YXJ0IGEgZ2VuZXJhdG9yLCBzbyB3ZSBjYW4gb25seSBjaGVjayByaWdodCBvbmNlIHdpdGhvdXQgc29tZSBleHRyYSBCUyB0byBhbGxvdyBpdCB0byByZXN0YXJ0XG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmlubmVySm9pbiA9IGlubmVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogaW50ZXJzZWN0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGludGVyc2VjdGlvbiBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHByb3ZpZGVkXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbnRlcnNlY3QoZGF0YSkge1xuICAgICAgICBjb25zdCBzZWNvbmRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIHNlY29uZFNldC5hZGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBzZWNvbmRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBpbiBib3RoIHNldHMuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIGl0J3MgYmVlbiBzZW50IGFscmVhZHksIGRvbid0IHNlbmQgaXQgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBmb3VuZCwgdHJhY2sgYW5kIHNlbmQgaXRcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNldC5oYXMoaXRlbSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnNlY3QgPSBpbnRlcnNlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGludGVyc2VjdEJ5X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGludGVyc2VjdGlvbiBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgcHJvdmlkZWRcbiAqL1xuZnVuY3Rpb24gaW50ZXJzZWN0Qnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbnRlcnNlY3RCeShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBzZWNvbmRTZXQuYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIHNlY29uZFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW4gYm90aCBzZXRzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIGl0J3MgYmVlbiBzZW50IGFscmVhZHksIGRvbid0IHNlbmQgaXQgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBmb3VuZCwgdHJhY2sgYW5kIHNlbmQgaXRcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kU2V0LmhhcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmludGVyc2VjdEJ5ID0gaW50ZXJzZWN0Qnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogam9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBPbmx5IHJlY29yZHMgYXJlIHJldHVybmVkIHdoZW4gYm90aCBzaWRlcyBtYXRjaC5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUga2V5cy5cbiAqXG4gKiBJZiB0aGUgb3V0cHV0IHNlbGVjdG9yIGlzIGxlZnQgb3V0LCByZXN1bHRzIGFyZSByZXR1cm5lZCBhcyBbZmlyc3Qgcm93LCBzZWNvbmQgcm93XS4gVGhpcyBpcyBhIGNoYW5nZSBmcm9tIEMjLCB3aGljaCByZXF1aXJlcyB0aGUgb3V0cHV0IHNlbGVjdG9yLlxuICpcbiAqIExlYXZpbmcgdGhlIG91dHB1dCBzZWxlY3RvciBvdXQgcmVxdWlyZXMgcGFzc2luZyBjb21wYXJlciBpbiBhcyB7IGVxdWFsczogY29tcGFyZXIgfSBpZiB5b3Ugd2FudCB0byB1c2UgaXQuIFNlZSB0aGUgbG9uZyBkaXNjdXNzaW9uXG4gKiBpbiBHcm91cEJ5IGZvciBkZXRhaWxzLlxuICovXG5mdW5jdGlvbiBqb2luKHNlY29uZCwgZmlyc3RLZXlTZWxlY3Rvciwgc2Vjb25kS2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFmaXJzdEtleVNlbGVjdG9yIHx8ICFzZWNvbmRLZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImVxdWFsc1wiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGlmIChvdXRwdXRGdW5jdGlvbiAmJiB0eXBlb2Ygb3V0cHV0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIG91dHB1dEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2pvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgc3RhdGlzdGljcyBhbmQgaW5kZXggYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXkgPSBzZWNvbmRLZXlTZWxlY3RvcihyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBlcXVhbGl6ZXIobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbGFzdF9xXzogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UuIFRha2VzIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqL1xuZnVuY3Rpb24gbGFzdChtYXRjaEZ1bmN0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICAvLyBDYW4ndCBjaGVjayBpZiBsYXN0SXRlbSBpcyBub3QgdW5kZWZpbmVkLCBiZWNhdXNlIHRoZSBsYXN0IGl0ZW0gY291bGQgYWN0dWFsbHkgYmUgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gVHlwZVNjcmlwdCBjYW4ndCB0ZWxsIHRoYXQgZXZlcnkgcGxhY2UgZm91bmQgd2FzIHRydWUsIGxhc3RJdGVtIHdhcyBhbHNvIHNldDtcbiAgICAgICAgcmV0dXJuIGxhc3RJdGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBoYXMgbm8gZWxlbWVudHMuXCIpO1xufVxuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBsYXN0T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGFraW5nIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJOT1QgRk9VTkRcIiB9KVxuICovXG5mdW5jdGlvbiBsYXN0T3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCF0ZXN0ZXIpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgLy8gQ2FuJ3QgY2hlY2sgaWYgbGFzdEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgYmVjYXVzZSB0aGUgbGFzdCBpdGVtIGNvdWxkIGFjdHVhbGx5IGJlIFwidW5kZWZpbmVkXCIuXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuJ3QgdGVsbCB0aGF0IGV2ZXJ5IHBsYWNlIGZvdW5kIHdhcyB0cnVlLCBsYXN0SXRlbSB3YXMgYWxzbyBzZXQ7XG4gICAgICAgIHJldHVybiBsYXN0SXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMubGFzdE9yRGVmYXVsdCA9IGxhc3RPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogbGVmdEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGxlZnRKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsZWZ0TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5sZWZ0Sm9pbiA9IGxlZnRKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBsb25nQ291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IEJpZ0ludCgwKTtcbiAgICBjb25zdCBvbmUgPSBCaWdJbnQoMSk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0ciA9IGN0ciArIG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0ciA9IGN0ciArIG9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3RyO1xufVxuZXhwb3J0cy5sb25nQ291bnQgPSBsb25nQ291bnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtYXhfcV86IFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtYXggcmVzdWx0IHJldHVybmVkLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCBvbmx5IHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKi9cbmZ1bmN0aW9uIG1heCh0cmFuc2Zvcm0sIGNvbXBhcmVyKSB7XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtYXh2YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1heHZhbCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4dmFsKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF4dmFsO1xufVxuZXhwb3J0cy5tYXggPSBtYXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtYXhCeV9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlIHVzaW5nIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBNYXhCeSBhbmQgTWF4IHdpdGggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyB0aGF0IE1heCByZXR1cm5zIHRoZSBvdXRwdXQgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIHdoaWxlIE1heEJ5XG4gKiByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS4gVGhpcyBzYW1lIHJlc3VsdCBjb3VsZCBiZSBhY2hpZXZlZCB3aXRoIE1heCBhbmQgYSB3ZWxsLWRlc2lnbmVkIGNvbXBhcmVyIGZ1bmN0aW9uLCBvZiBjb3Vyc2UuXG4gKi9cbmZ1bmN0aW9uIG1heEJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heDtcbiAgICBsZXQgbWF4VmFsdWU7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgbWF4VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1heCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heCkge1xuICAgICAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXhWYWx1ZTtcbn1cbmV4cG9ydHMubWF4QnkgPSBtYXhCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLiBJZiBzZXF1ZW5jZSBpcyBlbXB0eSwgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciB1bmRlZmluZWQuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWF4IHJlc3VsdCByZXR1cm5lZC5cbiAqIFRoaXMgaXMgYSBKT0lOLXNwZWNpZmljIG1ldGhvZC4gVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBpbiBDIy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGRlZmF1bHRWYWx1ZSBpbiBhbnl0aGluZyBidXQgdGhlIGZpbmFsIHZhbHVlLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGxpa2Ugc286IHsgZGVmYXVsdFZhbHVlIH1cbiAqL1xuZnVuY3Rpb24gbWF4T3JEZWZhdWx0KHRyYW5zZm9ybSwgY29tcGFyZXIsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBkZWY7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZGVmID0gY29tcGFyZXIuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZGVmID0gdHJhbnNmb3JtLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyICYmICEoXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heHZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4dmFsKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIG1heHZhbDtcbn1cbmV4cG9ydHMubWF4T3JEZWZhdWx0ID0gbWF4T3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWluX3FfOiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWluIHJlc3VsdCByZXR1cm5lZC5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgb25seSB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICovXG5mdW5jdGlvbiBtaW4odHJhbnNmb3JtLCBjb21wYXJlcikge1xuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlcikge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWludmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtaW52YWwpIDwgMCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnZhbDtcbn1cbmV4cG9ydHMubWluID0gbWluO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWluQnlfcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZSB1c2luZyBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICpcbiAqIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gTWluQnkgYW5kIE1pbiB3aXRoIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gaXMgdGhhdCBNaW4gcmV0dXJucyB0aGUgb3V0cHV0IG9mIHRoZSB0cmFuc2Zvcm1hdGlvbiB3aGlsZSBNaW5CeVxuICogcmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuIFRoaXMgc2FtZSByZXN1bHQgY291bGQgYmUgYWNoaWV2ZWQgd2l0aCBNaW4gYW5kIGEgd2VsbC1kZXNpZ25lZCBjb21wYXJlciBmdW5jdGlvbiwgb2YgY291cnNlLlxuICovXG5mdW5jdGlvbiBtaW5CeShrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW47XG4gICAgbGV0IG1pblZhbHVlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgIG1pblZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtaW4pIDwgMCkge1xuICAgICAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWluVmFsdWU7XG59XG5leHBvcnRzLm1pbkJ5ID0gbWluQnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5PckRlZmF1bHRfcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS4gSWYgc2VxdWVuY2UgaXMgZW1wdHksIHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgb3IgdW5kZWZpbmVkLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1pbiByZXN1bHQgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2QuIFRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgaW4gQyMuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBkZWZhdWx0VmFsdWUgaW4gYW55dGhpbmcgYnV0IHRoZSBmaW5hbCB2YWx1ZSwgaXQgbXVzdCBiZSBlbmNsb3NlZCBsaWtlIHNvOiB7IGRlZmF1bHRWYWx1ZSB9XG4gKi9cbmZ1bmN0aW9uIG1pbk9yRGVmYXVsdCh0cmFuc2Zvcm0sIGNvbXBhcmVyLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgZGVmO1xuICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGRlZiA9IGNvbXBhcmVyLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGRlZiA9IHRyYW5zZm9ybS5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlciAmJiAhKFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW52YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbnZhbCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWludmFsKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfVxuICAgIHJldHVybiBtaW52YWw7XG59XG5leHBvcnRzLm1pbk9yRGVmYXVsdCA9IG1pbk9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBvZlR5cGVfcV86IEZpbHRlcnMgdGhlIGVsZW1lbnRzIG9mIGFuIElFbnVtZXJhYmxlIGJhc2VkIG9uIGEgc3BlY2lmaWVkIHR5cGUuXG4gKlxuICogSW4gSlMgdGhpcyBpcyBraW5kIG9mIG1lYW5pbmdsZXNzLiBJZiB5b3UgcHJvdmlkZSBhIHN0cmluZywgaXQgZG9lcyBhIHR5cGVvZi4gSWYgeW91IHByb3ZpZGUgYSBjbGFzcywgaXQgZG9lcyBhbiBpbnN0YW5jZW9mLlxuICovXG5mdW5jdGlvbiBvZlR5cGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX29mVHlwZShkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGp1c3QgdGFraW5nIGl0IG9uIHRoZSBjb2RlcidzIGhvbm9yIHRoYXQgZmlsdGVyIG1hdGNoZXMgUi4gTm8gd2F5IHRvIGFjdHVhbGx5IHRlc3QgaXQuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMub2ZUeXBlID0gb2ZUeXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBPcmRlcmVkRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGVcIik7XG4vLyBXQVJOSU5HIVxuLy8gVGhlc2UgdHdvIG1ldGhvZHMgbXVzdCBiZSBhZGRlZCB0byBFbnVtZXJhYmxlIHVzaW5nIHByb3RvdHlwZSBtb2RpZmljYXRpb24sIGJlY2F1c2UgZGVjbGFyaW5nIHRoZW0gaW4gdGhlIEVudW1lcmFibGUgY2xhc3MgbWFrZXMgdGhlXG4vLyBicm93c2VyIGJsb3cgdXAuIEl0J3MgYmVjYXVzZSBvZiB0aGUgXCJuZXcgT3JkZXJlZEVudW1lcmFibGVcIiAod2hpY2ggZGVyaXZlcyBmcm9tIEVudW1lcmFibGUpIGJlaW5nIHJlZmVyZW5jZWQuXG4vKipcbiAqIG9yZGVyQnlfcV86IFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gYSBrZXkgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIFRoZSBrZXkgZnVuY3Rpb24gaXMgYWxzbyBvcHRpb25hbC4gSWYgeW91IGxlYXZlIGl0IG91dCwgaXQnbGwgZGVmYXVsdCB0byB0aGUgaWRlbnRpdHkuIEkgZ290IHRpcmVkIG9mIHdyaXRpbmcgLm9yZGVyQnlfcV8obyA9PiBvKVxuICogd2hlbiBzb3J0aW5nIG51bWJlcnMgb3Igc3RyaW5ncy4gVGhpcyBpcyBhIGNoYW5nZSBmcm9tIEMjLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgY29tcGFyZXIsIHlvdSdsbCBuZWVkIHRvIGluY2x1ZGUgdGhlIGtleSBzZWxlY3Rvci4gSXQncyBub3Qgd29ydGggbXkgd2hpbGUgdG8gbWFrZSBhIHtjb21wYXJlcn0gb2JqZWN0IHRvIGFsbG93XG4gKiBvbmx5IG9uZSBwYXJhbWV0ZXIgZm9yIHRoaXMgcmFyZSBjYXNlLlxuICovXG5mdW5jdGlvbiBvcmRlckJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAga2V5U2VsZWN0b3IgPSAoKG8pID0+IG8pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9yZGVyZWRFbnVtZXJhYmxlXzEuT3JkZXJlZEVudW1lcmFibGUodGhpcywga2V5U2VsZWN0b3IsIGNvbXBhcmVyKTtcbn1cbmV4cG9ydHMub3JkZXJCeSA9IG9yZGVyQnk7XG4vKipcbiAqIG9yZGVyQnlEZXNjZW5kaW5nX3FfOiBTb3J0cyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBpbiBkZXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleSBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogVGhlIGtleSBmdW5jdGlvbiBpcyBhbHNvIG9wdGlvbmFsLiBJZiB5b3UgbGVhdmUgaXQgb3V0LCBpdCdsbCBkZWZhdWx0IHRvIHRoZSBpZGVudGl0eS4gSSBnb3QgdGlyZWQgb2Ygd3JpdGluZyAub3JkZXJCeV9xXyhvID0+IG8pXG4gKiB3aGVuIHNvcnRpbmcgbnVtYmVycyBvciBzdHJpbmdzLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBjb21wYXJlciwgeW91J2xsIG5lZWQgdG8gaW5jbHVkZSB0aGUga2V5IHNlbGVjdG9yLiBJdCdzIG5vdCB3b3J0aCBteSB3aGlsZSB0byBtYWtlIGEge2NvbXBhcmVyfSBvYmplY3QgdG8gYWxsb3dcbiAqIG9ubHkgb25lIHBhcmFtZXRlciBmb3IgdGhpcyByYXJlIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAga2V5U2VsZWN0b3IgPSAoKG8pID0+IG8pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9yZGVyZWRFbnVtZXJhYmxlXzEuT3JkZXJlZEVudW1lcmFibGUodGhpcywga2V5U2VsZWN0b3IsIGNvbXBhcmVyLCB0cnVlKTtcbn1cbmV4cG9ydHMub3JkZXJCeURlc2NlbmRpbmcgPSBvcmRlckJ5RGVzY2VuZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBvdXRlckpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24gbWF0Y2hpbmcga2V5cy4gSWYgbm8gbWF0Y2hpbmcgcmVjb3JkIGlzIGZpbmQgaW4gdGhlIHNlY29uZCBzZXF1ZW5jZSwgdW5kZWZpbmVkIGlzIHNlbnQgdG8gdGhlIG91dHB1dCBzZWxlY3Rvci5cbiAqIE91dGVyIEpvaW5zIGFyZSBub3QgcHJvdmlkZWQgaW4gTElOUS4gVGhpcyBpcyBhIG5ldyBmdW5jdGlvbiwgZm9sbG93aW5nIHRoZSBwYXR0ZXJuIG9mIGpvaW5fcV8oKTtcbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUga2V5c1xuICogSWYgdGhlIG91dHB1dCBzZWxlY3RvciBpcyBsZWZ0IG91dCwgcmVzdWx0cyBhcmUgcmV0dXJuZWQgYXMgW2ZpcnN0IHJvdywgc2Vjb25kIHJvd10uXG4gKiBMZWF2aW5nIHRoZSBvdXRwdXQgc2VsZWN0b3Igb3V0IHJlcXVpcmVzIHBhc3NpbmcgY29tcGFyZXIgaW4gYXMgeyBlcXVhbHM6IGNvbXBhcmVyIH0gaWYgeW91IHdhbnQgdG8gdXNlIGl0LlxuICovXG5mdW5jdGlvbiBvdXRlckpvaW4oc2Vjb25kLCBmaXJzdEtleVNlbGVjdG9yLCBzZWNvbmRLZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWZpcnN0S2V5U2VsZWN0b3IgfHwgIXNlY29uZEtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgbGV0IGVxdWFsaXplcjtcbiAgICBpZiAoY29tcGFyZXIgJiYgdHlwZW9mIGNvbXBhcmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IG91dHB1dEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgaWYgKG91dHB1dEZ1bmN0aW9uICYmIHR5cGVvZiBvdXRwdXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgb3V0cHV0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfb3V0ZXJKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIHN0YXRpc3RpY3MgYW5kIGluZGV4IGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLiBcbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBsZWZ0S2V5ID0gZmlyc3RLZXlTZWxlY3RvcihsZWZ0SXRlbSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZXF1YWxpemVyKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLm91dGVySm9pbiA9IG91dGVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBwcmVwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgIH0pO1xufVxuZXhwb3J0cy5wcmVwZW5kID0gcHJlcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiByZXBsaWNhdGVfcV86IFJlcGVhdCB0aGUgaXRlbXMgaW4gYSBzZXF1ZW5jZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcGxpY2F0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbG9vcCA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKGRhdGEpO1xuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbG9vcCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29wLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVwbGljYXRlID0gcmVwbGljYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHJldmVyc2VfcV86IEludmVydHMgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlcXVlbmNlXG4gKlxuICogUmV2ZXJzZSBpcyByZWFsbHkgcG9pbnRsZXNzLiBJdCBpcyBhbHJlYWR5IGZvdW5kIG9uIHRoZSBhcnJheSBjbGFzcywgYW5kIHdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHlcbiAqIGRlbGF5ZWQgZXhlY3V0aW9uLCBpdCBjYW4gb25seSB3b3JrIGJ5IGdvaW5nIHRocm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgZW51bWVyYWJsZS5cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcmV2ZXJzZShkYXRhKSB7XG4gICAgICAgIC8vIFdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHkgZGVsYXllZCBleGVjdXRpb24sIGl0IG9idmlvdXNseSBuZWVkcyB0byBwcm9jZXNzIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgICAgICAvLyBiZWNhdXNlIGl0IGhhcyB0byBnZXQgYWxsIHRoZSB3YXkgdG8gdGhlIGxhc3QgaXRlbSBiZWZvcmUgcmV0dXJuaW5nIGEgcm93LlxuICAgICAgICBjb25zdCB0b1JldHVybiA9IFsuLi5kYXRhXTtcbiAgICAgICAgd2hpbGUgKHRvUmV0dXJuLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG9SZXR1cm4ucG9wKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogcmlnaHRKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSByaWdodCBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHJpZ2h0Sm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSBsZWZ0IHNpZGUgYWdhaW5zdCBldmVyeSByaWdodCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IGxlZnRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihkYXRhKTtcbiAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBsZXQgcmlnaHRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGxlZnRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmlnaHRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJpZ2h0Sm9pbiA9IHJpZ2h0Sm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RfcV86IHByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIGludG8gYSBuZXcgZm9ybSBieSBjYWxsaW5nIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50LlxuICogT3B0aW9uYWxseSwgdGhlIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICpcbiAqIGNhc3QoKSBpcyBtYXBwZWQgdG8gc2VsZWN0KCkgYmVjYXVzZSBpbiBqYXZhc2NyaXB0L3R5cGVzY3JpcHQsIHJ1bnRpbWUgY2FzdCgpIGRvZXNuJ3QgZXhpc3RcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIENhc3QgbmVlZGVkIHRvIGFsbG93IGNsZWFuIGludGVyZmFjZSBvdmVybG9hZHNcbiAgICAgICAgICAgIHlpZWxkIHNlbGVjdEZ1bmN0aW9uKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RNYW55X3FfOiBQcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYSBzZXF1ZW5jZSB0byBhbiBJRW51bWVyYWJsZTxUPiwgYW5kIGZsYXR0ZW5zIHRoZSByZXN1bHRpbmcgc2VxdWVuY2VzIGludG8gb25lIHNlcXVlbmNlIHVzaW5nIGEgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIG9wdGlvbmFsbHksIHRoZSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqIGFuIG9wdGlvbmFsIG91dHB1dCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIG91dHB1dCBvZiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gc2VsZWN0TWFueShzdWJTZWxlY3RGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXN1YlNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGlmICghb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBpZiBSIGlzIGxlZnQgb3V0LCBpdCdzIHRoZSBzYW1lIGFzIFRFbGVtZW50LlxuICAgICAgICAvLyBUaGlzIHdvdWxkIGFsbCBiZSBlYXNpZXIgaWYgdHlwZXNjcmlwdCBoYWQgcHJvcGVyIG92ZXJsb2Fkcy5cbiAgICAgICAgb3V0cHV0RnVuY3Rpb24gPSAoKHNyYywgcm93KSA9PiByb3cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0TWFueShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBDYXN0IG5lZWRlZCB0byBhbGxvdyBjbGVhbiBpbnRlcmZhY2Ugb3ZlcmxvYWRzXG4gICAgICAgICAgICBjb25zdCBpdGVyID0gc3ViU2VsZWN0RnVuY3Rpb24oaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Ykl0ZW0gb2YgaXRlcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGl0ZW0sIHN1Ykl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdE1hbnkgPSBzZWxlY3RNYW55O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHNlcXVlbmNlRXF1YWxfcV86IERldGVybWluZXMgd2hldGhlciB0d28gc2VxdWVuY2VzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgdGhlaXIgZWxlbWVudHMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2VFcXVhbChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGNvbnN0IGl0ZXIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgY29uc3QgdmFsMiA9IGl0ZXIubmV4dCgpO1xuICAgICAgICBpZiAodmFsMS5kb25lICE9PSB2YWwyLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIGxlbmd0aFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmUodmFsMS52YWx1ZSwgdmFsMi52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbDEudmFsdWUgIT09IHZhbDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNhbWUgbGVuZ3RoIGFuZCBhbGwgaXRlbXMgaGF2ZSBzYW1lIHZhbHVlc1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zZXF1ZW5jZUVxdWFsID0gc2VxdWVuY2VFcXVhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eSBvciBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqIFRoaXMgY29uZGl0aW9uIGNhbiBvcHRpb25hbGx5IHRha2UgdGhlIGluZGV4IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgKHRoaXMgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBDIyB2ZXJzaW9uKVxuICovXG5mdW5jdGlvbiBzaW5nbGUobWF0Y2hGdW5jdGlvbikge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBmb3VuZEl0ZW07XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIW1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gZm91bmRJdGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBoYXMgbm8gZWxlbWVudHMuXCIpO1xufVxuZXhwb3J0cy5zaW5nbGUgPSBzaW5nbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2luZ2xlT3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRocm93aW5nIGFuIGV4Y2VwdGlvbiBpZiB0aGUgc2VxdWVuY2UgaGFzIG1vcmUgdGhhbiBvbmUgaXRlbS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBzaW5nbGVPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gc2luZ2xlT3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kSXRlbTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gZm91bmRJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5zaW5nbGVPckRlZmF1bHQgPSBzaW5nbGVPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2tpcF9xXzogQnlwYXNzZXMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIHNraXAoY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2tpcChkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNraXAgPSBza2lwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBMYXN0X3FfOiBSZXR1cm5zIGEgbmV3IGVudW1lcmFibGUgY29sbGVjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBmcm9tIHNvdXJjZSB3aXRoIHRoZSBsYXN0IGNvdW50IGVsZW1lbnRzIG9mIHRoZSBzb3VyY2UgY29sbGVjdGlvbiBvbWl0dGVkXG4gKi9cbmZ1bmN0aW9uIHNraXBMYXN0KGNvdW50KSB7XG4gICAgLy8gVGhpcyBpcyBhbm90aGVyIG9uZSB3aGljaCBpcyB0ZWNobmljYWxseSBkZWZlcnJlZCBleGVjdXRpb24sIGJ1dCB0aGVyZSdzIG5vIHdheSB0byBza2lwIHRoZSBsYXN0IG4gaXRlbXNcbiAgICAvLyBpZiB5b3UgZG9uJ3QgY291bnQgdGhlIGxpc3QuXG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXBMYXN0KGRhdGEpIHtcbiAgICAgICAgbGV0IHRvUmV0dXJuO1xuICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdG9SZXR1cm4gPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9SZXR1cm4gPSBbLi4uZGF0YV0uc2xpY2UoMCwgLTEgKiBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQqIHRvUmV0dXJuO1xuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwTGFzdCA9IHNraXBMYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBXaGlsZV9xXzogQnlwYXNzZXMgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50cy5cbiAqICBvcHRpb25hbGx5LCB0aGUgZmlsdGVyIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICovXG5mdW5jdGlvbiBza2lwV2hpbGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXBXaGlsZShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgZ29lcyBmYWxzZSwgdHJpZ2dlcmVkIG5lZWRzIHRvIGdvIHRydWUsIGFuZCBpdCBoYXMgdG8gYmUgc3RpY2t5XG4gICAgICAgICAgICB0cmlnZ2VyZWQgPSB0cmlnZ2VyZWQgfHwgIWZpbHRlcihpdGVtLCBpbmRleCsrKTtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNraXBXaGlsZSA9IHNraXBXaGlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzdGVwX3FfOiByZXR1cm5zIGV2ZXJ5IFwic3RlcFwiIGl0ZW1zIGZyb20gYSBzZXF1ZW5jZVxuICpcbiAqIFRoaXMgaXMgYSBuZXcgaXRlbSB0aGF0IEkgYWRkZWQgYmVjYXVzZSBJIHRob3VnaHQgaXQgbWlnaHQgYmUgdXNlZnVsLlxuICovXG5mdW5jdGlvbiBzdGVwKHN0ZXBDb3VudCkge1xuICAgIGlmIChzdGVwQ291bnQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc3RlcChkYXRhKSB7XG4gICAgICAgIGxldCB0bXBTdGVwID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0bXBTdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBzdGVwXG4gICAgICAgICAgICB0bXBTdGVwKys7XG4gICAgICAgICAgICBpZiAodG1wU3RlcCA9PT0gc3RlcENvdW50KSB7XG4gICAgICAgICAgICAgICAgdG1wU3RlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RlcCA9IHN0ZXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc3VtX3FfOiBDb21wdXRlcyB0aGUgc3VtIG9mIHRoZSBzZXF1ZW5jZSBvZiB2YWx1ZXMgdGhhdCBhcmUgb2J0YWluZWQgYnkgaW52b2tpbmcgYW4gb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gc3VtKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgbGV0IHN1bXZhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvQWRkID0gc2VsZWN0RnVuY3Rpb24oaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsdWVUb0FkZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBpbnZhbGlkIG51bWJlciBhZnRlciB0cmFuc2Zvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1bXZhbCA9IHN1bXZhbCArIHZhbHVlVG9BZGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdudW1iZXInIHx8IGlzTmFOKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgaW52YWxpZCBudW1iZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdW12YWwgPSBzdW12YWwgKyBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW12YWw7XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB0YWtlX3FfOiBSZXR1cm5zIGEgc3BlY2lmaWVkIG51bWJlciBvZiBjb250aWd1b3VzIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIGEgc2VxdWVuY2UuXG4gKiBUaGUgc2tpcCBwYXJhbWV0ZXIgaXMgYSBKUy1zcGVjaWZpYyBtb2RpZmljYXRpb24gdG8gaW1wbGVtZW50IFJhbmdlLCB3aGljaCBpcyBhIEMjLW9ubHkgb2JqZWN0ICh3aXRoIGFuIG9kZCBzeW50YXgpXG4gKi9cbmZ1bmN0aW9uIHRha2UoY291bnQsIHNraXAgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2UoZGF0YSkge1xuICAgICAgICBpZiAoc2tpcCA8IDApIHtcbiAgICAgICAgICAgIHNraXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoc2tpcCA+IDApIHtcbiAgICAgICAgICAgICAgICBza2lwLS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VMYXN0X3FfOiBSZXR1cm5zIGEgbmV3IGVudW1lcmFibGUgY29sbGVjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBsYXN0IGNvdW50IGVsZW1lbnRzIGZyb20gc291cmNlXG4gKi9cbmZ1bmN0aW9uIHRha2VMYXN0KGNvdW50KSB7XG4gICAgLy8gVGhpcyBpcyBhbm90aGVyIG9uZSB3aGljaCBpcyB0ZWNobmljYWxseSBkZWZlcnJlZCBleGVjdXRpb24sIGJ1dCB0aGVyZSdzIG5vIHdheSB0byB0YWtlIHRoZSBsYXN0IG4gaXRlbXNcbiAgICAvLyBpZiB5b3UgZG9uJ3QgY291bnQgdGhlIGxpc3QuXG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2VMYXN0KGRhdGEpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCogWy4uLmRhdGFdLnNsaWNlKC0xICogY291bnQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy50YWtlTGFzdCA9IHRha2VMYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VXaGlsZV9xXzogUmV0dXJucyBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZS5cbiAqIE9wdGlvbmFsbHksIHRoZSBmaWx0ZXIgZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKi9cbmZ1bmN0aW9uIHRha2VXaGlsZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZVdoaWxlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBnb2VzIGZhbHNlLCB0cmlnZ2VyZWQgbmVlZHMgdG8gZ28gdHJ1ZSwgYW5kIGl0IGhhcyB0byBiZSBzdGlja3lcbiAgICAgICAgICAgIHRyaWdnZXJlZCA9IHRyaWdnZXJlZCB8fCAhZmlsdGVyKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTG9va3VwXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvTG9va3VwXCIpO1xuLyoqXG4gKiB0b0FycmF5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBhcnJheSBjb250YWluaW5nIHRoZSBzZXF1ZW5jZSB2YWx1ZXMuXG4gKiBBbGlhc2VkIHRvIHRvTGlzdF9xXyBhcyB3ZWxsLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpc107XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuLyoqXG4gKiB0b0hhc2hTZXRfcV86IFJldHVybnMgYSBTZXQgZnJvbSBhbiBlbnVtZXJhYmxlLlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgc2V0cyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LlxuICovXG5mdW5jdGlvbiB0b0hhc2hTZXQoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIHJlc3VsdC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvSGFzaFNldCA9IHRvSGFzaFNldDtcbi8qKlxuICogdG9EaWN0aW9uYXJ5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBzdHJpbmcga2V5cyBhbmQgdmFsdWVzLCBiYXNlZCBvbiBhIGtleVNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBhbiBvcHRpb25hbCBlbGVtZW50XG4gKiBzZWxlY3RvciBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBvYmplY3RzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvRGljdGlvbmFyeShrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICAvLyBJbiBDIywgdG9EaWN0aW9uYXJ5KCkgY2FuIHByb2R1Y2UgZGljdGlvbmFyaWVzIHdpdGggbm8tc3RyaW5nIGtleXMuXG4gICAgLy8gVGhpcyBpcyBpbGxlZ2FsIGluIGphdmFzY3JpcHQsIHNvIHRvRGljdGlvbmFyeSgpIGhhcyB0byBiZSBsaW1pdGVkLlxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoa2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgZHVwbGljYXRlIGtleXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBlbGVtZW50U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvRGljdGlvbmFyeSA9IHRvRGljdGlvbmFyeTtcbi8qKlxuICogdG9NYXBfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IE1hcCB3aXRoIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCBpbiBnZW5lcmFsLCBvYmplY3RzIGRvbid0IG1ha2UgZ29vZCBNYXAga2V5cy5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBtYXBzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvTWFwKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIC8vIEluIEMjLCB0b0RpY3Rpb25hcnkoKSBjYW4gcHJvZHVjZSBkaWN0aW9uYXJpZXMgd2l0aCBub24tc3RyaW5nIGtleXMuXG4gICAgLy8gVGhpcyBpcyBpbGxlZ2FsIGluIGphdmFzY3JpcHQsIHNvIHRvRGljdGlvbmFyeSgpIGhhcyB0byBiZSBsaW1pdGVkLlxuICAgIC8vIFRvTWFwKCkgbWV0aG9kIGNvdmVycyB0aGUgZ2FwLlxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgZHVwbGljYXRlIGtleXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGVsZW1lbnRTZWxlY3RvcihpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvTWFwID0gdG9NYXA7XG4vKipcbiAqIHRvTG9va3VwX3FfOiBSZXR1cm5zIGEgTG9va3VwIChjdXN0b20gY2xhc3MpIE1hcCB3aXRoIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLiBBIExvb2t1cCBpcyBsaWtlIGEgTWFwIGV4Y2VwdCBpdCBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIHRvIGJlIHNldCBmb3IgYSBnaXZlbiBrZXkuXG4gKlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgbWFwcyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LiBCZWhpbmQgdGhlXG4gKiBzY2VuZXMsIHRoaXMgaXMgdGlsbCB1c2luZyBhIG1hcC5cbiAqXG4gKiBOb3RlIHRoYXQgaW4gZ2VuZXJhbCwgb2JqZWN0cyBkb24ndCBtYWtlIGdvb2QgTWFwIGtleXMuXG4gKi9cbmZ1bmN0aW9uIHRvTG9va3VwKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMb29rdXBfMS5Mb29rdXAoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGVsZW1lbnRTZWxlY3RvcihpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvTG9va3VwID0gdG9Mb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHVuaW9uX3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlcyByZXR1cm5pbmcgdGhlIHNldCBzZXF1ZW5jZS5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBzdXBwbGllZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiB1bmlvbihzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF91bmlvbihkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGEgbGl0dGxlIGJpdCBvZiBjb3B5cGFzdGEgaGVyZSBidXQgaXQncyBub3Qgd29ydGggbWFraW5nIGEgc3ViLWZ1bmN0aW9uIGZvciBhIHNpbmdsZSBvY2N1cnJlbmNlXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVuaW9uID0gdW5pb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHVuaW9uQnlfcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzIHJldHVybmluZyB0aGUgc2V0IHNlcXVlbmNlIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gdW5pb25CeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3VuaW9uQnkoZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYSBsaXR0bGUgYml0IG9mIGNvcHlwYXN0YSBoZXJlIGJ1dCBpdCdzIG5vdCB3b3J0aCBtYWtpbmcgYSBzdWItZnVuY3Rpb24gZm9yIGEgc2luZ2xlIG9jY3VycmVuY2VcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVuaW9uQnkgPSB1bmlvbkJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHdoZXJlX3FfOiBGaWx0ZXJzIGEgc2VxdWVuY2Ugb2YgdmFsdWVzIGJhc2VkIG9uIGEgcHJlZGljYXRlLlxuICogT3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gd2hlcmUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3doZXJlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLndoZXJlID0gd2hlcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogemlwX3FfOiBQcm9kdWNlcyBhIHNlcXVlbmNlIG9mIHR1cGxlcyB3aXRoIGVsZW1lbnRzIGZyb20gdHdvIG9yIHRocmVlIHNwZWNpZmllZCBzZXF1ZW5jZXMuXG4gKiBJbiBwbGFjZSBvZiBhIHRoaXJkIHNlcXVlbmNlLCBhIGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCB0aGF0IGNvbWJpbmVzIHRoZSBmaXJzdCB0d28uXG4gKi9cbmZ1bmN0aW9uIHppcChzZWNvbmQsIHRoaXJkKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3ppcChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGl0ZXIyID0gc2Vjb25kW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgbGV0IGl0ZXIzO1xuICAgICAgICBsZXQgZnVuYzM7XG4gICAgICAgIGxldCBkb25lMyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcmQgJiYgdHlwZW9mIHRoaXJkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZ1bmMzID0gdGhpcmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcmQpIHtcbiAgICAgICAgICAgIGl0ZXIzID0gdGhpcmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwxID0gZGF0YS5uZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWwyID0gaXRlcjIubmV4dCgpO1xuICAgICAgICAgICAgbGV0IHZhbDM7XG4gICAgICAgICAgICBpZiAoaXRlcjMpIHtcbiAgICAgICAgICAgICAgICB2YWwzID0gaXRlcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGRvbmUzID0gdmFsMy5kb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyBhbnkgb2YgdGhlIHNlcXVlbmNlcyBydW5zIG91dCBvZiBkYXRhLCB3ZSBoYWx0LlxuICAgICAgICAgICAgaWYgKHZhbDEuZG9uZSB8fCB2YWwyLmRvbmUgfHwgZG9uZTMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVyMyAmJiB2YWwzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWUsIHZhbDMudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnVuYzMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZSwgZnVuYzModmFsMS52YWx1ZSwgdmFsMi52YWx1ZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnppcCA9IHppcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgR3JvdXBpbmcge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUsIGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gW3ZhbHVlXTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0RnVuY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGsgPT4gaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgZ2V0IFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLkdyb3VwaW5nID0gR3JvdXBpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGV4dHJhY3RDb21wYXJlcihvYmopIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKFwiY29tcGFyZVwiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmNvbXBhcmU7XG4gICAgfVxufVxuZXhwb3J0cy5leHRyYWN0Q29tcGFyZXIgPSBleHRyYWN0Q29tcGFyZXI7XG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoeCwgeSkge1xuICAgIGlmICh4ID4geSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHggPCB5KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5leHBvcnRzLmRlZmF1bHRDb21wYXJlciA9IGRlZmF1bHRDb21wYXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIob2JqKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChcImVxdWFsc1wiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmVxdWFscztcbiAgICB9XG59XG5leHBvcnRzLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyID0gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQSBsb29rdXAgaXMgYSBNYXAgdGhhdCBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIGZvciBlYWNoIGtleS4gVGhlcmUgaXMgbm8gYnVpbHQtaW4gSmF2YXNjcmlwdCBhbmFsb2d1ZS5cbiAqL1xuY2xhc3MgTG9va3VwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnZhbHVlcygpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5jbGVhcigpO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKGNhbGxiYWNrZm4pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmdldChrZXkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICBpdGVtLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5zZXQoa2V5LCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkxvb2t1cCA9IExvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNOb25lKHRlc3QpIHtcbiAgICByZXR1cm4gKHRlc3QgPT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpO1xufVxuZXhwb3J0cy5pc05vbmUgPSBpc05vbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgQ29uc29sZVZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbm5lckh0bWw6IGBcbiAgICAgICAgICAgICAgICA8aDI+TG9nPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29uc29sZUxvZ1wiIDpsb29wPVwiLlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDogMTBweDtcIj48aS12Pi48L2ktdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IEljaGlnb18xLk9ic2VydmFibGVQcm94eS5wcm94aW1hdGUoW10pO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXcgSWNoaWdvXzEuQm91bmRDb21wb25lbnQodGhpcy52aWV3TW9kZWwsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY29uc29sZUxvZycsXG4gICAgICAgICAgICBvYnNlcnZlQWxsVmlld01vZGVsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2codGhpbmcsIHJlc3VsdCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaW5nKTtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwucHVzaCgocmVzdWx0ID8gJz4+ICcgOiAnJykgKyBjbGVhbih0aGluZykpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhbih2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNvbnNvbGVWaWV3ID0gQ29uc29sZVZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGFnZVJvdXRlciA9IG1pNS5yb3V0ZXIuUGFnZVJvdXRlcjtcbmV4cG9ydHMuQm91bmRDb21wb25lbnQgPSBtaTUuY29tcG9uZW50LkJvdW5kQ29tcG9uZW50O1xuZXhwb3J0cy5Db21wb25lbnQgPSBtaTUuY29tcG9uZW50LkNvbXBvbmVudDtcbmV4cG9ydHMuT2JzZXJ2YWJsZVByb3h5ID0gbWk1Lm9ic2VydmFibGUuT2JzZXJ2YWJsZVByb3h5O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gbWk1Lmh0bWwuY3JlYXRlRWxlbWVudDtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IG1pNS5odG1sLmVzY2FwZUh0bWw7XG5leHBvcnRzLnBhcmFncmFwaCA9IG1pNS5odG1sLnBhcmFncmFwaDtcbmV4cG9ydHMuc3BhbiA9IG1pNS5odG1sLnNwYW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuLi9zcmMvUHJvdG90eXBlRXh0ZW5zaW9uXCIpO1xuY29uc3QgVGVzdGJlbmNoVmlld18xID0gcmVxdWlyZShcIi4uL3Rlc3RzL1Rlc3RiZW5jaFZpZXdcIik7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNvbnN0IFRlc3QwMDBfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDBcIik7XG5jb25zdCBUZXN0MDAxXzEgPSByZXF1aXJlKFwiLi9UZXN0MDAxXCIpO1xuY29uc3QgVGVzdDAwMl8xID0gcmVxdWlyZShcIi4vVGVzdDAwMlwiKTtcbmNvbnN0IFRlc3QwMDNfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDNcIik7XG5jb25zdCBUZXN0MDA0XzEgPSByZXF1aXJlKFwiLi9UZXN0MDA0XCIpO1xuY29uc3QgVGVzdDAwNV8xID0gcmVxdWlyZShcIi4vVGVzdDAwNVwiKTtcbmNvbnN0IFRlc3QwMDZfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDZcIik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIEljaGlnb18xLlBhZ2VSb3V0ZXIuY29uZmlndXJlKFtcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTAnLCBwYXlsb2FkOiBUZXN0MDAwXzEuVGVzdDAwMCB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9MScsIHBheWxvYWQ6IFRlc3QwMDFfMS5UZXN0MDAxIH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD0yJywgcGF5bG9hZDogVGVzdDAwMl8xLlRlc3QwMDIgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTMnLCBwYXlsb2FkOiBUZXN0MDAzXzEuVGVzdDAwMyB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9NCcsIHBheWxvYWQ6IFRlc3QwMDRfMS5UZXN0MDA0IH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD01JywgcGF5bG9hZDogVGVzdDAwNV8xLlRlc3QwMDUgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTYnLCBwYXlsb2FkOiBUZXN0MDA2XzEuVGVzdDAwNiB9LFxuICAgIF0sIFRlc3RiZW5jaFZpZXdfMS5UZXN0YmVuY2hWaWV3LCB0cnVlLCAnPGRpdj5UaGVyZSBpcyBubyBwYWdlIGhlcmUuPC9kaXY+JywgJ3Rlc3QvMCcpO1xufVxubWFpbigpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnVGVzdCB0aGUgdGVzdCBiZW5jaCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5WZXJpZnkgdGhhdCB0aGUgdGVzdCBiZW5jaCB3b3JrcyBiZWZvcmUgcHJvY2VlZGluZy4gVGhlIHRlc3QgYmVuY2ggb3V0cHV0cyB0byB0aGUgbG9nIHdoaWNoIGlzIHNob3duIGJlbG93IGFuZCBpbiB0aGUgZGV2IHRvb2xzIGNvbnNvbGUuIElmIHlvdSBkb24ndCBzZWUgXCJUZXN0IHN1Y2Nlc3NmdWwsXCIgdGhlbiBpdCBmYWlsZWQsIHdpdGggYW4gZXJyb3IgaW4gdGhlIGxvZy4gSGFyZCB0b1xuICAgICAgICAgICAgc2hvdyB0aGUgbG9nIGluIHRoZSBwYWdlIGlmIHRoZSBwYWdlIGlzIGJyb2tlbiwgc28gaGF2ZSB0byBjaGVjayBkZXYgdG9vbHMgYWZ0ZXIgYWxsLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMCBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZC5cIik7XG4gICAgICAgICAgICAvLyBDb21wb25lbnQgcmVuZGVyaW5nIGlzIGFzeW5jaHJvbm91cyAob24gdGhlIG1pY3JvdGFzayBxdWV1ZSksIHNvIGhhdmUgdG8gdGVzdCBzbGlnaHRseSBhZnRlclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlTG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5kZXJpbmcgZmFpbGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQobG9nRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMoXCJIZWxsbyB3b3JsZC5cIiksIFwiTG9nIHNob3VsZCB1cGRhdGUgdGhlIHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAwID0gVGVzdDAwMDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBCYXNpY3MnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+XG4gICAgICAgICAgICAgICAgSk9JTiB0byBKYXZhc2NyaXB0IG9mZmVycyB2YXJpb3VzIG9wZXJhdGlvbnMgc3VjaCBhcyBmaWx0ZXJpbmcsIHByb2plY3Rpb24sIGFuZCBjb3VudGluZyBvbiBpdGVyYWJsZXMgc3VjaCBhcyBhcnJheXMuIFRoZSBKT0lOIGV4dGVuc2lvbiBtZXRob2RzIGNhbiBiZSBmb3VuZCBvbiBhcnJheXMsIHNvIHlvdSBjYW4gY2FsbCB0aGVtIGRpcmVjdGx5IGFzIGluIHRoZSBleGFtcGxlIDxjb2RlPnBlb3BsZS5zZWxlY3RfcV8ocSA9PiBxLmZpcnN0TmFtZSk8L2NvZGU+LiBUaGlzIGNyZWF0ZXMgYW4gRW51bWVyYWJsZSwgd2hpY2ggaXMgdGhlIGNsYXNzIGJlaGluZCBldmVyeSBKT0lOIG9wZXJhdGlvbi4gSXRlcmFibGUgbm9uLWFycmF5cywgc3VjaCBhcyBOb2RlTGlzdCwgbXVzdCBiZSBjb252ZXJ0ZWQgZmlyc3QgdG8gYW4gZW51bWVyYWJsZSB1c2luZyB0aGUgYXNRdWVyeWFibGUgZXh0ZW5zaW9uLCBhcyBpbiB0aGUgZXhhbXBsZSA8Y29kZT5lbGVtZW50cy5hc1F1ZXJ5YWJsZSgpLndoZXJlX3FfKHEgPT4gcS50YWdOYW1lID09PSAnZGl2Jyk8L2NvZGU+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTW9zdCBvZiB0aGUgbWV0aG9kcyBmb3VuZCBpbiBKT0lOIHRvIEphdmFzY3JpcHQgYXJlIHNpbWlsYXIgdG8gbWV0aG9kcyBmb3VuZCBvbiBhcnJheXMsIGJ1dCB0aGVyZSBpcyBhbiBpbXBvcnRhbnQgZGlmZmVyZW5jZS4gTWV0aG9kcyBjYWxsZWQgb24gYXJyYXlzIGV4ZWN1dGUgd2hlbiB5b3UgY2FsbCB0aGVtLiBNZXRob2RzIGluIEpPSU4gdGhhdCByZXR1cm4gdGhlIEVudW1lcmFibGUgY2xhc3Mgb25seSBjcmVhdGUgdGhlIGVudW1lcmFibGUuIFRoZXkgYXJlIG5vdCBleGVjdXRlZCB1bnRpbCB5b3UgaXRlcmF0ZSB0aGVtIG9yIGNhbGwgYSBtZXRob2QgdGhhdCBwcm9kdWNlcyBhIG5vbi1lbnVtZXJhYmxlIHJlc3VsdC4gVGhpcyBpcyBrbm93biBhcyBkZWZlcnJlZCBleGVjdXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZWZlcnJlZCBleGVjdXRpb24gaW4gSk9JTiBpcyBtYW5hZ2VkIHRocm91Z2ggdGhlIHVzZSBvZiBqYXZhc2NyaXB0IGdlbmVyYXRvcnMsIHdoaWNoIHByb2R1Y2UgcmVjb3JkcyBvbmUgYnkgb25lIHdoaWxlIHlvdSBpdGVyYXRlIHRoZSBnZW5lcmF0b3IsIG1lYW5pbmcgdGhhdCB0aGV5IGJvdGggZGVmZXIgdGhlIHN0YXJ0IG9mIHRoZSBwcm9jZXNzIGFuZCB0aGV5IGhhbHQgd2hlbiBpdGVyYXRpb24gaXMgY29tcGxldGVkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVG8gc2hvdyBieSB3YXkgb2YgZXhhbXBsZSwgdGhlIHN0YXRlbWVudHM8YnIvPlxuICAgICAgICAgICAgICAgIDxjb2RlPmFyci5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pLm1hcChtYXBGdW5jdGlvbikuc2xpY2UoMCw1KTwvY29kZT48YnIvPlxuICAgICAgICAgICAgICAgIGFuZDxici8+XG4gICAgICAgICAgICAgICAgPGNvZGU+YXJyLndoZXJlX3FfKGZpbHRlckZ1bmN0aW9uKS5zZWxlY3RfcV8obWFwRnVuY3Rpb24pLnRha2VfcV8oNSk8L2NvZGU+PC9icj5cbiAgICAgICAgICAgICAgICBwcm9kdWNlIHRoZSBleGFjdCBzYW1lIHJlc3VsdHMsIGJ1dCB0aGV5IGhhdmUgdGhlc2UgZGlmZmVyZW5jZXM6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+dGhlIHJlY29yZHMgaW4gdGhlIGFycmF5IGFyZSBwcm9jZXNzZWQgdGhhdCBtb21lbnQsIHdoaWxlIHRoZSByZWNvcmRzIGluIHRoZSBlbnVtZXJhYmxlIGFyZSBub3QgcHJvY2Vzc2VkIHVudGlsIHlvdSBpdGVyYXRlIHRoZW0sIHN1Y2ggYXMgdXNpbmcgYSBmb3Itb2YgbG9vcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5maWx0ZXJGdW5jdGlvbiBpcyBjYWxsZWQgb24gZXZlcnkgcmVjb3JkIG9mIHRoZSBhcnJheSwgd2hpbGUgaW4gdGhlIGVudW1lcmFibGUgaXQgaXMgY2FsbGVkIG9ubHkgb24gZW5vdWdoIHJlY29yZHMgdG8gcHJvZHVjZSA1IHRoYXQgbWF0Y2g8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+bWFwRnVuY3Rpb24gaXMgY2FsbGVkIG9uIGV2ZXJ5IG1hdGNoaW5nIHJlY29yZCBvZiB0aGUgYXJyYXksIHdoaWxlIGluIHRoZSBlbnVtZXJhYmxlIGl0IGlzIGNhbGxlZCBhdCBtb3N0IDUgdGltZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBNZXRob2RzIHRoYXQgcmV0dXJuIGEgc2luZ2xlIHJlc3VsdCwgc3VjaCBhcyBjb3VudF9xXygpIG9yIG1pbl9xXygpIG9yIGZpcnN0X3FfKCkgb3IgdG9BcnJheV9xXygpIG9yIHRvRGljdGlvbmFyeV9xXygpIHdpbGwgZW51bWVyYXRlIHRoZSBhcnJheSwgdGhlIHNhbWUgYXMgbG9vcGluZyB0aHJvdWdoIHdpdGggYSBmb3Itb2YgbG9vcCB3aWxsLiBBbm90aGVyIG9wZXJhdGlvbiB0aGF0IHdpbGwgbWF0ZXJpYWxpemUgdGhlIGl0ZXJhYmxlIGlzIGNhbGxpbmcgSlNPTi5zdHJpbmdpZnkoKSBvbiBpdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE9uY2UgeW91IGl0ZXJhdGUgYW4gRW51bWVyYWJsZSwgdGhlIHF1ZXJ5IHdpbGwgYmUgcHJvY2Vzc2VkLCBhbmQgdGhlIGdlbmVyYXRvciBwcm92aWRpbmcgdGhlIGRhdGEgaXMgY2xvc2VkLiBJbiBDIyBMSU5RIHRvIE9iamVjdHMgaWYgeW91IHdhbnQgdG8gcmUtdXNlIHF1ZXJ5IGRhdGEsIHlvdSBjYWxsIFRvQXJyYXkoKSBvbiB0aGUgcXVlcnkgYW5kIGNhcHR1cmUgdGhlIHJlc3VsdCwgYnV0IEpPSU4gdG8gSmF2YXNjcmlwdCB3aWxsIGNhY2hlIHRoZSBkYXRhIHJldHVybmVkIHNvIGxhdGVyIGl0ZXJhdGlvbnMgcmV0dXJuIGZyb20gdGhlIGNhY2hlLiBJdCdzIHN0aWxsIGdvb2QgY29kaW5nIHByYWN0aWNlIHRvIGJlIGV4cGxpY2l0IGFuZCB1c2UgdG9BcnJheV9xXygpLCBidXQgeW91IGRvbid0IGhhdmUgdG8uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMSBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBzaW1wbGUgZW51bWVyYWJsZSBidXQgZG8gbm90IHRyaWdnZXIgZXhlY3V0aW9uLlxuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IHF1ZXJ5YWJsZTEgPSBbMSwgMiwgM10uc2VsZWN0X3FfKGEgPT4gMyAqIGEpOyAvLyBjcmVhdGVkIGJ1dCBub3QgZXhlY3V0ZWRgKTtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5YWJsZTEgPSBbMSwgMiwgM10uc2VsZWN0X3FfKGEgPT4gMyAqIGEpO1xuICAgICAgICAgICAgLy8gVGhlIHN0YXR1cyBvZiB0aGUgZ2VuZXJhdG9yIGlzIGhpZGRlbiBpbiB0eXBlc2NyaXB0LCBzbyB0byBnZXQgYXQgcHJpdmF0ZVxuICAgICAgICAgICAgLy8gZmllbGRzIHdlIGhhdmUgdG8gY2FzdCBhcyBhbnkuIFlvdSBjYW4gbG9vayBhdCB0aGlzIGluIGRlYnVnIHRvb2xzOlxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5YWJsZTEuX3NvdXJjZSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc29sZS5sb2cocXVlcnlhYmxlMS5faXNDbG9zZWQpOyAvLyBzaG91bGQgYmUgZmFsc2VgKTtcbiAgICAgICAgICAgIC8vIFRoZXJlIHNlZW1zIHRvIGJlIG5vIHdheSBpbiBjb2RlIHRvIHZpZXcgdGhlIGdlbmVyYXRvciBzdGF0dXMgKGp1c3QgcmVkIHNxdWlnZ2xlcyB1bmRlciBbW0dlbmVyYXRvclN0YXR1c11dKVxuICAgICAgICAgICAgLy8gc28gd2UgY2hlY2sgdGhlIF9pc0Nsb3NlZCBmbGFnIHNldCBvbiBnZW5lcmF0b3IgY2xvc2UuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBxdWVyeWFibGUxLl9pc0Nsb3NlZDtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwMSwgJ1F1ZXJ5YWJsZSBpcyBub3QgY2xvc2VkIHdoZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpOyAvLyBtYXRlcmlhbGl6ZXMgdGhlIGVudW1lcmFibGVgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zb2xlLmxvZyhxdWVyeWFibGUxLl9pc0Nsb3NlZCk7IC8vIHNob3VsZCBiZSB0cnVlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBxdWVyeWFibGUxLl9pc0Nsb3NlZDtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAyLCAnUXVlcnlhYmxlIGlzIGNsb3NlZCBhZnRlciBpdGVyYXRpb24nKTtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRvcnMgY2FuIG9ubHkgcHJvZHVjZSBkYXRhIG9uY2UuIElmIG5vdCBmb3IgdGhlIGNhY2hlLCB5b3UnZCBoYXZlIHRvIHNwZWNpZnkgdGhlIHdob2xlIGNvZGVcbiAgICAgICAgICAgIC8vIFsxLCAyLCAzXS5zZWxlY3RfcV8oYSA9PiAzICogYSkgZWFjaCB0aW1lLCBvciBqdXN0IHN0b3JlIHRoZSBhcnJheSBvdXRwdXQuXG4gICAgICAgICAgICAvLyBCdXQgdGhlIEVudW1lcmFibGUgY2xhc3MgY2FjaGVzIHRoZSByZXN1bHRzIHdoZW4geW91IHB1bGwgdGhlbSwgc28gd2hlbiB0aGUgZ2VuZXJhdG9yIGlzIGNsb3NlZCwgeW91IHB1bGwgZnJvbSB0aGUgY2FjaGUuXG4gICAgICAgICAgICB0aGlzLmxvZyhgcXVlcnlhYmxlMS50b0FycmF5X3FfKCk7IC8vIHB1bGxzIGZyb20gdGhlIGNhY2hlLiBpbiBhIGRlZmF1bHQgZ2VuZXJhdG9yLCB0aGlzIHdvdWxkIGJlIHt9YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBxdWVyeWFibGUxLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzLmxlbmd0aCA9PT0gMywgJ3RvQXJyYXkgc3RpbGwgd29ya3MgYWZ0ZXIgY2xvc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZvbycsICdiYXInLCAnYmF6J10uYXNRdWVyeWFibGUoKSAvLyB0YWtlcyBhbiBhcnJheSwgY29udmVydHMgaXQgdG8gYSBxdWVyeWFibGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsnZm9vJywgJ2JhcicsICdiYXonXS5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0WzBdID09PSAnZm9vJyAmJiB0ZXN0MDRbMV0gPT09ICdiYXInICYmIHRlc3QwNFsyXSA9PT0gJ2JheicsICdFbnVtZXJhdGUgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGAnYWJjJy5hc1F1ZXJ5YWJsZSgpIC8vIGNhbGxpbmcgYXNRdWVyeWFibGUoKSBvbiBhIHN0cmluZyBwcm9kdWNlcyBhIGNoYXJhY3RlciBlbnVtZXJhYmxlIC4uLiB0aGlzIGhhcyBhLGIsY2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gJ2FiYycuYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNVswXSA9PT0gJ2EnICYmIHRlc3QwNVsxXSA9PT0gJ2InICYmIHRlc3QwNVsyXSA9PT0gJ2MnLCAnU3RyaW5ncyBjYW4gYmUgY29udmVydGVkIHRvIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYCg1KS5hc1F1ZXJ5YWJsZSgpIC8vIGNhbGxpbmcgYXNRdWVyeWFibGUoKSBvbiBhIG51bWJlciBwcm9kdWNlcyBhIHJhbmdlIG9mIG51bWJlcnMgLi4uIHRoaXMgaXMgYSA1LWl0ZW0gZW51bWVyYWJsZSBoYXZpbmcgMCwxLDIsMyw0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSAoNSkuYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNi5sZW5ndGggPT09IDUgJiYgdGVzdDA2LmFsbF9xXygocSwgaWR4KSA9PiBxID09PSBpZHgpLCAnTnVtYmVycyBjYW4gYmUgY29udmVydGVkIHRvIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHJhbmRvbUdlbmVyYXRvcigpLmFzUXVlcnlhYmxlKCkgLy8gYW55IGl0ZXJhYmxlIGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBxdWVyeWFibGVgKTtcbiAgICAgICAgICAgIC8vIGFueXRoaW5nIGNhbiBiZSB0dXJuZWQgaW50byBhIHF1ZXJ5YWJsZSwgd2hpY2ggZW5hYmxlcyB0aGUgSk9JTiBtZXRob2RzXG4gICAgICAgICAgICBmdW5jdGlvbiogcmFuZG9tR2VuZXJhdG9yKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIDE7XG4gICAgICAgICAgICAgICAgeWllbGQgNDtcbiAgICAgICAgICAgICAgICB5aWVsZCAxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5YWJsZTIgPSByYW5kb21HZW5lcmF0b3IoKS5hc1F1ZXJ5YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gcXVlcnlhYmxlMi50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwN1swXSA9PT0gMSAmJiB0ZXN0MDdbMV0gPT09IDQgJiYgdGVzdDA3WzJdID09PSAxNiwgJ0l0ZXJhYmxlcyBjYW4gYmUgY29udmVydGVkIHRvIGEgcXVlcnlhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhge25hbWV9LmFzUXVlcnlhYmxlKCkgLy8gdGhvdWdoIGl0J3MgdXNlbGVzcywgbm9uLWl0ZXJhYmxlIG9iamVjdHMgY2FuIGJlIG1hZGUgcXVlcnlhYmxlIC4uLiB0aGlzIGlzIGEgbGVuZ3RoIDEgZW51bWVyYWJsZSBjb250YWluaW5nIHtuYW1lfSBhcyBpdHMgb25seSBlbGVtZW50YCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBuYW1lOiAnRm9vJyB9O1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gaXRlbS5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4Lmxlbmd0aCA9PT0gMSAmJiB0ZXN0MDhbMF0gPT09IGl0ZW0sICdhbnkgb2JqZWN0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBxdWVyeWFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwMSA9IFRlc3QwMDE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdDb252ZXJzaW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGVzZSBtZXRob2RzIGFyZSB1c2VkIHRvIGNvbnZlcnQgZW51bWVyYWJsZXMgaW50byBvcmRpbmFyeSBvYmplY3RzOiBhcnJheXMsIG1hcHMsIHNldHMsIGxvb2t1cHM8L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDIgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gWzEsIDMsIDVdLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0udG9BcnJheV9xXygpIC8vIGFuIGV4dHJlbWVseSByZWR1bmRhbnQgZXhhbXBsZSAuLi4gbWFrZXMgYW4gYXJyYXlgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxWzBdID09PSAxICYmIHRlc3QwMVsxXSA9PT0gMyAmJiB0ZXN0MDFbMl0gPT09IDUsICdBcnJheSBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgMywgNV0udG9MaXN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDVdLnRvTGlzdF9xXygpIC8vIHRvTGlzdF9xXygpIGlzIGFsaWFzZWQgdG8gdG9BcnJheV9xXygpYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMlswXSA9PT0gMSAmJiB0ZXN0MDJbMV0gPT09IDMgJiYgdGVzdDAyWzJdID09PSA1LCAnQXJyYXkgaXMgY3JlYXRlZCBieSBUb0xpc3QoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvRGljdGlvbmFyeV9xXyhxID0+IHEubmFtZSk7IC8vIHByb2R1Y2VzIGFuIG9iamVjdCB3aGVyZSBrZXlzIGFyZSBCb2IgYW5kIENhcm9sIGFuZCB0aGUgdmFsdWVzIGFyZSB0aGUgb2JqZWN0IGUuZy4geyBuYW1lOiAnQm9iJywgd2luczogMjAgfWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9EaWN0aW9uYXJ5X3FfKHEgPT4gcS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzWydCb2InXS53aW5zID09PSAyMCwgJ09iamVjdCBkaWN0aW9uYXJ5IGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKSAvLyBwcm9kdWNlcyB7XCJCb2JcIjoyMCxcIkNhcm9sXCI6MzR9YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDQgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0WydCb2InXSA9PT0gMjAsICdOdW1iZXIgZGljdGlvbmFyeSBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIG1hcHNcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUuZW50cmllcygpLmFzUXVlcnlhYmxlKCkucHJlcGVuZF9xXyhcIjwtIE1BUCAtPlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2coJ05vcm1hbCBKUyBvYmplY3RzIGNhbm5vdCBoYXZlIGtleXMgdGhhdCBhcmUgbm90IHN0cmluZ3MsIHNvIGlmIHlvdSB3YW50IG9iamVjdCBrZXlzIHlvdSBtdXN0IHVzZSBNYXAuIFRoaXMgaXMgbm90IGV4Y2VlZGluZ2x5IHVzZWZ1bCBiZWNhdXNlIG9iamVjdHMgZG8gbm90IG1ha2UgZ29vZCBrZXlzLicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvTWFwX3FfKHEgPT4gKHsgbmFtZTogcS5uYW1lIH0pKTsgLy8gcHJvZHVjZXMgYSBtYXAgd2l0aCB7IG5hbWUgfSBrZXlzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDUsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA1LnNpemUgPT09IDIgJiYgISFbLi4udGVzdDA1LmtleXMoKV0uZmluZChtID0+IG0ubmFtZSA9PT0gJ0Nhcm9sJyksICdPYmplY3QgbWFwIGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSwgcSA9PiBxLndpbnMpIC8vIHByb2R1Y2VzIGEgbWFwIHdpdGggeyBuYW1lIH0ga2V5cyBhbmQgd2lucyBhcyB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9NYXBfcV8ocSA9PiAoeyBuYW1lOiBxLm5hbWUgfSksIHEgPT4gcS53aW5zKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwNiwgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2l6ZSA9PT0gMiAmJiBbLi4udGVzdDA2LmVudHJpZXMoKV0uZmluZChtID0+IG1bMF0ubmFtZSA9PT0gJ0Nhcm9sJylbMV0gPT09IDM0LCAnT2JqZWN0IG1hcCBpcyBjcmVhdGVkIHdpdGggZWxlbWVudCBzZWxlY3RvcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0pTIG9iamVjdHMgYW5kIE1hcCBkbyBub3QgYWxsb3cgbXVsdGlwbGUgdmFsdWVzIGZvciBhIGtleSwgc28gSk9JTiBwcm9kdWNlcyBhIExvb2t1cCwgd2hpY2ggZG9lcy4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdXaGVuIHlvdSBjYWxsIHNldCgpIG9uIGEgbG9va3VwLCBpdCBhcHBlbmRzIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIG92ZXJ3cml0aW5nIGl0LicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMTAgfV0udG9Mb29rdXBfcV8ocSA9PiBxLm5hbWUpIC8vIENyZWF0ZXMgYSBsb29rdXAgd2l0aCBuYW1lIGFzIGtleSwgaGVscGZ1bCB3aGVuIG5hbWVzIGFyZSBkdXBsaWNhdGVkYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwNywgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDcuc2l6ZSA9PT0gMiAmJiB0ZXN0MDcuZ2V0KCdDYXJvbCcpLmxlbmd0aCA9PT0gMiAmJiAhIXRlc3QwNy5nZXQoJ0Nhcm9sJykuZmluZChmID0+IGYud2lucyA9PT0gMTApLCAnTG9va3VwIGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucykgLy8gQ3JlYXRlcyBhIGxvb2t1cCB3aXRoIG5hbWUgYXMga2V5IGFuZCB3aW5zIGFzIHZhbHVlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDgsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4LnNpemUgPT09IDIgJiYgdGVzdDA4LmdldCgnQ2Fyb2wnKS5sZW5ndGggPT09IDIgJiYgISF0ZXN0MDguZ2V0KCdDYXJvbCcpLmZpbmQoZiA9PiBmID09PSAxMCksICdMb29rdXAgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAyLCAzLCA0LCAxXS50b0hhc2hTZXRfcV8oKSAvLyBwcm9kdWNlcyBTZXQoKSBvZiBpdHMgdW5pcXVlIHZhbHVlc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDIsIDIsIDMsIDQsIDFdLnRvSGFzaFNldF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2coWy4uLnRlc3QwOV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zaXplID09PSA0ICYmIHRlc3QwOS5oYXMoMSkgJiYgdGVzdDA5LmhhcygyKSAmJiB0ZXN0MDkuaGFzKDMpICYmIHRlc3QwOS5oYXMoNCksICdTZXQgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAyID0gVGVzdDAwMjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ0Jhc2ljIFNpbmdsZS1TZXF1ZW5jZSBRdWVyaWVzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlRoZSBtZWF0IG9mIEpPSU4gdG8gamF2YXNjcmlwdCBpcyB0YWtlbiB1cCBieSBiYXNpYyBxdWVyeSBvcGVyYXRpb25zIHRoYXQgZXZlcnlvbmUgd2hvIHdvcmtzIHdpdGggYXJyYXlzIGlzIHVzZWQgdG86IGZpbHRlcmluZyBlbGVtZW50cywgcHJvamVjdGluZyByZXN1bHRzLCBzbGljaW5nIGFuZCBza2lwcGluZywgYW5kIHNvIG9uLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMyBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMScpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGl0ZW1zJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0FyZSBlcXVhbCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0V2ZXJ5IGxlc3NvbiBpbiBxdWVyaWVzIHN0YXJ0cyB3aXRoIHNlbGVjdC4gU2VsZWN0IHByb2plY3RzIGEgZnVuY3Rpb24gb250byBldmVyeSBlbnRyeSBpbiB0aGUgZW51bWVyYWJsZS4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2VsZWN0X3FfKHMgPT4gcyAqIHMpIC8vIDEsNCw5LDE2LDI1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbMSwgMiwgMywgNCwgNV0uc2VsZWN0X3FfKHMgPT4gcyAqIHMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDQsIDksIDE2LCAyNV0pLCAnU2VsZWN0IHNxdWFyZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWzEsIDIsIDMsIDRdLnNlbGVjdF9xXygoczogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gYCR7aWR4fV4yPSR7c31gKSAvLyBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgLy8gVHlwZXNjcmlwdCBpcyBhbm5veWluZyBhYm91dCB0aGUgYXJndW1lbnQgdHlwZXMuIEl0IGNhbid0IGZpZ3VyZSB0aGVtIG91dCBhdXRvbWF0aWNhbGx5IGxpa2UgdXN1YWwuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKChzLCBpZHgpID0+IGAke2lkeCArIDF9XjI9JHtzICogc31gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMi5zZXF1ZW5jZUVxdWFsX3FfKFtcIjFeMj0xXCIsIFwiMl4yPTRcIiwgXCIzXjI9OVwiLCBcIjReMj0xNlwiXSksIFwiU2VsZWN0IHdpdGggaW5kZXhcIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnVGhlIHNlY29uZCBzdGVwIGluIGV2ZXJ5IGxlc3NvbiBpbiBxdWVyaWVzIGlzIFwid2hlcmUuXCInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8ocSA9PiBxICUgMiA9PT0gMCkgLy8gMiw0LDYsOGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLndoZXJlX3FfKHEgPT4gcSAlIDIgPT09IDApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDQsIDYsIDhdKSwgJ1doZXJlIGV2ZW4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCA8IDMpIC8vIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS53aGVyZV9xXygocSwgaWR4KSA9PiBpZHggPCAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNC5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdXaGVyZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIllvdSBub3cga25vdyA5MCUgb2YgZXZlcnl0aGluZyB5b3UnbGwgbmVlZC4gQnV0IGhlcmUgYXJlIHNvbWUgbW9yZSBmdW5jdGlvbnMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwX3FfKDIpIC8vIDMsNCw1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSBbMSwgMiwgMywgNCwgNV0uc2tpcF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zZXF1ZW5jZUVxdWFsX3FfKFszLCA0LCA1XSksICdTa2lwIGZpcnN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2tpcExhc3RfcV8oMikgLy8gMSwyLDNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFsxLCAyLCAzLCA0LCA1XS5za2lwTGFzdF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNi5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdTa2lwIGxhc3QgMicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8ocSA9PiBxICE9PSAzKSAvLyBza2lwIGFzIGxvbmcgYXMgY29uZGl0aW9uIGlzIGZhbHNlLCB0aGVuIHRha2UgcmVzdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXyhxID0+IHEgIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LnNlcXVlbmNlRXF1YWxfcV8oWzMsIDQsIDVdKSwgJ1NraXAgdW50aWwgMycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gMykgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXygocSwgaWR4KSA9PiBpZHggIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4LnNlcXVlbmNlRXF1YWxfcV8oWzQsIDVdKSwgJ1NraXBXaGlsZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VfcV8oMikgLy8gMSwyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyXSksICdUYWtlIGZpcnN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygzLDEpIC8vIDIsMyw0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlza2lwMSA9IFsxLCAyLCAzLCA0LCA1XS50YWtlX3FfKDMsIDEpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXNraXAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlza2lwMS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0XSksICdUYWtlIGZpcnN0IDMgYWZ0ZXIgc2tpcCAxJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkxJTlEgZG9lc24ndCBoYXZlIHRoZSBhYmlsaXR5IHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgbGlzdCBza2lwcGluZyBldmVyeSBuIHN0ZXBzLiBTbyBJIGFkZGVkIGl0LlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc3RlcF9xXygyKSAvLyAxLCAzLCA1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlzdGVwMSA9IFsxLCAyLCAzLCA0LCA1XS5zdGVwX3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXN0ZXAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlzdGVwMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAzLCA1XSksICdTdGVwIGV2ZXJ5IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgN10uc3RlcF9xXygzKSAvLyAxLCA0LCA3YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlzdGVwMiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5zdGVwX3FfKDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXN0ZXAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlzdGVwMi5zZXF1ZW5jZUVxdWFsX3FfKFsxLCA0LCA3XSksICdTdGVwIGV2ZXJ5IDMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZUxhc3RfcV8oMikgLy8gNCw1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbMSwgMiwgMywgNCwgNV0udGFrZUxhc3RfcV8oMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTAuc2VxdWVuY2VFcXVhbF9xXyhbNCwgNV0pLCAnVGFrZSBsYXN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZVdoaWxlX3FfKHEgPT4gcSAhPT0gMykgLy8gUmV0dXJuIHJvd3MgdW50aWwgY29uZGl0aW9uIGlzIHRydWUsIHRoZW4gc3RvcGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXyhxID0+IHEgIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDExLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ1Rha2VXaGlsZSBub3QgMycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS50YWtlV2hpbGVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gMykgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXygocSwgaWR4KSA9PiBpZHggIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEyLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ1Rha2VXaGlsZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDEsIDIsIDIsIDIsIDMsIDMsIDMsIDNdLmRpc3RpbmN0X3FfKCkgLy8gMSwyLDNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFsxLCAxLCAyLCAyLCAyLCAzLCAzLCAzLCAzXS5kaXN0aW5jdF9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEzLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0dldCBkaXN0aW5jdCBlbnRyaWVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XS5kaXN0aW5jdF9xXygocSwgcikgPT4gcS5hID09PSByLmEpIC8vIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwYXNzZWQgZS5nLiB0byBhbGxvdyBjb21wYXJpc29uIGJ5IGtleWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE0ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdF9xXygocSwgcikgPT4gcS5hID09PSByLmEpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE0Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnRGlzdGluY3Qgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dLmRpc3RpbmN0QnlfcV8ocSA9PiBxLmEpIC8vIGRpc3RpbmN0QnkoKSBkb2VzIGl0cyBjaGVjayBiYXNlZCBvbiBhIGtleSBzZWxlY3RvciBmdW5jdGlvbmApO1xuICAgICAgICAgICAgdGhpcy5sb2coXCIoSSBrbm93IHRoaXMgaXMgYWxtb3N0IHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cywgYnV0IGl0IHdhcyBhZGRlZCBpbiAuTmV0IDYpXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE1ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNS5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0Rpc3RpbmN0IGJ5IGtleScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV0uZGlzdGluY3RCeV9xXyhxID0+IHEuYSwgKHEsIHIpID0+IHEgJSAyID09PSByICUgMikgLy8gYWxzbyB0YWtlcyBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hLCAocSwgcikgPT4gcSAlIDIgPT09IHIgJSAyKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNi5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ0Rpc3RpbmN0IGJ5IGtleTogb25lIGV2ZW4gJiBvbmUgb2RkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlNlbGVjdE1hbnkoKSBsb29wcyB0aHJvdWdoIHRoZSBmaXJzdCBsZXZlbCwgZmxhdHRlbnMgYW4gYXJyYXkgd2l0aGluIHRoYXQgbGV2ZWwsIGFuZCByZXR1cm5zIGl0IGF0IHRoZSB0b3AgbGV2ZWwuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJjb25zdCBudW1iZXJTZXRzID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XTsgLy8gc2V2ZXJhbCBleGFtcGxlcyB3aWxsIHdvcmsgd2l0aCB0aGlzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYG51bWJlclNldHMuc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycykgLy8gMSwzLDUsMiw0LDYsMiw1LDcsMTFgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFt7IHR5cGU6ICdvZGQnLCBudW1iZXJzOiBbMSwgMywgNV0gfSwgeyB0eXBlOiAnZXZlbicsIG51bWJlcnM6IFsyLCA0LCA2XSB9LCB7IHR5cGU6ICdwcmltZScsIG51bWJlcnM6IFsyLCA1LCA3LCAxMV0gfV0uc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMywgNSwgMiwgNCwgNiwgMiwgNSwgNywgMTFdKSwgJ1NlbGVjdCBtYW55IGZsYXR0ZW5zIGluc2lkZSBhcnJheXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKChxOiB7IHR5cGU6IHN0cmluZywgbnVtYmVyczogbnVtYmVyW10gfSwgaWR4OiBudW1iZXIpID0+IHEubnVtYmVycy5tYXAobSA9PiBgJHtpZHh9OiAke219YCkgLy8gZnVuY3Rpb24gdG8gZ2V0IGl0ZXJhYmxlIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IHJlYWxseSBkb2Vzbid0IHdhbnQgdG8gZG8gYW55IGF1dG8tdHlwZW1hcHBpbmcgaGVyZVxuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XS5zZWxlY3RNYW55X3FfKChxLCBpZHgpID0+IHEubnVtYmVycy5tYXAobSA9PiBgJHtpZHh9OiAke219YCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4LnNlcXVlbmNlRXF1YWxfcV8oW1wiMDogMVwiLCBcIjA6IDNcIiwgXCIwOiA1XCIsIFwiMTogMlwiLCBcIjE6IDRcIiwgXCIxOiA2XCIsIFwiMjogMlwiLCBcIjI6IDVcIiwgXCIyOiA3XCIsIFwiMjogMTFcIl0pLCAnU2VsZWN0TWFueSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIm51bWJlclNldHMuc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycywgKHMsIHJlcykgPT4gYCR7cy50eXBlfTogJHtyZXN9YCkgLy8gYW4gb3V0cHV0IGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCB0byBwcm9qZWN0IG9udG8gdGhlIGZsYXR0ZW5lZCByZXN1bHRzLCBsZXR0aW5nIHlvdSBjb21iaW5lIHBhcmVudCBhbmQgY2hpbGRcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8ocSA9PiBxLm51bWJlcnMsIChzLCByZXMpID0+IGAke3MudHlwZX06ICR7cmVzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE5LnNlcXVlbmNlRXF1YWxfcV8oW1wib2RkOiAxXCIsIFwib2RkOiAzXCIsIFwib2RkOiA1XCIsIFwiZXZlbjogMlwiLCBcImV2ZW46IDRcIiwgXCJldmVuOiA2XCIsIFwicHJpbWU6IDJcIiwgXCJwcmltZTogNVwiLCBcInByaW1lOiA3XCIsIFwicHJpbWU6IDExXCJdKSwgJ1NlbGVjdE1hbnkgd2l0aCBvdXRwdXQgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKChxOiB7IHR5cGU6IHN0cmluZywgbnVtYmVyczogbnVtYmVyW10gfSwgaWR4OiBudW1iZXIpID0+IHEubnVtYmVycy5tYXAobSA9PiBgKCMke2lkeH0pICR7bX1gKSwgKHMsIHJlcykgPT4gYCR7cy50eXBlfSAke3Jlc31gKSAvLyBlbGVtZW50IGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8oKHEsIGlkeCkgPT4gcS5udW1iZXJzLm1hcChtID0+IGAoIyR7aWR4fSkgJHttfWApLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9ICR7cmVzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLnNlcXVlbmNlRXF1YWxfcV8oW1wib2RkICgjMCkgMVwiLCBcIm9kZCAoIzApIDNcIiwgXCJvZGQgKCMwKSA1XCIsIFwiZXZlbiAoIzEpIDJcIiwgXCJldmVuICgjMSkgNFwiLCBcImV2ZW4gKCMxKSA2XCIsIFwicHJpbWUgKCMyKSAyXCIsIFwicHJpbWUgKCMyKSA1XCIsIFwicHJpbWUgKCMyKSA3XCIsIFwicHJpbWUgKCMyKSAxMVwiXSksIFwiU2VsZWN0TWFueSB3aXRoIGluZGV4IGluIG91dHB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uY2FzdF9xXyhudW0gPT4gbnVtLnRvU3RyaW5nKCkpIC8vIENhc3QoKSBpcyBpbXBvc3NpYmxlIGluIEpTLCBzbyBjYXN0X3FfKCkgaXMganVzdCBhbiBhbGlhcyBmb3Igc2VsZWN0X3FfKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFsxLCAyLCAzXS5jYXN0X3FfKG51bSA9PiBudW0udG9TdHJpbmcoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCIxXCIsIFwiMlwiLCBcIjNcIl0pLCBcIkNhc3QgcnVucyBjb252ZXJzaW9uIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAndHdvJywgMywgJ3RocmVlJywgNCwgJ2ZvdXInXS5vZlR5cGVfcV8oJ251bWJlcicpIC8vIE9mVHlwZSgpIGlzIGFsc28gbm9uc2Vuc2UgaW4gSlMsIHNvIHRoaXMgZWl0aGVyIGRvZXMgdHlwZW9mIChpZiBhIHN0cmluZyBpcyBwYXNzZWQpIG9yIGluc3RhbmNlb2YgKGlmIGFueXRoaW5nIGVsc2UpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjIgPSBbMiwgJ3R3bycsIDMsICd0aHJlZScsIDQsICdmb3VyJ10ub2ZUeXBlX3FfKCdudW1iZXInKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0XSksICdPZlR5cGUgbnVtYmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDMgPSBUZXN0MDAzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3NyYy9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdBZHZhbmNlZCBTaW5nbGUtU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGlzIHBhZ2UgZGVhbHMgd2l0aCBtb3JlIGFkdmFuY2VkIHF1ZXJpZXMgdGhhdCBjYW4gYmUgY2FsbGVkIG9uIGEgc2luZ2xlIGl0ZXJhYmxlLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwNCBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMScpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGl0ZW1zJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0FyZSBlcXVhbCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIFsxLDIsM11cbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uZGVmYXVsdElmRW1wdHlfcV8oKSAvLyBub3QgZW1wdHkgc28gaXQgcGFzc2VzIHRocm91Z2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzXS5kZWZhdWx0SWZFbXB0eV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0RlZmF1bHRJZkVtcHR5IHdoZW4gbm90IGVtcHR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10uZGVmYXVsdElmRW1wdHlfcV8oLTEpIC8vIFstMV0gd2hlbiBubyBkYXRhYCk7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB3aGF0IHR5cGUgW10gaXMgc3VwcG9zZWQgdG8gYmUuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbXS5kZWZhdWx0SWZFbXB0eV9xXygtMSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIubGVuZ3RoID09PSAxICYmIHRlc3QwMlswXSA9PT0gLTEsICdEZWZhdWx0SWZFbXB0eSBzdXBwbGllcyByb3cgd2hlbiBlbXB0eSBpdGVyYWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5hcHBlbmRfcV8oNCkgLy8gMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDNdLmFwcGVuZF9xXyg0KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMy5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzLCA0XSksICdBcHBlbmQgYWRkcyB0byBlbmQgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBcIm5ldyBmaXJzdFwiLFwiZmlyc3RcIixcInNlY29uZFwiXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKSAvLyBhZGRzIG5ldyBmaXJzdCB0byBzdGFydGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNC5zZXF1ZW5jZUVxdWFsX3FfKFsnbmV3IGZpcnN0JywgJ2ZpcnN0JywgJ3NlY29uZCddKSwgJ1ByZXBlbmQgYWRkcyB0byBiZWdpbm5pbmcgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgNCwgNiwgMSwgMywgNSwgN10ucmV2ZXJzZV9xXygpIC8vIHJldmVyc2VzIHRoZSBhcnJheWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzIsIDQsIDYsIDEsIDMsIDUsIDddLnJldmVyc2VfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zZXF1ZW5jZUVxdWFsX3FfKFs3LCA1LCAzLCAxLCA2LCA0LCAyXSksICdSZXZlcnNlIHJldmVyc2VzIGFsbCBlbGVtZW50cycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykgLy8gY29uY2F0ZW5hdGVzIHRoZSBzZXF1ZW5jZSB3aXRoIGl0c2VsZiBuIHRpbWVzIC4uLiB0aGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2Qgbm90IGluIExJTlFgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl0pLCAnUmVwbGljYXRlIHJlcGVhdHMgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2EnLCAnYicsIDEsIDJdLmVtcHR5X3FfKCkgLy8gY3JlYXRlIGFuIGVtcHR5IGFycmF5IG9mIHRoZSBzYW1lIHR5cGUgYXMgc2VxdWVuY2UgLi4uIG5vdGUgdGhhdCB0eXBlIG1lYW5zIHNvbWV0aGluZyBpbiB0eXBlc2NyaXB0IGJ1dCBqYXZhc2NyaXB0IGRvZXNuJ3QgY2FyZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWydhJywgJ2InLCAxLCAyXS5lbXB0eV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3Lmxlbmd0aCA9PT0gMCwgJ0VtcHR5KCkgcmV0dXJucyBlbXB0eSBlbnVtZXJhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLmNodW5rX3FfKDMpIC8vIGJyZWFrIGFycmF5IGludG8gY2h1bmtzIG9mIHByb3ZpZGVkIHNpemVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5jaHVua19xXygzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QwOCkgPT09IFwiW1sxLDIsM10sWzQsNSw2XSxbNyw4XV1cIiwgXCJDaHVuayBicmVha3MgaXRlcmFibGUgaW50byBjaHVua3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLmNodW5rX3FfKDMpIC8vIHRlc3QgZXZlbiBjaHVuayBzaXplIGNhc2VgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOGEgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0uY2h1bmtfcV8oMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4YSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDA4YSkgPT09IFwiW1sxLDIsM10sWzQsNSw2XSxbNyw4LDldXVwiLCBcIkNodW5rIGJyZWFrcyBpdGVyYWJsZSBpbnRvIGNodW5rc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBvcmRlckJ5X3FfKCkgYW5kIG9yZGVyQnlEZXNjZW5kaW5nX3FfKCkgb3JkZXIgYnkgdGhlIHJlc3VsdCBvZiBhIHByb3ZpZGVkIGtleSBzZWxlY3RvciBtZXRob2QuYCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnVGhlIHJlc3VsdCBvZiB0aGUgdHdvIG9yZGVyQnkgbWV0aG9kcyBhcmUgZW51bWVyYWJsZXMgdGhhdCBoYXZlIHR3byBtZXRob2RzIG5vdCBmb3VuZCBpbiBkZWZhdWx0IEVudW1lcmFibGVzOicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHRoZW5CeV9xXzxUS2V5PihvcmRlckJ5PzogSUZ1bmMxPFQsIFRLZXk+LCBjb21wYXJlcj86IElGdW5jMjxUS2V5LCBUS2V5LCAxIHwgMCB8IC0xPik6IElPcmRlcmVkRW51bWVyYWJsZTxUPjtgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGB0aGVuQnlEZXNjZW5kaW5nX3FfPFRLZXk+KG9yZGVyQnk/OiBJRnVuYzE8VCwgVEtleT4sIGNvbXBhcmVyPzogSUZ1bmMyPFRLZXksIFRLZXksIDEgfCAwIHwgLTE+KTogSU9yZGVyZWRFbnVtZXJhYmxlPFQ+YCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydkb2cnLCAnZmlzaCcsICdjYXQnLCAnYmlyZCcsICdpZ3VhbmEnLCAndHVydGxlJ10ub3JkZXJCeV9xXyhvID0+IG8ubGVuZ3RoKS50aGVuQnlEZXNjZW5kaW5nX3FfKG8gPT4gbykgLy8gb3JkZXIgYnkgd29yZCBsZW5ndGggdGhlbiByZXZlcnNlIGFscGhhYmV0aWNhbGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWydkb2cnLCAnZmlzaCcsICdjYXQnLCAnYmlyZCcsICdpZ3VhbmEnLCAndHVydGxlJ10ub3JkZXJCeV9xXyhvID0+IG8ubGVuZ3RoKS50aGVuQnlEZXNjZW5kaW5nX3FfKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDkuc2VxdWVuY2VFcXVhbF9xXyhbXCJkb2dcIiwgXCJjYXRcIiwgXCJmaXNoXCIsIFwiYmlyZFwiLCBcInR1cnRsZVwiLCBcImlndWFuYVwiXSksICdPcmRlckJ5KCkgZm9sbG93ZWQgYnkgVGhlbkJ5RGVzY2VuZGluZygpJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydkb2cnLCAnZmlzaCcsICdjYXQnLCAnYmlyZCcsICdpZ3VhbmEnLCAndHVydGxlJ10ub3JkZXJCeURlc2NlbmRpbmdfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5X3FfKCkgLy8gcmV2ZXJzZSBsZW5ndGggdGhlbiBhbHBoYWJldGljYWwgLi4uIGVtcHR5IGtleVNlbGVjdG9yIGlzIHRoZSBzYW1lIGFzIChrZXkgPT4ga2V5KWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEwID0gWydkb2cnLCAnZmlzaCcsICdjYXQnLCAnYmlyZCcsICdpZ3VhbmEnLCAndHVydGxlJ10ub3JkZXJCeURlc2NlbmRpbmdfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5X3FfKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTAuc2VxdWVuY2VFcXVhbF9xXyhbXCJpZ3VhbmFcIiwgXCJ0dXJ0bGVcIiwgXCJiaXJkXCIsIFwiZmlzaFwiLCBcImNhdFwiLCBcImRvZ1wiXSksICdPcmRlckJ5RGVzY2VuZGluZygpIGZvbGxvd2VkIGJ5IFRoZW5CeSgpJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnVGhlIGZvbGtzIGF0IE1pY3Jvc29mdCBnYXZlIHVzIGEgbG90IG9mIG92ZXJsb2FkcyBmb3IgR3JvdXBCeSgpLCBtb3N0IG9mIHRoZW0gbm90IHJlYWxseSBuZWNlc3Nhcnkgb3IgZXh0cmVtZWx5IHVzZWZ1bCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSkgLy8gR3JvdXAgYnkgZmlyc3QgbGV0dGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTEgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDExKSA9PT0gYFtbXCJBcHBsZVwiLFwiQXByaWNvdFwiXSxbXCJDYW50ZWxvdXBlXCJdLFtcIkJhbmFuYVwiLFwiQmx1ZWJlcnJ5XCJdXWAsICdCYXNpYyBHcm91cEJ5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIldoaWxlIHRoZSByZXN1bHQgb2YgdGhlIGdyb3VwIG9wZXJhdGlvbiBpcyBhbiBpdGVyYWJsZSB0aGF0IGFwcGVhcnMgYXMgaWYgaXQncyBqdXN0IGFuIGFycmF5LCBpdCdzIGFjdHVhbGx5IGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGZpZWxkcyBuYW1lZCAna2V5JyBhbmQgJ3ZhbHVlcydcIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKS50b0FycmF5X3FfKCkubWFwKG0gPT4gbS5rZXkpIC8vIHNlZSB0aGUga2V5cyBvZiBlYWNoIGdyb3VwYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTIgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0pLnRvQXJyYXlfcV8oKS5tYXAobSA9PiBtLmtleSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMi5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFcIiwgXCJDXCIsIFwiQlwiXSksIFwiQWNjZXNzIGtleSBvZiBncm91cGluZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdS50b1VwcGVyQ2FzZSgpKSAvLyBjYW4gdGFrZSBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiB0byBiZSBhcHBsaWVkIHRvIGdyb3VwaW5nIGVsZW1lbnRzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTMgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdS50b1VwcGVyQ2FzZSgpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxMykgPT09IGBbW1wiQVBQTEVcIixcIkFQUklDT1RcIl0sW1wiQ0FOVEVMT1VQRVwiXSxbXCJCQU5BTkFcIixcIkJMVUVCRVJSWVwiXV1gLCBcIkdyb3VwQnkgd2l0aCBlbGVtZW50IGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdS50b1VwcGVyQ2FzZSgpLCAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWApIC8vIGNhbiB0YWtlIGFuIG9wdGlvbmFsIG91dHB1dCB0cmFuc2Zvcm1hdGlvbiB0byBiZSBwcm9qZWN0ZWQgb250byB0aGUgcmV0dXJuZWQgZ3JvdXBpbmdzXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE0ID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSwgKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIEFQUExFIGFuZCBBUFJJQ09UXCIsIFwiQyBpcyBmb3IgQ0FOVEVMT1VQRVwiLCBcIkIgaXMgZm9yIEJBTkFOQSBhbmQgQkxVRUJFUlJZXCJdKSwgXCJHcm91cEJ5IHdpdGggb3V0cHV0IGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdSArICchJywgKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCwgKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdSArICchJywgKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCwgKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTUuc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZSEgYW5kIEJhbmFuYSEgYW5kIEFwcmljb3QhIHN0YXJ0IHdpdGggY2FwaXRhbFwiLCBcImNhbnRlbG91cGUhIGFuZCBibHVlYmVycnkhIHN0YXJ0IHdpdGggbG93ZXJjYXNlXCJdKSwgXCJHcm91cEJ5IHdpdGggY3VzdG9tIGVxdWFsaXR5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJOb3cgaGVyZSdzIHdoZXJlIGl0IHR1cm5zIGludG8gYSByZWFsIG1lc3MuIFVwIHVudGlsIG5vdywgd2UndmUganVzdCBiZWVuIGFkZGluZyBhIG5ldyBwYXJhbWV0ZXIgYXQgdGhlIGVuZC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkJ1dCB3aGF0IGlmIHlvdSB3YW50IHRvIHVzZSBvbmx5IHRoZSBjdXN0b20gZXF1YWxpdHksIGJ1dCBub3RoaW5nIGVsc2UuIEVhc3kgdG8gZG8gaW4gQyMuIE5vdCBzbyBlYXN5IGluIEpTLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiVHlwZXNjcmlwdCBoYXMgc29tZSBzbWFsbCBhbW91bnQgb2Ygb3ZlcmxvYWQgZGVjbGFyYXRpb24sIGJ1dCBpdCdzIHZlcnkgd2VhayBhbmQgZG9lc24ndCBlbWl0IGFueXRoaW5nLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBTdXJlLCB5b3UgY29kZSB0aGUgZm9sbG93aW5nOmApO1xuICAgICAgICAgICAgdGhpcy5sb2coYGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbj86IGZ1bmN0aW9uKTtgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbj86IGZ1bmN0aW9uKTtgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBCdXQgamF2YXNjcmlwdCBzZWVzIG9ubHkgZnVuY3Rpb24gZ3JvdXBCeV9xXyhmdW5jdGlvbiwgZnVuY3Rpb24pLmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1doaWNoIG92ZXJsb2FkIHdhcyBpdD8gSmF2YXNjcmlwdCBoYXMgbm8gaWRlYSB3aGF0c29ldmVyLicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJTbyBpZiB5b3Ugd2FudCB0byBza2lwIHBhcmFtZXRlcnMsIHlvdSBoYXZlIHRvIGVuY2xvc2UgdGhlbSBpbiBvYmplY3RzLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pIC8vIGN1c3RvbSBlcXVhbGl0eSBidXQgbm8gZWxlbWVudCBvciBvdXRwdXQgZnVuY3Rpb25zYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTYgPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDE2KSA9PT0gYFtbXCJBcHBsZVwiLFwiQmFuYW5hXCIsXCJBcHJpY290XCJdLFtcImNhbnRlbG91cGVcIixcImJsdWViZXJyeVwiXV1gLCAnR3JvdXBCeSB3aXRoIG9ubHkgZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCB9KSAvLyBjdXN0b20gb3V0cHV0IHByb2plY3RvciBvbmx5XCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE3ID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNy5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIEFwcGxlIGFuZCBBcHJpY290XCIsIFwiQyBpcyBmb3IgQ2FudGVsb3VwZVwiLCBcIkIgaXMgZm9yIEJhbmFuYSBhbmQgQmx1ZWJlcnJ5XCJdKSwgXCJHcm91cEJ5IHdpdGggb25seSBwcm9qZWN0b3JcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pIC8vIGV2ZXJ5dGhpbmcgYnV0IGVsZW1lbnQgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTggPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOC5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlIGFuZCBCYW5hbmEgYW5kIEFwcmljb3Qgc3RhcnQgd2l0aCBjYXBpdGFsXCIsIFwiY2FudGVsb3VwZSBhbmQgYmx1ZWJlcnJ5IHN0YXJ0IHdpdGggbG93ZXJjYXNlXCJdKSwgXCJHcm91cEJ5IHdpdGggbm8gZWxlbWVudCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogcSA9PiBxICsgJyEnIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pIC8vIGV2ZXJ5dGhpbmcgYnV0IG91dHB1dCBwcm9qZWN0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOSA9IFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiBxID0+IHEgKyAnIScgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTkpID09PSBgW1tcIkFwcGxlIVwiLFwiQmFuYW5hIVwiLFwiQXByaWNvdCFcIl0sW1wiY2FudGVsb3VwZSFcIixcImJsdWViZXJyeSFcIl1dYCwgJ0dyb3VwQnkgd2l0aCBubyBvdXRwdXQgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdS50b1VwcGVyQ2FzZSgpIH0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gIH0pIC8vIG9iamVjdCBuYW1lcyB1c2VkIGJ1dCBvdGhlcndpc2Ugc2FtZSBhcyBncm91cEJ5KGtleSwgZWxlbWVudCwgb3V0cHV0KVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMCA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiB1ID0+IHUudG9VcHBlckNhc2UoKSB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMC5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIEFQUExFIGFuZCBBUFJJQ09UXCIsIFwiQyBpcyBmb3IgQ0FOVEVMT1VQRVwiLCBcIkIgaXMgZm9yIEJBTkFOQSBhbmQgQkxVRUJFUlJZXCJdKSwgXCJHcm91cEJ5IHdpdGggb2JqZWN0IG5hbWVzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogdSA9PiB1ICsgJyEnIH0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBldmVyeXRoaW5nIHN1cHBsaWVkLCBqdXN0IGluIG9iamVjdHNcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogdSA9PiB1ICsgJyEnIH0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlISBhbmQgQmFuYW5hISBhbmQgQXByaWNvdCEgc3RhcnQgd2l0aCBjYXBpdGFsXCIsIFwiY2FudGVsb3VwZSEgYW5kIGJsdWViZXJyeSEgc3RhcnQgd2l0aCBsb3dlcmNhc2VcIl0pLCAnR3JvdXBCeSBhbGwgaW4gb2JqZWN0cycpO1xuICAgICAgICAgICAgLy8gVGVzdCBzdGF0aWMgbWV0aG9kcyBvbiBFbnVtZXJhYmxlIChub3QgcGFydCBvZiBJUXVlcnlhYmxlLCBidXQgc3RpbGwgaW4gU3lzdGVtLkxpbnEpLi4uXG4gICAgICAgICAgICB0aGlzLmxvZyhgRW51bWVyYWJsZS5yYW5nZV9xXygyLCAxMCkgLy8gU3lzdGVtLkxpbnEgYWxzbyBpbmNsdWRlcyB0d28gc3RhdGljIG5vbi1leHRlbnNpb24gbWV0aG9kc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gRW51bWVyYWJsZV8xLkVudW1lcmFibGUucmFuZ2VfcV8oMiwgMTApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIyLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV0pLCAnUmFuZ2UoKSByZXR1cm5zIGEgcmFuZ2Ugb2YgbnVtYmVycycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYEVudW1lcmFibGUucmVwZWF0X3FfKFwic3BhbVwiLCA0KSAvLyB0aGlzIGlzIHRoZSBvdGhlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIzID0gRW51bWVyYWJsZV8xLkVudW1lcmFibGUucmVwZWF0X3FfKFwic3BhbVwiLCA0KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMy5zZXF1ZW5jZUVxdWFsX3FfKFtcInNwYW1cIiwgXCJzcGFtXCIsIFwic3BhbVwiLCBcInNwYW1cIl0pLCAnUmVwZWF0KCkgcmVwZWF0cyBhbiBlbGVtZW50Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIk5vcm1hbGx5IHRvIGNvdW50IGFuIGVudW1lcmFibGUsIHlvdSBtdXN0IGVudW1lcmF0ZSBpdCwgbWF0ZXJpYWxpemluZyBpdHMgZGF0YS5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkxJTlEgcHJvdmlkZXMgdGhpcyBtZXRob2QsIHRyeUdldE5vbkVudW1lcmF0ZWRDb3VudCgpLCB3aGljaCB0cmllcyB0byBnZXQgdGhlIGNvdW50IGZyb20gdGhlIHVuZGVybHlpbmcgb2JqZWN0LCB3aGVuIHBvc3NpYmxlXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJJdCB3b3JrcyB1c2luZyBhbiBvdXQgdmFyLCBsaWtlIGFsbCBUcnlHZXRTb21ldGhpbmcoKSBtZXRob2RzIGluIEMjLiBUaGlzIGRvZXNuJ3QgZXhpc3QgaW4gSlMuIFRvIG1ha2UgaXQgd29yaywgeW91IG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHdoaWNoIGlzIHVwZGF0ZWQuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IGNvdW50VmFsID0geyB2YWx1ZTogMCB9IC8vIG5vdyBcInZhbHVlXCIgY2FuIGJlIHVwZGF0ZWQgYW5kIHRoZSByZWZlcmVuY2UgcmV0dXJuZWRgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50VmFsID0geyB2YWx1ZTogMCB9O1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpIC8vIHNob3VsZCByZXR1cm4gdHJ1ZSBhbmQgNCwgYmVjYXVzZSB0aGlzIGlzIGFuIGFycmF5YCk7XG4gICAgICAgICAgICBjb25zdCBjb3VudDEgPSBbMSwgMiwgMywgNF0udHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFtjb3VudDEsIGNvdW50VmFsLnZhbHVlXSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoY291bnQxICYmIGNvdW50VmFsLnZhbHVlID09PSA0LCBcInRyeUdldE5vbkVudW1lcmF0ZWRDb3VudCByZXR1cm5lZCBhcnJheSBjb3VudFwiKTtcbiAgICAgICAgICAgIGNvdW50VmFsLnZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMubG9nKGAnbm90aGluZyBpcyBzb21ldGhpbmcgd29ydGggZG9pbmcnLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCkgLy8gc3RyaW5ncyBjYW4gYWxzbyBiZSBjb3VudGVkIHdpdGhvdXQgZW51bWVyYXRpb25gKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50MWEgPSAnbm90aGluZyBpcyBzb21ldGhpbmcgd29ydGggZG9pbmcnLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQxYSwgY291bnRWYWwudmFsdWVdLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChjb3VudDFhICYmIGNvdW50VmFsLnZhbHVlID09PSAzMiwgXCJ0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgcmV0dXJuZWQgc3RyaW5nIGNvdW50XCIpO1xuICAgICAgICAgICAgY291bnRWYWwudmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IHNxdWFyZXMgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKHMgPT4gcyAqKiAyKTsgc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpIC8vIG5vdCBwb3NzaWJsZSBhcyB0aGUgYXJyYXkgaXMgYnVyaWVkIHVuZGVyIGEgZ2VuZXJhdG9yYCk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gWzEsIDIsIDMsIDRdLnNlbGVjdF9xXyhzID0+IE1hdGgucG93KHMsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50MiA9IHNxdWFyZXMudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBmYWxzZSwgMFxuICAgICAgICAgICAgdGhpcy5sb2coW2NvdW50MiwgY291bnRWYWwudmFsdWVdLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghY291bnQyICYmIGNvdW50VmFsLnZhbHVlID09PSAwLCAndHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50IGNvdWxkIG5vdCBnZXQgZnJvbSBnZW5lcmF0b3InKTtcbiAgICAgICAgICAgIC8vIE5vdyB3ZSd2ZSBnb25lIGFuZCBtYXRlcmlhbGl6ZWQgaXQgc28gd2UgY2FuIGdldCB0aGUgY291bnQgKGl0J3MgYWN0dWFsbHkgdGhlIGVudW1lcmF0ZWQgY291bnQpXG4gICAgICAgICAgICB0aGlzLmxvZyhgc3F1YXJlcy5jb3VudF9xXygpOyBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7IC8vIE5vdyB0aGF0IGl0J3MgYmVlbiBlbnVtZXJhdGVkLCB5b3UgY2FuIGdldCB0aGUgY291bnQgd2l0aG91dCBlbnVtZXJhdGluZyBpdCBhZ2FpbmApO1xuICAgICAgICAgICAgY29uc3QgZW51bWVyYXRlZENvdW50ID0gc3F1YXJlcy5jb3VudF9xXygpO1xuICAgICAgICAgICAgY29uc3QgY291bnQzID0gc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpO1xuICAgICAgICAgICAgdGhpcy5sb2coW2NvdW50MywgY291bnRWYWwudmFsdWUsIGVudW1lcmF0ZWRDb3VudF0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGNvdW50MyAmJiBjb3VudFZhbC52YWx1ZSA9PT0gZW51bWVyYXRlZENvdW50LCAndHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50IGNvdWxkIGdldCBmcm9tIGJhY2t1cCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJMSU5RIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byBleGVjdXRlIGFuIG9wZXJhdGlvbiB3aXRob3V0IHJldHVybmluZyByZXN1bHRzLCBidXQgSk9JTiBwcm92aWRlcyBmb3JFYWNoXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJjb25zdCBmb3JFYWNoVGVzdDogc3RyaW5nW10gPSBbXTtcXG5bMSwgMiwgM10uc2VsZWN0X3FfKHMgPT4gcyAqIHMpLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4geyBmb3JFYWNoVGVzdC5wdXNoKGAke2lkeH09JHtpdGVtfWApOyB9KTtcIik7XG4gICAgICAgICAgICBjb25zdCBmb3JFYWNoVGVzdCA9IFtdO1xuICAgICAgICAgICAgWzEsIDIsIDNdLnNlbGVjdF9xXyhzID0+IHMgKiBzKS5mb3JFYWNoX3FfKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoVGVzdC5wdXNoKGAke2lkeH09JHtpdGVtfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhmb3JFYWNoVGVzdCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoZm9yRWFjaFRlc3Quc2VxdWVuY2VFcXVhbF9xXyhbXCIwPTFcIiwgXCIxPTRcIiwgXCIyPTlcIl0pLCBcIkZvckVhY2ggbG9vcGVkIHRocm91Z2ggaXRlcmFibGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDQgPSBUZXN0MDA0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnU2luZ2xldG9uIFJlc3VsdHMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+T25jZSB5b3UgaGF2ZSBhIHF1ZXJ5LCB5b3UgbWlnaHQgd2FudCB0byBwcm9jZXNzIHRoYXQgcXVlcnkgdG8gZ2V0IGEgcmVzdWx0LCB3aGV0aGVyIGl0IGJlIGNvdW50aW5nIHRoZSByb3dzLCBmaW5kaW5nIHRoZSBtaW4gb3IgbWF4IHZhbHVlLCBvciBwaWNraW5nIHRoZSBmaXJzdCBvciBsYXN0LiBUaGVzZSBvcGVyYXRpb25zIHdpbGwgZW51bWVyYXRlIHRoZSBkYXRhc2V0IChtYXRlcmlhbGl6aW5nIHRoZSBlbnVtZXJhYmxlKSB0byBmaW5kIHRoZSByZXN1bHQuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDA1IGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKSAvLyBsaWtlIGFycmF5WzNdYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxID09PSAnd2lubmVyJywgJ0VsZW1lbnQgYXQgM3JkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMykgLy8gd29ya3MgdGhlIHNhbWUgd2F5IC4uLmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMiA9PT0gJ3dpbm5lcicsICdFbGVtZW50QXREZWZhdWx0IDNyZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpIC8vIGVsZW1lbnRBdF9xXygxMykgd291bGQgaGF2ZSB0aHJvd25gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMgPT09ICdkZWZhdWx0JywgJ0VsZW1lbnRBdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNCwgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWzEsIDMsIDQsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDQsICdBbGwgaXMgZmFsc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDMsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNSwgJ0FsbCBpcyB0cnVlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDVdLmFsbF9xXygobnVtOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBpZHggPCAxKSAvLyBjaGVjayBpZiBpbmRleCBvZiBhbGwgaXMgbGVzcyB0aGFuIDEgKGtpbmQgb2YgQlMgdGVzdClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNWEgPSBbMSwgMywgNV0uYWxsX3FfKChudW0sIGlkeCkgPT4gaWR4IDwgMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDVhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA1YSwgJ0FsbCBpcyBmYWxzZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXygpIC8vIGRvZXMgc2VxdWVuY2UgaGF2ZSBhbnl0aGluZ2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDIsIDNdLmFueV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYsICdBbnkgd2l0aCBmdWxsIGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gQW55IGNhbiB0YWtlIGEgZmlsdGVyIGZ1bmN0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmFueSgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbMSwgMiwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LCAnQW55IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gc2hvdWxkIGJlIGZhbHNlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwOCwgJ0FueSB3aXRoIGZpbHRlciBhbmQgbm8gbWF0Y2gnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgM10uYW55X3FfKChudW06IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCA+IDEwKSBjaGVjayBpZiBpbmRleCBvbiBhbnkgaXMgZ3JlYXRlciB0aGFuIDEwIChraW5kIG9mIEJTIHRlc3QpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDhhID0gWzEsIDNdLmFueV9xXygobnVtLCBpZHgpID0+IGlkeCA+IDEwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOGEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDhhLCAnQW55IHdpdGggZmlsdGVyIGFuZCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5jb250YWluc19xXygzKSAvLyBpcyBlbGVtZW50IGluIHNlcXVlbmNlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbMSwgMiwgM10uY29udGFpbnNfcV8oMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOSwgJ0NvbnRhaW5zIHdpdGggbWF0Y2gnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJhXCIsIFwiYlwiLCBcImNcIl0uY29udGFpbnNfcV8oXCJCXCIpIC8vIG5vIG1hdGNoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbXCJhXCIsIFwiYlwiLCBcImNcIl0uY29udGFpbnNfcV8oXCJCXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDEwLCAnQ29udGFpbnMgd2l0aCBubyBtYXRjaCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcImFcIiwgXCJiXCIsIFwiY1wiXS5jb250YWluc19xXyhcIkJcIikgLy8gbm8gbWF0Y2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMGEgPSBbXCJhXCIsIFwiYlwiLCBcImNcIl0uY29udGFpbnNfcV8oXCJCXCIsICh4LCB5KSA9PiB4LnRvVXBwZXJDYXNlKCkgPT09IHkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTBhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTBhLCAnQ29udGFpbnMgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMiwgLTJdLmNvdW50X3FfKCkgLy8gNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWzEsIDIsIDIsIC0yXS5jb3VudF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDExLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTEgPT09IDQsICdDb3VudCBhIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDddLmNvdW50X3FfKG51bSA9PiBudW0gJSAyID09PSAwKSAvLyBjb3VudCBjYW4gdGFrZSBhIGZpbHRlciBjb25kaXRpb24sIHNhbWUgYXMgd2hlcmUoZnVuYykuY291bnQoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddLmNvdW50X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEyID09PSAzLCAnQ291bnQgd2l0aCBmaWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJ4XCIsIFwieVwiLCBcInpcIl0ubG9uZ0NvdW50X3FfKCkgLy8gdXNlIGxvbmdjb3VudCB0byBjb3VudCBtb3JlIHRoYW4gbWF4IGludGVnZXIgLi4uIG9ubHkgd29ya3MgaW4gRUNNQVNjcmlwdCAyMDIwIG9yIG5ld2VyIC4uLiBwcm9iYWJseSB0YWtlcyBhIGxvbmcgdGltZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEzID0gW1wieFwiLCBcInlcIiwgXCJ6XCJdLmxvbmdDb3VudF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEzLnRvU3RyaW5nKCksIHRydWUpOyAvLyBidWlsdC1pbiB0b0pTT04gY2FuJ3Qgc2VyaWFsaXplIGJpZ2ludFxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMy50b1N0cmluZygpID09PSBcIjNcIiwgXCJMb25nQ291bnQgYSBzZXF1ZW5jZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJ4XCIsIFwieVwiLCBcInpcIiwgXCJYXCJdLmxvbmdDb3VudF9xXyhxID0+IHEudG9Mb3dlckNhc2UoKSA9PT0gXCJ4XCIpIC8vIGFsc28gdGFrZXMgYSBmaWx0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFtcInhcIiwgXCJ5XCIsIFwielwiLCBcIlhcIl0ubG9uZ0NvdW50X3FfKHEgPT4gcS50b0xvd2VyQ2FzZSgpID09PSBcInhcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTQudG9TdHJpbmcoKSwgdHJ1ZSk7IC8vIGJ1aWx0LWluIHRvSlNPTiBjYW4ndCBzZXJpYWxpemUgYmlnaW50XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE0LnRvU3RyaW5nKCkgPT09IFwiMlwiLCBcIkxvbmdDb3VudCB3aXRoIGZpbHRlclwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc3VtX3FfKCkgLy8gc3VtIHRoZSB2YWx1ZXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNSA9IFsxLCAyLCAzLCA0LCA1XS5zdW1fcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1ID09PSAxNSwgJ1N1bSBzZXF1ZW5jZSB2YWx1ZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc3VtX3FfKHEgPT4gcSAqIDIpIC8vIGNhbiBhcHBseSBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGJlZm9yZSBzdW1taW5nYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTYgPSBbMSwgMiwgMywgNCwgNV0uc3VtX3FfKHEgPT4gcSAqIDIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTYgPT09IDMwLCAnU3VtIHdpdGggdHJhbnNmb3JtYXRpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNCwgNCwgLCB1bmRlZmluZWRdLmF2ZXJhZ2VfcV8oKSAvLyAzIC4uLiB0aHJvd3MgaWYgZW1wdHksIGNhbid0IGRpdmlkZSBieSB6ZXJvYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbMSwgMywgNCwgNCwgLCB1bmRlZmluZWRdLmF2ZXJhZ2VfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3ID09PSAzLCAnQXZlcmFnZSBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt1bmRlZmluZWRdLmF2ZXJhZ2VfcV8oKSAvLyBMSU5RIHNheXMgdG8gaWdub3JlIG51bGxzIGluIG51bGxhYmxlIG51bWJlcnMsIGFuZCBpZiBhbGwgYXJlIG51bGwsIHJldHVybiBudWxsYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTdhID0gW3VuZGVmaW5lZF0uYXZlcmFnZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3YSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3YSA9PT0gdW5kZWZpbmVkLCAnQXZlcmFnZSBhIG51bGwgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RfcV8oKSAvLyAyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTggPSBbMiwgMywgNF0uZmlyc3RfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4ID09PSAyLCAnRmlyc3QgaW4gc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCByZXR1cm4gNFxuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAzKSAvLyBjYW4gdGFrZSBhIGZpbHRlciBmdW5jdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5maXJzdCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOSA9PT0gNCwgJ0ZpcnN0IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDEsIDIsIDMsIDRdLmZpcnN0X3FfKChxOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBpZHggPT09IDMpIC8vIHRoZSBmaWx0ZXIgY29uZGl0aW9uIGNhbiB0YWtlIGluZGV4IGFzIGEgcGFyYW1ldGVyIChhbm90aGVyIEJTIHRlc3QpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTlhID0gWzEsIDEsIDIsIDMsIDRdLmZpcnN0X3FfKChxLCBpZHgpID0+IGlkeCA9PT0gMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTlhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTlhID09PSAzLCAnRmlyc3Qgd2l0aCBmaWx0ZXIgb24gaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMTAwKSAvLyB0aGlzIHdpbGwgdGhyb3cgYmVjYXVzZSB0aGVyZSBhcmUgbm8gbWF0Y2hlc2ApO1xuICAgICAgICAgICAgbGV0IHRocm93MSA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHRocm93MSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3cxLCAnRmlyc3QgdGhyZXcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwLCAtMSkgLy8gdGhpcyB3aWxsIHJldHVybiB0aGUgdmFsdWUgcHJvdmlkZWQgKG9yIHVuZGVmaW5lZCBpZiBub25lKSBpbnN0ZWFkIG9mIHRocm93aW5nYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbMiwgMywgNF0uZmlyc3RPckRlZmF1bHRfcV8oKHEpID0+IHEgPiAxMDAsIC0xKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwID09PSAtMSwgJ0ZpcnN0T3JEZWZhdWx0IHdpdGggZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAxLCAyLCAzLCA0XS5maXJzdE9yRGVmYXVsdF9xXygocTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gaWR4ID09PSAzKSAvLyBhbHNvIHRha2VzIGZpbHRlciB3aXRoIGluZGV4YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjBhID0gWzEsIDEsIDIsIDMsIDRdLmZpcnN0T3JEZWZhdWx0X3FfKChxLCBpZHgpID0+IGlkeCA9PT0gMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjBhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjBhID09PSAzLCAnRmlyc3RPckRlZmF1bHQgd2l0aCBmaWx0ZXIgb24gaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiU29tZXRpbWVzIHRoaXMgQVBJIGlzbid0IGFzIGNsZWFuIGFzIHRoZSBDIyBBUEkgYmVjYXVzZSB0eXBlIGNoZWNraW5nIGluIEpTIGlzIGFtYmlndW91cyBhbmQgYmVjYXVzZSBwYXJhbWV0ZXJzIGRvbid0IGFjdHVhbGx5IGhhdmUgbmFtZXMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJJbiB0aGlzIGNhc2UsIHdoZW4gY2FsbGVkIHdpdGggYSBzaW5nbGUgaW5wdXQsIGl0J3Mgbm90IHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIG9wdGlvbmFsIGZpbHRlciBvciB0aGUgb3B0aW9uYWwgZGVmYXVsdC4gSXQncyBhc3N1bWVkIHRvIGJlIHRoZSBmaWx0ZXIuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAtMiB9KSAvLyBVc2UgdGhpcyBmb3JtYXQgdG8gcGFzcyBkZWZhdWx0IGJ1dCBubyBmaWx0ZXIuYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbXS5maXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogLTIgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMSA9PT0gLTIsIFwiRmlyc3RPckRlZmF1bHQgd2l0aCBvbmx5IGRlZmF1bHRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKCkgLy8gY2FuJ3QgaGF2ZSBmaXJzdCB3aXRob3V0IGxhc3RgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjIgPT09ICdsYXN0JywgJ0xhc3Qgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBcImZvdXJ0aFwiXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKHEgPT4gcVswXSA9PT0gXCJmXCIpIC8vIGxhc3QgY2FuIGFsc28gdGFrZSBmaWx0ZXIsIHNhbWUgYXMgd2hlcmUoZnVuYykubGFzdCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8ocSA9PiBxWzBdID09PSBcImZcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMyA9PT0gJ2ZvdXJ0aCcsICdMYXN0IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKChxOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiBpZHggPCAzKSAvLyBsYXN0IGZpbHRlciBhbHNvIGFsbG93cyBpbmRleGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIzYSA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdF9xXygocSwgaWR4KSA9PiBpZHggPCAzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyM2EsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyM2EgPT09ICd0aGlyZCcsICdMYXN0IHdpdGggZmlsdGVyIGFuZCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJ10ubGFzdF9xXyhxID0+IHEubGVuZ3RoID4gMTAwKSAvLyBqdXN0IGxpa2Ugd2l0aCBmaXJzdCgpIHRoaXMgd2lsbCB0aHJvd2ApO1xuICAgICAgICAgICAgbGV0IHRocm93MiA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCddLmxhc3RfcV8ocSA9PiBxLmxlbmd0aCA+IDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdzIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRocm93MiwgXCJMYXN0IHRocm93cyBvbiBlbXB0eSBzZXF1ZW5jZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RPckRlZmF1bHRfcV8ocSA9PiBxWzBdID09PSBcIlhcIiwgXCJkZWZhdWx0XCIpIC8vIGRvZXNuJ3QgdGhyb3csIGluc3RlYWQgcmV0dXJucyBkZWZhdWx0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjQgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RPckRlZmF1bHRfcV8oKHEpID0+IHFbMF0gPT09IFwiWFwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNCA9PT0gJ2RlZmF1bHQnLCAnTGFzdE9yRGVmYXVsdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RPckRlZmF1bHRfcV8oKHE6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IGlkeCA8IDMpIC8vIGZpbHRlciBhbHNvIGFsbG93cyBpbmRleGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI0YSA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdE9yRGVmYXVsdF9xXygocSwgaWR4KSA9PiBpZHggPCAzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNGEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNGEgPT09ICd0aGlyZCcsICdMYXN0IHdpdGggZmlsdGVyIGFuZCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmxhc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiZGVmYXVsdFwiIH0pIC8vIGp1c3QgbGlrZSB3aXRoIGZpcnN0LCBwYXNzaW5nIG9ubHkgZGVmYXVsdCB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI1ID0gW10ubGFzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJkZWZhdWx0XCIgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNSA9PT0gJ2RlZmF1bHQnLCAnTGFzdE9yRGVmYXVsdCB3aXRoIG9ubHkgZGVmYXVsdCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIDFcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMV0uc2luZ2xlX3FfKCkgLy8gcmV0dXJucyByZWNvcmQgaWYgdGhlcmUgaXMgZXhhY3RseSBvbmUsIHRocm93aW5nIGlmIDAgb3IgbW9yZSB0aGFuIG9uZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI2ID0gWzFdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjYgPT09IDEsICdTaW5nbGUgcmVjb3JkIGluIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKSAvLyB0YWtlcyBhIGZpbHRlciBmdW5jdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5zaW5nbGUoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI3ID0gWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI3ID09PSAyLCAnU2luZ2xlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDJdLnNpbmdsZV9xXygocTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gaWR4ID09PSAwKSAvLyBmaWx0ZXIgZnVuY3Rpb24gY2FuIHRha2UgaW5kZXhgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyN2EgPSBbMSwgMl0uc2luZ2xlX3FfKChxLCBpZHgpID0+IGlkeCA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjdhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjdhID09PSAxLCAnU2luZ2xlIHdpdGggZmlsdGVyIGFuZCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxIDwgMykgLy8gc2luZ2xlIHRocm93cyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlc2ApO1xuICAgICAgICAgICAgbGV0IHRocm93NCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbMSwgMiwgMywgNF0uc2luZ2xlX3FfKHEgPT4gcSA8IDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9jKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzQsICdTaW5nbGUgdGhyb3dzIHdoZW4gbXVsdGlwbGUgcmV0dXJuZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXS5zaW5nbGVfcV8oKSAvLyBMaWtlIGZpcnN0KCkgYW5kIGxhc3QoKSwgc2luZ2xlKCkgdGhyb3dzIG9uIGFuIGVtcHR5IHNlcXVlbmNlYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3czID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFtdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3czID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzMsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlJyk7XG4gICAgICAgICAgICBsZXQgdGhyb3c1ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxID4gMTAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c1ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzUsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAwLCAtMSkgLy8gc2luZ2xlT3JEZWZhdWx0IHN1cHBsaWVzIGRlZmF1bHQgdmFsdWUgZm9yIGVtcHR5IHNlcXVlbmNlLCBzdGlsbCB0aHJvd3MgaWYgbXVsdGlwbGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOCA9IFsxLCAyLCAzLCA0XS5zaW5nbGVPckRlZmF1bHRfcV8oKHEpID0+IHEgPiAxMDAwLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyOCA9PT0gLTEsIFwiRGVmYXVsdCByZXR1cm5lZCBmb3Igc2luZ2xlT3JEZWZhdWx0XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyXS5zaW5nbGVPckRlZmF1bHRfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCA9PT0gMCkgLy8gZmlsdGVyIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjhhID0gWzEsIDJdLnNpbmdsZU9yRGVmYXVsdF9xXygocSwgaWR4KSA9PiBpZHggPT09IDApO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI4YSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI4YSA9PT0gMSwgJ1NpbmdsZSB3aXRoIGZpbHRlciBhbmQgaW5kZXgnKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzYgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXygocSkgPT4gcSAlIDIgPT09IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9mKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c2ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzYsIFwiU2luZ2xlT3JEZWZhdWx0IHN0aWxsIHRocm93cyBvbiBtdWx0aXBsZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWF4X3FfKCkgLy8gNyBpcyBtYXhpbXVtYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjkgPSBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWF4X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyOSA9PT0gNywgJ01heCByZXR1cm5zIG1heGltdW0nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHEgPT4gcSAqIHEpIC8vIGNhbiB0YWtlIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gYXBwbGllZCBiZWZvcmUgbWF4aW11bSwgc2FtZSBhcyBzZWxlY3QoZnVuYykubWF4KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMCA9IFsyLCAzLCA1LCA2LCA0LCAxXS5tYXhfcV8ocSA9PiBxICogcSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzMCA9PT0gMzYsICdNYXggcmV0dXJuZWQgd2l0aCBmdW5jdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJNYXggY2FuIHRha2UgYSBjdXN0b20gY29tcGFyZXIgdGhhdCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IHZhbHVlIGlzIGdyZWF0ZXIsIC0xIGlzIHRoZSBzZWNvbmQsIGVsc2UgMFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zdCBpZ25vcmVFdmVuQ29tcGFyZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHggPSB4ICUgMiA9PT0gMCA/IDAgOiB4O1xuICAgICAgICAgICAgICAgIHkgPSB5ICUgMiA9PT0gMCA/IDAgOiB5O1xuICAgICAgICAgICAgICAgIGlmICh4ID4geSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPCB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCk7XG4gICAgICAgICAgICBjb25zdCBpZ25vcmVFdmVuQ29tcGFyZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHggPSB4ICUgMiA9PT0gMCA/IDAgOiB4O1xuICAgICAgICAgICAgICAgIHkgPSB5ICUgMiA9PT0gMCA/IDAgOiB5O1xuICAgICAgICAgICAgICAgIGlmICh4ID4geSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA8IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcikgLy8gbWF4IG5vdCBjb3VudGluZyBldmVuc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMxID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzEgPT09IDUsICdNYXggd2l0aCBjdXN0b20gY29tcGFyZXIgYW5kIHRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDYsIDQsIDFdLm1heF9xXyh7Y29tcGFyZTogaWdub3JlRXZlbkNvbXBhcmVyIH0pIC8vIGN1c3RvbSBjb21wYXJlciBjYW4gYmUgc2VudCBhcyBmaXJzdCBwYXJhbWV0ZXIgYnkgcHV0dGluZyBpbiBJQ29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMiA9IFsyLCAzLCA1LCA2LCA0LCAxXS5tYXhfcV8oe1xuICAgICAgICAgICAgICAgIGNvbXBhcmU6IGlnbm9yZUV2ZW5Db21wYXJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzMiA9PT0gNSwgJ01heCB3aXRoIGN1c3RvbSBjb21wYXJlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heEJ5X3FfKHEgPT4gcS5uKSAvLyBtYXhCeSB1c2VzIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLCBjb21wYXJlcyB0aGUga2V5cywgYnV0IHJldHVybnMgdGhlIGVsZW1lbnRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMyA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heEJ5X3FfKHEgPT4gcS5uKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDMzLm4gPT09IDYsIFwiTWF4Qnkgd2l0aCBrZXkgbG9va3VwXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heEJ5X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIpIC8vIG1heEJ5IGFsc28gdGFrZXMgY3VzdG9tIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzQgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM0Lm4gPT09IDUsICdNYXhCeSB3aXRoIGN1c3RvbSBjb21wYXJlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA3LCA2LCA0LCAxXS5taW5fcV8oKSAvLyAxIGlzIG1pbmltdW1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNSA9IFsyLCAzLCA1LCA3LCA2LCA0LCAxXS5taW5fcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM1ID09PSAxLCAnTWluIHJldHVybnMgbWluaW11bScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0XS5taW5fcV8ocSA9PiBxICogcSkgLy8gbWluIGFsc28gdGFrZXMgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24sIHNhbWUgYXMgc2VsZWN0KGZ1bmMpLm1pbigpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzYgPSBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHEgPT4gcSAqIHEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzYgPT09IDQsICdNaW4gd2l0aCBmaWx0ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGlnbm9yZUV2ZW5Db21wYXJlcjIgPSAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHggPSB4ICUgMiA9PT0gMCA/IDExMCA6IHg7XG4gICAgICAgICAgICAgICAgeSA9IHkgJSAyID09PSAwID8gMTEwIDogeTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgMyAodGhlIGN1c3RvbSBjb21wYXJlciBmaWx0ZXJzIG91dCBldmVucylcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5fcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcjIpIC8vIG1pbiBhbHNvIHRha2VzIGN1c3RvbSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM3ID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluX3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM3ID09PSAzLCBcIk1pbiB3aXRoIGN1c3RvbSBjb21wYXJlciBhbmQgdHJhbnNmb3JtYXRpb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDYsIDRdLm1pbl9xXyh7IGNvbXBhcmU6IGlnbm9yZUV2ZW5Db21wYXJlcjIgfSlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzOCA9IFsyLCAzLCA1LCA2LCA0XS5taW5fcV8oe1xuICAgICAgICAgICAgICAgIGNvbXBhcmU6IGlnbm9yZUV2ZW5Db21wYXJlcjJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzggPT09IDMsIFwiTWluIHdpdGggY3VzdG9tIGNvbXBhcmVyIG9ubHlcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4pIC8vIGFsc28gYSBtaW5CeSB0aGF0IHRha2VzIGEga2V5IHNlbGVjdG9yYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzkgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5CeV9xXyhxID0+IHEubik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzOS5uID09PSAyLCBcIk1pbkJ5IHJldHVybnMgbWluIHdpdGgga2V5IGxvb2t1cFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5CeV9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyMikgLy8gbWluQnkgYWxzbyB0YWtlcyBhIGN1c3RvbSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQwID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcjIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDAubiA9PT0gMywgJ01pbkJ5IHdpdGggY3VzdG9tIGNvbXBhcmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIk1heCgpIGFuZCBNaW4oKSB0aHJvdyB3aGVuIGNhbGxlZCBvbiBhbiBlbXB0eSBzZXF1ZW5jZS4gVG8gaGFuZGxlIHRoYXQsIEkgY3JlYXRlZCAyIEpPSU4tc3BlY2lmaWMgbWV0aG9kcy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkJlY2F1c2Ugb2YgdGhlIHdheSBvdmVybG9hZHMgd29yayBpbiBKUywgaWYgeW91IGFyZW4ndCB1c2luZyBhbGwgaW5wdXRzLCBlbmNsb3NlIGluIHsgZGVmYXVsdFZhbHVlIH0uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLm1heE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogJ2RlZmF1bHQnIH0pIC8vIHNhbWUgYXMgZGVmYXVsdElmRW1wdHkoJ2RlZmF1bHQnKS5tYXgoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQxID0gW10ubWF4T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAnZGVmYXVsdCcgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0MSA9PT0gJ2RlZmF1bHQnLCAnbWF4IHZhbHVlIG9yIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXS5taW5PckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KSAvLyBzYW1lIGFzIGRlZmF1bHRJZkVtcHR5KCdkZWZhdWx0JykubWluKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MiA9IFtdLm1pbk9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDIgPT09ICdkZWZhdWx0JywgJ21pbiB2YWx1ZSBvciBkZWZhdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKFxuICAgICAgICAgICAgICAgIChsb25nZXN0LCBuZXh0KSA9PiBuZXh0Lmxlbmd0aCA+IGxvbmdlc3QubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3RcbiAgICAgICAgICAgICAgICApIC8vIGFnZ3JlZ2F0ZSBhY3RzIGxpa2UgcmVkdWNlKCksIGluIHRoaXMgY2FzZSB0cmFja2luZyB0aGUgbWF4IGxlbmd0aCBidXQgaXQgY291bGQgc3VtIHVwIHRoZSByZXN1bHRzLCBldGNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MyA9IFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQzID09PSAncGFzc2lvbmZydWl0JywgJ0FnZ3JlZ2F0ZSB3aXRoIG9ubHkgZnVuY3RvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJyxcbiAgICAgICAgICAgICAgICAobG9uZ2VzdCwgbmV4dCkgPT4gQXJyYXkuZnJvbShuZXh0KS5maWx0ZXIoZiA9PiBmID09PSAnbicpLmxlbmd0aCA+IEFycmF5LmZyb20obG9uZ2VzdCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdFxuICAgICAgICAgICAgKSAvLyBpbml0aWFsIHZhbHVlIGNhbiBiZSBwcm92aWRlZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQ0ID0gWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKCdiYW5hbmEnLCAobG9uZ2VzdCwgbmV4dCkgPT4gQXJyYXkuZnJvbShuZXh0KS5maWx0ZXIoZiA9PiBmID09PSAnbicpLmxlbmd0aCA+IEFycmF5LmZyb20obG9uZ2VzdCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0NCA9PT0gJ2JhbmFuYScsICdBZ2dyZWdhdGUgd2l0aCBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKCdiYW5hbmEnLFxuICAgICAgICAgICAgICAgIChsb25nZXN0LCBuZXh0KSA9PiBuZXh0Lmxlbmd0aCA+IGxvbmdlc3QubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QsXG4gICAgICAgICAgICAgICAgZnJ1aXQgPT4gZnJ1aXQudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgKSAvLyBjYW4gdGFrZSBpbml0aWFsIHZhbHVlIGFuZCBhIGZ1bmN0aW9uIGNhbGxlZCB1cG9uIHRoZSBmaW5hbCByZXN1bHRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0NSA9IFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJywgKGxvbmdlc3QsIG5leHQpID0+IG5leHQubGVuZ3RoID4gbG9uZ2VzdC5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdCwgZnJ1aXQgPT4gZnJ1aXQudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0NSA9PT0gJ1BBU1NJT05GUlVJVCcsICdBZ2dyZWdhdGUgd2l0aCBpbml0aWFsIHZhbHVlIGFuZCBvdXRwdXQgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwNSA9IFRlc3QwMDU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdNdWx0aS1TZXF1ZW5jZSBRdWVyaWVzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlRoZXNlIGZ1bmN0aW9ucywgd2hpY2ggaW5jbHVkZSBpbm5lciBqb2lucywgb3V0ZXIgam9pbnMsIGNvbmNhdGVuYXRpb24sIGFuZCBzZW1pLWpvaW5zLCBjb21wYXJlIGFuZC9vciBjb21iaW5lIG11bHRpcGxlIGl0ZXJhYmxlcy48L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDYgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgdGhpcy5sb2coYFRvIGJlIGVxdWFsIHR3byBzZXF1ZW5jZXMgbmVlZCB0byBiZSB0aGUgc2FtZSBsZW5ndGggYW5kIGhhdmUgdGhlIHNhbWUgaXRlbXMgaW4gdGhlIHNhbWUgb3JkZXIuYCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDNdKSAvLyBkaWZmZXJlbnQgbGVuZ3Roc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDNdKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwMSwgXCJTZXF1ZW5jZUVxdWFsIHRlc3RzIGxlbmd0aCAxXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSkgLy8gZGlmZmVyZW50IGxlbmd0aHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMiA9IFsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDIsIFwiU2VxdWVuY2VFcXVhbCB0ZXN0cyBsZW5ndGggMlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pIC8vIG9yZGVyIG1hdHRlcnNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDMsIFwiU2VxdWVuY2VFcXVhbCB0ZXN0cyBpdGVtc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pIC8vIHRoaXMgaXMgZ29vZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0LCBcIlNlcXVlbmNlRXF1YWwgbWF0Y2hlcyBpdGVtcyBhbmQgbGVuZ3RoXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTNdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKSAvLyB3aXRoIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDUsICdTZXF1ZW5jZUVxdWFsIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRlc3RzIGxlbmd0aCAxJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKSAvLyB3aXRoIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zLCAtMV0sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA2LCAnU2VxdWVuY2VFcXVhbCB3aXRoIGN1c3RvbSBjb21wYXJlciB0ZXN0cyBsZW5ndGggMicpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGZhbHNlXG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKSAvLyB3aXRoIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zLCAtMV0sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA3LCAnU2VxdWVuY2VFcXVhbCB3aXRoIGN1c3RvbSBjb21wYXJlciB0ZXN0cyBpdGVtcycpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHRydWVcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTEsIC0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpIC8vIHdpdGggYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMSwgLTIsIC0zXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOCwgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdG8gZXF1YXRlIGFic29sdXRlIHZhbHVlcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyXS5jb25jYXRfcV8oWzMsIDRdKSAvLyAxLDIsMyw0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbMSwgMl0uY29uY2F0X3FfKFszLCA0XSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgMywgNF0pLCBcIkNvbmNhdCBjb25jYXRlbmF0ZXMgc2VxdWVuY2VzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCAzLCA0LCAyXS51bmlvbl9xXyhbMiwgMywgNCwgNSwgNiwgNl0pIC8vIDEsMiwzLDQsNSw2IChjb25jYXRlbmF0ZXMgYW5kIGRlZHVwZXMpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbMSwgMiwgMywgMywgNCwgMl0udW5pb25fcV8oWzIsIDMsIDQsIDUsIDYsIDZdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMC5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzLCA0LCA1LCA2XSksIFwiVW5pb24gY29uY2F0ZW5hdGVzIGFuZCByZW1vdmVzIGR1cGxpY2F0ZXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikgLy8gY3VzdG9tIGV2ZW4vb2RkIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTEgPSBbMSwgMiwgMywgMywgNCwgMl0udW5pb25fcV8oWzIsIDMsIDQsIDUsIDYsIDZdLCAoeCwgeSkgPT4geCAlIDIgPT09IHkgJSAyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyXSksICd1bmlvbiB3aXRoIGN1c3RvbSBjb21wYXJlciB0byBtYXRjaCBldmVucy9vZGRzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCkgLy8gZG9lcyBhIHVuaW9uIG9uIGtleXMgcmV0dXJuZWQgYnkga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLCByZXR1cm5pbmcgdGhlIGl0ZW1zYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTIgPSBbeyB4OiAxIH0sIHsgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDIgfV0udW5pb25CeV9xXyhbeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiA1IH0sIHsgeDogNiB9LCB7IHg6IDYgfV0sIHEgPT4gcS54KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxMikgPT09IGBbe1wieFwiOjF9LHtcInhcIjoyfSx7XCJ4XCI6M30se1wieFwiOjR9LHtcInhcIjo1fSx7XCJ4XCI6Nn1dYCwgXCJ1bmlvbkJ5IHJldHVybnMgb25lIGl0ZW0gZm9yIGVhY2ggdW5pcXVlIGtleVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyB4OiAxIH0sIHsgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDIgfV0udW5pb25CeV9xXyhbeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiA1IH0sIHsgeDogNiB9LCB7IHg6IDYgfV0sIHEgPT4gcS54LCAoeCwgeSkgPT4geCAlIDIgPT09IHkgJSAyKSAvLyBjdXN0b20gZXZlbi9vZGQgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFt7IHg6IDEgfSwgeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogMiB9XS51bmlvbkJ5X3FfKFt7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDUgfSwgeyB4OiA2IH0sIHsgeDogNiB9XSwgcSA9PiBxLngsICh4LCB5KSA9PiB4ICUgMiA9PT0geSAlIDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEzLmxlbmd0aCA9PT0gMiAmJiB0ZXN0MTNbMF0ueCA9PT0gMSAmJiB0ZXN0MTNbMV0ueCA9PT0gMiwgXCJVbmlvbkJ5IHdpdGggY3VzdG9tIGNvbXBhcmVyIHRvIG1hdGNoIGV2ZW5zL29kZHNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBJywgJ0EnLCAnQycsICdRJywgJ0InLCAnRCcsICdYJ10uaW50ZXJzZWN0X3FfKFsnVycsICdBJywgJ0MnLCAnQicsICdNJ10pIC8vIGRlZHVwZWQgcmVjb3JkcyB0aGF0IGFyZSBpbiBib3RoIHNlcXVlbmNlc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE0ID0gWydBJywgJ0EnLCAnQycsICdRJywgJ0InLCAnRCcsICdYJ10uaW50ZXJzZWN0X3FfKFsnVycsICdBJywgJ0MnLCAnQicsICdNJ10pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE0LnNlcXVlbmNlRXF1YWxfcV8oW1wiQVwiLCBcIkNcIiwgXCJCXCJdKSwgXCJJbnRlcnNlY3Rpb24gcmV0dXJucyBzZXQgcmVzdWx0IG9mIGl0ZW1zIGluIDIgc2VxdWVuY2VzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQXJ0aWNob2tlJywgJ0NhbnRlbG91cGUnLCAnUXVpbmNlJywgJ0JhbmFuYScsICdEYXRlJywgJ1hpZ3VhJ10uaW50ZXJzZWN0X3FfKFsnV2F0ZXJtZWxvbicsICdBdm9jYWRvJywgJ0N1Y3VtYmVyJywgJ0JlcnJ5JywgJ01hbmdvJywgJ2Itd3JvbmcnXSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNGEgPSBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdF9xXyhbJ1dhdGVybWVsb24nLCAnQXZvY2FkbycsICdDdWN1bWJlcicsICdCZXJyeScsICdNYW5nbycsICdiLXdyb25nJ10sIChsLCByKSA9PiBsWzBdID09PSByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTRhLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTRhLnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlXCIsIFwiQmFuYW5hXCJdKSwgXCJJbnRlcnNlY3Rpb24gd2l0aCBjdXN0b20gZXF1YWxpdHlcIik7XG4gICAgICAgICAgICAvLyByZWR1bmRhbnQgd2l0aCB0aGUgcHJldmlvdXMgYnV0IGl0J3MgaW4gLm5ldCA2XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ1dhdGVybWVsb24nLCAnQXZvY2FkbycsICdDdWN1bWJlcicsICdCZXJyeScsICdNYW5nbycsICdiLXdyb25nJ10sIHEgPT4gcVswXSkgLy8gZmluZCBkZWR1cGVkIGtleXMgdGhhdCBhcmUgaW4gYm90aCBzZXF1ZW5jZXMgYW5kIHJldHVybiBmaXJzdCBpdGVtIGZvciBlYWNoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnV2F0ZXJtZWxvbicsICdBdm9jYWRvJywgJ0N1Y3VtYmVyJywgJ0JlcnJ5JywgJ01hbmdvJywgJ2Itd3JvbmcnXSwgcSA9PiBxWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZVwiLCBcIkJhbmFuYVwiXSksIFwiaW50ZXJzZWN0QnkgcmV0dXJucyBpbnRlcnNlY3Rpb24gYnkga2V5IHNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQXJ0aWNob2tlJywgJ0NhbnRlbG91cGUnLCAnUXVpbmNlJywgJ0JhbmFuYScsICdEYXRlJywgJ1hpZ3VhJ10uaW50ZXJzZWN0QnlfcV8oWyd3YXRlcm1lbG9uJywgJ2F2b2NhZG8nLCAnY3VjdW1iZXInLCAnQmVycnknLCAnbWFuZ28nXSwgcSA9PiBxWzBdLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpIC8vIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ3dhdGVybWVsb24nLCAnYXZvY2FkbycsICdjdWN1bWJlcicsICdCZXJyeScsICdtYW5nbyddLCBxID0+IHFbMF0sICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTYuc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZVwiLCBcIkNhbnRlbG91cGVcIiwgXCJCYW5hbmFcIl0pKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMi4wLCAyLjAsIDIuMSwgMi4yLCAyLjMsIDIuNCwgMi41XS5leGNlcHRfcV8oWzIuMl0pIC8vIGRlZHVwZWQgaXRlbXMgZnJvbSBmaXJzdCBub3QgaW4gc2Vjb25kYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbMi4wLCAyLjAsIDIuMSwgMi4yLCAyLjMsIDIuNCwgMi41XS5leGNlcHRfcV8oWzIuMl0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3LnNlcXVlbmNlRXF1YWxfcV8oWzIsIDIuMSwgMi4zLCAyLjQsIDIuNV0pLCAnRXhjZXB0IHJlbW92ZXMgaXRlbXMgZnJvbSBzZWNvbmQgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0X3FfKFt7IGE6IDIuMiB9XSwgKHEsIHIpID0+IHEuYSA9PT0gci5hKSAvLyBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOCA9IFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRfcV8oW3sgYTogMi4yIH1dLCAocSwgcikgPT4gcS5hID09PSByLmEpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMi4xLCAyLjMsIDIuNCwgMi41XSksICdFeGNlcHQgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMi4yIH1dLCBxID0+IHEuYSkgLy8gZXhjZXB0QnkgcmV0dXJucyBleGNlcHRpb24gYnkga2V5IHNlbGVjdG9yYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMi4yIH1dLCBxID0+IHEuYSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTkubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAyLjEsIDIuMywgMi40LCAyLjVdKSwgJ0V4Y2VwdEJ5IHVzZXMga2V5IHNlbGVjdG9yJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDQgfSwgeyBhOiA1IH1dLmV4Y2VwdEJ5X3FfKFt7IGE6IDIgfV0sXG4gICAgICAgICAgICAgICAgcSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpIC8vIGN1c3RvbSBlcXVhbGl0eSB0byBtYWtlIGFsbCBldmVucyBhbmQgYWxsIG9kZHMgbG9vayB0aGUgc2FtZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIwID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDQgfSwgeyBhOiA1IH1dLmV4Y2VwdEJ5X3FfKFt7IGE6IDIgfV0sIHEgPT4gcS5hLCAocSwgcikgPT4gcSAlIDIgPT09IHIgJSAyKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMC5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzFdKSwgJ0V4Y2VwdEJ5IHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkFueW9uZSB3aXRoIFNRTCBleHBlcmllbmNlIHNob3VsZCBrbm93IHdoYXQgYW4gSW5uZXIgSm9pbiBpcy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkFuIGlubmVyIGpvaW4gbWF0Y2hlcyBldmVyeSBpdGVtIGluIHRoZSBmaXJzdCBzZXF1ZW5jZSB3aXRoIGV2ZXJ5IGl0ZW0gaW4gdGhlIHNlY29uZCBzZXF1ZW5jZSBieSBtYXRjaGluZyBrZXlzLCBhbmQgcmV0dXJucyB0aG9zZSByZWNvcmRzIHdoZXJlIHRoZSBrZXkgbWF0Y2ggaXMgdHJ1ZSwgYm90aCBpbiB0aGUgc2FtZSByb3dcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlRoZSBMSU5RIGpvaW4gcmVxdWlyZXMgeW91IHRvIHNlbmQgdHdvIHNlcXVlbmNlcywgYSBrZXkgc2VsZWN0b3IgZm9yIHNlcXVlbmNlIDEsIGEga2V5IHNlbGVjdG9yIGZvciBzZXF1ZW5jZSAyLCBhbmQgYW4gb3V0cHV0IHByb2plY3Rpb24gZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgcm93cyB0byByZXR1cm4uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1tcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZSBJc2xhbmRcIiwgXCJEdXJpYW5cIiwgXCJiLXdyb25nXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiBgJHtsWzBdfSBpcyBmb3IgJHtyfWApIC8vIGpvaW5pbmcgb24gZmlyc3QgbGV0dGVyLCByZXR1cm5pbmcgbGVmdCBmaXJzdCBsZXR0ZXIgYW5kIHJpZ2h0IGZ1bGwgd29yZCcpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIxID0gW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcImItd3JvbmdcIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBcHBsZVwiLCBcIkEgaXMgZm9yIEF2b2NhZG9cIiwgXCJDIGlzIGZvciBDYW50ZWxvdXBlIElzbGFuZFwiXSksICdKb2luIGNvbWJpbmVzIHR3byBzZXF1ZW5jZXMgcm93LXdpc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdbXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ3VjdW1iZXJcIl0uam9pbl9xXyhbXCJhcHBsZVwiLCBcImNhbnRlbG91cGUgSXNsYW5kXCIsIFwiZHVyaWFuXCIsIFwiYXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiBgJHtsWzBdfSBpcyBmb3IgJHtyfWAsIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IFtcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiY2FudGVsb3VwZSBJc2xhbmRcIiwgXCJkdXJpYW5cIiwgXCJhdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIGFwcGxlXCIsIFwiQSBpcyBmb3IgYXZvY2Fkb1wiLCBcIkMgaXMgZm9yIGNhbnRlbG91cGUgSXNsYW5kXCJdKSwgJ0pvaW4gY2FuIHRha2UgY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkluIExJTlEncyBqb2luLCB0aGUgb3V0cHV0IGZ1bmN0aW9uIGlzIHJlcXVpcmVkLiBJbiBKT0lOLCB5b3UgY2FuIGlnbm9yZSBpdC4gSWYgeW91IGRvIHNvLCBzaW1wbGUgdHVwbGVzIGFyZSByZXR1cm5lZC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiQ2FudGVsb3VwZSBJc2xhbmRcIiwgXCJEdXJpYW5cIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KSAvLyBza2lwcGluZyB0aGUgb3V0cHV0IGZ1bmN0aW9uYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjMgPSBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjMpID09PSBgW1tcIkFwcmljb3RcIixcImFwcGxlXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl1dYCwgJ0pvaW4oKSB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYExJTlEgZG9lcyBub3QgcHJvdmlkZSBhbiBvdXRlciBqb2luIG9wZXJhdG9yLiBJdCBjYW4gYmUgZG9uZSAoaW4gYSB0cnVseSB1Z2x5IHdheSkgaW4gdGhlIHF1ZXJ5IHN5bnRheCwgYnV0IG5vdCBpbiBmbHVlbnQgbWV0aG9kc2ApO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gYnV0IEpPSU4gZG9lcyBoYXZlIGFuIG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjQpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9XWAsICdvdXRlckpvaW4gbWF0Y2hpbmcgSm9pbigpIHN5bnRheCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIiwgXCJBcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0pIC8vIGRlZmF1bHQgdHVwbGUgb3V0cHV0IGZyb20gam9pbl9xXygpIGlzIGFsc28gaGVyZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI1ID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiLCBcIkFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjUpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJBcHBsZVwiXSxbXCJBcHJpY290XCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkFwcGxlXCJdLFtcIkJhbmFuYVwiLFwiQmVycnlcIl0sW1wiQ2FudGVsb3VwZVwiLG51bGxdXWAsICdvdXRlckpvaW4gd2l0aCB0dXBsZSBvdXRwdXQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpIC8vIGN1c3RvbSBlcXVhbGl0eWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI2ID0gW1wiQXBwbGVcIiwgXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJiZXJyeVwiLCBcIndhdGVybWVsb25cIiwgXCJhdm9jYWRvXCIsIFwiYXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSwgKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNikgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJhdm9jYWRvXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJhcHBsZVwifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJhdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiYmVycnlcIn0se1wibFwiOlwiQ2FudGVsb3VwZVwifV1gLCAnb3V0ZXJKb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJiZXJyeVwiLCBcIndhdGVybWVsb25cIiwgXCJhdm9jYWRvXCIsIFwiYXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pIC8vIGN1c3RvbSBlcXVhbGl0eSBhbmQgdHVwbGUgb3V0cHV0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjcgPSBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjcpID09PSBgW1tcIkFwcGxlXCIsXCJhdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJhcHBsZVwiXSxbXCJBcHBsZVwiLFwiYXZvY2Fkb1wiXSxbXCJBcHBsZVwiLFwiYXBwbGVcIl0sW1wiQXByaWNvdFwiLFwiYXZvY2Fkb1wiXSxbXCJBcHJpY290XCIsXCJhcHBsZVwiXSxbXCJCYW5hbmFcIixcImJlcnJ5XCJdLFtcIkNhbnRlbG91cGVcIixudWxsXV1gLCAnb3V0ZXJKb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5IGFuZCB0dXBsZSBvdXRwdXQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiVGhlIGpvaW4oKSBpbiBMSU5RIGlzIGtpbmQgb2YgYSBwYWluLiBJIGFsd2F5cyBmaW5kIG15c2VsZiB3b25kZXJpbmcgd2hhdCBhcmUgdGhlIGlucHV0cywgd2hpY2ggaXMgdGhlIGZpcnN0LCB3aGljaCBpcyB0aGUgc2Vjb25kLCB3aHkgZGlkIHRoZXkgdXNlICdpbm5lcicgYW5kICdvdXRlcicgZm9yIHRoaW5ncyB0aGF0IGFyZW4ndCBpbm5lciBvciBvdXRlciwgZXRjLiBJIGtlZXAgaGF2aW5nIHRvIGdvb2dsZSBpdC4gU28gSk9JTiBjb250YWlucyBhIGZyaWVuZGx5IHZlcnNpb24gdGhhdCBjb21iaW5lcyB0d28ga2V5IHNlbGVjdG9ycyBhbmQgY3VzdG9tIGVxdWFsaXR5IGludG8gYSBzaW5nbGUgZnVuY3Rpb24uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gam9pbiBvbiBmaXJzdCBsZXR0ZXIgYW5kIHJldHVybiBvYmplY3RzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjggPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmlubmVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDI4KSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiQmVycnlcIn1dYCwgXCJCYXNpYyBpbm5lckpvaW4gaGVscGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKSAvLyByZXR1cm5zIHR1cGxlcywgb3V0cHV0IGZ1bmN0aW9uIGlzIG9wdGlvbmFsYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjkgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmlubmVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjkpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXV1gLCAnSW5uZXJKb2luIGhlbHBlciB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSBsZWZ0IG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMCkgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn1dYCwgJ0xlZnRKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0pIC8vIGFsc28gYWxsb3dzIHR1cGxlIG91dHB1dGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMxID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzEpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXSxbXCJDYW50ZWxvdXBlXCIsbnVsbF1dYCwgJ0xlZnRKb2luIGhlbHBlciB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ucmlnaHRKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlcmUncyBhbHNvIGEgcmlnaHQgb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMyID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5yaWdodEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMikgPT09IGBbe1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJyXCI6XCJXYXRlcm1lbG9uXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn1dYCwgJ1JpZ2h0Sm9pbiBoZWxwZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmZ1bGxKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlcmUncyBhbHNvIGEgZnVsbCBvdXRlciBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzMgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmZ1bGxKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzMpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9LHtcInJcIjpcIldhdGVybWVsb25cIn1dYCwgJ0Z1bGxKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzXS5jcm9zc0pvaW5fcV8oWzUsIDZdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlIGpvaW4gY29sbGVjdGlvbiBpc24ndCBjb21wbGV0ZSB3aXRob3V0IGEgY3Jvc3Mgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM0ID0gWzIsIDNdLmNyb3NzSm9pbl9xXyhbNSwgNl0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNCkgPT09IGBbe1wibFwiOjIsXCJyXCI6NX0se1wibFwiOjIsXCJyXCI6Nn0se1wibFwiOjMsXCJyXCI6NX0se1wibFwiOjMsXCJyXCI6Nn1dYCwgJ0Nyb3NzSm9pbiBoZWxwZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiR3JvdXBKb2luIGlzIGEgd2VpcmQgb25lIHRoYXQgc291bmRzIGxpa2UgYW5vdGhlciBjdXN0b20gbWV0aG9kLCBidXQgdGhpcyBvbmUgY29tZXMgZnJvbSBNaWNyb3NvZnQuIEEgZ3JvdXAgam9pbiBpcyBsaWtlIGEgY29tYmluYXRpb24gb2Ygb3V0ZXIgam9pbiBhbmQgaGFsZiBhIGdyb3VwQnkuIFRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIGFyZSBqb2luZWQgYW5kIHRoZW4gdGhlIHJpZ2h0IHNpZGUgaXMgZ3JvdXBlZCBvbiB0aGUgam9pbmluZyBrZXkuIElmIG5vdGhpbmcgaXMgb24gdGhlIHJpZ2h0LCB0aGUgZ3JvdXAgbGlzdCBpcyBlbXB0eVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnQXZlcmFnZScsICdBbHBoYWJldCcsICdDYXJ0b2dyYXBoZXInLCAnYy13cm9uZyddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pKSAvLyBqb2luIG9uIGZpcnN0IGxldHRlcnMgYW5kIGdyb3VwIHJpZ2h0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzUgPSBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnQXZlcmFnZScsICdBbHBoYWJldCcsICdDYXJ0b2dyYXBoZXInLCAnYy13cm9uZyddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNSkgPT09IGBbe1wid29yZFwiOlwiQXBwbGVcIixcImFsc29NYXRjaGluZ1wiOltcIkF2ZXJhZ2VcIixcIkFscGhhYmV0XCJdfSx7XCJ3b3JkXCI6XCJCYW5hbmFcIixcImFsc29NYXRjaGluZ1wiOltdfSx7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkNhbnRlbG91cGVcIixcImFsc29NYXRjaGluZ1wiOltcIkNhcnRvZ3JhcGhlclwiXX1dYCwgJ0dyb3VwSm9pbiBqb2lucyBhbmQgZ3JvdXBzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdCYW5hbmEnLCAnQXBwbGUnLCAnQ2FudGVsb3VwZSddLmdyb3VwSm9pbl9xXyhbJ2F2ZXJhZ2UnLCAnQWxwaGFiZXQnLCAnY2FydG9ncmFwaGVyJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSksIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b1VwcGVyQ2FzZSgpID09PSB5LnRvVXBwZXJDYXNlKCkgfSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNiA9IFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydhdmVyYWdlJywgJ0FscGhhYmV0JywgJ2NhcnRvZ3JhcGhlciddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9VcHBlckNhc2UoKSA9PT0geS50b1VwcGVyQ2FzZSgpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM2KSA9PT0gYFt7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiYXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkJhbmFuYVwiLFwiYWxzb01hdGNoaW5nXCI6W119LHtcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJhdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQ2FudGVsb3VwZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiY2FydG9ncmFwaGVyXCJdfV1gLCAnR3JvdXAgam9pbiB3aXRoIGN1c3RvbSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddKSAvLyB3aWxsIHJldHVybiAzIHR1cGxlcywgWzEsNV0sIFsyLDZdLCBhbmQgWzMsN10sIG9uZSBmcm9tIGVhY2ggc2VxdWVuY2UgaW4gb3JkZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNyA9IFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNykgPT09IGBbWzEsNV0sWzIsNl0sWzMsN11dYCwgJ1ppcCB0d28gc2VxdWVuY2VzIGludG8gYSBzZXF1ZW5jZSBvZiB0dXBsZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgWzgsIDksIDEwLCAxMV0pIC8vIGNhbiB6aXAgYSB0aGlyZCB0dXBsZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM4ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sIFs4LCA5LCAxMCwgMTFdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzOCkgPT09IGBbWzEsNSw4XSxbMiw2LDldLFszLDcsMTBdXWAsICdaaXAgdGhyZWUgc2VxdWVuY2VzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sICh4LCB5KSA9PiB4ICogeSkgLy8gaW4gcGxhY2Ugb2YgdGhlIHRoaXJkIHR1cGxlIHlvdSBjYW4gc2VuZCBhIGZ1bmN0aW9uIHRoYXQgY29tYmluZXMgdGhlIGZpcnN0IDJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzOSA9IFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddLCAoeCwgeSkgPT4geCAqIHkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM5KSA9PT0gYFtbMSw1LDVdLFsyLDYsMTJdLFszLDcsMjFdXWAsICdaaXAgdHdvIHNlcXVlbmNlcyBhbmQgYSB2aXJ0dWFsIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDYgPSBUZXN0MDA2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0SGVhZGVyXzEgPSByZXF1aXJlKFwiLi9UZXN0SGVhZGVyXCIpO1xuY29uc3QgQ29uc29sZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0NvbnNvbGVWaWV3XCIpO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jbGFzcyBUZXN0Q2FzZVZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXcgVGVzdEhlYWRlcl8xLlRlc3RIZWFkZXIodmlld01vZGVsKSk7XG4gICAgICAgIHRoaXMuY29uc29sZSA9IG5ldyBDb25zb2xlVmlld18xLkNvbnNvbGVWaWV3KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb25zb2xlKTtcbiAgICAgICAgLy8gTm90ZTogVGhpcyBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIERPTSBieSB0aGUgUGFnZVJvdXRlciBpbW1lZGlhdGVseSBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICAgIC8vIE5vdGhpbmcgaW4gdGhlIGluaGVyaXRpbmcgY2xhc3MgY2FuIHJlZmVyZW5jZSB0aGlzIGNvbXBvbmVudCB1bnRpbCBhZnRlciBpdCBpcyBjb25zdHJ1Y3RlZC5cbiAgICAgICAgLy8gSGVyZSB3ZSBkb24ndCBjYXJlLlxuICAgICAgICB0aGlzLnRlc3RDYXNlKCk7XG4gICAgfVxuICAgIGxvZyh0aGluZywgcmVzdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyh0aGluZywgcmVzdWx0KTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDYXNlVmlldyA9IFRlc3RDYXNlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jbGFzcyBUZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBkZXNjcmlwdGlvbkh0bWwgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IEljaGlnb18xLmVzY2FwZUh0bWwobmFtZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkh0bWw7XG4gICAgICAgIHRoaXMudGVzdE51bWJlciA9IEljaGlnb18xLlBhZ2VSb3V0ZXIucGFyYW1zLmdldCgnaWQnKSB8fCAnPyc7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q2FzZVZpZXdNb2RlbCA9IFRlc3RDYXNlVmlld01vZGVsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RIZWFkZXIgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHZtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICh2bS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKEljaGlnb18xLnBhcmFncmFwaChgPGgxPlRlc3QgJHt2bS50ZXN0TnVtYmVyfTogJHt2bS5uYW1lfTwvaDE+YCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChJY2hpZ29fMS5zcGFuKHZtLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3RIZWFkZXIgPSBUZXN0SGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RiZW5jaFZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpZDogJ3Rlc3QtYmVuY2gnLFxuICAgICAgICAgICAgaW5uZXJIdG1sOiBgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGVzdC1saW5rXCI+UHJldmlvdXMgVGVzdDwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRlc3RIZWFkZXJcIj5UZXN0ICMwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXN0LWxpbmtcIiBkYXRhLW5leHQ9XCIxXCI+TmV4dCBUZXN0PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxsYXlvdXQtYm9keT48L2xheW91dC1ib2R5PmBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGhkciA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdEhlYWRlcicpO1xuICAgICAgICBpZiAoaGRyKSB7XG4gICAgICAgICAgICBoZHIuaW5uZXJIVE1MID0gXCJUZXN0ICNcIiArIEljaGlnb18xLlBhZ2VSb3V0ZXIubWF0Y2hlZFJvdXRlLnBhcmFtcy5nZXQoJ2lkJykgfHwgJzAnO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGFnZXIgdG8gZ28gdGhyb3VnaCB0ZXN0cy5cbiAgICAgICAgZm9yIChjb25zdCBsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVzdC1saW5rJykpIHtcbiAgICAgICAgICAgIGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvdG9OZXh0VGVzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnb3RvTmV4dFRlc3QoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihJY2hpZ29fMS5QYWdlUm91dGVyLm1hdGNoZWRSb3V0ZS5wYXJhbXMuZ2V0KCdpZCcpIHx8ICcwJyk7XG4gICAgICAgIGxldCBuZXh0aWQ7XG4gICAgICAgIGlmIChldnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5leHQpIHtcbiAgICAgICAgICAgIG5leHRpZCA9IGlkICsgMTtcbiAgICAgICAgICAgIC8vIEF0IHRoZSBtb21lbnQsIHRoZXJlJ3MgZXhhY3RseSBvbmUgcm91dGUgcGVyIHRlc3QsIHNvIHdlIGNhbiBjaGVhcGx5IGtub3cgd2UncmUgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy8gZXZlbiB3aXRob3V0IGFueSBjb25maWd1cmF0aW9uIGZvciB0aGUgdGVzdHMgYmVpbmcgaW4gdGhpcyBjbGFzcy4gVGhpcyBpcyBhIGNoZWF0LCB0aG91Z2gsXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHdlIGNvdWxkIGVhc2lseSBoYXZlIGFkZGVkIHNvbWUgb3RoZXIgcm91dGVzLlxuICAgICAgICAgICAgaWYgKG5leHRpZCA+PSBJY2hpZ29fMS5QYWdlUm91dGVyLmFsbFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXh0aWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dGlkID0gaWQgLSAxO1xuICAgICAgICAgICAgaWYgKG5leHRpZCA8IDApIHtcbiAgICAgICAgICAgICAgICBuZXh0aWQgPSBJY2hpZ29fMS5QYWdlUm91dGVyLmFsbFJvdXRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhkciA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdEhlYWRlcicpO1xuICAgICAgICBpZiAoaGRyKSB7XG4gICAgICAgICAgICBoZHIuaW5uZXJIVE1MID0gXCJUZXN0ICNcIiArIG5leHRpZDtcbiAgICAgICAgfVxuICAgICAgICBJY2hpZ29fMS5QYWdlUm91dGVyLnJvdXRlKCd0ZXN0LycgKyBuZXh0aWQpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdGJlbmNoVmlldyA9IFRlc3RiZW5jaFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGFzc2VydCh0ZXN0LCBtZXNzYWdlKSB7XG4gICAgaWYgKCF0ZXN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQnKTtcbiAgICB9XG59XG5leHBvcnRzLmFzc2VydCA9IGFzc2VydDtcbiJdfQ==
