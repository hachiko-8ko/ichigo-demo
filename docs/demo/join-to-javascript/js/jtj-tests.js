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

},{"../Generators/MakeGenerator":4,"../Queryable/Aggregate":7,"../Queryable/All":8,"../Queryable/Any":9,"../Queryable/Append":10,"../Queryable/Average":11,"../Queryable/Chunk":12,"../Queryable/Concat":13,"../Queryable/Contains":14,"../Queryable/Count":15,"../Queryable/CrossJoin":16,"../Queryable/DefaultIfEmpty":17,"../Queryable/Distinct":18,"../Queryable/DistinctBy":19,"../Queryable/ElementAt":20,"../Queryable/ElementAtOrDefault":21,"../Queryable/Empty":22,"../Queryable/Except":23,"../Queryable/ExceptBy":24,"../Queryable/First":25,"../Queryable/FirstOrDefault":26,"../Queryable/ForEach":27,"../Queryable/FullJoin":28,"../Queryable/GroupBy":29,"../Queryable/GroupJoin":30,"../Queryable/InnerJoin":31,"../Queryable/Intersect":32,"../Queryable/IntersectBy":33,"../Queryable/Join":34,"../Queryable/Last":35,"../Queryable/LastOrDefault":36,"../Queryable/LeftJoin":37,"../Queryable/LongCount":38,"../Queryable/Max":39,"../Queryable/MaxBy":40,"../Queryable/MaxOrDefault":41,"../Queryable/Min":42,"../Queryable/MinBy":43,"../Queryable/MinOrDefault":44,"../Queryable/OfType":45,"../Queryable/OuterJoin":47,"../Queryable/Prepend":48,"../Queryable/Replicate":49,"../Queryable/Reverse":50,"../Queryable/RightJoin":51,"../Queryable/Select":52,"../Queryable/SelectMany":53,"../Queryable/SequenceEqual":54,"../Queryable/Single":55,"../Queryable/SingleOrDefault":56,"../Queryable/Skip":57,"../Queryable/SkipLast":58,"../Queryable/SkipWhile":59,"../Queryable/Sum":60,"../Queryable/Take":61,"../Queryable/TakeLast":62,"../Queryable/TakeWhile":63,"../Queryable/ToConversions":64,"../Queryable/Union":65,"../Queryable/UnionBy":66,"../Queryable/Where":67,"../Queryable/Zip":68}],2:[function(require,module,exports){
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

},{"./../Types/IComparer":70,"./Enumerable":1}],3:[function(require,module,exports){
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
        yield x;
        backup.push(x);
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
const Min_1 = require("./Queryable/Min");
const MinBy_1 = require("./Queryable/MinBy");
const OfType_1 = require("./Queryable/OfType");
const OrderBy_1 = require("./Queryable/OrderBy");
const OuterJoin_1 = require("./Queryable/OuterJoin");
const Prepend_1 = require("./Queryable/Prepend");
const Replicate_1 = require("./Queryable/Replicate");
const Reverse_1 = require("./Queryable/Reverse");
const Select_1 = require("./Queryable/Select");
const SelectMany_1 = require("./Queryable/SelectMany");
const SequenceEqual_1 = require("./Queryable/SequenceEqual");
const Single_1 = require("./Queryable/Single");
const SingleOrDefault_1 = require("./Queryable/SingleOrDefault");
const Skip_1 = require("./Queryable/Skip");
const SkipLast_1 = require("./Queryable/SkipLast");
const SkipWhile_1 = require("./Queryable/SkipWhile");
const Sum_1 = require("./Queryable/Sum");
const Take_1 = require("./Queryable/Take");
const TakeLast_1 = require("./Queryable/TakeLast");
const TakeWhile_1 = require("./Queryable/TakeWhile");
const ToConversions_1 = require("./Queryable/ToConversions");
const Union_1 = require("./Queryable/Union");
const UnionBy_1 = require("./Queryable/UnionBy");
const Where_1 = require("./Queryable/Where");
const Zip_1 = require("./Queryable/Zip");
const MaxOrDefault_1 = require("./Queryable/MaxOrDefault");
const MinOrDefault_1 = require("./Queryable/MinOrDefault");
const RightJoin_1 = require("./Queryable/RightJoin");
const FullJoin_1 = require("./Queryable/FullJoin");
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

},{"./Enumerable/Enumerable":1,"./Extend":3,"./Queryable/Aggregate":7,"./Queryable/All":8,"./Queryable/Any":9,"./Queryable/Append":10,"./Queryable/Average":11,"./Queryable/Chunk":12,"./Queryable/Concat":13,"./Queryable/Contains":14,"./Queryable/Count":15,"./Queryable/CrossJoin":16,"./Queryable/DefaultIfEmpty":17,"./Queryable/Distinct":18,"./Queryable/DistinctBy":19,"./Queryable/ElementAt":20,"./Queryable/ElementAtOrDefault":21,"./Queryable/Empty":22,"./Queryable/Except":23,"./Queryable/ExceptBy":24,"./Queryable/First":25,"./Queryable/FirstOrDefault":26,"./Queryable/ForEach":27,"./Queryable/FullJoin":28,"./Queryable/GroupBy":29,"./Queryable/GroupJoin":30,"./Queryable/InnerJoin":31,"./Queryable/Intersect":32,"./Queryable/IntersectBy":33,"./Queryable/Join":34,"./Queryable/Last":35,"./Queryable/LastOrDefault":36,"./Queryable/LongCount":38,"./Queryable/Max":39,"./Queryable/MaxBy":40,"./Queryable/MaxOrDefault":41,"./Queryable/Min":42,"./Queryable/MinBy":43,"./Queryable/MinOrDefault":44,"./Queryable/OfType":45,"./Queryable/OrderBy":46,"./Queryable/OuterJoin":47,"./Queryable/Prepend":48,"./Queryable/Replicate":49,"./Queryable/Reverse":50,"./Queryable/RightJoin":51,"./Queryable/Select":52,"./Queryable/SelectMany":53,"./Queryable/SequenceEqual":54,"./Queryable/Single":55,"./Queryable/SingleOrDefault":56,"./Queryable/Skip":57,"./Queryable/SkipLast":58,"./Queryable/SkipWhile":59,"./Queryable/Sum":60,"./Queryable/Take":61,"./Queryable/TakeLast":62,"./Queryable/TakeWhile":63,"./Queryable/ToConversions":64,"./Queryable/Union":65,"./Queryable/UnionBy":66,"./Queryable/Where":67,"./Queryable/Zip":68}],7:[function(require,module,exports){
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

},{"../Types/NoneType":73}],12:[function(require,module,exports){
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

},{"../Types/IEqualityComparer":71}],15:[function(require,module,exports){
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

},{"./../Types/IEqualityComparer":71}],19:[function(require,module,exports){
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

},{"./../Types/IEqualityComparer":71}],20:[function(require,module,exports){
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

},{"./../Types/IEqualityComparer":71}],24:[function(require,module,exports){
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

},{"./../Types/IEqualityComparer":71}],25:[function(require,module,exports){
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

},{"../Types/Grouping":69,"./../Types/IEqualityComparer":71}],30:[function(require,module,exports){
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

},{"../Generators/RestartableGenerator":5,"../Types/Grouping":69,"../Types/IEqualityComparer":71}],31:[function(require,module,exports){
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

},{"../Types/IEqualityComparer":71}],33:[function(require,module,exports){
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

},{"../Types/IEqualityComparer":71}],34:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],40:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],41:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],42:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],43:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],44:[function(require,module,exports){
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

},{"./../Types/IComparer":70}],45:[function(require,module,exports){
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

},{"./../Types/IEqualityComparer":71}],55:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * take_q_: Returns a specified number of contiguous elements from the start of a sequence.
 * The start parameter is a JS-specific modification to implement Range, which is a C#-only object (with an odd syntax)
 */
