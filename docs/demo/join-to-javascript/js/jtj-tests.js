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
        this._sorters.push({ orderBy, comparer, descending: descending });
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
        this._sorters.push({ orderBy, comparer, descending: false });
        return this;
    }
    thenByDescending_q_(orderBy, comparer) {
        if (!orderBy) {
            orderBy = ((o) => o);
        }
        this._sorters.push({ orderBy, comparer, descending: true });
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
 */
function any_q_(filter) {
    for (const item of this) {
        if (!filter) {
            return true;
        }
        if (filter(item)) {
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
    for (const item of this) {
        let tmp;
        if (selectFunction) {
            tmp = selectFunction(item);
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(tmp)) {
                continue;
            }
        }
        else {
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(item)) {
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
        throw new Error("Sequence contains no elements");
    }
    return sum / count;
}
exports.average = average;

},{"../Types/NoneType":74}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * chunk_q_: splits the elements of a sequence into chunks of size at most size
 */
function chunk(size) {
    const newenum = this._extend(function* _chunk(data) {
        if (!size || size <= 1) {
            throw new Error("Argument out of range");
        }
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
    return newenum;
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
/**
 * empty_q_: Returns an empty IEnumerable<T> that has the specified type argument.
 * Note that types are typescript-only fictitious entities that aren't emitted.
 */
function empty() {
    return [];
}
exports.empty = empty;

},{}],23:[function(require,module,exports){
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
 * except_q_: Produces the set difference of two sequences based on keys (distinct keys) returned by a key selector function.
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
 */
function first(matchFunction) {
    for (const item of this) {
        if (!matchFunction) {
            return item;
        }
        else if (matchFunction(item)) {
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
    for (const item of this) {
        if (!tester) {
            return item;
        }
        else if (tester(item)) {
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
        // We need a place to track a;l items in the right that got sent
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
            for (const rightItem of rightGen) {
                const leftKey = firstKeySelector(leftItem);
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
 */
function last(matchFunction) {
    let found = false;
    let lastItem;
    for (const item of this) {
        if (!matchFunction) {
            found = true;
            lastItem = item;
        }
        else if (matchFunction(item)) {
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
    for (const item of this) {
        if (!tester) {
            found = true;
            lastItem = item;
        }
        else if (tester(item)) {
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
 * minBy_q_: Returns the maximum value in a sequence using a key selector function.
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
            for (const rightItem of rightGen) {
                const leftKey = firstKeySelector(leftItem);
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
 */
function single(matchFunction) {
    let found = false;
    let foundItem;
    for (const item of this) {
        if (!matchFunction) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (matchFunction(item)) {
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
    for (const item of this) {
        if (!tester) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (tester(item)) {
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
            const valueToAdd = +selectFunction(item);
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
 * skipLast_q_: Returns a new enumerable collection that contains the last count elements from source
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
 * union_q_: concatenates two sequences returning the set sequence  based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
function unionBy(second, keySelector, comparer) {
    if (!second) {
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
            this.log("numberSets.selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `(#${idx}) ${m}`), (s, res) => `${s.type} ${res}`) // output function can take index as 2nd parameter");
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
            const test07 = ['a', 'b', 1, 2].empty_q_();
            this.log(test07, true);
            assert_1.assert(test07.length === 0, 'Empty() returns empty array');
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].chunk_q_(3) // break array into chunks of provided size`);
            const test08 = [1, 2, 3, 4, 5, 6, 7, 8].chunk_q_(3).toArray_q_();
            this.log(test08, true);
            assert_1.assert(JSON.stringify(test08) === "[[1,2,3],[4,5,6],[7,8]]", "Chunk breaks iterable into chunks");
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
            this.log("const forEachTest: string[] = [];\n[1, 2, 3].forEach((item, idx) => { forEachTest.push(`${idx}=${item}`); });");
            const forEachTest = [];
            [1, 2, 3].forEach((item, idx) => {
                forEachTest.push(`${idx}=${item}`);
            });
            this.log(forEachTest, true);
            assert_1.assert(forEachTest.sequenceEqual_q_(["0=1", "1=2", "2=3"]), "ForEach looped through iterable");
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
            this.log(`[1, 2, 3].contains_q_(3) // is element in sequence`);
            const test09 = [1, 2, 3].contains_q_(3);
            this.log(test09, true);
            assert_1.assert(test09, 'Contains with match');
            this.log(`[1, 2, 3].contains_q_(4) // no match`);
            const test10 = [1, 2, 3].contains_q_(4);
            this.log(test10, true);
            assert_1.assert(!test10, 'Contains with no match');
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
            this.log(`[1, 3, 4, 4].average_q_() // 3 ... throws if empty, can't divide by zero`);
            const test17 = [1, 3, 4, 4].average_q_();
            this.log(test17, true);
            assert_1.assert(test17 === 3, 'Average sequence');
            this.log(`[2, 3, 4].first_q_() // 2`);
            const test18 = [2, 3, 4].first_q_();
            this.log(test18, true);
            assert_1.assert(test18 === 2, 'First in sequence');
            // should return 4
            this.log(`[2, 3, 4].first_q_(q => q > 3) // can take a filter function, same as where(func).first()`);
            const test19 = [2, 3, 4].first_q_(q => q > 3);
            this.log(test19, true);
            assert_1.assert(test19 === 4, 'First with filter');
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
            const test20 = [2, 3, 4].firstOrDefault_q_(q => q > 100, -1);
            this.log(test20, true);
            assert_1.assert(test20 === -1, 'FirstOrDefault with default');
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
            const test24 = ['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_(q => q[0] === "X", "default");
            this.log(test24, true);
            assert_1.assert(test24 === 'default', 'LastOrDefault with default');
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
            this.log(`[1, 2, 3, 4].single_q_(q => q < 3) // single throws if there are multiple matches`);
            let throw4 = false;
            try {
                [1, 2, 3, 4].single_q_(q => q < 3);
            }
            catch (_c) {
                throw4 = true;
            }
            assert_1.assert(throw4, 'Single throws when multiple returned');
            this.log(`[1, 2, 3, 4].single_q_(q => q > 10000) // Like first() and last(), single() throws on an empty sequence`);
            let throw3 = false;
            try {
                [1, 2].single_q_();
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
            const test28 = [1, 2, 3, 4].singleOrDefault_q_(q => q > 1000, -1);
            this.log(test28, true);
            assert_1.assert(test28 === -1, "Default returned for singleOrDefault");
            let throw6 = false;
            try {
                [1, 2, 3, 4].singleOrDefault_q_(q => q % 2 === 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdGVwLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiLCJ0ZXN0cy9Db25zb2xlVmlldy5qcyIsInRlc3RzL0ljaGlnby5qcyIsInRlc3RzL1Byb2dyYW0uanMiLCJ0ZXN0cy9UZXN0MDAwLmpzIiwidGVzdHMvVGVzdDAwMS5qcyIsInRlc3RzL1Rlc3QwMDIuanMiLCJ0ZXN0cy9UZXN0MDAzLmpzIiwidGVzdHMvVGVzdDAwNC5qcyIsInRlc3RzL1Rlc3QwMDUuanMiLCJ0ZXN0cy9UZXN0MDA2LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3TW9kZWwuanMiLCJ0ZXN0cy9UZXN0SGVhZGVyLmpzIiwidGVzdHMvVGVzdGJlbmNoVmlldy5qcyIsInRlc3RzL2Fzc2VydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBNYWtlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9NYWtlR2VuZXJhdG9yXCIpO1xuY29uc3QgQWdncmVnYXRlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FnZ3JlZ2F0ZVwiKTtcbmNvbnN0IEFsbF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BbGxcIik7XG5jb25zdCBBbnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQW55XCIpO1xuY29uc3QgQXBwZW5kXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FwcGVuZFwiKTtcbmNvbnN0IEF2ZXJhZ2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQXZlcmFnZVwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NodW5rXCIpO1xuY29uc3QgQ29uY2F0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvbmNhdFwiKTtcbmNvbnN0IENvbnRhaW5zXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvbnRhaW5zXCIpO1xuY29uc3QgQ291bnRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ291bnRcIik7XG5jb25zdCBDcm9zc0pvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ3Jvc3NKb2luXCIpO1xuY29uc3QgRGVmYXVsdElmRW1wdHlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHlcIik7XG5jb25zdCBEaXN0aW5jdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EaXN0aW5jdFwiKTtcbmNvbnN0IERpc3RpbmN0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGlzdGluY3RCeVwiKTtcbmNvbnN0IEVsZW1lbnRBdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbGVtZW50QXRcIik7XG5jb25zdCBFbGVtZW50QXRPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRWxlbWVudEF0T3JEZWZhdWx0XCIpO1xuY29uc3QgRW1wdHlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRW1wdHlcIik7XG5jb25zdCBFeGNlcHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRXhjZXB0XCIpO1xuY29uc3QgRXhjZXB0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRXhjZXB0QnlcIik7XG5jb25zdCBGaXJzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GaXJzdFwiKTtcbmNvbnN0IEZpcnN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZpcnN0T3JEZWZhdWx0XCIpO1xuY29uc3QgRm9yRWFjaF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Gb3JFYWNoXCIpO1xuY29uc3QgRnVsbEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRnVsbEpvaW5cIik7XG5jb25zdCBHcm91cEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0dyb3VwQnlcIik7XG5jb25zdCBHcm91cEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvR3JvdXBKb2luXCIpO1xuY29uc3QgSW5uZXJKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0lubmVySm9pblwiKTtcbmNvbnN0IEludGVyc2VjdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9JbnRlcnNlY3RcIik7XG5jb25zdCBJbnRlcnNlY3RCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9JbnRlcnNlY3RCeVwiKTtcbmNvbnN0IEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSm9pblwiKTtcbmNvbnN0IExhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGFzdFwiKTtcbmNvbnN0IExhc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGFzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IExlZnRKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xlZnRKb2luXCIpO1xuY29uc3QgTG9uZ0NvdW50XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xvbmdDb3VudFwiKTtcbmNvbnN0IE1heF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhcIik7XG5jb25zdCBNYXhCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhCeVwiKTtcbmNvbnN0IE1heE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHRcIik7XG5jb25zdCBNaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluXCIpO1xuY29uc3QgTWluQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluQnlcIik7XG5jb25zdCBNaW5PckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWluT3JEZWZhdWx0XCIpO1xuY29uc3QgT2ZUeXBlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL09mVHlwZVwiKTtcbmNvbnN0IE91dGVySm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9PdXRlckpvaW5cIik7XG5jb25zdCBQcmVwZW5kXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1ByZXBlbmRcIik7XG5jb25zdCBSZXBsaWNhdGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmVwbGljYXRlXCIpO1xuY29uc3QgUmV2ZXJzZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SZXZlcnNlXCIpO1xuY29uc3QgUmlnaHRKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JpZ2h0Sm9pblwiKTtcbmNvbnN0IFNlbGVjdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZWxlY3RcIik7XG5jb25zdCBTZWxlY3RNYW55XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlbGVjdE1hbnlcIik7XG5jb25zdCBTZXF1ZW5jZUVxdWFsXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWxcIik7XG5jb25zdCBTaW5nbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2luZ2xlXCIpO1xuY29uc3QgU2luZ2xlT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NpbmdsZU9yRGVmYXVsdFwiKTtcbmNvbnN0IFNraXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcFwiKTtcbmNvbnN0IFNraXBMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBMYXN0XCIpO1xuY29uc3QgU2tpcFdoaWxlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBXaGlsZVwiKTtcbmNvbnN0IFN0ZXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU3RlcFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TdW1cIik7XG5jb25zdCBUYWtlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VcIik7XG5jb25zdCBUYWtlTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlTGFzdFwiKTtcbmNvbnN0IFRha2VXaGlsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlV2hpbGVcIik7XG5jb25zdCBUb0NvbnZlcnNpb25zXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1RvQ29udmVyc2lvbnNcIik7XG5jb25zdCBVbmlvbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9VbmlvblwiKTtcbmNvbnN0IFVuaW9uQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVW5pb25CeVwiKTtcbmNvbnN0IFdoZXJlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1doZXJlXCIpO1xuY29uc3QgWmlwXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1ppcFwiKTtcbmNsYXNzIEVudW1lcmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBoYWNreSBidXQgbGV0cyBtZSBzcGxpdCB0aGlzIEdJQU5UIGNsYXNzIHVwIGludG8gYSBmZXcgZG96ZW4gZmlsZXMuXG4gICAgICAgIHRoaXMuYWdncmVnYXRlX3FfID0gQWdncmVnYXRlXzEuYWdncmVnYXRlO1xuICAgICAgICB0aGlzLmFsbF9xXyA9IEFsbF8xLmFsbDtcbiAgICAgICAgdGhpcy5hbnlfcV8gPSBBbnlfMS5hbnlfcV87XG4gICAgICAgIHRoaXMuYXBwZW5kX3FfID0gQXBwZW5kXzEuYXBwZW5kO1xuICAgICAgICB0aGlzLmF2ZXJhZ2VfcV8gPSBBdmVyYWdlXzEuYXZlcmFnZTtcbiAgICAgICAgLy8gVGhlcmUncyBubyB3YXkgdG8gZG8gKE51bWJlcilmb28gaW4gSmF2YVNjcmlwdCwgYW5kIGNhc3RpbmcgaW4gVHlwZVNjcmlwdCBpc24ndCBlbWl0dGVkLlxuICAgICAgICAvLyBTbyB0aGUgY2FzdCBpcyBiZWluZyBhbGlhc2VkIHRvIHNlbGVjdCBzbyB5b3UgY2FuIGRvIGZvby5jYXN0KG51bSA9PiBOdW1iZXIobnVtKSlcbiAgICAgICAgdGhpcy5jYXN0X3FfID0gU2VsZWN0XzEuc2VsZWN0O1xuICAgICAgICB0aGlzLmNodW5rX3FfID0gQ2h1bmtfMS5jaHVuaztcbiAgICAgICAgdGhpcy5jb25jYXRfcV8gPSBDb25jYXRfMS5jb25jYXQ7XG4gICAgICAgIHRoaXMuY29udGFpbnNfcV8gPSBDb250YWluc18xLmNvbnRhaW5zO1xuICAgICAgICB0aGlzLmNvdW50X3FfID0gQ291bnRfMS5jb3VudDtcbiAgICAgICAgdGhpcy5jcm9zc0pvaW5fcV8gPSBDcm9zc0pvaW5fMS5jcm9zc0pvaW47XG4gICAgICAgIHRoaXMuZGVmYXVsdElmRW1wdHlfcV8gPSBEZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5O1xuICAgICAgICB0aGlzLmRpc3RpbmN0X3FfID0gRGlzdGluY3RfMS5kaXN0aW5jdDtcbiAgICAgICAgdGhpcy5kaXN0aW5jdEJ5X3FfID0gRGlzdGluY3RCeV8xLmRpc3RpbmN0Qnk7XG4gICAgICAgIHRoaXMuZWxlbWVudEF0X3FfID0gRWxlbWVudEF0XzEuZWxlbWVudEF0O1xuICAgICAgICB0aGlzLmVsZW1lbnRBdE9yRGVmYXVsdF9xXyA9IEVsZW1lbnRBdE9yRGVmYXVsdF8xLmVsZW1lbnRBdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5lbXB0eV9xXyA9IEVtcHR5XzEuZW1wdHk7XG4gICAgICAgIHRoaXMuZXhjZXB0X3FfID0gRXhjZXB0XzEuZXhjZXB0O1xuICAgICAgICB0aGlzLmV4Y2VwdEJ5X3FfID0gRXhjZXB0QnlfMS5leGNlcHRCeTtcbiAgICAgICAgdGhpcy5maXJzdF9xXyA9IEZpcnN0XzEuZmlyc3Q7XG4gICAgICAgIHRoaXMuZmlyc3RPckRlZmF1bHRfcV8gPSBGaXJzdE9yRGVmYXVsdF8xLmZpcnN0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmZvckVhY2hfcV8gPSBGb3JFYWNoXzEuZm9yRWFjaDtcbiAgICAgICAgdGhpcy5mdWxsSm9pbl9xXyA9IEZ1bGxKb2luXzEuZnVsbEpvaW47XG4gICAgICAgIHRoaXMuZ3JvdXBCeV9xXyA9IEdyb3VwQnlfMS5ncm91cEJ5O1xuICAgICAgICB0aGlzLmdyb3VwSm9pbl9xXyA9IEdyb3VwSm9pbl8xLmdyb3VwSm9pbjtcbiAgICAgICAgdGhpcy5pbm5lckpvaW5fcV8gPSBJbm5lckpvaW5fMS5pbm5lckpvaW47XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0X3FfID0gSW50ZXJzZWN0XzEuaW50ZXJzZWN0O1xuICAgICAgICB0aGlzLmludGVyc2VjdEJ5X3FfID0gSW50ZXJzZWN0QnlfMS5pbnRlcnNlY3RCeTtcbiAgICAgICAgdGhpcy5qb2luX3FfID0gSm9pbl8xLmpvaW47XG4gICAgICAgIHRoaXMubGFzdF9xXyA9IExhc3RfMS5sYXN0O1xuICAgICAgICB0aGlzLmxhc3RPckRlZmF1bHRfcV8gPSBMYXN0T3JEZWZhdWx0XzEubGFzdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5sZWZ0Sm9pbl9xXyA9IExlZnRKb2luXzEubGVmdEpvaW47XG4gICAgICAgIHRoaXMubG9uZ0NvdW50X3FfID0gTG9uZ0NvdW50XzEubG9uZ0NvdW50O1xuICAgICAgICB0aGlzLm1heF9xXyA9IE1heF8xLm1heDtcbiAgICAgICAgdGhpcy5tYXhCeV9xXyA9IE1heEJ5XzEubWF4Qnk7XG4gICAgICAgIHRoaXMubWF4T3JEZWZhdWx0X3FfID0gTWF4T3JEZWZhdWx0XzEubWF4T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLm1pbl9xXyA9IE1pbl8xLm1pbjtcbiAgICAgICAgdGhpcy5taW5CeV9xXyA9IE1pbkJ5XzEubWluQnk7XG4gICAgICAgIHRoaXMubWluT3JEZWZhdWx0X3FfID0gTWluT3JEZWZhdWx0XzEubWluT3JEZWZhdWx0O1xuICAgICAgICB0aGlzLm9mVHlwZV9xXyA9IE9mVHlwZV8xLm9mVHlwZTtcbiAgICAgICAgdGhpcy5vdXRlckpvaW5fcV8gPSBPdXRlckpvaW5fMS5vdXRlckpvaW47XG4gICAgICAgIHRoaXMucHJlcGVuZF9xXyA9IFByZXBlbmRfMS5wcmVwZW5kO1xuICAgICAgICB0aGlzLnJlcGxpY2F0ZV9xXyA9IFJlcGxpY2F0ZV8xLnJlcGxpY2F0ZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlX3FfID0gUmV2ZXJzZV8xLnJldmVyc2U7XG4gICAgICAgIHRoaXMucmlnaHRKb2luX3FfID0gUmlnaHRKb2luXzEucmlnaHRKb2luO1xuICAgICAgICB0aGlzLnNlbGVjdF9xXyA9IFNlbGVjdF8xLnNlbGVjdDtcbiAgICAgICAgdGhpcy5zZWxlY3RNYW55X3FfID0gU2VsZWN0TWFueV8xLnNlbGVjdE1hbnk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VFcXVhbF9xXyA9IFNlcXVlbmNlRXF1YWxfMS5zZXF1ZW5jZUVxdWFsO1xuICAgICAgICB0aGlzLnNpbmdsZV9xXyA9IFNpbmdsZV8xLnNpbmdsZTtcbiAgICAgICAgdGhpcy5zaW5nbGVPckRlZmF1bHRfcV8gPSBTaW5nbGVPckRlZmF1bHRfMS5zaW5nbGVPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuc2tpcF9xXyA9IFNraXBfMS5za2lwO1xuICAgICAgICB0aGlzLnNraXBMYXN0X3FfID0gU2tpcExhc3RfMS5za2lwTGFzdDtcbiAgICAgICAgdGhpcy5za2lwV2hpbGVfcV8gPSBTa2lwV2hpbGVfMS5za2lwV2hpbGU7XG4gICAgICAgIHRoaXMuc3RlcF9xXyA9IFN0ZXBfMS5zdGVwO1xuICAgICAgICB0aGlzLnN1bV9xXyA9IFN1bV8xLnN1bTtcbiAgICAgICAgdGhpcy50YWtlX3FfID0gVGFrZV8xLnRha2U7XG4gICAgICAgIHRoaXMudGFrZUxhc3RfcV8gPSBUYWtlTGFzdF8xLnRha2VMYXN0O1xuICAgICAgICB0aGlzLnRha2VXaGlsZV9xXyA9IFRha2VXaGlsZV8xLnRha2VXaGlsZTtcbiAgICAgICAgdGhpcy50b0FycmF5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvQXJyYXk7XG4gICAgICAgIHRoaXMudG9EaWN0aW9uYXJ5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvRGljdGlvbmFyeTtcbiAgICAgICAgdGhpcy50b0hhc2hTZXRfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9IYXNoU2V0O1xuICAgICAgICB0aGlzLnRvTGlzdF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0FycmF5O1xuICAgICAgICB0aGlzLnRvTG9va3VwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTG9va3VwO1xuICAgICAgICB0aGlzLnRvTWFwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTWFwO1xuICAgICAgICB0aGlzLnVuaW9uX3FfID0gVW5pb25fMS51bmlvbjtcbiAgICAgICAgdGhpcy51bmlvbkJ5X3FfID0gVW5pb25CeV8xLnVuaW9uQnk7XG4gICAgICAgIHRoaXMud2hlcmVfcV8gPSBXaGVyZV8xLndoZXJlO1xuICAgICAgICB0aGlzLnppcF9xXyA9IFppcF8xLnppcDtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5faXNDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gTm9ybWFsbHksIHdlJ2QgZ28gYWhlYWQgYW5kIHNheSB0aGUgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXksIG5vdGhpbmcgYnV0LlxuICAgICAgICAvLyBCdXQgbGV0J3MgYmUgZmxleGlibGUgYW5kIGFsbG93IGFueXRoaW5nLiBJZiBpdCdzIG5vdCBpdGVyYWJsZSwgdGhlbiBpdCdsbCBiZWNvbWUgYSBvbmUtaXRlbSBpdGVyYXRvci5cbiAgICAgICAgdGhpcy5fc291cmNlID0gdGhpcy5fZW5zdXJlQmFja3VwKE1ha2VHZW5lcmF0b3JfMS5tYWtlR2VuZXJhdG9yKGRhdGEpKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmdlX3FfKHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JhbmdlKCkge1xuICAgICAgICAgICAgbGV0IGkgPSBzdGFydDtcbiAgICAgICAgICAgIGNvbnN0IG1heHZhbCA9IHN0YXJ0ICsgbGVuO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG4gICAgc3RhdGljIHJlcGVhdF9xXyhlbGVtZW50LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JlcGVhdCgpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgfVxuICAgIGdldCBfZGF0YSgpIHtcbiAgICAgICAgLy8gVGhlcmUncyBub3QgYSBsb3Qgb2YgY2FsbCBmb3Igc2VsZWN0aW5nIGZyb20gYW4gZW51bWVyYWJsZSBtb3JlIHRoYW4gb25jZSwgYnV0IHNvbWVvbmUgbWlnaHRcbiAgICAgICAgLy8gd2FudCB0byBkbyBpdC4gSW4gQyMgdGhlIG9ubHkgcmVhbCB0aW1lIHRoaXMgaGFwcGVucyBpcyB3aGVuIHlvdSB1c2UgdGhlIGRlYnVnZ2VyLCBidXQgaXQgZG9lcyBoYXBwZW4uXG4gICAgICAgIC8vIEJ1dCB3aGVuIGRhdGEgaGFzIGJlZW4gZmV0Y2hlZCBmcm9tIHRoZSBnZW5lcmF0b3IsIGl0IGJlY29tZXMgY2xvc2VkLCBhbmQgZXZlcnkgZ2VuZXJhdG9yIGluIGl0c1xuICAgICAgICAvLyBzb3VyY2UgaXMgYWxzbyBjbG9zZWQuIFRoaXMgaXMgYnVpbHQgaW4gdG8gSlMgYW5kIG5vdCBzb21ldGhpbmcgd2UgY2FuIGNoYW5nZS5cbiAgICAgICAgLy8gQnV0IHdlIGNhbiBjYWNoZSB0aGUgZGF0YSB3aGVuIHdlIGZldGNoIGl0IGFuZCByZXR1cm4gdGhlIGNhY2hlIGlmIGNsb3NlZC5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgICB9XG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4odmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlU2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnJldHVybih2YWx1ZSk7XG4gICAgfVxuICAgIHRocm93KGUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlc2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnRocm93KGUpO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICAvLyBCdXQgaXQncyBvayB3aXRoIHRoZSBleGFjdCBzYW1lIGNvZGUgaGVyZS4gR28gZmlndXJlLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLm5leHQoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICAvLyBXcml0aW5nIGFuIEVudW1lcmFibGUgdG8gSlNPTiBleGhhdXN0cyB0aGUgZW51bWVyYXRvci5cbiAgICAgICAgcmV0dXJuIFsuLi50aGlzXTtcbiAgICB9XG4gICAgdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgICAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgb3V0IHZhcnMgaW4gSlMgc28gd2UgaGF2ZSB0byB1c2UgYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBub3QgY2xvc2VkLCB0aGlzIGlzIGEgZ2VuZXJhdG9yLCBhbmQgd2UgY2FuJ3QgY291bnQgaXQgd2l0aG91dCBlbnVtZXJhdGluZyBpdC5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUaGlzIGhlbHBlciBhbGxvd3MgbWV0aG9kcyBkZWNsYXJlZCBpbiBvdGhlciBmaWxlcyB0byB1c2UgZ2VuZXJhdG9yIGZ1bmN0aW9ucyB3aXRob3V0IHJlZmVyZW5jaW5nIHRoaXMuX2RhdGEgKHJlcXVpcmluZyBpdFxuICAgIC8vIHRvIGJlIHB1YmxpYykgb3IgdXNpbmcgdGhlIChmdW5jdGlvbiooKSB7fSkoZGF0YSkgc3ludGF4LCB3aGljaCBpcyB1Z2x5LlxuICAgIF9leHRlbmQoZnVuYykge1xuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoZnVuYyh0aGlzKSk7XG4gICAgfVxuICAgICpfZW5zdXJlQmFja3VwKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzQ2xvc2VkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLkVudW1lcmFibGUgPSBFbnVtZXJhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGVcIik7XG5jbGFzcyBPcmRlcmVkRW51bWVyYWJsZSBleHRlbmRzIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB0aGlzLl9zb3J0ZXJzID0gW107XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nOiBkZXNjZW5kaW5nIH0pO1xuICAgIH1cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgZGF0YS4gVGhpcyBuZWVkcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3QsIGJlY2F1c2UgdGhlIGxhc3QgcmVjb3JkIGNvdWxkIGJlIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCBuZWVkcyB0byBnbyBmaXJzdC5cbiAgICAgICAgLy8gVHdvIHBvc3NpYmxlIGFwcHJvYWNoZXMgaGVyZS4gT25lIGlzIHRvIHJlcGVhdGVkbHkgYXR0YWNrIHRoZSBsaXN0LCBnb2luZyBhZnRlciB0aGUgbWluIHJlY29yZCBhbmRcbiAgICAgICAgLy8gcmV0dXJuaW5nIGl0LCB3aGljaCBpcyBoZWF2eSBvbiB0aGUgQ1BVIGJ1dCBsaWdodCBvbiBtZW1vcnksIG9yIHdoYXQgSSdtIGdvaW5nIHRvIGRvLCB3aGljaCBpcyBsb2FkXG4gICAgICAgIC8vIGFuIGFycmF5IGFuZCB1c2UgdGhlIGJ1aWx0LWluIHNvcnQoKSBtZXRob2QsIHdoaWNoIGlzIGhlYXZ5IG9uIG1lbW9yeSBidXQgbGlnaHQgb24gQ1BVLlxuICAgICAgICBsZXQgc29ydGluZ0Z1bmN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IGhhdCBvZiB0aGlzLl9zb3J0ZXJzKSB7XG4gICAgICAgICAgICBzb3J0aW5nRnVuY3Rpb24gPSBidWlsZFNvcnRlcihoYXQub3JkZXJCeSwgaGF0LmNvbXBhcmVyLCBoYXQuZGVzY2VuZGluZywgc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gWy4uLnRoaXMuX2RhdGFdLnNvcnQoc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNvcnRlZERhdGEpIHtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhlbkJ5X3FfKG9yZGVyQnksIGNvbXBhcmVyKSB7XG4gICAgICAgIGlmICghb3JkZXJCeSkge1xuICAgICAgICAgICAgb3JkZXJCeSA9ICgobykgPT4gbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhlbkJ5RGVzY2VuZGluZ19xXyhvcmRlckJ5LCBjb21wYXJlcikge1xuICAgICAgICBpZiAoIW9yZGVyQnkpIHtcbiAgICAgICAgICAgIG9yZGVyQnkgPSAoKG8pID0+IG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLk9yZGVyZWRFbnVtZXJhYmxlID0gT3JkZXJlZEVudW1lcmFibGU7XG5mdW5jdGlvbiBidWlsZFNvcnRlcihrZXlTZWxlY3RvciwgY29tcGFyZXIsIGRlc2NlbmRpbmcgPSBmYWxzZSwgaW5pdGlhbCkge1xuICAgIGxldCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmRlZmF1bHRDb21wYXJlcjtcbiAgICB9XG4gICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF90aGVuQnkoeCwgeSkge1xuICAgICAgICAgICAgY29uc3Qga2V5MSA9IGtleVNlbGVjdG9yKHgpO1xuICAgICAgICAgICAgY29uc3Qga2V5MiA9IGtleVNlbGVjdG9yKHkpO1xuICAgICAgICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbCh4LCB5KSB8fCBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWwoeCwgeSkgfHwgY29tcGFyZShrZXkxLCBrZXkyKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfb3JkZXJCeSh4LCB5KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkxID0ga2V5U2VsZWN0b3IoeCk7XG4gICAgICAgICAgICBjb25zdCBrZXkyID0ga2V5U2VsZWN0b3IoeSk7XG4gICAgICAgICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoa2V5MSwga2V5Mik7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG4vKipcbiAqIEhlbHBlciB0byBhZGQgZXh0ZW5zaW9uIG1ldGhvZHMgdG8gQXJyYXkgYW5kIFNldC4gVGhlc2UgbWV0aG9kcyBkdXBsaWNhdGUgdGhlIG5hbWVzIGluIEVudW1lcmFibGUsIGJ1dCB3aGF0IHRoZXkgZG8gaXMgY3JlYXRlIGEgbmV3XG4gKiBFbnVtZXJhYmxlIGFuZCB0aGVuIHBhc3MgdGhlIGNhbGwgb253YXJkLCBzbyBpdCBzZWVtcyBhcyBpZiB0aGUgYXJyYXkgaXMgRW51bWVyYWJsZS5cbiAqXG4gKiBUaGlzIGNhbiBiZSBtb2RpZmllZCB0byBzdXBwb3J0IGFueSBvYmplY3QuIElmIHlvdSBkbyBzbywgcmVtZW1iZXIgdG8gc2V0IHdyaXRhYmxlOiB0cnVlIHNvIEVudW1lcmFibGUgY2FuIGhhdmUgaXRzIG93blxuICogaW1wbGVtZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiogbWFrZUdlbmVyYXRvcihpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVyID09PSBcInN0cmluZ1wiIHx8IGl0ZXJhYmxlR3VhcmQoaXRlcikpIHtcbiAgICAgICAgeWllbGQqIGl0ZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFycmF5TGlrZUd1YXJkKGl0ZXIpKSB7XG4gICAgICAgIHlpZWxkKiBBcnJheS5mcm9tKGl0ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgaXRlcjtcbiAgICB9XG59XG5leHBvcnRzLm1ha2VHZW5lcmF0b3IgPSBtYWtlR2VuZXJhdG9yO1xuZnVuY3Rpb24gaXRlcmFibGVHdWFyZChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogJiYgU3ltYm9sLml0ZXJhdG9yIGluIG9iajtcbn1cbmZ1bmN0aW9uIGFycmF5TGlrZUd1YXJkKG9iaikge1xuICAgIC8vIEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyBwZXJmZWN0IGJ1dCBJIGNhbid0IGZpbmQgYSB3YXkgdG8gdmFsaWRhdGUgdGhlIG90aGVyIHBhcnQgb2YgQXJyYXlMaWtlLCB0aGUga2V5LlxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAmJlxuICAgICAgICBcImxlbmd0aFwiIGluIG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBvYmoubGVuZ3RoID49IDA7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1ha2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL01ha2VHZW5lcmF0b3JcIik7XG4vKipcbiAqIEpTIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byByZXN0YXJ0IGEgZ2VuZXJhdG9yLCB3aGljaCBjYXVzZXMgYSBncmVhdCBkZWFsIG9mIHRyb3VibGUgd2hlbiB5b3UgbmVlZCB0byBjaGVjayBpdCBtdWx0aXBsZSB0aW1lcy5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgZG8gYW4gaW5uZXIgam9pbiwgeW91IG5lZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50IG9mIHRoZSBsZWZ0IHdpdGggZWFjaCBlbGVtZW50IG9mIHRoZSByaWdodC5cbiAqIFlvdSBuZWVkIHRoZSBhYmlsaXR5IHRvIHJlYnVpbGQgdGhlIGdlbmVyYXRvciBmcm9tIHRoZSBvcmlnaW5hbCBpdGVyYWJsZS4gQnV0IHRoZXJlIGlzbid0IGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBpdGVyYWJsZSBBTllXSEVSRS5cbiAqIEFzIGEgcmVzdWx0LCB0aGUgb25seSB3YXkgdG8gbWFrZSB0aGlzIHdvcmsgaXMgdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGRhdGEgYXMgeW91IGl0ZXJhdGUgaXQuXG4gKiBUaGlzIGNvdWxkIGRvdWJsZSB0aGUgYW1vdW50IG9mIHNwYWNlIG5lZWRlZCwgYnV0IGl0J3MgYSBsaW1pdGF0aW9uIG9mIHRoZSB0ZWNobm9sb2d5LlxuICogV2UgZG9uJ3QgYWN0dWFsbHkga25vdyBpZiBhIGdlbmVyYXRvciBpcyBiZWluZyB1c2VkLiBUaGUgdHlwZSBpcyBcIm9iamVjdC5cIiBTbyB5b3UgY291bGQgYmUgd2FzdGluZyBtZW1vcnkgYnkgdXNpbmcgdGhpcy4gTm8gd2F5IHRvIGtub3cuXG4gKi9cbmNsYXNzIFJlc3RhcnRhYmxlR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVyYWJsZSwgZmxleE1lbW9yeSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYmFja3VwID0gW107XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpdGVyYWJsZSwgdGhpcy5iYWNrdXApO1xuICAgICAgICB0aGlzLmZsZXhNZW1vcnkgPSBmbGV4TWVtb3J5O1xuICAgIH1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH1cbiAgICBhc1F1ZXJ5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuYXNRdWVyeWFibGUoKTtcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmxleE1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuYmFja3VwLnNsaWNlKDApO1xuICAgICAgICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpLCB0aGlzLmJhY2t1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yID0gTWFrZUdlbmVyYXRvcl8xLm1ha2VHZW5lcmF0b3IodGhpcy5iYWNrdXApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZXN0YXJ0YWJsZUdlbmVyYXRvciA9IFJlc3RhcnRhYmxlR2VuZXJhdG9yO1xuZnVuY3Rpb24qIGN5Y2xlR2VuZXJhdG9yKGl0ZXIsIGJhY2t1cCkge1xuICAgIGZvciAoY29uc3QgeCBvZiBpdGVyKSB7XG4gICAgICAgIGJhY2t1cC5wdXNoKHgpO1xuICAgICAgICB5aWVsZCB4O1xuICAgIH1cbn1cbmV4cG9ydHMuY3ljbGVHZW5lcmF0b3IgPSBjeWNsZUdlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZS9FbnVtZXJhYmxlXCIpO1xuY29uc3QgRXh0ZW5kXzEgPSByZXF1aXJlKFwiLi9FeHRlbmRcIik7XG5jb25zdCBBZ2dyZWdhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BZ2dyZWdhdGVcIik7XG5jb25zdCBBbGxfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbGxcIik7XG5jb25zdCBBbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbnlcIik7XG5jb25zdCBBcHBlbmRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BcHBlbmRcIik7XG5jb25zdCBBdmVyYWdlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQXZlcmFnZVwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ2h1bmtcIik7XG5jb25zdCBDb25jYXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db25jYXRcIik7XG5jb25zdCBDb250YWluc18xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvbnRhaW5zXCIpO1xuY29uc3QgQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db3VudFwiKTtcbmNvbnN0IENyb3NzSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Nyb3NzSm9pblwiKTtcbmNvbnN0IERlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHlcIik7XG5jb25zdCBEaXN0aW5jdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0XCIpO1xuY29uc3QgRGlzdGluY3RCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0QnlcIik7XG5jb25zdCBFbGVtZW50QXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRcIik7XG5jb25zdCBFbGVtZW50QXRPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRPckRlZmF1bHRcIik7XG5jb25zdCBFbXB0eV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VtcHR5XCIpO1xuY29uc3QgRXhjZXB0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRXhjZXB0XCIpO1xuY29uc3QgRXhjZXB0QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FeGNlcHRCeVwiKTtcbmNvbnN0IEZpcnN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRmlyc3RcIik7XG5jb25zdCBGaXJzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZpcnN0T3JEZWZhdWx0XCIpO1xuY29uc3QgRm9yRWFjaF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZvckVhY2hcIik7XG5jb25zdCBGdWxsSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Z1bGxKb2luXCIpO1xuY29uc3QgR3JvdXBCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0dyb3VwQnlcIik7XG5jb25zdCBHcm91cEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Hcm91cEpvaW5cIik7XG5jb25zdCBJbm5lckpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Jbm5lckpvaW5cIik7XG5jb25zdCBJbnRlcnNlY3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9JbnRlcnNlY3RcIik7XG5jb25zdCBJbnRlcnNlY3RCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ludGVyc2VjdEJ5XCIpO1xuY29uc3QgSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0pvaW5cIik7XG5jb25zdCBMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTGFzdFwiKTtcbmNvbnN0IExhc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0XCIpO1xuY29uc3QgTG9uZ0NvdW50XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTG9uZ0NvdW50XCIpO1xuY29uc3QgTWF4XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWF4XCIpO1xuY29uc3QgTWF4QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhCeVwiKTtcbmNvbnN0IE1heE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heE9yRGVmYXVsdFwiKTtcbmNvbnN0IE1pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01pblwiKTtcbmNvbnN0IE1pbkJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluQnlcIik7XG5jb25zdCBNaW5PckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5PckRlZmF1bHRcIik7XG5jb25zdCBPZlR5cGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PZlR5cGVcIik7XG5jb25zdCBPcmRlckJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT3JkZXJCeVwiKTtcbmNvbnN0IE91dGVySm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL091dGVySm9pblwiKTtcbmNvbnN0IFByZXBlbmRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9QcmVwZW5kXCIpO1xuY29uc3QgUmVwbGljYXRlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmVwbGljYXRlXCIpO1xuY29uc3QgUmV2ZXJzZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1JldmVyc2VcIik7XG5jb25zdCBSaWdodEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SaWdodEpvaW5cIik7XG5jb25zdCBTZWxlY3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZWxlY3RcIik7XG5jb25zdCBTZWxlY3RNYW55XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2VsZWN0TWFueVwiKTtcbmNvbnN0IFNlcXVlbmNlRXF1YWxfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZXF1ZW5jZUVxdWFsXCIpO1xuY29uc3QgU2luZ2xlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2luZ2xlXCIpO1xuY29uc3QgU2luZ2xlT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0XCIpO1xuY29uc3QgU2tpcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NraXBcIik7XG5jb25zdCBTa2lwTGFzdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NraXBMYXN0XCIpO1xuY29uc3QgU2tpcFdoaWxlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcFdoaWxlXCIpO1xuY29uc3QgU3RlcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1N0ZXBcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TdW1cIik7XG5jb25zdCBUYWtlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZVwiKTtcbmNvbnN0IFRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZUxhc3RcIik7XG5jb25zdCBUYWtlV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlV2hpbGVcIik7XG5jb25zdCBUb0NvbnZlcnNpb25zXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVG9Db252ZXJzaW9uc1wiKTtcbmNvbnN0IFVuaW9uXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25cIik7XG5jb25zdCBVbmlvbkJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25CeVwiKTtcbmNvbnN0IFdoZXJlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvV2hlcmVcIik7XG5jb25zdCBaaXBfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9aaXBcIik7XG5BcnJheS5wcm90b3R5cGUudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfID0gZnVuY3Rpb24gX3RyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhvYmopIHtcbiAgICAvLyB0aGVyZSBhcmUgbm8gb3V0IHZhcmlhYmxlcyBpbiBKUywgc28gd2UgaGF2ZSB0byBwdXQgaXQgaW4gYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICBpZiAob2JqKSB7XG4gICAgICAgIG9iai52YWx1ZSA9IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5TZXQucHJvdG90eXBlLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyA9IGZ1bmN0aW9uIF90cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgLy8gdGhlcmUgYXJlIG5vIG91dCB2YXJpYWJsZXMgaW4gSlMsIHNvIHdlIGhhdmUgdG8gcHV0IGl0IGluIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgaWYgKG9iaikge1xuICAgICAgICBvYmoudmFsdWUgPSB0aGlzLnNpemU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbk9iamVjdC5wcm90b3R5cGUuYXNRdWVyeWFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBpdGVyYWJsZSwgdGhpcyB3aWxsIGJlIGFuIG9yZGluYXJ5IGdlbmVyYXRvci4gSWYgaXQgaXMgbm90LFxuICAgIC8vIHRoaXMgd2lsbCBiZSBhbiBpdGVyYWJsZSB3aXRoIGEgc2luZ2xlIGl0ZW0uIFRoaXMgbWFrZXMgaXQgc28gSSBkb24ndCBoYXZlIHRvXG4gICAgLy8gZ3Vlc3Mgd2hhdCBwcm90b3R5cGVzIG5lZWQgdG8gYmUgbW9kaWZpZWQuXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZ3MgYXJlIGl0ZXJhYmxlLCBidXQgSSBkaWRuJ3Qgd2FudCB0byBhZGQgYWxsIHRoZSBlbnVtZXJhYmxlIG1ldGhvZHMgdG8gdGhlbS5cbiAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpO1xufTtcbk51bWJlci5wcm90b3R5cGUuYXNRdWVyeWFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gKDQpLmFzUXVlcnlhYmxlKCkgaXMgdHJlYXRlZCBsaWtlIHJhbmdlKClcbiAgICByZXR1cm4gRW51bWVyYWJsZV8xLkVudW1lcmFibGUucmFuZ2VfcV8oMCwgdGhpcyk7XG59O1xuQm9vbGVhbi5wcm90b3R5cGUuYXNRdWVyeWFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMpIHtcbiAgICAgICAgLy8gdHJ1ZS5hc1F1ZXJ5YWJsZSgpIGlzIHByZXR0eSB1c2VsZXNzOiBbZmFsc2UsIHRydWVdIGFzY2VuZGluZy4gTWlnaHQgYmUgdXNlZnVsLlxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKFtmYWxzZSwgdHJ1ZV0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZmFsc2UuYXNRdWVyeWFibGUoKSBpcyBhbHNvIHByZXR0eSB1c2VsZXNzOiBbdHJ1ZSwgZmFsc2VdIGRlc2NlbmRpbmcuIE1pZ2h0IGJlIHVzZWZ1bC5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbdHJ1ZSwgZmFsc2VdKTtcbiAgICB9XG59O1xuLy8gQWRkIHN0dWIgZnVuY3Rpb25zIG9udG8gQXJyYXkucHJvdG90eXBlIGFuZCBTZXQucHJvdG90eXBlIHRvIG1ha2UgdGhlIG9iamVjdCBpbnRvIGFuIEVudW1lcmFibGVcbi8vIGFuZCB0aGVuIGNhbGwgdGhlIEVudW1lcmFibGUgbWV0aG9kXG5FeHRlbmRfMS5leHRlbmQoXCJhZ2dyZWdhdGVfcV9cIiwgQWdncmVnYXRlXzEuYWdncmVnYXRlKTtcbkV4dGVuZF8xLmV4dGVuZChcImFsbF9xX1wiLCBBbGxfMS5hbGwpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYW55X3FfXCIsIEFueV8xLmFueV9xXyk7XG5FeHRlbmRfMS5leHRlbmQoXCJhcHBlbmRfcV9cIiwgQXBwZW5kXzEuYXBwZW5kKTtcbkV4dGVuZF8xLmV4dGVuZChcImF2ZXJhZ2VfcV9cIiwgQXZlcmFnZV8xLmF2ZXJhZ2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY2FzdF9xX1wiLCBTZWxlY3RfMS5zZWxlY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY2h1bmtfcV9cIiwgQ2h1bmtfMS5jaHVuayk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb25jYXRfcV9cIiwgQ29uY2F0XzEuY29uY2F0KTtcbkV4dGVuZF8xLmV4dGVuZChcImNvbnRhaW5zX3FfXCIsIENvbnRhaW5zXzEuY29udGFpbnMpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY291bnRfcV9cIiwgQ291bnRfMS5jb3VudCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjcm9zc0pvaW5fcV9cIiwgQ3Jvc3NKb2luXzEuY3Jvc3NKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImRlZmF1bHRJZkVtcHR5X3FfXCIsIERlZmF1bHRJZkVtcHR5XzEuZGVmYXVsdElmRW1wdHkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGlzdGluY3RfcV9cIiwgRGlzdGluY3RfMS5kaXN0aW5jdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJkaXN0aW5jdEJ5X3FfXCIsIERpc3RpbmN0QnlfMS5kaXN0aW5jdEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImVsZW1lbnRBdF9xX1wiLCBFbGVtZW50QXRfMS5lbGVtZW50QXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZWxlbWVudEF0T3JEZWZhdWx0X3FfXCIsIEVsZW1lbnRBdE9yRGVmYXVsdF8xLmVsZW1lbnRBdE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbXB0eV9xX1wiLCBFbXB0eV8xLmVtcHR5KTtcbkV4dGVuZF8xLmV4dGVuZChcImV4Y2VwdF9xX1wiLCBFeGNlcHRfMS5leGNlcHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZXhjZXB0QnlfcV9cIiwgRXhjZXB0QnlfMS5leGNlcHRCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJmaXJzdF9xX1wiLCBGaXJzdF8xLmZpcnN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImZpcnN0T3JEZWZhdWx0X3FfXCIsIEZpcnN0T3JEZWZhdWx0XzEuZmlyc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZm9yRWFjaF9xX1wiLCBGb3JFYWNoXzEuZm9yRWFjaCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmdWxsSm9pbl9xX1wiLCBGdWxsSm9pbl8xLmZ1bGxKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImdyb3VwQnlfcV9cIiwgR3JvdXBCeV8xLmdyb3VwQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZ3JvdXBKb2luX3FfXCIsIEdyb3VwSm9pbl8xLmdyb3VwSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJpbm5lckpvaW5fcV9cIiwgSW5uZXJKb2luXzEuaW5uZXJKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImludGVyc2VjdF9xX1wiLCBJbnRlcnNlY3RfMS5pbnRlcnNlY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW50ZXJzZWN0QnlfcV9cIiwgSW50ZXJzZWN0QnlfMS5pbnRlcnNlY3RCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJqb2luX3FfXCIsIEpvaW5fMS5qb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImxhc3RfcV9cIiwgTGFzdF8xLmxhc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGFzdE9yRGVmYXVsdF9xX1wiLCBMYXN0T3JEZWZhdWx0XzEubGFzdE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJsZWZ0Sm9pbl9xX1wiLCBMYXN0T3JEZWZhdWx0XzEubGFzdE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJsb25nQ291bnRfcV9cIiwgTG9uZ0NvdW50XzEubG9uZ0NvdW50KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heF9xX1wiLCBNYXhfMS5tYXgpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4QnlfcV9cIiwgTWF4QnlfMS5tYXhCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhPckRlZmF1bHRfcV9cIiwgTWF4T3JEZWZhdWx0XzEubWF4T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbl9xX1wiLCBNaW5fMS5taW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluQnlfcV9cIiwgTWluQnlfMS5taW5CeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5PckRlZmF1bHRfcV9cIiwgTWluT3JEZWZhdWx0XzEubWluT3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcIm9mVHlwZV9xX1wiLCBPZlR5cGVfMS5vZlR5cGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib3JkZXJCeV9xX1wiLCBPcmRlckJ5XzEub3JkZXJCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJvcmRlckJ5RGVzY2VuZGluZ19xX1wiLCBPcmRlckJ5XzEub3JkZXJCeURlc2NlbmRpbmcpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib3V0ZXJKb2luX3FfXCIsIE91dGVySm9pbl8xLm91dGVySm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJwcmVwZW5kX3FfXCIsIFByZXBlbmRfMS5wcmVwZW5kKTtcbkV4dGVuZF8xLmV4dGVuZChcInJlcGxpY2F0ZV9xX1wiLCBSZXBsaWNhdGVfMS5yZXBsaWNhdGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmV2ZXJzZV9xX1wiLCBSZXZlcnNlXzEucmV2ZXJzZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJyaWdodEpvaW5fcV9cIiwgUmlnaHRKb2luXzEucmlnaHRKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcInNlbGVjdF9xX1wiLCBTZWxlY3RfMS5zZWxlY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VsZWN0TWFueV9xX1wiLCBTZWxlY3RNYW55XzEuc2VsZWN0TWFueSk7XG5FeHRlbmRfMS5leHRlbmQoXCJzZXF1ZW5jZUVxdWFsX3FfXCIsIFNlcXVlbmNlRXF1YWxfMS5zZXF1ZW5jZUVxdWFsKTtcbkV4dGVuZF8xLmV4dGVuZChcInNpbmdsZV9xX1wiLCBTaW5nbGVfMS5zaW5nbGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2luZ2xlT3JEZWZhdWx0X3FfXCIsIFNpbmdsZU9yRGVmYXVsdF8xLnNpbmdsZU9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwX3FfXCIsIFNraXBfMS5za2lwKTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBMYXN0X3FfXCIsIFNraXBMYXN0XzEuc2tpcExhc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcFdoaWxlX3FfXCIsIFNraXBXaGlsZV8xLnNraXBXaGlsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJzdGVwX3FfXCIsIFN0ZXBfMS5zdGVwKTtcbkV4dGVuZF8xLmV4dGVuZChcInN1bV9xX1wiLCBTdW1fMS5zdW0pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZV9xX1wiLCBUYWtlXzEudGFrZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlTGFzdF9xX1wiLCBUYWtlTGFzdF8xLnRha2VMYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VXaGlsZV9xX1wiLCBUYWtlV2hpbGVfMS50YWtlV2hpbGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9BcnJheV9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9BcnJheSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0RpY3Rpb25hcnlfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvRGljdGlvbmFyeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0xpc3RfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvQXJyYXkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9Mb29rdXBfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvTG9va3VwKTtcbkV4dGVuZF8xLmV4dGVuZChcInRvSGFzaFNldF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9IYXNoU2V0KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTWFwX3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b01hcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ1bmlvbl9xX1wiLCBVbmlvbl8xLnVuaW9uKTtcbkV4dGVuZF8xLmV4dGVuZChcInVuaW9uQnlfcV9cIiwgVW5pb25CeV8xLnVuaW9uQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwid2hlcmVfcV9cIiwgV2hlcmVfMS53aGVyZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ6aXBfcV9cIiwgWmlwXzEuemlwKTtcbi8vIEFzIGEgd29ya2Fyb3VuZCBmb3Igb3JkZXJieSAoamF2YXNjcmlwdCBjYW4ndCBjcmVhdGUgYSBjbGFzcyB0aGF0IHJlZmVyZW5jZXMgYSBkZXNjZW5kYW50IGNsYXNzKSxcbi8vIGFkZCB0aGVzZSB0byB0aGUgRW51bWVyYWJsZSBjbGFzcyBpbiBhIHdheSB0aGF0IGRvZXNuJ3QgZXhwbG9kZVxuRW51bWVyYWJsZV8xLkVudW1lcmFibGUucHJvdG90eXBlLm9yZGVyQnlfcV8gPSBPcmRlckJ5XzEub3JkZXJCeTtcbkVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnByb3RvdHlwZS5vcmRlckJ5RGVzY2VuZGluZ19xXyA9IE9yZGVyQnlfMS5vcmRlckJ5RGVzY2VuZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBhZ2dyZWdhdGVfcV86IEFwcGxpZXMgYW4gYWNjdW11bGF0b3IgZnVuY3Rpb24gb3ZlciBhIHNlcXVlbmNlLlxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZSBhY3RzIGFzIHNlZWQgdmFsdWVcbiAqIG9wdGlvbmFsIHNlbGVjdEZ1bmN0aW9uIHNlbGVjdHMgdGhlIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhZ2dyZWdhdGUoaW5pdGlhbE9yQWNjdW11bGF0b3IsIGFjY3VtdWxhdG9yRnVuY3Rpb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgbGV0IGluaXRpYWxWYWx1ZVByb3ZpZGVkID0gZmFsc2U7XG4gICAgbGV0IHNlZWRlZCA9IGZhbHNlO1xuICAgIGxldCB2YWx1ZTtcbiAgICBsZXQgYWNjdW11bGF0b3I7XG4gICAgbGV0IHNlbGVjdG9yO1xuICAgIC8vIFRoaXMgaXMgYmFzaWNhbGx5IHRoZSBzYW1lIGFzIHJlZHVjZSwgZXhjZXB0IGl0IGRvZXNuJ3QgcmVxdWlyZSBjb3B5aW5nIHRoZSB3aG9sZSB0aGluZyB0byBhbiBhcnJheSBmaXJzdFxuICAgIC8vIFRoZSB3YWNrIHdheSB0aGF0IHR5cGVzY3JpcHQgZG9lcyBvdmVybG9hZHMgcmVhbGx5IHNsb3BzIHVwIHRoZSBjb2RlIGZvciBrZWVwaW5nIGEgbGlucSBhcGlcbiAgICAvLyBJdCBhbHNvIHJlcXVpcmVkIHR3byB1c2Ugb2YgXCJhbnlcIiBhYm92ZSB0aGF0IEkgZGlkIG5vdCBsaWtlIGRvaW5nLlxuICAgIGlmICghYWNjdW11bGF0b3JGdW5jdGlvbikge1xuICAgICAgICBhY2N1bXVsYXRvciA9IGluaXRpYWxPckFjY3VtdWxhdG9yO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgICBzZWVkZWQgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9IGluaXRpYWxPckFjY3VtdWxhdG9yO1xuICAgICAgICBhY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yRnVuY3Rpb247XG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHNlZWQsIHRoZW4gdGhlIGZpcnN0IHZhbHVlIGlzIHVzZWQgYXMgdGhlIHNlZWRcbiAgICAgICAgLy8gQWZ0ZXIgdGhlIGZpcnN0IGl0ZW0sIGl0IGlzIHBvcHVsYXRlZC4gQnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHVuZGVyc3RhbmQgdGhhdCwgc28gYW55IG5lZWRzIHRvIGJlIHVzZWQgc29tZXRpbWVzLlxuICAgICAgICBpZiAoIXNlZWRlZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgc2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gYWNjdW11bGF0b3IodmFsdWUsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEMjIG9ubHkgdGhyb3dzIGFuIGVycm9yIGluIHRoZSBvdmVybG9hZCB3aXRob3V0IGEgc2VlZCB2YWx1ZS5cbiAgICBpZiAoIXNlZWRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvcih2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3QgdW5kZXJzdGFuZCB0aGF0IF92YWx1ZSBpcyBub3QgdW5kZWZpbmVkIGFmdGVyIHRoZSBfdmFsdWUgPSBpdGVtIGxpbmUgKHVubGVzcyB0aGUgaXRlcmFibGUgdHlwZSBhbGxvd3MgaXQpXG4gICAgICAgIC8vIFVubGVzcyB0aGUgaXRlcmF0b3IgY29udGFpbnMgdW5kZWZpbmVkLCBvZiBjb3Vyc2UuIFRoYXQncyB0b3RhbGx5IGxlZ2FsIGluIEpTXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmFnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBhbGxfcV86IERldGVybWluZXMgd2hldGhlciBhbGwgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBzYXRpc2Z5IGEgY29uZGl0aW9uLlxuICogVGhpcyBjb25kaXRpb24gY2FuIG9wdGlvbmFsbHkgdGFrZSB0aGUgaW5kZXggYXMgdGhlIHNlY29uZCBhcmd1bWVudCAodGhpcyBpcyBub3QgcHJvdmlkZWQgYnkgdGhlIEMjIHZlcnNpb24pXG4gKi9cbmZ1bmN0aW9uIGFsbChmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghZmlsdGVyKGl0ZW0sIGluZGV4KyspKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmFsbCA9IGFsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBhbnlfcV86IERldGVybWluZXMgd2hldGhlciBhbnkgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBzYXRpc2Z5IGFuIG9wdGlvbmFsIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiBhbnlfcV8oZmlsdGVyKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuYW55X3FfID0gYW55X3FfO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFwcGVuZF9xXzogQXBwZW5kcyBhIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZChuZXdJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2FwcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCBuZXdJdGVtO1xuICAgIH0pO1xufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE5vbmVUeXBlXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvTm9uZVR5cGVcIik7XG4vKipcbiAqIGF2ZXJhZ2VfcV86IGNvbXB1dGVzIHRoZSBhdmVyYWdlIG9mIGEgc2VxdWVuY2Ugb2YgbnVtYmVycy5cbiAqIG9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbiBsZXRzIHVzIGNhbGN1bGF0ZSB1c2luZyB2YWx1ZXMgb2J0YWluZWQgYnkgaW52b2tpbmcgYWZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgc2VxdWVuY2UuXG4gKi9cbmZ1bmN0aW9uIGF2ZXJhZ2Uoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGxldCB0bXA7XG4gICAgICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgdG1wID0gc2VsZWN0RnVuY3Rpb24oaXRlbSk7XG4gICAgICAgICAgICAvLyBOdWxsYWJsZSBudW1iZXIgYmVoYXZpb3VyOiBpZiBudWxsLCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoTm9uZVR5cGVfMS5pc05vbmUodG1wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTnVsbGFibGUgbnVtYmVyIGJlaGF2aW91cjogaWYgbnVsbCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKE5vbmVUeXBlXzEuaXNOb25lKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG1wID0gTnVtYmVyKGl0ZW0pO1xuICAgICAgICBpZiAoaXNOYU4odG1wKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRhIHR5cGUgZm9yIGF2ZXJhZ2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHN1bSArIHRtcDtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgaWYgKCFjb3VudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAvIGNvdW50O1xufVxuZXhwb3J0cy5hdmVyYWdlID0gYXZlcmFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBjaHVua19xXzogc3BsaXRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGludG8gY2h1bmtzIG9mIHNpemUgYXQgbW9zdCBzaXplXG4gKi9cbmZ1bmN0aW9uIGNodW5rKHNpemUpIHtcbiAgICBjb25zdCBuZXdlbnVtID0gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfY2h1bmsoZGF0YSkge1xuICAgICAgICBpZiAoIXNpemUgfHwgc2l6ZSA8PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ZXIgPSBzaXplO1xuICAgICAgICBsZXQgdG1wID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICB0bXAucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0bXA7XG4gICAgICAgICAgICAgICAgdG1wID0gW107XG4gICAgICAgICAgICAgICAgY291bnRlciA9IHNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRtcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRtcDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdlbnVtO1xufVxuZXhwb3J0cy5jaHVuayA9IGNodW5rO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNvbmNhdF9xXzogY29uY2F0ZW5hdGVzIHR3byBzZXF1ZW5jZXNcbiAqL1xuZnVuY3Rpb24gY29uY2F0KHNlY29uZCkge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jb25jYXQoZGF0YSkge1xuICAgICAgICB5aWVsZCogZGF0YTtcbiAgICAgICAgeWllbGQqIHNlY29uZDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBjb250YWluc19xXzogZGV0ZXJtaW5lcyB3aGV0aGVyIGEgc2VxdWVuY2UgY29udGFpbnMgYSBzcGVjaWZpZWQgZWxlbWVudFxuICogb3B0aW9uYWwgZXF1YWxpdHlDb21wYXJlciBmdW5jdGlvbiB0byBpbmRpY2F0ZSBpZiByZWNvcmQgbWF0Y2hlc1xuICovXG5mdW5jdGlvbiBjb250YWlucyh2YWx1ZSwgY29tcGFyZXIpIHtcbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgoY29tcGFyZShpdGVtLCB2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNvdW50X3FfOiByZXR1cm5zIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyBob3cgbWFueSBlbGVtZW50cyBpbiB0aGUgc3BlY2lmaWVkIHNlcXVlbmNlIHNhdGlzZnkgYW4gb3B0aW9uYWwgY29uZGl0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGNvbmRpdGlvbikge1xuICAgIGxldCBjdHIgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24oaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjdHIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0cisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdHI7XG59XG5leHBvcnRzLmNvdW50ID0gY291bnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogY3Jvc3NKb2luX3FfOiBDcmVhdGUgYSBzaW1wbGUgY2FydGVzaWFuIGpvaW4gKGV2ZXJ5IHJlY29yZCBmcm9tIHRhYmxlIDEgYWxvbmcgd2l0aCBldmVyeSByZWNvcmQgZnJvbSB0YWJsZSAyKVxuICovXG5mdW5jdGlvbiBjcm9zc0pvaW4oc2Vjb25kLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfY3Jvc3NKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBtYXRjaCB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY3Jvc3NKb2luID0gY3Jvc3NKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGRlZmF1bHRJZkVtcHR5X3FfOiByZXR1cm5zIHRoZSBzZXF1ZW5jZSBvciB0aGUgKG9wdGlvbmFsKSBkZWZhdWx0IHZhbHVlIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eS5cbiAqIERlZmF1bHQgaW4gaXMgYSBwYXJhbXRlci4gSUYgaXQgaXMgbGVmdCBvdXQsIHVuZGVmaW5lZCBpcyByZXR1cm5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IGFuIGVtcHR5IG9uZS4pXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRJZkVtcHR5KGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kZWZhdWx0SWZFbXB0eShkYXRhKSB7XG4gICAgICAgIGxldCBlbXB0eSA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHlpZWxkIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0SWZFbXB0eSA9IGRlZmF1bHRJZkVtcHR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGRpc3RpbmN0X3FfOiBSZXR1cm5zIGRpc3RpbmN0IGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBieSB1c2luZyBhbiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBkaXN0aW5jdChjb21wYXJlcikge1xuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZGlzdGluY3QoZGF0YSkge1xuICAgICAgICAvLyBLZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkIChubyB3YXkgYXJvdW5kIHRoYXQpIGFuZCBvbmx5IHJldHVybiBpZiBub3QgaW4gdGhlIGxpc3QuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhpdGVtKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRpc3RpbmN0ID0gZGlzdGluY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZGlzdGluY3RCeV9xXzogUmV0dXJucyBkaXN0aW5jdCBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYmFzZWQgb24ga2V5cyByZXR1cm5lZCBieSBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBzdXBwbGllZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBkaXN0aW5jdEJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kaXN0aW5jdEJ5KGRhdGEpIHtcbiAgICAgICAgLy8gS2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZCAobm8gd2F5IGFyb3VuZCB0aGF0KSBhbmQgb25seSByZXR1cm4gaWYgbm90IGluIHRoZSBsaXN0LlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoa2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGlzdGluY3RCeSA9IGRpc3RpbmN0Qnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZWxlbWVudEF0X3FfOiBSZXR1cm5zIHRoZSBlbGVtZW50IGF0IGEgc3BlY2lmaWVkIGluZGV4IGluIGEgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gZWxlbWVudEF0KGluZGV4KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgcmFuZ2UuXCIpO1xufVxuZXhwb3J0cy5lbGVtZW50QXQgPSBlbGVtZW50QXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZWxlbWVudEF0T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBlbGVtZW50IGF0IGEgc3BlY2lmaWVkIGluZGV4IGluIGEgc2VxdWVuY2UuXG4gKiBSZXR1cm5zIGFuIG9wdGlvbmFsIGRlZmF1bHQgdmFsdWUgaWYgaW5kZXggaXMgb3V0IG9mIHJhbmdlLCBvciB1bmRlZmluZWQgaWYgbm90IHN1cHBsaWVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUuKVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXRPckRlZmF1bHQoaW5kZXgsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn1cbmV4cG9ydHMuZWxlbWVudEF0T3JEZWZhdWx0ID0gZWxlbWVudEF0T3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGVtcHR5X3FfOiBSZXR1cm5zIGFuIGVtcHR5IElFbnVtZXJhYmxlPFQ+IHRoYXQgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZSBhcmd1bWVudC5cbiAqIE5vdGUgdGhhdCB0eXBlcyBhcmUgdHlwZXNjcmlwdC1vbmx5IGZpY3RpdGlvdXMgZW50aXRpZXMgdGhhdCBhcmVuJ3QgZW1pdHRlZC5cbiAqL1xuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGV4Y2VwdF9xXzogUHJvZHVjZXMgdGhlIHNldCBkaWZmZXJlbmNlIChkaXN0aW5jdCkgb2YgdHdvIHNlcXVlbmNlcy5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGV4Y2VwdChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9leGNlcHQoZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIC8vIEFuZCB0aGUgc2Vjb25kIG1pZ2h0IGFsc28gYmUgYSBnZW5lcmF0b3IsIHNvIHdlIG5lZWQgdG8gZXhoYXVzdCBpdHMgdmFsdWVzLlxuICAgICAgICAvLyBTdGFydCBieSBsb2FkaW5nIHRoZSBoaXN0b3J5IHdpdGggdGhlIHNlY29uZCBzZXQuIFRoZW4sIHdlIGNhbiBkbyB3aGF0IHdlIGFscmVhZHkgZGlkIGZvciBkaXN0aW5jdCgpIGFuZCBpdCdsbCBwdWxsIG91dCB0aGUgbWF0Y2hlc1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoaXRlbSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5leGNlcHQgPSBleGNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZXhjZXB0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2Ugb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXlzIChkaXN0aW5jdCBrZXlzKSByZXR1cm5lZCBieSBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGV4Y2VwdEJ5KHNlY29uZCwga2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZXhjZXB0QnkoZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIC8vIEFuZCB0aGUgc2Vjb25kIG1pZ2h0IGFsc28gYmUgYSBnZW5lcmF0b3IsIHNvIHdlIG5lZWQgdG8gZXhoYXVzdCBpdHMgdmFsdWVzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBoaXN0b3J5LmFkZChrZXlTZWxlY3RvcihpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGtleSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4Y2VwdEJ5ID0gZXhjZXB0Qnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZmlyc3RfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eS5cbiAqIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24gY2FuIGJlIHN1cHBsaWVkXG4gKi9cbmZ1bmN0aW9uIGZpcnN0KG1hdGNoRnVuY3Rpb24pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIW1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGhhcyBubyBlbGVtZW50cy5cIik7XG59XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZmlyc3RPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZS5cbiAqIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24gY2FuIGJlIHN1cHBsaWVkXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kIGV4cGxhaW5lZDogZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWUgfTogeyBkZWZhdWx0VmFsdWU6IFQgfSk6IFQ7XG4gKiBJbiBKYXZhU2NyaXB0LCBpZiB5b3UgY2FsbCB0aGUgbWV0aG9kIHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGFuZCB3YW50IGl0IHRvIGJlIHRoZSBkZWZhdWx0LCB0aGVyZSdzIG5vIGNsZWFuIHdheSB0byBpbmRpY2F0ZSB0aGF0IHRoaXNcbiAqIGlzIHdoYXQgeW91IHdhbnQsIGl0IGJyZWFrcyB0aGUgc3RhbmRhcmQgY2FzZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nOiBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXyhteUZ1bmMpXG4gKiBJcyB0aGlzIHN1cHBvc2VkIHRvIGJlXG4gKiAgICAgIGFycmF5T2ZQcmVkaWNhdGVzLndoZXJlX3FfKG15RnVuYykuZmlyc3RPckRlZmF1bHRfcV8oKVxuICogb3JcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8oKSB8fCBteUZ1bmNcbiAqXG4gKiBUaGUgb25seSB0byBtYWtlIGl0IHdvcmsgaXMgdG8gY2FsbCBsaWtlIHRoaXM6XG4gKiAgICAgIGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiBzb21ldGhpbmcgfSlcbiAqL1xuZnVuY3Rpb24gZmlyc3RPckRlZmF1bHQobWF0Y2hGdW5jdGlvbiwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IHRlc3RlcjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiB0eXBlb2YgbWF0Y2hGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRlc3RlciA9IG1hdGNoRnVuY3Rpb247XG4gICAgfVxuICAgIGxldCBkZWY7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIGRlZiA9IG1hdGNoRnVuY3Rpb24uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5maXJzdE9yRGVmYXVsdCA9IGZpcnN0T3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGZvckVhY2hfcV86IEV4ZWN1dGUgYSBjYWxsYmFjayBmdW5jdGlvbiBvbiBlYWNoIHJvdyBpbiB0aGUgZW51bWVyYWJsZSwgcmV0dXJuaW5nIG5vIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZykge1xuICAgIGlmICghY2FsbGJhY2tmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNhbGxiYWNrZm4uY2FsbCh0aGlzQXJnLCBpdGVtLCBpbmRleCsrKTtcbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2ggPSBmb3JFYWNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGZ1bGxKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgZnVsbCBvdXRlciBqb2luLiBUaGlzIGZvbGxvd3MgdGhlIHBhdHRlcm4gb2YgaW5uZXJKb2luX3FfKCksIHdoaWNoIGNvbWJpbmVzIHRoZSB0d29cbiAqIGtleSBsb29rdXBzIGFuZCBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIGlucHV0LlxuICovXG5mdW5jdGlvbiBmdWxsSm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIGEgcGxhY2UgdG8gdHJhY2sgYTtsIGl0ZW1zIGluIHRoZSByaWdodCB0aGF0IGdvdCBzZW50XG4gICAgICAgIGNvbnN0IHNlbnRSaWdodHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZW50UmlnaHRzLmFkZChyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsZWZ0TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3cgZ28gdGhyb3VnaCB0aGUgcmlnaHQgc2lkZSBvbmNlIG1vcmUgYW5kIHNlbmQgYW55dGhpbmcgdGhhdCBkaWRuJ3QgZ2V0IHNlbnRcbiAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgIGlmICghc2VudFJpZ2h0cy5oYXMocmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dCh1bmRlZmluZWQsIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZnVsbEpvaW4gPSBmdWxsSm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuY29uc3QgR3JvdXBpbmdfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Hcm91cGluZ1wiKTtcbi8qKlxuICogR3JvdXBzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGFjY29yZGluZyB0byBhIHNwZWNpZmllZCBrZXkgc2VsZWN0b3IgZnVuY3Rpb24gYW5kIGNyZWF0ZXMgYSByZXN1bHQgdmFsdWUgZnJvbSBlYWNoIGdyb3VwIGFuZCBpdHMga2V5LlxuICogb3B0aW9uYWwgZWxlbWVudCBzZWxlY3Rpb24gZnVuY3Rpb24gKGVpdGhlciBzZWNvbmQgYXJndW1lbnQgb3IgZW5jbG9zZWQgaW4gYSB7IGVsZW1lbnQ6IGZ1bmMgfSBvYmplY3QpXG4gKiBvcHRpb25hbCBvdXRwdXQgcHJvamVjdGlvbiBmdW5jdGlvbiAoZWl0aGVyIHRoaXJkIGFyZ3VtZW50IG9yIGVuY2xvc2VkIGluIGEgeyBwcm9qZWN0OiBmdW5jIH0gb2JqZWN0KVxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgZnVuY3Rpb24gKGVpdGhlciBmb3VydGggYXJndW1lbnQgb3IgZW5jbG9zZWQgaW4gYSB7IGVxdWFsczogZnVuYyB9IG9iamVjdClcbiAqXG4gKiBUaGUgbnVtYmVyIG9mIG92ZXJsb2FkcyBpbiBDIyBpcyBIVUdFLiBJZiBJIHdlcmUgbWljcm9zb2Z0LCBJIHdvdWxkbid0IGhhdmUgZG9uZSB0aGlzLCBhcyBlbGVtZW50RnVuY3Rpb24gY291bGQgYmVcbiAqIGhhbmRsZWQgaW4ga2V5U2VsZWN0b3IgYW5kIG91dHB1dEZ1bnRpb24gY291bGQgYmUgaGFuZGxlZCBieSBhIHNlbGVjdCgpIGZvbGxvd2luZyB0aGUgZ3JvdXBCeSgpLlxuICogVGhlcmUncyBhIHBvaW50IGJleW9uZCB3aGljaCBtb3JlIG9wdGlvbnMgYmVjb21lcyBsZXNzIGhlbHBmdWwgcmF0aGVyIHRoYW4gbW9yZS5cbiAqIFNlZSBqb2luKCkgZm9yIGFub3RoZXIgZXhhbXBsZSBvZiBmdW5jdGlvbnMgcGVvcGxlIGhhdmUgdG8gZ29vZ2xlIGJlZm9yZSB1c2luZy5cbiAqXG4gKiBUaGUgd2Vha25lc3NlcyBvZiB0aGUgdHlwZXNjcmlwdCB0eXBpbmcgYW5kIG92ZXJsb2FkIHN5c3RlbXMgcmVhbGx5IHNoaW5lIHRocm91Z2ggaW4gYSBnaWFudCBsaWtlIHRoaXMuXG4gKiBJaW4gamF2YXNjcmlwdCBpdCdzIG5vdCBwb3NzaWJsZSB0byBrbm93IHdoYXQgaW5wdXRzIGFyZSBwcm92aWRlZCBpbiBhIGxvdCBvZiBwbGFjZXMuIFRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGEgcHJvamVjdGlvbiBmdW5jdGlvbiBhbmQgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24gaXMgdGhhdCBvbmUgdGFrZXMgb25lIGlucHV0IGFuZCBvbmUgdGFrZXMgdHdvLiBUaGlzIGlzIGVhc3kgZm9yXG4gKiBDIyB0byBkZXRlY3QsIGJ1dCBpbiBqYXZhc2NyaXB0LCBhbGwgZnVuY3Rpb25zIGFyZSBqdXN0IGZ1bmN0aW9uKCkgdGhhdCB0YWtlIGFueSBudW1iZXIgb2YgaW5wdXRzLiBUeXBlc2NyaXB0XG4gKiBjYW4ga25vdyB3aGljaCBvbmUgeW91J3JlIHVzaW5nLCBidXQgdGhlIGVtaXR0ZWQgamF2YXNjcmlwdCBjb2RlIGhhcyBubyBpZGVhLlxuICpcbiAqIFRoaXMgb3ZlcmxvYWQgc2V0dXAgaXMgaW1wb3NzaWJsZSBpbiBKUzpcbiAqICAgICAgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uPzogZnVuY3Rpb24pO1xuICogICAgICBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbj86IGZ1bmN0aW9uKTtcbiAqIGJlY2F1c2UgSlMgc2VlcyBvbmx5OlxuICogICAgICBmdW5jdGlvbiBncm91cEJ5X3FfKGZ1bmN0aW9uLCBmdW5jdGlvbilcbiAqIFdoaWNoIG9uZSB3YXMgaXQ/IE5vIGNsdWUuXG4gKlxuICogQmVjYXVzZSBvZiB0aGlzLCBhcyBsb25nIGFzIHlvdSBwYXNzXG4gKiAgb25seSBrZXlTZWxlY3Rvciwgb3JcbiAqICBvbmx5IGtleVNlbGVjdG9yIGFuZCBlbGVtZW50RnVuY3Rpb24sIG9cbiAqICBvbmx5IGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uLCBvclxuICogIG9ubHkga2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24gYW5kIGNvbXBhcmVyLFxuICogeW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCwgYnV0IGFueSBvdmVybG9hZCB3aGljaCBvbWl0cyBhIHByZXZpb3VzIHZhbHVlIG11c3QgYmUgaW4gdGhlIGZvcm0gb2ZcbiAqICAgICAgY29uc3QgcmVzdWx0ID0gYXJyLmdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIHsgcGFyYW0zOiB2YWx1ZSB9KVxuICogd2hpY2ggdHJhbnNsYXRlcyB0b1xuICogICAgICAgY29uc3QgcmVzdWx0ID0gYXJyLmdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIHVuZGVmaW5lZCwgdmFsdWUpXG4gKi9cbmZ1bmN0aW9uIGdyb3VwQnkoZ3JvdXBGdW5jdGlvbiwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWdyb3VwRnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IGVsZW1lbnRvcjtcbiAgICBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIHR5cGVvZiBlbGVtZW50RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbGVtZW50b3IgPSBlbGVtZW50RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcImVsZW1lbnRcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgZWxlbWVudG9yID0gZWxlbWVudEZ1bmN0aW9uLmVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCBwcm9qZWN0b3I7XG4gICAgaWYgKG91dHB1dEZ1bmN0aW9uICYmIHR5cGVvZiBvdXRwdXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb2plY3RvciA9IG91dHB1dEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJwcm9qZWN0XCIgaW4gZWxlbWVudEZ1bmN0aW9uKSB7XG4gICAgICAgIHByb2plY3RvciA9IGVsZW1lbnRGdW5jdGlvbi5wcm9qZWN0O1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcInByb2plY3RcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBwcm9qZWN0b3IgPSBvdXRwdXRGdW5jdGlvbi5wcm9qZWN0O1xuICAgIH1cbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gZWxlbWVudEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGVsZW1lbnRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImVxdWFsc1wiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyLmVxdWFscztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2dyb3VwQnkoZGF0YSkge1xuICAgICAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIHJldHVybmluZyBhcyBpZiBpdCdzIGRlZmVycmVkIGV4ZWN1dGlvbiwgaXQncyBub3QgcmVhbGx5IGRlZmVycmVkLiBJdCBoYXMgdG8gcHJvY2VzcyB0aGUgZnVsbCBsaXN0XG4gICAgICAgIC8vIHRvIGtub3cgd2hhdCB0aW1lcyBlYWNoIGluZGl2aWR1YWwga2V5IGFwcGVhcnMuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRLZXkgPSBncm91cEZ1bmN0aW9uKHJvdyk7XG4gICAgICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgY2FjaGUua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIoaW5uZXJJdGVtLCBleHRyYWN0ZWRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGNhY2hlLmdldChpbm5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGNhY2hlLmdldChleHRyYWN0ZWRLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guYWRkKHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5zZXQoZXh0cmFjdGVkS2V5LCBuZXcgR3JvdXBpbmdfMS5Hcm91cGluZyhleHRyYWN0ZWRLZXksIHJvdywgZWxlbWVudG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCByb3cgb2YgY2FjaGUuZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdG9yKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcHJvamVjdG9yKHJvd1swXSwgcm93WzFdLnZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50b3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCByb3dbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCByb3dbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ3JvdXBCeSA9IGdyb3VwQnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbmNvbnN0IEdyb3VwaW5nXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvR3JvdXBpbmdcIik7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBncm91cEpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24ga2V5IGVxdWFsaXR5IGFuZCBncm91cHMgdGhlIHJlc3VsdHMuXG4gKlxuICogVGhpcyBpcyBhIHNvcnQgb2YgYSBjb21iaW5hdGlvbiBvZiBvdXRlciBqb2luIGFuZCBoYWxmIGEgZ3JvdXAgYnkgKG9ubHkgdGhlIHNlY29uZCBzZXF1ZW5jZSBpcyBncm91cGVkKS5cbiAqIFRoZSBvdXRwdXQgZnVuY3Rpb24sIHdoaWNoIGRldGVybWluZXMgdGhlIG91dHB1dCwgaXMgcmVxdWlyZWQuIFRoaXMgZG9lc24ndCBzZWVtIHVzZWZ1bCBlbm91Z2ggZm9yIG1lIHRvIGNvbWUgdXAgd2l0aCBhIGRlZmF1bHQgb3V0cHV0LlxuICovXG5mdW5jdGlvbiBncm91cEpvaW4oc2Vjb25kLCBmaXJzdEtleVNlbGVjdG9yLCBzZWNvbmRLZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWZpcnN0S2V5U2VsZWN0b3IgfHwgIXNlY29uZEtleVNlbGVjdG9yIHx8ICFvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2dyb3VwSm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuIFxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBpbmc7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEtleSA9IHNlY29uZEtleVNlbGVjdG9yKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBjb21wYXJlKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwaW5nLmFkZChyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmcgPSBuZXcgR3JvdXBpbmdfMS5Hcm91cGluZyhsZWZ0S2V5LCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdyb3VwaW5nKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0RnVuY3Rpb24obGVmdEl0ZW0sIGdyb3VwaW5nLnZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXRGdW5jdGlvbihsZWZ0SXRlbSwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdyb3VwSm9pbiA9IGdyb3VwSm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBpbm5lckpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBpbm5lciBqb2luLiBUaGlzIGNvbWJpbmVzIHRoZSB0d28ga2V5IGxvb2t1cHMgYW5kIHRoZSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXIgaW50byBhXG4gKiBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuIEZvciBtb3N0IHByb2dyYW1tZXJzLCB0aGlzIGlzIGFsbCB0aGUgY29tcGxleGl0eSB5b3UnbGwgbmVlZC5cbiAqL1xuZnVuY3Rpb24gaW5uZXJKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW5uZXJKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBUaGUgcmlnaHQgc2lkZSBjYW4gdGhlb3JldGljYWxseSBiZSBhIGdlbmVyYXRvci4gV2UgZG9uJ3Qga25vdywgYnV0IHdlIGhhdmUgdG8gdGFrZSB0aGF0IGNoYW5jZS5cbiAgICAgICAgLy8gSlMgZG9lc24ndCBnaXZlIGEgd2F5IHRvIHJlc3RhcnQgYSBnZW5lcmF0b3IsIHNvIHdlIGNhbiBvbmx5IGNoZWNrIHJpZ2h0IG9uY2Ugd2l0aG91dCBzb21lIGV4dHJhIEJTIHRvIGFsbG93IGl0IHRvIHJlc3RhcnRcbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uKGxlZnRJdGVtLCByaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaW5uZXJKb2luID0gaW5uZXJKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBpbnRlcnNlY3RfcV86IFByb2R1Y2VzIHRoZSBzZXQgaW50ZXJzZWN0aW9uIG9mIHR3byBzZXF1ZW5jZXMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgcHJvdmlkZWRcbiAqL1xuZnVuY3Rpb24gaW50ZXJzZWN0KHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2ludGVyc2VjdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgc2Vjb25kU2V0LmFkZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIHNlY29uZFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGluIGJvdGggc2V0cy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgaWYgaXQncyBiZWVuIHNlbnQgYWxyZWFkeSwgZG9uJ3Qgc2VuZCBpdCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGZvdW5kLCB0cmFjayBhbmQgc2VuZCBpdFxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kU2V0LmhhcyhpdGVtKSAmJlxuICAgICAgICAgICAgICAgICAgICAhaGlzdG9yeS5oYXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmludGVyc2VjdCA9IGludGVyc2VjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogaW50ZXJzZWN0QnlfcV86IFByb2R1Y2VzIHRoZSBzZXQgaW50ZXJzZWN0aW9uIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24ga2V5cyByZXR1cm5lZCBieSBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwcm92aWRlZFxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3RCeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2ludGVyc2VjdEJ5KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIHNlY29uZFNldC5hZGQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2Ygc2Vjb25kU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBpbiBib3RoIHNldHMuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgaWYgaXQncyBiZWVuIHNlbnQgYWxyZWFkeSwgZG9uJ3Qgc2VuZCBpdCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGZvdW5kLCB0cmFjayBhbmQgc2VuZCBpdFxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRTZXQuaGFzKGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaW50ZXJzZWN0QnkgPSBpbnRlcnNlY3RCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBqb2luX3FfOiBDb3JyZWxhdGVzIHRoZSBlbGVtZW50cyBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIG1hdGNoaW5nIGtleXMuIE9ubHkgcmVjb3JkcyBhcmUgcmV0dXJuZWQgd2hlbiBib3RoIHNpZGVzIG1hdGNoLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSBrZXlzLlxuICpcbiAqIElmIHRoZSBvdXRwdXQgc2VsZWN0b3IgaXMgbGVmdCBvdXQsIHJlc3VsdHMgYXJlIHJldHVybmVkIGFzIFtmaXJzdCByb3csIHNlY29uZCByb3ddLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMsIHdoaWNoIHJlcXVpcmVzIHRoZSBvdXRwdXQgc2VsZWN0b3IuXG4gKlxuICogTGVhdmluZyB0aGUgb3V0cHV0IHNlbGVjdG9yIG91dCByZXF1aXJlcyBwYXNzaW5nIGNvbXBhcmVyIGluIGFzIHsgZXF1YWxzOiBjb21wYXJlciB9IGlmIHlvdSB3YW50IHRvIHVzZSBpdC4gU2VlIHRoZSBsb25nIGRpc2N1c3Npb25cbiAqIGluIEdyb3VwQnkgZm9yIGRldGFpbHMuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oc2Vjb25kLCBmaXJzdEtleVNlbGVjdG9yLCBzZWNvbmRLZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWZpcnN0S2V5U2VsZWN0b3IgfHwgIXNlY29uZEtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgbGV0IGVxdWFsaXplcjtcbiAgICBpZiAoY29tcGFyZXIgJiYgdHlwZW9mIGNvbXBhcmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IG91dHB1dEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgaWYgKG91dHB1dEZ1bmN0aW9uICYmIHR5cGVvZiBvdXRwdXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgb3V0cHV0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfam9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBzdGF0aXN0aWNzIGFuZCBpbmRleCBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0S2V5ID0gZmlyc3RLZXlTZWxlY3RvcihsZWZ0SXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXkgPSBzZWNvbmRLZXlTZWxlY3RvcihyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBlcXVhbGl6ZXIobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbGFzdF9xXzogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UuIFRha2VzIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKi9cbmZ1bmN0aW9uIGxhc3QobWF0Y2hGdW5jdGlvbikge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0SXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIW1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXRjaEZ1bmN0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIC8vIENhbid0IGNoZWNrIGlmIGxhc3RJdGVtIGlzIG5vdCB1bmRlZmluZWQsIGJlY2F1c2UgdGhlIGxhc3QgaXRlbSBjb3VsZCBhY3R1YWxseSBiZSBcInVuZGVmaW5lZFwiLlxuICAgICAgICAvLyBUeXBlU2NyaXB0IGNhbid0IHRlbGwgdGhhdCBldmVyeSBwbGFjZSBmb3VuZCB3YXMgdHJ1ZSwgbGFzdEl0ZW0gd2FzIGFsc28gc2V0O1xuICAgICAgICByZXR1cm4gbGFzdEl0ZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGhhcyBubyBlbGVtZW50cy5cIik7XG59XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGxhc3RPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0YWtpbmcgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogSW4gSmF2YVNjcmlwdCwgaWYgeW91IGNhbGwgdGhlIG1ldGhvZCB3aXRoIGEgc2luZ2xlIHBhcmFtZXRlciBhbmQgd2FudCBpdCB0byBiZSB0aGUgZGVmYXVsdCwgdGhlcmUncyBubyBjbGVhbiB3YXkgdG8gaW5kaWNhdGUgdGhhdCB0aGlzXG4gKiBpcyB3aGF0IHlvdSB3YW50LCBiZWNhdXNlIGl0IGJyZWFrcyB0aGUgY2FzZSB3aGVyZSB5b3UgcGFzcyBhIGZpbHRlciBjb25kaXRpb24uIEEgc2luZ2xlIHByZWRpY2F0ZSBjb3VsZCBiZSBhIGZpbHRlciBjb25kaXRpb24gb3IgaXRcbiAqIGNvdWxkIGJlIHRoZSBkZWZhdWx0IGZvciBhbiBhcnJheSBvZiBwcmVkaWNhdGVzIC4uLiB5b3UgZG9uJ3Qga25vdy4gVGhlcmVmb3JlLCBpZiB5b3Ugd2FudCB0byBwYXNzIG9ubHkgYSBkZWZhdWx0IHZhbHVlLCBjYWxsIGxpa2VcbiAqIHRoaXM6IGZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiBcIk5PVCBGT1VORFwiIH0pXG4gKi9cbmZ1bmN0aW9uIGxhc3RPckRlZmF1bHQobWF0Y2hGdW5jdGlvbiwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IHRlc3RlcjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiB0eXBlb2YgbWF0Y2hGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRlc3RlciA9IG1hdGNoRnVuY3Rpb247XG4gICAgfVxuICAgIGxldCBkZWY7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIGRlZiA9IG1hdGNoRnVuY3Rpb24uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdEl0ZW07XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCF0ZXN0ZXIpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgLy8gQ2FuJ3QgY2hlY2sgaWYgbGFzdEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgYmVjYXVzZSB0aGUgbGFzdCBpdGVtIGNvdWxkIGFjdHVhbGx5IGJlIFwidW5kZWZpbmVkXCIuXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuJ3QgdGVsbCB0aGF0IGV2ZXJ5IHBsYWNlIGZvdW5kIHdhcyB0cnVlLCBsYXN0SXRlbSB3YXMgYWxzbyBzZXQ7XG4gICAgICAgIHJldHVybiBsYXN0SXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMubGFzdE9yRGVmYXVsdCA9IGxhc3RPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogbGVmdEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGxlZnRKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsZWZ0TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5sZWZ0Sm9pbiA9IGxlZnRKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBsb25nQ291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IEJpZ0ludCgwKTtcbiAgICBjb25zdCBvbmUgPSBCaWdJbnQoMSk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0ciA9IGN0ciArIG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0ciA9IGN0ciArIG9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3RyO1xufVxuZXhwb3J0cy5sb25nQ291bnQgPSBsb25nQ291bnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtYXhfcV86IFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtYXggcmVzdWx0IHJldHVybmVkLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCBvbmx5IHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKi9cbmZ1bmN0aW9uIG1heCh0cmFuc2Zvcm0sIGNvbXBhcmVyKSB7XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtYXh2YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1heHZhbCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4dmFsKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF4dmFsO1xufVxuZXhwb3J0cy5tYXggPSBtYXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtYXhCeV9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlIHVzaW5nIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBNYXhCeSBhbmQgTWF4IHdpdGggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyB0aGF0IE1heCByZXR1cm5zIHRoZSBvdXRwdXQgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIHdoaWxlIE1heEJ5XG4gKiByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS4gVGhpcyBzYW1lIHJlc3VsdCBjb3VsZCBiZSBhY2hpZXZlZCB3aXRoIE1heCBhbmQgYSB3ZWxsLWRlc2lnbmVkIGNvbXBhcmVyIGZ1bmN0aW9uLCBvZiBjb3Vyc2UuXG4gKi9cbmZ1bmN0aW9uIG1heEJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heDtcbiAgICBsZXQgbWF4VmFsdWU7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgbWF4VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1heCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heCkge1xuICAgICAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXhWYWx1ZTtcbn1cbmV4cG9ydHMubWF4QnkgPSBtYXhCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLiBJZiBzZXF1ZW5jZSBpcyBlbXB0eSwgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciB1bmRlZmluZWQuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWF4IHJlc3VsdCByZXR1cm5lZC5cbiAqIFRoaXMgaXMgYSBKT0lOLXNwZWNpZmljIG1ldGhvZC4gVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBpbiBDIy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGRlZmF1bHRWYWx1ZSBpbiBhbnl0aGluZyBidXQgdGhlIGZpbmFsIHZhbHVlLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGxpa2Ugc286IHsgZGVmYXVsdFZhbHVlIH1cbiAqL1xuZnVuY3Rpb24gbWF4T3JEZWZhdWx0KHRyYW5zZm9ybSwgY29tcGFyZXIsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBkZWY7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZGVmID0gY29tcGFyZXIuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZGVmID0gdHJhbnNmb3JtLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyICYmICEoXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heHZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4dmFsKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIG1heHZhbDtcbn1cbmV4cG9ydHMubWF4T3JEZWZhdWx0ID0gbWF4T3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWluX3FfOiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWluIHJlc3VsdCByZXR1cm5lZC5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgb25seSB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICovXG5mdW5jdGlvbiBtaW4odHJhbnNmb3JtLCBjb21wYXJlcikge1xuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlcikge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWludmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtaW52YWwpIDwgMCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnZhbDtcbn1cbmV4cG9ydHMubWluID0gbWluO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWluQnlfcV86IFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZSB1c2luZyBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICpcbiAqIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gTWluQnkgYW5kIE1pbiB3aXRoIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gaXMgdGhhdCBNaW4gcmV0dXJucyB0aGUgb3V0cHV0IG9mIHRoZSB0cmFuc2Zvcm1hdGlvbiB3aGlsZSBNaW5CeVxuICogcmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuIFRoaXMgc2FtZSByZXN1bHQgY291bGQgYmUgYWNoaWV2ZWQgd2l0aCBNaW4gYW5kIGEgd2VsbC1kZXNpZ25lZCBjb21wYXJlciBmdW5jdGlvbiwgb2YgY291cnNlLlxuICovXG5mdW5jdGlvbiBtaW5CeShrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW47XG4gICAgbGV0IG1pblZhbHVlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgIG1pblZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtaW4pIDwgMCkge1xuICAgICAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWluVmFsdWU7XG59XG5leHBvcnRzLm1pbkJ5ID0gbWluQnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5PckRlZmF1bHRfcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS4gSWYgc2VxdWVuY2UgaXMgZW1wdHksIHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgb3IgdW5kZWZpbmVkLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1pbiByZXN1bHQgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2QuIFRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgaW4gQyMuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBkZWZhdWx0VmFsdWUgaW4gYW55dGhpbmcgYnV0IHRoZSBmaW5hbCB2YWx1ZSwgaXQgbXVzdCBiZSBlbmNsb3NlZCBsaWtlIHNvOiB7IGRlZmF1bHRWYWx1ZSB9XG4gKi9cbmZ1bmN0aW9uIG1pbk9yRGVmYXVsdCh0cmFuc2Zvcm0sIGNvbXBhcmVyLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgZGVmO1xuICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGRlZiA9IGNvbXBhcmVyLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGRlZiA9IHRyYW5zZm9ybS5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlciAmJiAhKFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW52YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbnZhbCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWludmFsKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfVxuICAgIHJldHVybiBtaW52YWw7XG59XG5leHBvcnRzLm1pbk9yRGVmYXVsdCA9IG1pbk9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBvZlR5cGVfcV86IEZpbHRlcnMgdGhlIGVsZW1lbnRzIG9mIGFuIElFbnVtZXJhYmxlIGJhc2VkIG9uIGEgc3BlY2lmaWVkIHR5cGUuXG4gKlxuICogSW4gSlMgdGhpcyBpcyBraW5kIG9mIG1lYW5pbmdsZXNzLiBJZiB5b3UgcHJvdmlkZSBhIHN0cmluZywgaXQgZG9lcyBhIHR5cGVvZi4gSWYgeW91IHByb3ZpZGUgYSBjbGFzcywgaXQgZG9lcyBhbiBpbnN0YW5jZW9mLlxuICovXG5mdW5jdGlvbiBvZlR5cGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX29mVHlwZShkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGp1c3QgdGFraW5nIGl0IG9uIHRoZSBjb2RlcidzIGhvbm9yIHRoYXQgZmlsdGVyIG1hdGNoZXMgUi4gTm8gd2F5IHRvIGFjdHVhbGx5IHRlc3QgaXQuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMub2ZUeXBlID0gb2ZUeXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBPcmRlcmVkRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGVcIik7XG4vLyBXQVJOSU5HIVxuLy8gVGhlc2UgdHdvIG1ldGhvZHMgbXVzdCBiZSBhZGRlZCB0byBFbnVtZXJhYmxlIHVzaW5nIHByb3RvdHlwZSBtb2RpZmljYXRpb24sIGJlY2F1c2UgZGVjbGFyaW5nIHRoZW0gaW4gdGhlIEVudW1lcmFibGUgY2xhc3MgbWFrZXMgdGhlXG4vLyBicm93c2VyIGJsb3cgdXAuIEl0J3MgYmVjYXVzZSBvZiB0aGUgXCJuZXcgT3JkZXJlZEVudW1lcmFibGVcIiAod2hpY2ggZGVyaXZlcyBmcm9tIEVudW1lcmFibGUpIGJlaW5nIHJlZmVyZW5jZWQuXG4vKipcbiAqIG9yZGVyQnlfcV86IFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gYSBrZXkgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIFRoZSBrZXkgZnVuY3Rpb24gaXMgYWxzbyBvcHRpb25hbC4gSWYgeW91IGxlYXZlIGl0IG91dCwgaXQnbGwgZGVmYXVsdCB0byB0aGUgaWRlbnRpdHkuIEkgZ290IHRpcmVkIG9mIHdyaXRpbmcgLm9yZGVyQnlfcV8obyA9PiBvKVxuICogd2hlbiBzb3J0aW5nIG51bWJlcnMgb3Igc3RyaW5ncy4gVGhpcyBpcyBhIGNoYW5nZSBmcm9tIEMjLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgY29tcGFyZXIsIHlvdSdsbCBuZWVkIHRvIGluY2x1ZGUgdGhlIGtleSBzZWxlY3Rvci4gSXQncyBub3Qgd29ydGggbXkgd2hpbGUgdG8gbWFrZSBhIHtjb21wYXJlcn0gb2JqZWN0IHRvIGFsbG93XG4gKiBvbmx5IG9uZSBwYXJhbWV0ZXIgZm9yIHRoaXMgcmFyZSBjYXNlLlxuICovXG5mdW5jdGlvbiBvcmRlckJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAga2V5U2VsZWN0b3IgPSAoKG8pID0+IG8pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9yZGVyZWRFbnVtZXJhYmxlXzEuT3JkZXJlZEVudW1lcmFibGUodGhpcywga2V5U2VsZWN0b3IsIGNvbXBhcmVyKTtcbn1cbmV4cG9ydHMub3JkZXJCeSA9IG9yZGVyQnk7XG4vKipcbiAqIG9yZGVyQnlEZXNjZW5kaW5nX3FfOiBTb3J0cyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBpbiBkZXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleSBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogVGhlIGtleSBmdW5jdGlvbiBpcyBhbHNvIG9wdGlvbmFsLiBJZiB5b3UgbGVhdmUgaXQgb3V0LCBpdCdsbCBkZWZhdWx0IHRvIHRoZSBpZGVudGl0eS4gSSBnb3QgdGlyZWQgb2Ygd3JpdGluZyAub3JkZXJCeV9xXyhvID0+IG8pXG4gKiB3aGVuIHNvcnRpbmcgbnVtYmVycyBvciBzdHJpbmdzLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBjb21wYXJlciwgeW91J2xsIG5lZWQgdG8gaW5jbHVkZSB0aGUga2V5IHNlbGVjdG9yLiBJdCdzIG5vdCB3b3J0aCBteSB3aGlsZSB0byBtYWtlIGEge2NvbXBhcmVyfSBvYmplY3QgdG8gYWxsb3dcbiAqIG9ubHkgb25lIHBhcmFtZXRlciBmb3IgdGhpcyByYXJlIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAga2V5U2VsZWN0b3IgPSAoKG8pID0+IG8pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9yZGVyZWRFbnVtZXJhYmxlXzEuT3JkZXJlZEVudW1lcmFibGUodGhpcywga2V5U2VsZWN0b3IsIGNvbXBhcmVyLCB0cnVlKTtcbn1cbmV4cG9ydHMub3JkZXJCeURlc2NlbmRpbmcgPSBvcmRlckJ5RGVzY2VuZGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBvdXRlckpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24gbWF0Y2hpbmcga2V5cy4gSWYgbm8gbWF0Y2hpbmcgcmVjb3JkIGlzIGZpbmQgaW4gdGhlIHNlY29uZCBzZXF1ZW5jZSwgdW5kZWZpbmVkIGlzIHNlbnQgdG8gdGhlIG91dHB1dCBzZWxlY3Rvci5cbiAqIE91dGVyIEpvaW5zIGFyZSBub3QgcHJvdmlkZWQgaW4gTElOUS4gVGhpcyBpcyBhIG5ldyBmdW5jdGlvbiwgZm9sbG93aW5nIHRoZSBwYXR0ZXJuIG9mIGpvaW5fcV8oKTtcbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUga2V5c1xuICogSWYgdGhlIG91dHB1dCBzZWxlY3RvciBpcyBsZWZ0IG91dCwgcmVzdWx0cyBhcmUgcmV0dXJuZWQgYXMgW2ZpcnN0IHJvdywgc2Vjb25kIHJvd10uXG4gKiBMZWF2aW5nIHRoZSBvdXRwdXQgc2VsZWN0b3Igb3V0IHJlcXVpcmVzIHBhc3NpbmcgY29tcGFyZXIgaW4gYXMgeyBlcXVhbHM6IGNvbXBhcmVyIH0gaWYgeW91IHdhbnQgdG8gdXNlIGl0LlxuICovXG5mdW5jdGlvbiBvdXRlckpvaW4oc2Vjb25kLCBmaXJzdEtleVNlbGVjdG9yLCBzZWNvbmRLZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWZpcnN0S2V5U2VsZWN0b3IgfHwgIXNlY29uZEtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgbGV0IGVxdWFsaXplcjtcbiAgICBpZiAoY29tcGFyZXIgJiYgdHlwZW9mIGNvbXBhcmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IG91dHB1dEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgaWYgKG91dHB1dEZ1bmN0aW9uICYmIHR5cGVvZiBvdXRwdXRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgb3V0cHV0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfb3V0ZXJKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIHN0YXRpc3RpY3MgYW5kIGluZGV4IGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLiBcbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEtleSA9IHNlY29uZEtleVNlbGVjdG9yKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGVxdWFsaXplcihsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsZWZ0TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5vdXRlckpvaW4gPSBvdXRlckpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogcHJlcGVuZF9xXzogQXBwZW5kcyBhIHZhbHVlIHRvIHRoZSBzdGFydCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gcHJlcGVuZChuZXdJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3ByZXBlbmQoZGF0YSkge1xuICAgICAgICB5aWVsZCBuZXdJdGVtO1xuICAgICAgICB5aWVsZCogZGF0YTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucHJlcGVuZCA9IHByZXBlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogcmVwbGljYXRlX3FfOiBSZXBlYXQgdGhlIGl0ZW1zIGluIGEgc2VxdWVuY2UgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLlxuICovXG5mdW5jdGlvbiByZXBsaWNhdGUodGltZXMpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGxvb3AgPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihkYXRhKTtcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxvb3ApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9vcC5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlcGxpY2F0ZSA9IHJlcGxpY2F0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiByZXZlcnNlX3FfOiBJbnZlcnRzIHRoZSBvcmRlciBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZVxuICpcbiAqIFJldmVyc2UgaXMgcmVhbGx5IHBvaW50bGVzcy4gSXQgaXMgYWxyZWFkeSBmb3VuZCBvbiB0aGUgYXJyYXkgY2xhc3MsIGFuZCB3aGlsZSB0aGlzIGlzIHRlY2huaWNhbGx5XG4gKiBkZWxheWVkIGV4ZWN1dGlvbiwgaXQgY2FuIG9ubHkgd29yayBieSBnb2luZyB0aHJvdWdoIHRvIHRoZSBlbmQgb2YgdGhlIGVudW1lcmFibGUuXG4gKi9cbmZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3JldmVyc2UoZGF0YSkge1xuICAgICAgICAvLyBXaGlsZSB0aGlzIGlzIHRlY2huaWNhbGx5IGRlbGF5ZWQgZXhlY3V0aW9uLCBpdCBvYnZpb3VzbHkgbmVlZHMgdG8gcHJvY2VzcyB0aGUgZW50aXJlIGRhdGFzZXRcbiAgICAgICAgLy8gYmVjYXVzZSBpdCBoYXMgdG8gZ2V0IGFsbCB0aGUgd2F5IHRvIHRoZSBsYXN0IGl0ZW0gYmVmb3JlIHJldHVybmluZyBhIHJvdy5cbiAgICAgICAgY29uc3QgdG9SZXR1cm4gPSBbLi4uZGF0YV07XG4gICAgICAgIHdoaWxlICh0b1JldHVybi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRvUmV0dXJuLnBvcCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJldmVyc2UgPSByZXZlcnNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIHJpZ2h0Sm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgcmlnaHQgbGVmdCBvdXRlciBqb2luLiBUaGlzIGZvbGxvd3MgdGhlIHBhdHRlcm4gb2YgaW5uZXJKb2luX3FfKCksIHdoaWNoIGNvbWJpbmVzIHRoZSB0d29cbiAqIGtleSBsb29rdXBzIGFuZCBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIGlucHV0LlxuICovXG5mdW5jdGlvbiByaWdodEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgbGVmdCBzaWRlIGFnYWluc3QgZXZlcnkgcmlnaHQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCBsZWZ0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3IoZGF0YSk7XG4gICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgbGV0IHJpZ2h0TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBsZWZ0R2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uKGxlZnRJdGVtLCByaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dCh1bmRlZmluZWQsIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWZ0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yaWdodEpvaW4gPSByaWdodEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2VsZWN0X3FfOiBwcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYSBzZXF1ZW5jZSBpbnRvIGEgbmV3IGZvcm0gYnkgY2FsbGluZyBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudC5cbiAqIE9wdGlvbmFsbHksIHRoZSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqXG4gKiBjYXN0KCkgaXMgbWFwcGVkIHRvIHNlbGVjdCgpIGJlY2F1c2UgaW4gamF2YXNjcmlwdC90eXBlc2NyaXB0LCBydW50aW1lIGNhc3QoKSBkb2Vzbid0IGV4aXN0XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NlbGVjdChkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBDYXN0IG5lZWRlZCB0byBhbGxvdyBjbGVhbiBpbnRlcmZhY2Ugb3ZlcmxvYWRzXG4gICAgICAgICAgICB5aWVsZCBzZWxlY3RGdW5jdGlvbihpdGVtLCBpbmRleCsrKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2VsZWN0TWFueV9xXzogUHJvamVjdHMgZWFjaCBlbGVtZW50IG9mIGEgc2VxdWVuY2UgdG8gYW4gSUVudW1lcmFibGU8VD4sIGFuZCBmbGF0dGVucyB0aGUgcmVzdWx0aW5nIHNlcXVlbmNlcyBpbnRvIG9uZSBzZXF1ZW5jZSB1c2luZyBhIHNlbGVjdG9yIGZ1bmN0aW9uXG4gKiBvcHRpb25hbGx5LCB0aGUgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKiBhbiBvcHRpb25hbCBvdXRwdXQgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gcHJvY2Vzc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYW4gb3V0cHV0XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdE1hbnkoc3ViU2VsZWN0RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzdWJTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBpZiAoIW91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgaWYgUiBpcyBsZWZ0IG91dCwgaXQncyB0aGUgc2FtZSBhcyBURWxlbWVudC5cbiAgICAgICAgLy8gVGhpcyB3b3VsZCBhbGwgYmUgZWFzaWVyIGlmIHR5cGVzY3JpcHQgaGFkIHByb3BlciBvdmVybG9hZHMuXG4gICAgICAgIG91dHB1dEZ1bmN0aW9uID0gKChzcmMsIHJvdykgPT4gcm93KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NlbGVjdE1hbnkoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gQ2FzdCBuZWVkZWQgdG8gYWxsb3cgY2xlYW4gaW50ZXJmYWNlIG92ZXJsb2Fkc1xuICAgICAgICAgICAgY29uc3QgaXRlciA9IHN1YlNlbGVjdEZ1bmN0aW9uKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJJdGVtIG9mIGl0ZXIpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXRGdW5jdGlvbihpdGVtLCBzdWJJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zZWxlY3RNYW55ID0gc2VsZWN0TWFueTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBzZXF1ZW5jZUVxdWFsX3FfOiBEZXRlcm1pbmVzIHdoZXRoZXIgdHdvIHNlcXVlbmNlcyBhcmUgZXF1YWwgYnkgY29tcGFyaW5nIHRoZWlyIGVsZW1lbnRzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkXG4gKi9cbmZ1bmN0aW9uIHNlcXVlbmNlRXF1YWwoc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBjb25zdCBpdGVyID0gc2Vjb25kW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB2YWwxID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhbDIgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgaWYgKHZhbDEuZG9uZSAhPT0gdmFsMi5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSBsZW5ndGhcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMS5kb25lKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKCFjb21wYXJlKHZhbDEudmFsdWUsIHZhbDIudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgdGhlIHNhbWUgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWwxLnZhbHVlICE9PSB2YWwyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgdGhlIHNhbWUgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzYW1lIGxlbmd0aCBhbmQgYWxsIGl0ZW1zIGhhdmUgc2FtZSB2YWx1ZXNcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuc2VxdWVuY2VFcXVhbCA9IHNlcXVlbmNlRXF1YWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2luZ2xlX3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRocm93aW5nIGFuIGV4Y2VwdGlvbiBpZiB0aGUgc2VxdWVuY2UgaXMgZW1wdHkgb3IgaGFzIG1vcmUgdGhhbiBvbmUgaXRlbS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKi9cbmZ1bmN0aW9uIHNpbmdsZShtYXRjaEZ1bmN0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kSXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIW1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSkpIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gZm91bmRJdGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBoYXMgbm8gZWxlbWVudHMuXCIpO1xufVxuZXhwb3J0cy5zaW5nbGUgPSBzaW5nbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2luZ2xlT3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRocm93aW5nIGFuIGV4Y2VwdGlvbiBpZiB0aGUgc2VxdWVuY2UgaGFzIG1vcmUgdGhhbiBvbmUgaXRlbS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKlxuICogSWYgdGhlIGZpbHRlcmVkIHNlcXVlbmNlIGlzIGVtcHR5LCBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBwYXJhbWV0ZXIgb3IgaXMgdW5kZWZpbmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgbm90IGFuIGVtcHR5IHNlcXVlbmNlLilcbiAqXG4gKiBJbiBKYXZhU2NyaXB0LCBpZiB5b3UgY2FsbCB0aGUgbWV0aG9kIHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGFuZCB3YW50IGl0IHRvIGJlIHRoZSBkZWZhdWx0LCB0aGVyZSdzIG5vIGNsZWFuIHdheSB0byBpbmRpY2F0ZSB0aGF0IHRoaXNcbiAqIGlzIHdoYXQgeW91IHdhbnQsIGJlY2F1c2UgaXQgYnJlYWtzIHRoZSBjYXNlIHdoZXJlIHlvdSBwYXNzIGEgZmlsdGVyIGNvbmRpdGlvbi4gQSBzaW5nbGUgcHJlZGljYXRlIGNvdWxkIGJlIGEgZmlsdGVyIGNvbmRpdGlvbiBvciBpdFxuICogY291bGQgYmUgdGhlIGRlZmF1bHQgZm9yIGFuIGFycmF5IG9mIHByZWRpY2F0ZXMgLi4uIHlvdSBkb24ndCBrbm93LiBUaGVyZWZvcmUsIGlmIHlvdSB3YW50IHRvIHBhc3Mgb25seSBhIGRlZmF1bHQgdmFsdWUsIGNhbGwgbGlrZVxuICogdGhpczogc2luZ2xlT3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiBcIk5PVCBGT1VORFwiIH0pXG4gKi9cbmZ1bmN0aW9uIHNpbmdsZU9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBmb3VuZEl0ZW07XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCF0ZXN0ZXIpIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtKSkge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW07XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnRzLnNpbmdsZU9yRGVmYXVsdCA9IHNpbmdsZU9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwX3FfOiBCeXBhc3NlcyBhIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHNcbiAqL1xuZnVuY3Rpb24gc2tpcChjb3VudCkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tpcCA9IHNraXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2tpcExhc3RfcV86IFJldHVybnMgYSBuZXcgZW51bWVyYWJsZSBjb2xsZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIGZyb20gc291cmNlIHdpdGggdGhlIGxhc3QgY291bnQgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBjb2xsZWN0aW9uIG9taXR0ZWRcbiAqL1xuZnVuY3Rpb24gc2tpcExhc3QoY291bnQpIHtcbiAgICAvLyBUaGlzIGlzIGFub3RoZXIgb25lIHdoaWNoIGlzIHRlY2huaWNhbGx5IGRlZmVycmVkIGV4ZWN1dGlvbiwgYnV0IHRoZXJlJ3Mgbm8gd2F5IHRvIHNraXAgdGhlIGxhc3QgbiBpdGVtc1xuICAgIC8vIGlmIHlvdSBkb24ndCBjb3VudCB0aGUgbGlzdC5cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2tpcExhc3QoZGF0YSkge1xuICAgICAgICBsZXQgdG9SZXR1cm47XG4gICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0b1JldHVybiA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b1JldHVybiA9IFsuLi5kYXRhXS5zbGljZSgwLCAtMSAqIGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCogdG9SZXR1cm47XG4gICAgfSk7XG59XG5leHBvcnRzLnNraXBMYXN0ID0gc2tpcExhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2tpcFdoaWxlX3FfOiBCeXBhc3NlcyBlbGVtZW50cyBpbiBhIHNlcXVlbmNlIGFzIGxvbmcgYXMgYSBzcGVjaWZpZWQgY29uZGl0aW9uIGlzIHRydWUgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzLlxuICogIG9wdGlvbmFsbHksIHRoZSBmaWx0ZXIgZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKi9cbmZ1bmN0aW9uIHNraXBXaGlsZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2tpcFdoaWxlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBnb2VzIGZhbHNlLCB0cmlnZ2VyZWQgbmVlZHMgdG8gZ28gdHJ1ZSwgYW5kIGl0IGhhcyB0byBiZSBzdGlja3lcbiAgICAgICAgICAgIHRyaWdnZXJlZCA9IHRyaWdnZXJlZCB8fCAhZmlsdGVyKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tpcFdoaWxlID0gc2tpcFdoaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHN0ZXBfcV86IHJldHVybnMgZXZlcnkgXCJzdGVwXCIgaXRlbXMgZnJvbSBhIHNlcXVlbmNlXG4gKlxuICogVGhpcyBpcyBhIG5ldyBpdGVtIHRoYXQgSSBhZGRlZCBiZWNhdXNlIEkgdGhvdWdodCBpdCBtaWdodCBiZSB1c2VmdWwuXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoc3RlcENvdW50KSB7XG4gICAgaWYgKHN0ZXBDb3VudCA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9zdGVwKGRhdGEpIHtcbiAgICAgICAgbGV0IHRtcFN0ZXAgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKHRtcFN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIHN0ZXBcbiAgICAgICAgICAgIHRtcFN0ZXArKztcbiAgICAgICAgICAgIGlmICh0bXBTdGVwID09PSBzdGVwQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0bXBTdGVwID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zdGVwID0gc3RlcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzdW1fcV86IENvbXB1dGVzIHRoZSBzdW0gb2YgdGhlIHNlcXVlbmNlIG9mIHZhbHVlcyB0aGF0IGFyZSBvYnRhaW5lZCBieSBpbnZva2luZyBhbiBvcHRpb25hbCB0cmFuc2Zvcm0gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBzdW0oc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgc3VtdmFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9BZGQgPSArc2VsZWN0RnVuY3Rpb24oaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsdWVUb0FkZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBpbnZhbGlkIG51bWJlciBhZnRlciB0cmFuc2Zvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1bXZhbCA9IHN1bXZhbCArIHZhbHVlVG9BZGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdudW1iZXInIHx8IGlzTmFOKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgaW52YWxpZCBudW1iZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdW12YWwgPSBzdW12YWwgKyBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW12YWw7XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB0YWtlX3FfOiBSZXR1cm5zIGEgc3BlY2lmaWVkIG51bWJlciBvZiBjb250aWd1b3VzIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIGEgc2VxdWVuY2UuXG4gKiBUaGUgc2tpcCBwYXJhbWV0ZXIgaXMgYSBKUy1zcGVjaWZpYyBtb2RpZmljYXRpb24gdG8gaW1wbGVtZW50IFJhbmdlLCB3aGljaCBpcyBhIEMjLW9ubHkgb2JqZWN0ICh3aXRoIGFuIG9kZCBzeW50YXgpXG4gKi9cbmZ1bmN0aW9uIHRha2UoY291bnQsIHNraXAgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2UoZGF0YSkge1xuICAgICAgICBpZiAoc2tpcCA8IDApIHtcbiAgICAgICAgICAgIHNraXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoc2tpcCA+IDApIHtcbiAgICAgICAgICAgICAgICBza2lwLS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBMYXN0X3FfOiBSZXR1cm5zIGEgbmV3IGVudW1lcmFibGUgY29sbGVjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBsYXN0IGNvdW50IGVsZW1lbnRzIGZyb20gc291cmNlXG4gKi9cbmZ1bmN0aW9uIHRha2VMYXN0KGNvdW50KSB7XG4gICAgLy8gVGhpcyBpcyBhbm90aGVyIG9uZSB3aGljaCBpcyB0ZWNobmljYWxseSBkZWZlcnJlZCBleGVjdXRpb24sIGJ1dCB0aGVyZSdzIG5vIHdheSB0byB0YWtlIHRoZSBsYXN0IG4gaXRlbXNcbiAgICAvLyBpZiB5b3UgZG9uJ3QgY291bnQgdGhlIGxpc3QuXG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2VMYXN0KGRhdGEpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCogWy4uLmRhdGFdLnNsaWNlKC0xICogY291bnQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy50YWtlTGFzdCA9IHRha2VMYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VXaGlsZV9xXzogUmV0dXJucyBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZS5cbiAqIE9wdGlvbmFsbHksIHRoZSBmaWx0ZXIgZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKi9cbmZ1bmN0aW9uIHRha2VXaGlsZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZVdoaWxlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBnb2VzIGZhbHNlLCB0cmlnZ2VyZWQgbmVlZHMgdG8gZ28gdHJ1ZSwgYW5kIGl0IGhhcyB0byBiZSBzdGlja3lcbiAgICAgICAgICAgIHRyaWdnZXJlZCA9IHRyaWdnZXJlZCB8fCAhZmlsdGVyKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTG9va3VwXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvTG9va3VwXCIpO1xuLyoqXG4gKiB0b0FycmF5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBhcnJheSBjb250YWluaW5nIHRoZSBzZXF1ZW5jZSB2YWx1ZXMuXG4gKiBBbGlhc2VkIHRvIHRvTGlzdF9xXyBhcyB3ZWxsLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpc107XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuLyoqXG4gKiB0b0hhc2hTZXRfcV86IFJldHVybnMgYSBTZXQgZnJvbSBhbiBlbnVtZXJhYmxlLlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgc2V0cyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LlxuICovXG5mdW5jdGlvbiB0b0hhc2hTZXQoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIHJlc3VsdC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvSGFzaFNldCA9IHRvSGFzaFNldDtcbi8qKlxuICogdG9EaWN0aW9uYXJ5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBzdHJpbmcga2V5cyBhbmQgdmFsdWVzLCBiYXNlZCBvbiBhIGtleVNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBhbiBvcHRpb25hbCBlbGVtZW50XG4gKiBzZWxlY3RvciBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBvYmplY3RzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvRGljdGlvbmFyeShrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICAvLyBJbiBDIywgdG9EaWN0aW9uYXJ5KCkgY2FuIHByb2R1Y2UgZGljdGlvbmFyaWVzIHdpdGggbm8tc3RyaW5nIGtleXMuXG4gICAgLy8gVGhpcyBpcyBpbGxlZ2FsIGluIGphdmFzY3JpcHQsIHNvIHRvRGljdGlvbmFyeSgpIGhhcyB0byBiZSBsaW1pdGVkLlxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoa2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgZHVwbGljYXRlIGtleXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBlbGVtZW50U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvRGljdGlvbmFyeSA9IHRvRGljdGlvbmFyeTtcbi8qKlxuICogdG9NYXBfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IE1hcCB3aXRoIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCBpbiBnZW5lcmFsLCBvYmplY3RzIGRvbid0IG1ha2UgZ29vZCBNYXAga2V5cy5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBtYXBzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvTWFwKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIC8vIEluIEMjLCB0b0RpY3Rpb25hcnkoKSBjYW4gcHJvZHVjZSBkaWN0aW9uYXJpZXMgd2l0aCBub24tc3RyaW5nIGtleXMuXG4gICAgLy8gVGhpcyBpcyBpbGxlZ2FsIGluIGphdmFzY3JpcHQsIHNvIHRvRGljdGlvbmFyeSgpIGhhcyB0byBiZSBsaW1pdGVkLlxuICAgIC8vIFRvTWFwKCkgbWV0aG9kIGNvdmVycyB0aGUgZ2FwLlxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgZHVwbGljYXRlIGtleXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGVsZW1lbnRTZWxlY3RvcihpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvTWFwID0gdG9NYXA7XG4vKipcbiAqIHRvTG9va3VwX3FfOiBSZXR1cm5zIGEgTG9va3VwIChjdXN0b20gY2xhc3MpIE1hcCB3aXRoIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLiBBIExvb2t1cCBpcyBsaWtlIGEgTWFwIGV4Y2VwdCBpdCBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIHRvIGJlIHNldCBmb3IgYSBnaXZlbiBrZXkuXG4gKlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgbWFwcyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LiBCZWhpbmQgdGhlXG4gKiBzY2VuZXMsIHRoaXMgaXMgdGlsbCB1c2luZyBhIG1hcC5cbiAqXG4gKiBOb3RlIHRoYXQgaW4gZ2VuZXJhbCwgb2JqZWN0cyBkb24ndCBtYWtlIGdvb2QgTWFwIGtleXMuXG4gKi9cbmZ1bmN0aW9uIHRvTG9va3VwKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMb29rdXBfMS5Mb29rdXAoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGVsZW1lbnRTZWxlY3RvcihpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0LnNldChrZXksIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvTG9va3VwID0gdG9Mb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHVuaW9uX3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlcyByZXR1cm5pbmcgdGhlIHNldCBzZXF1ZW5jZS5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBzdXBwbGllZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiB1bmlvbihzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF91bmlvbihkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGEgbGl0dGxlIGJpdCBvZiBjb3B5cGFzdGEgaGVyZSBidXQgaXQncyBub3Qgd29ydGggbWFraW5nIGEgc3ViLWZ1bmN0aW9uIGZvciBhIHNpbmdsZSBvY2N1cnJlbmNlXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVuaW9uID0gdW5pb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHVuaW9uX3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlcyByZXR1cm5pbmcgdGhlIHNldCBzZXF1ZW5jZSAgYmFzZWQgb24ga2V5cyByZXR1cm5lZCBieSBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBzdXBwbGllZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiB1bmlvbkJ5KHNlY29uZCwga2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF91bmlvbkJ5KGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGEgbGl0dGxlIGJpdCBvZiBjb3B5cGFzdGEgaGVyZSBidXQgaXQncyBub3Qgd29ydGggbWFraW5nIGEgc3ViLWZ1bmN0aW9uIGZvciBhIHNpbmdsZSBvY2N1cnJlbmNlXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51bmlvbkJ5ID0gdW5pb25CeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB3aGVyZV9xXzogRmlsdGVycyBhIHNlcXVlbmNlIG9mIHZhbHVlcyBiYXNlZCBvbiBhIHByZWRpY2F0ZS5cbiAqIE9wdGlvbmFsbHksIHRoZSBmaWx0ZXIgZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKi9cbmZ1bmN0aW9uIHdoZXJlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF93aGVyZShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyKGl0ZW0sIGluZGV4KyspKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy53aGVyZSA9IHdoZXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHppcF9xXzogUHJvZHVjZXMgYSBzZXF1ZW5jZSBvZiB0dXBsZXMgd2l0aCBlbGVtZW50cyBmcm9tIHR3byBvciB0aHJlZSBzcGVjaWZpZWQgc2VxdWVuY2VzLlxuICogSW4gcGxhY2Ugb2YgYSB0aGlyZCBzZXF1ZW5jZSwgYSBmdW5jdGlvbiBjYW4gYmUgcHJvdmlkZWQgdGhhdCBjb21iaW5lcyB0aGUgZmlyc3QgdHdvLlxuICovXG5mdW5jdGlvbiB6aXAoc2Vjb25kLCB0aGlyZCkge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF96aXAoZGF0YSkge1xuICAgICAgICBjb25zdCBpdGVyMiA9IHNlY29uZFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGxldCBpdGVyMztcbiAgICAgICAgbGV0IGZ1bmMzO1xuICAgICAgICBsZXQgZG9uZTMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXJkICYmIHR5cGVvZiB0aGlyZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBmdW5jMyA9IHRoaXJkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXJkKSB7XG4gICAgICAgICAgICBpdGVyMyA9IHRoaXJkW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsMSA9IGRhdGEubmV4dCgpO1xuICAgICAgICAgICAgY29uc3QgdmFsMiA9IGl0ZXIyLm5leHQoKTtcbiAgICAgICAgICAgIGxldCB2YWwzO1xuICAgICAgICAgICAgaWYgKGl0ZXIzKSB7XG4gICAgICAgICAgICAgICAgdmFsMyA9IGl0ZXIzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBkb25lMyA9IHZhbDMuZG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFzIHNvb24gYXMgYW55IG9mIHRoZSBzZXF1ZW5jZXMgcnVucyBvdXQgb2YgZGF0YSwgd2UgaGFsdC5cbiAgICAgICAgICAgIGlmICh2YWwxLmRvbmUgfHwgdmFsMi5kb25lIHx8IGRvbmUzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlcjMgJiYgdmFsMykge1xuICAgICAgICAgICAgICAgIHlpZWxkIFt2YWwxLnZhbHVlLCB2YWwyLnZhbHVlLCB2YWwzLnZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZ1bmMzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWUsIGZ1bmMzKHZhbDEudmFsdWUsIHZhbDIudmFsdWUpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIFt2YWwxLnZhbHVlLCB2YWwyLnZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy56aXAgPSB6aXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEdyb3VwaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBlbGVtZW50U2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IFt2YWx1ZV07XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gZWxlbWVudFNlbGVjdEZ1bmN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBrID0+IGs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5tYXAodiA9PiB0aGlzLl9zZWxlY3Rvcih2KSk7XG4gICAgfVxuICAgIGdldCBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5tYXAodiA9PiB0aGlzLl9zZWxlY3Rvcih2KSk7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Hcm91cGluZyA9IEdyb3VwaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBleHRyYWN0Q29tcGFyZXIob2JqKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChcImNvbXBhcmVcIiBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5jb21wYXJlO1xuICAgIH1cbn1cbmV4cG9ydHMuZXh0cmFjdENvbXBhcmVyID0gZXh0cmFjdENvbXBhcmVyO1xuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKHgsIHkpIHtcbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmICh4IDwgeSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5kZWZhdWx0Q29tcGFyZXIgPSBkZWZhdWx0Q29tcGFyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKG9iaikge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoXCJlcXVhbHNcIiBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5lcXVhbHM7XG4gICAgfVxufVxuZXhwb3J0cy5leHRyYWN0RXF1YWxpdHlDb21wYXJlciA9IGV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIEEgbG9va3VwIGlzIGEgTWFwIHRoYXQgYWxsb3dzIG11bHRpcGxlIHZhbHVlcyBmb3IgZWFjaCBrZXkuIFRoZXJlIGlzIG5vIGJ1aWx0LWluIEphdmFzY3JpcHQgYW5hbG9ndWUuXG4gKi9cbmNsYXNzIExvb2t1cCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5zaXplO1xuICAgIH1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5lbnRyaWVzKCk7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmtleXMoKTtcbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS52YWx1ZXMoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX2RhdGEuY2xlYXIoKTtcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaChjYWxsYmFja2ZuKTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5nZXQoa2V5KTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGEuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9kYXRhLmdldChrZXkpO1xuICAgICAgICAgICAgaXRlbS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEuc2V0KGtleSwgW3ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5Mb29rdXAgPSBMb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzTm9uZSh0ZXN0KSB7XG4gICAgcmV0dXJuICh0ZXN0ID09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKTtcbn1cbmV4cG9ydHMuaXNOb25lID0gaXNOb25lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIENvbnNvbGVWaWV3IGV4dGVuZHMgSWNoaWdvXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW5uZXJIdG1sOiBgXG4gICAgICAgICAgICAgICAgPGgyPkxvZzwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnNvbGVMb2dcIiA6bG9vcD1cIi5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDEwcHg7XCI+PGktdj4uPC9pLXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBJY2hpZ29fMS5PYnNlcnZhYmxlUHJveHkucHJveGltYXRlKFtdKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gbmV3IEljaGlnb18xLkJvdW5kQ29tcG9uZW50KHRoaXMudmlld01vZGVsLCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NvbnNvbGVMb2cnLFxuICAgICAgICAgICAgb2JzZXJ2ZUFsbFZpZXdNb2RlbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nKHRoaW5nLCByZXN1bHQgPSBmYWxzZSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGluZyk7XG4gICAgICAgIHRoaXMudmlld01vZGVsLnB1c2goKHJlc3VsdCA/ICc+PiAnIDogJycpICsgY2xlYW4odGhpbmcpKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwucHVzaCgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2xlYW4odmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Db25zb2xlVmlldyA9IENvbnNvbGVWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhZ2VSb3V0ZXIgPSBtaTUucm91dGVyLlBhZ2VSb3V0ZXI7XG5leHBvcnRzLkJvdW5kQ29tcG9uZW50ID0gbWk1LmNvbXBvbmVudC5Cb3VuZENvbXBvbmVudDtcbmV4cG9ydHMuQ29tcG9uZW50ID0gbWk1LmNvbXBvbmVudC5Db21wb25lbnQ7XG5leHBvcnRzLk9ic2VydmFibGVQcm94eSA9IG1pNS5vYnNlcnZhYmxlLk9ic2VydmFibGVQcm94eTtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IG1pNS5odG1sLmNyZWF0ZUVsZW1lbnQ7XG5leHBvcnRzLmVzY2FwZUh0bWwgPSBtaTUuaHRtbC5lc2NhcGVIdG1sO1xuZXhwb3J0cy5wYXJhZ3JhcGggPSBtaTUuaHRtbC5wYXJhZ3JhcGg7XG5leHBvcnRzLnNwYW4gPSBtaTUuaHRtbC5zcGFuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi4vc3JjL1Byb3RvdHlwZUV4dGVuc2lvblwiKTtcbmNvbnN0IFRlc3RiZW5jaFZpZXdfMSA9IHJlcXVpcmUoXCIuLi90ZXN0cy9UZXN0YmVuY2hWaWV3XCIpO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jb25zdCBUZXN0MDAwXzEgPSByZXF1aXJlKFwiLi9UZXN0MDAwXCIpO1xuY29uc3QgVGVzdDAwMV8xID0gcmVxdWlyZShcIi4vVGVzdDAwMVwiKTtcbmNvbnN0IFRlc3QwMDJfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDJcIik7XG5jb25zdCBUZXN0MDAzXzEgPSByZXF1aXJlKFwiLi9UZXN0MDAzXCIpO1xuY29uc3QgVGVzdDAwNF8xID0gcmVxdWlyZShcIi4vVGVzdDAwNFwiKTtcbmNvbnN0IFRlc3QwMDVfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDVcIik7XG5jb25zdCBUZXN0MDA2XzEgPSByZXF1aXJlKFwiLi9UZXN0MDA2XCIpO1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBJY2hpZ29fMS5QYWdlUm91dGVyLmNvbmZpZ3VyZShbXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD0wJywgcGF5bG9hZDogVGVzdDAwMF8xLlRlc3QwMDAgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTEnLCBwYXlsb2FkOiBUZXN0MDAxXzEuVGVzdDAwMSB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9MicsIHBheWxvYWQ6IFRlc3QwMDJfMS5UZXN0MDAyIH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD0zJywgcGF5bG9hZDogVGVzdDAwM18xLlRlc3QwMDMgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTQnLCBwYXlsb2FkOiBUZXN0MDA0XzEuVGVzdDAwNCB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9NScsIHBheWxvYWQ6IFRlc3QwMDVfMS5UZXN0MDA1IH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD02JywgcGF5bG9hZDogVGVzdDAwNl8xLlRlc3QwMDYgfSxcbiAgICBdLCBUZXN0YmVuY2hWaWV3XzEuVGVzdGJlbmNoVmlldywgdHJ1ZSwgJzxkaXY+VGhlcmUgaXMgbm8gcGFnZSBoZXJlLjwvZGl2PicsICd0ZXN0LzAnKTtcbn1cbm1haW4oKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ1Rlc3QgdGhlIHRlc3QgYmVuY2gnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+VmVyaWZ5IHRoYXQgdGhlIHRlc3QgYmVuY2ggd29ya3MgYmVmb3JlIHByb2NlZWRpbmcuIFRoZSB0ZXN0IGJlbmNoIG91dHB1dHMgdG8gdGhlIGxvZyB3aGljaCBpcyBzaG93biBiZWxvdyBhbmQgaW4gdGhlIGRldiB0b29scyBjb25zb2xlLiBJZiB5b3UgZG9uJ3Qgc2VlIFwiVGVzdCBzdWNjZXNzZnVsLFwiIHRoZW4gaXQgZmFpbGVkLCB3aXRoIGFuIGVycm9yIGluIHRoZSBsb2cuIEhhcmQgdG9cbiAgICAgICAgICAgIHNob3cgdGhlIGxvZyBpbiB0aGUgcGFnZSBpZiB0aGUgcGFnZSBpcyBicm9rZW4sIHNvIGhhdmUgdG8gY2hlY2sgZGV2IHRvb2xzIGFmdGVyIGFsbC48L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDAgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQuXCIpO1xuICAgICAgICAgICAgLy8gQ29tcG9uZW50IHJlbmRlcmluZyBpcyBhc3luY2hyb25vdXMgKG9uIHRoZSBtaWNyb3Rhc2sgcXVldWUpLCBzbyBoYXZlIHRvIHRlc3Qgc2xpZ2h0bHkgYWZ0ZXJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc29sZUxvZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9nRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVuZGVyaW5nIGZhaWxlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGxvZ0VsZW1lbnQuaW5uZXJIVE1MLmluY2x1ZGVzKFwiSGVsbG8gd29ybGQuXCIpLCBcIkxvZyBzaG91bGQgdXBkYXRlIHRoZSBwYWdlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwMCA9IFRlc3QwMDA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGUgQmFzaWNzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlxuICAgICAgICAgICAgICAgIEpPSU4gdG8gSmF2YXNjcmlwdCBvZmZlcnMgdmFyaW91cyBvcGVyYXRpb25zIHN1Y2ggYXMgZmlsdGVyaW5nLCBwcm9qZWN0aW9uLCBhbmQgY291bnRpbmcgb24gaXRlcmFibGVzIHN1Y2ggYXMgYXJyYXlzLiBUaGUgSk9JTiBleHRlbnNpb24gbWV0aG9kcyBjYW4gYmUgZm91bmQgb24gYXJyYXlzLCBzbyB5b3UgY2FuIGNhbGwgdGhlbSBkaXJlY3RseSBhcyBpbiB0aGUgZXhhbXBsZSA8Y29kZT5wZW9wbGUuc2VsZWN0X3FfKHEgPT4gcS5maXJzdE5hbWUpPC9jb2RlPi4gVGhpcyBjcmVhdGVzIGFuIEVudW1lcmFibGUsIHdoaWNoIGlzIHRoZSBjbGFzcyBiZWhpbmQgZXZlcnkgSk9JTiBvcGVyYXRpb24uIEl0ZXJhYmxlIG5vbi1hcnJheXMsIHN1Y2ggYXMgTm9kZUxpc3QsIG11c3QgYmUgY29udmVydGVkIGZpcnN0IHRvIGFuIGVudW1lcmFibGUgdXNpbmcgdGhlIGFzUXVlcnlhYmxlIGV4dGVuc2lvbiwgYXMgaW4gdGhlIGV4YW1wbGUgPGNvZGU+ZWxlbWVudHMuYXNRdWVyeWFibGUoKS53aGVyZV9xXyhxID0+IHEudGFnTmFtZSA9PT0gJ2RpdicpPC9jb2RlPi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE1vc3Qgb2YgdGhlIG1ldGhvZHMgZm91bmQgaW4gSk9JTiB0byBKYXZhc2NyaXB0IGFyZSBzaW1pbGFyIHRvIG1ldGhvZHMgZm91bmQgb24gYXJyYXlzLCBidXQgdGhlcmUgaXMgYW4gaW1wb3J0YW50IGRpZmZlcmVuY2UuIE1ldGhvZHMgY2FsbGVkIG9uIGFycmF5cyBleGVjdXRlIHdoZW4geW91IGNhbGwgdGhlbS4gTWV0aG9kcyBpbiBKT0lOIHRoYXQgcmV0dXJuIHRoZSBFbnVtZXJhYmxlIGNsYXNzIG9ubHkgY3JlYXRlIHRoZSBlbnVtZXJhYmxlLiBUaGV5IGFyZSBub3QgZXhlY3V0ZWQgdW50aWwgeW91IGl0ZXJhdGUgdGhlbSBvciBjYWxsIGEgbWV0aG9kIHRoYXQgcHJvZHVjZXMgYSBub24tZW51bWVyYWJsZSByZXN1bHQuIFRoaXMgaXMga25vd24gYXMgZGVmZXJyZWQgZXhlY3V0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVmZXJyZWQgZXhlY3V0aW9uIGluIEpPSU4gaXMgbWFuYWdlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgamF2YXNjcmlwdCBnZW5lcmF0b3JzLCB3aGljaCBwcm9kdWNlIHJlY29yZHMgb25lIGJ5IG9uZSB3aGlsZSB5b3UgaXRlcmF0ZSB0aGUgZ2VuZXJhdG9yLCBtZWFuaW5nIHRoYXQgdGhleSBib3RoIGRlZmVyIHRoZSBzdGFydCBvZiB0aGUgcHJvY2VzcyBhbmQgdGhleSBoYWx0IHdoZW4gaXRlcmF0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRvIHNob3cgYnkgd2F5IG9mIGV4YW1wbGUsIHRoZSBzdGF0ZW1lbnRzPGJyLz5cbiAgICAgICAgICAgICAgICA8Y29kZT5hcnIuZmlsdGVyKGZpbHRlckZ1bmN0aW9uKS5tYXAobWFwRnVuY3Rpb24pLnNsaWNlKDAsNSk8L2NvZGU+PGJyLz5cbiAgICAgICAgICAgICAgICBhbmQ8YnIvPlxuICAgICAgICAgICAgICAgIDxjb2RlPmFyci53aGVyZV9xXyhmaWx0ZXJGdW5jdGlvbikuc2VsZWN0X3FfKG1hcEZ1bmN0aW9uKS50YWtlX3FfKDUpPC9jb2RlPjwvYnI+XG4gICAgICAgICAgICAgICAgcHJvZHVjZSB0aGUgZXhhY3Qgc2FtZSByZXN1bHRzLCBidXQgdGhleSBoYXZlIHRoZXNlIGRpZmZlcmVuY2VzOlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnRoZSByZWNvcmRzIGluIHRoZSBhcnJheSBhcmUgcHJvY2Vzc2VkIHRoYXQgbW9tZW50LCB3aGlsZSB0aGUgcmVjb3JkcyBpbiB0aGUgZW51bWVyYWJsZSBhcmUgbm90IHByb2Nlc3NlZCB1bnRpbCB5b3UgaXRlcmF0ZSB0aGVtLCBzdWNoIGFzIHVzaW5nIGEgZm9yLW9mIGxvb3A8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+ZmlsdGVyRnVuY3Rpb24gaXMgY2FsbGVkIG9uIGV2ZXJ5IHJlY29yZCBvZiB0aGUgYXJyYXksIHdoaWxlIGluIHRoZSBlbnVtZXJhYmxlIGl0IGlzIGNhbGxlZCBvbmx5IG9uIGVub3VnaCByZWNvcmRzIHRvIHByb2R1Y2UgNSB0aGF0IG1hdGNoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPm1hcEZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBldmVyeSBtYXRjaGluZyByZWNvcmQgb2YgdGhlIGFycmF5LCB3aGlsZSBpbiB0aGUgZW51bWVyYWJsZSBpdCBpcyBjYWxsZWQgYXQgbW9zdCA1IHRpbWVzPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTWV0aG9kcyB0aGF0IHJldHVybiBhIHNpbmdsZSByZXN1bHQsIHN1Y2ggYXMgY291bnRfcV8oKSBvciBtaW5fcV8oKSBvciBmaXJzdF9xXygpIG9yIHRvQXJyYXlfcV8oKSBvciB0b0RpY3Rpb25hcnlfcV8oKSB3aWxsIGVudW1lcmF0ZSB0aGUgYXJyYXksIHRoZSBzYW1lIGFzIGxvb3BpbmcgdGhyb3VnaCB3aXRoIGEgZm9yLW9mIGxvb3Agd2lsbC4gQW5vdGhlciBvcGVyYXRpb24gdGhhdCB3aWxsIG1hdGVyaWFsaXplIHRoZSBpdGVyYWJsZSBpcyBjYWxsaW5nIEpTT04uc3RyaW5naWZ5KCkgb24gaXQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBPbmNlIHlvdSBpdGVyYXRlIGFuIEVudW1lcmFibGUsIHRoZSBxdWVyeSB3aWxsIGJlIHByb2Nlc3NlZCwgYW5kIHRoZSBnZW5lcmF0b3IgcHJvdmlkaW5nIHRoZSBkYXRhIGlzIGNsb3NlZC4gSW4gQyMgTElOUSB0byBPYmplY3RzIGlmIHlvdSB3YW50IHRvIHJlLXVzZSBxdWVyeSBkYXRhLCB5b3UgY2FsbCBUb0FycmF5KCkgb24gdGhlIHF1ZXJ5IGFuZCBjYXB0dXJlIHRoZSByZXN1bHQsIGJ1dCBKT0lOIHRvIEphdmFzY3JpcHQgd2lsbCBjYWNoZSB0aGUgZGF0YSByZXR1cm5lZCBzbyBsYXRlciBpdGVyYXRpb25zIHJldHVybiBmcm9tIHRoZSBjYWNoZS4gSXQncyBzdGlsbCBnb29kIGNvZGluZyBwcmFjdGljZSB0byBiZSBleHBsaWNpdCBhbmQgdXNlIHRvQXJyYXlfcV8oKSwgYnV0IHlvdSBkb24ndCBoYXZlIHRvLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgYFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDEgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgc2ltcGxlIGVudW1lcmFibGUgYnV0IGRvIG5vdCB0cmlnZ2VyIGV4ZWN1dGlvbi5cbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zdCBxdWVyeWFibGUxID0gWzEsIDIsIDNdLnNlbGVjdF9xXyhhID0+IDMgKiBhKTsgLy8gY3JlYXRlZCBidXQgbm90IGV4ZWN1dGVkYCk7XG4gICAgICAgICAgICBjb25zdCBxdWVyeWFibGUxID0gWzEsIDIsIDNdLnNlbGVjdF9xXyhhID0+IDMgKiBhKTtcbiAgICAgICAgICAgIC8vIFRoZSBzdGF0dXMgb2YgdGhlIGdlbmVyYXRvciBpcyBoaWRkZW4gaW4gdHlwZXNjcmlwdCwgc28gdG8gZ2V0IGF0IHByaXZhdGVcbiAgICAgICAgICAgIC8vIGZpZWxkcyB3ZSBoYXZlIHRvIGNhc3QgYXMgYW55LiBZb3UgY2FuIGxvb2sgYXQgdGhpcyBpbiBkZWJ1ZyB0b29sczpcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeWFibGUxLl9zb3VyY2UpO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnNvbGUubG9nKHF1ZXJ5YWJsZTEuX2lzQ2xvc2VkKTsgLy8gc2hvdWxkIGJlIGZhbHNlYCk7XG4gICAgICAgICAgICAvLyBUaGVyZSBzZWVtcyB0byBiZSBubyB3YXkgaW4gY29kZSB0byB2aWV3IHRoZSBnZW5lcmF0b3Igc3RhdHVzIChqdXN0IHJlZCBzcXVpZ2dsZXMgdW5kZXIgW1tHZW5lcmF0b3JTdGF0dXNdXSlcbiAgICAgICAgICAgIC8vIHNvIHdlIGNoZWNrIHRoZSBfaXNDbG9zZWQgZmxhZyBzZXQgb24gZ2VuZXJhdG9yIGNsb3NlLlxuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gcXVlcnlhYmxlMS5faXNDbG9zZWQ7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDEsICdRdWVyeWFibGUgaXMgbm90IGNsb3NlZCB3aGVuIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBxdWVyeWFibGUxLnRvQXJyYXlfcV8oKTsgLy8gbWF0ZXJpYWxpemVzIHRoZSBlbnVtZXJhYmxlYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhxdWVyeWFibGUxLnRvQXJyYXlfcV8oKSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc29sZS5sb2cocXVlcnlhYmxlMS5faXNDbG9zZWQpOyAvLyBzaG91bGQgYmUgdHJ1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gcXVlcnlhYmxlMS5faXNDbG9zZWQ7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMiwgJ1F1ZXJ5YWJsZSBpcyBjbG9zZWQgYWZ0ZXIgaXRlcmF0aW9uJyk7XG4gICAgICAgICAgICAvLyBHZW5lcmF0b3JzIGNhbiBvbmx5IHByb2R1Y2UgZGF0YSBvbmNlLiBJZiBub3QgZm9yIHRoZSBjYWNoZSwgeW91J2QgaGF2ZSB0byBzcGVjaWZ5IHRoZSB3aG9sZSBjb2RlXG4gICAgICAgICAgICAvLyBbMSwgMiwgM10uc2VsZWN0X3FfKGEgPT4gMyAqIGEpIGVhY2ggdGltZSwgb3IganVzdCBzdG9yZSB0aGUgYXJyYXkgb3V0cHV0LlxuICAgICAgICAgICAgLy8gQnV0IHRoZSBFbnVtZXJhYmxlIGNsYXNzIGNhY2hlcyB0aGUgcmVzdWx0cyB3aGVuIHlvdSBwdWxsIHRoZW0sIHNvIHdoZW4gdGhlIGdlbmVyYXRvciBpcyBjbG9zZWQsIHlvdSBwdWxsIGZyb20gdGhlIGNhY2hlLlxuICAgICAgICAgICAgdGhpcy5sb2coYHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpOyAvLyBwdWxscyBmcm9tIHRoZSBjYWNoZS4gaW4gYSBkZWZhdWx0IGdlbmVyYXRvciwgdGhpcyB3b3VsZCBiZSB7fWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gcXVlcnlhYmxlMS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMy5sZW5ndGggPT09IDMsICd0b0FycmF5IHN0aWxsIHdvcmtzIGFmdGVyIGNsb3NlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmb28nLCAnYmFyJywgJ2JheiddLmFzUXVlcnlhYmxlKCkgLy8gdGFrZXMgYW4gYXJyYXksIGNvbnZlcnRzIGl0IHRvIGEgcXVlcnlhYmxlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDQgPSBbJ2ZvbycsICdiYXInLCAnYmF6J10uYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNFswXSA9PT0gJ2ZvbycgJiYgdGVzdDA0WzFdID09PSAnYmFyJyAmJiB0ZXN0MDRbMl0gPT09ICdiYXonLCAnRW51bWVyYXRlIGFuIGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgJ2FiYycuYXNRdWVyeWFibGUoKSAvLyBjYWxsaW5nIGFzUXVlcnlhYmxlKCkgb24gYSBzdHJpbmcgcHJvZHVjZXMgYSBjaGFyYWN0ZXIgZW51bWVyYWJsZSAuLi4gdGhpcyBoYXMgYSxiLGNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9ICdhYmMnLmFzUXVlcnlhYmxlKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDVbMF0gPT09ICdhJyAmJiB0ZXN0MDVbMV0gPT09ICdiJyAmJiB0ZXN0MDVbMl0gPT09ICdjJywgJ1N0cmluZ3MgY2FuIGJlIGNvbnZlcnRlZCB0byBxdWVyeWFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGAoNSkuYXNRdWVyeWFibGUoKSAvLyBjYWxsaW5nIGFzUXVlcnlhYmxlKCkgb24gYSBudW1iZXIgcHJvZHVjZXMgYSByYW5nZSBvZiBudW1iZXJzIC4uLiB0aGlzIGlzIGEgNS1pdGVtIGVudW1lcmFibGUgaGF2aW5nIDAsMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gKDUpLmFzUXVlcnlhYmxlKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYubGVuZ3RoID09PSA1ICYmIHRlc3QwNi5hbGxfcV8oKHEsIGlkeCkgPT4gcSA9PT0gaWR4KSwgJ051bWJlcnMgY2FuIGJlIGNvbnZlcnRlZCB0byBxdWVyeWFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGByYW5kb21HZW5lcmF0b3IoKS5hc1F1ZXJ5YWJsZSgpIC8vIGFueSBpdGVyYWJsZSBjYW4gYmUgY29udmVydGVkIHRvIGEgcXVlcnlhYmxlYCk7XG4gICAgICAgICAgICAvLyBhbnl0aGluZyBjYW4gYmUgdHVybmVkIGludG8gYSBxdWVyeWFibGUsIHdoaWNoIGVuYWJsZXMgdGhlIEpPSU4gbWV0aG9kc1xuICAgICAgICAgICAgZnVuY3Rpb24qIHJhbmRvbUdlbmVyYXRvcigpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCAxO1xuICAgICAgICAgICAgICAgIHlpZWxkIDQ7XG4gICAgICAgICAgICAgICAgeWllbGQgMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBxdWVyeWFibGUyID0gcmFuZG9tR2VuZXJhdG9yKCkuYXNRdWVyeWFibGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNyA9IHF1ZXJ5YWJsZTIudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDdbMF0gPT09IDEgJiYgdGVzdDA3WzFdID09PSA0ICYmIHRlc3QwN1syXSA9PT0gMTYsICdJdGVyYWJsZXMgY2FuIGJlIGNvbnZlcnRlZCB0byBhIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHtuYW1lfS5hc1F1ZXJ5YWJsZSgpIC8vIHRob3VnaCBpdCdzIHVzZWxlc3MsIG5vbi1pdGVyYWJsZSBvYmplY3RzIGNhbiBiZSBtYWRlIHF1ZXJ5YWJsZSAuLi4gdGhpcyBpcyBhIGxlbmd0aCAxIGVudW1lcmFibGUgY29udGFpbmluZyB7bmFtZX0gYXMgaXRzIG9ubHkgZWxlbWVudGApO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHsgbmFtZTogJ0ZvbycgfTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IGl0ZW0uYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOC5sZW5ndGggPT09IDEgJiYgdGVzdDA4WzBdID09PSBpdGVtLCAnYW55IG9iamVjdCBjYW4gYmUgY29udmVydGVkIHRvIGEgcXVlcnlhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDEgPSBUZXN0MDAxO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnQ29udmVyc2lvbnMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+VGhlc2UgbWV0aG9kcyBhcmUgdXNlZCB0byBjb252ZXJ0IGVudW1lcmFibGVzIGludG8gb3JkaW5hcnkgb2JqZWN0czogYXJyYXlzLCBtYXBzLCBzZXRzLCBsb29rdXBzPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDAyIGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAzLCA1XS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDVdLnRvQXJyYXlfcV8oKSAvLyBhbiBleHRyZW1lbHkgcmVkdW5kYW50IGV4YW1wbGUgLi4uIG1ha2VzIGFuIGFycmF5YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMVswXSA9PT0gMSAmJiB0ZXN0MDFbMV0gPT09IDMgJiYgdGVzdDAxWzJdID09PSA1LCAnQXJyYXkgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWzEsIDMsIDVdLnRvTGlzdF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzLCA1XS50b0xpc3RfcV8oKSAvLyB0b0xpc3RfcV8oKSBpcyBhbGlhc2VkIHRvIHRvQXJyYXlfcV8oKWApO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDJbMF0gPT09IDEgJiYgdGVzdDAyWzFdID09PSAzICYmIHRlc3QwMlsyXSA9PT0gNSwgJ0FycmF5IGlzIGNyZWF0ZWQgYnkgVG9MaXN0KCknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUpOyAvLyBwcm9kdWNlcyBhbiBvYmplY3Qgd2hlcmUga2V5cyBhcmUgQm9iIGFuZCBDYXJvbCBhbmQgdGhlIHZhbHVlcyBhcmUgdGhlIG9iamVjdCBlLmcuIHsgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvRGljdGlvbmFyeV9xXyhxID0+IHEubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwM1snQm9iJ10ud2lucyA9PT0gMjAsICdPYmplY3QgZGljdGlvbmFyeSBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9EaWN0aW9uYXJ5X3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucykgLy8gcHJvZHVjZXMge1wiQm9iXCI6MjAsXCJDYXJvbFwiOjM0fWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9EaWN0aW9uYXJ5X3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNFsnQm9iJ10gPT09IDIwLCAnTnVtYmVyIGRpY3Rpb25hcnkgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBtYXBzXG4gICAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlLmVudHJpZXMoKS5hc1F1ZXJ5YWJsZSgpLnByZXBlbmRfcV8oXCI8LSBNQVAgLT5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9nKCdOb3JtYWwgSlMgb2JqZWN0cyBjYW5ub3QgaGF2ZSBrZXlzIHRoYXQgYXJlIG5vdCBzdHJpbmdzLCBzbyBpZiB5b3Ugd2FudCBvYmplY3Qga2V5cyB5b3UgbXVzdCB1c2UgTWFwLiBUaGlzIGlzIG5vdCBleGNlZWRpbmdseSB1c2VmdWwgYmVjYXVzZSBvYmplY3RzIGRvIG5vdCBtYWtlIGdvb2Qga2V5cy4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSk7IC8vIHByb2R1Y2VzIGEgbWFwIHdpdGggeyBuYW1lIH0ga2V5c2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9NYXBfcV8ocSA9PiAoeyBuYW1lOiBxLm5hbWUgfSkpO1xuICAgICAgICAgICAgdGhpcy5sb2coSlNPTi5zdHJpbmdpZnkodGVzdDA1LCByZXBsYWNlciksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zaXplID09PSAyICYmICEhWy4uLnRlc3QwNS5rZXlzKCldLmZpbmQobSA9PiBtLm5hbWUgPT09ICdDYXJvbCcpLCAnT2JqZWN0IG1hcCBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9NYXBfcV8ocSA9PiAoeyBuYW1lOiBxLm5hbWUgfSksIHEgPT4gcS53aW5zKSAvLyBwcm9kdWNlcyBhIG1hcCB3aXRoIHsgbmFtZSB9IGtleXMgYW5kIHdpbnMgYXMgdmFsdWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvTWFwX3FfKHEgPT4gKHsgbmFtZTogcS5uYW1lIH0pLCBxID0+IHEud2lucyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDYsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA2LnNpemUgPT09IDIgJiYgWy4uLnRlc3QwNi5lbnRyaWVzKCldLmZpbmQobSA9PiBtWzBdLm5hbWUgPT09ICdDYXJvbCcpWzFdID09PSAzNCwgJ09iamVjdCBtYXAgaXMgY3JlYXRlZCB3aXRoIGVsZW1lbnQgc2VsZWN0b3InKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdKUyBvYmplY3RzIGFuZCBNYXAgZG8gbm90IGFsbG93IG11bHRpcGxlIHZhbHVlcyBmb3IgYSBrZXksIHNvIEpPSU4gcHJvZHVjZXMgYSBMb29rdXAsIHdoaWNoIGRvZXMuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnV2hlbiB5b3UgY2FsbCBzZXQoKSBvbiBhIGxvb2t1cCwgaXQgYXBwZW5kcyB0aGUgdmFsdWUgaW5zdGVhZCBvZiBvdmVyd3JpdGluZyBpdC4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lKSAvLyBDcmVhdGVzIGEgbG9va3VwIHdpdGggbmFtZSBhcyBrZXksIGhlbHBmdWwgd2hlbiBuYW1lcyBhcmUgZHVwbGljYXRlZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAxMCB9XS50b0xvb2t1cF9xXyhxID0+IHEubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDcsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LnNpemUgPT09IDIgJiYgdGVzdDA3LmdldCgnQ2Fyb2wnKS5sZW5ndGggPT09IDIgJiYgISF0ZXN0MDcuZ2V0KCdDYXJvbCcpLmZpbmQoZiA9PiBmLndpbnMgPT09IDEwKSwgJ0xvb2t1cCBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAxMCB9XS50b0xvb2t1cF9xXyhxID0+IHEubmFtZSwgcSA9PiBxLndpbnMpIC8vIENyZWF0ZXMgYSBsb29rdXAgd2l0aCBuYW1lIGFzIGtleSBhbmQgd2lucyBhcyB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAxMCB9XS50b0xvb2t1cF9xXyhxID0+IHEubmFtZSwgcSA9PiBxLndpbnMpO1xuICAgICAgICAgICAgdGhpcy5sb2coSlNPTi5zdHJpbmdpZnkodGVzdDA4LCByZXBsYWNlciksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOC5zaXplID09PSAyICYmIHRlc3QwOC5nZXQoJ0Nhcm9sJykubGVuZ3RoID09PSAyICYmICEhdGVzdDA4LmdldCgnQ2Fyb2wnKS5maW5kKGYgPT4gZiA9PT0gMTApLCAnTG9va3VwIGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMiwgMywgNCwgMV0udG9IYXNoU2V0X3FfKCkgLy8gcHJvZHVjZXMgU2V0KCkgb2YgaXRzIHVuaXF1ZSB2YWx1ZXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsxLCAyLCAyLCAzLCA0LCAxXS50b0hhc2hTZXRfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFsuLi50ZXN0MDldLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDkuc2l6ZSA9PT0gNCAmJiB0ZXN0MDkuaGFzKDEpICYmIHRlc3QwOS5oYXMoMikgJiYgdGVzdDA5LmhhcygzKSAmJiB0ZXN0MDkuaGFzKDQpLCAnU2V0IGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwMiA9IFRlc3QwMDI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdCYXNpYyBTaW5nbGUtU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGUgbWVhdCBvZiBKT0lOIHRvIGphdmFzY3JpcHQgaXMgdGFrZW4gdXAgYnkgYmFzaWMgcXVlcnkgb3BlcmF0aW9ucyB0aGF0IGV2ZXJ5b25lIHdobyB3b3JrcyB3aXRoIGFycmF5cyBpcyB1c2VkIHRvOiBmaWx0ZXJpbmcgZWxlbWVudHMsIHByb2plY3RpbmcgcmVzdWx0cywgc2xpY2luZyBhbmQgc2tpcHBpbmcsIGFuZCBzbyBvbi48L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDMgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0aGlzIGZ1bmN0aW9uIGZvciB0ZXN0aW5nLlxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgM10pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDEnKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGxlbmd0aCAyJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBpdGVtcycpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdBcmUgZXF1YWwnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdFdmVyeSBsZXNzb24gaW4gcXVlcmllcyBzdGFydHMgd2l0aCBzZWxlY3QuIFNlbGVjdCBwcm9qZWN0cyBhIGZ1bmN0aW9uIG9udG8gZXZlcnkgZW50cnkgaW4gdGhlIGVudW1lcmFibGUuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnNlbGVjdF9xXyhzID0+IHMgKiBzKSAvLyAxLDQsOSwxNiwyNWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gWzEsIDIsIDMsIDQsIDVdLnNlbGVjdF9xXyhzID0+IHMgKiBzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCA0LCA5LCAxNiwgMjVdKSwgJ1NlbGVjdCBzcXVhcmVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsxLCAyLCAzLCA0XS5zZWxlY3RfcV8oKHM6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGAke2lkeH1eMj0ke3N9YCkgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICAgIC8vIFR5cGVzY3JpcHQgaXMgYW5ub3lpbmcgYWJvdXQgdGhlIGFyZ3VtZW50IHR5cGVzLiBJdCBjYW4ndCBmaWd1cmUgdGhlbSBvdXQgYXV0b21hdGljYWxseSBsaWtlIHVzdWFsLlxuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWzEsIDIsIDMsIDRdLnNlbGVjdF9xXygocywgaWR4KSA9PiBgJHtpZHggKyAxfV4yPSR7cyAqIHN9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIuc2VxdWVuY2VFcXVhbF9xXyhbXCIxXjI9MVwiLCBcIjJeMj00XCIsIFwiM14yPTlcIiwgXCI0XjI9MTZcIl0pLCBcIlNlbGVjdCB3aXRoIGluZGV4XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RoZSBzZWNvbmQgc3RlcCBpbiBldmVyeSBsZXNzb24gaW4gcXVlcmllcyBpcyBcIndoZXJlLlwiJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLndoZXJlX3FfKHEgPT4gcSAlIDIgPT09IDApIC8vIDIsNCw2LDhgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS53aGVyZV9xXyhxID0+IHEgJSAyID09PSAwKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMy5zZXF1ZW5jZUVxdWFsX3FfKFsyLCA0LCA2LCA4XSksICdXaGVyZSBldmVuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLndoZXJlX3FfKChxOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBpZHggPCAzKSAvLyBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDQgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8oKHEsIGlkeCkgPT4gaWR4IDwgMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDQuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnV2hlcmUgd2l0aCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJZb3Ugbm93IGtub3cgOTAlIG9mIGV2ZXJ5dGhpbmcgeW91J2xsIG5lZWQuIEJ1dCBoZXJlIGFyZSBzb21lIG1vcmUgZnVuY3Rpb25zLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2tpcF9xXygyKSAvLyAzLDQsNWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBfcV8oMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDUuc2VxdWVuY2VFcXVhbF9xXyhbMywgNCwgNV0pLCAnU2tpcCBmaXJzdCAyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnNraXBMYXN0X3FfKDIpIC8vIDEsMiwzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSBbMSwgMiwgMywgNCwgNV0uc2tpcExhc3RfcV8oMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnU2tpcCBsYXN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2tpcFdoaWxlX3FfKHEgPT4gcSAhPT0gMykgLy8gc2tpcCBhcyBsb25nIGFzIGNvbmRpdGlvbiBpcyBmYWxzZSwgdGhlbiB0YWtlIHJlc3RgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNyA9IFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8ocSA9PiBxICE9PSAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNy5zZXF1ZW5jZUVxdWFsX3FfKFszLCA0LCA1XSksICdTa2lwIHVudGlsIDMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2tpcFdoaWxlX3FfKChxOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IDMpIC8vIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8oKHEsIGlkeCkgPT4gaWR4ICE9PSAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOC5zZXF1ZW5jZUVxdWFsX3FfKFs0LCA1XSksICdTa2lwV2hpbGUgd2l0aCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS50YWtlX3FfKDIpIC8vIDEsMmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDIsIDMsIDQsIDVdLnRha2VfcV8oMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMl0pLCAnVGFrZSBmaXJzdCAyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VfcV8oMywxKSAvLyAyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5c2tpcDEgPSBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygzLCAxKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDlza2lwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5c2tpcDEuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgNF0pLCAnVGFrZSBmaXJzdCAzIGFmdGVyIHNraXAgMScpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJMSU5RIGRvZXNuJ3QgaGF2ZSB0aGUgYWJpbGl0eSB0byBpdGVyYXRlIHRocm91Z2ggdGhlIGxpc3Qgc2tpcHBpbmcgZXZlcnkgbiBzdGVwcy4gU28gSSBhZGRlZCBpdC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnN0ZXBfcV8oMikgLy8gMSwgMywgNWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5c3RlcDEgPSBbMSwgMiwgMywgNCwgNV0uc3RlcF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDlzdGVwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5c3RlcDEuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMywgNV0pLCAnU3RlcCBldmVyeSAyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDddLnN0ZXBfcV8oMykgLy8gMSwgNCwgN2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5c3RlcDIgPSBbMSwgMiwgMywgNCwgNSwgNiwgN10uc3RlcF9xXygzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDlzdGVwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5c3RlcDIuc2VxdWVuY2VFcXVhbF9xXyhbMSwgNCwgN10pLCAnU3RlcCBldmVyeSAzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VMYXN0X3FfKDIpIC8vIDQsNWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEwID0gWzEsIDIsIDMsIDQsIDVdLnRha2VMYXN0X3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEwLnNlcXVlbmNlRXF1YWxfcV8oWzQsIDVdKSwgJ1Rha2UgbGFzdCAyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXyhxID0+IHEgIT09IDMpIC8vIFJldHVybiByb3dzIHVudGlsIGNvbmRpdGlvbiBpcyB0cnVlLCB0aGVuIHN0b3BgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMSA9IFsxLCAyLCAzLCA0LCA1XS50YWtlV2hpbGVfcV8ocSA9PiBxICE9PSAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyXSksICdUYWtlV2hpbGUgbm90IDMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZVdoaWxlX3FfKChxOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IDMpIC8vIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMiA9IFsxLCAyLCAzLCA0LCA1XS50YWtlV2hpbGVfcV8oKHEsIGlkeCkgPT4gaWR4ICE9PSAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMi5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdUYWtlV2hpbGUgd2l0aCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAxLCAyLCAyLCAyLCAzLCAzLCAzLCAzXS5kaXN0aW5jdF9xXygpIC8vIDEsMiwzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTMgPSBbMSwgMSwgMiwgMiwgMiwgMywgMywgMywgM10uZGlzdGluY3RfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMy5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdHZXQgZGlzdGluY3QgZW50cmllcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV0uZGlzdGluY3RfcV8oKHEsIHIpID0+IHEuYSA9PT0gci5hKSAvLyBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgcGFzc2VkIGUuZy4gdG8gYWxsb3cgY29tcGFyaXNvbiBieSBrZXlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV1cbiAgICAgICAgICAgICAgICAuZGlzdGluY3RfcV8oKHEsIHIpID0+IHEuYSA9PT0gci5hKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0Rpc3RpbmN0IHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XS5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hKSAvLyBkaXN0aW5jdEJ5KCkgZG9lcyBpdHMgY2hlY2sgYmFzZWQgb24gYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiKEkga25vdyB0aGlzIGlzIGFsbW9zdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMsIGJ1dCBpdCB3YXMgYWRkZWQgaW4gLk5ldCA2KVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNSA9IFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV1cbiAgICAgICAgICAgICAgICAuZGlzdGluY3RCeV9xXyhxID0+IHEuYSlcbiAgICAgICAgICAgICAgICAudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTUubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdEaXN0aW5jdCBieSBrZXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dLmRpc3RpbmN0QnlfcV8ocSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpIC8vIGFsc28gdGFrZXMgYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNiA9IFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV1cbiAgICAgICAgICAgICAgICAuZGlzdGluY3RCeV9xXyhxID0+IHEuYSwgKHEsIHIpID0+IHEgJSAyID09PSByICUgMilcbiAgICAgICAgICAgICAgICAudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTYubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyXSksICdEaXN0aW5jdCBieSBrZXk6IG9uZSBldmVuICYgb25lIG9kZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJTZWxlY3RNYW55KCkgbG9vcHMgdGhyb3VnaCB0aGUgZmlyc3QgbGV2ZWwsIGZsYXR0ZW5zIGFuIGFycmF5IHdpdGhpbiB0aGF0IGxldmVsLCBhbmQgcmV0dXJucyBpdCBhdCB0aGUgdG9wIGxldmVsLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiY29uc3QgbnVtYmVyU2V0cyA9IFt7IHR5cGU6ICdvZGQnLCBudW1iZXJzOiBbMSwgMywgNV0gfSwgeyB0eXBlOiAnZXZlbicsIG51bWJlcnM6IFsyLCA0LCA2XSB9LCB7IHR5cGU6ICdwcmltZScsIG51bWJlcnM6IFsyLCA1LCA3LCAxMV0gfV07IC8vIHNldmVyYWwgZXhhbXBsZXMgd2lsbCB3b3JrIHdpdGggdGhpc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBudW1iZXJTZXRzLnNlbGVjdE1hbnlfcV8ocSA9PiBxLm51bWJlcnMpIC8vIDEsMyw1LDIsNCw2LDIsNSw3LDExYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8ocSA9PiBxLm51bWJlcnMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDMsIDUsIDIsIDQsIDYsIDIsIDUsIDcsIDExXSksICdTZWxlY3QgbWFueSBmbGF0dGVucyBpbnNpZGUgYXJyYXlzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIm51bWJlclNldHMuc2VsZWN0TWFueV9xXygocTogeyB0eXBlOiBzdHJpbmcsIG51bWJlcnM6IG51bWJlcltdIH0sIGlkeDogbnVtYmVyKSA9PiBxLm51bWJlcnMubWFwKG0gPT4gYCR7aWR4fTogJHttfWApIC8vIGZ1bmN0aW9uIHRvIGdldCBpdGVyYWJsZSBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgLy8gdHlwZXNjcmlwdCByZWFsbHkgZG9lc24ndCB3YW50IHRvIGRvIGFueSBhdXRvLXR5cGVtYXBwaW5nIGhlcmVcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOCA9IFt7IHR5cGU6ICdvZGQnLCBudW1iZXJzOiBbMSwgMywgNV0gfSwgeyB0eXBlOiAnZXZlbicsIG51bWJlcnM6IFsyLCA0LCA2XSB9LCB7IHR5cGU6ICdwcmltZScsIG51bWJlcnM6IFsyLCA1LCA3LCAxMV0gfV0uc2VsZWN0TWFueV9xXygocSwgaWR4KSA9PiBxLm51bWJlcnMubWFwKG0gPT4gYCR7aWR4fTogJHttfWApKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOC5zZXF1ZW5jZUVxdWFsX3FfKFtcIjA6IDFcIiwgXCIwOiAzXCIsIFwiMDogNVwiLCBcIjE6IDJcIiwgXCIxOiA0XCIsIFwiMTogNlwiLCBcIjI6IDJcIiwgXCIyOiA1XCIsIFwiMjogN1wiLCBcIjI6IDExXCJdKSwgJ1NlbGVjdE1hbnkgd2l0aCBpbmRleCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJudW1iZXJTZXRzLnNlbGVjdE1hbnlfcV8ocSA9PiBxLm51bWJlcnMsIChzLCByZXMpID0+IGAke3MudHlwZX06ICR7cmVzfWApIC8vIGFuIG91dHB1dCBmdW5jdGlvbiBjYW4gYmUgcHJvdmlkZWQgdG8gcHJvamVjdCBvbnRvIHRoZSBmbGF0dGVuZWQgcmVzdWx0cywgbGV0dGluZyB5b3UgY29tYmluZSBwYXJlbnQgYW5kIGNoaWxkXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE5ID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XS5zZWxlY3RNYW55X3FfKHEgPT4gcS5udW1iZXJzLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9OiAke3Jlc31gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOS5zZXF1ZW5jZUVxdWFsX3FfKFtcIm9kZDogMVwiLCBcIm9kZDogM1wiLCBcIm9kZDogNVwiLCBcImV2ZW46IDJcIiwgXCJldmVuOiA0XCIsIFwiZXZlbjogNlwiLCBcInByaW1lOiAyXCIsIFwicHJpbWU6IDVcIiwgXCJwcmltZTogN1wiLCBcInByaW1lOiAxMVwiXSksICdTZWxlY3RNYW55IHdpdGggb3V0cHV0IGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIm51bWJlclNldHMuc2VsZWN0TWFueV9xXygocTogeyB0eXBlOiBzdHJpbmcsIG51bWJlcnM6IG51bWJlcltdIH0sIGlkeDogbnVtYmVyKSA9PiBxLm51bWJlcnMubWFwKG0gPT4gYCgjJHtpZHh9KSAke219YCksIChzLCByZXMpID0+IGAke3MudHlwZX0gJHtyZXN9YCkgLy8gb3V0cHV0IGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8oKHEsIGlkeCkgPT4gcS5udW1iZXJzLm1hcChtID0+IGAoIyR7aWR4fSkgJHttfWApLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9ICR7cmVzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLnNlcXVlbmNlRXF1YWxfcV8oW1wib2RkICgjMCkgMVwiLCBcIm9kZCAoIzApIDNcIiwgXCJvZGQgKCMwKSA1XCIsIFwiZXZlbiAoIzEpIDJcIiwgXCJldmVuICgjMSkgNFwiLCBcImV2ZW4gKCMxKSA2XCIsIFwicHJpbWUgKCMyKSAyXCIsIFwicHJpbWUgKCMyKSA1XCIsIFwicHJpbWUgKCMyKSA3XCIsIFwicHJpbWUgKCMyKSAxMVwiXSksIFwiU2VsZWN0TWFueSB3aXRoIGluZGV4IGluIG91dHB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uY2FzdF9xXyhudW0gPT4gbnVtLnRvU3RyaW5nKCkpIC8vIENhc3QoKSBpcyBpbXBvc3NpYmxlIGluIEpTLCBzbyBjYXN0X3FfKCkgaXMganVzdCBhbiBhbGlhcyBmb3Igc2VsZWN0X3FfKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFsxLCAyLCAzXS5jYXN0X3FfKG51bSA9PiBudW0udG9TdHJpbmcoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCIxXCIsIFwiMlwiLCBcIjNcIl0pLCBcIkNhc3QgcnVucyBjb252ZXJzaW9uIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAndHdvJywgMywgJ3RocmVlJywgNCwgJ2ZvdXInXS5vZlR5cGVfcV8oJ251bWJlcicpIC8vIE9mVHlwZSgpIGlzIGFsc28gbm9uc2Vuc2UgaW4gSlMsIHNvIHRoaXMgZWl0aGVyIGRvZXMgdHlwZW9mIChpZiBhIHN0cmluZyBpcyBwYXNzZWQpIG9yIGluc3RhbmNlb2YgKGlmIGFueXRoaW5nIGVsc2UpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjIgPSBbMiwgJ3R3bycsIDMsICd0aHJlZScsIDQsICdmb3VyJ10ub2ZUeXBlX3FfKCdudW1iZXInKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0XSksICdPZlR5cGUgbnVtYmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDMgPSBUZXN0MDAzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3NyYy9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdBZHZhbmNlZCBTaW5nbGUtU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGlzIHBhZ2UgZGVhbHMgd2l0aCBtb3JlIGFkdmFuY2VkIHF1ZXJpZXMgdGhhdCBjYW4gYmUgY2FsbGVkIG9uIGEgc2luZ2xlIGl0ZXJhYmxlLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwNCBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMScpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGl0ZW1zJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0FyZSBlcXVhbCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIFsxLDIsM11cbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uZGVmYXVsdElmRW1wdHlfcV8oKSAvLyBub3QgZW1wdHkgc28gaXQgcGFzc2VzIHRocm91Z2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzXS5kZWZhdWx0SWZFbXB0eV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0RlZmF1bHRJZkVtcHR5IHdoZW4gbm90IGVtcHR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10uZGVmYXVsdElmRW1wdHlfcV8oLTEpIC8vIFstMV0gd2hlbiBubyBkYXRhYCk7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB3aGF0IHR5cGUgW10gaXMgc3VwcG9zZWQgdG8gYmUuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbXS5kZWZhdWx0SWZFbXB0eV9xXygtMSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIubGVuZ3RoID09PSAxICYmIHRlc3QwMlswXSA9PT0gLTEsICdEZWZhdWx0SWZFbXB0eSBzdXBwbGllcyByb3cgd2hlbiBlbXB0eSBpdGVyYWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5hcHBlbmRfcV8oNCkgLy8gMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDNdLmFwcGVuZF9xXyg0KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMy5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzLCA0XSksICdBcHBlbmQgYWRkcyB0byBlbmQgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBcIm5ldyBmaXJzdFwiLFwiZmlyc3RcIixcInNlY29uZFwiXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKSAvLyBhZGRzIG5ldyBmaXJzdCB0byBzdGFydGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNC5zZXF1ZW5jZUVxdWFsX3FfKFsnbmV3IGZpcnN0JywgJ2ZpcnN0JywgJ3NlY29uZCddKSwgJ1ByZXBlbmQgYWRkcyB0byBiZWdpbm5pbmcgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgNCwgNiwgMSwgMywgNSwgN10ucmV2ZXJzZV9xXygpIC8vIHJldmVyc2VzIHRoZSBhcnJheWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzIsIDQsIDYsIDEsIDMsIDUsIDddLnJldmVyc2VfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zZXF1ZW5jZUVxdWFsX3FfKFs3LCA1LCAzLCAxLCA2LCA0LCAyXSksICdSZXZlcnNlIHJldmVyc2VzIGFsbCBlbGVtZW50cycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykgLy8gY29uY2F0ZW5hdGVzIHRoZSBzZXF1ZW5jZSB3aXRoIGl0c2VsZiBuIHRpbWVzIC4uLiB0aGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2Qgbm90IGluIExJTlFgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl0pLCAnUmVwbGljYXRlIHJlcGVhdHMgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2EnLCAnYicsIDEsIDJdLmVtcHR5X3FfKCkgLy8gY3JlYXRlIGFuIGVtcHR5IGFycmF5IG9mIHRoZSBzYW1lIHR5cGUgYXMgc2VxdWVuY2UgLi4uIG5vdGUgdGhhdCB0eXBlIG1lYW5zIHNvbWV0aGluZyBpbiB0eXBlc2NyaXB0IGJ1dCBqYXZhc2NyaXB0IGRvZXNuJ3QgY2FyZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWydhJywgJ2InLCAxLCAyXS5lbXB0eV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDcubGVuZ3RoID09PSAwLCAnRW1wdHkoKSByZXR1cm5zIGVtcHR5IGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLmNodW5rX3FfKDMpIC8vIGJyZWFrIGFycmF5IGludG8gY2h1bmtzIG9mIHByb3ZpZGVkIHNpemVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5jaHVua19xXygzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QwOCkgPT09IFwiW1sxLDIsM10sWzQsNSw2XSxbNyw4XV1cIiwgXCJDaHVuayBicmVha3MgaXRlcmFibGUgaW50byBjaHVua3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgb3JkZXJCeV9xXygpIGFuZCBvcmRlckJ5RGVzY2VuZGluZ19xXygpIG9yZGVyIGJ5IHRoZSByZXN1bHQgb2YgYSBwcm92aWRlZCBrZXkgc2VsZWN0b3IgbWV0aG9kLmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RoZSByZXN1bHQgb2YgdGhlIHR3byBvcmRlckJ5IG1ldGhvZHMgYXJlIGVudW1lcmFibGVzIHRoYXQgaGF2ZSB0d28gbWV0aG9kcyBub3QgZm91bmQgaW4gZGVmYXVsdCBFbnVtZXJhYmxlczonKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGB0aGVuQnlfcV88VEtleT4ob3JkZXJCeT86IElGdW5jMTxULCBUS2V5PiwgY29tcGFyZXI/OiBJRnVuYzI8VEtleSwgVEtleSwgMSB8IDAgfCAtMT4pOiBJT3JkZXJlZEVudW1lcmFibGU8VD47YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgdGhlbkJ5RGVzY2VuZGluZ19xXzxUS2V5PihvcmRlckJ5PzogSUZ1bmMxPFQsIFRLZXk+LCBjb21wYXJlcj86IElGdW5jMjxUS2V5LCBUS2V5LCAxIHwgMCB8IC0xPik6IElPcmRlcmVkRW51bWVyYWJsZTxUPmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5RGVzY2VuZGluZ19xXyhvID0+IG8pIC8vIG9yZGVyIGJ5IHdvcmQgbGVuZ3RoIHRoZW4gcmV2ZXJzZSBhbHBoYWJldGljYWxgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5RGVzY2VuZGluZ19xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNlcXVlbmNlRXF1YWxfcV8oW1wiZG9nXCIsIFwiY2F0XCIsIFwiZmlzaFwiLCBcImJpcmRcIiwgXCJ0dXJ0bGVcIiwgXCJpZ3VhbmFcIl0pLCAnT3JkZXJCeSgpIGZvbGxvd2VkIGJ5IFRoZW5CeURlc2NlbmRpbmcoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlEZXNjZW5kaW5nX3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeV9xXygpIC8vIHJldmVyc2UgbGVuZ3RoIHRoZW4gYWxwaGFiZXRpY2FsIC4uLiBlbXB0eSBrZXlTZWxlY3RvciBpcyB0aGUgc2FtZSBhcyAoa2V5ID0+IGtleSlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMCA9IFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlEZXNjZW5kaW5nX3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEwLnNlcXVlbmNlRXF1YWxfcV8oW1wiaWd1YW5hXCIsIFwidHVydGxlXCIsIFwiYmlyZFwiLCBcImZpc2hcIiwgXCJjYXRcIiwgXCJkb2dcIl0pLCAnT3JkZXJCeURlc2NlbmRpbmcoKSBmb2xsb3dlZCBieSBUaGVuQnkoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RoZSBmb2xrcyBhdCBNaWNyb3NvZnQgZ2F2ZSB1cyBhIGxvdCBvZiBvdmVybG9hZHMgZm9yIEdyb3VwQnkoKSwgbW9zdCBvZiB0aGVtIG5vdCByZWFsbHkgbmVjZXNzYXJ5IG9yIGV4dHJlbWVseSB1c2VmdWwnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0pIC8vIEdyb3VwIGJ5IGZpcnN0IGxldHRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxMSkgPT09IGBbW1wiQXBwbGVcIixcIkFwcmljb3RcIl0sW1wiQ2FudGVsb3VwZVwiXSxbXCJCYW5hbmFcIixcIkJsdWViZXJyeVwiXV1gLCAnQmFzaWMgR3JvdXBCeScpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJXaGlsZSB0aGUgcmVzdWx0IG9mIHRoZSBncm91cCBvcGVyYXRpb24gaXMgYW4gaXRlcmFibGUgdGhhdCBhcHBlYXJzIGFzIGlmIGl0J3MganVzdCBhbiBhcnJheSwgaXQncyBhY3R1YWxseSBhbiBvYmplY3QgdGhhdCBjb250YWlucyBmaWVsZHMgbmFtZWQgJ2tleScgYW5kICd2YWx1ZXMnXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSkudG9BcnJheV9xXygpLm1hcChtID0+IG0ua2V5KSAvLyBzZWUgdGhlIGtleXMgb2YgZWFjaCBncm91cGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKS50b0FycmF5X3FfKCkubWFwKG0gPT4gbS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTIuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQ1wiLCBcIkJcIl0pLCBcIkFjY2VzcyBrZXkgb2YgZ3JvdXBpbmdcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSkgLy8gY2FuIHRha2UgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gdG8gYmUgYXBwbGllZCB0byBncm91cGluZyBlbGVtZW50c2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEzID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTMpID09PSBgW1tcIkFQUExFXCIsXCJBUFJJQ09UXCJdLFtcIkNBTlRFTE9VUEVcIl0sW1wiQkFOQU5BXCIsXCJCTFVFQkVSUllcIl1dYCwgXCJHcm91cEJ5IHdpdGggZWxlbWVudCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSwgKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gKSAvLyBjYW4gdGFrZSBhbiBvcHRpb25hbCBvdXRwdXQgdHJhbnNmb3JtYXRpb24gdG8gYmUgcHJvamVjdGVkIG9udG8gdGhlIHJldHVybmVkIGdyb3VwaW5nc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1LnRvVXBwZXJDYXNlKCksIChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTQuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBUFBMRSBhbmQgQVBSSUNPVFwiLCBcIkMgaXMgZm9yIENBTlRFTE9VUEVcIiwgXCJCIGlzIGZvciBCQU5BTkEgYW5kIEJMVUVCRVJSWVwiXSksIFwiR3JvdXBCeSB3aXRoIG91dHB1dCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUgKyAnIScsIChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAsIChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikpIC8vIGNhbiB0YWtlIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE1ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUgKyAnIScsIChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAsIChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1LnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGUhIGFuZCBCYW5hbmEhIGFuZCBBcHJpY290ISBzdGFydCB3aXRoIGNhcGl0YWxcIiwgXCJjYW50ZWxvdXBlISBhbmQgYmx1ZWJlcnJ5ISBzdGFydCB3aXRoIGxvd2VyY2FzZVwiXSksIFwiR3JvdXBCeSB3aXRoIGN1c3RvbSBlcXVhbGl0eVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTm93IGhlcmUncyB3aGVyZSBpdCB0dXJucyBpbnRvIGEgcmVhbCBtZXNzLiBVcCB1bnRpbCBub3csIHdlJ3ZlIGp1c3QgYmVlbiBhZGRpbmcgYSBuZXcgcGFyYW1ldGVyIGF0IHRoZSBlbmQuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJCdXQgd2hhdCBpZiB5b3Ugd2FudCB0byB1c2Ugb25seSB0aGUgY3VzdG9tIGVxdWFsaXR5LCBidXQgbm90aGluZyBlbHNlLiBFYXN5IHRvIGRvIGluIEMjLiBOb3Qgc28gZWFzeSBpbiBKUy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlR5cGVzY3JpcHQgaGFzIHNvbWUgc21hbGwgYW1vdW50IG9mIG92ZXJsb2FkIGRlY2xhcmF0aW9uLCBidXQgaXQncyB2ZXJ5IHdlYWsgYW5kIGRvZXNuJ3QgZW1pdCBhbnl0aGluZy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgU3VyZSwgeW91IGNvZGUgdGhlIGZvbGxvd2luZzpgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24/OiBmdW5jdGlvbik7YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24/OiBmdW5jdGlvbik7YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgQnV0IGphdmFzY3JpcHQgc2VlcyBvbmx5IGZ1bmN0aW9uIGdyb3VwQnlfcV8oZnVuY3Rpb24sIGZ1bmN0aW9uKS5gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdXaGljaCBvdmVybG9hZCB3YXMgaXQ/IEphdmFzY3JpcHQgaGFzIG5vIGlkZWEgd2hhdHNvZXZlci4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiU28gaWYgeW91IHdhbnQgdG8gc2tpcCBwYXJhbWV0ZXJzLCB5b3UgaGF2ZSB0byBlbmNsb3NlIHRoZW0gaW4gb2JqZWN0cy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBjdXN0b20gZXF1YWxpdHkgYnV0IG5vIGVsZW1lbnQgb3Igb3V0cHV0IGZ1bmN0aW9uc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxNikgPT09IGBbW1wiQXBwbGVcIixcIkJhbmFuYVwiLFwiQXByaWNvdFwiXSxbXCJjYW50ZWxvdXBlXCIsXCJibHVlYmVycnlcIl1dYCwgJ0dyb3VwQnkgd2l0aCBvbmx5IGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkgLy8gY3VzdG9tIG91dHB1dCBwcm9qZWN0b3Igb25seVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBcHBsZSBhbmQgQXByaWNvdFwiLCBcIkMgaXMgZm9yIENhbnRlbG91cGVcIiwgXCJCIGlzIGZvciBCYW5hbmEgYW5kIEJsdWViZXJyeVwiXSksIFwiR3JvdXBCeSB3aXRoIG9ubHkgcHJvamVjdG9yXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBldmVyeXRoaW5nIGJ1dCBlbGVtZW50IGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTguc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZSBhbmQgQmFuYW5hIGFuZCBBcHJpY290IHN0YXJ0IHdpdGggY2FwaXRhbFwiLCBcImNhbnRlbG91cGUgYW5kIGJsdWViZXJyeSBzdGFydCB3aXRoIGxvd2VyY2FzZVwiXSksIFwiR3JvdXBCeSB3aXRoIG5vIGVsZW1lbnQgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHEgPT4gcSArICchJyB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBldmVyeXRoaW5nIGJ1dCBvdXRwdXQgcHJvamVjdG9yYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogcSA9PiBxICsgJyEnIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDE5KSA9PT0gYFtbXCJBcHBsZSFcIixcIkJhbmFuYSFcIixcIkFwcmljb3QhXCJdLFtcImNhbnRlbG91cGUhXCIsXCJibHVlYmVycnkhXCJdXWAsICdHcm91cEJ5IHdpdGggbm8gb3V0cHV0IGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiB1ID0+IHUudG9VcHBlckNhc2UoKSB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCB9KSAvLyBvYmplY3QgbmFtZXMgdXNlZCBidXQgb3RoZXJ3aXNlIHNhbWUgYXMgZ3JvdXBCeShrZXksIGVsZW1lbnQsIG91dHB1dClcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogdSA9PiB1LnRvVXBwZXJDYXNlKCkgfSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjAuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBUFBMRSBhbmQgQVBSSUNPVFwiLCBcIkMgaXMgZm9yIENBTlRFTE9VUEVcIiwgXCJCIGlzIGZvciBCQU5BTkEgYW5kIEJMVUVCRVJSWVwiXSksIFwiR3JvdXBCeSB3aXRoIG9iamVjdCBuYW1lc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdSArICchJyB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkgLy8gZXZlcnl0aGluZyBzdXBwbGllZCwganVzdCBpbiBvYmplY3RzXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIxID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdSArICchJyB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZSEgYW5kIEJhbmFuYSEgYW5kIEFwcmljb3QhIHN0YXJ0IHdpdGggY2FwaXRhbFwiLCBcImNhbnRlbG91cGUhIGFuZCBibHVlYmVycnkhIHN0YXJ0IHdpdGggbG93ZXJjYXNlXCJdKSwgJ0dyb3VwQnkgYWxsIGluIG9iamVjdHMnKTtcbiAgICAgICAgICAgIC8vIFRlc3Qgc3RhdGljIG1ldGhvZHMgb24gRW51bWVyYWJsZSAobm90IHBhcnQgb2YgSVF1ZXJ5YWJsZSwgYnV0IHN0aWxsIGluIFN5c3RlbS5MaW5xKS4uLlxuICAgICAgICAgICAgdGhpcy5sb2coYEVudW1lcmFibGUucmFuZ2VfcV8oMiwgMTApIC8vIFN5c3RlbS5MaW5xIGFsc28gaW5jbHVkZXMgdHdvIHN0YXRpYyBub24tZXh0ZW5zaW9uIG1ldGhvZHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJhbmdlX3FfKDIsIDEwKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdKSwgJ1JhbmdlKCkgcmV0dXJucyBhIHJhbmdlIG9mIG51bWJlcnMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBFbnVtZXJhYmxlLnJlcGVhdF9xXyhcInNwYW1cIiwgNCkgLy8gdGhpcyBpcyB0aGUgb3RoZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJlcGVhdF9xXyhcInNwYW1cIiwgNCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjMuc2VxdWVuY2VFcXVhbF9xXyhbXCJzcGFtXCIsIFwic3BhbVwiLCBcInNwYW1cIiwgXCJzcGFtXCJdKSwgJ1JlcGVhdCgpIHJlcGVhdHMgYW4gZWxlbWVudCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJOb3JtYWxseSB0byBjb3VudCBhbiBlbnVtZXJhYmxlLCB5b3UgbXVzdCBlbnVtZXJhdGUgaXQsIG1hdGVyaWFsaXppbmcgaXRzIGRhdGEuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJMSU5RIHByb3ZpZGVzIHRoaXMgbWV0aG9kLCB0cnlHZXROb25FbnVtZXJhdGVkQ291bnQoKSwgd2hpY2ggdHJpZXMgdG8gZ2V0IHRoZSBjb3VudCBmcm9tIHRoZSB1bmRlcmx5aW5nIG9iamVjdCwgd2hlbiBwb3NzaWJsZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiSXQgd29ya3MgdXNpbmcgYW4gb3V0IHZhciwgbGlrZSBhbGwgVHJ5R2V0U29tZXRoaW5nKCkgbWV0aG9kcyBpbiBDIy4gVGhpcyBkb2Vzbid0IGV4aXN0IGluIEpTLiBUbyBtYWtlIGl0IHdvcmssIHlvdSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0LCB3aGljaCBpcyB1cGRhdGVkLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zdCBjb3VudFZhbCA9IHsgdmFsdWU6IDAgfSAvLyBub3cgXCJ2YWx1ZVwiIGNhbiBiZSB1cGRhdGVkIGFuZCB0aGUgcmVmZXJlbmNlIHJldHVybmVkYCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zdCBjb3VudFZhbCA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0udHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKSAvLyBzaG91bGQgcmV0dXJuIHRydWUgYW5kIDQsIGJlY2F1c2UgdGhpcyBpcyBhbiBhcnJheWApO1xuICAgICAgICAgICAgY29uc3QgY291bnQxID0gWzEsIDIsIDMsIDRdLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQxLCBjb3VudFZhbC52YWx1ZV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGNvdW50MSAmJiBjb3VudFZhbC52YWx1ZSA9PT0gNCwgXCJ0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgcmV0dXJuZWQgYXJyYXkgY291bnRcIik7XG4gICAgICAgICAgICBjb3VudFZhbC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3Qgc3F1YXJlcyA9IFsxLCAyLCAzLCA0XS5zZWxlY3RfcV8ocyA9PiBzICoqIDIpOyBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCkgLy8gbm90IHBvc3NpYmxlIGFzIHRoZSBhcnJheSBpcyBidXJpZWQgdW5kZXIgYSBnZW5lcmF0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKHMgPT4gTWF0aC5wb3cocywgMikpO1xuICAgICAgICAgICAgY29uc3QgY291bnQyID0gc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGZhbHNlLCAwXG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQyLCBjb3VudFZhbC52YWx1ZV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFjb3VudDIgJiYgY291bnRWYWwudmFsdWUgPT09IDAsICd0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgY291bGQgbm90IGdldCBmcm9tIGdlbmVyYXRvcicpO1xuICAgICAgICAgICAgLy8gTm93IHdlJ3ZlIGdvbmUgYW5kIG1hdGVyaWFsaXplZCBpdCBzbyB3ZSBjYW4gZ2V0IHRoZSBjb3VudCAoaXQncyBhY3R1YWxseSB0aGUgZW51bWVyYXRlZCBjb3VudClcbiAgICAgICAgICAgIHRoaXMubG9nKGBzcXVhcmVzLmNvdW50X3FfKCk7IHNxdWFyZXMudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKTsgLy8gTm93IHRoYXQgaXQncyBiZWVuIGVudW1lcmF0ZWQsIHlvdSBjYW4gZ2V0IHRoZSBjb3VudCB3aXRob3V0IGVudW1lcmF0aW5nIGl0IGFnYWluYCk7XG4gICAgICAgICAgICBjb25zdCBlbnVtZXJhdGVkQ291bnQgPSBzcXVhcmVzLmNvdW50X3FfKCk7XG4gICAgICAgICAgICBjb25zdCBjb3VudDMgPSBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQzLCBjb3VudFZhbC52YWx1ZSwgZW51bWVyYXRlZENvdW50XSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoY291bnQzICYmIGNvdW50VmFsLnZhbHVlID09PSBlbnVtZXJhdGVkQ291bnQsICd0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgY291bGQgZ2V0IGZyb20gYmFja3VwJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkxJTlEgZG9lc24ndCBnaXZlIGEgd2F5IHRvIGV4ZWN1dGUgYW4gb3BlcmF0aW9uIHdpdGhvdXQgcmV0dXJuaW5nIHJlc3VsdHMsIGJ1dCBKT0lOIHByb3ZpZGVzIGZvckVhY2hcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcImNvbnN0IGZvckVhY2hUZXN0OiBzdHJpbmdbXSA9IFtdO1xcblsxLCAyLCAzXS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHsgZm9yRWFjaFRlc3QucHVzaChgJHtpZHh9PSR7aXRlbX1gKTsgfSk7XCIpO1xuICAgICAgICAgICAgY29uc3QgZm9yRWFjaFRlc3QgPSBbXTtcbiAgICAgICAgICAgIFsxLCAyLCAzXS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoVGVzdC5wdXNoKGAke2lkeH09JHtpdGVtfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhmb3JFYWNoVGVzdCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoZm9yRWFjaFRlc3Quc2VxdWVuY2VFcXVhbF9xXyhbXCIwPTFcIiwgXCIxPTJcIiwgXCIyPTNcIl0pLCBcIkZvckVhY2ggbG9vcGVkIHRocm91Z2ggaXRlcmFibGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDQgPSBUZXN0MDA0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnU2luZ2xldG9uIFJlc3VsdHMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+T25jZSB5b3UgaGF2ZSBhIHF1ZXJ5LCB5b3UgbWlnaHQgd2FudCB0byBwcm9jZXNzIHRoYXQgcXVlcnkgdG8gZ2V0IGEgcmVzdWx0LCB3aGV0aGVyIGl0IGJlIGNvdW50aW5nIHRoZSByb3dzLCBmaW5kaW5nIHRoZSBtaW4gb3IgbWF4IHZhbHVlLCBvciBwaWNraW5nIHRoZSBmaXJzdCBvciBsYXN0LiBUaGVzZSBvcGVyYXRpb25zIHdpbGwgZW51bWVyYXRlIHRoZSBkYXRhc2V0IChtYXRlcmlhbGl6aW5nIHRoZSBlbnVtZXJhYmxlKSB0byBmaW5kIHRoZSByZXN1bHQuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDA1IGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKSAvLyBsaWtlIGFycmF5WzNdYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxID09PSAnd2lubmVyJywgJ0VsZW1lbnQgYXQgM3JkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMykgLy8gd29ya3MgdGhlIHNhbWUgd2F5IC4uLmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMiA9PT0gJ3dpbm5lcicsICdFbGVtZW50QXREZWZhdWx0IDNyZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpIC8vIGVsZW1lbnRBdF9xXygxMykgd291bGQgaGF2ZSB0aHJvd25gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMgPT09ICdkZWZhdWx0JywgJ0VsZW1lbnRBdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNCwgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWzEsIDMsIDQsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDQsICdBbGwgaXMgZmFsc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDMsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNSwgJ0FsbCBpcyB0cnVlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXygpIC8vIGRvZXMgc2VxdWVuY2UgaGF2ZSBhbnl0aGluZ2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDIsIDNdLmFueV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYsICdBbnkgd2l0aCBmdWxsIGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gQW55IGNhbiB0YWtlIGEgZmlsdGVyIGZ1bmN0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmFueSgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbMSwgMiwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LCAnQW55IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gc2hvdWxkIGJlIGZhbHNlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwOCwgJ0FueSB3aXRoIGZpbHRlciBhbmQgbm8gbWF0Y2gnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uY29udGFpbnNfcV8oMykgLy8gaXMgZWxlbWVudCBpbiBzZXF1ZW5jZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDksICdDb250YWlucyB3aXRoIG1hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDQpIC8vIG5vIG1hdGNoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbMSwgMiwgM10uY29udGFpbnNfcV8oNCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MTAsICdDb250YWlucyB3aXRoIG5vIG1hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDIsIC0yXS5jb3VudF9xXygpIC8vIDRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMSA9IFsxLCAyLCAyLCAtMl0uY291bnRfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDExID09PSA0LCAnQ291bnQgYSBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5jb3VudF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gY291bnQgY2FuIHRha2UgYSBmaWx0ZXIgY29uZGl0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmNvdW50KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5jb3VudF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMiA9PT0gMywgJ0NvdW50IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wieFwiLCBcInlcIiwgXCJ6XCJdLmxvbmdDb3VudF9xXygpIC8vIHVzZSBsb25nY291bnQgdG8gY291bnQgbW9yZSB0aGFuIG1heCBpbnRlZ2VyIC4uLiBvbmx5IHdvcmtzIGluIEVDTUFTY3JpcHQgMjAyMCBvciBuZXdlciAuLi4gcHJvYmFibHkgdGFrZXMgYSBsb25nIHRpbWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFtcInhcIiwgXCJ5XCIsIFwielwiXS5sb25nQ291bnRfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMy50b1N0cmluZygpLCB0cnVlKTsgLy8gYnVpbHQtaW4gdG9KU09OIGNhbid0IHNlcmlhbGl6ZSBiaWdpbnRcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTMudG9TdHJpbmcoKSA9PT0gXCIzXCIsIFwiTG9uZ0NvdW50IGEgc2VxdWVuY2VcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwiWFwiXS5sb25nQ291bnRfcV8ocSA9PiBxLnRvTG93ZXJDYXNlKCkgPT09IFwieFwiKSAvLyBhbHNvIHRha2VzIGEgZmlsdGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTQgPSBbXCJ4XCIsIFwieVwiLCBcInpcIiwgXCJYXCJdLmxvbmdDb3VudF9xXyhxID0+IHEudG9Mb3dlckNhc2UoKSA9PT0gXCJ4XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LnRvU3RyaW5nKCksIHRydWUpOyAvLyBidWlsdC1pbiB0b0pTT04gY2FuJ3Qgc2VyaWFsaXplIGJpZ2ludFxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC50b1N0cmluZygpID09PSBcIjJcIiwgXCJMb25nQ291bnQgd2l0aCBmaWx0ZXJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnN1bV9xXygpIC8vIHN1bSB0aGUgdmFsdWVzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbMSwgMiwgMywgNCwgNV0uc3VtX3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNSA9PT0gMTUsICdTdW0gc2VxdWVuY2UgdmFsdWVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnN1bV9xXyhxID0+IHEgKiAyKSAvLyBjYW4gYXBwbHkgYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBiZWZvcmUgc3VtbWluZ2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWzEsIDIsIDMsIDQsIDVdLnN1bV9xXyhxID0+IHEgKiAyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE2ID09PSAzMCwgJ1N1bSB3aXRoIHRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDQsIDRdLmF2ZXJhZ2VfcV8oKSAvLyAzIC4uLiB0aHJvd3MgaWYgZW1wdHksIGNhbid0IGRpdmlkZSBieSB6ZXJvYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbMSwgMywgNCwgNF0uYXZlcmFnZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcgPT09IDMsICdBdmVyYWdlIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDRdLmZpcnN0X3FfKCkgLy8gMmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gWzIsIDMsIDRdLmZpcnN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOCA9PT0gMiwgJ0ZpcnN0IGluIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICAvLyBzaG91bGQgcmV0dXJuIDRcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMykgLy8gY2FuIHRha2UgYSBmaWx0ZXIgZnVuY3Rpb24sIHNhbWUgYXMgd2hlcmUoZnVuYykuZmlyc3QoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE5ID0gWzIsIDMsIDRdLmZpcnN0X3FfKHEgPT4gcSA+IDMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTkgPT09IDQsICdGaXJzdCB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAxMDApIC8vIHRoaXMgd2lsbCB0aHJvdyBiZWNhdXNlIHRoZXJlIGFyZSBubyBtYXRjaGVzYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3cxID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzEsICdGaXJzdCB0aHJldycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdE9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAsIC0xKSAvLyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB2YWx1ZSBwcm92aWRlZCAob3IgdW5kZWZpbmVkIGlmIG5vbmUpIGluc3RlYWQgb2YgdGhyb3dpbmdgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMCA9IFsyLCAzLCA0XS5maXJzdE9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAsIC0xKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwID09PSAtMSwgJ0ZpcnN0T3JEZWZhdWx0IHdpdGggZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJTb21ldGltZXMgdGhpcyBBUEkgaXNuJ3QgYXMgY2xlYW4gYXMgdGhlIEMjIEFQSSBiZWNhdXNlIHR5cGUgY2hlY2tpbmcgaW4gSlMgaXMgYW1iaWd1b3VzIGFuZCBiZWNhdXNlIHBhcmFtZXRlcnMgZG9uJ3QgYWN0dWFsbHkgaGF2ZSBuYW1lcy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkluIHRoaXMgY2FzZSwgd2hlbiBjYWxsZWQgd2l0aCBhIHNpbmdsZSBpbnB1dCwgaXQncyBub3QgcG9zc2libGUgaWYgdGhpcyBpcyB0aGUgb3B0aW9uYWwgZmlsdGVyIG9yIHRoZSBvcHRpb25hbCBkZWZhdWx0LiBJdCdzIGFzc3VtZWQgdG8gYmUgdGhlIGZpbHRlci5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10uZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IC0yIH0pIC8vIFVzZSB0aGlzIGZvcm1hdCB0byBwYXNzIGRlZmF1bHQgYnV0IG5vIGZpbHRlci5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFtdLmZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAtMiB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIxID09PSAtMiwgXCJGaXJzdE9yRGVmYXVsdCB3aXRoIG9ubHkgZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8oKSAvLyBjYW4ndCBoYXZlIGZpcnN0IHdpdGhvdXQgbGFzdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMiA9PT0gJ2xhc3QnLCAnTGFzdCBvZiBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIFwiZm91cnRoXCJcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8ocSA9PiBxWzBdID09PSBcImZcIikgLy8gbGFzdCBjYW4gYWxzbyB0YWtlIGZpbHRlciwgc2FtZSBhcyB3aGVyZShmdW5jKS5sYXN0KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdF9xXyhxID0+IHFbMF0gPT09IFwiZlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIzID09PSAnZm91cnRoJywgJ0xhc3Qgd2l0aCBmaWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCddLmxhc3RfcV8ocSA9PiBxLmxlbmd0aCA+IDEwMCkgLy8ganVzdCBsaWtlIHdpdGggZmlyc3QoKSB0aGlzIHdpbGwgdGhyb3dgKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXS5sYXN0X3FfKHEgPT4gcS5sZW5ndGggPiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzIsIFwiTGFzdCB0aHJvd3Mgb24gZW1wdHkgc2VxdWVuY2VcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0T3JEZWZhdWx0X3FfKHEgPT4gcVswXSA9PT0gXCJYXCIsIFwiZGVmYXVsdFwiKSAvLyBkb2Vzbid0IHRocm93LCBpbnN0ZWFkIHJldHVybnMgZGVmYXVsdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI0ID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0T3JEZWZhdWx0X3FfKHEgPT4gcVswXSA9PT0gXCJYXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI0ID09PSAnZGVmYXVsdCcsICdMYXN0T3JEZWZhdWx0IHdpdGggZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmxhc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiZGVmYXVsdFwiIH0pIC8vIGp1c3QgbGlrZSB3aXRoIGZpcnN0LCBwYXNzaW5nIG9ubHkgZGVmYXVsdCB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI1ID0gW10ubGFzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJkZWZhdWx0XCIgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNSA9PT0gJ2RlZmF1bHQnLCAnTGFzdE9yRGVmYXVsdCB3aXRoIG9ubHkgZGVmYXVsdCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIDFcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMV0uc2luZ2xlX3FfKCkgLy8gcmV0dXJucyByZWNvcmQgaWYgdGhlcmUgaXMgZXhhY3RseSBvbmUsIHRocm93aW5nIGlmIDAgb3IgbW9yZSB0aGFuIG9uZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI2ID0gWzFdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjYgPT09IDEsICdTaW5nbGUgcmVjb3JkIGluIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKSAvLyB0YWtlcyBhIGZpbHRlciBmdW5jdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5zaW5nbGUoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI3ID0gWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI3ID09PSAyLCAnU2luZ2xlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnNpbmdsZV9xXyhxID0+IHEgPCAzKSAvLyBzaW5nbGUgdGhyb3dzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3c0ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxIDwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdzQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRocm93NCwgJ1NpbmdsZSB0aHJvd3Mgd2hlbiBtdWx0aXBsZSByZXR1cm5lZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxID4gMTAwMDApIC8vIExpa2UgZmlyc3QoKSBhbmQgbGFzdCgpLCBzaW5nbGUoKSB0aHJvd3Mgb24gYW4gZW1wdHkgc2VxdWVuY2VgKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWzEsIDJdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3czID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzMsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlJyk7XG4gICAgICAgICAgICBsZXQgdGhyb3c1ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxID4gMTAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c1ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzUsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAwLCAtMSkgLy8gc2luZ2xlT3JEZWZhdWx0IHN1cHBsaWVzIGRlZmF1bHQgdmFsdWUgZm9yIGVtcHR5IHNlcXVlbmNlLCBzdGlsbCB0aHJvd3MgaWYgbXVsdGlwbGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOCA9IFsxLCAyLCAzLCA0XS5zaW5nbGVPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwMCwgLTEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjggPT09IC0xLCBcIkRlZmF1bHQgcmV0dXJuZWQgZm9yIHNpbmdsZU9yRGVmYXVsdFwiKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzYgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXyhxID0+IHEgJSAyID09PSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZikge1xuICAgICAgICAgICAgICAgIHRocm93NiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3c2LCBcIlNpbmdsZU9yRGVmYXVsdCBzdGlsbCB0aHJvd3Mgb24gbXVsdGlwbGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1heF9xXygpIC8vIDcgaXMgbWF4aW11bWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI5ID0gWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1heF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjkgPT09IDcsICdNYXggcmV0dXJucyBtYXhpbXVtJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDYsIDQsIDFdLm1heF9xXyhxID0+IHEgKiBxKSAvLyBjYW4gdGFrZSBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGFwcGxpZWQgYmVmb3JlIG1heGltdW0sIHNhbWUgYXMgc2VsZWN0KGZ1bmMpLm1heCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzAgPSBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHEgPT4gcSAqIHEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzAgPT09IDM2LCAnTWF4IHJldHVybmVkIHdpdGggZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTWF4IGNhbiB0YWtlIGEgY3VzdG9tIGNvbXBhcmVyIHRoYXQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCB2YWx1ZSBpcyBncmVhdGVyLCAtMSBpcyB0aGUgc2Vjb25kLCBlbHNlIDBcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3QgaWdub3JlRXZlbkNvbXBhcmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAwIDogeDtcbiAgICAgICAgICAgICAgICB5ID0geSAlIDIgPT09IDAgPyAwIDogeTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4IDwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWApO1xuICAgICAgICAgICAgY29uc3QgaWdub3JlRXZlbkNvbXBhcmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAwIDogeDtcbiAgICAgICAgICAgICAgICB5ID0geSAlIDIgPT09IDAgPyAwIDogeTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIpIC8vIG1heCBub3QgY291bnRpbmcgZXZlbnNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMSA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heF9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDMxID09PSA1LCAnTWF4IHdpdGggY3VzdG9tIGNvbXBhcmVyIGFuZCB0cmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0LCAxXS5tYXhfcV8oe2NvbXBhcmU6IGlnbm9yZUV2ZW5Db21wYXJlciB9KSAvLyBjdXN0b20gY29tcGFyZXIgY2FuIGJlIHNlbnQgYXMgZmlyc3QgcGFyYW1ldGVyIGJ5IHB1dHRpbmcgaW4gSUNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzIgPSBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHtcbiAgICAgICAgICAgICAgICBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzIgPT09IDUsICdNYXggd2l0aCBjdXN0b20gY29tcGFyZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubikgLy8gbWF4QnkgdXNlcyBhIGtleSBzZWxlY3RvciBmdW5jdGlvbiwgY29tcGFyZXMgdGhlIGtleXMsIGJ1dCByZXR1cm5zIHRoZSBlbGVtZW50YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzMgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzMy5uID09PSA2LCBcIk1heEJ5IHdpdGgga2V5IGxvb2t1cFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKSAvLyBtYXhCeSBhbHNvIHRha2VzIGN1c3RvbSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM0ID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4QnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNC5uID09PSA1LCAnTWF4Qnkgd2l0aCBjdXN0b20gY29tcGFyZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWluX3FfKCkgLy8gMSBpcyBtaW5pbXVtYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzUgPSBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWluX3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNSA9PT0gMSwgJ01pbiByZXR1cm5zIG1pbmltdW0nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHEgPT4gcSAqIHEpIC8vIG1pbiBhbHNvIHRha2VzIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLCBzYW1lIGFzIHNlbGVjdChmdW5jKS5taW4oKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM2ID0gWzIsIDMsIDUsIDYsIDRdLm1pbl9xXyhxID0+IHEgKiBxKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM2ID09PSA0LCAnTWluIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICBjb25zdCBpZ25vcmVFdmVuQ29tcGFyZXIyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAxMTAgOiB4O1xuICAgICAgICAgICAgICAgIHkgPSB5ICUgMiA9PT0gMCA/IDExMCA6IHk7XG4gICAgICAgICAgICAgICAgaWYgKHggPiB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIDMgKHRoZSBjdXN0b20gY29tcGFyZXIgZmlsdGVycyBvdXQgZXZlbnMpXG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluX3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKSAvLyBtaW4gYWxzbyB0YWtlcyBjdXN0b20gY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNyA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbl9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyMik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNyA9PT0gMywgXCJNaW4gd2l0aCBjdXN0b20gY29tcGFyZXIgYW5kIHRyYW5zZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0XS5taW5fcV8oeyBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXIyIH0pYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzggPSBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHtcbiAgICAgICAgICAgICAgICBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXIyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM4ID09PSAzLCBcIk1pbiB3aXRoIGN1c3RvbSBjb21wYXJlciBvbmx5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uKSAvLyBhbHNvIGEgbWluQnkgdGhhdCB0YWtlcyBhIGtleSBzZWxlY3RvcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM5ID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzkubiA9PT0gMiwgXCJNaW5CeSByZXR1cm5zIG1pbiB3aXRoIGtleSBsb29rdXBcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcjIpIC8vIG1pbkJ5IGFsc28gdGFrZXMgYSBjdXN0b20gY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MCA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQwLm4gPT09IDMsICdNaW5CeSB3aXRoIGN1c3RvbSBjb21wYXJlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJNYXgoKSBhbmQgTWluKCkgdGhyb3cgd2hlbiBjYWxsZWQgb24gYW4gZW1wdHkgc2VxdWVuY2UuIFRvIGhhbmRsZSB0aGF0LCBJIGNyZWF0ZWQgMiBKT0lOLXNwZWNpZmljIG1ldGhvZHMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJCZWNhdXNlIG9mIHRoZSB3YXkgb3ZlcmxvYWRzIHdvcmsgaW4gSlMsIGlmIHlvdSBhcmVuJ3QgdXNpbmcgYWxsIGlucHV0cywgZW5jbG9zZSBpbiB7IGRlZmF1bHRWYWx1ZSB9LlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXS5tYXhPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KSAvLyBzYW1lIGFzIGRlZmF1bHRJZkVtcHR5KCdkZWZhdWx0JykubWF4KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MSA9IFtdLm1heE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDEgPT09ICdkZWZhdWx0JywgJ21heCB2YWx1ZSBvciBkZWZhdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10ubWluT3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAnZGVmYXVsdCcgfSkgLy8gc2FtZSBhcyBkZWZhdWx0SWZFbXB0eSgnZGVmYXVsdCcpLm1pbigpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDIgPSBbXS5taW5PckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQyID09PSAnZGVmYXVsdCcsICdtaW4gdmFsdWUgb3IgZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXyhcbiAgICAgICAgICAgICAgICAobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0XG4gICAgICAgICAgICAgICAgKSAvLyBhZ2dyZWdhdGUgYWN0cyBsaWtlIHJlZHVjZSgpLCBpbiB0aGlzIGNhc2UgdHJhY2tpbmcgdGhlIG1heCBsZW5ndGggYnV0IGl0IGNvdWxkIHN1bSB1cCB0aGUgcmVzdWx0cywgZXRjYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDMgPSBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oKGxvbmdlc3QsIG5leHQpID0+IG5leHQubGVuZ3RoID4gbG9uZ2VzdC5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0MyA9PT0gJ3Bhc3Npb25mcnVpdCcsICdBZ2dyZWdhdGUgd2l0aCBvbmx5IGZ1bmN0b24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsXG4gICAgICAgICAgICAgICAgKGxvbmdlc3QsIG5leHQpID0+IEFycmF5LmZyb20obmV4dCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPiBBcnJheS5mcm9tKGxvbmdlc3QpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3RcbiAgICAgICAgICAgICkgLy8gaW5pdGlhbCB2YWx1ZSBjYW4gYmUgcHJvdmlkZWRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0NCA9IFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJywgKGxvbmdlc3QsIG5leHQpID0+IEFycmF5LmZyb20obmV4dCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPiBBcnJheS5mcm9tKGxvbmdlc3QpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQ0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDQgPT09ICdiYW5hbmEnLCAnQWdncmVnYXRlIHdpdGggaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJyxcbiAgICAgICAgICAgICAgICAobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0LFxuICAgICAgICAgICAgICAgIGZydWl0ID0+IGZydWl0LnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICkgLy8gY2FuIHRha2UgaW5pdGlhbCB2YWx1ZSBhbmQgYSBmdW5jdGlvbiBjYWxsZWQgdXBvbiB0aGUgZmluYWwgcmVzdWx0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDUgPSBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsIChsb25nZXN0LCBuZXh0KSA9PiBuZXh0Lmxlbmd0aCA+IGxvbmdlc3QubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QsIGZydWl0ID0+IGZydWl0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQ1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDUgPT09ICdQQVNTSU9ORlJVSVQnLCAnQWdncmVnYXRlIHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgb3V0cHV0IGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDUgPSBUZXN0MDA1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnTXVsdGktU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGVzZSBmdW5jdGlvbnMsIHdoaWNoIGluY2x1ZGUgaW5uZXIgam9pbnMsIG91dGVyIGpvaW5zLCBjb25jYXRlbmF0aW9uLCBhbmQgc2VtaS1qb2lucywgY29tcGFyZSBhbmQvb3IgY29tYmluZSBtdWx0aXBsZSBpdGVyYWJsZXMuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDA2IGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMubG9nKGBUbyBiZSBlcXVhbCB0d28gc2VxdWVuY2VzIG5lZWQgdG8gYmUgdGhlIHNhbWUgbGVuZ3RoIGFuZCBoYXZlIHRoZSBzYW1lIGl0ZW1zIGluIHRoZSBzYW1lIG9yZGVyLmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSkgLy8gZGlmZmVyZW50IGxlbmd0aHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDEsIFwiU2VxdWVuY2VFcXVhbCB0ZXN0cyBsZW5ndGggMVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pIC8vIGRpZmZlcmVudCBsZW5ndGhzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAyLCBcIlNlcXVlbmNlRXF1YWwgdGVzdHMgbGVuZ3RoIDJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSAvLyBvcmRlciBtYXR0ZXJzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAzLCBcIlNlcXVlbmNlRXF1YWwgdGVzdHMgaXRlbXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSAvLyB0aGlzIGlzIGdvb2RgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNCwgXCJTZXF1ZW5jZUVxdWFsIG1hdGNoZXMgaXRlbXMgYW5kIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA1LCAnU2VxdWVuY2VFcXVhbCB3aXRoIGN1c3RvbSBjb21wYXJlciB0ZXN0cyBsZW5ndGggMScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwNiwgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdGVzdHMgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwNywgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdGVzdHMgaXRlbXMnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnVlXG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0xLCAtMiwgLTNdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKSAvLyB3aXRoIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTEsIC0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDgsICdTZXF1ZW5jZUVxdWFsIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRvIGVxdWF0ZSBhYnNvbHV0ZSB2YWx1ZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMl0uY29uY2F0X3FfKFszLCA0XSkgLy8gMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDJdLmNvbmNhdF9xXyhbMywgNF0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDMsIDRdKSwgXCJDb25jYXQgY29uY2F0ZW5hdGVzIHNlcXVlbmNlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgMywgNCwgMl0udW5pb25fcV8oWzIsIDMsIDQsIDUsIDYsIDZdKSAvLyAxLDIsMyw0LDUsNiAoY29uY2F0ZW5hdGVzIGFuZCBkZWR1cGVzKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEwID0gWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTAuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgMywgNCwgNSwgNl0pLCBcIlVuaW9uIGNvbmNhdGVuYXRlcyBhbmQgcmVtb3ZlcyBkdXBsaWNhdGVzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCAzLCA0LCAyXS51bmlvbl9xXyhbMiwgMywgNCwgNSwgNiwgNl0sICh4LCB5KSA9PiB4ICUgMiA9PT0geSAlIDIpIC8vIGN1c3RvbSBldmVuL29kZCBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDExLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTEuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMl0pLCAndW5pb24gd2l0aCBjdXN0b20gY29tcGFyZXIgdG8gbWF0Y2ggZXZlbnMvb2RkcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IHg6IDEgfSwgeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogMiB9XS51bmlvbkJ5X3FfKFt7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDUgfSwgeyB4OiA2IH0sIHsgeDogNiB9XSwgcSA9PiBxLngpIC8vIGRvZXMgYSB1bmlvbiBvbiBrZXlzIHJldHVybmVkIGJ5IGtleSBzZWxlY3RvciBmdW5jdGlvbiwgcmV0dXJuaW5nIHRoZSBpdGVtc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTIpID09PSBgW3tcInhcIjoxfSx7XCJ4XCI6Mn0se1wieFwiOjN9LHtcInhcIjo0fSx7XCJ4XCI6NX0se1wieFwiOjZ9XWAsIFwidW5pb25CeSByZXR1cm5zIG9uZSBpdGVtIGZvciBlYWNoIHVuaXF1ZSBrZXlcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikgLy8gY3VzdG9tIGV2ZW4vb2RkIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTMgPSBbeyB4OiAxIH0sIHsgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDIgfV0udW5pb25CeV9xXyhbeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiA1IH0sIHsgeDogNiB9LCB7IHg6IDYgfV0sIHEgPT4gcS54LCAoeCwgeSkgPT4geCAlIDIgPT09IHkgJSAyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMy5sZW5ndGggPT09IDIgJiYgdGVzdDEzWzBdLnggPT09IDEgJiYgdGVzdDEzWzFdLnggPT09IDIsIFwiVW5pb25CeSB3aXRoIGN1c3RvbSBjb21wYXJlciB0byBtYXRjaCBldmVucy9vZGRzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQScsICdBJywgJ0MnLCAnUScsICdCJywgJ0QnLCAnWCddLmludGVyc2VjdF9xXyhbJ1cnLCAnQScsICdDJywgJ0InLCAnTSddKSAvLyBkZWR1cGVkIHJlY29yZHMgdGhhdCBhcmUgaW4gYm90aCBzZXF1ZW5jZXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFsnQScsICdBJywgJ0MnLCAnUScsICdCJywgJ0QnLCAnWCddLmludGVyc2VjdF9xXyhbJ1cnLCAnQScsICdDJywgJ0InLCAnTSddKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFcIiwgXCJDXCIsIFwiQlwiXSksIFwiSW50ZXJzZWN0aW9uIHJldHVybnMgc2V0IHJlc3VsdCBvZiBpdGVtcyBpbiAyIHNlcXVlbmNlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnV2F0ZXJtZWxvbicsICdBdm9jYWRvJywgJ0N1Y3VtYmVyJywgJ0JlcnJ5JywgJ01hbmdvJywgJ2Itd3JvbmcnXSwgcSA9PiBxWzBdKSAvLyBmaW5kIGRlZHVwZWQga2V5cyB0aGF0IGFyZSBpbiBib3RoIHNlcXVlbmNlcyBhbmQgcmV0dXJuIGZpcnN0IGl0ZW0gZm9yIGVhY2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNSA9IFsnQXBwbGUnLCAnQXJ0aWNob2tlJywgJ0NhbnRlbG91cGUnLCAnUXVpbmNlJywgJ0JhbmFuYScsICdEYXRlJywgJ1hpZ3VhJ10uaW50ZXJzZWN0QnlfcV8oWydXYXRlcm1lbG9uJywgJ0F2b2NhZG8nLCAnQ3VjdW1iZXInLCAnQmVycnknLCAnTWFuZ28nLCAnYi13cm9uZyddLCBxID0+IHFbMF0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1LnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlXCIsIFwiQmFuYW5hXCJdKSwgXCJpbnRlcnNlY3RCeSByZXR1cm5zIGludGVyc2VjdGlvbiBieSBrZXkgc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ3dhdGVybWVsb24nLCAnYXZvY2FkbycsICdjdWN1bWJlcicsICdCZXJyeScsICdtYW5nbyddLCBxID0+IHFbMF0sICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkgLy8gY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTYgPSBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnd2F0ZXJtZWxvbicsICdhdm9jYWRvJywgJ2N1Y3VtYmVyJywgJ0JlcnJ5JywgJ21hbmdvJ10sIHEgPT4gcVswXSwgKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNi5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZVwiLCBcIkJhbmFuYVwiXSkpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLjAsIDIuMCwgMi4xLCAyLjIsIDIuMywgMi40LCAyLjVdLmV4Y2VwdF9xXyhbMi4yXSkgLy8gZGVkdXBlZCBpdGVtcyBmcm9tIGZpcnN0IG5vdCBpbiBzZWNvbmRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFsyLjAsIDIuMCwgMi4xLCAyLjIsIDIuMywgMi40LCAyLjVdLmV4Y2VwdF9xXyhbMi4yXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMi4xLCAyLjMsIDIuNCwgMi41XSksICdFeGNlcHQgcmVtb3ZlcyBpdGVtcyBmcm9tIHNlY29uZCBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRfcV8oW3sgYTogMi4yIH1dLCAocSwgcikgPT4gcS5hID09PSByLmEpIC8vIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gW3sgYTogMi4wIH0sIHsgYTogMi4wIH0sIHsgYTogMi4xIH0sIHsgYTogMi4yIH0sIHsgYTogMi4zIH0sIHsgYTogMi40IH0sIHsgYTogMi41IH1dLmV4Y2VwdF9xXyhbeyBhOiAyLjIgfV0sIChxLCByKSA9PiBxLmEgPT09IHIuYSlcbiAgICAgICAgICAgICAgICAudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTgubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAyLjEsIDIuMywgMi40LCAyLjVdKSwgJ0V4Y2VwdCB3aXRoIGN1c3RvbSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRCeV9xXyhbeyBhOiAyLjIgfV0sIHEgPT4gcS5hKSAvLyBleGNlcHRCeSByZXR1cm5zIGV4Y2VwdGlvbiBieSBrZXkgc2VsZWN0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOSA9IFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRCeV9xXyhbeyBhOiAyLjIgfV0sIHEgPT4gcS5hKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOS5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDIuMSwgMi4zLCAyLjQsIDIuNV0pLCAnRXhjZXB0QnkgdXNlcyBrZXkgc2VsZWN0b3InKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogNCB9LCB7IGE6IDUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMiB9XSxcbiAgICAgICAgICAgICAgICBxID0+IHEuYSwgKHEsIHIpID0+IHEgJSAyID09PSByICUgMikgLy8gY3VzdG9tIGVxdWFsaXR5IHRvIG1ha2UgYWxsIGV2ZW5zIGFuZCBhbGwgb2RkcyBsb29rIHRoZSBzYW1lYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogNCB9LCB7IGE6IDUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMiB9XSwgcSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMV0pLCAnRXhjZXB0Qnkgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQW55b25lIHdpdGggU1FMIGV4cGVyaWVuY2Ugc2hvdWxkIGtub3cgd2hhdCBhbiBJbm5lciBKb2luIGlzLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQW4gaW5uZXIgam9pbiBtYXRjaGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIGZpcnN0IHNlcXVlbmNlIHdpdGggZXZlcnkgaXRlbSBpbiB0aGUgc2Vjb25kIHNlcXVlbmNlIGJ5IG1hdGNoaW5nIGtleXMsIGFuZCByZXR1cm5zIHRob3NlIHJlY29yZHMgd2hlcmUgdGhlIGtleSBtYXRjaCBpcyB0cnVlLCBib3RoIGluIHRoZSBzYW1lIHJvd1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiVGhlIExJTlEgam9pbiByZXF1aXJlcyB5b3UgdG8gc2VuZCB0d28gc2VxdWVuY2VzLCBhIGtleSBzZWxlY3RvciBmb3Igc2VxdWVuY2UgMSwgYSBrZXkgc2VsZWN0b3IgZm9yIHNlcXVlbmNlIDIsIGFuZCBhbiBvdXRwdXQgcHJvamVjdGlvbiBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSByb3dzIHRvIHJldHVybi5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcImItd3JvbmdcIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCkgLy8gam9pbmluZyBvbiBmaXJzdCBsZXR0ZXIsIHJldHVybmluZyBsZWZ0IGZpcnN0IGxldHRlciBhbmQgcmlnaHQgZnVsbCB3b3JkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ3VjdW1iZXJcIl0uam9pbl9xXyhbXCJBcHBsZVwiLCBcIkNhbnRlbG91cGUgSXNsYW5kXCIsIFwiRHVyaWFuXCIsIFwiYi13cm9uZ1wiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gYCR7bFswXX0gaXMgZm9yICR7cn1gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIEFwcGxlXCIsIFwiQSBpcyBmb3IgQXZvY2Fkb1wiLCBcIkMgaXMgZm9yIENhbnRlbG91cGUgSXNsYW5kXCJdKSwgJ0pvaW4gY29tYmluZXMgdHdvIHNlcXVlbmNlcyByb3ctd2lzZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1tcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiY2FudGVsb3VwZSBJc2xhbmRcIiwgXCJkdXJpYW5cIiwgXCJhdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KSAvLyBjYW4gdGFrZSBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcicpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJjYW50ZWxvdXBlIElzbGFuZFwiLCBcImR1cmlhblwiLCBcImF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gYCR7bFswXX0gaXMgZm9yICR7cn1gLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIyLnNlcXVlbmNlRXF1YWxfcV8oW1wiQSBpcyBmb3IgYXBwbGVcIiwgXCJBIGlzIGZvciBhdm9jYWRvXCIsIFwiQyBpcyBmb3IgY2FudGVsb3VwZSBJc2xhbmRcIl0pLCAnSm9pbiBjYW4gdGFrZSBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiSW4gTElOUSdzIGpvaW4sIHRoZSBvdXRwdXQgZnVuY3Rpb24gaXMgcmVxdWlyZWQuIEluIEpPSU4sIHlvdSBjYW4gaWdub3JlIGl0LiBJZiB5b3UgZG8gc28sIHNpbXBsZSB0dXBsZXMgYXJlIHJldHVybmVkLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pIC8vIHNraXBwaW5nIHRoZSBvdXRwdXQgZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IFtcIkFwcmljb3RcIiwgXCJCYW5hbmFcIl0uam9pbl9xXyhbXCJhcHBsZVwiLCBcIkNhbnRlbG91cGUgSXNsYW5kXCIsIFwiRHVyaWFuXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyMykgPT09IGBbW1wiQXByaWNvdFwiLFwiYXBwbGVcIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXV1gLCAnSm9pbigpIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgTElOUSBkb2VzIG5vdCBwcm92aWRlIGFuIG91dGVyIGpvaW4gb3BlcmF0b3IuIEl0IGNhbiBiZSBkb25lIChpbiBhIHRydWx5IHVnbHkgd2F5KSBpbiB0aGUgcXVlcnkgc3ludGF4LCBidXQgbm90IGluIGZsdWVudCBtZXRob2RzYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyBidXQgSk9JTiBkb2VzIGhhdmUgYW4gb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI0ID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNCkgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn1dYCwgJ291dGVySm9pbiBtYXRjaGluZyBKb2luKCkgc3ludGF4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiLCBcIkFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSkgLy8gZGVmYXVsdCB0dXBsZSBvdXRwdXQgZnJvbSBqb2luX3FfKCkgaXMgYWxzbyBoZXJlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjUgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCIsIFwiQXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXBwbGVcIixcIkFwcGxlXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXBwbGVcIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXSxbXCJDYW50ZWxvdXBlXCIsbnVsbF1dYCwgJ291dGVySm9pbiB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiYmVycnlcIiwgXCJ3YXRlcm1lbG9uXCIsIFwiYXZvY2Fkb1wiLCBcImFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSksICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkgLy8gY3VzdG9tIGVxdWFsaXR5YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjYgPSBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDI2KSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiYXZvY2Fkb1wifSx7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiYXBwbGVcIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiYXBwbGVcIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJiZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9XWAsICdvdXRlckpvaW4gd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkgLy8gY3VzdG9tIGVxdWFsaXR5IGFuZCB0dXBsZSBvdXRwdXRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNyA9IFtcIkFwcGxlXCIsIFwiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiYmVycnlcIiwgXCJ3YXRlcm1lbG9uXCIsIFwiYXZvY2Fkb1wiLCBcImFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNykgPT09IGBbW1wiQXBwbGVcIixcImF2b2NhZG9cIl0sW1wiQXBwbGVcIixcImFwcGxlXCJdLFtcIkFwcGxlXCIsXCJhdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJhcHBsZVwiXSxbXCJBcHJpY290XCIsXCJhdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcImFwcGxlXCJdLFtcIkJhbmFuYVwiLFwiYmVycnlcIl0sW1wiQ2FudGVsb3VwZVwiLG51bGxdXWAsICdvdXRlckpvaW4gd2l0aCBjdXN0b20gZXF1YWxpdHkgYW5kIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJUaGUgam9pbigpIGluIExJTlEgaXMga2luZCBvZiBhIHBhaW4uIEkgYWx3YXlzIGZpbmQgbXlzZWxmIHdvbmRlcmluZyB3aGF0IGFyZSB0aGUgaW5wdXRzLCB3aGljaCBpcyB0aGUgZmlyc3QsIHdoaWNoIGlzIHRoZSBzZWNvbmQsIHdoeSBkaWQgdGhleSB1c2UgJ2lubmVyJyBhbmQgJ291dGVyJyBmb3IgdGhpbmdzIHRoYXQgYXJlbid0IGlubmVyIG9yIG91dGVyLCBldGMuIEkga2VlcCBoYXZpbmcgdG8gZ29vZ2xlIGl0LiBTbyBKT0lOIGNvbnRhaW5zIGEgZnJpZW5kbHkgdmVyc2lvbiB0aGF0IGNvbWJpbmVzIHR3byBrZXkgc2VsZWN0b3JzIGFuZCBjdXN0b20gZXF1YWxpdHkgaW50byBhIHNpbmdsZSBmdW5jdGlvbi5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5pbm5lckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyBqb2luIG9uIGZpcnN0IGxldHRlciBhbmQgcmV0dXJuIG9iamVjdHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjgpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifV1gLCBcIkJhc2ljIGlubmVySm9pbiBoZWxwZXJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5pbm5lckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0pIC8vIHJldHVybnMgdHVwbGVzLCBvdXRwdXQgZnVuY3Rpb24gaXMgb3B0aW9uYWxgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOSA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyOSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXSxbXCJCYW5hbmFcIixcIkJlcnJ5XCJdXWAsICdJbm5lckpvaW4gaGVscGVyIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpIC8vIHRoZXJlJ3MgYWxzbyBhIGxlZnQgb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMwID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDMwKSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiQmVycnlcIn0se1wibFwiOlwiQ2FudGVsb3VwZVwifV1gLCAnTGVmdEpvaW4gaGVscGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkgLy8gYWxzbyBhbGxvd3MgdHVwbGUgb3V0cHV0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzEgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmxlZnRKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXSxbXCJCYW5hbmFcIixcIkJlcnJ5XCJdLFtcIkNhbnRlbG91cGVcIixudWxsXV1gLCAnTGVmdEpvaW4gaGVscGVyIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5yaWdodEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSByaWdodCBvdXRlciBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzIgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLnJpZ2h0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDMyKSA9PT0gYFt7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcInJcIjpcIldhdGVybWVsb25cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifV1gLCAnUmlnaHRKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uZnVsbEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSBmdWxsIG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMyA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uZnVsbEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMykgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn0se1wiclwiOlwiV2F0ZXJtZWxvblwifV1gLCAnRnVsbEpvaW4gaGVscGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDNdLmNyb3NzSm9pbl9xXyhbNSwgNl0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGUgam9pbiBjb2xsZWN0aW9uIGlzbid0IGNvbXBsZXRlIHdpdGhvdXQgYSBjcm9zcyBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzQgPSBbMiwgM10uY3Jvc3NKb2luX3FfKFs1LCA2XSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM0KSA9PT0gYFt7XCJsXCI6MixcInJcIjo1fSx7XCJsXCI6MixcInJcIjo2fSx7XCJsXCI6MyxcInJcIjo1fSx7XCJsXCI6MyxcInJcIjo2fV1gLCAnQ3Jvc3NKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJHcm91cEpvaW4gaXMgYSB3ZWlyZCBvbmUgdGhhdCBzb3VuZHMgbGlrZSBhbm90aGVyIGN1c3RvbSBtZXRob2QsIGJ1dCB0aGlzIG9uZSBjb21lcyBmcm9tIE1pY3Jvc29mdC4gQSBncm91cCBqb2luIGlzIGxpa2UgYSBjb21iaW5hdGlvbiBvZiBvdXRlciBqb2luIGFuZCBoYWxmIGEgZ3JvdXBCeS4gVGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUgYXJlIGpvaW5lZCBhbmQgdGhlbiB0aGUgcmlnaHQgc2lkZSBpcyBncm91cGVkIG9uIHRoZSBqb2luaW5nIGtleS4gSWYgbm90aGluZyBpcyBvbiB0aGUgcmlnaHQsIHRoZSBncm91cCBsaXN0IGlzIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydBdmVyYWdlJywgJ0FscGhhYmV0JywgJ0NhcnRvZ3JhcGhlcicsICdjLXdyb25nJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSkpIC8vIGpvaW4gb24gZmlyc3QgbGV0dGVycyBhbmQgZ3JvdXAgcmlnaHRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNSA9IFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydBdmVyYWdlJywgJ0FscGhhYmV0JywgJ0NhcnRvZ3JhcGhlcicsICdjLXdyb25nJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM1KSA9PT0gYFt7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkJhbmFuYVwiLFwiYWxzb01hdGNoaW5nXCI6W119LHtcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJBdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQ2FudGVsb3VwZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQ2FydG9ncmFwaGVyXCJdfV1gLCAnR3JvdXBKb2luIGpvaW5zIGFuZCBncm91cHMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnYXZlcmFnZScsICdBbHBoYWJldCcsICdjYXJ0b2dyYXBoZXInXSwgcSA9PiBxWzBdLCBxID0+IHFbMF0sICh3b3JkLCBhbHNvTWF0Y2hpbmcpID0+ICh7IHdvcmQsIGFsc29NYXRjaGluZyB9KSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvVXBwZXJDYXNlKCkgPT09IHkudG9VcHBlckNhc2UoKSB9KSAvLyBjYW4gdGFrZSBhIGN1c3RvbSBlcXVhbGl0eWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM2ID0gWydBcHBsZScsICdCYW5hbmEnLCAnQXBwbGUnLCAnQ2FudGVsb3VwZSddLmdyb3VwSm9pbl9xXyhbJ2F2ZXJhZ2UnLCAnQWxwaGFiZXQnLCAnY2FydG9ncmFwaGVyJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSksIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b1VwcGVyQ2FzZSgpID09PSB5LnRvVXBwZXJDYXNlKCkgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzYpID09PSBgW3tcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJhdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQmFuYW5hXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXX0se1wid29yZFwiOlwiQXBwbGVcIixcImFsc29NYXRjaGluZ1wiOltcImF2ZXJhZ2VcIixcIkFscGhhYmV0XCJdfSx7XCJ3b3JkXCI6XCJDYW50ZWxvdXBlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJjYXJ0b2dyYXBoZXJcIl19XWAsICdHcm91cCBqb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10pIC8vIHdpbGwgcmV0dXJuIDMgdHVwbGVzLCBbMSw1XSwgWzIsNl0sIGFuZCBbMyw3XSwgb25lIGZyb20gZWFjaCBzZXF1ZW5jZSBpbiBvcmRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM3ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM3KSA9PT0gYFtbMSw1XSxbMiw2XSxbMyw3XV1gLCAnWmlwIHR3byBzZXF1ZW5jZXMgaW50byBhIHNlcXVlbmNlIG9mIHR1cGxlcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddLCBbOCwgOSwgMTAsIDExXSkgLy8gY2FuIHppcCBhIHRoaXJkIHR1cGxlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzggPSBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgWzgsIDksIDEwLCAxMV0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM4KSA9PT0gYFtbMSw1LDhdLFsyLDYsOV0sWzMsNywxMF1dYCwgJ1ppcCB0aHJlZSBzZXF1ZW5jZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgKHgsIHkpID0+IHggKiB5KSAvLyBpbiBwbGFjZSBvZiB0aGUgdGhpcmQgdHVwbGUgeW91IGNhbiBzZW5kIGEgZnVuY3Rpb24gdGhhdCBjb21iaW5lcyB0aGUgZmlyc3QgMmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM5ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sICh4LCB5KSA9PiB4ICogeSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzkpID09PSBgW1sxLDUsNV0sWzIsNiwxMl0sWzMsNywyMV1dYCwgJ1ppcCB0d28gc2VxdWVuY2VzIGFuZCBhIHZpcnR1YWwgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwNiA9IFRlc3QwMDY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RIZWFkZXJfMSA9IHJlcXVpcmUoXCIuL1Rlc3RIZWFkZXJcIik7XG5jb25zdCBDb25zb2xlVmlld18xID0gcmVxdWlyZShcIi4vQ29uc29sZVZpZXdcIik7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RDYXNlVmlldyBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ldyBUZXN0SGVhZGVyXzEuVGVzdEhlYWRlcih2aWV3TW9kZWwpKTtcbiAgICAgICAgdGhpcy5jb25zb2xlID0gbmV3IENvbnNvbGVWaWV3XzEuQ29uc29sZVZpZXcoKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmNvbnNvbGUpO1xuICAgICAgICAvLyBOb3RlOiBUaGlzIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgRE9NIGJ5IHRoZSBQYWdlUm91dGVyIGltbWVkaWF0ZWx5IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgICAgLy8gTm90aGluZyBpbiB0aGUgaW5oZXJpdGluZyBjbGFzcyBjYW4gcmVmZXJlbmNlIHRoaXMgY29tcG9uZW50IHVudGlsIGFmdGVyIGl0IGlzIGNvbnN0cnVjdGVkLlxuICAgICAgICAvLyBIZXJlIHdlIGRvbid0IGNhcmUuXG4gICAgICAgIHRoaXMudGVzdENhc2UoKTtcbiAgICB9XG4gICAgbG9nKHRoaW5nLCByZXN1bHQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKHRoaW5nLCByZXN1bHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENhc2VWaWV3ID0gVGVzdENhc2VWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGRlc2NyaXB0aW9uSHRtbCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gSWNoaWdvXzEuZXNjYXBlSHRtbChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSHRtbDtcbiAgICAgICAgdGhpcy50ZXN0TnVtYmVyID0gSWNoaWdvXzEuUGFnZVJvdXRlci5wYXJhbXMuZ2V0KCdpZCcpIHx8ICc/JztcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDYXNlVmlld01vZGVsID0gVGVzdENhc2VWaWV3TW9kZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgVGVzdEhlYWRlciBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iodm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHZtLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoSWNoaWdvXzEucGFyYWdyYXBoKGA8aDE+VGVzdCAke3ZtLnRlc3ROdW1iZXJ9OiAke3ZtLm5hbWV9PC9oMT5gKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKEljaGlnb18xLnNwYW4odm0uZGVzY3JpcHRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdEhlYWRlciA9IFRlc3RIZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgVGVzdGJlbmNoVmlldyBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGlkOiAndGVzdC1iZW5jaCcsXG4gICAgICAgICAgICBpbm5lckh0bWw6IGA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXN0LWxpbmtcIj5QcmV2aW91cyBUZXN0PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidGVzdEhlYWRlclwiPlRlc3QgIzA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRlc3QtbGlua1wiIGRhdGEtbmV4dD1cIjFcIj5OZXh0IFRlc3Q8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxheW91dC1ib2R5PjwvbGF5b3V0LWJvZHk+YFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGRyID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0SGVhZGVyJyk7XG4gICAgICAgIGlmIChoZHIpIHtcbiAgICAgICAgICAgIGhkci5pbm5lckhUTUwgPSBcIlRlc3QgI1wiICsgSWNoaWdvXzEuUGFnZVJvdXRlci5tYXRjaGVkUm91dGUucGFyYW1zLmdldCgnaWQnKSB8fCAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwYWdlciB0byBnbyB0aHJvdWdoIHRlc3RzLlxuICAgICAgICBmb3IgKGNvbnN0IGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXN0LWxpbmsnKSkge1xuICAgICAgICAgICAgbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ290b05leHRUZXN0LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdvdG9OZXh0VGVzdChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKEljaGlnb18xLlBhZ2VSb3V0ZXIubWF0Y2hlZFJvdXRlLnBhcmFtcy5nZXQoJ2lkJykgfHwgJzAnKTtcbiAgICAgICAgbGV0IG5leHRpZDtcbiAgICAgICAgaWYgKGV2dC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmV4dCkge1xuICAgICAgICAgICAgbmV4dGlkID0gaWQgKyAxO1xuICAgICAgICAgICAgLy8gQXQgdGhlIG1vbWVudCwgdGhlcmUncyBleGFjdGx5IG9uZSByb3V0ZSBwZXIgdGVzdCwgc28gd2UgY2FuIGNoZWFwbHkga25vdyB3ZSdyZSBhdCB0aGUgZW5kXG4gICAgICAgICAgICAvLyBldmVuIHdpdGhvdXQgYW55IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB0ZXN0cyBiZWluZyBpbiB0aGlzIGNsYXNzLiBUaGlzIGlzIGEgY2hlYXQsIHRob3VnaCxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgY291bGQgZWFzaWx5IGhhdmUgYWRkZWQgc29tZSBvdGhlciByb3V0ZXMuXG4gICAgICAgICAgICBpZiAobmV4dGlkID49IEljaGlnb18xLlBhZ2VSb3V0ZXIuYWxsUm91dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5leHRpZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0aWQgPSBpZCAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dGlkIDwgMCkge1xuICAgICAgICAgICAgICAgIG5leHRpZCA9IEljaGlnb18xLlBhZ2VSb3V0ZXIuYWxsUm91dGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGRyID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0SGVhZGVyJyk7XG4gICAgICAgIGlmIChoZHIpIHtcbiAgICAgICAgICAgIGhkci5pbm5lckhUTUwgPSBcIlRlc3QgI1wiICsgbmV4dGlkO1xuICAgICAgICB9XG4gICAgICAgIEljaGlnb18xLlBhZ2VSb3V0ZXIucm91dGUoJ3Rlc3QvJyArIG5leHRpZCk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0YmVuY2hWaWV3ID0gVGVzdGJlbmNoVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gYXNzZXJ0KHRlc3QsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIXRlc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCcpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIl19