function take(count, start = 0) {
    return this._extend(function* _take(data) {
        if (start < 0) {
            start = 0;
        }
        for (const item of data) {
            if (count <= start) {
                return;
            }
            count--;
            yield item;
        }
    });
}
exports.take = take;

},{}],62:[function(require,module,exports){
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

},{}],63:[function(require,module,exports){
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

},{}],64:[function(require,module,exports){
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
 * Not that in general, objects don't make good Map keys.
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
 * Not that in general, objects don't make good Map keys.
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

},{"../Types/Lookup":72}],65:[function(require,module,exports){
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

},{"../Types/IEqualityComparer":71}],66:[function(require,module,exports){
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

},{"../Types/IEqualityComparer":71}],67:[function(require,module,exports){
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

},{}],68:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
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

},{}],72:[function(require,module,exports){
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

},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNone(test) {
    return (test == null || test === undefined);
}
exports.isNone = isNone;

},{}],74:[function(require,module,exports){
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

},{"./Ichigo":75}],75:[function(require,module,exports){
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

},{}],76:[function(require,module,exports){
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

},{"../src/PrototypeExtension":6,"../tests/TestbenchView":87,"./Ichigo":75,"./Test000":77,"./Test001":78,"./Test002":79,"./Test003":80,"./Test004":81,"./Test005":82,"./Test006":83}],77:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],78:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],79:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],80:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],81:[function(require,module,exports){
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

},{"../src/Enumerable/Enumerable":1,"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],82:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],83:[function(require,module,exports){
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

},{"./TestCaseView":84,"./TestCaseViewModel":85,"./assert":88}],84:[function(require,module,exports){
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

},{"./ConsoleView":74,"./Ichigo":75,"./TestHeader":86}],85:[function(require,module,exports){
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

},{"./Ichigo":75}],86:[function(require,module,exports){
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

},{"./Ichigo":75}],87:[function(require,module,exports){
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

},{"./Ichigo":75}],88:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(test, message) {
    if (!test) {
        throw new Error(message || 'Failed');
    }
}
exports.assert = assert;

},{}]},{},[76])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiLCJ0ZXN0cy9Db25zb2xlVmlldy5qcyIsInRlc3RzL0ljaGlnby5qcyIsInRlc3RzL1Byb2dyYW0uanMiLCJ0ZXN0cy9UZXN0MDAwLmpzIiwidGVzdHMvVGVzdDAwMS5qcyIsInRlc3RzL1Rlc3QwMDIuanMiLCJ0ZXN0cy9UZXN0MDAzLmpzIiwidGVzdHMvVGVzdDAwNC5qcyIsInRlc3RzL1Rlc3QwMDUuanMiLCJ0ZXN0cy9UZXN0MDA2LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3TW9kZWwuanMiLCJ0ZXN0cy9UZXN0SGVhZGVyLmpzIiwidGVzdHMvVGVzdGJlbmNoVmlldy5qcyIsInRlc3RzL2Fzc2VydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTWFrZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvclwiKTtcbmNvbnN0IEFnZ3JlZ2F0ZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BZ2dyZWdhdGVcIik7XG5jb25zdCBBbGxfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQWxsXCIpO1xuY29uc3QgQW55XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FueVwiKTtcbmNvbnN0IEFwcGVuZF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BcHBlbmRcIik7XG5jb25zdCBBdmVyYWdlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0F2ZXJhZ2VcIik7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9DaHVua1wiKTtcbmNvbnN0IENvbmNhdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db25jYXRcIik7XG5jb25zdCBDb250YWluc18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db250YWluc1wiKTtcbmNvbnN0IENvdW50XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvdW50XCIpO1xuY29uc3QgQ3Jvc3NKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Nyb3NzSm9pblwiKTtcbmNvbnN0IERlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0RlZmF1bHRJZkVtcHR5XCIpO1xuY29uc3QgRGlzdGluY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGlzdGluY3RcIik7XG5jb25zdCBEaXN0aW5jdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Rpc3RpbmN0QnlcIik7XG5jb25zdCBFbGVtZW50QXRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRWxlbWVudEF0XCIpO1xuY29uc3QgRWxlbWVudEF0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEVtcHR5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VtcHR5XCIpO1xuY29uc3QgRXhjZXB0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0V4Y2VwdFwiKTtcbmNvbnN0IEV4Y2VwdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0V4Y2VwdEJ5XCIpO1xuY29uc3QgRmlyc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRmlyc3RcIik7XG5jb25zdCBGaXJzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEZvckVhY2hfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRm9yRWFjaFwiKTtcbmNvbnN0IEZ1bGxKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Z1bGxKb2luXCIpO1xuY29uc3QgR3JvdXBCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Hcm91cEJ5XCIpO1xuY29uc3QgR3JvdXBKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0dyb3VwSm9pblwiKTtcbmNvbnN0IElubmVySm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Jbm5lckpvaW5cIik7XG5jb25zdCBJbnRlcnNlY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW50ZXJzZWN0XCIpO1xuY29uc3QgSW50ZXJzZWN0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW50ZXJzZWN0QnlcIik7XG5jb25zdCBKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0pvaW5cIik7XG5jb25zdCBMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xhc3RcIik7XG5jb25zdCBMYXN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xhc3RPckRlZmF1bHRcIik7XG5jb25zdCBMZWZ0Sm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MZWZ0Sm9pblwiKTtcbmNvbnN0IExvbmdDb3VudF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Mb25nQ291bnRcIik7XG5jb25zdCBNYXhfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4XCIpO1xuY29uc3QgTWF4QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4QnlcIik7XG5jb25zdCBNYXhPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4T3JEZWZhdWx0XCIpO1xuY29uc3QgTWluXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pblwiKTtcbmNvbnN0IE1pbkJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pbkJ5XCIpO1xuY29uc3QgTWluT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pbk9yRGVmYXVsdFwiKTtcbmNvbnN0IE9mVHlwZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9PZlR5cGVcIik7XG5jb25zdCBPdXRlckpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvT3V0ZXJKb2luXCIpO1xuY29uc3QgUHJlcGVuZF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9QcmVwZW5kXCIpO1xuY29uc3QgUmVwbGljYXRlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JlcGxpY2F0ZVwiKTtcbmNvbnN0IFJldmVyc2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmV2ZXJzZVwiKTtcbmNvbnN0IFJpZ2h0Sm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SaWdodEpvaW5cIik7XG5jb25zdCBTZWxlY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VsZWN0XCIpO1xuY29uc3QgU2VsZWN0TWFueV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZWxlY3RNYW55XCIpO1xuY29uc3QgU2VxdWVuY2VFcXVhbF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZXF1ZW5jZUVxdWFsXCIpO1xuY29uc3QgU2luZ2xlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NpbmdsZVwiKTtcbmNvbnN0IFNpbmdsZU9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TaW5nbGVPckRlZmF1bHRcIik7XG5jb25zdCBTa2lwXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBcIik7XG5jb25zdCBTa2lwTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwTGFzdFwiKTtcbmNvbnN0IFNraXBXaGlsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwV2hpbGVcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU3VtXCIpO1xuY29uc3QgVGFrZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlXCIpO1xuY29uc3QgVGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZUxhc3RcIik7XG5jb25zdCBUYWtlV2hpbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZVdoaWxlXCIpO1xuY29uc3QgVG9Db252ZXJzaW9uc18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ub0NvbnZlcnNpb25zXCIpO1xuY29uc3QgVW5pb25fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVW5pb25cIik7XG5jb25zdCBVbmlvbkJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1VuaW9uQnlcIik7XG5jb25zdCBXaGVyZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9XaGVyZVwiKTtcbmNvbnN0IFppcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9aaXBcIik7XG5jbGFzcyBFbnVtZXJhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgaGFja3kgYnV0IGxldHMgbWUgc3BsaXQgdGhpcyBHSUFOVCBjbGFzcyB1cCBpbnRvIGEgZmV3IGRvemVuIGZpbGVzLlxuICAgICAgICB0aGlzLmFnZ3JlZ2F0ZV9xXyA9IEFnZ3JlZ2F0ZV8xLmFnZ3JlZ2F0ZTtcbiAgICAgICAgdGhpcy5hbGxfcV8gPSBBbGxfMS5hbGw7XG4gICAgICAgIHRoaXMuYW55X3FfID0gQW55XzEuYW55X3FfO1xuICAgICAgICB0aGlzLmFwcGVuZF9xXyA9IEFwcGVuZF8xLmFwcGVuZDtcbiAgICAgICAgdGhpcy5hdmVyYWdlX3FfID0gQXZlcmFnZV8xLmF2ZXJhZ2U7XG4gICAgICAgIC8vIFRoZXJlJ3Mgbm8gd2F5IHRvIGRvIChOdW1iZXIpZm9vIGluIEphdmFTY3JpcHQsIGFuZCBjYXN0aW5nIGluIFR5cGVTY3JpcHQgaXNuJ3QgZW1pdHRlZC5cbiAgICAgICAgLy8gU28gdGhlIGNhc3QgaXMgYmVpbmcgYWxpYXNlZCB0byBzZWxlY3Qgc28geW91IGNhbiBkbyBmb28uY2FzdChudW0gPT4gTnVtYmVyKG51bSkpXG4gICAgICAgIHRoaXMuY2FzdF9xXyA9IFNlbGVjdF8xLnNlbGVjdDtcbiAgICAgICAgdGhpcy5jaHVua19xXyA9IENodW5rXzEuY2h1bms7XG4gICAgICAgIHRoaXMuY29uY2F0X3FfID0gQ29uY2F0XzEuY29uY2F0O1xuICAgICAgICB0aGlzLmNvbnRhaW5zX3FfID0gQ29udGFpbnNfMS5jb250YWlucztcbiAgICAgICAgdGhpcy5jb3VudF9xXyA9IENvdW50XzEuY291bnQ7XG4gICAgICAgIHRoaXMuY3Jvc3NKb2luX3FfID0gQ3Jvc3NKb2luXzEuY3Jvc3NKb2luO1xuICAgICAgICB0aGlzLmRlZmF1bHRJZkVtcHR5X3FfID0gRGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eTtcbiAgICAgICAgdGhpcy5kaXN0aW5jdF9xXyA9IERpc3RpbmN0XzEuZGlzdGluY3Q7XG4gICAgICAgIHRoaXMuZGlzdGluY3RCeV9xXyA9IERpc3RpbmN0QnlfMS5kaXN0aW5jdEJ5O1xuICAgICAgICB0aGlzLmVsZW1lbnRBdF9xXyA9IEVsZW1lbnRBdF8xLmVsZW1lbnRBdDtcbiAgICAgICAgdGhpcy5lbGVtZW50QXRPckRlZmF1bHRfcV8gPSBFbGVtZW50QXRPckRlZmF1bHRfMS5lbGVtZW50QXRPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuZW1wdHlfcV8gPSBFbXB0eV8xLmVtcHR5O1xuICAgICAgICB0aGlzLmV4Y2VwdF9xXyA9IEV4Y2VwdF8xLmV4Y2VwdDtcbiAgICAgICAgdGhpcy5leGNlcHRCeV9xXyA9IEV4Y2VwdEJ5XzEuZXhjZXB0Qnk7XG4gICAgICAgIHRoaXMuZmlyc3RfcV8gPSBGaXJzdF8xLmZpcnN0O1xuICAgICAgICB0aGlzLmZpcnN0T3JEZWZhdWx0X3FfID0gRmlyc3RPckRlZmF1bHRfMS5maXJzdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5mb3JFYWNoX3FfID0gRm9yRWFjaF8xLmZvckVhY2g7XG4gICAgICAgIHRoaXMuZnVsbEpvaW5fcV8gPSBGdWxsSm9pbl8xLmZ1bGxKb2luO1xuICAgICAgICB0aGlzLmdyb3VwQnlfcV8gPSBHcm91cEJ5XzEuZ3JvdXBCeTtcbiAgICAgICAgdGhpcy5ncm91cEpvaW5fcV8gPSBHcm91cEpvaW5fMS5ncm91cEpvaW47XG4gICAgICAgIHRoaXMuaW5uZXJKb2luX3FfID0gSW5uZXJKb2luXzEuaW5uZXJKb2luO1xuICAgICAgICB0aGlzLmludGVyc2VjdF9xXyA9IEludGVyc2VjdF8xLmludGVyc2VjdDtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RCeV9xXyA9IEludGVyc2VjdEJ5XzEuaW50ZXJzZWN0Qnk7XG4gICAgICAgIHRoaXMuam9pbl9xXyA9IEpvaW5fMS5qb2luO1xuICAgICAgICB0aGlzLmxhc3RfcV8gPSBMYXN0XzEubGFzdDtcbiAgICAgICAgdGhpcy5sYXN0T3JEZWZhdWx0X3FfID0gTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMubGVmdEpvaW5fcV8gPSBMZWZ0Sm9pbl8xLmxlZnRKb2luO1xuICAgICAgICB0aGlzLmxvbmdDb3VudF9xXyA9IExvbmdDb3VudF8xLmxvbmdDb3VudDtcbiAgICAgICAgdGhpcy5tYXhfcV8gPSBNYXhfMS5tYXg7XG4gICAgICAgIHRoaXMubWF4QnlfcV8gPSBNYXhCeV8xLm1heEJ5O1xuICAgICAgICB0aGlzLm1heE9yRGVmYXVsdF9xXyA9IE1heE9yRGVmYXVsdF8xLm1heE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5taW5fcV8gPSBNaW5fMS5taW47XG4gICAgICAgIHRoaXMubWluQnlfcV8gPSBNaW5CeV8xLm1pbkJ5O1xuICAgICAgICB0aGlzLm1pbk9yRGVmYXVsdF9xXyA9IE1pbk9yRGVmYXVsdF8xLm1pbk9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5vZlR5cGVfcV8gPSBPZlR5cGVfMS5vZlR5cGU7XG4gICAgICAgIHRoaXMub3V0ZXJKb2luX3FfID0gT3V0ZXJKb2luXzEub3V0ZXJKb2luO1xuICAgICAgICB0aGlzLnByZXBlbmRfcV8gPSBQcmVwZW5kXzEucHJlcGVuZDtcbiAgICAgICAgdGhpcy5yZXBsaWNhdGVfcV8gPSBSZXBsaWNhdGVfMS5yZXBsaWNhdGU7XG4gICAgICAgIHRoaXMucmV2ZXJzZV9xXyA9IFJldmVyc2VfMS5yZXZlcnNlO1xuICAgICAgICB0aGlzLnJpZ2h0Sm9pbl9xXyA9IFJpZ2h0Sm9pbl8xLnJpZ2h0Sm9pbjtcbiAgICAgICAgdGhpcy5zZWxlY3RfcV8gPSBTZWxlY3RfMS5zZWxlY3Q7XG4gICAgICAgIHRoaXMuc2VsZWN0TWFueV9xXyA9IFNlbGVjdE1hbnlfMS5zZWxlY3RNYW55O1xuICAgICAgICB0aGlzLnNlcXVlbmNlRXF1YWxfcV8gPSBTZXF1ZW5jZUVxdWFsXzEuc2VxdWVuY2VFcXVhbDtcbiAgICAgICAgdGhpcy5zaW5nbGVfcV8gPSBTaW5nbGVfMS5zaW5nbGU7XG4gICAgICAgIHRoaXMuc2luZ2xlT3JEZWZhdWx0X3FfID0gU2luZ2xlT3JEZWZhdWx0XzEuc2luZ2xlT3JEZWZhdWx0O1xuICAgICAgICB0aGlzLnNraXBfcV8gPSBTa2lwXzEuc2tpcDtcbiAgICAgICAgdGhpcy5za2lwTGFzdF9xXyA9IFNraXBMYXN0XzEuc2tpcExhc3Q7XG4gICAgICAgIHRoaXMuc2tpcFdoaWxlX3FfID0gU2tpcFdoaWxlXzEuc2tpcFdoaWxlO1xuICAgICAgICB0aGlzLnN1bV9xXyA9IFN1bV8xLnN1bTtcbiAgICAgICAgdGhpcy50YWtlX3FfID0gVGFrZV8xLnRha2U7XG4gICAgICAgIHRoaXMudGFrZUxhc3RfcV8gPSBUYWtlTGFzdF8xLnRha2VMYXN0O1xuICAgICAgICB0aGlzLnRha2VXaGlsZV9xXyA9IFRha2VXaGlsZV8xLnRha2VXaGlsZTtcbiAgICAgICAgdGhpcy50b0FycmF5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvQXJyYXk7XG4gICAgICAgIHRoaXMudG9EaWN0aW9uYXJ5X3FfID0gVG9Db252ZXJzaW9uc18xLnRvRGljdGlvbmFyeTtcbiAgICAgICAgdGhpcy50b0hhc2hTZXRfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9IYXNoU2V0O1xuICAgICAgICB0aGlzLnRvTGlzdF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0FycmF5O1xuICAgICAgICB0aGlzLnRvTG9va3VwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTG9va3VwO1xuICAgICAgICB0aGlzLnRvTWFwX3FfID0gVG9Db252ZXJzaW9uc18xLnRvTWFwO1xuICAgICAgICB0aGlzLnVuaW9uX3FfID0gVW5pb25fMS51bmlvbjtcbiAgICAgICAgdGhpcy51bmlvbkJ5X3FfID0gVW5pb25CeV8xLnVuaW9uQnk7XG4gICAgICAgIHRoaXMud2hlcmVfcV8gPSBXaGVyZV8xLndoZXJlO1xuICAgICAgICB0aGlzLnppcF9xXyA9IFppcF8xLnppcDtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5faXNDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gTm9ybWFsbHksIHdlJ2QgZ28gYWhlYWQgYW5kIHNheSB0aGUgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXksIG5vdGhpbmcgYnV0LlxuICAgICAgICAvLyBCdXQgbGV0J3MgYmUgZmxleGlibGUgYW5kIGFsbG93IGFueXRoaW5nLiBJZiBpdCdzIG5vdCBpdGVyYWJsZSwgdGhlbiBpdCdsbCBiZWNvbWUgYSBvbmUtaXRlbSBpdGVyYXRvci5cbiAgICAgICAgdGhpcy5fc291cmNlID0gdGhpcy5fZW5zdXJlQmFja3VwKE1ha2VHZW5lcmF0b3JfMS5tYWtlR2VuZXJhdG9yKGRhdGEpKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmdlX3FfKHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JhbmdlKCkge1xuICAgICAgICAgICAgbGV0IGkgPSBzdGFydDtcbiAgICAgICAgICAgIGNvbnN0IG1heHZhbCA9IHN0YXJ0ICsgbGVuO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG4gICAgc3RhdGljIHJlcGVhdF9xXyhlbGVtZW50LCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBhIHBhaW4gdG8gcmVtZW1iZXIgdGhlIGZ1bmN0aW9uKnt9KCkgc3ludGF4IGhlcmUuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jdGlvbiogX3JlcGVhdCgpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgfVxuICAgIGdldCBfZGF0YSgpIHtcbiAgICAgICAgLy8gVGhlcmUncyBub3QgYSBsb3Qgb2YgY2FsbCBmb3Igc2VsZWN0aW5nIGZyb20gYW4gZW51bWVyYWJsZSBtb3JlIHRoYW4gb25jZSwgYnV0IHNvbWVvbmUgbWlnaHRcbiAgICAgICAgLy8gd2FudCB0byBkbyBpdC4gSW4gQyMgdGhlIG9ubHkgcmVhbCB0aW1lIHRoaXMgaGFwcGVucyBpcyB3aGVuIHlvdSB1c2UgdGhlIGRlYnVnZ2VyLCBidXQgaXQgZG9lcyBoYXBwZW4uXG4gICAgICAgIC8vIEJ1dCB3aGVuIGRhdGEgaGFzIGJlZW4gZmV0Y2hlZCBmcm9tIHRoZSBnZW5lcmF0b3IsIGl0IGJlY29tZXMgY2xvc2VkLCBhbmQgZXZlcnkgZ2VuZXJhdG9yIGluIGl0c1xuICAgICAgICAvLyBzb3VyY2UgaXMgYWxzbyBjbG9zZWQuIFRoaXMgaXMgYnVpbHQgaW4gdG8gSlMgYW5kIG5vdCBzb21ldGhpbmcgd2UgY2FuIGNoYW5nZS5cbiAgICAgICAgLy8gQnV0IHdlIGNhbiBjYWNoZSB0aGUgZGF0YSB3aGVuIHdlIGZldGNoIGl0IGFuZCByZXR1cm4gdGhlIGNhY2hlIGlmIGNsb3NlZC5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgICB9XG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4odmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlU2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnJldHVybih2YWx1ZSk7XG4gICAgfVxuICAgIHRocm93KGUpIHtcbiAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBUeXBlc2NyaXB0IGRvZXMgbm90IGxpa2UgdGhpcy4gSXQgdGhpbmtzIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWlnaHQgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgY2xlYXJseSBkZWZpbmVkIGEgZmV3IGxpbmVzIHVwLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLnRocm93KGUpO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICAvLyBCdXQgaXQncyBvayB3aXRoIHRoZSBleGFjdCBzYW1lIGNvZGUgaGVyZS4gR28gZmlndXJlLlxuICAgICAgICBjb25zdCBpbnRlcm5hbEl0ZXJhdG9yID0gdGhpc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZXJhdG9yLm5leHQoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICAvLyBXcml0aW5nIGFuIEVudW1lcmFibGUgdG8gSlNPTiBleGhhdXN0cyB0aGUgZW51bWVyYXRvci5cbiAgICAgICAgcmV0dXJuIFsuLi50aGlzXTtcbiAgICB9XG4gICAgdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgICAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgb3V0IHZhcnMgaW4gSlMgc28gd2UgaGF2ZSB0byB1c2UgYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBub3QgY2xvc2VkLCB0aGlzIGlzIGEgZ2VuZXJhdG9yLCBhbmQgd2UgY2FuJ3QgY291bnQgaXQgd2l0aG91dCBlbnVtZXJhdGluZyBpdC5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUaGlzIGhlbHBlciBhbGxvd3MgbWV0aG9kcyBkZWNsYXJlZCBpbiBvdGhlciBmaWxlcyB0byB1c2UgZ2VuZXJhdG9yIGZ1bmN0aW9ucyB3aXRob3V0IHJlZmVyZW5jaW5nIHRoaXMuX2RhdGEgKHJlcXVpcmluZyBpdFxuICAgIC8vIHRvIGJlIHB1YmxpYykgb3IgdXNpbmcgdGhlIChmdW5jdGlvbiooKSB7fSkoZGF0YSkgc3ludGF4LCB3aGljaCBpcyB1Z2x5LlxuICAgIF9leHRlbmQoZnVuYykge1xuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoZnVuYyh0aGlzKSk7XG4gICAgfVxuICAgICpfZW5zdXJlQmFja3VwKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzQ2xvc2VkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLkVudW1lcmFibGUgPSBFbnVtZXJhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGVcIik7XG5jbGFzcyBPcmRlcmVkRW51bWVyYWJsZSBleHRlbmRzIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB0aGlzLl9zb3J0ZXJzID0gW107XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nOiBkZXNjZW5kaW5nIH0pO1xuICAgIH1cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgZGF0YS4gVGhpcyBuZWVkcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3QsIGJlY2F1c2UgdGhlIGxhc3QgcmVjb3JkIGNvdWxkIGJlIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCBuZWVkcyB0byBnbyBmaXJzdC5cbiAgICAgICAgLy8gVHdvIHBvc3NpYmxlIGFwcHJvYWNoZXMgaGVyZS4gT25lIGlzIHRvIHJlcGVhdGVkbHkgYXR0YWNrIHRoZSBsaXN0LCBnb2luZyBhZnRlciB0aGUgbWluIHJlY29yZCBhbmRcbiAgICAgICAgLy8gcmV0dXJuaW5nIGl0LCB3aGljaCBpcyBoZWF2eSBvbiB0aGUgQ1BVIGJ1dCBsaWdodCBvbiBtZW1vcnksIG9yIHdoYXQgSSdtIGdvaW5nIHRvIGRvLCB3aGljaCBpcyBsb2FkXG4gICAgICAgIC8vIGFuIGFycmF5IGFuZCB1c2UgdGhlIGJ1aWx0LWluIHNvcnQoKSBtZXRob2QsIHdoaWNoIGlzIGhlYXZ5IG9uIG1lbW9yeSBidXQgbGlnaHQgb24gQ1BVLlxuICAgICAgICBsZXQgc29ydGluZ0Z1bmN0aW9uO1xuICAgICAgICBmb3IgKGNvbnN0IGhhdCBvZiB0aGlzLl9zb3J0ZXJzKSB7XG4gICAgICAgICAgICBzb3J0aW5nRnVuY3Rpb24gPSBidWlsZFNvcnRlcihoYXQub3JkZXJCeSwgaGF0LmNvbXBhcmVyLCBoYXQuZGVzY2VuZGluZywgc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gWy4uLnRoaXMuX2RhdGFdLnNvcnQoc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNvcnRlZERhdGEpIHtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhlbkJ5X3FfKG9yZGVyQnksIGNvbXBhcmVyKSB7XG4gICAgICAgIGlmICghb3JkZXJCeSkge1xuICAgICAgICAgICAgb3JkZXJCeSA9ICgobykgPT4gbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhlbkJ5RGVzY2VuZGluZ19xXyhvcmRlckJ5LCBjb21wYXJlcikge1xuICAgICAgICBpZiAoIW9yZGVyQnkpIHtcbiAgICAgICAgICAgIG9yZGVyQnkgPSAoKG8pID0+IG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLk9yZGVyZWRFbnVtZXJhYmxlID0gT3JkZXJlZEVudW1lcmFibGU7XG5mdW5jdGlvbiBidWlsZFNvcnRlcihrZXlTZWxlY3RvciwgY29tcGFyZXIsIGRlc2NlbmRpbmcgPSBmYWxzZSwgaW5pdGlhbCkge1xuICAgIGxldCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmRlZmF1bHRDb21wYXJlcjtcbiAgICB9XG4gICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF90aGVuQnkoeCwgeSkge1xuICAgICAgICAgICAgY29uc3Qga2V5MSA9IGtleVNlbGVjdG9yKHgpO1xuICAgICAgICAgICAgY29uc3Qga2V5MiA9IGtleVNlbGVjdG9yKHkpO1xuICAgICAgICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbCh4LCB5KSB8fCBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWwoeCwgeSkgfHwgY29tcGFyZShrZXkxLCBrZXkyKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfb3JkZXJCeSh4LCB5KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkxID0ga2V5U2VsZWN0b3IoeCk7XG4gICAgICAgICAgICBjb25zdCBrZXkyID0ga2V5U2VsZWN0b3IoeSk7XG4gICAgICAgICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGtleTIsIGtleTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoa2V5MSwga2V5Mik7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG4vKipcbiAqIEhlbHBlciB0byBhZGQgZXh0ZW5zaW9uIG1ldGhvZHMgdG8gQXJyYXkgYW5kIFNldC4gVGhlc2UgbWV0aG9kcyBkdXBsaWNhdGUgdGhlIG5hbWVzIGluIEVudW1lcmFibGUsIGJ1dCB3aGF0IHRoZXkgZG8gaXMgY3JlYXRlIGEgbmV3XG4gKiBFbnVtZXJhYmxlIGFuZCB0aGVuIHBhc3MgdGhlIGNhbGwgb253YXJkLCBzbyBpdCBzZWVtcyBhcyBpZiB0aGUgYXJyYXkgaXMgRW51bWVyYWJsZS5cbiAqXG4gKiBUaGlzIGNhbiBiZSBtb2RpZmllZCB0byBzdXBwb3J0IGFueSBvYmplY3QuIElmIHlvdSBkbyBzbywgcmVtZW1iZXIgdG8gc2V0IHdyaXRhYmxlOiB0cnVlIHNvIEVudW1lcmFibGUgY2FuIGhhdmUgaXRzIG93blxuICogaW1wbGVtZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbnZlcnRUb0VudW1lcmFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpW25hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiogbWFrZUdlbmVyYXRvcihpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVyID09PSBcInN0cmluZ1wiIHx8IGl0ZXJhYmxlR3VhcmQoaXRlcikpIHtcbiAgICAgICAgeWllbGQqIGl0ZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFycmF5TGlrZUd1YXJkKGl0ZXIpKSB7XG4gICAgICAgIHlpZWxkKiBBcnJheS5mcm9tKGl0ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgaXRlcjtcbiAgICB9XG59XG5leHBvcnRzLm1ha2VHZW5lcmF0b3IgPSBtYWtlR2VuZXJhdG9yO1xuZnVuY3Rpb24gaXRlcmFibGVHdWFyZChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogJiYgU3ltYm9sLml0ZXJhdG9yIGluIG9iajtcbn1cbmZ1bmN0aW9uIGFycmF5TGlrZUd1YXJkKG9iaikge1xuICAgIC8vIEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyBwZXJmZWN0IGJ1dCBJIGNhbid0IGZpbmQgYSB3YXkgdG8gdmFsaWRhdGUgdGhlIG90aGVyIHBhcnQgb2YgQXJyYXlMaWtlLCB0aGUga2V5LlxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAmJlxuICAgICAgICBcImxlbmd0aFwiIGluIG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBvYmoubGVuZ3RoID49IDA7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1ha2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuL01ha2VHZW5lcmF0b3JcIik7XG4vKipcbiAqIEpTIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byByZXN0YXJ0IGEgZ2VuZXJhdG9yLCB3aGljaCBjYXVzZXMgYSBncmVhdCBkZWFsIG9mIHRyb3VibGUgd2hlbiB5b3UgbmVlZCB0byBjaGVjayBpdCBtdWx0aXBsZSB0aW1lcy5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgZG8gYW4gaW5uZXIgam9pbiwgeW91IG5lZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50IG9mIHRoZSBsZWZ0IHdpdGggZWFjaCBlbGVtZW50IG9mIHRoZSByaWdodC5cbiAqIFlvdSBuZWVkIHRoZSBhYmlsaXR5IHRvIHJlYnVpbGQgdGhlIGdlbmVyYXRvciBmcm9tIHRoZSBvcmlnaW5hbCBpdGVyYWJsZS4gQnV0IHRoZXJlIGlzbid0IGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBpdGVyYWJsZSBBTllXSEVSRS5cbiAqIEFzIGEgcmVzdWx0LCB0aGUgb25seSB3YXkgdG8gbWFrZSB0aGlzIHdvcmsgaXMgdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGRhdGEgYXMgeW91IGl0ZXJhdGUgaXQuXG4gKiBUaGlzIGNvdWxkIGRvdWJsZSB0aGUgYW1vdW50IG9mIHNwYWNlIG5lZWRlZCwgYnV0IGl0J3MgYSBsaW1pdGF0aW9uIG9mIHRoZSB0ZWNobm9sb2d5LlxuICogV2UgZG9uJ3QgYWN0dWFsbHkga25vdyBpZiBhIGdlbmVyYXRvciBpcyBiZWluZyB1c2VkLiBUaGUgdHlwZSBpcyBcIm9iamVjdC5cIiBTbyB5b3UgY291bGQgYmUgd2FzdGluZyBtZW1vcnkgYnkgdXNpbmcgdGhpcy4gTm8gd2F5IHRvIGtub3cuXG4gKi9cbmNsYXNzIFJlc3RhcnRhYmxlR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVyYWJsZSwgZmxleE1lbW9yeSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYmFja3VwID0gW107XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpdGVyYWJsZSwgdGhpcy5iYWNrdXApO1xuICAgICAgICB0aGlzLmZsZXhNZW1vcnkgPSBmbGV4TWVtb3J5O1xuICAgIH1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH1cbiAgICBhc1F1ZXJ5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuYXNRdWVyeWFibGUoKTtcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmxleE1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuYmFja3VwLnNsaWNlKDApO1xuICAgICAgICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjeWNsZUdlbmVyYXRvcihpLCB0aGlzLmJhY2t1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yID0gTWFrZUdlbmVyYXRvcl8xLm1ha2VHZW5lcmF0b3IodGhpcy5iYWNrdXApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZXN0YXJ0YWJsZUdlbmVyYXRvciA9IFJlc3RhcnRhYmxlR2VuZXJhdG9yO1xuZnVuY3Rpb24qIGN5Y2xlR2VuZXJhdG9yKGl0ZXIsIGJhY2t1cCkge1xuICAgIGZvciAoY29uc3QgeCBvZiBpdGVyKSB7XG4gICAgICAgIHlpZWxkIHg7XG4gICAgICAgIGJhY2t1cC5wdXNoKHgpO1xuICAgIH1cbn1cbmV4cG9ydHMuY3ljbGVHZW5lcmF0b3IgPSBjeWNsZUdlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZS9FbnVtZXJhYmxlXCIpO1xuY29uc3QgRXh0ZW5kXzEgPSByZXF1aXJlKFwiLi9FeHRlbmRcIik7XG5jb25zdCBBZ2dyZWdhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BZ2dyZWdhdGVcIik7XG5jb25zdCBBbGxfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbGxcIik7XG5jb25zdCBBbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BbnlcIik7XG5jb25zdCBBcHBlbmRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BcHBlbmRcIik7XG5jb25zdCBBdmVyYWdlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQXZlcmFnZVwiKTtcbmNvbnN0IENodW5rXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ2h1bmtcIik7XG5jb25zdCBDb25jYXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db25jYXRcIik7XG5jb25zdCBDb250YWluc18xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvbnRhaW5zXCIpO1xuY29uc3QgQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db3VudFwiKTtcbmNvbnN0IENyb3NzSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Nyb3NzSm9pblwiKTtcbmNvbnN0IERlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHlcIik7XG5jb25zdCBEaXN0aW5jdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0XCIpO1xuY29uc3QgRGlzdGluY3RCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Rpc3RpbmN0QnlcIik7XG5jb25zdCBFbGVtZW50QXRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRcIik7XG5jb25zdCBFbGVtZW50QXRPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbGVtZW50QXRPckRlZmF1bHRcIik7XG5jb25zdCBFbXB0eV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VtcHR5XCIpO1xuY29uc3QgRXhjZXB0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRXhjZXB0XCIpO1xuY29uc3QgRXhjZXB0QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FeGNlcHRCeVwiKTtcbmNvbnN0IEZpcnN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRmlyc3RcIik7XG5jb25zdCBGaXJzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZpcnN0T3JEZWZhdWx0XCIpO1xuY29uc3QgRm9yRWFjaF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZvckVhY2hcIik7XG5jb25zdCBHcm91cEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvR3JvdXBCeVwiKTtcbmNvbnN0IEdyb3VwSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0dyb3VwSm9pblwiKTtcbmNvbnN0IElubmVySm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0lubmVySm9pblwiKTtcbmNvbnN0IEludGVyc2VjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ludGVyc2VjdFwiKTtcbmNvbnN0IEludGVyc2VjdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSW50ZXJzZWN0QnlcIik7XG5jb25zdCBKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSm9pblwiKTtcbmNvbnN0IExhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9MYXN0XCIpO1xuY29uc3QgTGFzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0xhc3RPckRlZmF1bHRcIik7XG5jb25zdCBMb25nQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Mb25nQ291bnRcIik7XG5jb25zdCBNYXhfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhcIik7XG5jb25zdCBNYXhCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heEJ5XCIpO1xuY29uc3QgTWluXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluXCIpO1xuY29uc3QgTWluQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5CeVwiKTtcbmNvbnN0IE9mVHlwZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL09mVHlwZVwiKTtcbmNvbnN0IE9yZGVyQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PcmRlckJ5XCIpO1xuY29uc3QgT3V0ZXJKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT3V0ZXJKb2luXCIpO1xuY29uc3QgUHJlcGVuZF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1ByZXBlbmRcIik7XG5jb25zdCBSZXBsaWNhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SZXBsaWNhdGVcIik7XG5jb25zdCBSZXZlcnNlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmV2ZXJzZVwiKTtcbmNvbnN0IFNlbGVjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlbGVjdFwiKTtcbmNvbnN0IFNlbGVjdE1hbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZWxlY3RNYW55XCIpO1xuY29uc3QgU2VxdWVuY2VFcXVhbF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWxcIik7XG5jb25zdCBTaW5nbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVcIik7XG5jb25zdCBTaW5nbGVPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVPckRlZmF1bHRcIik7XG5jb25zdCBTa2lwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcFwiKTtcbmNvbnN0IFNraXBMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcExhc3RcIik7XG5jb25zdCBTa2lwV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ta2lwV2hpbGVcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TdW1cIik7XG5jb25zdCBUYWtlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZVwiKTtcbmNvbnN0IFRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZUxhc3RcIik7XG5jb25zdCBUYWtlV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlV2hpbGVcIik7XG5jb25zdCBUb0NvbnZlcnNpb25zXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVG9Db252ZXJzaW9uc1wiKTtcbmNvbnN0IFVuaW9uXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25cIik7XG5jb25zdCBVbmlvbkJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVW5pb25CeVwiKTtcbmNvbnN0IFdoZXJlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvV2hlcmVcIik7XG5jb25zdCBaaXBfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9aaXBcIik7XG5jb25zdCBNYXhPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHRcIik7XG5jb25zdCBNaW5PckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5PckRlZmF1bHRcIik7XG5jb25zdCBSaWdodEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SaWdodEpvaW5cIik7XG5jb25zdCBGdWxsSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0Z1bGxKb2luXCIpO1xuQXJyYXkucHJvdG90eXBlLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyA9IGZ1bmN0aW9uIF90cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgLy8gdGhlcmUgYXJlIG5vIG91dCB2YXJpYWJsZXMgaW4gSlMsIHNvIHdlIGhhdmUgdG8gcHV0IGl0IGluIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgaWYgKG9iaikge1xuICAgICAgICBvYmoudmFsdWUgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuU2V0LnByb3RvdHlwZS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8gPSBmdW5jdGlvbiBfdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgIC8vIHRoZXJlIGFyZSBubyBvdXQgdmFyaWFibGVzIGluIEpTLCBzbyB3ZSBoYXZlIHRvIHB1dCBpdCBpbiBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgIGlmIChvYmopIHtcbiAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5zaXplO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5PYmplY3QucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIElmIHRoZSBvYmplY3QgaXMgaXRlcmFibGUsIHRoaXMgd2lsbCBiZSBhbiBvcmRpbmFyeSBnZW5lcmF0b3IuIElmIGl0IGlzIG5vdCxcbiAgICAvLyB0aGlzIHdpbGwgYmUgYW4gaXRlcmFibGUgd2l0aCBhIHNpbmdsZSBpdGVtLiBUaGlzIG1ha2VzIGl0IHNvIEkgZG9uJ3QgaGF2ZSB0b1xuICAgIC8vIGd1ZXNzIHdoYXQgcHJvdG90eXBlcyBuZWVkIHRvIGJlIG1vZGlmaWVkLlxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmdzIGFyZSBpdGVyYWJsZSwgYnV0IEkgZGlkbid0IHdhbnQgdG8gYWRkIGFsbCB0aGUgZW51bWVyYWJsZSBtZXRob2RzIHRvIHRoZW0uXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKTtcbn07XG5OdW1iZXIucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICg0KS5hc1F1ZXJ5YWJsZSgpIGlzIHRyZWF0ZWQgbGlrZSByYW5nZSgpXG4gICAgcmV0dXJuIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJhbmdlX3FfKDAsIHRoaXMpO1xufTtcbkJvb2xlYW4ucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICAgIC8vIHRydWUuYXNRdWVyeWFibGUoKSBpcyBwcmV0dHkgdXNlbGVzczogW2ZhbHNlLCB0cnVlXSBhc2NlbmRpbmcuIE1pZ2h0IGJlIHVzZWZ1bC5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbZmFsc2UsIHRydWVdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGZhbHNlLmFzUXVlcnlhYmxlKCkgaXMgYWxzbyBwcmV0dHkgdXNlbGVzczogW3RydWUsIGZhbHNlXSBkZXNjZW5kaW5nLiBNaWdodCBiZSB1c2VmdWwuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUoW3RydWUsIGZhbHNlXSk7XG4gICAgfVxufTtcbi8vIEFkZCBzdHViIGZ1bmN0aW9ucyBvbnRvIEFycmF5LnByb3RvdHlwZSBhbmQgU2V0LnByb3RvdHlwZSB0byBtYWtlIHRoZSBvYmplY3QgaW50byBhbiBFbnVtZXJhYmxlXG4vLyBhbmQgdGhlbiBjYWxsIHRoZSBFbnVtZXJhYmxlIG1ldGhvZFxuRXh0ZW5kXzEuZXh0ZW5kKFwiYWdncmVnYXRlX3FfXCIsIEFnZ3JlZ2F0ZV8xLmFnZ3JlZ2F0ZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJhbGxfcV9cIiwgQWxsXzEuYWxsKTtcbkV4dGVuZF8xLmV4dGVuZChcImFueV9xX1wiLCBBbnlfMS5hbnlfcV8pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYXBwZW5kX3FfXCIsIEFwcGVuZF8xLmFwcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJhdmVyYWdlX3FfXCIsIEF2ZXJhZ2VfMS5hdmVyYWdlKTtcbkV4dGVuZF8xLmV4dGVuZChcImNhc3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImNodW5rX3FfXCIsIENodW5rXzEuY2h1bmspO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY29uY2F0X3FfXCIsIENvbmNhdF8xLmNvbmNhdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb250YWluc19xX1wiLCBDb250YWluc18xLmNvbnRhaW5zKTtcbkV4dGVuZF8xLmV4dGVuZChcImNvdW50X3FfXCIsIENvdW50XzEuY291bnQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY3Jvc3NKb2luX3FfXCIsIENyb3NzSm9pbl8xLmNyb3NzSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJkZWZhdWx0SWZFbXB0eV9xX1wiLCBEZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5KTtcbkV4dGVuZF8xLmV4dGVuZChcImRpc3RpbmN0X3FfXCIsIERpc3RpbmN0XzEuZGlzdGluY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGlzdGluY3RCeV9xX1wiLCBEaXN0aW5jdEJ5XzEuZGlzdGluY3RCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbGVtZW50QXRfcV9cIiwgRWxlbWVudEF0XzEuZWxlbWVudEF0KTtcbkV4dGVuZF8xLmV4dGVuZChcImVsZW1lbnRBdE9yRGVmYXVsdF9xX1wiLCBFbGVtZW50QXRPckRlZmF1bHRfMS5lbGVtZW50QXRPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZW1wdHlfcV9cIiwgRW1wdHlfMS5lbXB0eSk7XG5FeHRlbmRfMS5leHRlbmQoXCJleGNlcHRfcV9cIiwgRXhjZXB0XzEuZXhjZXB0KTtcbkV4dGVuZF8xLmV4dGVuZChcImV4Y2VwdEJ5X3FfXCIsIEV4Y2VwdEJ5XzEuZXhjZXB0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZmlyc3RfcV9cIiwgRmlyc3RfMS5maXJzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmaXJzdE9yRGVmYXVsdF9xX1wiLCBGaXJzdE9yRGVmYXVsdF8xLmZpcnN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImZvckVhY2hfcV9cIiwgRm9yRWFjaF8xLmZvckVhY2gpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZnVsbEpvaW5fcV9cIiwgRnVsbEpvaW5fMS5mdWxsSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJncm91cEJ5X3FfXCIsIEdyb3VwQnlfMS5ncm91cEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImdyb3VwSm9pbl9xX1wiLCBHcm91cEpvaW5fMS5ncm91cEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW5uZXJKb2luX3FfXCIsIElubmVySm9pbl8xLmlubmVySm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJpbnRlcnNlY3RfcV9cIiwgSW50ZXJzZWN0XzEuaW50ZXJzZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImludGVyc2VjdEJ5X3FfXCIsIEludGVyc2VjdEJ5XzEuaW50ZXJzZWN0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiam9pbl9xX1wiLCBKb2luXzEuam9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJsYXN0X3FfXCIsIExhc3RfMS5sYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxhc3RPckRlZmF1bHRfcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGVmdEpvaW5fcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibG9uZ0NvdW50X3FfXCIsIExvbmdDb3VudF8xLmxvbmdDb3VudCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhfcV9cIiwgTWF4XzEubWF4KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heEJ5X3FfXCIsIE1heEJ5XzEubWF4QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4T3JEZWZhdWx0X3FfXCIsIE1heE9yRGVmYXVsdF8xLm1heE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5fcV9cIiwgTWluXzEubWluKTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbkJ5X3FfXCIsIE1pbkJ5XzEubWluQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluT3JEZWZhdWx0X3FfXCIsIE1pbk9yRGVmYXVsdF8xLm1pbk9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJvZlR5cGVfcV9cIiwgT2ZUeXBlXzEub2ZUeXBlKTtcbkV4dGVuZF8xLmV4dGVuZChcIm9yZGVyQnlfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib3JkZXJCeURlc2NlbmRpbmdfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nKTtcbkV4dGVuZF8xLmV4dGVuZChcIm91dGVySm9pbl9xX1wiLCBPdXRlckpvaW5fMS5vdXRlckpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicHJlcGVuZF9xX1wiLCBQcmVwZW5kXzEucHJlcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJyZXBsaWNhdGVfcV9cIiwgUmVwbGljYXRlXzEucmVwbGljYXRlKTtcbkV4dGVuZF8xLmV4dGVuZChcInJldmVyc2VfcV9cIiwgUmV2ZXJzZV8xLnJldmVyc2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmlnaHRKb2luX3FfXCIsIFJpZ2h0Sm9pbl8xLnJpZ2h0Sm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJzZWxlY3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNlbGVjdE1hbnlfcV9cIiwgU2VsZWN0TWFueV8xLnNlbGVjdE1hbnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VxdWVuY2VFcXVhbF9xX1wiLCBTZXF1ZW5jZUVxdWFsXzEuc2VxdWVuY2VFcXVhbCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzaW5nbGVfcV9cIiwgU2luZ2xlXzEuc2luZ2xlKTtcbkV4dGVuZF8xLmV4dGVuZChcInNpbmdsZU9yRGVmYXVsdF9xX1wiLCBTaW5nbGVPckRlZmF1bHRfMS5zaW5nbGVPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcF9xX1wiLCBTa2lwXzEuc2tpcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwTGFzdF9xX1wiLCBTa2lwTGFzdF8xLnNraXBMYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBXaGlsZV9xX1wiLCBTa2lwV2hpbGVfMS5za2lwV2hpbGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic3VtX3FfXCIsIFN1bV8xLnN1bSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlX3FfXCIsIFRha2VfMS50YWtlKTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VMYXN0X3FfXCIsIFRha2VMYXN0XzEudGFrZUxhc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZVdoaWxlX3FfXCIsIFRha2VXaGlsZV8xLnRha2VXaGlsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0FycmF5X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0FycmF5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvRGljdGlvbmFyeV9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9EaWN0aW9uYXJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTGlzdF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9BcnJheSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0xvb2t1cF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9Mb29rdXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9IYXNoU2V0X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0hhc2hTZXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9NYXBfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvTWFwKTtcbkV4dGVuZF8xLmV4dGVuZChcInVuaW9uX3FfXCIsIFVuaW9uXzEudW5pb24pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidW5pb25CeV9xX1wiLCBVbmlvbkJ5XzEudW5pb25CeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ3aGVyZV9xX1wiLCBXaGVyZV8xLndoZXJlKTtcbkV4dGVuZF8xLmV4dGVuZChcInppcF9xX1wiLCBaaXBfMS56aXApO1xuLy8gQXMgYSB3b3JrYXJvdW5kIGZvciBvcmRlcmJ5IChqYXZhc2NyaXB0IGNhbid0IGNyZWF0ZSBhIGNsYXNzIHRoYXQgcmVmZXJlbmNlcyBhIGRlc2NlbmRhbnQgY2xhc3MpLFxuLy8gYWRkIHRoZXNlIHRvIHRoZSBFbnVtZXJhYmxlIGNsYXNzIGluIGEgd2F5IHRoYXQgZG9lc24ndCBleHBsb2RlXG5FbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5wcm90b3R5cGUub3JkZXJCeV9xXyA9IE9yZGVyQnlfMS5vcmRlckJ5O1xuRW51bWVyYWJsZV8xLkVudW1lcmFibGUucHJvdG90eXBlLm9yZGVyQnlEZXNjZW5kaW5nX3FfID0gT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFnZ3JlZ2F0ZV9xXzogQXBwbGllcyBhbiBhY2N1bXVsYXRvciBmdW5jdGlvbiBvdmVyIGEgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBpbml0aWFsIHZhbHVlIGFjdHMgYXMgc2VlZCB2YWx1ZVxuICogb3B0aW9uYWwgc2VsZWN0RnVuY3Rpb24gc2VsZWN0cyB0aGUgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZShpbml0aWFsT3JBY2N1bXVsYXRvciwgYWNjdW11bGF0b3JGdW5jdGlvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgaW5pdGlhbFZhbHVlUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBsZXQgc2VlZGVkID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBhY2N1bXVsYXRvcjtcbiAgICBsZXQgc2VsZWN0b3I7XG4gICAgLy8gVGhpcyBpcyBiYXNpY2FsbHkgdGhlIHNhbWUgYXMgcmVkdWNlLCBleGNlcHQgaXQgZG9lc24ndCByZXF1aXJlIGNvcHlpbmcgdGhlIHdob2xlIHRoaW5nIHRvIGFuIGFycmF5IGZpcnN0XG4gICAgLy8gVGhlIHdhY2sgd2F5IHRoYXQgdHlwZXNjcmlwdCBkb2VzIG92ZXJsb2FkcyByZWFsbHkgc2xvcHMgdXAgdGhlIGNvZGUgZm9yIGtlZXBpbmcgYSBsaW5xIGFwaVxuICAgIC8vIEl0IGFsc28gcmVxdWlyZWQgdHdvIHVzZSBvZiBcImFueVwiIGFib3ZlIHRoYXQgSSBkaWQgbm90IGxpa2UgZG9pbmcuXG4gICAgaWYgKCFhY2N1bXVsYXRvckZ1bmN0aW9uKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbml0aWFsVmFsdWVQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIHNlZWRlZCA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3JGdW5jdGlvbjtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gc2VlZCwgdGhlbiB0aGUgZmlyc3QgdmFsdWUgaXMgdXNlZCBhcyB0aGUgc2VlZFxuICAgICAgICAvLyBBZnRlciB0aGUgZmlyc3QgaXRlbSwgaXQgaXMgcG9wdWxhdGVkLiBCdXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdW5kZXJzdGFuZCB0aGF0LCBzbyBhbnkgbmVlZHMgdG8gYmUgdXNlZCBzb21ldGltZXMuXG4gICAgICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBzZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBhY2N1bXVsYXRvcih2YWx1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQyMgb25seSB0aHJvd3MgYW4gZXJyb3IgaW4gdGhlIG92ZXJsb2FkIHdpdGhvdXQgYSBzZWVkIHZhbHVlLlxuICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCB1bmRlcnN0YW5kIHRoYXQgX3ZhbHVlIGlzIG5vdCB1bmRlZmluZWQgYWZ0ZXIgdGhlIF92YWx1ZSA9IGl0ZW0gbGluZSAodW5sZXNzIHRoZSBpdGVyYWJsZSB0eXBlIGFsbG93cyBpdClcbiAgICAgICAgLy8gVW5sZXNzIHRoZSBpdGVyYXRvciBjb250YWlucyB1bmRlZmluZWQsIG9mIGNvdXJzZS4gVGhhdCdzIHRvdGFsbHkgbGVnYWwgaW4gSlNcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuYWdncmVnYXRlID0gYWdncmVnYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFsbF9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYSBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqL1xuZnVuY3Rpb24gYWxsKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuYWxsID0gYWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFueV9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYW4gb3B0aW9uYWwgY29uZGl0aW9uXG4gKi9cbmZ1bmN0aW9uIGFueV9xXyhmaWx0ZXIpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5hbnlfcV8gPSBhbnlfcV87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYXBwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gYXBwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfYXBwZW5kKGRhdGEpIHtcbiAgICAgICAgeWllbGQqIGRhdGE7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgfSk7XG59XG5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTm9uZVR5cGVfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Ob25lVHlwZVwiKTtcbi8qKlxuICogYXZlcmFnZV9xXzogY29tcHV0ZXMgdGhlIGF2ZXJhZ2Ugb2YgYSBzZXF1ZW5jZSBvZiBudW1iZXJzLlxuICogb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIGxldHMgdXMgY2FsY3VsYXRlIHVzaW5nIHZhbHVlcyBvYnRhaW5lZCBieSBpbnZva2luZyBhZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBzZXF1ZW5jZS5cbiAqL1xuZnVuY3Rpb24gYXZlcmFnZShzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgbGV0IHRtcDtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0bXAgPSBzZWxlY3RGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgICAgIC8vIE51bGxhYmxlIG51bWJlciBiZWhhdmlvdXI6IGlmIG51bGwsIHNraXAgaXRcbiAgICAgICAgICAgIGlmIChOb25lVHlwZV8xLmlzTm9uZSh0bXApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOdWxsYWJsZSBudW1iZXIgYmVoYXZpb3VyOiBpZiBudWxsLCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoTm9uZVR5cGVfMS5pc05vbmUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0bXAgPSBOdW1iZXIoaXRlbSk7XG4gICAgICAgIGlmIChpc05hTih0bXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXZlcmFnZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3VtICsgdG1wO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG59XG5leHBvcnRzLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNodW5rX3FfOiBzcGxpdHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW50byBjaHVua3Mgb2Ygc2l6ZSBhdCBtb3N0IHNpemVcbiAqL1xuZnVuY3Rpb24gY2h1bmsoc2l6ZSkge1xuICAgIGNvbnN0IG5ld2VudW0gPSB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jaHVuayhkYXRhKSB7XG4gICAgICAgIGlmICghc2l6ZSB8fCBzaXplIDw9IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRlciA9IHNpemU7XG4gICAgICAgIGxldCB0bXAgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRtcDtcbiAgICAgICAgICAgICAgICB0bXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG1wO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld2VudW07XG59XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY29uY2F0X3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlc1xuICovXG5mdW5jdGlvbiBjb25jYXQoc2Vjb25kKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2NvbmNhdChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCogc2Vjb25kO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGNvbnRhaW5zX3FfOiBkZXRlcm1pbmVzIHdoZXRoZXIgYSBzZXF1ZW5jZSBjb250YWlucyBhIHNwZWNpZmllZCBlbGVtZW50XG4gKiBvcHRpb25hbCBlcXVhbGl0eUNvbXBhcmVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIGlmIHJlY29yZCBtYXRjaGVzXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlLCBjb21wYXJlcikge1xuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChjb21wYXJlKGl0ZW0sIHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY291bnRfcV86IHJldHVybnMgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIGhvdyBtYW55IGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gY291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN0cjtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBjcm9zc0pvaW5fcV86IENyZWF0ZSBhIHNpbXBsZSBjYXJ0ZXNpYW4gam9pbiAoZXZlcnkgcmVjb3JkIGZyb20gdGFibGUgMSBhbG9uZyB3aXRoIGV2ZXJ5IHJlY29yZCBmcm9tIHRhYmxlIDIpXG4gKi9cbmZ1bmN0aW9uIGNyb3NzSm9pbihzZWNvbmQsIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jcm9zc0pvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIG1hdGNoIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcm9zc0pvaW4gPSBjcm9zc0pvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZGVmYXVsdElmRW1wdHlfcV86IHJldHVybnMgdGhlIHNlcXVlbmNlIG9yIHRoZSAob3B0aW9uYWwpIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogRGVmYXVsdCBpbiBpcyBhIHBhcmFtdGVyLiBJRiBpdCBpcyBsZWZ0IG91dCwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgYW4gZW1wdHkgb25lLilcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdElmRW1wdHkoZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2RlZmF1bHRJZkVtcHR5KGRhdGEpIHtcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgeWllbGQgZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHRJZkVtcHR5ID0gZGVmYXVsdElmRW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZGlzdGluY3RfcV86IFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGJ5IHVzaW5nIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0KGNvbXBhcmVyKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kaXN0aW5jdChkYXRhKSB7XG4gICAgICAgIC8vIEtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQgKG5vIHdheSBhcm91bmQgdGhhdCkgYW5kIG9ubHkgcmV0dXJuIGlmIG5vdCBpbiB0aGUgbGlzdC5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGlzdGluY3QgPSBkaXN0aW5jdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBkaXN0aW5jdEJ5X3FfOiBSZXR1cm5zIGRpc3RpbmN0IGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Rpc3RpbmN0QnkoZGF0YSkge1xuICAgICAgICAvLyBLZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkIChubyB3YXkgYXJvdW5kIHRoYXQpIGFuZCBvbmx5IHJldHVybiBpZiBub3QgaW4gdGhlIGxpc3QuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXN0aW5jdEJ5ID0gZGlzdGluY3RCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZS5cIik7XG59XG5leHBvcnRzLmVsZW1lbnRBdCA9IGVsZW1lbnRBdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZS5cbiAqIFJldHVybnMgYW4gb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBpZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIG9yIHVuZGVmaW5lZCBpZiBub3Qgc3VwcGxpZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZS4pXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdE9yRGVmYXVsdChpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuZXhwb3J0cy5lbGVtZW50QXRPckRlZmF1bHQgPSBlbGVtZW50QXRPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZW1wdHlfcV86IFJldHVybnMgYW4gZW1wdHkgSUVudW1lcmFibGU8VD4gdGhhdCBoYXMgdGhlIHNwZWNpZmllZCB0eXBlIGFyZ3VtZW50LlxuICogTm90ZSB0aGF0IHR5cGVzIGFyZSB0eXBlc2NyaXB0LW9ubHkgZmljdGl0aW91cyBlbnRpdGllcyB0aGF0IGFyZW4ndCBlbWl0dGVkLlxuICovXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gW107XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZXhjZXB0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2UgKGRpc3RpbmN0KSBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0KHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdChkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIC8vIFN0YXJ0IGJ5IGxvYWRpbmcgdGhlIGhpc3Rvcnkgd2l0aCB0aGUgc2Vjb25kIHNldC4gVGhlbiwgd2UgY2FuIGRvIHdoYXQgd2UgYWxyZWFkeSBkaWQgZm9yIGRpc3RpbmN0KCkgYW5kIGl0J2xsIHB1bGwgb3V0IHRoZSBtYXRjaGVzXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhpdGVtKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4Y2VwdCA9IGV4Y2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBleGNlcHRfcV86IFByb2R1Y2VzIHRoZSBzZXQgZGlmZmVyZW5jZSBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleXMgKGRpc3RpbmN0IGtleXMpIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0Qnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9leGNlcHRCeShkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleVNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoa2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhjZXB0QnkgPSBleGNlcHRCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gZmlyc3QobWF0Y2hGdW5jdGlvbikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogVGhlIGZvbGxvd2luZyBtZXRob2QgZXhwbGFpbmVkOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZSB9OiB7IGRlZmF1bHRWYWx1ZTogVCB9KTogVDtcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgaXQgYnJlYWtzIHRoZSBzdGFuZGFyZCBjYXNlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmc6IGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKG15RnVuYylcbiAqIElzIHRoaXMgc3VwcG9zZWQgdG8gYmVcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMud2hlcmVfcV8obXlGdW5jKS5maXJzdE9yRGVmYXVsdF9xXygpXG4gKiBvclxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXygpIHx8IG15RnVuY1xuICpcbiAqIFRoZSBvbmx5IHRvIG1ha2UgaXQgd29yayBpcyB0byBjYWxsIGxpa2UgdGhpczpcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IHNvbWV0aGluZyB9KVxuICovXG5mdW5jdGlvbiBmaXJzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnRzLmZpcnN0T3JEZWZhdWx0ID0gZmlyc3RPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZm9yRWFjaF9xXzogRXhlY3V0ZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIGVhY2ggcm93IGluIHRoZSBlbnVtZXJhYmxlLCByZXR1cm5pbmcgbm8gcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XG4gICAgaWYgKCFjYWxsYmFja2ZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY2FsbGJhY2tmbi5jYWxsKHRoaXNBcmcsIGl0ZW0sIGluZGV4KyspO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogZnVsbEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBmdWxsIG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGZ1bGxKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgYSBwbGFjZSB0byB0cmFjayBhO2wgaXRlbXMgaW4gdGhlIHJpZ2h0IHRoYXQgZ290IHNlbnRcbiAgICAgICAgY29uc3Qgc2VudFJpZ2h0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbnRSaWdodHMuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBnbyB0aHJvdWdoIHRoZSByaWdodCBzaWRlIG9uY2UgbW9yZSBhbmQgc2VuZCBhbnl0aGluZyB0aGF0IGRpZG4ndCBnZXQgc2VudFxuICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgaWYgKCFzZW50UmlnaHRzLmhhcyhyaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5mdWxsSm9pbiA9IGZ1bGxKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG5jb25zdCBHcm91cGluZ18xID0gcmVxdWlyZShcIi4uL1R5cGVzL0dyb3VwaW5nXCIpO1xuLyoqXG4gKiBHcm91cHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgYWNjb3JkaW5nIHRvIGEgc3BlY2lmaWVkIGtleSBzZWxlY3RvciBmdW5jdGlvbiBhbmQgY3JlYXRlcyBhIHJlc3VsdCB2YWx1ZSBmcm9tIGVhY2ggZ3JvdXAgYW5kIGl0cyBrZXkuXG4gKiBvcHRpb25hbCBlbGVtZW50IHNlbGVjdGlvbiBmdW5jdGlvbiAoZWl0aGVyIHNlY29uZCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZWxlbWVudDogZnVuYyB9IG9iamVjdClcbiAqIG9wdGlvbmFsIG91dHB1dCBwcm9qZWN0aW9uIGZ1bmN0aW9uIChlaXRoZXIgdGhpcmQgYXJndW1lbnQgb3IgZW5jbG9zZWQgaW4gYSB7IHByb2plY3Q6IGZ1bmMgfSBvYmplY3QpXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBmdW5jdGlvbiAoZWl0aGVyIGZvdXJ0aCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZXF1YWxzOiBmdW5jIH0gb2JqZWN0KVxuICpcbiAqIFRoZSBudW1iZXIgb2Ygb3ZlcmxvYWRzIGluIEMjIGlzIEhVR0UuIElmIEkgd2VyZSBtaWNyb3NvZnQsIEkgd291bGRuJ3QgaGF2ZSBkb25lIHRoaXMsIGFzIGVsZW1lbnRGdW5jdGlvbiBjb3VsZCBiZVxuICogaGFuZGxlZCBpbiBrZXlTZWxlY3RvciBhbmQgb3V0cHV0RnVudGlvbiBjb3VsZCBiZSBoYW5kbGVkIGJ5IGEgc2VsZWN0KCkgZm9sbG93aW5nIHRoZSBncm91cEJ5KCkuXG4gKiBUaGVyZSdzIGEgcG9pbnQgYmV5b25kIHdoaWNoIG1vcmUgb3B0aW9ucyBiZWNvbWVzIGxlc3MgaGVscGZ1bCByYXRoZXIgdGhhbiBtb3JlLlxuICogU2VlIGpvaW4oKSBmb3IgYW5vdGhlciBleGFtcGxlIG9mIGZ1bmN0aW9ucyBwZW9wbGUgaGF2ZSB0byBnb29nbGUgYmVmb3JlIHVzaW5nLlxuICpcbiAqIFRoZSB3ZWFrbmVzc2VzIG9mIHRoZSB0eXBlc2NyaXB0IHR5cGluZyBhbmQgb3ZlcmxvYWQgc3lzdGVtcyByZWFsbHkgc2hpbmUgdGhyb3VnaCBpbiBhIGdpYW50IGxpa2UgdGhpcy5cbiAqIElpbiBqYXZhc2NyaXB0IGl0J3Mgbm90IHBvc3NpYmxlIHRvIGtub3cgd2hhdCBpbnB1dHMgYXJlIHByb3ZpZGVkIGluIGEgbG90IG9mIHBsYWNlcy4gVGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYSBwcm9qZWN0aW9uIGZ1bmN0aW9uIGFuZCBhIGtleSBzZWxlY3RvciBmdW5jdGlvbiBpcyB0aGF0IG9uZSB0YWtlcyBvbmUgaW5wdXQgYW5kIG9uZSB0YWtlcyB0d28uIFRoaXMgaXMgZWFzeSBmb3JcbiAqIEMjIHRvIGRldGVjdCwgYnV0IGluIGphdmFzY3JpcHQsIGFsbCBmdW5jdGlvbnMgYXJlIGp1c3QgZnVuY3Rpb24oKSB0aGF0IHRha2UgYW55IG51bWJlciBvZiBpbnB1dHMuIFR5cGVzY3JpcHRcbiAqIGNhbiBrbm93IHdoaWNoIG9uZSB5b3UncmUgdXNpbmcsIGJ1dCB0aGUgZW1pdHRlZCBqYXZhc2NyaXB0IGNvZGUgaGFzIG5vIGlkZWEuXG4gKlxuICogVGhpcyBvdmVybG9hZCBzZXR1cCBpcyBpbXBvc3NpYmxlIGluIEpTOlxuICogICAgICBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24/OiBmdW5jdGlvbik7XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uPzogZnVuY3Rpb24pO1xuICogYmVjYXVzZSBKUyBzZWVzIG9ubHk6XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oZnVuY3Rpb24sIGZ1bmN0aW9uKVxuICogV2hpY2ggb25lIHdhcyBpdD8gTm8gY2x1ZS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoaXMsIGFzIGxvbmcgYXMgeW91IHBhc3NcbiAqICBvbmx5IGtleVNlbGVjdG9yLCBvclxuICogIG9ubHkga2V5U2VsZWN0b3IgYW5kIGVsZW1lbnRGdW5jdGlvbiwgb1xuICogIG9ubHkga2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24sIG9yXG4gKiAgb25seSBrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiBhbmQgY29tcGFyZXIsXG4gKiB5b3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsLCBidXQgYW55IG92ZXJsb2FkIHdoaWNoIG9taXRzIGEgcHJldmlvdXMgdmFsdWUgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZlxuICogICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgeyBwYXJhbTM6IHZhbHVlIH0pXG4gKiB3aGljaCB0cmFuc2xhdGVzIHRvXG4gKiAgICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgdW5kZWZpbmVkLCB2YWx1ZSlcbiAqL1xuZnVuY3Rpb24gZ3JvdXBCeShncm91cEZ1bmN0aW9uLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghZ3JvdXBGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgZWxlbWVudG9yO1xuICAgIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgdHlwZW9mIGVsZW1lbnRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVsZW1lbnRvciA9IGVsZW1lbnRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwiZWxlbWVudFwiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBlbGVtZW50b3IgPSBlbGVtZW50RnVuY3Rpb24uZWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHByb2plY3RvcjtcbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJvamVjdG9yID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcInByb2plY3RcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgcHJvamVjdG9yID0gZWxlbWVudEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwicHJvamVjdFwiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHByb2plY3RvciA9IG91dHB1dEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gZWxlbWVudEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBCeShkYXRhKSB7XG4gICAgICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgcmV0dXJuaW5nIGFzIGlmIGl0J3MgZGVmZXJyZWQgZXhlY3V0aW9uLCBpdCdzIG5vdCByZWFsbHkgZGVmZXJyZWQuIEl0IGhhcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3RcbiAgICAgICAgLy8gdG8ga25vdyB3aGF0IHRpbWVzIGVhY2ggaW5kaXZpZHVhbCBrZXkgYXBwZWFycy5cbiAgICAgICAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZEtleSA9IGdyb3VwRnVuY3Rpb24ocm93KTtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBjYWNoZS5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcihpbm5lckl0ZW0sIGV4dHJhY3RlZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGV4dHJhY3RlZEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5hZGQocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhY2hlLnNldChleHRyYWN0ZWRLZXksIG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGV4dHJhY3RlZEtleSwgcm93LCBlbGVtZW50b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBjYWNoZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwcm9qZWN0b3Iocm93WzBdLCByb3dbMV0udmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRvcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuY29uc3QgR3JvdXBpbmdfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Hcm91cGluZ1wiKTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGdyb3VwSm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXkgZXF1YWxpdHkgYW5kIGdyb3VwcyB0aGUgcmVzdWx0cy5cbiAqXG4gKiBUaGlzIGlzIGEgc29ydCBvZiBhIGNvbWJpbmF0aW9uIG9mIG91dGVyIGpvaW4gYW5kIGhhbGYgYSBncm91cCBieSAob25seSB0aGUgc2Vjb25kIHNlcXVlbmNlIGlzIGdyb3VwZWQpLlxuICogVGhlIG91dHB1dCBmdW5jdGlvbiwgd2hpY2ggZGV0ZXJtaW5lcyB0aGUgb3V0cHV0LCBpcyByZXF1aXJlZC4gVGhpcyBkb2Vzbid0IHNlZW0gdXNlZnVsIGVub3VnaCBmb3IgbWUgdG8gY29tZSB1cCB3aXRoIGEgZGVmYXVsdCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGdyb3VwSm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IgfHwgIW91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS4gXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBjb25zdCByaWdodCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBncm91cGluZztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGNvbXBhcmUobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmcuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZyA9IG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGxlZnRLZXksIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXRGdW5jdGlvbihsZWZ0SXRlbSwgZ3JvdXBpbmcudmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGxlZnRJdGVtLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ3JvdXBKb2luID0gZ3JvdXBKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGlubmVySm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGlubmVyIGpvaW4uIFRoaXMgY29tYmluZXMgdGhlIHR3byBrZXkgbG9va3VwcyBhbmQgdGhlIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGFcbiAqIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC4gRm9yIG1vc3QgcHJvZ3JhbW1lcnMsIHRoaXMgaXMgYWxsIHRoZSBjb21wbGV4aXR5IHlvdSdsbCBuZWVkLlxuICovXG5mdW5jdGlvbiBpbm5lckpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbm5lckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFRoZSByaWdodCBzaWRlIGNhbiB0aGVvcmV0aWNhbGx5IGJlIGEgZ2VuZXJhdG9yLiBXZSBkb24ndCBrbm93LCBidXQgd2UgaGF2ZSB0byB0YWtlIHRoYXQgY2hhbmNlLlxuICAgICAgICAvLyBKUyBkb2Vzbid0IGdpdmUgYSB3YXkgdG8gcmVzdGFydCBhIGdlbmVyYXRvciwgc28gd2UgY2FuIG9ubHkgY2hlY2sgcmlnaHQgb25jZSB3aXRob3V0IHNvbWUgZXh0cmEgQlMgdG8gYWxsb3cgaXQgdG8gcmVzdGFydFxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbm5lckpvaW4gPSBpbm5lckpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGludGVyc2VjdF9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcy5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwcm92aWRlZFxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3Qoc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBzZWNvbmRTZXQuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2Ygc2Vjb25kU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW4gYm90aCBzZXRzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRTZXQuaGFzKGl0ZW0pICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaW50ZXJzZWN0ID0gaW50ZXJzZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBpbnRlcnNlY3RCeV9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHByb3ZpZGVkXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdEJ5KHNlY29uZCwga2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0QnkoZGF0YSkge1xuICAgICAgICBjb25zdCBzZWNvbmRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgc2Vjb25kU2V0LmFkZChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBzZWNvbmRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGluIGJvdGggc2V0cy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNldC5oYXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAhaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnNlY3RCeSA9IGludGVyc2VjdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24gbWF0Y2hpbmcga2V5cy4gT25seSByZWNvcmRzIGFyZSByZXR1cm5lZCB3aGVuIGJvdGggc2lkZXMgbWF0Y2guXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIGtleXMuXG4gKlxuICogSWYgdGhlIG91dHB1dCBzZWxlY3RvciBpcyBsZWZ0IG91dCwgcmVzdWx0cyBhcmUgcmV0dXJuZWQgYXMgW2ZpcnN0IHJvdywgc2Vjb25kIHJvd10uIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIywgd2hpY2ggcmVxdWlyZXMgdGhlIG91dHB1dCBzZWxlY3Rvci5cbiAqXG4gKiBMZWF2aW5nIHRoZSBvdXRwdXQgc2VsZWN0b3Igb3V0IHJlcXVpcmVzIHBhc3NpbmcgY29tcGFyZXIgaW4gYXMgeyBlcXVhbHM6IGNvbXBhcmVyIH0gaWYgeW91IHdhbnQgdG8gdXNlIGl0LiBTZWUgdGhlIGxvbmcgZGlzY3Vzc2lvblxuICogaW4gR3JvdXBCeSBmb3IgZGV0YWlscy5cbiAqL1xuZnVuY3Rpb24gam9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9qb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIHN0YXRpc3RpY3MgYW5kIGluZGV4IGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEtleSA9IHNlY29uZEtleVNlbGVjdG9yKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGVxdWFsaXplcihsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBsYXN0X3FfOiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZS4gVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gbGFzdChtYXRjaEZ1bmN0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgLy8gQ2FuJ3QgY2hlY2sgaWYgbGFzdEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgYmVjYXVzZSB0aGUgbGFzdCBpdGVtIGNvdWxkIGFjdHVhbGx5IGJlIFwidW5kZWZpbmVkXCIuXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuJ3QgdGVsbCB0aGF0IGV2ZXJ5IHBsYWNlIGZvdW5kIHdhcyB0cnVlLCBsYXN0SXRlbSB3YXMgYWxzbyBzZXQ7XG4gICAgICAgIHJldHVybiBsYXN0SXRlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbGFzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRha2luZyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICogSWYgdGhlIGZpbHRlcmVkIHNlcXVlbmNlIGlzIGVtcHR5LCBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBwYXJhbWV0ZXIgb3IgaXMgdW5kZWZpbmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgbm90IGFuIGVtcHR5IHNlcXVlbmNlLilcbiAqXG4gKiBJbiBKYXZhU2NyaXB0LCBpZiB5b3UgY2FsbCB0aGUgbWV0aG9kIHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGFuZCB3YW50IGl0IHRvIGJlIHRoZSBkZWZhdWx0LCB0aGVyZSdzIG5vIGNsZWFuIHdheSB0byBpbmRpY2F0ZSB0aGF0IHRoaXNcbiAqIGlzIHdoYXQgeW91IHdhbnQsIGJlY2F1c2UgaXQgYnJlYWtzIHRoZSBjYXNlIHdoZXJlIHlvdSBwYXNzIGEgZmlsdGVyIGNvbmRpdGlvbi4gQSBzaW5nbGUgcHJlZGljYXRlIGNvdWxkIGJlIGEgZmlsdGVyIGNvbmRpdGlvbiBvciBpdFxuICogY291bGQgYmUgdGhlIGRlZmF1bHQgZm9yIGFuIGFycmF5IG9mIHByZWRpY2F0ZXMgLi4uIHlvdSBkb24ndCBrbm93LiBUaGVyZWZvcmUsIGlmIHlvdSB3YW50IHRvIHBhc3Mgb25seSBhIGRlZmF1bHQgdmFsdWUsIGNhbGwgbGlrZVxuICogdGhpczogZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gbGFzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0SXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICAvLyBDYW4ndCBjaGVjayBpZiBsYXN0SXRlbSBpcyBub3QgdW5kZWZpbmVkLCBiZWNhdXNlIHRoZSBsYXN0IGl0ZW0gY291bGQgYWN0dWFsbHkgYmUgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gVHlwZVNjcmlwdCBjYW4ndCB0ZWxsIHRoYXQgZXZlcnkgcGxhY2UgZm91bmQgd2FzIHRydWUsIGxhc3RJdGVtIHdhcyBhbHNvIHNldDtcbiAgICAgICAgcmV0dXJuIGxhc3RJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5sYXN0T3JEZWZhdWx0ID0gbGFzdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBsZWZ0Sm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGxlZnQgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gbGVmdEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmxlZnRKb2luID0gbGVmdEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGxvbmdDb3VudChjb25kaXRpb24pIHtcbiAgICBsZXQgY3RyID0gQmlnSW50KDApO1xuICAgIGNvbnN0IG9uZSA9IEJpZ0ludCgxKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdHI7XG59XG5leHBvcnRzLmxvbmdDb3VudCA9IGxvbmdDb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heF9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1heCByZXN1bHQgcmV0dXJuZWQuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIG9ubHkgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqL1xuZnVuY3Rpb24gbWF4KHRyYW5zZm9ybSwgY29tcGFyZXIpIHtcbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heHZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4dmFsKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXh2YWw7XG59XG5leHBvcnRzLm1heCA9IG1heDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heEJ5X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UgdXNpbmcgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqXG4gKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIE1heEJ5IGFuZCBNYXggd2l0aCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlzIHRoYXQgTWF4IHJldHVybnMgdGhlIG91dHB1dCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gd2hpbGUgTWF4QnlcbiAqIHJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLiBUaGlzIHNhbWUgcmVzdWx0IGNvdWxkIGJlIGFjaGlldmVkIHdpdGggTWF4IGFuZCBhIHdlbGwtZGVzaWduZWQgY29tcGFyZXIgZnVuY3Rpb24sIG9mIGNvdXJzZS5cbiAqL1xuZnVuY3Rpb24gbWF4Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4O1xuICAgIGxldCBtYXhWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4KSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFZhbHVlO1xufVxuZXhwb3J0cy5tYXhCeSA9IG1heEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWF4T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuIElmIHNlcXVlbmNlIGlzIGVtcHR5LCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIG9yIHVuZGVmaW5lZC5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtYXggcmVzdWx0IHJldHVybmVkLlxuICogVGhpcyBpcyBhIEpPSU4tc3BlY2lmaWMgbWV0aG9kLiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGluIEMjLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgZGVmYXVsdFZhbHVlIGluIGFueXRoaW5nIGJ1dCB0aGUgZmluYWwgdmFsdWUsIGl0IG11c3QgYmUgZW5jbG9zZWQgbGlrZSBzbzogeyBkZWZhdWx0VmFsdWUgfVxuICovXG5mdW5jdGlvbiBtYXhPckRlZmF1bHQodHJhbnNmb3JtLCBjb21wYXJlciwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGRlZjtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBkZWYgPSBjb21wYXJlci5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBkZWYgPSB0cmFuc2Zvcm0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIgJiYgIShcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4dmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtYXh2YWwpID4gMCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICByZXR1cm4gbWF4dmFsO1xufVxuZXhwb3J0cy5tYXhPckRlZmF1bHQgPSBtYXhPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5fcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtaW4gcmVzdWx0IHJldHVybmVkLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCBvbmx5IHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKi9cbmZ1bmN0aW9uIG1pbih0cmFuc2Zvcm0sIGNvbXBhcmVyKSB7XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW52YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbnZhbCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWludmFsKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWludmFsO1xufVxuZXhwb3J0cy5taW4gPSBtaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5CeV9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlIHVzaW5nIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBNaW5CeSBhbmQgTWluIHdpdGggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyB0aGF0IE1pbiByZXR1cm5zIHRoZSBvdXRwdXQgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIHdoaWxlIE1pbkJ5XG4gKiByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS4gVGhpcyBzYW1lIHJlc3VsdCBjb3VsZCBiZSBhY2hpZXZlZCB3aXRoIE1pbiBhbmQgYSB3ZWxsLWRlc2lnbmVkIGNvbXBhcmVyIGZ1bmN0aW9uLCBvZiBjb3Vyc2UuXG4gKi9cbmZ1bmN0aW9uIG1pbkJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgbWluVmFsdWU7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbikgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtaW5WYWx1ZTtcbn1cbmV4cG9ydHMubWluQnkgPSBtaW5CeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1pbk9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLiBJZiBzZXF1ZW5jZSBpcyBlbXB0eSwgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciB1bmRlZmluZWQuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWluIHJlc3VsdCByZXR1cm5lZC5cbiAqIFRoaXMgaXMgYSBKT0lOLXNwZWNpZmljIG1ldGhvZC4gVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBpbiBDIy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGRlZmF1bHRWYWx1ZSBpbiBhbnl0aGluZyBidXQgdGhlIGZpbmFsIHZhbHVlLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGxpa2Ugc286IHsgZGVmYXVsdFZhbHVlIH1cbiAqL1xuZnVuY3Rpb24gbWluT3JEZWZhdWx0KHRyYW5zZm9ybSwgY29tcGFyZXIsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBkZWY7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZGVmID0gY29tcGFyZXIuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZGVmID0gdHJhbnNmb3JtLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyICYmICEoXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbnZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWludmFsKSA8IDApIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnZhbDtcbn1cbmV4cG9ydHMubWluT3JEZWZhdWx0ID0gbWluT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIG9mVHlwZV9xXzogRmlsdGVycyB0aGUgZWxlbWVudHMgb2YgYW4gSUVudW1lcmFibGUgYmFzZWQgb24gYSBzcGVjaWZpZWQgdHlwZS5cbiAqXG4gKiBJbiBKUyB0aGlzIGlzIGtpbmQgb2YgbWVhbmluZ2xlc3MuIElmIHlvdSBwcm92aWRlIGEgc3RyaW5nLCBpdCBkb2VzIGEgdHlwZW9mLiBJZiB5b3UgcHJvdmlkZSBhIGNsYXNzLCBpdCBkb2VzIGFuIGluc3RhbmNlb2YuXG4gKi9cbmZ1bmN0aW9uIG9mVHlwZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfb2ZUeXBlKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUganVzdCB0YWtpbmcgaXQgb24gdGhlIGNvZGVyJ3MgaG9ub3IgdGhhdCBmaWx0ZXIgbWF0Y2hlcyBSLiBObyB3YXkgdG8gYWN0dWFsbHkgdGVzdCBpdC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5vZlR5cGUgPSBvZlR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE9yZGVyZWRFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vRW51bWVyYWJsZS9PcmRlcmVkRW51bWVyYWJsZVwiKTtcbi8vIFdBUk5JTkchXG4vLyBUaGVzZSB0d28gbWV0aG9kcyBtdXN0IGJlIGFkZGVkIHRvIEVudW1lcmFibGUgdXNpbmcgcHJvdG90eXBlIG1vZGlmaWNhdGlvbiwgYmVjYXVzZSBkZWNsYXJpbmcgdGhlbSBpbiB0aGUgRW51bWVyYWJsZSBjbGFzcyBtYWtlcyB0aGVcbi8vIGJyb3dzZXIgYmxvdyB1cC4gSXQncyBiZWNhdXNlIG9mIHRoZSBcIm5ldyBPcmRlcmVkRW51bWVyYWJsZVwiICh3aGljaCBkZXJpdmVzIGZyb20gRW51bWVyYWJsZSkgYmVpbmcgcmVmZXJlbmNlZC5cbi8qKlxuICogb3JkZXJCeV9xXzogU29ydHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleSBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogVGhlIGtleSBmdW5jdGlvbiBpcyBhbHNvIG9wdGlvbmFsLiBJZiB5b3UgbGVhdmUgaXQgb3V0LCBpdCdsbCBkZWZhdWx0IHRvIHRoZSBpZGVudGl0eS4gSSBnb3QgdGlyZWQgb2Ygd3JpdGluZyAub3JkZXJCeV9xXyhvID0+IG8pXG4gKiB3aGVuIHNvcnRpbmcgbnVtYmVycyBvciBzdHJpbmdzLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBjb21wYXJlciwgeW91J2xsIG5lZWQgdG8gaW5jbHVkZSB0aGUga2V5IHNlbGVjdG9yLiBJdCdzIG5vdCB3b3J0aCBteSB3aGlsZSB0byBtYWtlIGEge2NvbXBhcmVyfSBvYmplY3QgdG8gYWxsb3dcbiAqIG9ubHkgb25lIHBhcmFtZXRlciBmb3IgdGhpcyByYXJlIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyQnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpO1xufVxuZXhwb3J0cy5vcmRlckJ5ID0gb3JkZXJCeTtcbi8qKlxuICogb3JkZXJCeURlc2NlbmRpbmdfcV86IFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGRlc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5IGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBUaGUga2V5IGZ1bmN0aW9uIGlzIGFsc28gb3B0aW9uYWwuIElmIHlvdSBsZWF2ZSBpdCBvdXQsIGl0J2xsIGRlZmF1bHQgdG8gdGhlIGlkZW50aXR5LiBJIGdvdCB0aXJlZCBvZiB3cml0aW5nIC5vcmRlckJ5X3FfKG8gPT4gbylcbiAqIHdoZW4gc29ydGluZyBudW1iZXJzIG9yIHN0cmluZ3MuIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIy5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgdGhlIGNvbXBhcmVyLCB5b3UnbGwgbmVlZCB0byBpbmNsdWRlIHRoZSBrZXkgc2VsZWN0b3IuIEl0J3Mgbm90IHdvcnRoIG15IHdoaWxlIHRvIG1ha2UgYSB7Y29tcGFyZXJ9IG9iamVjdCB0byBhbGxvd1xuICogb25seSBvbmUgcGFyYW1ldGVyIGZvciB0aGlzIHJhcmUgY2FzZS5cbiAqL1xuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIsIHRydWUpO1xufVxuZXhwb3J0cy5vcmRlckJ5RGVzY2VuZGluZyA9IG9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIG91dGVySm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBJZiBubyBtYXRjaGluZyByZWNvcmQgaXMgZmluZCBpbiB0aGUgc2Vjb25kIHNlcXVlbmNlLCB1bmRlZmluZWQgaXMgc2VudCB0byB0aGUgb3V0cHV0IHNlbGVjdG9yLlxuICogT3V0ZXIgSm9pbnMgYXJlIG5vdCBwcm92aWRlZCBpbiBMSU5RLiBUaGlzIGlzIGEgbmV3IGZ1bmN0aW9uLCBmb2xsb3dpbmcgdGhlIHBhdHRlcm4gb2Ygam9pbl9xXygpO1xuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSBrZXlzXG4gKiBJZiB0aGUgb3V0cHV0IHNlbGVjdG9yIGlzIGxlZnQgb3V0LCByZXN1bHRzIGFyZSByZXR1cm5lZCBhcyBbZmlyc3Qgcm93LCBzZWNvbmQgcm93XS5cbiAqIExlYXZpbmcgdGhlIG91dHB1dCBzZWxlY3RvciBvdXQgcmVxdWlyZXMgcGFzc2luZyBjb21wYXJlciBpbiBhcyB7IGVxdWFsczogY29tcGFyZXIgfSBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gKi9cbmZ1bmN0aW9uIG91dGVySm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9vdXRlckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgc3RhdGlzdGljcyBhbmQgaW5kZXggYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuIFxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZXF1YWxpemVyKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLm91dGVySm9pbiA9IG91dGVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBwcmVwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgIH0pO1xufVxuZXhwb3J0cy5wcmVwZW5kID0gcHJlcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiByZXBsaWNhdGVfcV86IFJlcGVhdCB0aGUgaXRlbXMgaW4gYSBzZXF1ZW5jZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcGxpY2F0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbG9vcCA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKGRhdGEpO1xuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbG9vcCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29wLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVwbGljYXRlID0gcmVwbGljYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHJldmVyc2VfcV86IEludmVydHMgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlcXVlbmNlXG4gKlxuICogUmV2ZXJzZSBpcyByZWFsbHkgcG9pbnRsZXNzLiBJdCBpcyBhbHJlYWR5IGZvdW5kIG9uIHRoZSBhcnJheSBjbGFzcywgYW5kIHdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHlcbiAqIGRlbGF5ZWQgZXhlY3V0aW9uLCBpdCBjYW4gb25seSB3b3JrIGJ5IGdvaW5nIHRocm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgZW51bWVyYWJsZS5cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcmV2ZXJzZShkYXRhKSB7XG4gICAgICAgIC8vIFdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHkgZGVsYXllZCBleGVjdXRpb24sIGl0IG9idmlvdXNseSBuZWVkcyB0byBwcm9jZXNzIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgICAgICAvLyBiZWNhdXNlIGl0IGhhcyB0byBnZXQgYWxsIHRoZSB3YXkgdG8gdGhlIGxhc3QgaXRlbSBiZWZvcmUgcmV0dXJuaW5nIGEgcm93LlxuICAgICAgICBjb25zdCB0b1JldHVybiA9IFsuLi5kYXRhXTtcbiAgICAgICAgd2hpbGUgKHRvUmV0dXJuLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG9SZXR1cm4ucG9wKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogcmlnaHRKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSByaWdodCBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHJpZ2h0Sm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSBsZWZ0IHNpZGUgYWdhaW5zdCBldmVyeSByaWdodCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IGxlZnRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihkYXRhKTtcbiAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBsZXQgcmlnaHRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGxlZnRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmlnaHRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJpZ2h0Sm9pbiA9IHJpZ2h0Sm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RfcV86IHByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIGludG8gYSBuZXcgZm9ybSBieSBjYWxsaW5nIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50LlxuICogT3B0aW9uYWxseSwgdGhlIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICpcbiAqIGNhc3QoKSBpcyBtYXBwZWQgdG8gc2VsZWN0KCkgYmVjYXVzZSBpbiBqYXZhc2NyaXB0L3R5cGVzY3JpcHQsIHJ1bnRpbWUgY2FzdCgpIGRvZXNuJ3QgZXhpc3RcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIENhc3QgbmVlZGVkIHRvIGFsbG93IGNsZWFuIGludGVyZmFjZSBvdmVybG9hZHNcbiAgICAgICAgICAgIHlpZWxkIHNlbGVjdEZ1bmN0aW9uKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RNYW55X3FfOiBQcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYSBzZXF1ZW5jZSB0byBhbiBJRW51bWVyYWJsZTxUPiwgYW5kIGZsYXR0ZW5zIHRoZSByZXN1bHRpbmcgc2VxdWVuY2VzIGludG8gb25lIHNlcXVlbmNlIHVzaW5nIGEgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIG9wdGlvbmFsbHksIHRoZSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqIGFuIG9wdGlvbmFsIG91dHB1dCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIG91dHB1dCBvZiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gc2VsZWN0TWFueShzdWJTZWxlY3RGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXN1YlNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGlmICghb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBpZiBSIGlzIGxlZnQgb3V0LCBpdCdzIHRoZSBzYW1lIGFzIFRFbGVtZW50LlxuICAgICAgICAvLyBUaGlzIHdvdWxkIGFsbCBiZSBlYXNpZXIgaWYgdHlwZXNjcmlwdCBoYWQgcHJvcGVyIG92ZXJsb2Fkcy5cbiAgICAgICAgb3V0cHV0RnVuY3Rpb24gPSAoKHNyYywgcm93KSA9PiByb3cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0TWFueShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBDYXN0IG5lZWRlZCB0byBhbGxvdyBjbGVhbiBpbnRlcmZhY2Ugb3ZlcmxvYWRzXG4gICAgICAgICAgICBjb25zdCBpdGVyID0gc3ViU2VsZWN0RnVuY3Rpb24oaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Ykl0ZW0gb2YgaXRlcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGl0ZW0sIHN1Ykl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdE1hbnkgPSBzZWxlY3RNYW55O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHNlcXVlbmNlRXF1YWxfcV86IERldGVybWluZXMgd2hldGhlciB0d28gc2VxdWVuY2VzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgdGhlaXIgZWxlbWVudHMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2VFcXVhbChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGNvbnN0IGl0ZXIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgY29uc3QgdmFsMiA9IGl0ZXIubmV4dCgpO1xuICAgICAgICBpZiAodmFsMS5kb25lICE9PSB2YWwyLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIGxlbmd0aFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmUodmFsMS52YWx1ZSwgdmFsMi52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbDEudmFsdWUgIT09IHZhbDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNhbWUgbGVuZ3RoIGFuZCBhbGwgaXRlbXMgaGF2ZSBzYW1lIHZhbHVlc1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zZXF1ZW5jZUVxdWFsID0gc2VxdWVuY2VFcXVhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eSBvciBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2luZ2xlKG1hdGNoRnVuY3Rpb24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGhhcyBubyBlbGVtZW50cy5cIik7XG59XG5leHBvcnRzLnNpbmdsZSA9IHNpbmdsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBzaW5nbGVPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gc2luZ2xlT3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kSXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMuc2luZ2xlT3JEZWZhdWx0ID0gc2luZ2xlT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBfcV86IEJ5cGFzc2VzIGEgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBza2lwKGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXAoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwID0gc2tpcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwTGFzdF9xXzogUmV0dXJucyBhIG5ldyBlbnVtZXJhYmxlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgZnJvbSBzb3VyY2Ugd2l0aCB0aGUgbGFzdCBjb3VudCBlbGVtZW50cyBvZiB0aGUgc291cmNlIGNvbGxlY3Rpb24gb21pdHRlZFxuICovXG5mdW5jdGlvbiBza2lwTGFzdChjb3VudCkge1xuICAgIC8vIFRoaXMgaXMgYW5vdGhlciBvbmUgd2hpY2ggaXMgdGVjaG5pY2FsbHkgZGVmZXJyZWQgZXhlY3V0aW9uLCBidXQgdGhlcmUncyBubyB3YXkgdG8gc2tpcCB0aGUgbGFzdCBuIGl0ZW1zXG4gICAgLy8gaWYgeW91IGRvbid0IGNvdW50IHRoZSBsaXN0LlxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwTGFzdChkYXRhKSB7XG4gICAgICAgIGxldCB0b1JldHVybjtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gWy4uLmRhdGFdLnNsaWNlKDAsIC0xICogY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkKiB0b1JldHVybjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tpcExhc3QgPSBza2lwTGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwV2hpbGVfcV86IEJ5cGFzc2VzIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gKiAgb3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gc2tpcFdoaWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwV2hpbGUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGdvZXMgZmFsc2UsIHRyaWdnZXJlZCBuZWVkcyB0byBnbyB0cnVlLCBhbmQgaXQgaGFzIHRvIGJlIHN0aWNreVxuICAgICAgICAgICAgdHJpZ2dlcmVkID0gdHJpZ2dlcmVkIHx8ICFmaWx0ZXIoaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwV2hpbGUgPSBza2lwV2hpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc3VtX3FfOiBDb21wdXRlcyB0aGUgc3VtIG9mIHRoZSBzZXF1ZW5jZSBvZiB2YWx1ZXMgdGhhdCBhcmUgb2J0YWluZWQgYnkgaW52b2tpbmcgYW4gb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gc3VtKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgbGV0IHN1bXZhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvQWRkID0gK3NlbGVjdEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlVG9BZGQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgaW52YWxpZCBudW1iZXIgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdW12YWwgPSBzdW12YWwgKyB2YWx1ZVRvQWRkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnbnVtYmVyJyB8fCBpc05hTihpdGVtKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGludmFsaWQgbnVtYmVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VtdmFsID0gc3VtdmFsICsgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtdmFsO1xufVxuZXhwb3J0cy5zdW0gPSBzdW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogdGFrZV9xXzogUmV0dXJucyBhIHNwZWNpZmllZCBudW1iZXIgb2YgY29udGlndW91cyBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiBhIHNlcXVlbmNlLlxuICogVGhlIHN0YXJ0IHBhcmFtZXRlciBpcyBhIEpTLXNwZWNpZmljIG1vZGlmaWNhdGlvbiB0byBpbXBsZW1lbnQgUmFuZ2UsIHdoaWNoIGlzIGEgQyMtb25seSBvYmplY3QgKHdpdGggYW4gb2RkIHN5bnRheClcbiAqL1xuZnVuY3Rpb24gdGFrZShjb3VudCwgc3RhcnQgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2UoZGF0YSkge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSBzdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBMYXN0X3FfOiBSZXR1cm5zIGEgbmV3IGVudW1lcmFibGUgY29sbGVjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBsYXN0IGNvdW50IGVsZW1lbnRzIGZyb20gc291cmNlXG4gKi9cbmZ1bmN0aW9uIHRha2VMYXN0KGNvdW50KSB7XG4gICAgLy8gVGhpcyBpcyBhbm90aGVyIG9uZSB3aGljaCBpcyB0ZWNobmljYWxseSBkZWZlcnJlZCBleGVjdXRpb24sIGJ1dCB0aGVyZSdzIG5vIHdheSB0byB0YWtlIHRoZSBsYXN0IG4gaXRlbXNcbiAgICAvLyBpZiB5b3UgZG9uJ3QgY291bnQgdGhlIGxpc3QuXG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2VMYXN0KGRhdGEpIHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCogWy4uLmRhdGFdLnNsaWNlKC0xICogY291bnQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy50YWtlTGFzdCA9IHRha2VMYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VXaGlsZV9xXzogUmV0dXJucyBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZS5cbiAqIE9wdGlvbmFsbHksIHRoZSBmaWx0ZXIgZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKi9cbmZ1bmN0aW9uIHRha2VXaGlsZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZVdoaWxlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBnb2VzIGZhbHNlLCB0cmlnZ2VyZWQgbmVlZHMgdG8gZ28gdHJ1ZSwgYW5kIGl0IGhhcyB0byBiZSBzdGlja3lcbiAgICAgICAgICAgIHRyaWdnZXJlZCA9IHRyaWdnZXJlZCB8fCAhZmlsdGVyKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTG9va3VwXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvTG9va3VwXCIpO1xuLyoqXG4gKiB0b0FycmF5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBhcnJheSBjb250YWluaW5nIHRoZSBzZXF1ZW5jZSB2YWx1ZXMuXG4gKiBBbGlhc2VkIHRvIHRvTGlzdF9xXyBhcyB3ZWxsLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpc107XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuLyoqXG4gKiB0b0hhc2hTZXRfcV86IFJldHVybnMgYSBTZXQgZnJvbSBhbiBlbnVtZXJhYmxlLlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgc2V0cyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LlxuICovXG5mdW5jdGlvbiB0b0hhc2hTZXQoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIHJlc3VsdC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvSGFzaFNldCA9IHRvSGFzaFNldDtcbi8qKlxuICogdG9EaWN0aW9uYXJ5X3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBzdHJpbmcga2V5cyBhbmQgdmFsdWVzLCBiYXNlZCBvbiBhIGtleVNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBhbiBvcHRpb25hbCBlbGVtZW50XG4gKiBzZWxlY3RvciBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBvYmplY3RzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvRGljdGlvbmFyeShrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICAvLyBJbiBDIywgdG9EaWN0aW9uYXJ5KCkgY2FuIHByb2R1Y2UgZGljdGlvbmFyaWVzIHdpdGggbm8tc3RyaW5nIGtleXMuXG4gICAgLy8gVGhpcyBpcyBpbGxlZ2FsIGluIGphdmFzY3JpcHQsIHNvIHRvRGljdGlvbmFyeSgpIGhhcyB0byBiZSBsaW1pdGVkLlxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoa2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgZHVwbGljYXRlIGtleXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBlbGVtZW50U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBURWxlbWVudCA9IFQgYnV0IHR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgYmVjYXVzZSB3ZWFrIG92ZXJsb2Fkc1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnRvRGljdGlvbmFyeSA9IHRvRGljdGlvbmFyeTtcbi8qKlxuICogdG9NYXBfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IE1hcCB3aXRoIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIE5vdCB0aGF0IGluIGdlbmVyYWwsIG9iamVjdHMgZG9uJ3QgbWFrZSBnb29kIE1hcCBrZXlzLlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG1hcHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9NYXAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgLy8gSW4gQyMsIHRvRGljdGlvbmFyeSgpIGNhbiBwcm9kdWNlIGRpY3Rpb25hcmllcyB3aXRoIG5vbi1zdHJpbmcga2V5cy5cbiAgICAvLyBUaGlzIGlzIGlsbGVnYWwgaW4gamF2YXNjcmlwdCwgc28gdG9EaWN0aW9uYXJ5KCkgaGFzIHRvIGJlIGxpbWl0ZWQuXG4gICAgLy8gVG9NYXAoKSBtZXRob2QgY292ZXJzIHRoZSBnYXAuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAocmVzdWx0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBkdXBsaWNhdGUga2V5c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgZWxlbWVudFNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9NYXAgPSB0b01hcDtcbi8qKlxuICogdG9Mb29rdXBfcV86IFJldHVybnMgYSBMb29rdXAgKGN1c3RvbSBjbGFzcykgTWFwIHdpdGggc3BlY2lmaWVkIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uIEEgTG9va3VwIGlzIGxpa2UgYSBNYXAgZXhjZXB0IGl0IGFsbG93cyBtdWx0aXBsZSB2YWx1ZXMgdG8gYmUgc2V0IGZvciBhIGdpdmVuIGtleS5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBtYXBzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuIEJlaGluZCB0aGVcbiAqIHNjZW5lcywgdGhpcyBpcyB0aWxsIHVzaW5nIGEgbWFwLlxuICpcbiAqIE5vdCB0aGF0IGluIGdlbmVyYWwsIG9iamVjdHMgZG9uJ3QgbWFrZSBnb29kIE1hcCBrZXlzLlxuICovXG5mdW5jdGlvbiB0b0xvb2t1cChrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTG9va3VwXzEuTG9va3VwKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBlbGVtZW50U2VsZWN0b3IoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVEVsZW1lbnQgPSBUIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IGJlY2F1c2Ugd2VhayBvdmVybG9hZHNcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy50b0xvb2t1cCA9IHRvTG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiB1bmlvbl9xXzogY29uY2F0ZW5hdGVzIHR3byBzZXF1ZW5jZXMgcmV0dXJuaW5nIHRoZSBzZXQgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gdW5pb24oc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdW5pb24oZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhIGxpdHRsZSBiaXQgb2YgY29weXBhc3RhIGhlcmUgYnV0IGl0J3Mgbm90IHdvcnRoIG1ha2luZyBhIHN1Yi1mdW5jdGlvbiBmb3IgYSBzaW5nbGUgb2NjdXJyZW5jZVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51bmlvbiA9IHVuaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiB1bmlvbl9xXzogY29uY2F0ZW5hdGVzIHR3byBzZXF1ZW5jZXMgcmV0dXJuaW5nIHRoZSBzZXQgc2VxdWVuY2UgIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gdW5pb25CeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdW5pb25CeShkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhIGxpdHRsZSBiaXQgb2YgY29weXBhc3RhIGhlcmUgYnV0IGl0J3Mgbm90IHdvcnRoIG1ha2luZyBhIHN1Yi1mdW5jdGlvbiBmb3IgYSBzaW5nbGUgb2NjdXJyZW5jZVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudW5pb25CeSA9IHVuaW9uQnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogd2hlcmVfcV86IEZpbHRlcnMgYSBzZXF1ZW5jZSBvZiB2YWx1ZXMgYmFzZWQgb24gYSBwcmVkaWNhdGUuXG4gKiBPcHRpb25hbGx5LCB0aGUgZmlsdGVyIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICovXG5mdW5jdGlvbiB3aGVyZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfd2hlcmUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMud2hlcmUgPSB3aGVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB6aXBfcV86IFByb2R1Y2VzIGEgc2VxdWVuY2Ugb2YgdHVwbGVzIHdpdGggZWxlbWVudHMgZnJvbSB0d28gb3IgdGhyZWUgc3BlY2lmaWVkIHNlcXVlbmNlcy5cbiAqIEluIHBsYWNlIG9mIGEgdGhpcmQgc2VxdWVuY2UsIGEgZnVuY3Rpb24gY2FuIGJlIHByb3ZpZGVkIHRoYXQgY29tYmluZXMgdGhlIGZpcnN0IHR3by5cbiAqL1xuZnVuY3Rpb24gemlwKHNlY29uZCwgdGhpcmQpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfemlwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgaXRlcjIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICBsZXQgaXRlcjM7XG4gICAgICAgIGxldCBmdW5jMztcbiAgICAgICAgbGV0IGRvbmUzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlyZCAmJiB0eXBlb2YgdGhpcmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZnVuYzMgPSB0aGlyZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlyZCkge1xuICAgICAgICAgICAgaXRlcjMgPSB0aGlyZFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBkYXRhLm5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBpdGVyMi5uZXh0KCk7XG4gICAgICAgICAgICBsZXQgdmFsMztcbiAgICAgICAgICAgIGlmIChpdGVyMykge1xuICAgICAgICAgICAgICAgIHZhbDMgPSBpdGVyMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgZG9uZTMgPSB2YWwzLmRvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIGFueSBvZiB0aGUgc2VxdWVuY2VzIHJ1bnMgb3V0IG9mIGRhdGEsIHdlIGhhbHQuXG4gICAgICAgICAgICBpZiAodmFsMS5kb25lIHx8IHZhbDIuZG9uZSB8fCBkb25lMykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZXIzICYmIHZhbDMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZSwgdmFsMy52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmdW5jMykge1xuICAgICAgICAgICAgICAgIHlpZWxkIFt2YWwxLnZhbHVlLCB2YWwyLnZhbHVlLCBmdW5jMyh2YWwxLnZhbHVlLCB2YWwyLnZhbHVlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuemlwID0gemlwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBHcm91cGluZyB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCB2YWx1ZSwgZWxlbWVudFNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSBbdmFsdWVdO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGVsZW1lbnRTZWxlY3RGdW5jdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gayA9PiBrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXMubWFwKHYgPT4gdGhpcy5fc2VsZWN0b3IodikpO1xuICAgIH1cbiAgICBnZXQgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXMubWFwKHYgPT4gdGhpcy5fc2VsZWN0b3IodikpO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuR3JvdXBpbmcgPSBHcm91cGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZXh0cmFjdENvbXBhcmVyKG9iaikge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoXCJjb21wYXJlXCIgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouY29tcGFyZTtcbiAgICB9XG59XG5leHBvcnRzLmV4dHJhY3RDb21wYXJlciA9IGV4dHJhY3RDb21wYXJlcjtcbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcih4LCB5KSB7XG4gICAgaWYgKHggPiB5KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoeCA8IHkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZGVmYXVsdENvbXBhcmVyID0gZGVmYXVsdENvbXBhcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBleHRyYWN0RXF1YWxpdHlDb21wYXJlcihvYmopIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKFwiZXF1YWxzXCIgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouZXF1YWxzO1xuICAgIH1cbn1cbmV4cG9ydHMuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIgPSBleHRyYWN0RXF1YWxpdHlDb21wYXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBBIGxvb2t1cCBpcyBhIE1hcCB0aGF0IGFsbG93cyBtdWx0aXBsZSB2YWx1ZXMgZm9yIGVhY2gga2V5LiBUaGVyZSBpcyBubyBidWlsdC1pbiBKYXZhc2NyaXB0IGFuYWxvZ3VlLlxuICovXG5jbGFzcyBMb29rdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcbiAgICB9XG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZW50cmllcygpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEudmFsdWVzKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9kYXRhLmNsZWFyKCk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIGZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLl9kYXRhLmZvckVhY2goY2FsbGJhY2tmbik7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgIGl0ZW0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLnNldChrZXksIFt2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9va3VwID0gTG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc05vbmUodGVzdCkge1xuICAgIHJldHVybiAodGVzdCA9PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCk7XG59XG5leHBvcnRzLmlzTm9uZSA9IGlzTm9uZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jbGFzcyBDb25zb2xlVmlldyBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGlubmVySHRtbDogYFxuICAgICAgICAgICAgICAgIDxoMj5Mb2c8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb25zb2xlTG9nXCIgOmxvb3A9XCIuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtaW4taGVpZ2h0OiAxMHB4O1wiPjxpLXY+LjwvaS12PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gSWNoaWdvXzEuT2JzZXJ2YWJsZVByb3h5LnByb3hpbWF0ZShbXSk7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IG5ldyBJY2hpZ29fMS5Cb3VuZENvbXBvbmVudCh0aGlzLnZpZXdNb2RlbCwge1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjb25zb2xlTG9nJyxcbiAgICAgICAgICAgIG9ic2VydmVBbGxWaWV3TW9kZWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvZyh0aGluZywgcmVzdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2codGhpbmcpO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5wdXNoKChyZXN1bHQgPyAnPj4gJyA6ICcnKSArIGNsZWFuKHRoaW5nKSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnB1c2goJycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuKHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ29uc29sZVZpZXcgPSBDb25zb2xlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYWdlUm91dGVyID0gbWk1LnJvdXRlci5QYWdlUm91dGVyO1xuZXhwb3J0cy5Cb3VuZENvbXBvbmVudCA9IG1pNS5jb21wb25lbnQuQm91bmRDb21wb25lbnQ7XG5leHBvcnRzLkNvbXBvbmVudCA9IG1pNS5jb21wb25lbnQuQ29tcG9uZW50O1xuZXhwb3J0cy5PYnNlcnZhYmxlUHJveHkgPSBtaTUub2JzZXJ2YWJsZS5PYnNlcnZhYmxlUHJveHk7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBtaTUuaHRtbC5jcmVhdGVFbGVtZW50O1xuZXhwb3J0cy5lc2NhcGVIdG1sID0gbWk1Lmh0bWwuZXNjYXBlSHRtbDtcbmV4cG9ydHMucGFyYWdyYXBoID0gbWk1Lmh0bWwucGFyYWdyYXBoO1xuZXhwb3J0cy5zcGFuID0gbWk1Lmh0bWwuc3BhbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4uL3NyYy9Qcm90b3R5cGVFeHRlbnNpb25cIik7XG5jb25zdCBUZXN0YmVuY2hWaWV3XzEgPSByZXF1aXJlKFwiLi4vdGVzdHMvVGVzdGJlbmNoVmlld1wiKTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY29uc3QgVGVzdDAwMF8xID0gcmVxdWlyZShcIi4vVGVzdDAwMFwiKTtcbmNvbnN0IFRlc3QwMDFfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDFcIik7XG5jb25zdCBUZXN0MDAyXzEgPSByZXF1aXJlKFwiLi9UZXN0MDAyXCIpO1xuY29uc3QgVGVzdDAwM18xID0gcmVxdWlyZShcIi4vVGVzdDAwM1wiKTtcbmNvbnN0IFRlc3QwMDRfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDRcIik7XG5jb25zdCBUZXN0MDA1XzEgPSByZXF1aXJlKFwiLi9UZXN0MDA1XCIpO1xuY29uc3QgVGVzdDAwNl8xID0gcmVxdWlyZShcIi4vVGVzdDAwNlwiKTtcbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgSWNoaWdvXzEuUGFnZVJvdXRlci5jb25maWd1cmUoW1xuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9MCcsIHBheWxvYWQ6IFRlc3QwMDBfMS5UZXN0MDAwIH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD0xJywgcGF5bG9hZDogVGVzdDAwMV8xLlRlc3QwMDEgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTInLCBwYXlsb2FkOiBUZXN0MDAyXzEuVGVzdDAwMiB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9MycsIHBheWxvYWQ6IFRlc3QwMDNfMS5UZXN0MDAzIH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD00JywgcGF5bG9hZDogVGVzdDAwNF8xLlRlc3QwMDQgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTUnLCBwYXlsb2FkOiBUZXN0MDA1XzEuVGVzdDAwNSB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9NicsIHBheWxvYWQ6IFRlc3QwMDZfMS5UZXN0MDA2IH0sXG4gICAgXSwgVGVzdGJlbmNoVmlld18xLlRlc3RiZW5jaFZpZXcsIHRydWUsICc8ZGl2PlRoZXJlIGlzIG5vIHBhZ2UgaGVyZS48L2Rpdj4nLCAndGVzdC8wJyk7XG59XG5tYWluKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdUZXN0IHRoZSB0ZXN0IGJlbmNoJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlZlcmlmeSB0aGF0IHRoZSB0ZXN0IGJlbmNoIHdvcmtzIGJlZm9yZSBwcm9jZWVkaW5nLiBUaGUgdGVzdCBiZW5jaCBvdXRwdXRzIHRvIHRoZSBsb2cgd2hpY2ggaXMgc2hvd24gYmVsb3cgYW5kIGluIHRoZSBkZXYgdG9vbHMgY29uc29sZS4gSWYgeW91IGRvbid0IHNlZSBcIlRlc3Qgc3VjY2Vzc2Z1bCxcIiB0aGVuIGl0IGZhaWxlZCwgd2l0aCBhbiBlcnJvciBpbiB0aGUgbG9nLiBIYXJkIHRvXG4gICAgICAgICAgICBzaG93IHRoZSBsb2cgaW4gdGhlIHBhZ2UgaWYgdGhlIHBhZ2UgaXMgYnJva2VuLCBzbyBoYXZlIHRvIGNoZWNrIGRldiB0b29scyBhZnRlciBhbGwuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDAwIGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkLlwiKTtcbiAgICAgICAgICAgIC8vIENvbXBvbmVudCByZW5kZXJpbmcgaXMgYXN5bmNocm9ub3VzIChvbiB0aGUgbWljcm90YXNrIHF1ZXVlKSwgc28gaGF2ZSB0byB0ZXN0IHNsaWdodGx5IGFmdGVyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGVMb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ0VsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmluZyBmYWlsZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChsb2dFbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhcIkhlbGxvIHdvcmxkLlwiKSwgXCJMb2cgc2hvdWxkIHVwZGF0ZSB0aGUgcGFnZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDAgPSBUZXN0MDAwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnVGhlIEJhc2ljcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5cbiAgICAgICAgICAgICAgICBKT0lOIHRvIEphdmFzY3JpcHQgb2ZmZXJzIHZhcmlvdXMgb3BlcmF0aW9ucyBzdWNoIGFzIGZpbHRlcmluZywgcHJvamVjdGlvbiwgYW5kIGNvdW50aW5nIG9uIGl0ZXJhYmxlcyBzdWNoIGFzIGFycmF5cy4gVGhlIEpPSU4gZXh0ZW5zaW9uIG1ldGhvZHMgY2FuIGJlIGZvdW5kIG9uIGFycmF5cywgc28geW91IGNhbiBjYWxsIHRoZW0gZGlyZWN0bHkgYXMgaW4gdGhlIGV4YW1wbGUgPGNvZGU+cGVvcGxlLnNlbGVjdF9xXyhxID0+IHEuZmlyc3ROYW1lKTwvY29kZT4uIFRoaXMgY3JlYXRlcyBhbiBFbnVtZXJhYmxlLCB3aGljaCBpcyB0aGUgY2xhc3MgYmVoaW5kIGV2ZXJ5IEpPSU4gb3BlcmF0aW9uLiBJdGVyYWJsZSBub24tYXJyYXlzLCBzdWNoIGFzIE5vZGVMaXN0LCBtdXN0IGJlIGNvbnZlcnRlZCBmaXJzdCB0byBhbiBlbnVtZXJhYmxlIHVzaW5nIHRoZSBhc1F1ZXJ5YWJsZSBleHRlbnNpb24sIGFzIGluIHRoZSBleGFtcGxlIDxjb2RlPmVsZW1lbnRzLmFzUXVlcnlhYmxlKCkud2hlcmVfcV8ocSA9PiBxLnRhZ05hbWUgPT09ICdkaXYnKTwvY29kZT4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBNb3N0IG9mIHRoZSBtZXRob2RzIGZvdW5kIGluIEpPSU4gdG8gSmF2YXNjcmlwdCBhcmUgc2ltaWxhciB0byBtZXRob2RzIGZvdW5kIG9uIGFycmF5cywgYnV0IHRoZXJlIGlzIGFuIGltcG9ydGFudCBkaWZmZXJlbmNlLiBNZXRob2RzIGNhbGxlZCBvbiBhcnJheXMgZXhlY3V0ZSB3aGVuIHlvdSBjYWxsIHRoZW0uIE1ldGhvZHMgaW4gSk9JTiB0aGF0IHJldHVybiB0aGUgRW51bWVyYWJsZSBjbGFzcyBvbmx5IGNyZWF0ZSB0aGUgZW51bWVyYWJsZS4gVGhleSBhcmUgbm90IGV4ZWN1dGVkIHVudGlsIHlvdSBpdGVyYXRlIHRoZW0gb3IgY2FsbCBhIG1ldGhvZCB0aGF0IHByb2R1Y2VzIGEgbm9uLWVudW1lcmFibGUgcmVzdWx0LiBUaGlzIGlzIGtub3duIGFzIGRlZmVycmVkIGV4ZWN1dGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlZmVycmVkIGV4ZWN1dGlvbiBpbiBKT0lOIGlzIG1hbmFnZWQgdGhyb3VnaCB0aGUgdXNlIG9mIGphdmFzY3JpcHQgZ2VuZXJhdG9ycywgd2hpY2ggcHJvZHVjZSByZWNvcmRzIG9uZSBieSBvbmUgd2hpbGUgeW91IGl0ZXJhdGUgdGhlIGdlbmVyYXRvciwgbWVhbmluZyB0aGF0IHRoZXkgYm90aCBkZWZlciB0aGUgc3RhcnQgb2YgdGhlIHByb2Nlc3MgYW5kIHRoZXkgaGFsdCB3aGVuIGl0ZXJhdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUbyBzaG93IGJ5IHdheSBvZiBleGFtcGxlLCB0aGUgc3RhdGVtZW50czxici8+XG4gICAgICAgICAgICAgICAgPGNvZGU+YXJyLmZpbHRlcihmaWx0ZXJGdW5jdGlvbikubWFwKG1hcEZ1bmN0aW9uKS5zbGljZSgwLDUpPC9jb2RlPjxici8+XG4gICAgICAgICAgICAgICAgYW5kPGJyLz5cbiAgICAgICAgICAgICAgICA8Y29kZT5hcnIud2hlcmVfcV8oZmlsdGVyRnVuY3Rpb24pLnNlbGVjdF9xXyhtYXBGdW5jdGlvbikudGFrZV9xXyg1KTwvY29kZT48L2JyPlxuICAgICAgICAgICAgICAgIHByb2R1Y2UgdGhlIGV4YWN0IHNhbWUgcmVzdWx0cywgYnV0IHRoZXkgaGF2ZSB0aGVzZSBkaWZmZXJlbmNlczpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT50aGUgcmVjb3JkcyBpbiB0aGUgYXJyYXkgYXJlIHByb2Nlc3NlZCB0aGF0IG1vbWVudCwgd2hpbGUgdGhlIHJlY29yZHMgaW4gdGhlIGVudW1lcmFibGUgYXJlIG5vdCBwcm9jZXNzZWQgdW50aWwgeW91IGl0ZXJhdGUgdGhlbSwgc3VjaCBhcyB1c2luZyBhIGZvci1vZiBsb29wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPmZpbHRlckZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBldmVyeSByZWNvcmQgb2YgdGhlIGFycmF5LCB3aGlsZSBpbiB0aGUgZW51bWVyYWJsZSBpdCBpcyBjYWxsZWQgb25seSBvbiBlbm91Z2ggcmVjb3JkcyB0byBwcm9kdWNlIDUgdGhhdCBtYXRjaDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5tYXBGdW5jdGlvbiBpcyBjYWxsZWQgb24gZXZlcnkgbWF0Y2hpbmcgcmVjb3JkIG9mIHRoZSBhcnJheSwgd2hpbGUgaW4gdGhlIGVudW1lcmFibGUgaXQgaXMgY2FsbGVkIGF0IG1vc3QgNSB0aW1lczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE1ldGhvZHMgdGhhdCByZXR1cm4gYSBzaW5nbGUgcmVzdWx0LCBzdWNoIGFzIGNvdW50X3FfKCkgb3IgbWluX3FfKCkgb3IgZmlyc3RfcV8oKSBvciB0b0FycmF5X3FfKCkgb3IgdG9EaWN0aW9uYXJ5X3FfKCkgd2lsbCBlbnVtZXJhdGUgdGhlIGFycmF5LCB0aGUgc2FtZSBhcyBsb29waW5nIHRocm91Z2ggd2l0aCBhIGZvci1vZiBsb29wIHdpbGwuIEFub3RoZXIgb3BlcmF0aW9uIHRoYXQgd2lsbCBtYXRlcmlhbGl6ZSB0aGUgaXRlcmFibGUgaXMgY2FsbGluZyBKU09OLnN0cmluZ2lmeSgpIG9uIGl0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgT25jZSB5b3UgaXRlcmF0ZSBhbiBFbnVtZXJhYmxlLCB0aGUgcXVlcnkgd2lsbCBiZSBwcm9jZXNzZWQsIGFuZCB0aGUgZ2VuZXJhdG9yIHByb3ZpZGluZyB0aGUgZGF0YSBpcyBjbG9zZWQuIEluIEMjIExJTlEgdG8gT2JqZWN0cyBpZiB5b3Ugd2FudCB0byByZS11c2UgcXVlcnkgZGF0YSwgeW91IGNhbGwgVG9BcnJheSgpIG9uIHRoZSBxdWVyeSBhbmQgY2FwdHVyZSB0aGUgcmVzdWx0LCBidXQgSk9JTiB0byBKYXZhc2NyaXB0IHdpbGwgY2FjaGUgdGhlIGRhdGEgcmV0dXJuZWQgc28gbGF0ZXIgaXRlcmF0aW9ucyByZXR1cm4gZnJvbSB0aGUgY2FjaGUuIEl0J3Mgc3RpbGwgZ29vZCBjb2RpbmcgcHJhY3RpY2UgdG8gYmUgZXhwbGljaXQgYW5kIHVzZSB0b0FycmF5X3FfKCksIGJ1dCB5b3UgZG9uJ3QgaGF2ZSB0by5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDAxIGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNpbXBsZSBlbnVtZXJhYmxlIGJ1dCBkbyBub3QgdHJpZ2dlciBleGVjdXRpb24uXG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3QgcXVlcnlhYmxlMSA9IFsxLCAyLCAzXS5zZWxlY3RfcV8oYSA9PiAzICogYSk7IC8vIGNyZWF0ZWQgYnV0IG5vdCBleGVjdXRlZGApO1xuICAgICAgICAgICAgY29uc3QgcXVlcnlhYmxlMSA9IFsxLCAyLCAzXS5zZWxlY3RfcV8oYSA9PiAzICogYSk7XG4gICAgICAgICAgICAvLyBUaGUgc3RhdHVzIG9mIHRoZSBnZW5lcmF0b3IgaXMgaGlkZGVuIGluIHR5cGVzY3JpcHQsIHNvIHRvIGdldCBhdCBwcml2YXRlXG4gICAgICAgICAgICAvLyBmaWVsZHMgd2UgaGF2ZSB0byBjYXN0IGFzIGFueS4gWW91IGNhbiBsb29rIGF0IHRoaXMgaW4gZGVidWcgdG9vbHM6XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnlhYmxlMS5fc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zb2xlLmxvZyhxdWVyeWFibGUxLl9pc0Nsb3NlZCk7IC8vIHNob3VsZCBiZSBmYWxzZWApO1xuICAgICAgICAgICAgLy8gVGhlcmUgc2VlbXMgdG8gYmUgbm8gd2F5IGluIGNvZGUgdG8gdmlldyB0aGUgZ2VuZXJhdG9yIHN0YXR1cyAoanVzdCByZWQgc3F1aWdnbGVzIHVuZGVyIFtbR2VuZXJhdG9yU3RhdHVzXV0pXG4gICAgICAgICAgICAvLyBzbyB3ZSBjaGVjayB0aGUgX2lzQ2xvc2VkIGZsYWcgc2V0IG9uIGdlbmVyYXRvciBjbG9zZS5cbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IHF1ZXJ5YWJsZTEuX2lzQ2xvc2VkO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAxLCAnUXVlcnlhYmxlIGlzIG5vdCBjbG9zZWQgd2hlbiBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgcXVlcnlhYmxlMS50b0FycmF5X3FfKCk7IC8vIG1hdGVyaWFsaXplcyB0aGUgZW51bWVyYWJsZWApO1xuICAgICAgICAgICAgdGhpcy5sb2cocXVlcnlhYmxlMS50b0FycmF5X3FfKCksIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnNvbGUubG9nKHF1ZXJ5YWJsZTEuX2lzQ2xvc2VkKTsgLy8gc2hvdWxkIGJlIHRydWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMiA9IHF1ZXJ5YWJsZTEuX2lzQ2xvc2VkO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIsICdRdWVyeWFibGUgaXMgY2xvc2VkIGFmdGVyIGl0ZXJhdGlvbicpO1xuICAgICAgICAgICAgLy8gR2VuZXJhdG9ycyBjYW4gb25seSBwcm9kdWNlIGRhdGEgb25jZS4gSWYgbm90IGZvciB0aGUgY2FjaGUsIHlvdSdkIGhhdmUgdG8gc3BlY2lmeSB0aGUgd2hvbGUgY29kZVxuICAgICAgICAgICAgLy8gWzEsIDIsIDNdLnNlbGVjdF9xXyhhID0+IDMgKiBhKSBlYWNoIHRpbWUsIG9yIGp1c3Qgc3RvcmUgdGhlIGFycmF5IG91dHB1dC5cbiAgICAgICAgICAgIC8vIEJ1dCB0aGUgRW51bWVyYWJsZSBjbGFzcyBjYWNoZXMgdGhlIHJlc3VsdHMgd2hlbiB5b3UgcHVsbCB0aGVtLCBzbyB3aGVuIHRoZSBnZW5lcmF0b3IgaXMgY2xvc2VkLCB5b3UgcHVsbCBmcm9tIHRoZSBjYWNoZS5cbiAgICAgICAgICAgIHRoaXMubG9nKGBxdWVyeWFibGUxLnRvQXJyYXlfcV8oKTsgLy8gcHVsbHMgZnJvbSB0aGUgY2FjaGUuIGluIGEgZGVmYXVsdCBnZW5lcmF0b3IsIHRoaXMgd291bGQgYmUge31gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMubGVuZ3RoID09PSAzLCAndG9BcnJheSBzdGlsbCB3b3JrcyBhZnRlciBjbG9zZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZm9vJywgJ2JhcicsICdiYXonXS5hc1F1ZXJ5YWJsZSgpIC8vIHRha2VzIGFuIGFycmF5LCBjb252ZXJ0cyBpdCB0byBhIHF1ZXJ5YWJsZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWydmb28nLCAnYmFyJywgJ2JheiddLmFzUXVlcnlhYmxlKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDRbMF0gPT09ICdmb28nICYmIHRlc3QwNFsxXSA9PT0gJ2JhcicgJiYgdGVzdDA0WzJdID09PSAnYmF6JywgJ0VudW1lcmF0ZSBhbiBhcnJheScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYCdhYmMnLmFzUXVlcnlhYmxlKCkgLy8gY2FsbGluZyBhc1F1ZXJ5YWJsZSgpIG9uIGEgc3RyaW5nIHByb2R1Y2VzIGEgY2hhcmFjdGVyIGVudW1lcmFibGUgLi4uIHRoaXMgaGFzIGEsYixjYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSAnYWJjJy5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA1WzBdID09PSAnYScgJiYgdGVzdDA1WzFdID09PSAnYicgJiYgdGVzdDA1WzJdID09PSAnYycsICdTdHJpbmdzIGNhbiBiZSBjb252ZXJ0ZWQgdG8gcXVlcnlhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgKDUpLmFzUXVlcnlhYmxlKCkgLy8gY2FsbGluZyBhc1F1ZXJ5YWJsZSgpIG9uIGEgbnVtYmVyIHByb2R1Y2VzIGEgcmFuZ2Ugb2YgbnVtYmVycyAuLi4gdGhpcyBpcyBhIDUtaXRlbSBlbnVtZXJhYmxlIGhhdmluZyAwLDEsMiwzLDRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9ICg1KS5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA2Lmxlbmd0aCA9PT0gNSAmJiB0ZXN0MDYuYWxsX3FfKChxLCBpZHgpID0+IHEgPT09IGlkeCksICdOdW1iZXJzIGNhbiBiZSBjb252ZXJ0ZWQgdG8gcXVlcnlhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgcmFuZG9tR2VuZXJhdG9yKCkuYXNRdWVyeWFibGUoKSAvLyBhbnkgaXRlcmFibGUgY2FuIGJlIGNvbnZlcnRlZCB0byBhIHF1ZXJ5YWJsZWApO1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgY2FuIGJlIHR1cm5lZCBpbnRvIGEgcXVlcnlhYmxlLCB3aGljaCBlbmFibGVzIHRoZSBKT0lOIG1ldGhvZHNcbiAgICAgICAgICAgIGZ1bmN0aW9uKiByYW5kb21HZW5lcmF0b3IoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgMTtcbiAgICAgICAgICAgICAgICB5aWVsZCA0O1xuICAgICAgICAgICAgICAgIHlpZWxkIDE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcXVlcnlhYmxlMiA9IHJhbmRvbUdlbmVyYXRvcigpLmFzUXVlcnlhYmxlKCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBxdWVyeWFibGUyLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3WzBdID09PSAxICYmIHRlc3QwN1sxXSA9PT0gNCAmJiB0ZXN0MDdbMl0gPT09IDE2LCAnSXRlcmFibGVzIGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBxdWVyeWFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGB7bmFtZX0uYXNRdWVyeWFibGUoKSAvLyB0aG91Z2ggaXQncyB1c2VsZXNzLCBub24taXRlcmFibGUgb2JqZWN0cyBjYW4gYmUgbWFkZSBxdWVyeWFibGUgLi4uIHRoaXMgaXMgYSBsZW5ndGggMSBlbnVtZXJhYmxlIGNvbnRhaW5pbmcge25hbWV9IGFzIGl0cyBvbmx5IGVsZW1lbnRgKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7IG5hbWU6ICdGb28nIH07XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBpdGVtLmFzUXVlcnlhYmxlKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDgubGVuZ3RoID09PSAxICYmIHRlc3QwOFswXSA9PT0gaXRlbSwgJ2FueSBvYmplY3QgY2FuIGJlIGNvbnZlcnRlZCB0byBhIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAxID0gVGVzdDAwMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ0NvbnZlcnNpb25zJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlRoZXNlIG1ldGhvZHMgYXJlIHVzZWQgdG8gY29udmVydCBlbnVtZXJhYmxlcyBpbnRvIG9yZGluYXJ5IG9iamVjdHM6IGFycmF5cywgbWFwcywgc2V0cywgbG9va3VwczwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMiBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbMSwgMywgNV0udG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzLCA1XS50b0FycmF5X3FfKCkgLy8gYW4gZXh0cmVtZWx5IHJlZHVuZGFudCBleGFtcGxlIC4uLiBtYWtlcyBhbiBhcnJheWApO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDFbMF0gPT09IDEgJiYgdGVzdDAxWzFdID09PSAzICYmIHRlc3QwMVsyXSA9PT0gNSwgJ0FycmF5IGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMiA9IFsxLCAzLCA1XS50b0xpc3RfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0udG9MaXN0X3FfKCkgLy8gdG9MaXN0X3FfKCkgaXMgYWxpYXNlZCB0byB0b0FycmF5X3FfKClgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAyWzBdID09PSAxICYmIHRlc3QwMlsxXSA9PT0gMyAmJiB0ZXN0MDJbMl0gPT09IDUsICdBcnJheSBpcyBjcmVhdGVkIGJ5IFRvTGlzdCgpJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9EaWN0aW9uYXJ5X3FfKHEgPT4gcS5uYW1lKTsgLy8gcHJvZHVjZXMgYW4gb2JqZWN0IHdoZXJlIGtleXMgYXJlIEJvYiBhbmQgQ2Fyb2wgYW5kIHRoZSB2YWx1ZXMgYXJlIHRoZSBvYmplY3QgZS5nLiB7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDNbJ0JvYiddLndpbnMgPT09IDIwLCAnT2JqZWN0IGRpY3Rpb25hcnkgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvRGljdGlvbmFyeV9xXyhxID0+IHEubmFtZSwgcSA9PiBxLndpbnMpIC8vIHByb2R1Y2VzIHtcIkJvYlwiOjIwLFwiQ2Fyb2xcIjozNH1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvRGljdGlvbmFyeV9xXyhxID0+IHEubmFtZSwgcSA9PiBxLndpbnMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDRbJ0JvYiddID09PSAyMCwgJ051bWJlciBkaWN0aW9uYXJ5IGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiBmb3IgbWFwc1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZS5lbnRyaWVzKCkuYXNRdWVyeWFibGUoKS5wcmVwZW5kX3FfKFwiPC0gTUFQIC0+XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvZygnTm9ybWFsIEpTIG9iamVjdHMgY2Fubm90IGhhdmUga2V5cyB0aGF0IGFyZSBub3Qgc3RyaW5ncywgc28gaWYgeW91IHdhbnQgb2JqZWN0IGtleXMgeW91IG11c3QgdXNlIE1hcC4gVGhpcyBpcyBub3QgZXhjZWVkaW5nbHkgdXNlZnVsIGJlY2F1c2Ugb2JqZWN0cyBkbyBub3QgbWFrZSBnb29kIGtleXMuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9NYXBfcV8ocSA9PiAoeyBuYW1lOiBxLm5hbWUgfSkpOyAvLyBwcm9kdWNlcyBhIG1hcCB3aXRoIHsgbmFtZSB9IGtleXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvTWFwX3FfKHEgPT4gKHsgbmFtZTogcS5uYW1lIH0pKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwNSwgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDUuc2l6ZSA9PT0gMiAmJiAhIVsuLi50ZXN0MDUua2V5cygpXS5maW5kKG0gPT4gbS5uYW1lID09PSAnQ2Fyb2wnKSwgJ09iamVjdCBtYXAgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvTWFwX3FfKHEgPT4gKHsgbmFtZTogcS5uYW1lIH0pLCBxID0+IHEud2lucykgLy8gcHJvZHVjZXMgYSBtYXAgd2l0aCB7IG5hbWUgfSBrZXlzIGFuZCB3aW5zIGFzIHZhbHVlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSwgcSA9PiBxLndpbnMpO1xuICAgICAgICAgICAgdGhpcy5sb2coSlNPTi5zdHJpbmdpZnkodGVzdDA2LCByZXBsYWNlciksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNi5zaXplID09PSAyICYmIFsuLi50ZXN0MDYuZW50cmllcygpXS5maW5kKG0gPT4gbVswXS5uYW1lID09PSAnQ2Fyb2wnKVsxXSA9PT0gMzQsICdPYmplY3QgbWFwIGlzIGNyZWF0ZWQgd2l0aCBlbGVtZW50IHNlbGVjdG9yJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnSlMgb2JqZWN0cyBhbmQgTWFwIGRvIG5vdCBhbGxvdyBtdWx0aXBsZSB2YWx1ZXMgZm9yIGEga2V5LCBzbyBKT0lOIHByb2R1Y2VzIGEgTG9va3VwLCB3aGljaCBkb2VzLicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1doZW4geW91IGNhbGwgc2V0KCkgb24gYSBsb29rdXAsIGl0IGFwcGVuZHMgdGhlIHZhbHVlIGluc3RlYWQgb2Ygb3ZlcndyaXRpbmcgaXQuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAxMCB9XS50b0xvb2t1cF9xXyhxID0+IHEubmFtZSkgLy8gQ3JlYXRlcyBhIGxvb2t1cCB3aXRoIG5hbWUgYXMga2V5LCBoZWxwZnVsIHdoZW4gbmFtZXMgYXJlIGR1cGxpY2F0ZWRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNyA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMTAgfV0udG9Mb29rdXBfcV8ocSA9PiBxLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5sb2coSlNPTi5zdHJpbmdpZnkodGVzdDA3LCByZXBsYWNlciksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNy5zaXplID09PSAyICYmIHRlc3QwNy5nZXQoJ0Nhcm9sJykubGVuZ3RoID09PSAyICYmICEhdGVzdDA3LmdldCgnQ2Fyb2wnKS5maW5kKGYgPT4gZi53aW5zID09PSAxMCksICdMb29rdXAgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMTAgfV0udG9Mb29rdXBfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKSAvLyBDcmVhdGVzIGEgbG9va3VwIHdpdGggbmFtZSBhcyBrZXkgYW5kIHdpbnMgYXMgdmFsdWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMTAgfV0udG9Mb29rdXBfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwOCwgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDguc2l6ZSA9PT0gMiAmJiB0ZXN0MDguZ2V0KCdDYXJvbCcpLmxlbmd0aCA9PT0gMiAmJiAhIXRlc3QwOC5nZXQoJ0Nhcm9sJykuZmluZChmID0+IGYgPT09IDEwKSwgJ0xvb2t1cCBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDIsIDMsIDQsIDFdLnRvSGFzaFNldF9xXygpIC8vIHByb2R1Y2VzIFNldCgpIG9mIGl0cyB1bmlxdWUgdmFsdWVzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbMSwgMiwgMiwgMywgNCwgMV0udG9IYXNoU2V0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbLi4udGVzdDA5XSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNpemUgPT09IDQgJiYgdGVzdDA5LmhhcygxKSAmJiB0ZXN0MDkuaGFzKDIpICYmIHRlc3QwOS5oYXMoMykgJiYgdGVzdDA5Lmhhcyg0KSwgJ1NldCBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDIgPSBUZXN0MDAyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnQmFzaWMgU2luZ2xlLVNlcXVlbmNlIFF1ZXJpZXMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+VGhlIG1lYXQgb2YgSk9JTiB0byBqYXZhc2NyaXB0IGlzIHRha2VuIHVwIGJ5IGJhc2ljIHF1ZXJ5IG9wZXJhdGlvbnMgdGhhdCBldmVyeW9uZSB3aG8gd29ya3Mgd2l0aCBhcnJheXMgaXMgdXNlZCB0bzogZmlsdGVyaW5nIGVsZW1lbnRzLCBwcm9qZWN0aW5nIHJlc3VsdHMsIHNsaWNpbmcgYW5kIHNraXBwaW5nLCBhbmQgc28gb24uPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDAzIGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdGhpcyBmdW5jdGlvbiBmb3IgdGVzdGluZy5cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDNdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGxlbmd0aCAxJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMicpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgaXRlbXMnKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnQXJlIGVxdWFsJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnRXZlcnkgbGVzc29uIGluIHF1ZXJpZXMgc3RhcnRzIHdpdGggc2VsZWN0LiBTZWxlY3QgcHJvamVjdHMgYSBmdW5jdGlvbiBvbnRvIGV2ZXJ5IGVudHJ5IGluIHRoZSBlbnVtZXJhYmxlLicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5zZWxlY3RfcV8ocyA9PiBzICogcykgLy8gMSw0LDksMTYsMjVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzLCA0LCA1XS5zZWxlY3RfcV8ocyA9PiBzICogcykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDEuc2VxdWVuY2VFcXVhbF9xXyhbMSwgNCwgOSwgMTYsIDI1XSksICdTZWxlY3Qgc3F1YXJlcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbMSwgMiwgMywgNF0uc2VsZWN0X3FfKChzOiBudW1iZXIsIGlkeDogbnVtYmVyKSA9PiBgJHtpZHh9XjI9JHtzfWApIC8vIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICAvLyBUeXBlc2NyaXB0IGlzIGFubm95aW5nIGFib3V0IHRoZSBhcmd1bWVudCB0eXBlcy4gSXQgY2FuJ3QgZmlndXJlIHRoZW0gb3V0IGF1dG9tYXRpY2FsbHkgbGlrZSB1c3VhbC5cbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMiA9IFsxLCAyLCAzLCA0XS5zZWxlY3RfcV8oKHMsIGlkeCkgPT4gYCR7aWR4ICsgMX1eMj0ke3MgKiBzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAyLnNlcXVlbmNlRXF1YWxfcV8oW1wiMV4yPTFcIiwgXCIyXjI9NFwiLCBcIjNeMj05XCIsIFwiNF4yPTE2XCJdKSwgXCJTZWxlY3Qgd2l0aCBpbmRleFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdUaGUgc2Vjb25kIHN0ZXAgaW4gZXZlcnkgbGVzc29uIGluIHF1ZXJpZXMgaXMgXCJ3aGVyZS5cIicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS53aGVyZV9xXyhxID0+IHEgJSAyID09PSAwKSAvLyAyLDQsNiw4YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8ocSA9PiBxICUgMiA9PT0gMCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMuc2VxdWVuY2VFcXVhbF9xXyhbMiwgNCwgNiwgOF0pLCAnV2hlcmUgZXZlbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS53aGVyZV9xXygocTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gaWR4IDwgMykgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLndoZXJlX3FfKChxLCBpZHgpID0+IGlkeCA8IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ1doZXJlIHdpdGggaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWW91IG5vdyBrbm93IDkwJSBvZiBldmVyeXRoaW5nIHlvdSdsbCBuZWVkLiBCdXQgaGVyZSBhcmUgc29tZSBtb3JlIGZ1bmN0aW9ucy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnNraXBfcV8oMikgLy8gMyw0LDVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9IFsxLCAyLCAzLCA0LCA1XS5za2lwX3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA1LnNlcXVlbmNlRXF1YWxfcV8oWzMsIDQsIDVdKSwgJ1NraXAgZmlyc3QgMicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwTGFzdF9xXygyKSAvLyAxLDIsM2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBMYXN0X3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA2LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ1NraXAgbGFzdCAyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXyhxID0+IHEgIT09IDMpIC8vIHNraXAgYXMgbG9uZyBhcyBjb25kaXRpb24gaXMgZmFsc2UsIHRoZW4gdGFrZSByZXN0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbMSwgMiwgMywgNCwgNV0uc2tpcFdoaWxlX3FfKHEgPT4gcSAhPT0gMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDcuc2VxdWVuY2VFcXVhbF9xXyhbMywgNCwgNV0pLCAnU2tpcCB1bnRpbCAzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXygocTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSAzKSAvLyBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgMiwgMywgNCwgNV0uc2tpcFdoaWxlX3FfKChxLCBpZHgpID0+IGlkeCAhPT0gMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDguc2VxdWVuY2VFcXVhbF9xXyhbNCwgNV0pLCAnU2tpcFdoaWxlIHdpdGggaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygyKSAvLyAxLDJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsxLCAyLCAzLCA0LCA1XS50YWtlX3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ1Rha2UgZmlyc3QgMicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS50YWtlTGFzdF9xXygyKSAvLyA0LDVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMCA9IFsxLCAyLCAzLCA0LCA1XS50YWtlTGFzdF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMC5zZXF1ZW5jZUVxdWFsX3FfKFs0LCA1XSksICdUYWtlIGxhc3QgMicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS50YWtlV2hpbGVfcV8ocSA9PiBxICE9PSAzKSAvLyBSZXR1cm4gcm93cyB1bnRpbCBjb25kaXRpb24gaXMgdHJ1ZSwgdGhlbiBzdG9wYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTEgPSBbMSwgMiwgMywgNCwgNV0udGFrZVdoaWxlX3FfKHEgPT4gcSAhPT0gMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDExLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTEuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMl0pLCAnVGFrZVdoaWxlIG5vdCAzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXygocTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSAzKSAvLyBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTIgPSBbMSwgMiwgMywgNCwgNV0udGFrZVdoaWxlX3FfKChxLCBpZHgpID0+IGlkeCAhPT0gMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTIuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnVGFrZVdoaWxlIHdpdGggaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMSwgMiwgMiwgMiwgMywgMywgMywgM10uZGlzdGluY3RfcV8oKSAvLyAxLDIsM2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEzID0gWzEsIDEsIDIsIDIsIDIsIDMsIDMsIDMsIDNdLmRpc3RpbmN0X3FfKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTMuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnR2V0IGRpc3RpbmN0IGVudHJpZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dLmRpc3RpbmN0X3FfKChxLCByKSA9PiBxLmEgPT09IHIuYSkgLy8gYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHBhc3NlZCBlLmcuIHRvIGFsbG93IGNvbXBhcmlzb24gYnkga2V5YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTQgPSBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dXG4gICAgICAgICAgICAgICAgLmRpc3RpbmN0X3FfKChxLCByKSA9PiBxLmEgPT09IHIuYSlcbiAgICAgICAgICAgICAgICAudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTQubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdEaXN0aW5jdCB3aXRoIGN1c3RvbSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV0uZGlzdGluY3RCeV9xXyhxID0+IHEuYSkgLy8gZGlzdGluY3RCeSgpIGRvZXMgaXRzIGNoZWNrIGJhc2VkIG9uIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIihJIGtub3cgdGhpcyBpcyBhbG1vc3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzLCBidXQgaXQgd2FzIGFkZGVkIGluIC5OZXQgNilcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dXG4gICAgICAgICAgICAgICAgLmRpc3RpbmN0QnlfcV8ocSA9PiBxLmEpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnRGlzdGluY3QgYnkga2V5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XS5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hLCAocSwgcikgPT4gcSAlIDIgPT09IHIgJSAyKSAvLyBhbHNvIHRha2VzIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTYgPSBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dXG4gICAgICAgICAgICAgICAgLmRpc3RpbmN0QnlfcV8ocSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE2Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMl0pLCAnRGlzdGluY3QgYnkga2V5OiBvbmUgZXZlbiAmIG9uZSBvZGQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiU2VsZWN0TWFueSgpIGxvb3BzIHRocm91Z2ggdGhlIGZpcnN0IGxldmVsLCBmbGF0dGVucyBhbiBhcnJheSB3aXRoaW4gdGhhdCBsZXZlbCwgYW5kIHJldHVybnMgaXQgYXQgdGhlIHRvcCBsZXZlbC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcImNvbnN0IG51bWJlclNldHMgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dOyAvLyBzZXZlcmFsIGV4YW1wbGVzIHdpbGwgd29yayB3aXRoIHRoaXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgbnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKHEgPT4gcS5udW1iZXJzKSAvLyAxLDMsNSwyLDQsNiwyLDUsNywxMWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE3ID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XS5zZWxlY3RNYW55X3FfKHEgPT4gcS5udW1iZXJzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNy5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAzLCA1LCAyLCA0LCA2LCAyLCA1LCA3LCAxMV0pLCAnU2VsZWN0IG1hbnkgZmxhdHRlbnMgaW5zaWRlIGFycmF5cycpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJudW1iZXJTZXRzLnNlbGVjdE1hbnlfcV8oKHE6IHsgdHlwZTogc3RyaW5nLCBudW1iZXJzOiBudW1iZXJbXSB9LCBpZHg6IG51bWJlcikgPT4gcS5udW1iZXJzLm1hcChtID0+IGAke2lkeH06ICR7bX1gKSAvLyBmdW5jdGlvbiB0byBnZXQgaXRlcmFibGUgY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICAgIC8vIHR5cGVzY3JpcHQgcmVhbGx5IGRvZXNuJ3Qgd2FudCB0byBkbyBhbnkgYXV0by10eXBlbWFwcGluZyBoZXJlXG4gICAgICAgICAgICBjb25zdCB0ZXN0MTggPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8oKHEsIGlkeCkgPT4gcS5udW1iZXJzLm1hcChtID0+IGAke2lkeH06ICR7bX1gKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTguc2VxdWVuY2VFcXVhbF9xXyhbXCIwOiAxXCIsIFwiMDogM1wiLCBcIjA6IDVcIiwgXCIxOiAyXCIsIFwiMTogNFwiLCBcIjE6IDZcIiwgXCIyOiAyXCIsIFwiMjogNVwiLCBcIjI6IDdcIiwgXCIyOiAxMVwiXSksICdTZWxlY3RNYW55IHdpdGggaW5kZXgnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKHEgPT4gcS5udW1iZXJzLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9OiAke3Jlc31gKSAvLyBhbiBvdXRwdXQgZnVuY3Rpb24gY2FuIGJlIHByb3ZpZGVkIHRvIHByb2plY3Qgb250byB0aGUgZmxhdHRlbmVkIHJlc3VsdHMsIGxldHRpbmcgeW91IGNvbWJpbmUgcGFyZW50IGFuZCBjaGlsZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOSA9IFt7IHR5cGU6ICdvZGQnLCBudW1iZXJzOiBbMSwgMywgNV0gfSwgeyB0eXBlOiAnZXZlbicsIG51bWJlcnM6IFsyLCA0LCA2XSB9LCB7IHR5cGU6ICdwcmltZScsIG51bWJlcnM6IFsyLCA1LCA3LCAxMV0gfV0uc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycywgKHMsIHJlcykgPT4gYCR7cy50eXBlfTogJHtyZXN9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTkuc2VxdWVuY2VFcXVhbF9xXyhbXCJvZGQ6IDFcIiwgXCJvZGQ6IDNcIiwgXCJvZGQ6IDVcIiwgXCJldmVuOiAyXCIsIFwiZXZlbjogNFwiLCBcImV2ZW46IDZcIiwgXCJwcmltZTogMlwiLCBcInByaW1lOiA1XCIsIFwicHJpbWU6IDdcIiwgXCJwcmltZTogMTFcIl0pLCAnU2VsZWN0TWFueSB3aXRoIG91dHB1dCBmdW5jdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJudW1iZXJTZXRzLnNlbGVjdE1hbnlfcV8oKHE6IHsgdHlwZTogc3RyaW5nLCBudW1iZXJzOiBudW1iZXJbXSB9LCBpZHg6IG51bWJlcikgPT4gcS5udW1iZXJzLm1hcChtID0+IGAoIyR7aWR4fSkgJHttfWApLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9ICR7cmVzfWApIC8vIG91dHB1dCBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIwID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XS5zZWxlY3RNYW55X3FfKChxLCBpZHgpID0+IHEubnVtYmVycy5tYXAobSA9PiBgKCMke2lkeH0pICR7bX1gKSwgKHMsIHJlcykgPT4gYCR7cy50eXBlfSAke3Jlc31gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMC5zZXF1ZW5jZUVxdWFsX3FfKFtcIm9kZCAoIzApIDFcIiwgXCJvZGQgKCMwKSAzXCIsIFwib2RkICgjMCkgNVwiLCBcImV2ZW4gKCMxKSAyXCIsIFwiZXZlbiAoIzEpIDRcIiwgXCJldmVuICgjMSkgNlwiLCBcInByaW1lICgjMikgMlwiLCBcInByaW1lICgjMikgNVwiLCBcInByaW1lICgjMikgN1wiLCBcInByaW1lICgjMikgMTFcIl0pLCBcIlNlbGVjdE1hbnkgd2l0aCBpbmRleCBpbiBvdXRwdXRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmNhc3RfcV8obnVtID0+IG51bS50b1N0cmluZygpKSAvLyBDYXN0KCkgaXMgaW1wb3NzaWJsZSBpbiBKUywgc28gY2FzdF9xXygpIGlzIGp1c3QgYW4gYWxpYXMgZm9yIHNlbGVjdF9xXygpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbMSwgMiwgM10uY2FzdF9xXyhudW0gPT4gbnVtLnRvU3RyaW5nKCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIxLnNlcXVlbmNlRXF1YWxfcV8oW1wiMVwiLCBcIjJcIiwgXCIzXCJdKSwgXCJDYXN0IHJ1bnMgY29udmVyc2lvbiBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgJ3R3bycsIDMsICd0aHJlZScsIDQsICdmb3VyJ10ub2ZUeXBlX3FfKCdudW1iZXInKSAvLyBPZlR5cGUoKSBpcyBhbHNvIG5vbnNlbnNlIGluIEpTLCBzbyB0aGlzIGVpdGhlciBkb2VzIHR5cGVvZiAoaWYgYSBzdHJpbmcgaXMgcGFzc2VkKSBvciBpbnN0YW5jZW9mIChpZiBhbnl0aGluZyBlbHNlKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gWzIsICd0d28nLCAzLCAndGhyZWUnLCA0LCAnZm91ciddLm9mVHlwZV9xXygnbnVtYmVyJykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjIuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgNF0pLCAnT2ZUeXBlIG51bWJlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAzID0gVGVzdDAwMztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlXCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnQWR2YW5jZWQgU2luZ2xlLVNlcXVlbmNlIFF1ZXJpZXMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+VGhpcyBwYWdlIGRlYWxzIHdpdGggbW9yZSBhZHZhbmNlZCBxdWVyaWVzIHRoYXQgY2FuIGJlIGNhbGxlZCBvbiBhIHNpbmdsZSBpdGVyYWJsZS48L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDQgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0aGlzIGZ1bmN0aW9uIGZvciB0ZXN0aW5nLlxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgM10pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDEnKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGxlbmd0aCAyJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBpdGVtcycpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdBcmUgZXF1YWwnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBbMSwyLDNdXG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmRlZmF1bHRJZkVtcHR5X3FfKCkgLy8gbm90IGVtcHR5IHNvIGl0IHBhc3NlcyB0aHJvdWdoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbMSwgMiwgM10uZGVmYXVsdElmRW1wdHlfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdEZWZhdWx0SWZFbXB0eSB3aGVuIG5vdCBlbXB0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmRlZmF1bHRJZkVtcHR5X3FfKC0xKSAvLyBbLTFdIHdoZW4gbm8gZGF0YWApO1xuICAgICAgICAgICAgLy8gdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgd2hhdCB0eXBlIFtdIGlzIHN1cHBvc2VkIHRvIGJlLlxuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gW10uZGVmYXVsdElmRW1wdHlfcV8oLTEpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAyLmxlbmd0aCA9PT0gMSAmJiB0ZXN0MDJbMF0gPT09IC0xLCAnRGVmYXVsdElmRW1wdHkgc3VwcGxpZXMgcm93IHdoZW4gZW1wdHkgaXRlcmFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uYXBwZW5kX3FfKDQpIC8vIDEsMiwzLDRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsxLCAyLCAzXS5hcHBlbmRfcV8oNCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgMywgNF0pLCAnQXBwZW5kIGFkZHMgdG8gZW5kIG9mIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgXCJuZXcgZmlyc3RcIixcImZpcnN0XCIsXCJzZWNvbmRcIlxuICAgICAgICAgICAgdGhpcy5sb2coYFsnZmlyc3QnLCAnc2Vjb25kJ10ucHJlcGVuZF9xXygnbmV3IGZpcnN0JykgLy8gYWRkcyBuZXcgZmlyc3QgdG8gc3RhcnRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsnZmlyc3QnLCAnc2Vjb25kJ10ucHJlcGVuZF9xXygnbmV3IGZpcnN0JykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDQuc2VxdWVuY2VFcXVhbF9xXyhbJ25ldyBmaXJzdCcsICdmaXJzdCcsICdzZWNvbmQnXSksICdQcmVwZW5kIGFkZHMgdG8gYmVnaW5uaW5nIG9mIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDQsIDYsIDEsIDMsIDUsIDddLnJldmVyc2VfcV8oKSAvLyByZXZlcnNlcyB0aGUgYXJyYXlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9IFsyLCA0LCA2LCAxLCAzLCA1LCA3XS5yZXZlcnNlX3FfKCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDUuc2VxdWVuY2VFcXVhbF9xXyhbNywgNSwgMywgMSwgNiwgNCwgMl0pLCAnUmV2ZXJzZSByZXZlcnNlcyBhbGwgZWxlbWVudHMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBXCIsIFwiQlwiLCBcIkNcIl0ucmVwbGljYXRlX3FfKDMpIC8vIGNvbmNhdGVuYXRlcyB0aGUgc2VxdWVuY2Ugd2l0aCBpdHNlbGYgbiB0aW1lcyAuLi4gdGhpcyBpcyBhIEpPSU4tc3BlY2lmaWMgbWV0aG9kIG5vdCBpbiBMSU5RYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIl0ucmVwbGljYXRlX3FfKDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA2LnNlcXVlbmNlRXF1YWxfcV8oW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCJdKSwgJ1JlcGxpY2F0ZSByZXBlYXRzIGFuIGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydhJywgJ2InLCAxLCAyXS5lbXB0eV9xXygpIC8vIGNyZWF0ZSBhbiBlbXB0eSBhcnJheSBvZiB0aGUgc2FtZSB0eXBlIGFzIHNlcXVlbmNlIC4uLiBub3RlIHRoYXQgdHlwZSBtZWFucyBzb21ldGhpbmcgaW4gdHlwZXNjcmlwdCBidXQgamF2YXNjcmlwdCBkb2Vzbid0IGNhcmVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNyA9IFsnYScsICdiJywgMSwgMl0uZW1wdHlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3Lmxlbmd0aCA9PT0gMCwgJ0VtcHR5KCkgcmV0dXJucyBlbXB0eSBhcnJheScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5jaHVua19xXygzKSAvLyBicmVhayBhcnJheSBpbnRvIGNodW5rcyBvZiBwcm92aWRlZCBzaXplYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0uY2h1bmtfcV8oMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MDgpID09PSBcIltbMSwyLDNdLFs0LDUsNl0sWzcsOF1dXCIsIFwiQ2h1bmsgYnJlYWtzIGl0ZXJhYmxlIGludG8gY2h1bmtzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYG9yZGVyQnlfcV8oKSBhbmQgb3JkZXJCeURlc2NlbmRpbmdfcV8oKSBvcmRlciBieSB0aGUgcmVzdWx0IG9mIGEgcHJvdmlkZWQga2V5IHNlbGVjdG9yIG1ldGhvZC5gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdUaGUgcmVzdWx0IG9mIHRoZSB0d28gb3JkZXJCeSBtZXRob2RzIGFyZSBlbnVtZXJhYmxlcyB0aGF0IGhhdmUgdHdvIG1ldGhvZHMgbm90IGZvdW5kIGluIGRlZmF1bHQgRW51bWVyYWJsZXM6Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgdGhlbkJ5X3FfPFRLZXk+KG9yZGVyQnk/OiBJRnVuYzE8VCwgVEtleT4sIGNvbXBhcmVyPzogSUZ1bmMyPFRLZXksIFRLZXksIDEgfCAwIHwgLTE+KTogSU9yZGVyZWRFbnVtZXJhYmxlPFQ+O2ApO1xuICAgICAgICAgICAgdGhpcy5sb2coYHRoZW5CeURlc2NlbmRpbmdfcV88VEtleT4ob3JkZXJCeT86IElGdW5jMTxULCBUS2V5PiwgY29tcGFyZXI/OiBJRnVuYzI8VEtleSwgVEtleSwgMSB8IDAgfCAtMT4pOiBJT3JkZXJlZEVudW1lcmFibGU8VD5gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2RvZycsICdmaXNoJywgJ2NhdCcsICdiaXJkJywgJ2lndWFuYScsICd0dXJ0bGUnXS5vcmRlckJ5X3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeURlc2NlbmRpbmdfcV8obyA9PiBvKSAvLyBvcmRlciBieSB3b3JkIGxlbmd0aCB0aGVuIHJldmVyc2UgYWxwaGFiZXRpY2FsYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbJ2RvZycsICdmaXNoJywgJ2NhdCcsICdiaXJkJywgJ2lndWFuYScsICd0dXJ0bGUnXS5vcmRlckJ5X3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeURlc2NlbmRpbmdfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zZXF1ZW5jZUVxdWFsX3FfKFtcImRvZ1wiLCBcImNhdFwiLCBcImZpc2hcIiwgXCJiaXJkXCIsIFwidHVydGxlXCIsIFwiaWd1YW5hXCJdKSwgJ09yZGVyQnkoKSBmb2xsb3dlZCBieSBUaGVuQnlEZXNjZW5kaW5nKCknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2RvZycsICdmaXNoJywgJ2NhdCcsICdiaXJkJywgJ2lndWFuYScsICd0dXJ0bGUnXS5vcmRlckJ5RGVzY2VuZGluZ19xXyhvID0+IG8ubGVuZ3RoKS50aGVuQnlfcV8oKSAvLyByZXZlcnNlIGxlbmd0aCB0aGVuIGFscGhhYmV0aWNhbCAuLi4gZW1wdHkga2V5U2VsZWN0b3IgaXMgdGhlIHNhbWUgYXMgKGtleSA9PiBrZXkpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbJ2RvZycsICdmaXNoJywgJ2NhdCcsICdiaXJkJywgJ2lndWFuYScsICd0dXJ0bGUnXS5vcmRlckJ5RGVzY2VuZGluZ19xXyhvID0+IG8ubGVuZ3RoKS50aGVuQnlfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMC5zZXF1ZW5jZUVxdWFsX3FfKFtcImlndWFuYVwiLCBcInR1cnRsZVwiLCBcImJpcmRcIiwgXCJmaXNoXCIsIFwiY2F0XCIsIFwiZG9nXCJdKSwgJ09yZGVyQnlEZXNjZW5kaW5nKCkgZm9sbG93ZWQgYnkgVGhlbkJ5KCknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdUaGUgZm9sa3MgYXQgTWljcm9zb2Z0IGdhdmUgdXMgYSBsb3Qgb2Ygb3ZlcmxvYWRzIGZvciBHcm91cEJ5KCksIG1vc3Qgb2YgdGhlbSBub3QgcmVhbGx5IG5lY2Vzc2FyeSBvciBleHRyZW1lbHkgdXNlZnVsJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKSAvLyBHcm91cCBieSBmaXJzdCBsZXR0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMSA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDExLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTEpID09PSBgW1tcIkFwcGxlXCIsXCJBcHJpY290XCJdLFtcIkNhbnRlbG91cGVcIl0sW1wiQmFuYW5hXCIsXCJCbHVlYmVycnlcIl1dYCwgJ0Jhc2ljIEdyb3VwQnknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiV2hpbGUgdGhlIHJlc3VsdCBvZiB0aGUgZ3JvdXAgb3BlcmF0aW9uIGlzIGFuIGl0ZXJhYmxlIHRoYXQgYXBwZWFycyBhcyBpZiBpdCdzIGp1c3QgYW4gYXJyYXksIGl0J3MgYWN0dWFsbHkgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgZmllbGRzIG5hbWVkICdrZXknIGFuZCAndmFsdWVzJ1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0pLnRvQXJyYXlfcV8oKS5tYXAobSA9PiBtLmtleSkgLy8gc2VlIHRoZSBrZXlzIG9mIGVhY2ggZ3JvdXBgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMiA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSkudG9BcnJheV9xXygpLm1hcChtID0+IG0ua2V5KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEyLnNlcXVlbmNlRXF1YWxfcV8oW1wiQVwiLCBcIkNcIiwgXCJCXCJdKSwgXCJBY2Nlc3Mga2V5IG9mIGdyb3VwaW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1LnRvVXBwZXJDYXNlKCkpIC8vIGNhbiB0YWtlIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIHRvIGJlIGFwcGxpZWQgdG8gZ3JvdXBpbmcgZWxlbWVudHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1LnRvVXBwZXJDYXNlKCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDEzKSA9PT0gYFtbXCJBUFBMRVwiLFwiQVBSSUNPVFwiXSxbXCJDQU5URUxPVVBFXCJdLFtcIkJBTkFOQVwiLFwiQkxVRUJFUlJZXCJdXWAsIFwiR3JvdXBCeSB3aXRoIGVsZW1lbnQgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1LnRvVXBwZXJDYXNlKCksIChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCkgLy8gY2FuIHRha2UgYW4gb3B0aW9uYWwgb3V0cHV0IHRyYW5zZm9ybWF0aW9uIHRvIGJlIHByb2plY3RlZCBvbnRvIHRoZSByZXR1cm5lZCBncm91cGluZ3NcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTQgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHUgPT4gdS50b1VwcGVyQ2FzZSgpLCAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE0LnNlcXVlbmNlRXF1YWxfcV8oW1wiQSBpcyBmb3IgQVBQTEUgYW5kIEFQUklDT1RcIiwgXCJDIGlzIGZvciBDQU5URUxPVVBFXCIsIFwiQiBpcyBmb3IgQkFOQU5BIGFuZCBCTFVFQkVSUllcIl0pLCBcIkdyb3VwQnkgd2l0aCBvdXRwdXQgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1ICsgJyEnLCAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gLCAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpKSAvLyBjYW4gdGFrZSBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNSA9IFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1ICsgJyEnLCAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gLCAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlISBhbmQgQmFuYW5hISBhbmQgQXByaWNvdCEgc3RhcnQgd2l0aCBjYXBpdGFsXCIsIFwiY2FudGVsb3VwZSEgYW5kIGJsdWViZXJyeSEgc3RhcnQgd2l0aCBsb3dlcmNhc2VcIl0pLCBcIkdyb3VwQnkgd2l0aCBjdXN0b20gZXF1YWxpdHlcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIk5vdyBoZXJlJ3Mgd2hlcmUgaXQgdHVybnMgaW50byBhIHJlYWwgbWVzcy4gVXAgdW50aWwgbm93LCB3ZSd2ZSBqdXN0IGJlZW4gYWRkaW5nIGEgbmV3IHBhcmFtZXRlciBhdCB0aGUgZW5kLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQnV0IHdoYXQgaWYgeW91IHdhbnQgdG8gdXNlIG9ubHkgdGhlIGN1c3RvbSBlcXVhbGl0eSwgYnV0IG5vdGhpbmcgZWxzZS4gRWFzeSB0byBkbyBpbiBDIy4gTm90IHNvIGVhc3kgaW4gSlMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJUeXBlc2NyaXB0IGhhcyBzb21lIHNtYWxsIGFtb3VudCBvZiBvdmVybG9hZCBkZWNsYXJhdGlvbiwgYnV0IGl0J3MgdmVyeSB3ZWFrIGFuZCBkb2Vzbid0IGVtaXQgYW55dGhpbmcuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFN1cmUsIHlvdSBjb2RlIHRoZSBmb2xsb3dpbmc6YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uPzogZnVuY3Rpb24pO2ApO1xuICAgICAgICAgICAgdGhpcy5sb2coYGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uPzogZnVuY3Rpb24pO2ApO1xuICAgICAgICAgICAgdGhpcy5sb2coYEJ1dCBqYXZhc2NyaXB0IHNlZXMgb25seSBmdW5jdGlvbiBncm91cEJ5X3FfKGZ1bmN0aW9uLCBmdW5jdGlvbikuYCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnV2hpY2ggb3ZlcmxvYWQgd2FzIGl0PyBKYXZhc2NyaXB0IGhhcyBubyBpZGVhIHdoYXRzb2V2ZXIuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlNvIGlmIHlvdSB3YW50IHRvIHNraXAgcGFyYW1ldGVycywgeW91IGhhdmUgdG8gZW5jbG9zZSB0aGVtIGluIG9iamVjdHMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkgLy8gY3VzdG9tIGVxdWFsaXR5IGJ1dCBubyBlbGVtZW50IG9yIG91dHB1dCBmdW5jdGlvbnNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNiA9IFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTYpID09PSBgW1tcIkFwcGxlXCIsXCJCYW5hbmFcIixcIkFwcmljb3RcIl0sW1wiY2FudGVsb3VwZVwiLFwiYmx1ZWJlcnJ5XCJdXWAsICdHcm91cEJ5IHdpdGggb25seSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gIH0pIC8vIGN1c3RvbSBvdXRwdXQgcHJvamVjdG9yIG9ubHlcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3LnNlcXVlbmNlRXF1YWxfcV8oW1wiQSBpcyBmb3IgQXBwbGUgYW5kIEFwcmljb3RcIiwgXCJDIGlzIGZvciBDYW50ZWxvdXBlXCIsIFwiQiBpcyBmb3IgQmFuYW5hIGFuZCBCbHVlYmVycnlcIl0pLCBcIkdyb3VwQnkgd2l0aCBvbmx5IHByb2plY3RvclwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkgLy8gZXZlcnl0aGluZyBidXQgZWxlbWVudCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOCA9IFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4LnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGUgYW5kIEJhbmFuYSBhbmQgQXByaWNvdCBzdGFydCB3aXRoIGNhcGl0YWxcIiwgXCJjYW50ZWxvdXBlIGFuZCBibHVlYmVycnkgc3RhcnQgd2l0aCBsb3dlcmNhc2VcIl0pLCBcIkdyb3VwQnkgd2l0aCBubyBlbGVtZW50IGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiBxID0+IHEgKyAnIScgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkgLy8gZXZlcnl0aGluZyBidXQgb3V0cHV0IHByb2plY3RvcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE5ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHEgPT4gcSArICchJyB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxOSkgPT09IGBbW1wiQXBwbGUhXCIsXCJCYW5hbmEhXCIsXCJBcHJpY290IVwiXSxbXCJjYW50ZWxvdXBlIVwiLFwiYmx1ZWJlcnJ5IVwiXV1gLCAnR3JvdXBCeSB3aXRoIG5vIG91dHB1dCBmdW5jdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogdSA9PiB1LnRvVXBwZXJDYXNlKCkgfSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkgLy8gb2JqZWN0IG5hbWVzIHVzZWQgYnV0IG90aGVyd2lzZSBzYW1lIGFzIGdyb3VwQnkoa2V5LCBlbGVtZW50LCBvdXRwdXQpXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIwID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdS50b1VwcGVyQ2FzZSgpIH0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLnNlcXVlbmNlRXF1YWxfcV8oW1wiQSBpcyBmb3IgQVBQTEUgYW5kIEFQUklDT1RcIiwgXCJDIGlzIGZvciBDQU5URUxPVVBFXCIsIFwiQiBpcyBmb3IgQkFOQU5BIGFuZCBCTFVFQkVSUllcIl0pLCBcIkdyb3VwQnkgd2l0aCBvYmplY3QgbmFtZXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiB1ID0+IHUgKyAnIScgfSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pIC8vIGV2ZXJ5dGhpbmcgc3VwcGxpZWQsIGp1c3QgaW4gb2JqZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFsnQXBwbGUnLCAnY2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdibHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiB1ID0+IHUgKyAnIScgfSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7ZC5qb2luKCcgYW5kICcpfSBzdGFydCB3aXRoICR7KGsudG9VcHBlckNhc2UoKSA9PT0gayA/ICdjYXBpdGFsJyA6ICdsb3dlcmNhc2UnKX1gIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIxLnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGUhIGFuZCBCYW5hbmEhIGFuZCBBcHJpY290ISBzdGFydCB3aXRoIGNhcGl0YWxcIiwgXCJjYW50ZWxvdXBlISBhbmQgYmx1ZWJlcnJ5ISBzdGFydCB3aXRoIGxvd2VyY2FzZVwiXSksICdHcm91cEJ5IGFsbCBpbiBvYmplY3RzJyk7XG4gICAgICAgICAgICAvLyBUZXN0IHN0YXRpYyBtZXRob2RzIG9uIEVudW1lcmFibGUgKG5vdCBwYXJ0IG9mIElRdWVyeWFibGUsIGJ1dCBzdGlsbCBpbiBTeXN0ZW0uTGlucSkuLi5cbiAgICAgICAgICAgIHRoaXMubG9nKGBFbnVtZXJhYmxlLnJhbmdlX3FfKDIsIDEwKSAvLyBTeXN0ZW0uTGlucSBhbHNvIGluY2x1ZGVzIHR3byBzdGF0aWMgbm9uLWV4dGVuc2lvbiBtZXRob2RzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjIgPSBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5yYW5nZV9xXygyLCAxMCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjIuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXSksICdSYW5nZSgpIHJldHVybnMgYSByYW5nZSBvZiBudW1iZXJzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgRW51bWVyYWJsZS5yZXBlYXRfcV8oXCJzcGFtXCIsIDQpIC8vIHRoaXMgaXMgdGhlIG90aGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjMgPSBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5yZXBlYXRfcV8oXCJzcGFtXCIsIDQpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIzLnNlcXVlbmNlRXF1YWxfcV8oW1wic3BhbVwiLCBcInNwYW1cIiwgXCJzcGFtXCIsIFwic3BhbVwiXSksICdSZXBlYXQoKSByZXBlYXRzIGFuIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTm9ybWFsbHkgdG8gY291bnQgYW4gZW51bWVyYWJsZSwgeW91IG11c3QgZW51bWVyYXRlIGl0LCBtYXRlcmlhbGl6aW5nIGl0cyBkYXRhLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTElOUSBwcm92aWRlcyB0aGlzIG1ldGhvZCwgdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50KCksIHdoaWNoIHRyaWVzIHRvIGdldCB0aGUgY291bnQgZnJvbSB0aGUgdW5kZXJseWluZyBvYmplY3QsIHdoZW4gcG9zc2libGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkl0IHdvcmtzIHVzaW5nIGFuIG91dCB2YXIsIGxpa2UgYWxsIFRyeUdldFNvbWV0aGluZygpIG1ldGhvZHMgaW4gQyMuIFRoaXMgZG9lc24ndCBleGlzdCBpbiBKUy4gVG8gbWFrZSBpdCB3b3JrLCB5b3UgbmVlZCB0byBwYXNzIGFuIG9iamVjdCwgd2hpY2ggaXMgdXBkYXRlZC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3QgY291bnRWYWwgPSB7IHZhbHVlOiAwIH0gLy8gbm93IFwidmFsdWVcIiBjYW4gYmUgdXBkYXRlZCBhbmQgdGhlIHJlZmVyZW5jZSByZXR1cm5lZGApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgY29uc3QgY291bnRWYWwgPSB7IHZhbHVlOiAwIH07XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCkgLy8gc2hvdWxkIHJldHVybiB0cnVlIGFuZCA0LCBiZWNhdXNlIHRoaXMgaXMgYW4gYXJyYXlgKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50MSA9IFsxLCAyLCAzLCA0XS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpO1xuICAgICAgICAgICAgdGhpcy5sb2coW2NvdW50MSwgY291bnRWYWwudmFsdWVdLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChjb3VudDEgJiYgY291bnRWYWwudmFsdWUgPT09IDQsIFwidHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50IHJldHVybmVkIGFycmF5IGNvdW50XCIpO1xuICAgICAgICAgICAgY291bnRWYWwudmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IHNxdWFyZXMgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKHMgPT4gcyAqKiAyKTsgc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpIC8vIG5vdCBwb3NzaWJsZSBhcyB0aGUgYXJyYXkgaXMgYnVyaWVkIHVuZGVyIGEgZ2VuZXJhdG9yYCk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVzID0gWzEsIDIsIDMsIDRdLnNlbGVjdF9xXyhzID0+IE1hdGgucG93KHMsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50MiA9IHNxdWFyZXMudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBmYWxzZSwgMFxuICAgICAgICAgICAgdGhpcy5sb2coW2NvdW50MiwgY291bnRWYWwudmFsdWVdLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghY291bnQyICYmIGNvdW50VmFsLnZhbHVlID09PSAwLCAndHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50IGNvdWxkIG5vdCBnZXQgZnJvbSBnZW5lcmF0b3InKTtcbiAgICAgICAgICAgIC8vIE5vdyB3ZSd2ZSBnb25lIGFuZCBtYXRlcmlhbGl6ZWQgaXQgc28gd2UgY2FuIGdldCB0aGUgY291bnQgKGl0J3MgYWN0dWFsbHkgdGhlIGVudW1lcmF0ZWQgY291bnQpXG4gICAgICAgICAgICB0aGlzLmxvZyhgc3F1YXJlcy5jb3VudF9xXygpOyBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7IC8vIE5vdyB0aGF0IGl0J3MgYmVlbiBlbnVtZXJhdGVkLCB5b3UgY2FuIGdldCB0aGUgY291bnQgd2l0aG91dCBlbnVtZXJhdGluZyBpdCBhZ2FpbmApO1xuICAgICAgICAgICAgY29uc3QgZW51bWVyYXRlZENvdW50ID0gc3F1YXJlcy5jb3VudF9xXygpO1xuICAgICAgICAgICAgY29uc3QgY291bnQzID0gc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpO1xuICAgICAgICAgICAgdGhpcy5sb2coW2NvdW50MywgY291bnRWYWwudmFsdWUsIGVudW1lcmF0ZWRDb3VudF0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGNvdW50MyAmJiBjb3VudFZhbC52YWx1ZSA9PT0gZW51bWVyYXRlZENvdW50LCAndHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50IGNvdWxkIGdldCBmcm9tIGJhY2t1cCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJMSU5RIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byBleGVjdXRlIGFuIG9wZXJhdGlvbiB3aXRob3V0IHJldHVybmluZyByZXN1bHRzLCBidXQgSk9JTiBwcm92aWRlcyBmb3JFYWNoXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJjb25zdCBmb3JFYWNoVGVzdDogc3RyaW5nW10gPSBbXTtcXG5bMSwgMiwgM10uZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7IGZvckVhY2hUZXN0LnB1c2goYCR7aWR4fT0ke2l0ZW19YCk7IH0pO1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGZvckVhY2hUZXN0ID0gW107XG4gICAgICAgICAgICBbMSwgMiwgM10uZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yRWFjaFRlc3QucHVzaChgJHtpZHh9PSR7aXRlbX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2coZm9yRWFjaFRlc3QsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGZvckVhY2hUZXN0LnNlcXVlbmNlRXF1YWxfcV8oW1wiMD0xXCIsIFwiMT0yXCIsIFwiMj0zXCJdKSwgXCJGb3JFYWNoIGxvb3BlZCB0aHJvdWdoIGl0ZXJhYmxlXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDA0ID0gVGVzdDAwNDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ1NpbmdsZXRvbiBSZXN1bHRzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPk9uY2UgeW91IGhhdmUgYSBxdWVyeSwgeW91IG1pZ2h0IHdhbnQgdG8gcHJvY2VzcyB0aGF0IHF1ZXJ5IHRvIGdldCBhIHJlc3VsdCwgd2hldGhlciBpdCBiZSBjb3VudGluZyB0aGUgcm93cywgZmluZGluZyB0aGUgbWluIG9yIG1heCB2YWx1ZSwgb3IgcGlja2luZyB0aGUgZmlyc3Qgb3IgbGFzdC4gVGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGVudW1lcmF0ZSB0aGUgZGF0YXNldCAobWF0ZXJpYWxpemluZyB0aGUgZW51bWVyYWJsZSkgdG8gZmluZCB0aGUgcmVzdWx0LjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwNSBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRfcV8oMykgLy8gbGlrZSBhcnJheVszXWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRfcV8oMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMSA9PT0gJ3dpbm5lcicsICdFbGVtZW50IGF0IDNyZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDMpIC8vIHdvcmtzIHRoZSBzYW1lIHdheSAuLi5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMiA9IFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIgPT09ICd3aW5uZXInLCAnRWxlbWVudEF0RGVmYXVsdCAzcmQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdE9yRGVmYXVsdF9xXygxMywgJ2RlZmF1bHQnKSAvLyBlbGVtZW50QXRfcV8oMTMpIHdvdWxkIGhhdmUgdGhyb3duYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdE9yRGVmYXVsdF9xXygxMywgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzID09PSAnZGVmYXVsdCcsICdFbGVtZW50QXQgd2l0aCBkZWZhdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDQsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSkgLy8gY2hlY2sgaWYgYWxsIGFyZSBvZGRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsxLCAzLCA0LCA1XS5hbGxfcV8obnVtID0+IG51bSAlIDIgPT09IDEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA0LCAnQWxsIGlzIGZhbHNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSkgLy8gY2hlY2sgaWYgYWxsIGFyZSBvZGRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9IFsxLCAzLCA1XS5hbGxfcV8obnVtID0+IG51bSAlIDIgPT09IDEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDUsICdBbGwgaXMgdHJ1ZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5hbnlfcV8oKSAvLyBkb2VzIHNlcXVlbmNlIGhhdmUgYW55dGhpbmdgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFsxLCAyLCAzXS5hbnlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA2LCAnQW55IHdpdGggZnVsbCBhcnJheScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5hbnlfcV8obnVtID0+IG51bSAlIDIgPT09IDApIC8vIEFueSBjYW4gdGFrZSBhIGZpbHRlciBmdW5jdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5hbnkoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWzEsIDIsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNywgJ0FueSB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzXS5hbnlfcV8obnVtID0+IG51bSAlIDIgPT09IDApIC8vIHNob3VsZCBiZSBmYWxzZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gWzEsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDgsICdBbnkgd2l0aCBmaWx0ZXIgYW5kIG5vIG1hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDMpIC8vIGlzIGVsZW1lbnQgaW4gc2VxdWVuY2VgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsxLCAyLCAzXS5jb250YWluc19xXygzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LCAnQ29udGFpbnMgd2l0aCBtYXRjaCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5jb250YWluc19xXyg0KSAvLyBubyBtYXRjaGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEwID0gWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDQpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDEwLCAnQ29udGFpbnMgd2l0aCBubyBtYXRjaCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAyLCAtMl0uY291bnRfcV8oKSAvLyA0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTEgPSBbMSwgMiwgMiwgLTJdLmNvdW50X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMSA9PT0gNCwgJ0NvdW50IGEgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgN10uY291bnRfcV8obnVtID0+IG51bSAlIDIgPT09IDApIC8vIGNvdW50IGNhbiB0YWtlIGEgZmlsdGVyIGNvbmRpdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5jb3VudCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTIgPSBbMSwgMiwgMywgNCwgNSwgNiwgN10uY291bnRfcV8obnVtID0+IG51bSAlIDIgPT09IDApO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTIgPT09IDMsICdDb3VudCB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcInhcIiwgXCJ5XCIsIFwielwiXS5sb25nQ291bnRfcV8oKSAvLyB1c2UgbG9uZ2NvdW50IHRvIGNvdW50IG1vcmUgdGhhbiBtYXggaW50ZWdlciAuLi4gb25seSB3b3JrcyBpbiBFQ01BU2NyaXB0IDIwMjAgb3IgbmV3ZXIgLi4uIHByb2JhYmx5IHRha2VzIGEgbG9uZyB0aW1lYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTMgPSBbXCJ4XCIsIFwieVwiLCBcInpcIl0ubG9uZ0NvdW50X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTMudG9TdHJpbmcoKSwgdHJ1ZSk7IC8vIGJ1aWx0LWluIHRvSlNPTiBjYW4ndCBzZXJpYWxpemUgYmlnaW50XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEzLnRvU3RyaW5nKCkgPT09IFwiM1wiLCBcIkxvbmdDb3VudCBhIHNlcXVlbmNlXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcInhcIiwgXCJ5XCIsIFwielwiLCBcIlhcIl0ubG9uZ0NvdW50X3FfKHEgPT4gcS50b0xvd2VyQ2FzZSgpID09PSBcInhcIikgLy8gYWxzbyB0YWtlcyBhIGZpbHRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE0ID0gW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwiWFwiXS5sb25nQ291bnRfcV8ocSA9PiBxLnRvTG93ZXJDYXNlKCkgPT09IFwieFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNC50b1N0cmluZygpLCB0cnVlKTsgLy8gYnVpbHQtaW4gdG9KU09OIGNhbid0IHNlcmlhbGl6ZSBiaWdpbnRcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTQudG9TdHJpbmcoKSA9PT0gXCIyXCIsIFwiTG9uZ0NvdW50IHdpdGggZmlsdGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5zdW1fcV8oKSAvLyBzdW0gdGhlIHZhbHVlc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE1ID0gWzEsIDIsIDMsIDQsIDVdLnN1bV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTUgPT09IDE1LCAnU3VtIHNlcXVlbmNlIHZhbHVlcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5zdW1fcV8ocSA9PiBxICogMikgLy8gY2FuIGFwcGx5IGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gYmVmb3JlIHN1bW1pbmdgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNiA9IFsxLCAyLCAzLCA0LCA1XS5zdW1fcV8ocSA9PiBxICogMik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNiA9PT0gMzAsICdTdW0gd2l0aCB0cmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzLCA0LCA0XS5hdmVyYWdlX3FfKCkgLy8gMyAuLi4gdGhyb3dzIGlmIGVtcHR5LCBjYW4ndCBkaXZpZGUgYnkgemVyb2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE3ID0gWzEsIDMsIDQsIDRdLmF2ZXJhZ2VfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3ID09PSAzLCAnQXZlcmFnZSBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdF9xXygpIC8vIDJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOCA9IFsyLCAzLCA0XS5maXJzdF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTggPT09IDIsICdGaXJzdCBpbiBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIHJldHVybiA0XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDRdLmZpcnN0X3FfKHEgPT4gcSA+IDMpIC8vIGNhbiB0YWtlIGEgZmlsdGVyIGZ1bmN0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmZpcnN0KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOSA9IFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE5ID09PSA0LCAnRmlyc3Qgd2l0aCBmaWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMTAwKSAvLyB0aGlzIHdpbGwgdGhyb3cgYmVjYXVzZSB0aGVyZSBhcmUgbm8gbWF0Y2hlc2ApO1xuICAgICAgICAgICAgbGV0IHRocm93MSA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHRocm93MSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3cxLCAnRmlyc3QgdGhyZXcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwLCAtMSkgLy8gdGhpcyB3aWxsIHJldHVybiB0aGUgdmFsdWUgcHJvdmlkZWQgKG9yIHVuZGVmaW5lZCBpZiBub25lKSBpbnN0ZWFkIG9mIHRocm93aW5nYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbMiwgMywgNF0uZmlyc3RPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMCA9PT0gLTEsICdGaXJzdE9yRGVmYXVsdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiU29tZXRpbWVzIHRoaXMgQVBJIGlzbid0IGFzIGNsZWFuIGFzIHRoZSBDIyBBUEkgYmVjYXVzZSB0eXBlIGNoZWNraW5nIGluIEpTIGlzIGFtYmlndW91cyBhbmQgYmVjYXVzZSBwYXJhbWV0ZXJzIGRvbid0IGFjdHVhbGx5IGhhdmUgbmFtZXMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJJbiB0aGlzIGNhc2UsIHdoZW4gY2FsbGVkIHdpdGggYSBzaW5nbGUgaW5wdXQsIGl0J3Mgbm90IHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIG9wdGlvbmFsIGZpbHRlciBvciB0aGUgb3B0aW9uYWwgZGVmYXVsdC4gSXQncyBhc3N1bWVkIHRvIGJlIHRoZSBmaWx0ZXIuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAtMiB9KSAvLyBVc2UgdGhpcyBmb3JtYXQgdG8gcGFzcyBkZWZhdWx0IGJ1dCBubyBmaWx0ZXIuYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbXS5maXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogLTIgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMSA9PT0gLTIsIFwiRmlyc3RPckRlZmF1bHQgd2l0aCBvbmx5IGRlZmF1bHRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKCkgLy8gY2FuJ3QgaGF2ZSBmaXJzdCB3aXRob3V0IGxhc3RgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjIgPT09ICdsYXN0JywgJ0xhc3Qgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBcImZvdXJ0aFwiXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKHEgPT4gcVswXSA9PT0gXCJmXCIpIC8vIGxhc3QgY2FuIGFsc28gdGFrZSBmaWx0ZXIsIHNhbWUgYXMgd2hlcmUoZnVuYykubGFzdCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8ocSA9PiBxWzBdID09PSBcImZcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMyA9PT0gJ2ZvdXJ0aCcsICdMYXN0IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXS5sYXN0X3FfKHEgPT4gcS5sZW5ndGggPiAxMDApIC8vIGp1c3QgbGlrZSB3aXRoIGZpcnN0KCkgdGhpcyB3aWxsIHRocm93YCk7XG4gICAgICAgICAgICBsZXQgdGhyb3cyID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJ10ubGFzdF9xXyhxID0+IHEubGVuZ3RoID4gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYikge1xuICAgICAgICAgICAgICAgIHRocm93MiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3cyLCBcIkxhc3QgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdE9yRGVmYXVsdF9xXyhxID0+IHFbMF0gPT09IFwiWFwiLCBcImRlZmF1bHRcIikgLy8gZG9lc24ndCB0aHJvdywgaW5zdGVhZCByZXR1cm5zIGRlZmF1bHRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNCA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdE9yRGVmYXVsdF9xXyhxID0+IHFbMF0gPT09IFwiWFwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNCA9PT0gJ2RlZmF1bHQnLCAnTGFzdE9yRGVmYXVsdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXS5sYXN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiBcImRlZmF1bHRcIiB9KSAvLyBqdXN0IGxpa2Ugd2l0aCBmaXJzdCwgcGFzc2luZyBvbmx5IGRlZmF1bHQgdmFsdWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNSA9IFtdLmxhc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiZGVmYXVsdFwiIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjUgPT09ICdkZWZhdWx0JywgJ0xhc3RPckRlZmF1bHQgd2l0aCBvbmx5IGRlZmF1bHQnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSAxXG4gICAgICAgICAgICB0aGlzLmxvZyhgWzFdLnNpbmdsZV9xXygpIC8vIHJldHVybnMgcmVjb3JkIGlmIHRoZXJlIGlzIGV4YWN0bHkgb25lLCB0aHJvd2luZyBpZiAwIG9yIG1vcmUgdGhhbiBvbmVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNiA9IFsxXS5zaW5nbGVfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI2ID09PSAxLCAnU2luZ2xlIHJlY29yZCBpbiBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyXS5zaW5nbGVfcV8ocSA9PiBxICUgMiA9PT0gMCkgLy8gdGFrZXMgYSBmaWx0ZXIgZnVuY3Rpb24sIHNhbWUgYXMgd2hlcmUoZnVuYykuc2luZ2xlKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNyA9IFsxLCAyXS5zaW5nbGVfcV8ocSA9PiBxICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNyA9PT0gMiwgJ1NpbmdsZSB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxIDwgMykgLy8gc2luZ2xlIHRocm93cyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlc2ApO1xuICAgICAgICAgICAgbGV0IHRocm93NCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbMSwgMiwgMywgNF0uc2luZ2xlX3FfKHEgPT4gcSA8IDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9jKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzQsICdTaW5nbGUgdGhyb3dzIHdoZW4gbXVsdGlwbGUgcmV0dXJuZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0uc2luZ2xlX3FfKHEgPT4gcSA+IDEwMDAwKSAvLyBMaWtlIGZpcnN0KCkgYW5kIGxhc3QoKSwgc2luZ2xlKCkgdGhyb3dzIG9uIGFuIGVtcHR5IHNlcXVlbmNlYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3czID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyXS5zaW5nbGVfcV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZCkge1xuICAgICAgICAgICAgICAgIHRocm93MyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3czLCAnU2luZ2xlIHRocm93cyBvbiBlbXB0eSBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgbGV0IHRocm93NSA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBbMSwgMiwgMywgNF0uc2luZ2xlX3FfKHEgPT4gcSA+IDEwMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZSkge1xuICAgICAgICAgICAgICAgIHRocm93NSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3c1LCAnU2luZ2xlIHRocm93cyBvbiBlbXB0eSBzZXF1ZW5jZSB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS5zaW5nbGVPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwMCwgLTEpIC8vIHNpbmdsZU9yRGVmYXVsdCBzdXBwbGllcyBkZWZhdWx0IHZhbHVlIGZvciBlbXB0eSBzZXF1ZW5jZSwgc3RpbGwgdGhyb3dzIGlmIG11bHRpcGxlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjggPSBbMSwgMiwgMywgNF0uc2luZ2xlT3JEZWZhdWx0X3FfKHEgPT4gcSA+IDEwMDAsIC0xKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI4ID09PSAtMSwgXCJEZWZhdWx0IHJldHVybmVkIGZvciBzaW5nbGVPckRlZmF1bHRcIik7XG4gICAgICAgICAgICBsZXQgdGhyb3c2ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVPckRlZmF1bHRfcV8ocSA9PiBxICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2YpIHtcbiAgICAgICAgICAgICAgICB0aHJvdzYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRocm93NiwgXCJTaW5nbGVPckRlZmF1bHQgc3RpbGwgdGhyb3dzIG9uIG11bHRpcGxlXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA3LCA2LCA0LCAxXS5tYXhfcV8oKSAvLyA3IGlzIG1heGltdW1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOSA9IFsyLCAzLCA1LCA3LCA2LCA0LCAxXS5tYXhfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI5ID09PSA3LCAnTWF4IHJldHVybnMgbWF4aW11bScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0LCAxXS5tYXhfcV8ocSA9PiBxICogcSkgLy8gY2FuIHRha2UgYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBhcHBsaWVkIGJlZm9yZSBtYXhpbXVtLCBzYW1lIGFzIHNlbGVjdChmdW5jKS5tYXgoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMwID0gWzIsIDMsIDUsIDYsIDQsIDFdLm1heF9xXyhxID0+IHEgKiBxKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDMwID09PSAzNiwgJ01heCByZXR1cm5lZCB3aXRoIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIk1heCBjYW4gdGFrZSBhIGN1c3RvbSBjb21wYXJlciB0aGF0IHJldHVybnMgMSBpZiB0aGUgZmlyc3QgdmFsdWUgaXMgZ3JlYXRlciwgLTEgaXMgdGhlIHNlY29uZCwgZWxzZSAwXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IGlnbm9yZUV2ZW5Db21wYXJlciA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgeCA9IHggJSAyID09PSAwID8gMCA6IHg7XG4gICAgICAgICAgICAgICAgeSA9IHkgJSAyID09PSAwID8gMCA6IHk7XG4gICAgICAgICAgICAgICAgaWYgKHggPiB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGlnbm9yZUV2ZW5Db21wYXJlciA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgeCA9IHggJSAyID09PSAwID8gMCA6IHg7XG4gICAgICAgICAgICAgICAgeSA9IHkgJSAyID09PSAwID8gMCA6IHk7XG4gICAgICAgICAgICAgICAgaWYgKHggPiB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heF9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKSAvLyBtYXggbm90IGNvdW50aW5nIGV2ZW5zYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzEgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzMSA9PT0gNSwgJ01heCB3aXRoIGN1c3RvbSBjb21wYXJlciBhbmQgdHJhbnNmb3JtYXRpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHtjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXIgfSkgLy8gY3VzdG9tIGNvbXBhcmVyIGNhbiBiZSBzZW50IGFzIGZpcnN0IHBhcmFtZXRlciBieSBwdXR0aW5nIGluIElDb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMyID0gWzIsIDMsIDUsIDYsIDQsIDFdLm1heF9xXyh7XG4gICAgICAgICAgICAgICAgY29tcGFyZTogaWdub3JlRXZlbkNvbXBhcmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDMyID09PSA1LCAnTWF4IHdpdGggY3VzdG9tIGNvbXBhcmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4QnlfcV8ocSA9PiBxLm4pIC8vIG1heEJ5IHVzZXMgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24sIGNvbXBhcmVzIHRoZSBrZXlzLCBidXQgcmV0dXJucyB0aGUgZWxlbWVudGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMzID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4QnlfcV8ocSA9PiBxLm4pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzMubiA9PT0gNiwgXCJNYXhCeSB3aXRoIGtleSBsb29rdXBcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4QnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcikgLy8gbWF4QnkgYWxzbyB0YWtlcyBjdXN0b20gY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNCA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heEJ5X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzQubiA9PT0gNSwgJ01heEJ5IHdpdGggY3VzdG9tIGNvbXBhcmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1pbl9xXygpIC8vIDEgaXMgbWluaW11bWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM1ID0gWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1pbl9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzUgPT09IDEsICdNaW4gcmV0dXJucyBtaW5pbXVtJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDYsIDRdLm1pbl9xXyhxID0+IHEgKiBxKSAvLyBtaW4gYWxzbyB0YWtlcyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiwgc2FtZSBhcyBzZWxlY3QoZnVuYykubWluKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNiA9IFsyLCAzLCA1LCA2LCA0XS5taW5fcV8ocSA9PiBxICogcSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNiA9PT0gNCwgJ01pbiB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgY29uc3QgaWdub3JlRXZlbkNvbXBhcmVyMiA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgeCA9IHggJSAyID09PSAwID8gMTEwIDogeDtcbiAgICAgICAgICAgICAgICB5ID0geSAlIDIgPT09IDAgPyAxMTAgOiB5O1xuICAgICAgICAgICAgICAgIGlmICh4ID4geSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA8IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSAzICh0aGUgY3VzdG9tIGNvbXBhcmVyIGZpbHRlcnMgb3V0IGV2ZW5zKVxuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbl9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyMikgLy8gbWluIGFsc28gdGFrZXMgY3VzdG9tIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzcgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5fcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcjIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzcgPT09IDMsIFwiTWluIHdpdGggY3VzdG9tIGNvbXBhcmVyIGFuZCB0cmFuc2Zvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHsgY29tcGFyZTogaWdub3JlRXZlbkNvbXBhcmVyMiB9KWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM4ID0gWzIsIDMsIDUsIDYsIDRdLm1pbl9xXyh7XG4gICAgICAgICAgICAgICAgY29tcGFyZTogaWdub3JlRXZlbkNvbXBhcmVyMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzOCA9PT0gMywgXCJNaW4gd2l0aCBjdXN0b20gY29tcGFyZXIgb25seVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5CeV9xXyhxID0+IHEubikgLy8gYWxzbyBhIG1pbkJ5IHRoYXQgdGFrZXMgYSBrZXkgc2VsZWN0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzOSA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM5Lm4gPT09IDIsIFwiTWluQnkgcmV0dXJucyBtaW4gd2l0aCBrZXkgbG9va3VwXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKSAvLyBtaW5CeSBhbHNvIHRha2VzIGEgY3VzdG9tIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDAgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5taW5CeV9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyMik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0MC5uID09PSAzLCAnTWluQnkgd2l0aCBjdXN0b20gY29tcGFyZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTWF4KCkgYW5kIE1pbigpIHRocm93IHdoZW4gY2FsbGVkIG9uIGFuIGVtcHR5IHNlcXVlbmNlLiBUbyBoYW5kbGUgdGhhdCwgSSBjcmVhdGVkIDIgSk9JTi1zcGVjaWZpYyBtZXRob2RzLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQmVjYXVzZSBvZiB0aGUgd2F5IG92ZXJsb2FkcyB3b3JrIGluIEpTLCBpZiB5b3UgYXJlbid0IHVzaW5nIGFsbCBpbnB1dHMsIGVuY2xvc2UgaW4geyBkZWZhdWx0VmFsdWUgfS5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10ubWF4T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAnZGVmYXVsdCcgfSkgLy8gc2FtZSBhcyBkZWZhdWx0SWZFbXB0eSgnZGVmYXVsdCcpLm1heCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDEgPSBbXS5tYXhPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQxID09PSAnZGVmYXVsdCcsICdtYXggdmFsdWUgb3IgZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLm1pbk9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogJ2RlZmF1bHQnIH0pIC8vIHNhbWUgYXMgZGVmYXVsdElmRW1wdHkoJ2RlZmF1bHQnKS5taW4oKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQyID0gW10ubWluT3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAnZGVmYXVsdCcgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0MiA9PT0gJ2RlZmF1bHQnLCAnbWluIHZhbHVlIG9yIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oXG4gICAgICAgICAgICAgICAgKGxvbmdlc3QsIG5leHQpID0+IG5leHQubGVuZ3RoID4gbG9uZ2VzdC5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdFxuICAgICAgICAgICAgICAgICkgLy8gYWdncmVnYXRlIGFjdHMgbGlrZSByZWR1Y2UoKSwgaW4gdGhpcyBjYXNlIHRyYWNraW5nIHRoZSBtYXggbGVuZ3RoIGJ1dCBpdCBjb3VsZCBzdW0gdXAgdGhlIHJlc3VsdHMsIGV0Y2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQzID0gWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKChsb25nZXN0LCBuZXh0KSA9PiBuZXh0Lmxlbmd0aCA+IGxvbmdlc3QubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDMgPT09ICdwYXNzaW9uZnJ1aXQnLCAnQWdncmVnYXRlIHdpdGggb25seSBmdW5jdG9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKCdiYW5hbmEnLFxuICAgICAgICAgICAgICAgIChsb25nZXN0LCBuZXh0KSA9PiBBcnJheS5mcm9tKG5leHQpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID4gQXJyYXkuZnJvbShsb25nZXN0KS5maWx0ZXIoZiA9PiBmID09PSAnbicpLmxlbmd0aCA/IG5leHQgOiBsb25nZXN0XG4gICAgICAgICAgICApIC8vIGluaXRpYWwgdmFsdWUgY2FuIGJlIHByb3ZpZGVkYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDQgPSBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsIChsb25nZXN0LCBuZXh0KSA9PiBBcnJheS5mcm9tKG5leHQpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID4gQXJyYXkuZnJvbShsb25nZXN0KS5maWx0ZXIoZiA9PiBmID09PSAnbicpLmxlbmd0aCA/IG5leHQgOiBsb25nZXN0KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0NCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQ0ID09PSAnYmFuYW5hJywgJ0FnZ3JlZ2F0ZSB3aXRoIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsXG4gICAgICAgICAgICAgICAgKGxvbmdlc3QsIG5leHQpID0+IG5leHQubGVuZ3RoID4gbG9uZ2VzdC5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdCxcbiAgICAgICAgICAgICAgICBmcnVpdCA9PiBmcnVpdC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICApIC8vIGNhbiB0YWtlIGluaXRpYWwgdmFsdWUgYW5kIGEgZnVuY3Rpb24gY2FsbGVkIHVwb24gdGhlIGZpbmFsIHJlc3VsdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDQ1ID0gWydhcHBsZScsICdtYW5nbycsICdvcmFuZ2UnLCAncGFzc2lvbmZydWl0JywgJ2dyYXBlJ10uYWdncmVnYXRlX3FfKCdiYW5hbmEnLCAobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0LCBmcnVpdCA9PiBmcnVpdC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0NSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQ1ID09PSAnUEFTU0lPTkZSVUlUJywgJ0FnZ3JlZ2F0ZSB3aXRoIGluaXRpYWwgdmFsdWUgYW5kIG91dHB1dCBmdW5jdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDA1ID0gVGVzdDAwNTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ011bHRpLVNlcXVlbmNlIFF1ZXJpZXMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+VGhlc2UgZnVuY3Rpb25zLCB3aGljaCBpbmNsdWRlIGlubmVyIGpvaW5zLCBvdXRlciBqb2lucywgY29uY2F0ZW5hdGlvbiwgYW5kIHNlbWktam9pbnMsIGNvbXBhcmUgYW5kL29yIGNvbWJpbmUgbXVsdGlwbGUgaXRlcmFibGVzLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwNiBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICB0aGlzLmxvZyhgVG8gYmUgZXF1YWwgdHdvIHNlcXVlbmNlcyBuZWVkIHRvIGJlIHRoZSBzYW1lIGxlbmd0aCBhbmQgaGF2ZSB0aGUgc2FtZSBpdGVtcyBpbiB0aGUgc2FtZSBvcmRlci5gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgM10pIC8vIGRpZmZlcmVudCBsZW5ndGhzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgM10pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAxLCBcIlNlcXVlbmNlRXF1YWwgdGVzdHMgbGVuZ3RoIDFcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSAvLyBkaWZmZXJlbnQgbGVuZ3Roc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwMiwgXCJTZXF1ZW5jZUVxdWFsIHRlc3RzIGxlbmd0aCAyXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCAxXSkgLy8gb3JkZXIgbWF0dGVyc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwMywgXCJTZXF1ZW5jZUVxdWFsIHRlc3RzIGl0ZW1zXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSkgLy8gdGhpcyBpcyBnb29kYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDQgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDQsIFwiU2VxdWVuY2VFcXVhbCBtYXRjaGVzIGl0ZW1zIGFuZCBsZW5ndGhcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpIC8vIHdpdGggYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNSA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTNdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwNSwgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdGVzdHMgbGVuZ3RoIDEnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zLCAtMV0sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpIC8vIHdpdGggYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDYsICdTZXF1ZW5jZUVxdWFsIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRlc3RzIGxlbmd0aCAyJyk7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgZmFsc2VcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zLCAtMV0sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpIC8vIHdpdGggYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNyA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDcsICdTZXF1ZW5jZUVxdWFsIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRlc3RzIGl0ZW1zJyk7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgdHJ1ZVxuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMSwgLTIsIC0zXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0xLCAtMiwgLTNdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4LCAnU2VxdWVuY2VFcXVhbCB3aXRoIGN1c3RvbSBjb21wYXJlciB0byBlcXVhdGUgYWJzb2x1dGUgdmFsdWVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDJdLmNvbmNhdF9xXyhbMywgNF0pIC8vIDEsMiwzLDRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsxLCAyXS5jb25jYXRfcV8oWzMsIDRdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzLCA0XSksIFwiQ29uY2F0IGNvbmNhdGVuYXRlcyBzZXF1ZW5jZXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSkgLy8gMSwyLDMsNCw1LDYgKGNvbmNhdGVuYXRlcyBhbmQgZGVkdXBlcylgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMCA9IFsxLCAyLCAzLCAzLCA0LCAyXS51bmlvbl9xXyhbMiwgMywgNCwgNSwgNiwgNl0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEwLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDMsIDQsIDUsIDZdKSwgXCJVbmlvbiBjb25jYXRlbmF0ZXMgYW5kIHJlbW92ZXMgZHVwbGljYXRlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgMywgNCwgMl0udW5pb25fcV8oWzIsIDMsIDQsIDUsIDYsIDZdLCAoeCwgeSkgPT4geCAlIDIgPT09IHkgJSAyKSAvLyBjdXN0b20gZXZlbi9vZGQgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMSA9IFsxLCAyLCAzLCAzLCA0LCAyXS51bmlvbl9xXyhbMiwgMywgNCwgNSwgNiwgNl0sICh4LCB5KSA9PiB4ICUgMiA9PT0geSAlIDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDExLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ3VuaW9uIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRvIG1hdGNoIGV2ZW5zL29kZHMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyB4OiAxIH0sIHsgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDIgfV0udW5pb25CeV9xXyhbeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiA1IH0sIHsgeDogNiB9LCB7IHg6IDYgfV0sIHEgPT4gcS54KSAvLyBkb2VzIGEgdW5pb24gb24ga2V5cyByZXR1cm5lZCBieSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24sIHJldHVybmluZyB0aGUgaXRlbXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMiA9IFt7IHg6IDEgfSwgeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogMiB9XS51bmlvbkJ5X3FfKFt7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDUgfSwgeyB4OiA2IH0sIHsgeDogNiB9XSwgcSA9PiBxLngpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDEyKSA9PT0gYFt7XCJ4XCI6MX0se1wieFwiOjJ9LHtcInhcIjozfSx7XCJ4XCI6NH0se1wieFwiOjV9LHtcInhcIjo2fV1gLCBcInVuaW9uQnkgcmV0dXJucyBvbmUgaXRlbSBmb3IgZWFjaCB1bmlxdWUga2V5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IHg6IDEgfSwgeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogMiB9XS51bmlvbkJ5X3FfKFt7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDUgfSwgeyB4OiA2IH0sIHsgeDogNiB9XSwgcSA9PiBxLngsICh4LCB5KSA9PiB4ICUgMiA9PT0geSAlIDIpIC8vIGN1c3RvbSBldmVuL29kZCBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEzID0gW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTMubGVuZ3RoID09PSAyICYmIHRlc3QxM1swXS54ID09PSAxICYmIHRlc3QxM1sxXS54ID09PSAyLCBcIlVuaW9uQnkgd2l0aCBjdXN0b20gY29tcGFyZXIgdG8gbWF0Y2ggZXZlbnMvb2Rkc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0EnLCAnQScsICdDJywgJ1EnLCAnQicsICdEJywgJ1gnXS5pbnRlcnNlY3RfcV8oWydXJywgJ0EnLCAnQycsICdCJywgJ00nXSkgLy8gZGVkdXBlZCByZWNvcmRzIHRoYXQgYXJlIGluIGJvdGggc2VxdWVuY2VzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTQgPSBbJ0EnLCAnQScsICdDJywgJ1EnLCAnQicsICdEJywgJ1gnXS5pbnRlcnNlY3RfcV8oWydXJywgJ0EnLCAnQycsICdCJywgJ00nXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTQuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQ1wiLCBcIkJcIl0pLCBcIkludGVyc2VjdGlvbiByZXR1cm5zIHNldCByZXN1bHQgb2YgaXRlbXMgaW4gMiBzZXF1ZW5jZXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ1dhdGVybWVsb24nLCAnQXZvY2FkbycsICdDdWN1bWJlcicsICdCZXJyeScsICdNYW5nbycsICdiLXdyb25nJ10sIHEgPT4gcVswXSkgLy8gZmluZCBkZWR1cGVkIGtleXMgdGhhdCBhcmUgaW4gYm90aCBzZXF1ZW5jZXMgYW5kIHJldHVybiBmaXJzdCBpdGVtIGZvciBlYWNoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnV2F0ZXJtZWxvbicsICdBdm9jYWRvJywgJ0N1Y3VtYmVyJywgJ0JlcnJ5JywgJ01hbmdvJywgJ2Itd3JvbmcnXSwgcSA9PiBxWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZVwiLCBcIkJhbmFuYVwiXSksIFwiaW50ZXJzZWN0QnkgcmV0dXJucyBpbnRlcnNlY3Rpb24gYnkga2V5IHNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQXJ0aWNob2tlJywgJ0NhbnRlbG91cGUnLCAnUXVpbmNlJywgJ0JhbmFuYScsICdEYXRlJywgJ1hpZ3VhJ10uaW50ZXJzZWN0QnlfcV8oWyd3YXRlcm1lbG9uJywgJ2F2b2NhZG8nLCAnY3VjdW1iZXInLCAnQmVycnknLCAnbWFuZ28nXSwgcSA9PiBxWzBdLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpIC8vIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ3dhdGVybWVsb24nLCAnYXZvY2FkbycsICdjdWN1bWJlcicsICdCZXJyeScsICdtYW5nbyddLCBxID0+IHFbMF0sICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTYuc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZVwiLCBcIkNhbnRlbG91cGVcIiwgXCJCYW5hbmFcIl0pKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMi4wLCAyLjAsIDIuMSwgMi4yLCAyLjMsIDIuNCwgMi41XS5leGNlcHRfcV8oWzIuMl0pIC8vIGRlZHVwZWQgaXRlbXMgZnJvbSBmaXJzdCBub3QgaW4gc2Vjb25kYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbMi4wLCAyLjAsIDIuMSwgMi4yLCAyLjMsIDIuNCwgMi41XS5leGNlcHRfcV8oWzIuMl0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE3LnNlcXVlbmNlRXF1YWxfcV8oWzIsIDIuMSwgMi4zLCAyLjQsIDIuNV0pLCAnRXhjZXB0IHJlbW92ZXMgaXRlbXMgZnJvbSBzZWNvbmQgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0X3FfKFt7IGE6IDIuMiB9XSwgKHEsIHIpID0+IHEuYSA9PT0gci5hKSAvLyBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOCA9IFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRfcV8oW3sgYTogMi4yIH1dLCAocSwgcikgPT4gcS5hID09PSByLmEpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMi4xLCAyLjMsIDIuNCwgMi41XSksICdFeGNlcHQgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMi4yIH1dLCBxID0+IHEuYSkgLy8gZXhjZXB0QnkgcmV0dXJucyBleGNlcHRpb24gYnkga2V5IHNlbGVjdG9yYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbeyBhOiAyLjAgfSwgeyBhOiAyLjAgfSwgeyBhOiAyLjEgfSwgeyBhOiAyLjIgfSwgeyBhOiAyLjMgfSwgeyBhOiAyLjQgfSwgeyBhOiAyLjUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMi4yIH1dLCBxID0+IHEuYSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTkubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAyLjEsIDIuMywgMi40LCAyLjVdKSwgJ0V4Y2VwdEJ5IHVzZXMga2V5IHNlbGVjdG9yJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDQgfSwgeyBhOiA1IH1dLmV4Y2VwdEJ5X3FfKFt7IGE6IDIgfV0sXG4gICAgICAgICAgICAgICAgcSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpIC8vIGN1c3RvbSBlcXVhbGl0eSB0byBtYWtlIGFsbCBldmVucyBhbmQgYWxsIG9kZHMgbG9vayB0aGUgc2FtZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIwID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDQgfSwgeyBhOiA1IH1dLmV4Y2VwdEJ5X3FfKFt7IGE6IDIgfV0sIHEgPT4gcS5hLCAocSwgcikgPT4gcSAlIDIgPT09IHIgJSAyKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMC5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzFdKSwgJ0V4Y2VwdEJ5IHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkFueW9uZSB3aXRoIFNRTCBleHBlcmllbmNlIHNob3VsZCBrbm93IHdoYXQgYW4gSW5uZXIgSm9pbiBpcy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkFuIGlubmVyIGpvaW4gbWF0Y2hlcyBldmVyeSBpdGVtIGluIHRoZSBmaXJzdCBzZXF1ZW5jZSB3aXRoIGV2ZXJ5IGl0ZW0gaW4gdGhlIHNlY29uZCBzZXF1ZW5jZSBieSBtYXRjaGluZyBrZXlzLCBhbmQgcmV0dXJucyB0aG9zZSByZWNvcmRzIHdoZXJlIHRoZSBrZXkgbWF0Y2ggaXMgdHJ1ZSwgYm90aCBpbiB0aGUgc2FtZSByb3dcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlRoZSBMSU5RIGpvaW4gcmVxdWlyZXMgeW91IHRvIHNlbmQgdHdvIHNlcXVlbmNlcywgYSBrZXkgc2VsZWN0b3IgZm9yIHNlcXVlbmNlIDEsIGEga2V5IHNlbGVjdG9yIGZvciBzZXF1ZW5jZSAyLCBhbmQgYW4gb3V0cHV0IHByb2plY3Rpb24gZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgcm93cyB0byByZXR1cm4uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1tcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZSBJc2xhbmRcIiwgXCJEdXJpYW5cIiwgXCJiLXdyb25nXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiBgJHtsWzBdfSBpcyBmb3IgJHtyfWApIC8vIGpvaW5pbmcgb24gZmlyc3QgbGV0dGVyLCByZXR1cm5pbmcgbGVmdCBmaXJzdCBsZXR0ZXIgYW5kIHJpZ2h0IGZ1bGwgd29yZCcpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIxID0gW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcImItd3JvbmdcIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBcHBsZVwiLCBcIkEgaXMgZm9yIEF2b2NhZG9cIiwgXCJDIGlzIGZvciBDYW50ZWxvdXBlIElzbGFuZFwiXSksICdKb2luIGNvbWJpbmVzIHR3byBzZXF1ZW5jZXMgcm93LXdpc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdbXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ3VjdW1iZXJcIl0uam9pbl9xXyhbXCJhcHBsZVwiLCBcImNhbnRlbG91cGUgSXNsYW5kXCIsIFwiZHVyaWFuXCIsIFwiYXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiBgJHtsWzBdfSBpcyBmb3IgJHtyfWAsIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHkgY29tcGFyZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IFtcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiY2FudGVsb3VwZSBJc2xhbmRcIiwgXCJkdXJpYW5cIiwgXCJhdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIGFwcGxlXCIsIFwiQSBpcyBmb3IgYXZvY2Fkb1wiLCBcIkMgaXMgZm9yIGNhbnRlbG91cGUgSXNsYW5kXCJdKSwgJ0pvaW4gY2FuIHRha2UgY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkluIExJTlEncyBqb2luLCB0aGUgb3V0cHV0IGZ1bmN0aW9uIGlzIHJlcXVpcmVkLiBJbiBKT0lOLCB5b3UgY2FuIGlnbm9yZSBpdC4gSWYgeW91IGRvIHNvLCBzaW1wbGUgdHVwbGVzIGFyZSByZXR1cm5lZC5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiQ2FudGVsb3VwZSBJc2xhbmRcIiwgXCJEdXJpYW5cIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KSAvLyBza2lwcGluZyB0aGUgb3V0cHV0IGZ1bmN0aW9uYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjMgPSBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjMpID09PSBgW1tcIkFwcmljb3RcIixcImFwcGxlXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl1dYCwgJ0pvaW4oKSB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYExJTlEgZG9lcyBub3QgcHJvdmlkZSBhbiBvdXRlciBqb2luIG9wZXJhdG9yLiBJdCBjYW4gYmUgZG9uZSAoaW4gYSB0cnVseSB1Z2x5IHdheSkgaW4gdGhlIHF1ZXJ5IHN5bnRheCwgYnV0IG5vdCBpbiBmbHVlbnQgbWV0aG9kc2ApO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gYnV0IEpPSU4gZG9lcyBoYXZlIGFuIG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjQpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9XWAsICdvdXRlckpvaW4gbWF0Y2hpbmcgSm9pbigpIHN5bnRheCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIiwgXCJBcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0pIC8vIGRlZmF1bHQgdHVwbGUgb3V0cHV0IGZyb20gam9pbl9xXygpIGlzIGFsc28gaGVyZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI1ID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiLCBcIkFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjUpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJBcHBsZVwiXSxbXCJBcHJpY290XCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkFwcGxlXCJdLFtcIkJhbmFuYVwiLFwiQmVycnlcIl0sW1wiQ2FudGVsb3VwZVwiLG51bGxdXWAsICdvdXRlckpvaW4gd2l0aCB0dXBsZSBvdXRwdXQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpIC8vIGN1c3RvbSBlcXVhbGl0eWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI2ID0gW1wiQXBwbGVcIiwgXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJiZXJyeVwiLCBcIndhdGVybWVsb25cIiwgXCJhdm9jYWRvXCIsIFwiYXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSwgKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNikgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJhdm9jYWRvXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJhcHBsZVwifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJhdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiYmVycnlcIn0se1wibFwiOlwiQ2FudGVsb3VwZVwifV1gLCAnb3V0ZXJKb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJiZXJyeVwiLCBcIndhdGVybWVsb25cIiwgXCJhdm9jYWRvXCIsIFwiYXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pIC8vIGN1c3RvbSBlcXVhbGl0eSBhbmQgdHVwbGUgb3V0cHV0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjcgPSBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjcpID09PSBgW1tcIkFwcGxlXCIsXCJhdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJhcHBsZVwiXSxbXCJBcHBsZVwiLFwiYXZvY2Fkb1wiXSxbXCJBcHBsZVwiLFwiYXBwbGVcIl0sW1wiQXByaWNvdFwiLFwiYXZvY2Fkb1wiXSxbXCJBcHJpY290XCIsXCJhcHBsZVwiXSxbXCJCYW5hbmFcIixcImJlcnJ5XCJdLFtcIkNhbnRlbG91cGVcIixudWxsXV1gLCAnb3V0ZXJKb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5IGFuZCB0dXBsZSBvdXRwdXQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiVGhlIGpvaW4oKSBpbiBMSU5RIGlzIGtpbmQgb2YgYSBwYWluLiBJIGFsd2F5cyBmaW5kIG15c2VsZiB3b25kZXJpbmcgd2hhdCBhcmUgdGhlIGlucHV0cywgd2hpY2ggaXMgdGhlIGZpcnN0LCB3aGljaCBpcyB0aGUgc2Vjb25kLCB3aHkgZGlkIHRoZXkgdXNlICdpbm5lcicgYW5kICdvdXRlcicgZm9yIHRoaW5ncyB0aGF0IGFyZW4ndCBpbm5lciBvciBvdXRlciwgZXRjLiBJIGtlZXAgaGF2aW5nIHRvIGdvb2dsZSBpdC4gU28gSk9JTiBjb250YWlucyBhIGZyaWVuZGx5IHZlcnNpb24gdGhhdCBjb21iaW5lcyB0d28ga2V5IHNlbGVjdG9ycyBhbmQgY3VzdG9tIGVxdWFsaXR5IGludG8gYSBzaW5nbGUgZnVuY3Rpb24uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gam9pbiBvbiBmaXJzdCBsZXR0ZXIgYW5kIHJldHVybiBvYmplY3RzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjggPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmlubmVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDI4KSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiQmVycnlcIn1dYCwgXCJCYXNpYyBpbm5lckpvaW4gaGVscGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKSAvLyByZXR1cm5zIHR1cGxlcywgb3V0cHV0IGZ1bmN0aW9uIGlzIG9wdGlvbmFsYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjkgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmlubmVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjkpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXV1gLCAnSW5uZXJKb2luIGhlbHBlciB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSBsZWZ0IG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMCkgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn1dYCwgJ0xlZnRKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ubGVmdEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0pIC8vIGFsc28gYWxsb3dzIHR1cGxlIG91dHB1dGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMxID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzEpID09PSBgW1tcIkFwcGxlXCIsXCJBdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXSxbXCJDYW50ZWxvdXBlXCIsbnVsbF1dYCwgJ0xlZnRKb2luIGhlbHBlciB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ucmlnaHRKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlcmUncyBhbHNvIGEgcmlnaHQgb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMyID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5yaWdodEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMikgPT09IGBbe1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJyXCI6XCJXYXRlcm1lbG9uXCJ9LHtcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn1dYCwgJ1JpZ2h0Sm9pbiBoZWxwZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmZ1bGxKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlcmUncyBhbHNvIGEgZnVsbCBvdXRlciBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzMgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmZ1bGxKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzMpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9LHtcInJcIjpcIldhdGVybWVsb25cIn1dYCwgJ0Z1bGxKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzXS5jcm9zc0pvaW5fcV8oWzUsIDZdLCAobCwgcikgPT4gKHsgbCwgciB9KSkgLy8gdGhlIGpvaW4gY29sbGVjdGlvbiBpc24ndCBjb21wbGV0ZSB3aXRob3V0IGEgY3Jvc3Mgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM0ID0gWzIsIDNdLmNyb3NzSm9pbl9xXyhbNSwgNl0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNCkgPT09IGBbe1wibFwiOjIsXCJyXCI6NX0se1wibFwiOjIsXCJyXCI6Nn0se1wibFwiOjMsXCJyXCI6NX0se1wibFwiOjMsXCJyXCI6Nn1dYCwgJ0Nyb3NzSm9pbiBoZWxwZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiR3JvdXBKb2luIGlzIGEgd2VpcmQgb25lIHRoYXQgc291bmRzIGxpa2UgYW5vdGhlciBjdXN0b20gbWV0aG9kLCBidXQgdGhpcyBvbmUgY29tZXMgZnJvbSBNaWNyb3NvZnQuIEEgZ3JvdXAgam9pbiBpcyBsaWtlIGEgY29tYmluYXRpb24gb2Ygb3V0ZXIgam9pbiBhbmQgaGFsZiBhIGdyb3VwQnkuIFRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIGFyZSBqb2luZWQgYW5kIHRoZW4gdGhlIHJpZ2h0IHNpZGUgaXMgZ3JvdXBlZCBvbiB0aGUgam9pbmluZyBrZXkuIElmIG5vdGhpbmcgaXMgb24gdGhlIHJpZ2h0LCB0aGUgZ3JvdXAgbGlzdCBpcyBlbXB0eVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnQXZlcmFnZScsICdBbHBoYWJldCcsICdDYXJ0b2dyYXBoZXInLCAnYy13cm9uZyddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pKSAvLyBqb2luIG9uIGZpcnN0IGxldHRlcnMgYW5kIGdyb3VwIHJpZ2h0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzUgPSBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnQXZlcmFnZScsICdBbHBoYWJldCcsICdDYXJ0b2dyYXBoZXInLCAnYy13cm9uZyddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNSkgPT09IGBbe1wid29yZFwiOlwiQXBwbGVcIixcImFsc29NYXRjaGluZ1wiOltcIkF2ZXJhZ2VcIixcIkFscGhhYmV0XCJdfSx7XCJ3b3JkXCI6XCJCYW5hbmFcIixcImFsc29NYXRjaGluZ1wiOltdfSx7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkNhbnRlbG91cGVcIixcImFsc29NYXRjaGluZ1wiOltcIkNhcnRvZ3JhcGhlclwiXX1dYCwgJ0dyb3VwSm9pbiBqb2lucyBhbmQgZ3JvdXBzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdCYW5hbmEnLCAnQXBwbGUnLCAnQ2FudGVsb3VwZSddLmdyb3VwSm9pbl9xXyhbJ2F2ZXJhZ2UnLCAnQWxwaGFiZXQnLCAnY2FydG9ncmFwaGVyJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSksIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b1VwcGVyQ2FzZSgpID09PSB5LnRvVXBwZXJDYXNlKCkgfSkgLy8gY2FuIHRha2UgYSBjdXN0b20gZXF1YWxpdHlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNiA9IFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydhdmVyYWdlJywgJ0FscGhhYmV0JywgJ2NhcnRvZ3JhcGhlciddLCBxID0+IHFbMF0sIHEgPT4gcVswXSwgKHdvcmQsIGFsc29NYXRjaGluZykgPT4gKHsgd29yZCwgYWxzb01hdGNoaW5nIH0pLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9VcHBlckNhc2UoKSA9PT0geS50b1VwcGVyQ2FzZSgpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM2KSA9PT0gYFt7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiYXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkJhbmFuYVwiLFwiYWxzb01hdGNoaW5nXCI6W119LHtcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJhdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQ2FudGVsb3VwZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiY2FydG9ncmFwaGVyXCJdfV1gLCAnR3JvdXAgam9pbiB3aXRoIGN1c3RvbSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddKSAvLyB3aWxsIHJldHVybiAzIHR1cGxlcywgWzEsNV0sIFsyLDZdLCBhbmQgWzMsN10sIG9uZSBmcm9tIGVhY2ggc2VxdWVuY2UgaW4gb3JkZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNyA9IFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzNykgPT09IGBbWzEsNV0sWzIsNl0sWzMsN11dYCwgJ1ppcCB0d28gc2VxdWVuY2VzIGludG8gYSBzZXF1ZW5jZSBvZiB0dXBsZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgWzgsIDksIDEwLCAxMV0pIC8vIGNhbiB6aXAgYSB0aGlyZCB0dXBsZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM4ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sIFs4LCA5LCAxMCwgMTFdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzOCkgPT09IGBbWzEsNSw4XSxbMiw2LDldLFszLDcsMTBdXWAsICdaaXAgdGhyZWUgc2VxdWVuY2VzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sICh4LCB5KSA9PiB4ICogeSkgLy8gaW4gcGxhY2Ugb2YgdGhlIHRoaXJkIHR1cGxlIHlvdSBjYW4gc2VuZCBhIGZ1bmN0aW9uIHRoYXQgY29tYmluZXMgdGhlIGZpcnN0IDJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzOSA9IFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddLCAoeCwgeSkgPT4geCAqIHkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM5KSA9PT0gYFtbMSw1LDVdLFsyLDYsMTJdLFszLDcsMjFdXWAsICdaaXAgdHdvIHNlcXVlbmNlcyBhbmQgYSB2aXJ0dWFsIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDYgPSBUZXN0MDA2O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0SGVhZGVyXzEgPSByZXF1aXJlKFwiLi9UZXN0SGVhZGVyXCIpO1xuY29uc3QgQ29uc29sZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0NvbnNvbGVWaWV3XCIpO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jbGFzcyBUZXN0Q2FzZVZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXcgVGVzdEhlYWRlcl8xLlRlc3RIZWFkZXIodmlld01vZGVsKSk7XG4gICAgICAgIHRoaXMuY29uc29sZSA9IG5ldyBDb25zb2xlVmlld18xLkNvbnNvbGVWaWV3KCk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb25zb2xlKTtcbiAgICAgICAgLy8gTm90ZTogVGhpcyBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIERPTSBieSB0aGUgUGFnZVJvdXRlciBpbW1lZGlhdGVseSBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICAgIC8vIE5vdGhpbmcgaW4gdGhlIGluaGVyaXRpbmcgY2xhc3MgY2FuIHJlZmVyZW5jZSB0aGlzIGNvbXBvbmVudCB1bnRpbCBhZnRlciBpdCBpcyBjb25zdHJ1Y3RlZC5cbiAgICAgICAgLy8gSGVyZSB3ZSBkb24ndCBjYXJlLlxuICAgICAgICB0aGlzLnRlc3RDYXNlKCk7XG4gICAgfVxuICAgIGxvZyh0aGluZywgcmVzdWx0ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyh0aGluZywgcmVzdWx0KTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDYXNlVmlldyA9IFRlc3RDYXNlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSWNoaWdvXzEgPSByZXF1aXJlKFwiLi9JY2hpZ29cIik7XG5jbGFzcyBUZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBkZXNjcmlwdGlvbkh0bWwgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IEljaGlnb18xLmVzY2FwZUh0bWwobmFtZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkh0bWw7XG4gICAgICAgIHRoaXMudGVzdE51bWJlciA9IEljaGlnb18xLlBhZ2VSb3V0ZXIucGFyYW1zLmdldCgnaWQnKSB8fCAnPyc7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q2FzZVZpZXdNb2RlbCA9IFRlc3RDYXNlVmlld01vZGVsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RIZWFkZXIgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHZtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICh2bS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKEljaGlnb18xLnBhcmFncmFwaChgPGgxPlRlc3QgJHt2bS50ZXN0TnVtYmVyfTogJHt2bS5uYW1lfTwvaDE+YCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChJY2hpZ29fMS5zcGFuKHZtLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3RIZWFkZXIgPSBUZXN0SGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RiZW5jaFZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpZDogJ3Rlc3QtYmVuY2gnLFxuICAgICAgICAgICAgaW5uZXJIdG1sOiBgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGVzdC1saW5rXCI+UHJldmlvdXMgVGVzdDwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRlc3RIZWFkZXJcIj5UZXN0ICMwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXN0LWxpbmtcIiBkYXRhLW5leHQ9XCIxXCI+TmV4dCBUZXN0PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxsYXlvdXQtYm9keT48L2xheW91dC1ib2R5PmBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGhkciA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdEhlYWRlcicpO1xuICAgICAgICBpZiAoaGRyKSB7XG4gICAgICAgICAgICBoZHIuaW5uZXJIVE1MID0gXCJUZXN0ICNcIiArIEljaGlnb18xLlBhZ2VSb3V0ZXIubWF0Y2hlZFJvdXRlLnBhcmFtcy5nZXQoJ2lkJykgfHwgJzAnO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGFnZXIgdG8gZ28gdGhyb3VnaCB0ZXN0cy5cbiAgICAgICAgZm9yIChjb25zdCBsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVzdC1saW5rJykpIHtcbiAgICAgICAgICAgIGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvdG9OZXh0VGVzdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnb3RvTmV4dFRlc3QoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihJY2hpZ29fMS5QYWdlUm91dGVyLm1hdGNoZWRSb3V0ZS5wYXJhbXMuZ2V0KCdpZCcpIHx8ICcwJyk7XG4gICAgICAgIGxldCBuZXh0aWQ7XG4gICAgICAgIGlmIChldnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5leHQpIHtcbiAgICAgICAgICAgIG5leHRpZCA9IGlkICsgMTtcbiAgICAgICAgICAgIC8vIEF0IHRoZSBtb21lbnQsIHRoZXJlJ3MgZXhhY3RseSBvbmUgcm91dGUgcGVyIHRlc3QsIHNvIHdlIGNhbiBjaGVhcGx5IGtub3cgd2UncmUgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy8gZXZlbiB3aXRob3V0IGFueSBjb25maWd1cmF0aW9uIGZvciB0aGUgdGVzdHMgYmVpbmcgaW4gdGhpcyBjbGFzcy4gVGhpcyBpcyBhIGNoZWF0LCB0aG91Z2gsXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHdlIGNvdWxkIGVhc2lseSBoYXZlIGFkZGVkIHNvbWUgb3RoZXIgcm91dGVzLlxuICAgICAgICAgICAgaWYgKG5leHRpZCA+PSBJY2hpZ29fMS5QYWdlUm91dGVyLmFsbFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXh0aWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dGlkID0gaWQgLSAxO1xuICAgICAgICAgICAgaWYgKG5leHRpZCA8IDApIHtcbiAgICAgICAgICAgICAgICBuZXh0aWQgPSBJY2hpZ29fMS5QYWdlUm91dGVyLmFsbFJvdXRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhkciA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdEhlYWRlcicpO1xuICAgICAgICBpZiAoaGRyKSB7XG4gICAgICAgICAgICBoZHIuaW5uZXJIVE1MID0gXCJUZXN0ICNcIiArIG5leHRpZDtcbiAgICAgICAgfVxuICAgICAgICBJY2hpZ29fMS5QYWdlUm91dGVyLnJvdXRlKCd0ZXN0LycgKyBuZXh0aWQpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdGJlbmNoVmlldyA9IFRlc3RiZW5jaFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGFzc2VydCh0ZXN0LCBtZXNzYWdlKSB7XG4gICAgaWYgKCF0ZXN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQnKTtcbiAgICB9XG59XG5leHBvcnRzLmFzc2VydCA9IGFzc2VydDtcbiJdfQ==
