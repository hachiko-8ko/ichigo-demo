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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdGVwLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiLCJ0ZXN0cy9Db25zb2xlVmlldy5qcyIsInRlc3RzL0ljaGlnby5qcyIsInRlc3RzL1Byb2dyYW0uanMiLCJ0ZXN0cy9UZXN0MDAwLmpzIiwidGVzdHMvVGVzdDAwMS5qcyIsInRlc3RzL1Rlc3QwMDIuanMiLCJ0ZXN0cy9UZXN0MDAzLmpzIiwidGVzdHMvVGVzdDAwNC5qcyIsInRlc3RzL1Rlc3QwMDUuanMiLCJ0ZXN0cy9UZXN0MDA2LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3LmpzIiwidGVzdHMvVGVzdENhc2VWaWV3TW9kZWwuanMiLCJ0ZXN0cy9UZXN0SGVhZGVyLmpzIiwidGVzdHMvVGVzdGJlbmNoVmlldy5qcyIsInRlc3RzL2Fzc2VydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1ha2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL01ha2VHZW5lcmF0b3JcIik7XG5jb25zdCBBZ2dyZWdhdGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQWdncmVnYXRlXCIpO1xuY29uc3QgQWxsXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FsbFwiKTtcbmNvbnN0IEFueV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BbnlcIik7XG5jb25zdCBBcHBlbmRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQXBwZW5kXCIpO1xuY29uc3QgQXZlcmFnZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BdmVyYWdlXCIpO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ2h1bmtcIik7XG5jb25zdCBDb25jYXRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ29uY2F0XCIpO1xuY29uc3QgQ29udGFpbnNfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ29udGFpbnNcIik7XG5jb25zdCBDb3VudF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db3VudFwiKTtcbmNvbnN0IENyb3NzSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Dcm9zc0pvaW5cIik7XG5jb25zdCBEZWZhdWx0SWZFbXB0eV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EZWZhdWx0SWZFbXB0eVwiKTtcbmNvbnN0IERpc3RpbmN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Rpc3RpbmN0XCIpO1xuY29uc3QgRGlzdGluY3RCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5XCIpO1xuY29uc3QgRWxlbWVudEF0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VsZW1lbnRBdFwiKTtcbmNvbnN0IEVsZW1lbnRBdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbGVtZW50QXRPckRlZmF1bHRcIik7XG5jb25zdCBFbXB0eV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbXB0eVwiKTtcbmNvbnN0IEV4Y2VwdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FeGNlcHRcIik7XG5jb25zdCBFeGNlcHRCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FeGNlcHRCeVwiKTtcbmNvbnN0IEZpcnN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZpcnN0XCIpO1xuY29uc3QgRmlyc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRmlyc3RPckRlZmF1bHRcIik7XG5jb25zdCBGb3JFYWNoXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZvckVhY2hcIik7XG5jb25zdCBGdWxsSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GdWxsSm9pblwiKTtcbmNvbnN0IEdyb3VwQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvR3JvdXBCeVwiKTtcbmNvbnN0IEdyb3VwSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Hcm91cEpvaW5cIik7XG5jb25zdCBJbm5lckpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW5uZXJKb2luXCIpO1xuY29uc3QgSW50ZXJzZWN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ludGVyc2VjdFwiKTtcbmNvbnN0IEludGVyc2VjdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ludGVyc2VjdEJ5XCIpO1xuY29uc3QgSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Kb2luXCIpO1xuY29uc3QgTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MYXN0XCIpO1xuY29uc3QgTGFzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0XCIpO1xuY29uc3QgTGVmdEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGVmdEpvaW5cIik7XG5jb25zdCBMb25nQ291bnRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTG9uZ0NvdW50XCIpO1xuY29uc3QgTWF4XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heFwiKTtcbmNvbnN0IE1heEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heEJ5XCIpO1xuY29uc3QgTWF4T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heE9yRGVmYXVsdFwiKTtcbmNvbnN0IE1pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5cIik7XG5jb25zdCBNaW5CeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5CeVwiKTtcbmNvbnN0IE1pbk9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5PckRlZmF1bHRcIik7XG5jb25zdCBPZlR5cGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvT2ZUeXBlXCIpO1xuY29uc3QgT3V0ZXJKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL091dGVySm9pblwiKTtcbmNvbnN0IFByZXBlbmRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUHJlcGVuZFwiKTtcbmNvbnN0IFJlcGxpY2F0ZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SZXBsaWNhdGVcIik7XG5jb25zdCBSZXZlcnNlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JldmVyc2VcIik7XG5jb25zdCBSaWdodEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmlnaHRKb2luXCIpO1xuY29uc3QgU2VsZWN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlbGVjdFwiKTtcbmNvbnN0IFNlbGVjdE1hbnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VsZWN0TWFueVwiKTtcbmNvbnN0IFNlcXVlbmNlRXF1YWxfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VxdWVuY2VFcXVhbFwiKTtcbmNvbnN0IFNpbmdsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TaW5nbGVcIik7XG5jb25zdCBTaW5nbGVPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0XCIpO1xuY29uc3QgU2tpcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwXCIpO1xuY29uc3QgU2tpcExhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcExhc3RcIik7XG5jb25zdCBTa2lwV2hpbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcFdoaWxlXCIpO1xuY29uc3QgU3RlcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TdGVwXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1N1bVwiKTtcbmNvbnN0IFRha2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZVwiKTtcbmNvbnN0IFRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VMYXN0XCIpO1xuY29uc3QgVGFrZVdoaWxlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VXaGlsZVwiKTtcbmNvbnN0IFRvQ29udmVyc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVG9Db252ZXJzaW9uc1wiKTtcbmNvbnN0IFVuaW9uXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1VuaW9uXCIpO1xuY29uc3QgVW5pb25CeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9VbmlvbkJ5XCIpO1xuY29uc3QgV2hlcmVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvV2hlcmVcIik7XG5jb25zdCBaaXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvWmlwXCIpO1xuY2xhc3MgRW51bWVyYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICAvLyBUaGlzIGlzIGhhY2t5IGJ1dCBsZXRzIG1lIHNwbGl0IHRoaXMgR0lBTlQgY2xhc3MgdXAgaW50byBhIGZldyBkb3plbiBmaWxlcy5cbiAgICAgICAgdGhpcy5hZ2dyZWdhdGVfcV8gPSBBZ2dyZWdhdGVfMS5hZ2dyZWdhdGU7XG4gICAgICAgIHRoaXMuYWxsX3FfID0gQWxsXzEuYWxsO1xuICAgICAgICB0aGlzLmFueV9xXyA9IEFueV8xLmFueV9xXztcbiAgICAgICAgdGhpcy5hcHBlbmRfcV8gPSBBcHBlbmRfMS5hcHBlbmQ7XG4gICAgICAgIHRoaXMuYXZlcmFnZV9xXyA9IEF2ZXJhZ2VfMS5hdmVyYWdlO1xuICAgICAgICAvLyBUaGVyZSdzIG5vIHdheSB0byBkbyAoTnVtYmVyKWZvbyBpbiBKYXZhU2NyaXB0LCBhbmQgY2FzdGluZyBpbiBUeXBlU2NyaXB0IGlzbid0IGVtaXR0ZWQuXG4gICAgICAgIC8vIFNvIHRoZSBjYXN0IGlzIGJlaW5nIGFsaWFzZWQgdG8gc2VsZWN0IHNvIHlvdSBjYW4gZG8gZm9vLmNhc3QobnVtID0+IE51bWJlcihudW0pKVxuICAgICAgICB0aGlzLmNhc3RfcV8gPSBTZWxlY3RfMS5zZWxlY3Q7XG4gICAgICAgIHRoaXMuY2h1bmtfcV8gPSBDaHVua18xLmNodW5rO1xuICAgICAgICB0aGlzLmNvbmNhdF9xXyA9IENvbmNhdF8xLmNvbmNhdDtcbiAgICAgICAgdGhpcy5jb250YWluc19xXyA9IENvbnRhaW5zXzEuY29udGFpbnM7XG4gICAgICAgIHRoaXMuY291bnRfcV8gPSBDb3VudF8xLmNvdW50O1xuICAgICAgICB0aGlzLmNyb3NzSm9pbl9xXyA9IENyb3NzSm9pbl8xLmNyb3NzSm9pbjtcbiAgICAgICAgdGhpcy5kZWZhdWx0SWZFbXB0eV9xXyA9IERlZmF1bHRJZkVtcHR5XzEuZGVmYXVsdElmRW1wdHk7XG4gICAgICAgIHRoaXMuZGlzdGluY3RfcV8gPSBEaXN0aW5jdF8xLmRpc3RpbmN0O1xuICAgICAgICB0aGlzLmRpc3RpbmN0QnlfcV8gPSBEaXN0aW5jdEJ5XzEuZGlzdGluY3RCeTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXRfcV8gPSBFbGVtZW50QXRfMS5lbGVtZW50QXQ7XG4gICAgICAgIHRoaXMuZWxlbWVudEF0T3JEZWZhdWx0X3FfID0gRWxlbWVudEF0T3JEZWZhdWx0XzEuZWxlbWVudEF0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmVtcHR5X3FfID0gRW1wdHlfMS5lbXB0eTtcbiAgICAgICAgdGhpcy5leGNlcHRfcV8gPSBFeGNlcHRfMS5leGNlcHQ7XG4gICAgICAgIHRoaXMuZXhjZXB0QnlfcV8gPSBFeGNlcHRCeV8xLmV4Y2VwdEJ5O1xuICAgICAgICB0aGlzLmZpcnN0X3FfID0gRmlyc3RfMS5maXJzdDtcbiAgICAgICAgdGhpcy5maXJzdE9yRGVmYXVsdF9xXyA9IEZpcnN0T3JEZWZhdWx0XzEuZmlyc3RPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuZm9yRWFjaF9xXyA9IEZvckVhY2hfMS5mb3JFYWNoO1xuICAgICAgICB0aGlzLmZ1bGxKb2luX3FfID0gRnVsbEpvaW5fMS5mdWxsSm9pbjtcbiAgICAgICAgdGhpcy5ncm91cEJ5X3FfID0gR3JvdXBCeV8xLmdyb3VwQnk7XG4gICAgICAgIHRoaXMuZ3JvdXBKb2luX3FfID0gR3JvdXBKb2luXzEuZ3JvdXBKb2luO1xuICAgICAgICB0aGlzLmlubmVySm9pbl9xXyA9IElubmVySm9pbl8xLmlubmVySm9pbjtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RfcV8gPSBJbnRlcnNlY3RfMS5pbnRlcnNlY3Q7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0QnlfcV8gPSBJbnRlcnNlY3RCeV8xLmludGVyc2VjdEJ5O1xuICAgICAgICB0aGlzLmpvaW5fcV8gPSBKb2luXzEuam9pbjtcbiAgICAgICAgdGhpcy5sYXN0X3FfID0gTGFzdF8xLmxhc3Q7XG4gICAgICAgIHRoaXMubGFzdE9yRGVmYXVsdF9xXyA9IExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmxlZnRKb2luX3FfID0gTGVmdEpvaW5fMS5sZWZ0Sm9pbjtcbiAgICAgICAgdGhpcy5sb25nQ291bnRfcV8gPSBMb25nQ291bnRfMS5sb25nQ291bnQ7XG4gICAgICAgIHRoaXMubWF4X3FfID0gTWF4XzEubWF4O1xuICAgICAgICB0aGlzLm1heEJ5X3FfID0gTWF4QnlfMS5tYXhCeTtcbiAgICAgICAgdGhpcy5tYXhPckRlZmF1bHRfcV8gPSBNYXhPckRlZmF1bHRfMS5tYXhPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMubWluX3FfID0gTWluXzEubWluO1xuICAgICAgICB0aGlzLm1pbkJ5X3FfID0gTWluQnlfMS5taW5CeTtcbiAgICAgICAgdGhpcy5taW5PckRlZmF1bHRfcV8gPSBNaW5PckRlZmF1bHRfMS5taW5PckRlZmF1bHQ7XG4gICAgICAgIHRoaXMub2ZUeXBlX3FfID0gT2ZUeXBlXzEub2ZUeXBlO1xuICAgICAgICB0aGlzLm91dGVySm9pbl9xXyA9IE91dGVySm9pbl8xLm91dGVySm9pbjtcbiAgICAgICAgdGhpcy5wcmVwZW5kX3FfID0gUHJlcGVuZF8xLnByZXBlbmQ7XG4gICAgICAgIHRoaXMucmVwbGljYXRlX3FfID0gUmVwbGljYXRlXzEucmVwbGljYXRlO1xuICAgICAgICB0aGlzLnJldmVyc2VfcV8gPSBSZXZlcnNlXzEucmV2ZXJzZTtcbiAgICAgICAgdGhpcy5yaWdodEpvaW5fcV8gPSBSaWdodEpvaW5fMS5yaWdodEpvaW47XG4gICAgICAgIHRoaXMuc2VsZWN0X3FfID0gU2VsZWN0XzEuc2VsZWN0O1xuICAgICAgICB0aGlzLnNlbGVjdE1hbnlfcV8gPSBTZWxlY3RNYW55XzEuc2VsZWN0TWFueTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUVxdWFsX3FfID0gU2VxdWVuY2VFcXVhbF8xLnNlcXVlbmNlRXF1YWw7XG4gICAgICAgIHRoaXMuc2luZ2xlX3FfID0gU2luZ2xlXzEuc2luZ2xlO1xuICAgICAgICB0aGlzLnNpbmdsZU9yRGVmYXVsdF9xXyA9IFNpbmdsZU9yRGVmYXVsdF8xLnNpbmdsZU9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5za2lwX3FfID0gU2tpcF8xLnNraXA7XG4gICAgICAgIHRoaXMuc2tpcExhc3RfcV8gPSBTa2lwTGFzdF8xLnNraXBMYXN0O1xuICAgICAgICB0aGlzLnNraXBXaGlsZV9xXyA9IFNraXBXaGlsZV8xLnNraXBXaGlsZTtcbiAgICAgICAgdGhpcy5zdGVwX3FfID0gU3RlcF8xLnN0ZXA7XG4gICAgICAgIHRoaXMuc3VtX3FfID0gU3VtXzEuc3VtO1xuICAgICAgICB0aGlzLnRha2VfcV8gPSBUYWtlXzEudGFrZTtcbiAgICAgICAgdGhpcy50YWtlTGFzdF9xXyA9IFRha2VMYXN0XzEudGFrZUxhc3Q7XG4gICAgICAgIHRoaXMudGFrZVdoaWxlX3FfID0gVGFrZVdoaWxlXzEudGFrZVdoaWxlO1xuICAgICAgICB0aGlzLnRvQXJyYXlfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9BcnJheTtcbiAgICAgICAgdGhpcy50b0RpY3Rpb25hcnlfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9EaWN0aW9uYXJ5O1xuICAgICAgICB0aGlzLnRvSGFzaFNldF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0hhc2hTZXQ7XG4gICAgICAgIHRoaXMudG9MaXN0X3FfID0gVG9Db252ZXJzaW9uc18xLnRvQXJyYXk7XG4gICAgICAgIHRoaXMudG9Mb29rdXBfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9Mb29rdXA7XG4gICAgICAgIHRoaXMudG9NYXBfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9NYXA7XG4gICAgICAgIHRoaXMudW5pb25fcV8gPSBVbmlvbl8xLnVuaW9uO1xuICAgICAgICB0aGlzLnVuaW9uQnlfcV8gPSBVbmlvbkJ5XzEudW5pb25CeTtcbiAgICAgICAgdGhpcy53aGVyZV9xXyA9IFdoZXJlXzEud2hlcmU7XG4gICAgICAgIHRoaXMuemlwX3FfID0gWmlwXzEuemlwO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLl9pc0Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICAvLyBOb3JtYWxseSwgd2UnZCBnbyBhaGVhZCBhbmQgc2F5IHRoZSBkYXRhIHNob3VsZCBiZSBhbiBhcnJheSwgbm90aGluZyBidXQuXG4gICAgICAgIC8vIEJ1dCBsZXQncyBiZSBmbGV4aWJsZSBhbmQgYWxsb3cgYW55dGhpbmcuIElmIGl0J3Mgbm90IGl0ZXJhYmxlLCB0aGVuIGl0J2xsIGJlY29tZSBhIG9uZS1pdGVtIGl0ZXJhdG9yLlxuICAgICAgICB0aGlzLl9zb3VyY2UgPSB0aGlzLl9lbnN1cmVCYWNrdXAoTWFrZUdlbmVyYXRvcl8xLm1ha2VHZW5lcmF0b3IoZGF0YSkpO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZ2VfcV8oc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdCdzIGEgcGFpbiB0byByZW1lbWJlciB0aGUgZnVuY3Rpb24qe30oKSBzeW50YXggaGVyZS5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKGZ1bmN0aW9uKiBfcmFuZ2UoKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgbWF4dmFsID0gc3RhcnQgKyBsZW47XG4gICAgICAgICAgICB3aGlsZSAoaSA8IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVwZWF0X3FfKGVsZW1lbnQsIGxlbikge1xuICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdCdzIGEgcGFpbiB0byByZW1lbWJlciB0aGUgZnVuY3Rpb24qe30oKSBzeW50YXggaGVyZS5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKGZ1bmN0aW9uKiBfcmVwZWF0KCkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG4gICAgZ2V0IF9kYXRhKCkge1xuICAgICAgICAvLyBUaGVyZSdzIG5vdCBhIGxvdCBvZiBjYWxsIGZvciBzZWxlY3RpbmcgZnJvbSBhbiBlbnVtZXJhYmxlIG1vcmUgdGhhbiBvbmNlLCBidXQgc29tZW9uZSBtaWdodFxuICAgICAgICAvLyB3YW50IHRvIGRvIGl0LiBJbiBDIyB0aGUgb25seSByZWFsIHRpbWUgdGhpcyBoYXBwZW5zIGlzIHdoZW4geW91IHVzZSB0aGUgZGVidWdnZXIsIGJ1dCBpdCBkb2VzIGhhcHBlbi5cbiAgICAgICAgLy8gQnV0IHdoZW4gZGF0YSBoYXMgYmVlbiBmZXRjaGVkIGZyb20gdGhlIGdlbmVyYXRvciwgaXQgYmVjb21lcyBjbG9zZWQsIGFuZCBldmVyeSBnZW5lcmF0b3IgaW4gaXRzXG4gICAgICAgIC8vIHNvdXJjZSBpcyBhbHNvIGNsb3NlZC4gVGhpcyBpcyBidWlsdCBpbiB0byBKUyBhbmQgbm90IHNvbWV0aGluZyB3ZSBjYW4gY2hhbmdlLlxuICAgICAgICAvLyBCdXQgd2UgY2FuIGNhY2hlIHRoZSBkYXRhIHdoZW4gd2UgZmV0Y2ggaXQgYW5kIHJldHVybiB0aGUgY2FjaGUgaWYgY2xvc2VkLlxuICAgICAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICAgIH1cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIFR5cGVTY3JpcHQgZG9lcyBub3QgbGlrZSB0aGlzLiBJdCB0aGlua3MgW1N5bWJvbC5pdGVyYXRvcl0oKSBtaWdodCBiZSB1bmRlZmluZWQsXG4gICAgICAgIC8vIGV2ZW4gd2hlbiBpdCBpcyBjbGVhcmx5IGRlZmluZWQgYSBmZXcgbGluZXMgdXAuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IucmV0dXJuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhyb3coZSkge1xuICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIFR5cGVzY3JpcHQgZG9lcyBub3QgbGlrZSB0aGlzLiBJdCB0aGlua3MgW1N5bWJvbC5pdGVyYXRvcl0oKSBtaWdodCBiZSB1bmRlZmluZWQsXG4gICAgICAgIC8vIGV2ZW4gd2hlbiBpdCBpcyBjbGVhcmx5IGRlZmluZWQgYSBmZXcgbGluZXMgdXAuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IudGhyb3coZSk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIC8vIEJ1dCBpdCdzIG9rIHdpdGggdGhlIGV4YWN0IHNhbWUgY29kZSBoZXJlLiBHbyBmaWd1cmUuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IubmV4dCgpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIC8vIFdyaXRpbmcgYW4gRW51bWVyYWJsZSB0byBKU09OIGV4aGF1c3RzIHRoZSBlbnVtZXJhdG9yLlxuICAgICAgICByZXR1cm4gWy4uLnRoaXNdO1xuICAgIH1cbiAgICB0cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBvdXQgdmFycyBpbiBKUyBzbyB3ZSBoYXZlIHRvIHVzZSBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgIG9iai52YWx1ZSA9IHRoaXMuX2NhY2hlLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vdCBjbG9zZWQsIHRoaXMgaXMgYSBnZW5lcmF0b3IsIGFuZCB3ZSBjYW4ndCBjb3VudCBpdCB3aXRob3V0IGVudW1lcmF0aW5nIGl0LlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoaXMgaGVscGVyIGFsbG93cyBtZXRob2RzIGRlY2xhcmVkIGluIG90aGVyIGZpbGVzIHRvIHVzZSBnZW5lcmF0b3IgZnVuY3Rpb25zIHdpdGhvdXQgcmVmZXJlbmNpbmcgdGhpcy5fZGF0YSAocmVxdWlyaW5nIGl0XG4gICAgLy8gdG8gYmUgcHVibGljKSBvciB1c2luZyB0aGUgKGZ1bmN0aW9uKigpIHt9KShkYXRhKSBzeW50YXgsIHdoaWNoIGlzIHVnbHkuXG4gICAgX2V4dGVuZChmdW5jKSB7XG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jKHRoaXMpKTtcbiAgICB9XG4gICAgKl9lbnN1cmVCYWNrdXAoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNDbG9zZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRW51bWVyYWJsZSA9IEVudW1lcmFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZVwiKTtcbmNsYXNzIE9yZGVyZWRFbnVtZXJhYmxlIGV4dGVuZHMgRW51bWVyYWJsZV8xLkVudW1lcmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuX3NvcnRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IGRlc2NlbmRpbmcgfSk7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBzb3J0IHRoZSBkYXRhLiBUaGlzIG5lZWRzIHRvIHByb2Nlc3MgdGhlIGZ1bGwgbGlzdCwgYmVjYXVzZSB0aGUgbGFzdCByZWNvcmQgY291bGQgYmUgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IG5lZWRzIHRvIGdvIGZpcnN0LlxuICAgICAgICAvLyBUd28gcG9zc2libGUgYXBwcm9hY2hlcyBoZXJlLiBPbmUgaXMgdG8gcmVwZWF0ZWRseSBhdHRhY2sgdGhlIGxpc3QsIGdvaW5nIGFmdGVyIHRoZSBtaW4gcmVjb3JkIGFuZFxuICAgICAgICAvLyByZXR1cm5pbmcgaXQsIHdoaWNoIGlzIGhlYXZ5IG9uIHRoZSBDUFUgYnV0IGxpZ2h0IG9uIG1lbW9yeSwgb3Igd2hhdCBJJ20gZ29pbmcgdG8gZG8sIHdoaWNoIGlzIGxvYWRcbiAgICAgICAgLy8gYW4gYXJyYXkgYW5kIHVzZSB0aGUgYnVpbHQtaW4gc29ydCgpIG1ldGhvZCwgd2hpY2ggaXMgaGVhdnkgb24gbWVtb3J5IGJ1dCBsaWdodCBvbiBDUFUuXG4gICAgICAgIGxldCBzb3J0aW5nRnVuY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaGF0IG9mIHRoaXMuX3NvcnRlcnMpIHtcbiAgICAgICAgICAgIHNvcnRpbmdGdW5jdGlvbiA9IGJ1aWxkU29ydGVyKGhhdC5vcmRlckJ5LCBoYXQuY29tcGFyZXIsIGhhdC5kZXNjZW5kaW5nLCBzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBbLi4udGhpcy5fZGF0YV0uc29ydChzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc29ydGVkRGF0YSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGVuQnlfcV8ob3JkZXJCeSwgY29tcGFyZXIpIHtcbiAgICAgICAgaWYgKCFvcmRlckJ5KSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gKChvKSA9PiBvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3J0ZXJzLnB1c2goeyBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGVuQnlEZXNjZW5kaW5nX3FfKG9yZGVyQnksIGNvbXBhcmVyKSB7XG4gICAgICAgIGlmICghb3JkZXJCeSkge1xuICAgICAgICAgICAgb3JkZXJCeSA9ICgobykgPT4gbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXJlZEVudW1lcmFibGUgPSBPcmRlcmVkRW51bWVyYWJsZTtcbmZ1bmN0aW9uIGJ1aWxkU29ydGVyKGtleVNlbGVjdG9yLCBjb21wYXJlciwgZGVzY2VuZGluZyA9IGZhbHNlLCBpbml0aWFsKSB7XG4gICAgbGV0IGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGlmICghY29tcGFyZSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZGVmYXVsdENvbXBhcmVyO1xuICAgIH1cbiAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX3RoZW5CeSh4LCB5KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkxID0ga2V5U2VsZWN0b3IoeCk7XG4gICAgICAgICAgICBjb25zdCBrZXkyID0ga2V5U2VsZWN0b3IoeSk7XG4gICAgICAgICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsKHgsIHkpIHx8IGNvbXBhcmUoa2V5Miwga2V5MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbCh4LCB5KSB8fCBjb21wYXJlKGtleTEsIGtleTIpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF9vcmRlckJ5KHgsIHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleTEgPSBrZXlTZWxlY3Rvcih4KTtcbiAgICAgICAgICAgIGNvbnN0IGtleTIgPSBrZXlTZWxlY3Rvcih5KTtcbiAgICAgICAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoa2V5Miwga2V5MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShrZXkxLCBrZXkyKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGUvRW51bWVyYWJsZVwiKTtcbi8qKlxuICogSGVscGVyIHRvIGFkZCBleHRlbnNpb24gbWV0aG9kcyB0byBBcnJheSBhbmQgU2V0LiBUaGVzZSBtZXRob2RzIGR1cGxpY2F0ZSB0aGUgbmFtZXMgaW4gRW51bWVyYWJsZSwgYnV0IHdoYXQgdGhleSBkbyBpcyBjcmVhdGUgYSBuZXdcbiAqIEVudW1lcmFibGUgYW5kIHRoZW4gcGFzcyB0aGUgY2FsbCBvbndhcmQsIHNvIGl0IHNlZW1zIGFzIGlmIHRoZSBhcnJheSBpcyBFbnVtZXJhYmxlLlxuICpcbiAqIFRoaXMgY2FuIGJlIG1vZGlmaWVkIHRvIHN1cHBvcnQgYW55IG9iamVjdC4gSWYgeW91IGRvIHNvLCByZW1lbWJlciB0byBzZXQgd3JpdGFibGU6IHRydWUgc28gRW51bWVyYWJsZSBjYW4gaGF2ZSBpdHMgb3duXG4gKiBpbXBsZW1lbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChuYW1lLCBleHRlbnNpb24pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY29udmVydFRvRW51bWVyYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcylbbmFtZV0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY29udmVydFRvRW51bWVyYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcylbbmFtZV0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uKiBtYWtlR2VuZXJhdG9yKGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGl0ZXIgPT09IFwic3RyaW5nXCIgfHwgaXRlcmFibGVHdWFyZChpdGVyKSkge1xuICAgICAgICB5aWVsZCogaXRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJyYXlMaWtlR3VhcmQoaXRlcikpIHtcbiAgICAgICAgeWllbGQqIEFycmF5LmZyb20oaXRlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5aWVsZCBpdGVyO1xuICAgIH1cbn1cbmV4cG9ydHMubWFrZUdlbmVyYXRvciA9IG1ha2VHZW5lcmF0b3I7XG5mdW5jdGlvbiBpdGVyYWJsZUd1YXJkKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gb2JqO1xufVxuZnVuY3Rpb24gYXJyYXlMaWtlR3VhcmQob2JqKSB7XG4gICAgLy8gSSBkb24ndCB0aGluayB0aGlzIGlzIHBlcmZlY3QgYnV0IEkgY2FuJ3QgZmluZCBhIHdheSB0byB2YWxpZGF0ZSB0aGUgb3RoZXIgcGFydCBvZiBBcnJheUxpa2UsIHRoZSBrZXkuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgb2JqICYmXG4gICAgICAgIFwibGVuZ3RoXCIgaW4gb2JqICYmIHR5cGVvZiBvYmoubGVuZ3RoID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIG9iai5sZW5ndGggPj0gMDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTWFrZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vTWFrZUdlbmVyYXRvclwiKTtcbi8qKlxuICogSlMgZG9lc24ndCBnaXZlIGEgd2F5IHRvIHJlc3RhcnQgYSBnZW5lcmF0b3IsIHdoaWNoIGNhdXNlcyBhIGdyZWF0IGRlYWwgb2YgdHJvdWJsZSB3aGVuIHlvdSBuZWVkIHRvIGNoZWNrIGl0IG11bHRpcGxlIHRpbWVzLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBkbyBhbiBpbm5lciBqb2luLCB5b3UgbmVlZCB0byBjaGVjayBlYWNoIGVsZW1lbnQgb2YgdGhlIGxlZnQgd2l0aCBlYWNoIGVsZW1lbnQgb2YgdGhlIHJpZ2h0LlxuICogWW91IG5lZWQgdGhlIGFiaWxpdHkgdG8gcmVidWlsZCB0aGUgZ2VuZXJhdG9yIGZyb20gdGhlIG9yaWdpbmFsIGl0ZXJhYmxlLiBCdXQgdGhlcmUgaXNuJ3QgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGl0ZXJhYmxlIEFOWVdIRVJFLlxuICogQXMgYSByZXN1bHQsIHRoZSBvbmx5IHdheSB0byBtYWtlIHRoaXMgd29yayBpcyB0byBtYWtlIGEgY29weSBvZiB0aGUgZGF0YSBhcyB5b3UgaXRlcmF0ZSBpdC5cbiAqIFRoaXMgY291bGQgZG91YmxlIHRoZSBhbW91bnQgb2Ygc3BhY2UgbmVlZGVkLCBidXQgaXQncyBhIGxpbWl0YXRpb24gb2YgdGhlIHRlY2hub2xvZ3kuXG4gKiBXZSBkb24ndCBhY3R1YWxseSBrbm93IGlmIGEgZ2VuZXJhdG9yIGlzIGJlaW5nIHVzZWQuIFRoZSB0eXBlIGlzIFwib2JqZWN0LlwiIFNvIHlvdSBjb3VsZCBiZSB3YXN0aW5nIG1lbW9yeSBieSB1c2luZyB0aGlzLiBObyB3YXkgdG8ga25vdy5cbiAqL1xuY2xhc3MgUmVzdGFydGFibGVHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGl0ZXJhYmxlLCBmbGV4TWVtb3J5ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yKGl0ZXJhYmxlLCB0aGlzLmJhY2t1cCk7XG4gICAgICAgIHRoaXMuZmxleE1lbW9yeSA9IGZsZXhNZW1vcnk7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGFzUXVlcnlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5hc1F1ZXJ5YWJsZSgpO1xuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5mbGV4TWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpcy5iYWNrdXAuc2xpY2UoMCk7XG4gICAgICAgICAgICB0aGlzLmJhY2t1cCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yKGksIHRoaXMuYmFja3VwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBNYWtlR2VuZXJhdG9yXzEubWFrZUdlbmVyYXRvcih0aGlzLmJhY2t1cCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlc3RhcnRhYmxlR2VuZXJhdG9yID0gUmVzdGFydGFibGVHZW5lcmF0b3I7XG5mdW5jdGlvbiogY3ljbGVHZW5lcmF0b3IoaXRlciwgYmFja3VwKSB7XG4gICAgZm9yIChjb25zdCB4IG9mIGl0ZXIpIHtcbiAgICAgICAgYmFja3VwLnB1c2goeCk7XG4gICAgICAgIHlpZWxkIHg7XG4gICAgfVxufVxuZXhwb3J0cy5jeWNsZUdlbmVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG5jb25zdCBFeHRlbmRfMSA9IHJlcXVpcmUoXCIuL0V4dGVuZFwiKTtcbmNvbnN0IEFnZ3JlZ2F0ZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FnZ3JlZ2F0ZVwiKTtcbmNvbnN0IEFsbF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FsbFwiKTtcbmNvbnN0IEFueV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FueVwiKTtcbmNvbnN0IEFwcGVuZF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FwcGVuZFwiKTtcbmNvbnN0IEF2ZXJhZ2VfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BdmVyYWdlXCIpO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9DaHVua1wiKTtcbmNvbnN0IENvbmNhdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvbmNhdFwiKTtcbmNvbnN0IENvbnRhaW5zXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ29udGFpbnNcIik7XG5jb25zdCBDb3VudF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvdW50XCIpO1xuY29uc3QgQ3Jvc3NKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ3Jvc3NKb2luXCIpO1xuY29uc3QgRGVmYXVsdElmRW1wdHlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9EZWZhdWx0SWZFbXB0eVwiKTtcbmNvbnN0IERpc3RpbmN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGlzdGluY3RcIik7XG5jb25zdCBEaXN0aW5jdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGlzdGluY3RCeVwiKTtcbmNvbnN0IEVsZW1lbnRBdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VsZW1lbnRBdFwiKTtcbmNvbnN0IEVsZW1lbnRBdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEVtcHR5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRW1wdHlcIik7XG5jb25zdCBFeGNlcHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FeGNlcHRcIik7XG5jb25zdCBFeGNlcHRCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0V4Y2VwdEJ5XCIpO1xuY29uc3QgRmlyc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9GaXJzdFwiKTtcbmNvbnN0IEZpcnN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRmlyc3RPckRlZmF1bHRcIik7XG5jb25zdCBGb3JFYWNoXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRm9yRWFjaFwiKTtcbmNvbnN0IEZ1bGxKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRnVsbEpvaW5cIik7XG5jb25zdCBHcm91cEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvR3JvdXBCeVwiKTtcbmNvbnN0IEdyb3VwSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0dyb3VwSm9pblwiKTtcbmNvbnN0IElubmVySm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0lubmVySm9pblwiKTtcbmNvbnN0IEludGVyc2VjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ludGVyc2VjdFwiKTtcbmNvbnN0IEludGVyc2VjdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSW50ZXJzZWN0QnlcIik7XG5jb25zdCBKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSm9pblwiKTtcbmNvbnN0IExhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9MYXN0XCIpO1xuY29uc3QgTGFzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0xhc3RPckRlZmF1bHRcIik7XG5jb25zdCBMb25nQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Mb25nQ291bnRcIik7XG5jb25zdCBNYXhfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhcIik7XG5jb25zdCBNYXhCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heEJ5XCIpO1xuY29uc3QgTWF4T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWF4T3JEZWZhdWx0XCIpO1xuY29uc3QgTWluXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluXCIpO1xuY29uc3QgTWluQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5CeVwiKTtcbmNvbnN0IE1pbk9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01pbk9yRGVmYXVsdFwiKTtcbmNvbnN0IE9mVHlwZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL09mVHlwZVwiKTtcbmNvbnN0IE9yZGVyQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PcmRlckJ5XCIpO1xuY29uc3QgT3V0ZXJKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT3V0ZXJKb2luXCIpO1xuY29uc3QgUHJlcGVuZF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1ByZXBlbmRcIik7XG5jb25zdCBSZXBsaWNhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SZXBsaWNhdGVcIik7XG5jb25zdCBSZXZlcnNlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmV2ZXJzZVwiKTtcbmNvbnN0IFJpZ2h0Sm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1JpZ2h0Sm9pblwiKTtcbmNvbnN0IFNlbGVjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlbGVjdFwiKTtcbmNvbnN0IFNlbGVjdE1hbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZWxlY3RNYW55XCIpO1xuY29uc3QgU2VxdWVuY2VFcXVhbF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWxcIik7XG5jb25zdCBTaW5nbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVcIik7XG5jb25zdCBTaW5nbGVPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVPckRlZmF1bHRcIik7XG5jb25zdCBTa2lwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcFwiKTtcbmNvbnN0IFNraXBMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcExhc3RcIik7XG5jb25zdCBTa2lwV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ta2lwV2hpbGVcIik7XG5jb25zdCBTdGVwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU3RlcFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1N1bVwiKTtcbmNvbnN0IFRha2VfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlXCIpO1xuY29uc3QgVGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlTGFzdFwiKTtcbmNvbnN0IFRha2VXaGlsZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1Rha2VXaGlsZVwiKTtcbmNvbnN0IFRvQ29udmVyc2lvbnNfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ub0NvbnZlcnNpb25zXCIpO1xuY29uc3QgVW5pb25fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9VbmlvblwiKTtcbmNvbnN0IFVuaW9uQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9VbmlvbkJ5XCIpO1xuY29uc3QgV2hlcmVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9XaGVyZVwiKTtcbmNvbnN0IFppcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1ppcFwiKTtcbkFycmF5LnByb3RvdHlwZS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8gPSBmdW5jdGlvbiBfdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgIC8vIHRoZXJlIGFyZSBubyBvdXQgdmFyaWFibGVzIGluIEpTLCBzbyB3ZSBoYXZlIHRvIHB1dCBpdCBpbiBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgIGlmIChvYmopIHtcbiAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblNldC5wcm90b3R5cGUudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfID0gZnVuY3Rpb24gX3RyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhvYmopIHtcbiAgICAvLyB0aGVyZSBhcmUgbm8gb3V0IHZhcmlhYmxlcyBpbiBKUywgc28gd2UgaGF2ZSB0byBwdXQgaXQgaW4gYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICBpZiAob2JqKSB7XG4gICAgICAgIG9iai52YWx1ZSA9IHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuT2JqZWN0LnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIGl0ZXJhYmxlLCB0aGlzIHdpbGwgYmUgYW4gb3JkaW5hcnkgZ2VuZXJhdG9yLiBJZiBpdCBpcyBub3QsXG4gICAgLy8gdGhpcyB3aWxsIGJlIGFuIGl0ZXJhYmxlIHdpdGggYSBzaW5nbGUgaXRlbS4gVGhpcyBtYWtlcyBpdCBzbyBJIGRvbid0IGhhdmUgdG9cbiAgICAvLyBndWVzcyB3aGF0IHByb3RvdHlwZXMgbmVlZCB0byBiZSBtb2RpZmllZC5cbiAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpO1xufTtcblN0cmluZy5wcm90b3R5cGUuYXNRdWVyeWFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5ncyBhcmUgaXRlcmFibGUsIGJ1dCBJIGRpZG4ndCB3YW50IHRvIGFkZCBhbGwgdGhlIGVudW1lcmFibGUgbWV0aG9kcyB0byB0aGVtLlxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcyk7XG59O1xuTnVtYmVyLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAoNCkuYXNRdWVyeWFibGUoKSBpcyB0cmVhdGVkIGxpa2UgcmFuZ2UoKVxuICAgIHJldHVybiBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5yYW5nZV9xXygwLCB0aGlzKTtcbn07XG5Cb29sZWFuLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcykge1xuICAgICAgICAvLyB0cnVlLmFzUXVlcnlhYmxlKCkgaXMgcHJldHR5IHVzZWxlc3M6IFtmYWxzZSwgdHJ1ZV0gYXNjZW5kaW5nLiBNaWdodCBiZSB1c2VmdWwuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUoW2ZhbHNlLCB0cnVlXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBmYWxzZS5hc1F1ZXJ5YWJsZSgpIGlzIGFsc28gcHJldHR5IHVzZWxlc3M6IFt0cnVlLCBmYWxzZV0gZGVzY2VuZGluZy4gTWlnaHQgYmUgdXNlZnVsLlxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKFt0cnVlLCBmYWxzZV0pO1xuICAgIH1cbn07XG4vLyBBZGQgc3R1YiBmdW5jdGlvbnMgb250byBBcnJheS5wcm90b3R5cGUgYW5kIFNldC5wcm90b3R5cGUgdG8gbWFrZSB0aGUgb2JqZWN0IGludG8gYW4gRW51bWVyYWJsZVxuLy8gYW5kIHRoZW4gY2FsbCB0aGUgRW51bWVyYWJsZSBtZXRob2RcbkV4dGVuZF8xLmV4dGVuZChcImFnZ3JlZ2F0ZV9xX1wiLCBBZ2dyZWdhdGVfMS5hZ2dyZWdhdGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYWxsX3FfXCIsIEFsbF8xLmFsbCk7XG5FeHRlbmRfMS5leHRlbmQoXCJhbnlfcV9cIiwgQW55XzEuYW55X3FfKTtcbkV4dGVuZF8xLmV4dGVuZChcImFwcGVuZF9xX1wiLCBBcHBlbmRfMS5hcHBlbmQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYXZlcmFnZV9xX1wiLCBBdmVyYWdlXzEuYXZlcmFnZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJjYXN0X3FfXCIsIFNlbGVjdF8xLnNlbGVjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjaHVua19xX1wiLCBDaHVua18xLmNodW5rKTtcbkV4dGVuZF8xLmV4dGVuZChcImNvbmNhdF9xX1wiLCBDb25jYXRfMS5jb25jYXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY29udGFpbnNfcV9cIiwgQ29udGFpbnNfMS5jb250YWlucyk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb3VudF9xX1wiLCBDb3VudF8xLmNvdW50KTtcbkV4dGVuZF8xLmV4dGVuZChcImNyb3NzSm9pbl9xX1wiLCBDcm9zc0pvaW5fMS5jcm9zc0pvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGVmYXVsdElmRW1wdHlfcV9cIiwgRGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eSk7XG5FeHRlbmRfMS5leHRlbmQoXCJkaXN0aW5jdF9xX1wiLCBEaXN0aW5jdF8xLmRpc3RpbmN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImRpc3RpbmN0QnlfcV9cIiwgRGlzdGluY3RCeV8xLmRpc3RpbmN0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZWxlbWVudEF0X3FfXCIsIEVsZW1lbnRBdF8xLmVsZW1lbnRBdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbGVtZW50QXRPckRlZmF1bHRfcV9cIiwgRWxlbWVudEF0T3JEZWZhdWx0XzEuZWxlbWVudEF0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImVtcHR5X3FfXCIsIEVtcHR5XzEuZW1wdHkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZXhjZXB0X3FfXCIsIEV4Y2VwdF8xLmV4Y2VwdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJleGNlcHRCeV9xX1wiLCBFeGNlcHRCeV8xLmV4Y2VwdEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImZpcnN0X3FfXCIsIEZpcnN0XzEuZmlyc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZmlyc3RPckRlZmF1bHRfcV9cIiwgRmlyc3RPckRlZmF1bHRfMS5maXJzdE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmb3JFYWNoX3FfXCIsIEZvckVhY2hfMS5mb3JFYWNoKTtcbkV4dGVuZF8xLmV4dGVuZChcImZ1bGxKb2luX3FfXCIsIEZ1bGxKb2luXzEuZnVsbEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZ3JvdXBCeV9xX1wiLCBHcm91cEJ5XzEuZ3JvdXBCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJncm91cEpvaW5fcV9cIiwgR3JvdXBKb2luXzEuZ3JvdXBKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImlubmVySm9pbl9xX1wiLCBJbm5lckpvaW5fMS5pbm5lckpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW50ZXJzZWN0X3FfXCIsIEludGVyc2VjdF8xLmludGVyc2VjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJpbnRlcnNlY3RCeV9xX1wiLCBJbnRlcnNlY3RCeV8xLmludGVyc2VjdEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImpvaW5fcV9cIiwgSm9pbl8xLmpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGFzdF9xX1wiLCBMYXN0XzEubGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJsYXN0T3JEZWZhdWx0X3FfXCIsIExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxlZnRKb2luX3FfXCIsIExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxvbmdDb3VudF9xX1wiLCBMb25nQ291bnRfMS5sb25nQ291bnQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4X3FfXCIsIE1heF8xLm1heCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhCeV9xX1wiLCBNYXhCeV8xLm1heEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heE9yRGVmYXVsdF9xX1wiLCBNYXhPckRlZmF1bHRfMS5tYXhPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluX3FfXCIsIE1pbl8xLm1pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5CeV9xX1wiLCBNaW5CeV8xLm1pbkJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbk9yRGVmYXVsdF9xX1wiLCBNaW5PckRlZmF1bHRfMS5taW5PckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib2ZUeXBlX3FfXCIsIE9mVHlwZV8xLm9mVHlwZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJvcmRlckJ5X3FfXCIsIE9yZGVyQnlfMS5vcmRlckJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm9yZGVyQnlEZXNjZW5kaW5nX3FfXCIsIE9yZGVyQnlfMS5vcmRlckJ5RGVzY2VuZGluZyk7XG5FeHRlbmRfMS5leHRlbmQoXCJvdXRlckpvaW5fcV9cIiwgT3V0ZXJKb2luXzEub3V0ZXJKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcInByZXBlbmRfcV9cIiwgUHJlcGVuZF8xLnByZXBlbmQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmVwbGljYXRlX3FfXCIsIFJlcGxpY2F0ZV8xLnJlcGxpY2F0ZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJyZXZlcnNlX3FfXCIsIFJldmVyc2VfMS5yZXZlcnNlKTtcbkV4dGVuZF8xLmV4dGVuZChcInJpZ2h0Sm9pbl9xX1wiLCBSaWdodEpvaW5fMS5yaWdodEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VsZWN0X3FfXCIsIFNlbGVjdF8xLnNlbGVjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzZWxlY3RNYW55X3FfXCIsIFNlbGVjdE1hbnlfMS5zZWxlY3RNYW55KTtcbkV4dGVuZF8xLmV4dGVuZChcInNlcXVlbmNlRXF1YWxfcV9cIiwgU2VxdWVuY2VFcXVhbF8xLnNlcXVlbmNlRXF1YWwpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2luZ2xlX3FfXCIsIFNpbmdsZV8xLnNpbmdsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJzaW5nbGVPckRlZmF1bHRfcV9cIiwgU2luZ2xlT3JEZWZhdWx0XzEuc2luZ2xlT3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBfcV9cIiwgU2tpcF8xLnNraXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcExhc3RfcV9cIiwgU2tpcExhc3RfMS5za2lwTGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwV2hpbGVfcV9cIiwgU2tpcFdoaWxlXzEuc2tpcFdoaWxlKTtcbkV4dGVuZF8xLmV4dGVuZChcInN0ZXBfcV9cIiwgU3RlcF8xLnN0ZXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic3VtX3FfXCIsIFN1bV8xLnN1bSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlX3FfXCIsIFRha2VfMS50YWtlKTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VMYXN0X3FfXCIsIFRha2VMYXN0XzEudGFrZUxhc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZVdoaWxlX3FfXCIsIFRha2VXaGlsZV8xLnRha2VXaGlsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0FycmF5X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0FycmF5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvRGljdGlvbmFyeV9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9EaWN0aW9uYXJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTGlzdF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9BcnJheSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0xvb2t1cF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9Mb29rdXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9IYXNoU2V0X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0hhc2hTZXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9NYXBfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvTWFwKTtcbkV4dGVuZF8xLmV4dGVuZChcInVuaW9uX3FfXCIsIFVuaW9uXzEudW5pb24pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidW5pb25CeV9xX1wiLCBVbmlvbkJ5XzEudW5pb25CeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ3aGVyZV9xX1wiLCBXaGVyZV8xLndoZXJlKTtcbkV4dGVuZF8xLmV4dGVuZChcInppcF9xX1wiLCBaaXBfMS56aXApO1xuLy8gQXMgYSB3b3JrYXJvdW5kIGZvciBvcmRlcmJ5IChqYXZhc2NyaXB0IGNhbid0IGNyZWF0ZSBhIGNsYXNzIHRoYXQgcmVmZXJlbmNlcyBhIGRlc2NlbmRhbnQgY2xhc3MpLFxuLy8gYWRkIHRoZXNlIHRvIHRoZSBFbnVtZXJhYmxlIGNsYXNzIGluIGEgd2F5IHRoYXQgZG9lc24ndCBleHBsb2RlXG5FbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5wcm90b3R5cGUub3JkZXJCeV9xXyA9IE9yZGVyQnlfMS5vcmRlckJ5O1xuRW51bWVyYWJsZV8xLkVudW1lcmFibGUucHJvdG90eXBlLm9yZGVyQnlEZXNjZW5kaW5nX3FfID0gT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFnZ3JlZ2F0ZV9xXzogQXBwbGllcyBhbiBhY2N1bXVsYXRvciBmdW5jdGlvbiBvdmVyIGEgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBpbml0aWFsIHZhbHVlIGFjdHMgYXMgc2VlZCB2YWx1ZVxuICogb3B0aW9uYWwgc2VsZWN0RnVuY3Rpb24gc2VsZWN0cyB0aGUgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZShpbml0aWFsT3JBY2N1bXVsYXRvciwgYWNjdW11bGF0b3JGdW5jdGlvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgaW5pdGlhbFZhbHVlUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBsZXQgc2VlZGVkID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBhY2N1bXVsYXRvcjtcbiAgICBsZXQgc2VsZWN0b3I7XG4gICAgLy8gVGhpcyBpcyBiYXNpY2FsbHkgdGhlIHNhbWUgYXMgcmVkdWNlLCBleGNlcHQgaXQgZG9lc24ndCByZXF1aXJlIGNvcHlpbmcgdGhlIHdob2xlIHRoaW5nIHRvIGFuIGFycmF5IGZpcnN0XG4gICAgLy8gVGhlIHdhY2sgd2F5IHRoYXQgdHlwZXNjcmlwdCBkb2VzIG92ZXJsb2FkcyByZWFsbHkgc2xvcHMgdXAgdGhlIGNvZGUgZm9yIGtlZXBpbmcgYSBsaW5xIGFwaVxuICAgIC8vIEl0IGFsc28gcmVxdWlyZWQgdHdvIHVzZSBvZiBcImFueVwiIGFib3ZlIHRoYXQgSSBkaWQgbm90IGxpa2UgZG9pbmcuXG4gICAgaWYgKCFhY2N1bXVsYXRvckZ1bmN0aW9uKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbml0aWFsVmFsdWVQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIHNlZWRlZCA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3JGdW5jdGlvbjtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gc2VlZCwgdGhlbiB0aGUgZmlyc3QgdmFsdWUgaXMgdXNlZCBhcyB0aGUgc2VlZFxuICAgICAgICAvLyBBZnRlciB0aGUgZmlyc3QgaXRlbSwgaXQgaXMgcG9wdWxhdGVkLiBCdXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdW5kZXJzdGFuZCB0aGF0LCBzbyBhbnkgbmVlZHMgdG8gYmUgdXNlZCBzb21ldGltZXMuXG4gICAgICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBzZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBhY2N1bXVsYXRvcih2YWx1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQyMgb25seSB0aHJvd3MgYW4gZXJyb3IgaW4gdGhlIG92ZXJsb2FkIHdpdGhvdXQgYSBzZWVkIHZhbHVlLlxuICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCB1bmRlcnN0YW5kIHRoYXQgX3ZhbHVlIGlzIG5vdCB1bmRlZmluZWQgYWZ0ZXIgdGhlIF92YWx1ZSA9IGl0ZW0gbGluZSAodW5sZXNzIHRoZSBpdGVyYWJsZSB0eXBlIGFsbG93cyBpdClcbiAgICAgICAgLy8gVW5sZXNzIHRoZSBpdGVyYXRvciBjb250YWlucyB1bmRlZmluZWQsIG9mIGNvdXJzZS4gVGhhdCdzIHRvdGFsbHkgbGVnYWwgaW4gSlNcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuYWdncmVnYXRlID0gYWdncmVnYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFsbF9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYSBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqL1xuZnVuY3Rpb24gYWxsKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuYWxsID0gYWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFueV9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYW4gb3B0aW9uYWwgY29uZGl0aW9uXG4gKi9cbmZ1bmN0aW9uIGFueV9xXyhmaWx0ZXIpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5hbnlfcV8gPSBhbnlfcV87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYXBwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gYXBwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfYXBwZW5kKGRhdGEpIHtcbiAgICAgICAgeWllbGQqIGRhdGE7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgfSk7XG59XG5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTm9uZVR5cGVfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Ob25lVHlwZVwiKTtcbi8qKlxuICogYXZlcmFnZV9xXzogY29tcHV0ZXMgdGhlIGF2ZXJhZ2Ugb2YgYSBzZXF1ZW5jZSBvZiBudW1iZXJzLlxuICogb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIGxldHMgdXMgY2FsY3VsYXRlIHVzaW5nIHZhbHVlcyBvYnRhaW5lZCBieSBpbnZva2luZyBhZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBzZXF1ZW5jZS5cbiAqL1xuZnVuY3Rpb24gYXZlcmFnZShzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgbGV0IHRtcDtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0bXAgPSBzZWxlY3RGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgICAgIC8vIE51bGxhYmxlIG51bWJlciBiZWhhdmlvdXI6IGlmIG51bGwsIHNraXAgaXRcbiAgICAgICAgICAgIGlmIChOb25lVHlwZV8xLmlzTm9uZSh0bXApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOdWxsYWJsZSBudW1iZXIgYmVoYXZpb3VyOiBpZiBudWxsLCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoTm9uZVR5cGVfMS5pc05vbmUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0bXAgPSBOdW1iZXIoaXRlbSk7XG4gICAgICAgIGlmIChpc05hTih0bXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXZlcmFnZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3VtICsgdG1wO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG59XG5leHBvcnRzLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNodW5rX3FfOiBzcGxpdHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW50byBjaHVua3Mgb2Ygc2l6ZSBhdCBtb3N0IHNpemVcbiAqL1xuZnVuY3Rpb24gY2h1bmsoc2l6ZSkge1xuICAgIGNvbnN0IG5ld2VudW0gPSB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jaHVuayhkYXRhKSB7XG4gICAgICAgIGlmICghc2l6ZSB8fCBzaXplIDw9IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRlciA9IHNpemU7XG4gICAgICAgIGxldCB0bXAgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRtcDtcbiAgICAgICAgICAgICAgICB0bXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG1wO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld2VudW07XG59XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY29uY2F0X3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlc1xuICovXG5mdW5jdGlvbiBjb25jYXQoc2Vjb25kKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2NvbmNhdChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCogc2Vjb25kO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGNvbnRhaW5zX3FfOiBkZXRlcm1pbmVzIHdoZXRoZXIgYSBzZXF1ZW5jZSBjb250YWlucyBhIHNwZWNpZmllZCBlbGVtZW50XG4gKiBvcHRpb25hbCBlcXVhbGl0eUNvbXBhcmVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIGlmIHJlY29yZCBtYXRjaGVzXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlLCBjb21wYXJlcikge1xuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChjb21wYXJlKGl0ZW0sIHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY291bnRfcV86IHJldHVybnMgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIGhvdyBtYW55IGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gY291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN0cjtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBjcm9zc0pvaW5fcV86IENyZWF0ZSBhIHNpbXBsZSBjYXJ0ZXNpYW4gam9pbiAoZXZlcnkgcmVjb3JkIGZyb20gdGFibGUgMSBhbG9uZyB3aXRoIGV2ZXJ5IHJlY29yZCBmcm9tIHRhYmxlIDIpXG4gKi9cbmZ1bmN0aW9uIGNyb3NzSm9pbihzZWNvbmQsIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jcm9zc0pvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIG1hdGNoIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcm9zc0pvaW4gPSBjcm9zc0pvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZGVmYXVsdElmRW1wdHlfcV86IHJldHVybnMgdGhlIHNlcXVlbmNlIG9yIHRoZSAob3B0aW9uYWwpIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogRGVmYXVsdCBpbiBpcyBhIHBhcmFtdGVyLiBJRiBpdCBpcyBsZWZ0IG91dCwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgYW4gZW1wdHkgb25lLilcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdElmRW1wdHkoZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2RlZmF1bHRJZkVtcHR5KGRhdGEpIHtcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgeWllbGQgZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHRJZkVtcHR5ID0gZGVmYXVsdElmRW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZGlzdGluY3RfcV86IFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGJ5IHVzaW5nIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0KGNvbXBhcmVyKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kaXN0aW5jdChkYXRhKSB7XG4gICAgICAgIC8vIEtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQgKG5vIHdheSBhcm91bmQgdGhhdCkgYW5kIG9ubHkgcmV0dXJuIGlmIG5vdCBpbiB0aGUgbGlzdC5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGlzdGluY3QgPSBkaXN0aW5jdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBkaXN0aW5jdEJ5X3FfOiBSZXR1cm5zIGRpc3RpbmN0IGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Rpc3RpbmN0QnkoZGF0YSkge1xuICAgICAgICAvLyBLZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkIChubyB3YXkgYXJvdW5kIHRoYXQpIGFuZCBvbmx5IHJldHVybiBpZiBub3QgaW4gdGhlIGxpc3QuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXN0aW5jdEJ5ID0gZGlzdGluY3RCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZS5cIik7XG59XG5leHBvcnRzLmVsZW1lbnRBdCA9IGVsZW1lbnRBdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZS5cbiAqIFJldHVybnMgYW4gb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBpZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIG9yIHVuZGVmaW5lZCBpZiBub3Qgc3VwcGxpZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZS4pXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdE9yRGVmYXVsdChpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuZXhwb3J0cy5lbGVtZW50QXRPckRlZmF1bHQgPSBlbGVtZW50QXRPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG4vKipcbiAqIGVtcHR5X3FfOiBSZXR1cm5zIGFuIGVtcHR5IElFbnVtZXJhYmxlPFQ+IHRoYXQgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZSBhcmd1bWVudC5cbiAqIE5vdGUgdGhhdCB0eXBlcyBhcmUgdHlwZXNjcmlwdC1vbmx5IGZpY3RpdGlvdXMgZW50aXRpZXMgdGhhdCBhcmVuJ3QgZW1pdHRlZC5cbiAqL1xuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbXSk7XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZXhjZXB0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2UgKGRpc3RpbmN0KSBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0KHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdChkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIC8vIFN0YXJ0IGJ5IGxvYWRpbmcgdGhlIGhpc3Rvcnkgd2l0aCB0aGUgc2Vjb25kIHNldC4gVGhlbiwgd2UgY2FuIGRvIHdoYXQgd2UgYWxyZWFkeSBkaWQgZm9yIGRpc3RpbmN0KCkgYW5kIGl0J2xsIHB1bGwgb3V0IHRoZSBtYXRjaGVzXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhpdGVtKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4Y2VwdCA9IGV4Y2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBleGNlcHRfcV86IFByb2R1Y2VzIHRoZSBzZXQgZGlmZmVyZW5jZSBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleXMgKGRpc3RpbmN0IGtleXMpIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0Qnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9leGNlcHRCeShkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleVNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoa2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhjZXB0QnkgPSBleGNlcHRCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gZmlyc3QobWF0Y2hGdW5jdGlvbikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogVGhlIGZvbGxvd2luZyBtZXRob2QgZXhwbGFpbmVkOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZSB9OiB7IGRlZmF1bHRWYWx1ZTogVCB9KTogVDtcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgaXQgYnJlYWtzIHRoZSBzdGFuZGFyZCBjYXNlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmc6IGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKG15RnVuYylcbiAqIElzIHRoaXMgc3VwcG9zZWQgdG8gYmVcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMud2hlcmVfcV8obXlGdW5jKS5maXJzdE9yRGVmYXVsdF9xXygpXG4gKiBvclxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXygpIHx8IG15RnVuY1xuICpcbiAqIFRoZSBvbmx5IHRvIG1ha2UgaXQgd29yayBpcyB0byBjYWxsIGxpa2UgdGhpczpcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IHNvbWV0aGluZyB9KVxuICovXG5mdW5jdGlvbiBmaXJzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnRzLmZpcnN0T3JEZWZhdWx0ID0gZmlyc3RPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZm9yRWFjaF9xXzogRXhlY3V0ZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIGVhY2ggcm93IGluIHRoZSBlbnVtZXJhYmxlLCByZXR1cm5pbmcgbm8gcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XG4gICAgaWYgKCFjYWxsYmFja2ZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY2FsbGJhY2tmbi5jYWxsKHRoaXNBcmcsIGl0ZW0sIGluZGV4KyspO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogZnVsbEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBmdWxsIG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGZ1bGxKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgYSBwbGFjZSB0byB0cmFjayBhO2wgaXRlbXMgaW4gdGhlIHJpZ2h0IHRoYXQgZ290IHNlbnRcbiAgICAgICAgY29uc3Qgc2VudFJpZ2h0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbnRSaWdodHMuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBnbyB0aHJvdWdoIHRoZSByaWdodCBzaWRlIG9uY2UgbW9yZSBhbmQgc2VuZCBhbnl0aGluZyB0aGF0IGRpZG4ndCBnZXQgc2VudFxuICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgaWYgKCFzZW50UmlnaHRzLmhhcyhyaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5mdWxsSm9pbiA9IGZ1bGxKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG5jb25zdCBHcm91cGluZ18xID0gcmVxdWlyZShcIi4uL1R5cGVzL0dyb3VwaW5nXCIpO1xuLyoqXG4gKiBHcm91cHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgYWNjb3JkaW5nIHRvIGEgc3BlY2lmaWVkIGtleSBzZWxlY3RvciBmdW5jdGlvbiBhbmQgY3JlYXRlcyBhIHJlc3VsdCB2YWx1ZSBmcm9tIGVhY2ggZ3JvdXAgYW5kIGl0cyBrZXkuXG4gKiBvcHRpb25hbCBlbGVtZW50IHNlbGVjdGlvbiBmdW5jdGlvbiAoZWl0aGVyIHNlY29uZCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZWxlbWVudDogZnVuYyB9IG9iamVjdClcbiAqIG9wdGlvbmFsIG91dHB1dCBwcm9qZWN0aW9uIGZ1bmN0aW9uIChlaXRoZXIgdGhpcmQgYXJndW1lbnQgb3IgZW5jbG9zZWQgaW4gYSB7IHByb2plY3Q6IGZ1bmMgfSBvYmplY3QpXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBmdW5jdGlvbiAoZWl0aGVyIGZvdXJ0aCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZXF1YWxzOiBmdW5jIH0gb2JqZWN0KVxuICpcbiAqIFRoZSBudW1iZXIgb2Ygb3ZlcmxvYWRzIGluIEMjIGlzIEhVR0UuIElmIEkgd2VyZSBtaWNyb3NvZnQsIEkgd291bGRuJ3QgaGF2ZSBkb25lIHRoaXMsIGFzIGVsZW1lbnRGdW5jdGlvbiBjb3VsZCBiZVxuICogaGFuZGxlZCBpbiBrZXlTZWxlY3RvciBhbmQgb3V0cHV0RnVudGlvbiBjb3VsZCBiZSBoYW5kbGVkIGJ5IGEgc2VsZWN0KCkgZm9sbG93aW5nIHRoZSBncm91cEJ5KCkuXG4gKiBUaGVyZSdzIGEgcG9pbnQgYmV5b25kIHdoaWNoIG1vcmUgb3B0aW9ucyBiZWNvbWVzIGxlc3MgaGVscGZ1bCByYXRoZXIgdGhhbiBtb3JlLlxuICogU2VlIGpvaW4oKSBmb3IgYW5vdGhlciBleGFtcGxlIG9mIGZ1bmN0aW9ucyBwZW9wbGUgaGF2ZSB0byBnb29nbGUgYmVmb3JlIHVzaW5nLlxuICpcbiAqIFRoZSB3ZWFrbmVzc2VzIG9mIHRoZSB0eXBlc2NyaXB0IHR5cGluZyBhbmQgb3ZlcmxvYWQgc3lzdGVtcyByZWFsbHkgc2hpbmUgdGhyb3VnaCBpbiBhIGdpYW50IGxpa2UgdGhpcy5cbiAqIElpbiBqYXZhc2NyaXB0IGl0J3Mgbm90IHBvc3NpYmxlIHRvIGtub3cgd2hhdCBpbnB1dHMgYXJlIHByb3ZpZGVkIGluIGEgbG90IG9mIHBsYWNlcy4gVGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYSBwcm9qZWN0aW9uIGZ1bmN0aW9uIGFuZCBhIGtleSBzZWxlY3RvciBmdW5jdGlvbiBpcyB0aGF0IG9uZSB0YWtlcyBvbmUgaW5wdXQgYW5kIG9uZSB0YWtlcyB0d28uIFRoaXMgaXMgZWFzeSBmb3JcbiAqIEMjIHRvIGRldGVjdCwgYnV0IGluIGphdmFzY3JpcHQsIGFsbCBmdW5jdGlvbnMgYXJlIGp1c3QgZnVuY3Rpb24oKSB0aGF0IHRha2UgYW55IG51bWJlciBvZiBpbnB1dHMuIFR5cGVzY3JpcHRcbiAqIGNhbiBrbm93IHdoaWNoIG9uZSB5b3UncmUgdXNpbmcsIGJ1dCB0aGUgZW1pdHRlZCBqYXZhc2NyaXB0IGNvZGUgaGFzIG5vIGlkZWEuXG4gKlxuICogVGhpcyBvdmVybG9hZCBzZXR1cCBpcyBpbXBvc3NpYmxlIGluIEpTOlxuICogICAgICBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24/OiBmdW5jdGlvbik7XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uPzogZnVuY3Rpb24pO1xuICogYmVjYXVzZSBKUyBzZWVzIG9ubHk6XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oZnVuY3Rpb24sIGZ1bmN0aW9uKVxuICogV2hpY2ggb25lIHdhcyBpdD8gTm8gY2x1ZS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoaXMsIGFzIGxvbmcgYXMgeW91IHBhc3NcbiAqICBvbmx5IGtleVNlbGVjdG9yLCBvclxuICogIG9ubHkga2V5U2VsZWN0b3IgYW5kIGVsZW1lbnRGdW5jdGlvbiwgb1xuICogIG9ubHkga2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24sIG9yXG4gKiAgb25seSBrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiBhbmQgY29tcGFyZXIsXG4gKiB5b3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsLCBidXQgYW55IG92ZXJsb2FkIHdoaWNoIG9taXRzIGEgcHJldmlvdXMgdmFsdWUgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZlxuICogICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgeyBwYXJhbTM6IHZhbHVlIH0pXG4gKiB3aGljaCB0cmFuc2xhdGVzIHRvXG4gKiAgICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgdW5kZWZpbmVkLCB2YWx1ZSlcbiAqL1xuZnVuY3Rpb24gZ3JvdXBCeShncm91cEZ1bmN0aW9uLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghZ3JvdXBGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgZWxlbWVudG9yO1xuICAgIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgdHlwZW9mIGVsZW1lbnRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVsZW1lbnRvciA9IGVsZW1lbnRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwiZWxlbWVudFwiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBlbGVtZW50b3IgPSBlbGVtZW50RnVuY3Rpb24uZWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHByb2plY3RvcjtcbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJvamVjdG9yID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcInByb2plY3RcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgcHJvamVjdG9yID0gZWxlbWVudEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwicHJvamVjdFwiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHByb2plY3RvciA9IG91dHB1dEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gZWxlbWVudEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBCeShkYXRhKSB7XG4gICAgICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgcmV0dXJuaW5nIGFzIGlmIGl0J3MgZGVmZXJyZWQgZXhlY3V0aW9uLCBpdCdzIG5vdCByZWFsbHkgZGVmZXJyZWQuIEl0IGhhcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3RcbiAgICAgICAgLy8gdG8ga25vdyB3aGF0IHRpbWVzIGVhY2ggaW5kaXZpZHVhbCBrZXkgYXBwZWFycy5cbiAgICAgICAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZEtleSA9IGdyb3VwRnVuY3Rpb24ocm93KTtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBjYWNoZS5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcihpbm5lckl0ZW0sIGV4dHJhY3RlZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGV4dHJhY3RlZEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5hZGQocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhY2hlLnNldChleHRyYWN0ZWRLZXksIG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGV4dHJhY3RlZEtleSwgcm93LCBlbGVtZW50b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBjYWNoZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwcm9qZWN0b3Iocm93WzBdLCByb3dbMV0udmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRvcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuY29uc3QgR3JvdXBpbmdfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Hcm91cGluZ1wiKTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGdyb3VwSm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXkgZXF1YWxpdHkgYW5kIGdyb3VwcyB0aGUgcmVzdWx0cy5cbiAqXG4gKiBUaGlzIGlzIGEgc29ydCBvZiBhIGNvbWJpbmF0aW9uIG9mIG91dGVyIGpvaW4gYW5kIGhhbGYgYSBncm91cCBieSAob25seSB0aGUgc2Vjb25kIHNlcXVlbmNlIGlzIGdyb3VwZWQpLlxuICogVGhlIG91dHB1dCBmdW5jdGlvbiwgd2hpY2ggZGV0ZXJtaW5lcyB0aGUgb3V0cHV0LCBpcyByZXF1aXJlZC4gVGhpcyBkb2Vzbid0IHNlZW0gdXNlZnVsIGVub3VnaCBmb3IgbWUgdG8gY29tZSB1cCB3aXRoIGEgZGVmYXVsdCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGdyb3VwSm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IgfHwgIW91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS4gXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBjb25zdCByaWdodCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBncm91cGluZztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGNvbXBhcmUobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmcuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZyA9IG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGxlZnRLZXksIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXRGdW5jdGlvbihsZWZ0SXRlbSwgZ3JvdXBpbmcudmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGxlZnRJdGVtLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ3JvdXBKb2luID0gZ3JvdXBKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGlubmVySm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGlubmVyIGpvaW4uIFRoaXMgY29tYmluZXMgdGhlIHR3byBrZXkgbG9va3VwcyBhbmQgdGhlIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGFcbiAqIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC4gRm9yIG1vc3QgcHJvZ3JhbW1lcnMsIHRoaXMgaXMgYWxsIHRoZSBjb21wbGV4aXR5IHlvdSdsbCBuZWVkLlxuICovXG5mdW5jdGlvbiBpbm5lckpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbm5lckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFRoZSByaWdodCBzaWRlIGNhbiB0aGVvcmV0aWNhbGx5IGJlIGEgZ2VuZXJhdG9yLiBXZSBkb24ndCBrbm93LCBidXQgd2UgaGF2ZSB0byB0YWtlIHRoYXQgY2hhbmNlLlxuICAgICAgICAvLyBKUyBkb2Vzbid0IGdpdmUgYSB3YXkgdG8gcmVzdGFydCBhIGdlbmVyYXRvciwgc28gd2UgY2FuIG9ubHkgY2hlY2sgcmlnaHQgb25jZSB3aXRob3V0IHNvbWUgZXh0cmEgQlMgdG8gYWxsb3cgaXQgdG8gcmVzdGFydFxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbm5lckpvaW4gPSBpbm5lckpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGludGVyc2VjdF9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcy5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwcm92aWRlZFxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3Qoc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBzZWNvbmRTZXQuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2Ygc2Vjb25kU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW4gYm90aCBzZXRzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRTZXQuaGFzKGl0ZW0pICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaW50ZXJzZWN0ID0gaW50ZXJzZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBpbnRlcnNlY3RCeV9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHByb3ZpZGVkXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdEJ5KHNlY29uZCwga2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0QnkoZGF0YSkge1xuICAgICAgICBjb25zdCBzZWNvbmRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgc2Vjb25kU2V0LmFkZChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBzZWNvbmRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGluIGJvdGggc2V0cy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNldC5oYXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAhaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnNlY3RCeSA9IGludGVyc2VjdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24gbWF0Y2hpbmcga2V5cy4gT25seSByZWNvcmRzIGFyZSByZXR1cm5lZCB3aGVuIGJvdGggc2lkZXMgbWF0Y2guXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIGtleXMuXG4gKlxuICogSWYgdGhlIG91dHB1dCBzZWxlY3RvciBpcyBsZWZ0IG91dCwgcmVzdWx0cyBhcmUgcmV0dXJuZWQgYXMgW2ZpcnN0IHJvdywgc2Vjb25kIHJvd10uIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIywgd2hpY2ggcmVxdWlyZXMgdGhlIG91dHB1dCBzZWxlY3Rvci5cbiAqXG4gKiBMZWF2aW5nIHRoZSBvdXRwdXQgc2VsZWN0b3Igb3V0IHJlcXVpcmVzIHBhc3NpbmcgY29tcGFyZXIgaW4gYXMgeyBlcXVhbHM6IGNvbXBhcmVyIH0gaWYgeW91IHdhbnQgdG8gdXNlIGl0LiBTZWUgdGhlIGxvbmcgZGlzY3Vzc2lvblxuICogaW4gR3JvdXBCeSBmb3IgZGV0YWlscy5cbiAqL1xuZnVuY3Rpb24gam9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9qb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIHN0YXRpc3RpY3MgYW5kIGluZGV4IGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEtleSA9IHNlY29uZEtleVNlbGVjdG9yKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGVxdWFsaXplcihsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBsYXN0X3FfOiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZS4gVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gbGFzdChtYXRjaEZ1bmN0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgLy8gQ2FuJ3QgY2hlY2sgaWYgbGFzdEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgYmVjYXVzZSB0aGUgbGFzdCBpdGVtIGNvdWxkIGFjdHVhbGx5IGJlIFwidW5kZWZpbmVkXCIuXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuJ3QgdGVsbCB0aGF0IGV2ZXJ5IHBsYWNlIGZvdW5kIHdhcyB0cnVlLCBsYXN0SXRlbSB3YXMgYWxzbyBzZXQ7XG4gICAgICAgIHJldHVybiBsYXN0SXRlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbGFzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRha2luZyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICogSWYgdGhlIGZpbHRlcmVkIHNlcXVlbmNlIGlzIGVtcHR5LCBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBwYXJhbWV0ZXIgb3IgaXMgdW5kZWZpbmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgbm90IGFuIGVtcHR5IHNlcXVlbmNlLilcbiAqXG4gKiBJbiBKYXZhU2NyaXB0LCBpZiB5b3UgY2FsbCB0aGUgbWV0aG9kIHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGFuZCB3YW50IGl0IHRvIGJlIHRoZSBkZWZhdWx0LCB0aGVyZSdzIG5vIGNsZWFuIHdheSB0byBpbmRpY2F0ZSB0aGF0IHRoaXNcbiAqIGlzIHdoYXQgeW91IHdhbnQsIGJlY2F1c2UgaXQgYnJlYWtzIHRoZSBjYXNlIHdoZXJlIHlvdSBwYXNzIGEgZmlsdGVyIGNvbmRpdGlvbi4gQSBzaW5nbGUgcHJlZGljYXRlIGNvdWxkIGJlIGEgZmlsdGVyIGNvbmRpdGlvbiBvciBpdFxuICogY291bGQgYmUgdGhlIGRlZmF1bHQgZm9yIGFuIGFycmF5IG9mIHByZWRpY2F0ZXMgLi4uIHlvdSBkb24ndCBrbm93LiBUaGVyZWZvcmUsIGlmIHlvdSB3YW50IHRvIHBhc3Mgb25seSBhIGRlZmF1bHQgdmFsdWUsIGNhbGwgbGlrZVxuICogdGhpczogZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gbGFzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0SXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICAvLyBDYW4ndCBjaGVjayBpZiBsYXN0SXRlbSBpcyBub3QgdW5kZWZpbmVkLCBiZWNhdXNlIHRoZSBsYXN0IGl0ZW0gY291bGQgYWN0dWFsbHkgYmUgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gVHlwZVNjcmlwdCBjYW4ndCB0ZWxsIHRoYXQgZXZlcnkgcGxhY2UgZm91bmQgd2FzIHRydWUsIGxhc3RJdGVtIHdhcyBhbHNvIHNldDtcbiAgICAgICAgcmV0dXJuIGxhc3RJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5sYXN0T3JEZWZhdWx0ID0gbGFzdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBsZWZ0Sm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGxlZnQgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gbGVmdEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmxlZnRKb2luID0gbGVmdEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGxvbmdDb3VudChjb25kaXRpb24pIHtcbiAgICBsZXQgY3RyID0gQmlnSW50KDApO1xuICAgIGNvbnN0IG9uZSA9IEJpZ0ludCgxKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdHI7XG59XG5leHBvcnRzLmxvbmdDb3VudCA9IGxvbmdDb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heF9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1heCByZXN1bHQgcmV0dXJuZWQuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIG9ubHkgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqL1xuZnVuY3Rpb24gbWF4KHRyYW5zZm9ybSwgY29tcGFyZXIpIHtcbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heHZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4dmFsKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXh2YWw7XG59XG5leHBvcnRzLm1heCA9IG1heDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heEJ5X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UgdXNpbmcgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqXG4gKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIE1heEJ5IGFuZCBNYXggd2l0aCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlzIHRoYXQgTWF4IHJldHVybnMgdGhlIG91dHB1dCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gd2hpbGUgTWF4QnlcbiAqIHJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLiBUaGlzIHNhbWUgcmVzdWx0IGNvdWxkIGJlIGFjaGlldmVkIHdpdGggTWF4IGFuZCBhIHdlbGwtZGVzaWduZWQgY29tcGFyZXIgZnVuY3Rpb24sIG9mIGNvdXJzZS5cbiAqL1xuZnVuY3Rpb24gbWF4Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4O1xuICAgIGxldCBtYXhWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4KSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFZhbHVlO1xufVxuZXhwb3J0cy5tYXhCeSA9IG1heEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWF4T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuIElmIHNlcXVlbmNlIGlzIGVtcHR5LCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIG9yIHVuZGVmaW5lZC5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtYXggcmVzdWx0IHJldHVybmVkLlxuICogVGhpcyBpcyBhIEpPSU4tc3BlY2lmaWMgbWV0aG9kLiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGluIEMjLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgZGVmYXVsdFZhbHVlIGluIGFueXRoaW5nIGJ1dCB0aGUgZmluYWwgdmFsdWUsIGl0IG11c3QgYmUgZW5jbG9zZWQgbGlrZSBzbzogeyBkZWZhdWx0VmFsdWUgfVxuICovXG5mdW5jdGlvbiBtYXhPckRlZmF1bHQodHJhbnNmb3JtLCBjb21wYXJlciwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGRlZjtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBkZWYgPSBjb21wYXJlci5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBkZWYgPSB0cmFuc2Zvcm0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIgJiYgIShcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4dmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtYXh2YWwpID4gMCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICByZXR1cm4gbWF4dmFsO1xufVxuZXhwb3J0cy5tYXhPckRlZmF1bHQgPSBtYXhPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5fcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtaW4gcmVzdWx0IHJldHVybmVkLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCBvbmx5IHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKi9cbmZ1bmN0aW9uIG1pbih0cmFuc2Zvcm0sIGNvbXBhcmVyKSB7XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW52YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbnZhbCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWludmFsKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWludmFsO1xufVxuZXhwb3J0cy5taW4gPSBtaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5CeV9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlIHVzaW5nIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBNaW5CeSBhbmQgTWluIHdpdGggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyB0aGF0IE1pbiByZXR1cm5zIHRoZSBvdXRwdXQgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIHdoaWxlIE1pbkJ5XG4gKiByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS4gVGhpcyBzYW1lIHJlc3VsdCBjb3VsZCBiZSBhY2hpZXZlZCB3aXRoIE1pbiBhbmQgYSB3ZWxsLWRlc2lnbmVkIGNvbXBhcmVyIGZ1bmN0aW9uLCBvZiBjb3Vyc2UuXG4gKi9cbmZ1bmN0aW9uIG1pbkJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgbWluVmFsdWU7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbikgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtaW5WYWx1ZTtcbn1cbmV4cG9ydHMubWluQnkgPSBtaW5CeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1pbk9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLiBJZiBzZXF1ZW5jZSBpcyBlbXB0eSwgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciB1bmRlZmluZWQuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWluIHJlc3VsdCByZXR1cm5lZC5cbiAqIFRoaXMgaXMgYSBKT0lOLXNwZWNpZmljIG1ldGhvZC4gVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBpbiBDIy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGRlZmF1bHRWYWx1ZSBpbiBhbnl0aGluZyBidXQgdGhlIGZpbmFsIHZhbHVlLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGxpa2Ugc286IHsgZGVmYXVsdFZhbHVlIH1cbiAqL1xuZnVuY3Rpb24gbWluT3JEZWZhdWx0KHRyYW5zZm9ybSwgY29tcGFyZXIsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBkZWY7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZGVmID0gY29tcGFyZXIuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZGVmID0gdHJhbnNmb3JtLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyICYmICEoXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbnZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWludmFsKSA8IDApIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnZhbDtcbn1cbmV4cG9ydHMubWluT3JEZWZhdWx0ID0gbWluT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIG9mVHlwZV9xXzogRmlsdGVycyB0aGUgZWxlbWVudHMgb2YgYW4gSUVudW1lcmFibGUgYmFzZWQgb24gYSBzcGVjaWZpZWQgdHlwZS5cbiAqXG4gKiBJbiBKUyB0aGlzIGlzIGtpbmQgb2YgbWVhbmluZ2xlc3MuIElmIHlvdSBwcm92aWRlIGEgc3RyaW5nLCBpdCBkb2VzIGEgdHlwZW9mLiBJZiB5b3UgcHJvdmlkZSBhIGNsYXNzLCBpdCBkb2VzIGFuIGluc3RhbmNlb2YuXG4gKi9cbmZ1bmN0aW9uIG9mVHlwZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfb2ZUeXBlKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUganVzdCB0YWtpbmcgaXQgb24gdGhlIGNvZGVyJ3MgaG9ub3IgdGhhdCBmaWx0ZXIgbWF0Y2hlcyBSLiBObyB3YXkgdG8gYWN0dWFsbHkgdGVzdCBpdC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5vZlR5cGUgPSBvZlR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE9yZGVyZWRFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vRW51bWVyYWJsZS9PcmRlcmVkRW51bWVyYWJsZVwiKTtcbi8vIFdBUk5JTkchXG4vLyBUaGVzZSB0d28gbWV0aG9kcyBtdXN0IGJlIGFkZGVkIHRvIEVudW1lcmFibGUgdXNpbmcgcHJvdG90eXBlIG1vZGlmaWNhdGlvbiwgYmVjYXVzZSBkZWNsYXJpbmcgdGhlbSBpbiB0aGUgRW51bWVyYWJsZSBjbGFzcyBtYWtlcyB0aGVcbi8vIGJyb3dzZXIgYmxvdyB1cC4gSXQncyBiZWNhdXNlIG9mIHRoZSBcIm5ldyBPcmRlcmVkRW51bWVyYWJsZVwiICh3aGljaCBkZXJpdmVzIGZyb20gRW51bWVyYWJsZSkgYmVpbmcgcmVmZXJlbmNlZC5cbi8qKlxuICogb3JkZXJCeV9xXzogU29ydHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleSBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogVGhlIGtleSBmdW5jdGlvbiBpcyBhbHNvIG9wdGlvbmFsLiBJZiB5b3UgbGVhdmUgaXQgb3V0LCBpdCdsbCBkZWZhdWx0IHRvIHRoZSBpZGVudGl0eS4gSSBnb3QgdGlyZWQgb2Ygd3JpdGluZyAub3JkZXJCeV9xXyhvID0+IG8pXG4gKiB3aGVuIHNvcnRpbmcgbnVtYmVycyBvciBzdHJpbmdzLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBjb21wYXJlciwgeW91J2xsIG5lZWQgdG8gaW5jbHVkZSB0aGUga2V5IHNlbGVjdG9yLiBJdCdzIG5vdCB3b3J0aCBteSB3aGlsZSB0byBtYWtlIGEge2NvbXBhcmVyfSBvYmplY3QgdG8gYWxsb3dcbiAqIG9ubHkgb25lIHBhcmFtZXRlciBmb3IgdGhpcyByYXJlIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyQnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpO1xufVxuZXhwb3J0cy5vcmRlckJ5ID0gb3JkZXJCeTtcbi8qKlxuICogb3JkZXJCeURlc2NlbmRpbmdfcV86IFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGRlc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5IGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBUaGUga2V5IGZ1bmN0aW9uIGlzIGFsc28gb3B0aW9uYWwuIElmIHlvdSBsZWF2ZSBpdCBvdXQsIGl0J2xsIGRlZmF1bHQgdG8gdGhlIGlkZW50aXR5LiBJIGdvdCB0aXJlZCBvZiB3cml0aW5nIC5vcmRlckJ5X3FfKG8gPT4gbylcbiAqIHdoZW4gc29ydGluZyBudW1iZXJzIG9yIHN0cmluZ3MuIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIy5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgdGhlIGNvbXBhcmVyLCB5b3UnbGwgbmVlZCB0byBpbmNsdWRlIHRoZSBrZXkgc2VsZWN0b3IuIEl0J3Mgbm90IHdvcnRoIG15IHdoaWxlIHRvIG1ha2UgYSB7Y29tcGFyZXJ9IG9iamVjdCB0byBhbGxvd1xuICogb25seSBvbmUgcGFyYW1ldGVyIGZvciB0aGlzIHJhcmUgY2FzZS5cbiAqL1xuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIsIHRydWUpO1xufVxuZXhwb3J0cy5vcmRlckJ5RGVzY2VuZGluZyA9IG9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIG91dGVySm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBJZiBubyBtYXRjaGluZyByZWNvcmQgaXMgZmluZCBpbiB0aGUgc2Vjb25kIHNlcXVlbmNlLCB1bmRlZmluZWQgaXMgc2VudCB0byB0aGUgb3V0cHV0IHNlbGVjdG9yLlxuICogT3V0ZXIgSm9pbnMgYXJlIG5vdCBwcm92aWRlZCBpbiBMSU5RLiBUaGlzIGlzIGEgbmV3IGZ1bmN0aW9uLCBmb2xsb3dpbmcgdGhlIHBhdHRlcm4gb2Ygam9pbl9xXygpO1xuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSBrZXlzXG4gKiBJZiB0aGUgb3V0cHV0IHNlbGVjdG9yIGlzIGxlZnQgb3V0LCByZXN1bHRzIGFyZSByZXR1cm5lZCBhcyBbZmlyc3Qgcm93LCBzZWNvbmQgcm93XS5cbiAqIExlYXZpbmcgdGhlIG91dHB1dCBzZWxlY3RvciBvdXQgcmVxdWlyZXMgcGFzc2luZyBjb21wYXJlciBpbiBhcyB7IGVxdWFsczogY29tcGFyZXIgfSBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gKi9cbmZ1bmN0aW9uIG91dGVySm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9vdXRlckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgc3RhdGlzdGljcyBhbmQgaW5kZXggYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuIFxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZXF1YWxpemVyKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLm91dGVySm9pbiA9IG91dGVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBwcmVwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgIH0pO1xufVxuZXhwb3J0cy5wcmVwZW5kID0gcHJlcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiByZXBsaWNhdGVfcV86IFJlcGVhdCB0aGUgaXRlbXMgaW4gYSBzZXF1ZW5jZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcGxpY2F0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbG9vcCA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKGRhdGEpO1xuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbG9vcCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29wLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVwbGljYXRlID0gcmVwbGljYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHJldmVyc2VfcV86IEludmVydHMgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlcXVlbmNlXG4gKlxuICogUmV2ZXJzZSBpcyByZWFsbHkgcG9pbnRsZXNzLiBJdCBpcyBhbHJlYWR5IGZvdW5kIG9uIHRoZSBhcnJheSBjbGFzcywgYW5kIHdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHlcbiAqIGRlbGF5ZWQgZXhlY3V0aW9uLCBpdCBjYW4gb25seSB3b3JrIGJ5IGdvaW5nIHRocm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgZW51bWVyYWJsZS5cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcmV2ZXJzZShkYXRhKSB7XG4gICAgICAgIC8vIFdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHkgZGVsYXllZCBleGVjdXRpb24sIGl0IG9idmlvdXNseSBuZWVkcyB0byBwcm9jZXNzIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgICAgICAvLyBiZWNhdXNlIGl0IGhhcyB0byBnZXQgYWxsIHRoZSB3YXkgdG8gdGhlIGxhc3QgaXRlbSBiZWZvcmUgcmV0dXJuaW5nIGEgcm93LlxuICAgICAgICBjb25zdCB0b1JldHVybiA9IFsuLi5kYXRhXTtcbiAgICAgICAgd2hpbGUgKHRvUmV0dXJuLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG9SZXR1cm4ucG9wKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogcmlnaHRKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSByaWdodCBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHJpZ2h0Sm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSBsZWZ0IHNpZGUgYWdhaW5zdCBldmVyeSByaWdodCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IGxlZnRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihkYXRhKTtcbiAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBsZXQgcmlnaHRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGxlZnRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmlnaHRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJpZ2h0Sm9pbiA9IHJpZ2h0Sm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RfcV86IHByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIGludG8gYSBuZXcgZm9ybSBieSBjYWxsaW5nIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50LlxuICogT3B0aW9uYWxseSwgdGhlIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICpcbiAqIGNhc3QoKSBpcyBtYXBwZWQgdG8gc2VsZWN0KCkgYmVjYXVzZSBpbiBqYXZhc2NyaXB0L3R5cGVzY3JpcHQsIHJ1bnRpbWUgY2FzdCgpIGRvZXNuJ3QgZXhpc3RcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIENhc3QgbmVlZGVkIHRvIGFsbG93IGNsZWFuIGludGVyZmFjZSBvdmVybG9hZHNcbiAgICAgICAgICAgIHlpZWxkIHNlbGVjdEZ1bmN0aW9uKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RNYW55X3FfOiBQcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYSBzZXF1ZW5jZSB0byBhbiBJRW51bWVyYWJsZTxUPiwgYW5kIGZsYXR0ZW5zIHRoZSByZXN1bHRpbmcgc2VxdWVuY2VzIGludG8gb25lIHNlcXVlbmNlIHVzaW5nIGEgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIG9wdGlvbmFsbHksIHRoZSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqIGFuIG9wdGlvbmFsIG91dHB1dCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIG91dHB1dCBvZiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gc2VsZWN0TWFueShzdWJTZWxlY3RGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXN1YlNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGlmICghb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBpZiBSIGlzIGxlZnQgb3V0LCBpdCdzIHRoZSBzYW1lIGFzIFRFbGVtZW50LlxuICAgICAgICAvLyBUaGlzIHdvdWxkIGFsbCBiZSBlYXNpZXIgaWYgdHlwZXNjcmlwdCBoYWQgcHJvcGVyIG92ZXJsb2Fkcy5cbiAgICAgICAgb3V0cHV0RnVuY3Rpb24gPSAoKHNyYywgcm93KSA9PiByb3cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0TWFueShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBDYXN0IG5lZWRlZCB0byBhbGxvdyBjbGVhbiBpbnRlcmZhY2Ugb3ZlcmxvYWRzXG4gICAgICAgICAgICBjb25zdCBpdGVyID0gc3ViU2VsZWN0RnVuY3Rpb24oaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Ykl0ZW0gb2YgaXRlcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGl0ZW0sIHN1Ykl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdE1hbnkgPSBzZWxlY3RNYW55O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHNlcXVlbmNlRXF1YWxfcV86IERldGVybWluZXMgd2hldGhlciB0d28gc2VxdWVuY2VzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgdGhlaXIgZWxlbWVudHMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2VFcXVhbChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGNvbnN0IGl0ZXIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgY29uc3QgdmFsMiA9IGl0ZXIubmV4dCgpO1xuICAgICAgICBpZiAodmFsMS5kb25lICE9PSB2YWwyLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIGxlbmd0aFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmUodmFsMS52YWx1ZSwgdmFsMi52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbDEudmFsdWUgIT09IHZhbDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNhbWUgbGVuZ3RoIGFuZCBhbGwgaXRlbXMgaGF2ZSBzYW1lIHZhbHVlc1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zZXF1ZW5jZUVxdWFsID0gc2VxdWVuY2VFcXVhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eSBvciBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2luZ2xlKG1hdGNoRnVuY3Rpb24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGhhcyBubyBlbGVtZW50cy5cIik7XG59XG5leHBvcnRzLnNpbmdsZSA9IHNpbmdsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBzaW5nbGVPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gc2luZ2xlT3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kSXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMuc2luZ2xlT3JEZWZhdWx0ID0gc2luZ2xlT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBfcV86IEJ5cGFzc2VzIGEgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBza2lwKGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXAoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwID0gc2tpcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwTGFzdF9xXzogUmV0dXJucyBhIG5ldyBlbnVtZXJhYmxlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgZnJvbSBzb3VyY2Ugd2l0aCB0aGUgbGFzdCBjb3VudCBlbGVtZW50cyBvZiB0aGUgc291cmNlIGNvbGxlY3Rpb24gb21pdHRlZFxuICovXG5mdW5jdGlvbiBza2lwTGFzdChjb3VudCkge1xuICAgIC8vIFRoaXMgaXMgYW5vdGhlciBvbmUgd2hpY2ggaXMgdGVjaG5pY2FsbHkgZGVmZXJyZWQgZXhlY3V0aW9uLCBidXQgdGhlcmUncyBubyB3YXkgdG8gc2tpcCB0aGUgbGFzdCBuIGl0ZW1zXG4gICAgLy8gaWYgeW91IGRvbid0IGNvdW50IHRoZSBsaXN0LlxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwTGFzdChkYXRhKSB7XG4gICAgICAgIGxldCB0b1JldHVybjtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gWy4uLmRhdGFdLnNsaWNlKDAsIC0xICogY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkKiB0b1JldHVybjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tpcExhc3QgPSBza2lwTGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwV2hpbGVfcV86IEJ5cGFzc2VzIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gKiAgb3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gc2tpcFdoaWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwV2hpbGUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGdvZXMgZmFsc2UsIHRyaWdnZXJlZCBuZWVkcyB0byBnbyB0cnVlLCBhbmQgaXQgaGFzIHRvIGJlIHN0aWNreVxuICAgICAgICAgICAgdHJpZ2dlcmVkID0gdHJpZ2dlcmVkIHx8ICFmaWx0ZXIoaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwV2hpbGUgPSBza2lwV2hpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc3RlcF9xXzogcmV0dXJucyBldmVyeSBcInN0ZXBcIiBpdGVtcyBmcm9tIGEgc2VxdWVuY2VcbiAqXG4gKiBUaGlzIGlzIGEgbmV3IGl0ZW0gdGhhdCBJIGFkZGVkIGJlY2F1c2UgSSB0aG91Z2h0IGl0IG1pZ2h0IGJlIHVzZWZ1bC5cbiAqL1xuZnVuY3Rpb24gc3RlcChzdGVwQ291bnQpIHtcbiAgICBpZiAoc3RlcENvdW50IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3N0ZXAoZGF0YSkge1xuICAgICAgICBsZXQgdG1wU3RlcCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAodG1wU3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgc3RlcFxuICAgICAgICAgICAgdG1wU3RlcCsrO1xuICAgICAgICAgICAgaWYgKHRtcFN0ZXAgPT09IHN0ZXBDb3VudCkge1xuICAgICAgICAgICAgICAgIHRtcFN0ZXAgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnN0ZXAgPSBzdGVwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHN1bV9xXzogQ29tcHV0ZXMgdGhlIHN1bSBvZiB0aGUgc2VxdWVuY2Ugb2YgdmFsdWVzIHRoYXQgYXJlIG9idGFpbmVkIGJ5IGludm9raW5nIGFuIG9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIHN1bShzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBzdW12YWwgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVUb0FkZCA9ICtzZWxlY3RGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZVRvQWRkKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGludmFsaWQgbnVtYmVyIGFmdGVyIHRyYW5zZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VtdmFsID0gc3VtdmFsICsgdmFsdWVUb0FkZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ251bWJlcicgfHwgaXNOYU4oaXRlbSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBpbnZhbGlkIG51bWJlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1bXZhbCA9IHN1bXZhbCArIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bXZhbDtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VfcV86IFJldHVybnMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbnRpZ3VvdXMgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgYSBzZXF1ZW5jZS5cbiAqIFRoZSBza2lwIHBhcmFtZXRlciBpcyBhIEpTLXNwZWNpZmljIG1vZGlmaWNhdGlvbiB0byBpbXBsZW1lbnQgUmFuZ2UsIHdoaWNoIGlzIGEgQyMtb25seSBvYmplY3QgKHdpdGggYW4gb2RkIHN5bnRheClcbiAqL1xuZnVuY3Rpb24gdGFrZShjb3VudCwgc2tpcCA9IDApIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZShkYXRhKSB7XG4gICAgICAgIGlmIChza2lwIDwgMCkge1xuICAgICAgICAgICAgc2tpcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChza2lwID4gMCkge1xuICAgICAgICAgICAgICAgIHNraXAtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudGFrZSA9IHRha2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogdGFrZUxhc3RfcV86IFJldHVybnMgYSBuZXcgZW51bWVyYWJsZSBjb2xsZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGxhc3QgY291bnQgZWxlbWVudHMgZnJvbSBzb3VyY2VcbiAqL1xuZnVuY3Rpb24gdGFrZUxhc3QoY291bnQpIHtcbiAgICAvLyBUaGlzIGlzIGFub3RoZXIgb25lIHdoaWNoIGlzIHRlY2huaWNhbGx5IGRlZmVycmVkIGV4ZWN1dGlvbiwgYnV0IHRoZXJlJ3Mgbm8gd2F5IHRvIHRha2UgdGhlIGxhc3QgbiBpdGVtc1xuICAgIC8vIGlmIHlvdSBkb24ndCBjb3VudCB0aGUgbGlzdC5cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZUxhc3QoZGF0YSkge1xuICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkKiBbLi4uZGF0YV0uc2xpY2UoLTEgKiBjb3VudCk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2VMYXN0ID0gdGFrZUxhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogdGFrZVdoaWxlX3FfOiBSZXR1cm5zIGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlLlxuICogT3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gdGFrZVdoaWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlV2hpbGUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGdvZXMgZmFsc2UsIHRyaWdnZXJlZCBuZWVkcyB0byBnbyB0cnVlLCBhbmQgaXQgaGFzIHRvIGJlIHN0aWNreVxuICAgICAgICAgICAgdHJpZ2dlcmVkID0gdHJpZ2dlcmVkIHx8ICFmaWx0ZXIoaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudGFrZVdoaWxlID0gdGFrZVdoaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMb29rdXBfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Mb29rdXBcIik7XG4vKipcbiAqIHRvQXJyYXlfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHNlcXVlbmNlIHZhbHVlcy5cbiAqIEFsaWFzZWQgdG8gdG9MaXN0X3FfIGFzIHdlbGwuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzXTtcbn1cbmV4cG9ydHMudG9BcnJheSA9IHRvQXJyYXk7XG4vKipcbiAqIHRvSGFzaFNldF9xXzogUmV0dXJucyBhIFNldCBmcm9tIGFuIGVudW1lcmFibGUuXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBzZXRzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvSGFzaFNldCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgcmVzdWx0LmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9IYXNoU2V0ID0gdG9IYXNoU2V0O1xuLyoqXG4gKiB0b0RpY3Rpb25hcnlfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IG9iamVjdCB3aXRoIHN0cmluZyBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG9iamVjdHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9EaWN0aW9uYXJ5KGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIC8vIEluIEMjLCB0b0RpY3Rpb25hcnkoKSBjYW4gcHJvZHVjZSBkaWN0aW9uYXJpZXMgd2l0aCBuby1zdHJpbmcga2V5cy5cbiAgICAvLyBUaGlzIGlzIGlsbGVnYWwgaW4gamF2YXNjcmlwdCwgc28gdG9EaWN0aW9uYXJ5KCkgaGFzIHRvIGJlIGxpbWl0ZWQuXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBkdXBsaWNhdGUga2V5c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGVsZW1lbnRTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9EaWN0aW9uYXJ5ID0gdG9EaWN0aW9uYXJ5O1xuLyoqXG4gKiB0b01hcF9xXzogUmV0dXJucyBhIGphdmFzY3JpcHQgTWFwIHdpdGggc3BlY2lmaWVkIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uXG4gKlxuICogTm90ZSB0aGF0IGluIGdlbmVyYWwsIG9iamVjdHMgZG9uJ3QgbWFrZSBnb29kIE1hcCBrZXlzLlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG1hcHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9NYXAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgLy8gSW4gQyMsIHRvRGljdGlvbmFyeSgpIGNhbiBwcm9kdWNlIGRpY3Rpb25hcmllcyB3aXRoIG5vbi1zdHJpbmcga2V5cy5cbiAgICAvLyBUaGlzIGlzIGlsbGVnYWwgaW4gamF2YXNjcmlwdCwgc28gdG9EaWN0aW9uYXJ5KCkgaGFzIHRvIGJlIGxpbWl0ZWQuXG4gICAgLy8gVG9NYXAoKSBtZXRob2QgY292ZXJzIHRoZSBnYXAuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAocmVzdWx0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBkdXBsaWNhdGUga2V5c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgZWxlbWVudFNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9NYXAgPSB0b01hcDtcbi8qKlxuICogdG9Mb29rdXBfcV86IFJldHVybnMgYSBMb29rdXAgKGN1c3RvbSBjbGFzcykgTWFwIHdpdGggc3BlY2lmaWVkIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uIEEgTG9va3VwIGlzIGxpa2UgYSBNYXAgZXhjZXB0IGl0IGFsbG93cyBtdWx0aXBsZSB2YWx1ZXMgdG8gYmUgc2V0IGZvciBhIGdpdmVuIGtleS5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBtYXBzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuIEJlaGluZCB0aGVcbiAqIHNjZW5lcywgdGhpcyBpcyB0aWxsIHVzaW5nIGEgbWFwLlxuICpcbiAqIE5vdGUgdGhhdCBpbiBnZW5lcmFsLCBvYmplY3RzIGRvbid0IG1ha2UgZ29vZCBNYXAga2V5cy5cbiAqL1xuZnVuY3Rpb24gdG9Mb29rdXAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExvb2t1cF8xLkxvb2t1cCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgZWxlbWVudFNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9Mb29rdXAgPSB0b0xvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogdW5pb25fcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzIHJldHVybmluZyB0aGUgc2V0IHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHVuaW9uKHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3VuaW9uKGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYSBsaXR0bGUgYml0IG9mIGNvcHlwYXN0YSBoZXJlIGJ1dCBpdCdzIG5vdCB3b3J0aCBtYWtpbmcgYSBzdWItZnVuY3Rpb24gZm9yIGEgc2luZ2xlIG9jY3VycmVuY2VcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudW5pb24gPSB1bmlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogdW5pb25fcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzIHJldHVybmluZyB0aGUgc2V0IHNlcXVlbmNlICBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHVuaW9uQnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3VuaW9uQnkoZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYSBsaXR0bGUgYml0IG9mIGNvcHlwYXN0YSBoZXJlIGJ1dCBpdCdzIG5vdCB3b3J0aCBtYWtpbmcgYSBzdWItZnVuY3Rpb24gZm9yIGEgc2luZ2xlIG9jY3VycmVuY2VcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVuaW9uQnkgPSB1bmlvbkJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHdoZXJlX3FfOiBGaWx0ZXJzIGEgc2VxdWVuY2Ugb2YgdmFsdWVzIGJhc2VkIG9uIGEgcHJlZGljYXRlLlxuICogT3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gd2hlcmUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3doZXJlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLndoZXJlID0gd2hlcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogemlwX3FfOiBQcm9kdWNlcyBhIHNlcXVlbmNlIG9mIHR1cGxlcyB3aXRoIGVsZW1lbnRzIGZyb20gdHdvIG9yIHRocmVlIHNwZWNpZmllZCBzZXF1ZW5jZXMuXG4gKiBJbiBwbGFjZSBvZiBhIHRoaXJkIHNlcXVlbmNlLCBhIGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCB0aGF0IGNvbWJpbmVzIHRoZSBmaXJzdCB0d28uXG4gKi9cbmZ1bmN0aW9uIHppcChzZWNvbmQsIHRoaXJkKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3ppcChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGl0ZXIyID0gc2Vjb25kW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgbGV0IGl0ZXIzO1xuICAgICAgICBsZXQgZnVuYzM7XG4gICAgICAgIGxldCBkb25lMyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcmQgJiYgdHlwZW9mIHRoaXJkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZ1bmMzID0gdGhpcmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcmQpIHtcbiAgICAgICAgICAgIGl0ZXIzID0gdGhpcmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwxID0gZGF0YS5uZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWwyID0gaXRlcjIubmV4dCgpO1xuICAgICAgICAgICAgbGV0IHZhbDM7XG4gICAgICAgICAgICBpZiAoaXRlcjMpIHtcbiAgICAgICAgICAgICAgICB2YWwzID0gaXRlcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGRvbmUzID0gdmFsMy5kb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyBhbnkgb2YgdGhlIHNlcXVlbmNlcyBydW5zIG91dCBvZiBkYXRhLCB3ZSBoYWx0LlxuICAgICAgICAgICAgaWYgKHZhbDEuZG9uZSB8fCB2YWwyLmRvbmUgfHwgZG9uZTMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVyMyAmJiB2YWwzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWUsIHZhbDMudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnVuYzMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZSwgZnVuYzModmFsMS52YWx1ZSwgdmFsMi52YWx1ZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnppcCA9IHppcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgR3JvdXBpbmcge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUsIGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gW3ZhbHVlXTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0RnVuY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGsgPT4gaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgZ2V0IFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLkdyb3VwaW5nID0gR3JvdXBpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGV4dHJhY3RDb21wYXJlcihvYmopIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKFwiY29tcGFyZVwiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmNvbXBhcmU7XG4gICAgfVxufVxuZXhwb3J0cy5leHRyYWN0Q29tcGFyZXIgPSBleHRyYWN0Q29tcGFyZXI7XG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoeCwgeSkge1xuICAgIGlmICh4ID4geSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHggPCB5KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5leHBvcnRzLmRlZmF1bHRDb21wYXJlciA9IGRlZmF1bHRDb21wYXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIob2JqKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChcImVxdWFsc1wiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmVxdWFscztcbiAgICB9XG59XG5leHBvcnRzLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyID0gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQSBsb29rdXAgaXMgYSBNYXAgdGhhdCBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIGZvciBlYWNoIGtleS4gVGhlcmUgaXMgbm8gYnVpbHQtaW4gSmF2YXNjcmlwdCBhbmFsb2d1ZS5cbiAqL1xuY2xhc3MgTG9va3VwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnZhbHVlcygpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5jbGVhcigpO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKGNhbGxiYWNrZm4pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmdldChrZXkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICBpdGVtLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5zZXQoa2V5LCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkxvb2t1cCA9IExvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNOb25lKHRlc3QpIHtcbiAgICByZXR1cm4gKHRlc3QgPT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpO1xufVxuZXhwb3J0cy5pc05vbmUgPSBpc05vbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgQ29uc29sZVZpZXcgZXh0ZW5kcyBJY2hpZ29fMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBpbm5lckh0bWw6IGBcbiAgICAgICAgICAgICAgICA8aDI+TG9nPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29uc29sZUxvZ1wiIDpsb29wPVwiLlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDogMTBweDtcIj48aS12Pi48L2ktdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IEljaGlnb18xLk9ic2VydmFibGVQcm94eS5wcm94aW1hdGUoW10pO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXcgSWNoaWdvXzEuQm91bmRDb21wb25lbnQodGhpcy52aWV3TW9kZWwsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY29uc29sZUxvZycsXG4gICAgICAgICAgICBvYnNlcnZlQWxsVmlld01vZGVsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2codGhpbmcsIHJlc3VsdCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaW5nKTtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwucHVzaCgocmVzdWx0ID8gJz4+ICcgOiAnJykgKyBjbGVhbih0aGluZykpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhbih2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNvbnNvbGVWaWV3ID0gQ29uc29sZVZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGFnZVJvdXRlciA9IG1pNS5yb3V0ZXIuUGFnZVJvdXRlcjtcbmV4cG9ydHMuQm91bmRDb21wb25lbnQgPSBtaTUuY29tcG9uZW50LkJvdW5kQ29tcG9uZW50O1xuZXhwb3J0cy5Db21wb25lbnQgPSBtaTUuY29tcG9uZW50LkNvbXBvbmVudDtcbmV4cG9ydHMuT2JzZXJ2YWJsZVByb3h5ID0gbWk1Lm9ic2VydmFibGUuT2JzZXJ2YWJsZVByb3h5O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gbWk1Lmh0bWwuY3JlYXRlRWxlbWVudDtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IG1pNS5odG1sLmVzY2FwZUh0bWw7XG5leHBvcnRzLnBhcmFncmFwaCA9IG1pNS5odG1sLnBhcmFncmFwaDtcbmV4cG9ydHMuc3BhbiA9IG1pNS5odG1sLnNwYW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuLi9zcmMvUHJvdG90eXBlRXh0ZW5zaW9uXCIpO1xuY29uc3QgVGVzdGJlbmNoVmlld18xID0gcmVxdWlyZShcIi4uL3Rlc3RzL1Rlc3RiZW5jaFZpZXdcIik7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNvbnN0IFRlc3QwMDBfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDBcIik7XG5jb25zdCBUZXN0MDAxXzEgPSByZXF1aXJlKFwiLi9UZXN0MDAxXCIpO1xuY29uc3QgVGVzdDAwMl8xID0gcmVxdWlyZShcIi4vVGVzdDAwMlwiKTtcbmNvbnN0IFRlc3QwMDNfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDNcIik7XG5jb25zdCBUZXN0MDA0XzEgPSByZXF1aXJlKFwiLi9UZXN0MDA0XCIpO1xuY29uc3QgVGVzdDAwNV8xID0gcmVxdWlyZShcIi4vVGVzdDAwNVwiKTtcbmNvbnN0IFRlc3QwMDZfMSA9IHJlcXVpcmUoXCIuL1Rlc3QwMDZcIik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIEljaGlnb18xLlBhZ2VSb3V0ZXIuY29uZmlndXJlKFtcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTAnLCBwYXlsb2FkOiBUZXN0MDAwXzEuVGVzdDAwMCB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9MScsIHBheWxvYWQ6IFRlc3QwMDFfMS5UZXN0MDAxIH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD0yJywgcGF5bG9hZDogVGVzdDAwMl8xLlRlc3QwMDIgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTMnLCBwYXlsb2FkOiBUZXN0MDAzXzEuVGVzdDAwMyB9LFxuICAgICAgICB7IHJvdXRlOiAndGVzdC86aWQ9NCcsIHBheWxvYWQ6IFRlc3QwMDRfMS5UZXN0MDA0IH0sXG4gICAgICAgIHsgcm91dGU6ICd0ZXN0LzppZD01JywgcGF5bG9hZDogVGVzdDAwNV8xLlRlc3QwMDUgfSxcbiAgICAgICAgeyByb3V0ZTogJ3Rlc3QvOmlkPTYnLCBwYXlsb2FkOiBUZXN0MDA2XzEuVGVzdDAwNiB9LFxuICAgIF0sIFRlc3RiZW5jaFZpZXdfMS5UZXN0YmVuY2hWaWV3LCB0cnVlLCAnPGRpdj5UaGVyZSBpcyBubyBwYWdlIGhlcmUuPC9kaXY+JywgJ3Rlc3QvMCcpO1xufVxubWFpbigpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnVGVzdCB0aGUgdGVzdCBiZW5jaCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5WZXJpZnkgdGhhdCB0aGUgdGVzdCBiZW5jaCB3b3JrcyBiZWZvcmUgcHJvY2VlZGluZy4gVGhlIHRlc3QgYmVuY2ggb3V0cHV0cyB0byB0aGUgbG9nIHdoaWNoIGlzIHNob3duIGJlbG93IGFuZCBpbiB0aGUgZGV2IHRvb2xzIGNvbnNvbGUuIElmIHlvdSBkb24ndCBzZWUgXCJUZXN0IHN1Y2Nlc3NmdWwsXCIgdGhlbiBpdCBmYWlsZWQsIHdpdGggYW4gZXJyb3IgaW4gdGhlIGxvZy4gSGFyZCB0b1xuICAgICAgICAgICAgc2hvdyB0aGUgbG9nIGluIHRoZSBwYWdlIGlmIHRoZSBwYWdlIGlzIGJyb2tlbiwgc28gaGF2ZSB0byBjaGVjayBkZXYgdG9vbHMgYWZ0ZXIgYWxsLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMCBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZC5cIik7XG4gICAgICAgICAgICAvLyBDb21wb25lbnQgcmVuZGVyaW5nIGlzIGFzeW5jaHJvbm91cyAob24gdGhlIG1pY3JvdGFzayBxdWV1ZSksIHNvIGhhdmUgdG8gdGVzdCBzbGlnaHRseSBhZnRlclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlTG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5kZXJpbmcgZmFpbGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQobG9nRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMoXCJIZWxsbyB3b3JsZC5cIiksIFwiTG9nIHNob3VsZCB1cGRhdGUgdGhlIHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAwID0gVGVzdDAwMDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBCYXNpY3MnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+XG4gICAgICAgICAgICAgICAgSk9JTiB0byBKYXZhc2NyaXB0IG9mZmVycyB2YXJpb3VzIG9wZXJhdGlvbnMgc3VjaCBhcyBmaWx0ZXJpbmcsIHByb2plY3Rpb24sIGFuZCBjb3VudGluZyBvbiBpdGVyYWJsZXMgc3VjaCBhcyBhcnJheXMuIFRoZSBKT0lOIGV4dGVuc2lvbiBtZXRob2RzIGNhbiBiZSBmb3VuZCBvbiBhcnJheXMsIHNvIHlvdSBjYW4gY2FsbCB0aGVtIGRpcmVjdGx5IGFzIGluIHRoZSBleGFtcGxlIDxjb2RlPnBlb3BsZS5zZWxlY3RfcV8ocSA9PiBxLmZpcnN0TmFtZSk8L2NvZGU+LiBUaGlzIGNyZWF0ZXMgYW4gRW51bWVyYWJsZSwgd2hpY2ggaXMgdGhlIGNsYXNzIGJlaGluZCBldmVyeSBKT0lOIG9wZXJhdGlvbi4gSXRlcmFibGUgbm9uLWFycmF5cywgc3VjaCBhcyBOb2RlTGlzdCwgbXVzdCBiZSBjb252ZXJ0ZWQgZmlyc3QgdG8gYW4gZW51bWVyYWJsZSB1c2luZyB0aGUgYXNRdWVyeWFibGUgZXh0ZW5zaW9uLCBhcyBpbiB0aGUgZXhhbXBsZSA8Y29kZT5lbGVtZW50cy5hc1F1ZXJ5YWJsZSgpLndoZXJlX3FfKHEgPT4gcS50YWdOYW1lID09PSAnZGl2Jyk8L2NvZGU+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTW9zdCBvZiB0aGUgbWV0aG9kcyBmb3VuZCBpbiBKT0lOIHRvIEphdmFzY3JpcHQgYXJlIHNpbWlsYXIgdG8gbWV0aG9kcyBmb3VuZCBvbiBhcnJheXMsIGJ1dCB0aGVyZSBpcyBhbiBpbXBvcnRhbnQgZGlmZmVyZW5jZS4gTWV0aG9kcyBjYWxsZWQgb24gYXJyYXlzIGV4ZWN1dGUgd2hlbiB5b3UgY2FsbCB0aGVtLiBNZXRob2RzIGluIEpPSU4gdGhhdCByZXR1cm4gdGhlIEVudW1lcmFibGUgY2xhc3Mgb25seSBjcmVhdGUgdGhlIGVudW1lcmFibGUuIFRoZXkgYXJlIG5vdCBleGVjdXRlZCB1bnRpbCB5b3UgaXRlcmF0ZSB0aGVtIG9yIGNhbGwgYSBtZXRob2QgdGhhdCBwcm9kdWNlcyBhIG5vbi1lbnVtZXJhYmxlIHJlc3VsdC4gVGhpcyBpcyBrbm93biBhcyBkZWZlcnJlZCBleGVjdXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZWZlcnJlZCBleGVjdXRpb24gaW4gSk9JTiBpcyBtYW5hZ2VkIHRocm91Z2ggdGhlIHVzZSBvZiBqYXZhc2NyaXB0IGdlbmVyYXRvcnMsIHdoaWNoIHByb2R1Y2UgcmVjb3JkcyBvbmUgYnkgb25lIHdoaWxlIHlvdSBpdGVyYXRlIHRoZSBnZW5lcmF0b3IsIG1lYW5pbmcgdGhhdCB0aGV5IGJvdGggZGVmZXIgdGhlIHN0YXJ0IG9mIHRoZSBwcm9jZXNzIGFuZCB0aGV5IGhhbHQgd2hlbiBpdGVyYXRpb24gaXMgY29tcGxldGVkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVG8gc2hvdyBieSB3YXkgb2YgZXhhbXBsZSwgdGhlIHN0YXRlbWVudHM8YnIvPlxuICAgICAgICAgICAgICAgIDxjb2RlPmFyci5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pLm1hcChtYXBGdW5jdGlvbikuc2xpY2UoMCw1KTwvY29kZT48YnIvPlxuICAgICAgICAgICAgICAgIGFuZDxici8+XG4gICAgICAgICAgICAgICAgPGNvZGU+YXJyLndoZXJlX3FfKGZpbHRlckZ1bmN0aW9uKS5zZWxlY3RfcV8obWFwRnVuY3Rpb24pLnRha2VfcV8oNSk8L2NvZGU+PC9icj5cbiAgICAgICAgICAgICAgICBwcm9kdWNlIHRoZSBleGFjdCBzYW1lIHJlc3VsdHMsIGJ1dCB0aGV5IGhhdmUgdGhlc2UgZGlmZmVyZW5jZXM6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+dGhlIHJlY29yZHMgaW4gdGhlIGFycmF5IGFyZSBwcm9jZXNzZWQgdGhhdCBtb21lbnQsIHdoaWxlIHRoZSByZWNvcmRzIGluIHRoZSBlbnVtZXJhYmxlIGFyZSBub3QgcHJvY2Vzc2VkIHVudGlsIHlvdSBpdGVyYXRlIHRoZW0sIHN1Y2ggYXMgdXNpbmcgYSBmb3Itb2YgbG9vcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5maWx0ZXJGdW5jdGlvbiBpcyBjYWxsZWQgb24gZXZlcnkgcmVjb3JkIG9mIHRoZSBhcnJheSwgd2hpbGUgaW4gdGhlIGVudW1lcmFibGUgaXQgaXMgY2FsbGVkIG9ubHkgb24gZW5vdWdoIHJlY29yZHMgdG8gcHJvZHVjZSA1IHRoYXQgbWF0Y2g8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+bWFwRnVuY3Rpb24gaXMgY2FsbGVkIG9uIGV2ZXJ5IG1hdGNoaW5nIHJlY29yZCBvZiB0aGUgYXJyYXksIHdoaWxlIGluIHRoZSBlbnVtZXJhYmxlIGl0IGlzIGNhbGxlZCBhdCBtb3N0IDUgdGltZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBNZXRob2RzIHRoYXQgcmV0dXJuIGEgc2luZ2xlIHJlc3VsdCwgc3VjaCBhcyBjb3VudF9xXygpIG9yIG1pbl9xXygpIG9yIGZpcnN0X3FfKCkgb3IgdG9BcnJheV9xXygpIG9yIHRvRGljdGlvbmFyeV9xXygpIHdpbGwgZW51bWVyYXRlIHRoZSBhcnJheSwgdGhlIHNhbWUgYXMgbG9vcGluZyB0aHJvdWdoIHdpdGggYSBmb3Itb2YgbG9vcCB3aWxsLiBBbm90aGVyIG9wZXJhdGlvbiB0aGF0IHdpbGwgbWF0ZXJpYWxpemUgdGhlIGl0ZXJhYmxlIGlzIGNhbGxpbmcgSlNPTi5zdHJpbmdpZnkoKSBvbiBpdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE9uY2UgeW91IGl0ZXJhdGUgYW4gRW51bWVyYWJsZSwgdGhlIHF1ZXJ5IHdpbGwgYmUgcHJvY2Vzc2VkLCBhbmQgdGhlIGdlbmVyYXRvciBwcm92aWRpbmcgdGhlIGRhdGEgaXMgY2xvc2VkLiBJbiBDIyBMSU5RIHRvIE9iamVjdHMgaWYgeW91IHdhbnQgdG8gcmUtdXNlIHF1ZXJ5IGRhdGEsIHlvdSBjYWxsIFRvQXJyYXkoKSBvbiB0aGUgcXVlcnkgYW5kIGNhcHR1cmUgdGhlIHJlc3VsdCwgYnV0IEpPSU4gdG8gSmF2YXNjcmlwdCB3aWxsIGNhY2hlIHRoZSBkYXRhIHJldHVybmVkIHNvIGxhdGVyIGl0ZXJhdGlvbnMgcmV0dXJuIGZyb20gdGhlIGNhY2hlLiBJdCdzIHN0aWxsIGdvb2QgY29kaW5nIHByYWN0aWNlIHRvIGJlIGV4cGxpY2l0IGFuZCB1c2UgdG9BcnJheV9xXygpLCBidXQgeW91IGRvbid0IGhhdmUgdG8uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMSBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBzaW1wbGUgZW51bWVyYWJsZSBidXQgZG8gbm90IHRyaWdnZXIgZXhlY3V0aW9uLlxuICAgICAgICAgICAgdGhpcy5sb2coYGNvbnN0IHF1ZXJ5YWJsZTEgPSBbMSwgMiwgM10uc2VsZWN0X3FfKGEgPT4gMyAqIGEpOyAvLyBjcmVhdGVkIGJ1dCBub3QgZXhlY3V0ZWRgKTtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5YWJsZTEgPSBbMSwgMiwgM10uc2VsZWN0X3FfKGEgPT4gMyAqIGEpO1xuICAgICAgICAgICAgLy8gVGhlIHN0YXR1cyBvZiB0aGUgZ2VuZXJhdG9yIGlzIGhpZGRlbiBpbiB0eXBlc2NyaXB0LCBzbyB0byBnZXQgYXQgcHJpdmF0ZVxuICAgICAgICAgICAgLy8gZmllbGRzIHdlIGhhdmUgdG8gY2FzdCBhcyBhbnkuIFlvdSBjYW4gbG9vayBhdCB0aGlzIGluIGRlYnVnIHRvb2xzOlxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5YWJsZTEuX3NvdXJjZSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc29sZS5sb2cocXVlcnlhYmxlMS5faXNDbG9zZWQpOyAvLyBzaG91bGQgYmUgZmFsc2VgKTtcbiAgICAgICAgICAgIC8vIFRoZXJlIHNlZW1zIHRvIGJlIG5vIHdheSBpbiBjb2RlIHRvIHZpZXcgdGhlIGdlbmVyYXRvciBzdGF0dXMgKGp1c3QgcmVkIHNxdWlnZ2xlcyB1bmRlciBbW0dlbmVyYXRvclN0YXR1c11dKVxuICAgICAgICAgICAgLy8gc28gd2UgY2hlY2sgdGhlIF9pc0Nsb3NlZCBmbGFnIHNldCBvbiBnZW5lcmF0b3IgY2xvc2UuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBxdWVyeWFibGUxLl9pc0Nsb3NlZDtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwMSwgJ1F1ZXJ5YWJsZSBpcyBub3QgY2xvc2VkIHdoZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpOyAvLyBtYXRlcmlhbGl6ZXMgdGhlIGVudW1lcmFibGVgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHF1ZXJ5YWJsZTEudG9BcnJheV9xXygpLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zb2xlLmxvZyhxdWVyeWFibGUxLl9pc0Nsb3NlZCk7IC8vIHNob3VsZCBiZSB0cnVlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBxdWVyeWFibGUxLl9pc0Nsb3NlZDtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAyLCAnUXVlcnlhYmxlIGlzIGNsb3NlZCBhZnRlciBpdGVyYXRpb24nKTtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRvcnMgY2FuIG9ubHkgcHJvZHVjZSBkYXRhIG9uY2UuIElmIG5vdCBmb3IgdGhlIGNhY2hlLCB5b3UnZCBoYXZlIHRvIHNwZWNpZnkgdGhlIHdob2xlIGNvZGVcbiAgICAgICAgICAgIC8vIFsxLCAyLCAzXS5zZWxlY3RfcV8oYSA9PiAzICogYSkgZWFjaCB0aW1lLCBvciBqdXN0IHN0b3JlIHRoZSBhcnJheSBvdXRwdXQuXG4gICAgICAgICAgICAvLyBCdXQgdGhlIEVudW1lcmFibGUgY2xhc3MgY2FjaGVzIHRoZSByZXN1bHRzIHdoZW4geW91IHB1bGwgdGhlbSwgc28gd2hlbiB0aGUgZ2VuZXJhdG9yIGlzIGNsb3NlZCwgeW91IHB1bGwgZnJvbSB0aGUgY2FjaGUuXG4gICAgICAgICAgICB0aGlzLmxvZyhgcXVlcnlhYmxlMS50b0FycmF5X3FfKCk7IC8vIHB1bGxzIGZyb20gdGhlIGNhY2hlLiBpbiBhIGRlZmF1bHQgZ2VuZXJhdG9yLCB0aGlzIHdvdWxkIGJlIHt9YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBxdWVyeWFibGUxLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzLmxlbmd0aCA9PT0gMywgJ3RvQXJyYXkgc3RpbGwgd29ya3MgYWZ0ZXIgY2xvc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZvbycsICdiYXInLCAnYmF6J10uYXNRdWVyeWFibGUoKSAvLyB0YWtlcyBhbiBhcnJheSwgY29udmVydHMgaXQgdG8gYSBxdWVyeWFibGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsnZm9vJywgJ2JhcicsICdiYXonXS5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0WzBdID09PSAnZm9vJyAmJiB0ZXN0MDRbMV0gPT09ICdiYXInICYmIHRlc3QwNFsyXSA9PT0gJ2JheicsICdFbnVtZXJhdGUgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGAnYWJjJy5hc1F1ZXJ5YWJsZSgpIC8vIGNhbGxpbmcgYXNRdWVyeWFibGUoKSBvbiBhIHN0cmluZyBwcm9kdWNlcyBhIGNoYXJhY3RlciBlbnVtZXJhYmxlIC4uLiB0aGlzIGhhcyBhLGIsY2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gJ2FiYycuYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNVswXSA9PT0gJ2EnICYmIHRlc3QwNVsxXSA9PT0gJ2InICYmIHRlc3QwNVsyXSA9PT0gJ2MnLCAnU3RyaW5ncyBjYW4gYmUgY29udmVydGVkIHRvIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYCg1KS5hc1F1ZXJ5YWJsZSgpIC8vIGNhbGxpbmcgYXNRdWVyeWFibGUoKSBvbiBhIG51bWJlciBwcm9kdWNlcyBhIHJhbmdlIG9mIG51bWJlcnMgLi4uIHRoaXMgaXMgYSA1LWl0ZW0gZW51bWVyYWJsZSBoYXZpbmcgMCwxLDIsMyw0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDYgPSAoNSkuYXNRdWVyeWFibGUoKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNi5sZW5ndGggPT09IDUgJiYgdGVzdDA2LmFsbF9xXygocSwgaWR4KSA9PiBxID09PSBpZHgpLCAnTnVtYmVycyBjYW4gYmUgY29udmVydGVkIHRvIHF1ZXJ5YWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYHJhbmRvbUdlbmVyYXRvcigpLmFzUXVlcnlhYmxlKCkgLy8gYW55IGl0ZXJhYmxlIGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBxdWVyeWFibGVgKTtcbiAgICAgICAgICAgIC8vIGFueXRoaW5nIGNhbiBiZSB0dXJuZWQgaW50byBhIHF1ZXJ5YWJsZSwgd2hpY2ggZW5hYmxlcyB0aGUgSk9JTiBtZXRob2RzXG4gICAgICAgICAgICBmdW5jdGlvbiogcmFuZG9tR2VuZXJhdG9yKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIDE7XG4gICAgICAgICAgICAgICAgeWllbGQgNDtcbiAgICAgICAgICAgICAgICB5aWVsZCAxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5YWJsZTIgPSByYW5kb21HZW5lcmF0b3IoKS5hc1F1ZXJ5YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gcXVlcnlhYmxlMi50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwN1swXSA9PT0gMSAmJiB0ZXN0MDdbMV0gPT09IDQgJiYgdGVzdDA3WzJdID09PSAxNiwgJ0l0ZXJhYmxlcyBjYW4gYmUgY29udmVydGVkIHRvIGEgcXVlcnlhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhge25hbWV9LmFzUXVlcnlhYmxlKCkgLy8gdGhvdWdoIGl0J3MgdXNlbGVzcywgbm9uLWl0ZXJhYmxlIG9iamVjdHMgY2FuIGJlIG1hZGUgcXVlcnlhYmxlIC4uLiB0aGlzIGlzIGEgbGVuZ3RoIDEgZW51bWVyYWJsZSBjb250YWluaW5nIHtuYW1lfSBhcyBpdHMgb25seSBlbGVtZW50YCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBuYW1lOiAnRm9vJyB9O1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gaXRlbS5hc1F1ZXJ5YWJsZSgpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4Lmxlbmd0aCA9PT0gMSAmJiB0ZXN0MDhbMF0gPT09IGl0ZW0sICdhbnkgb2JqZWN0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBxdWVyeWFibGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwMSA9IFRlc3QwMDE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RDYXNlVmlld01vZGVsXzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdNb2RlbFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vYXNzZXJ0XCIpO1xuY29uc3QgVGVzdENhc2VWaWV3XzEgPSByZXF1aXJlKFwiLi9UZXN0Q2FzZVZpZXdcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdDb252ZXJzaW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGVzZSBtZXRob2RzIGFyZSB1c2VkIHRvIGNvbnZlcnQgZW51bWVyYWJsZXMgaW50byBvcmRpbmFyeSBvYmplY3RzOiBhcnJheXMsIG1hcHMsIHNldHMsIGxvb2t1cHM8L3A+YFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIFRlc3QwMDIgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdfMS5UZXN0Q2FzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVGVzdFZpZXdNb2RlbCgpKTtcbiAgICB9XG4gICAgdGVzdENhc2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBEbyB5b3VyIHRlc3RpbmcgaGVyZVxuICAgICAgICAgICAgY29uc3QgdGVzdDAxID0gWzEsIDMsIDVdLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0udG9BcnJheV9xXygpIC8vIGFuIGV4dHJlbWVseSByZWR1bmRhbnQgZXhhbXBsZSAuLi4gbWFrZXMgYW4gYXJyYXlgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxWzBdID09PSAxICYmIHRlc3QwMVsxXSA9PT0gMyAmJiB0ZXN0MDFbMl0gPT09IDUsICdBcnJheSBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgMywgNV0udG9MaXN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDVdLnRvTGlzdF9xXygpIC8vIHRvTGlzdF9xXygpIGlzIGFsaWFzZWQgdG8gdG9BcnJheV9xXygpYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMlswXSA9PT0gMSAmJiB0ZXN0MDJbMV0gPT09IDMgJiYgdGVzdDAyWzJdID09PSA1LCAnQXJyYXkgaXMgY3JlYXRlZCBieSBUb0xpc3QoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvRGljdGlvbmFyeV9xXyhxID0+IHEubmFtZSk7IC8vIHByb2R1Y2VzIGFuIG9iamVjdCB3aGVyZSBrZXlzIGFyZSBCb2IgYW5kIENhcm9sIGFuZCB0aGUgdmFsdWVzIGFyZSB0aGUgb2JqZWN0IGUuZy4geyBuYW1lOiAnQm9iJywgd2luczogMjAgfWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9EaWN0aW9uYXJ5X3FfKHEgPT4gcS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzWydCb2InXS53aW5zID09PSAyMCwgJ09iamVjdCBkaWN0aW9uYXJ5IGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKSAvLyBwcm9kdWNlcyB7XCJCb2JcIjoyMCxcIkNhcm9sXCI6MzR9YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDQgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b0RpY3Rpb25hcnlfcV8ocSA9PiBxLm5hbWUsIHEgPT4gcS53aW5zKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA0WydCb2InXSA9PT0gMjAsICdOdW1iZXIgZGljdGlvbmFyeSBpcyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIG1hcHNcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUuZW50cmllcygpLmFzUXVlcnlhYmxlKCkucHJlcGVuZF9xXyhcIjwtIE1BUCAtPlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2coJ05vcm1hbCBKUyBvYmplY3RzIGNhbm5vdCBoYXZlIGtleXMgdGhhdCBhcmUgbm90IHN0cmluZ3MsIHNvIGlmIHlvdSB3YW50IG9iamVjdCBrZXlzIHlvdSBtdXN0IHVzZSBNYXAuIFRoaXMgaXMgbm90IGV4Y2VlZGluZ2x5IHVzZWZ1bCBiZWNhdXNlIG9iamVjdHMgZG8gbm90IG1ha2UgZ29vZCBrZXlzLicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH1dLnRvTWFwX3FfKHEgPT4gKHsgbmFtZTogcS5uYW1lIH0pKTsgLy8gcHJvZHVjZXMgYSBtYXAgd2l0aCB7IG5hbWUgfSBrZXlzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDUsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA1LnNpemUgPT09IDIgJiYgISFbLi4udGVzdDA1LmtleXMoKV0uZmluZChtID0+IG0ubmFtZSA9PT0gJ0Nhcm9sJyksICdPYmplY3QgbWFwIGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9XS50b01hcF9xXyhxID0+ICh7IG5hbWU6IHEubmFtZSB9KSwgcSA9PiBxLndpbnMpIC8vIHByb2R1Y2VzIGEgbWFwIHdpdGggeyBuYW1lIH0ga2V5cyBhbmQgd2lucyBhcyB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gW3sgbmFtZTogJ0JvYicsIHdpbnM6IDIwIH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMzQgfV0udG9NYXBfcV8ocSA9PiAoeyBuYW1lOiBxLm5hbWUgfSksIHEgPT4gcS53aW5zKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwNiwgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2l6ZSA9PT0gMiAmJiBbLi4udGVzdDA2LmVudHJpZXMoKV0uZmluZChtID0+IG1bMF0ubmFtZSA9PT0gJ0Nhcm9sJylbMV0gPT09IDM0LCAnT2JqZWN0IG1hcCBpcyBjcmVhdGVkIHdpdGggZWxlbWVudCBzZWxlY3RvcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0pTIG9iamVjdHMgYW5kIE1hcCBkbyBub3QgYWxsb3cgbXVsdGlwbGUgdmFsdWVzIGZvciBhIGtleSwgc28gSk9JTiBwcm9kdWNlcyBhIExvb2t1cCwgd2hpY2ggZG9lcy4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdXaGVuIHlvdSBjYWxsIHNldCgpIG9uIGEgbG9va3VwLCBpdCBhcHBlbmRzIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIG92ZXJ3cml0aW5nIGl0LicpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG5hbWU6ICdCb2InLCB3aW5zOiAyMCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDM0IH0sIHsgbmFtZTogJ0Nhcm9sJywgd2luczogMTAgfV0udG9Mb29rdXBfcV8ocSA9PiBxLm5hbWUpIC8vIENyZWF0ZXMgYSBsb29rdXAgd2l0aCBuYW1lIGFzIGtleSwgaGVscGZ1bCB3aGVuIG5hbWVzIGFyZSBkdXBsaWNhdGVkYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QwNywgcmVwbGFjZXIpLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDcuc2l6ZSA9PT0gMiAmJiB0ZXN0MDcuZ2V0KCdDYXJvbCcpLmxlbmd0aCA9PT0gMiAmJiAhIXRlc3QwNy5nZXQoJ0Nhcm9sJykuZmluZChmID0+IGYud2lucyA9PT0gMTApLCAnTG9va3VwIGlzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucykgLy8gQ3JlYXRlcyBhIGxvb2t1cCB3aXRoIG5hbWUgYXMga2V5IGFuZCB3aW5zIGFzIHZhbHVlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbeyBuYW1lOiAnQm9iJywgd2luczogMjAgfSwgeyBuYW1lOiAnQ2Fyb2wnLCB3aW5zOiAzNCB9LCB7IG5hbWU6ICdDYXJvbCcsIHdpbnM6IDEwIH1dLnRvTG9va3VwX3FfKHEgPT4gcS5uYW1lLCBxID0+IHEud2lucyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhKU09OLnN0cmluZ2lmeSh0ZXN0MDgsIHJlcGxhY2VyKSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4LnNpemUgPT09IDIgJiYgdGVzdDA4LmdldCgnQ2Fyb2wnKS5sZW5ndGggPT09IDIgJiYgISF0ZXN0MDguZ2V0KCdDYXJvbCcpLmZpbmQoZiA9PiBmID09PSAxMCksICdMb29rdXAgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAyLCAzLCA0LCAxXS50b0hhc2hTZXRfcV8oKSAvLyBwcm9kdWNlcyBTZXQoKSBvZiBpdHMgdW5pcXVlIHZhbHVlc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDIsIDIsIDMsIDQsIDFdLnRvSGFzaFNldF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2coWy4uLnRlc3QwOV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zaXplID09PSA0ICYmIHRlc3QwOS5oYXMoMSkgJiYgdGVzdDA5LmhhcygyKSAmJiB0ZXN0MDkuaGFzKDMpICYmIHRlc3QwOS5oYXMoNCksICdTZXQgaXMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFRFU1QgJHt0aGlzLnZpZXdNb2RlbC50ZXN0TnVtYmVyfTogVGVzdCBzdWNjZXNzZnVsYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2coZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0MDAyID0gVGVzdDAwMjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVzdENhc2VWaWV3TW9kZWxfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld01vZGVsXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi9hc3NlcnRcIik7XG5jb25zdCBUZXN0Q2FzZVZpZXdfMSA9IHJlcXVpcmUoXCIuL1Rlc3RDYXNlVmlld1wiKTtcbmNsYXNzIFRlc3RWaWV3TW9kZWwgZXh0ZW5kcyBUZXN0Q2FzZVZpZXdNb2RlbF8xLlRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogJ0Jhc2ljIFNpbmdsZS1TZXF1ZW5jZSBRdWVyaWVzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDogYDxwPlRoZSBtZWF0IG9mIEpPSU4gdG8gamF2YXNjcmlwdCBpcyB0YWtlbiB1cCBieSBiYXNpYyBxdWVyeSBvcGVyYXRpb25zIHRoYXQgZXZlcnlvbmUgd2hvIHdvcmtzIHdpdGggYXJyYXlzIGlzIHVzZWQgdG86IGZpbHRlcmluZyBlbGVtZW50cywgcHJvamVjdGluZyByZXN1bHRzLCBzbGljaW5nIGFuZCBza2lwcGluZywgYW5kIHNvIG9uLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwMyBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMScpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGl0ZW1zJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0FyZSBlcXVhbCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ0V2ZXJ5IGxlc3NvbiBpbiBxdWVyaWVzIHN0YXJ0cyB3aXRoIHNlbGVjdC4gU2VsZWN0IHByb2plY3RzIGEgZnVuY3Rpb24gb250byBldmVyeSBlbnRyeSBpbiB0aGUgZW51bWVyYWJsZS4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2VsZWN0X3FfKHMgPT4gcyAqIHMpIC8vIDEsNCw5LDE2LDI1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbMSwgMiwgMywgNCwgNV0uc2VsZWN0X3FfKHMgPT4gcyAqIHMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDQsIDksIDE2LCAyNV0pLCAnU2VsZWN0IHNxdWFyZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWzEsIDIsIDMsIDRdLnNlbGVjdF9xXygoczogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4gYCR7aWR4fV4yPSR7c31gKSAvLyBmdW5jdGlvbiBjYW4gdGFrZSBpbmRleCBhcyAybmQgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgICAgLy8gVHlwZXNjcmlwdCBpcyBhbm5veWluZyBhYm91dCB0aGUgYXJndW1lbnQgdHlwZXMuIEl0IGNhbid0IGZpZ3VyZSB0aGVtIG91dCBhdXRvbWF0aWNhbGx5IGxpa2UgdXN1YWwuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKChzLCBpZHgpID0+IGAke2lkeCArIDF9XjI9JHtzICogc31gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMi5zZXF1ZW5jZUVxdWFsX3FfKFtcIjFeMj0xXCIsIFwiMl4yPTRcIiwgXCIzXjI9OVwiLCBcIjReMj0xNlwiXSksIFwiU2VsZWN0IHdpdGggaW5kZXhcIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnVGhlIHNlY29uZCBzdGVwIGluIGV2ZXJ5IGxlc3NvbiBpbiBxdWVyaWVzIGlzIFwid2hlcmUuXCInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8ocSA9PiBxICUgMiA9PT0gMCkgLy8gMiw0LDYsOGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLndoZXJlX3FfKHEgPT4gcSAlIDIgPT09IDApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAzLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDQsIDYsIDhdKSwgJ1doZXJlIGV2ZW4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ud2hlcmVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCA8IDMpIC8vIGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS53aGVyZV9xXygocSwgaWR4KSA9PiBpZHggPCAzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNC5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdXaGVyZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIllvdSBub3cga25vdyA5MCUgb2YgZXZlcnl0aGluZyB5b3UnbGwgbmVlZC4gQnV0IGhlcmUgYXJlIHNvbWUgbW9yZSBmdW5jdGlvbnMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwX3FfKDIpIC8vIDMsNCw1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDUgPSBbMSwgMiwgMywgNCwgNV0uc2tpcF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zZXF1ZW5jZUVxdWFsX3FfKFszLCA0LCA1XSksICdTa2lwIGZpcnN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc2tpcExhc3RfcV8oMikgLy8gMSwyLDNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFsxLCAyLCAzLCA0LCA1XS5za2lwTGFzdF9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNi5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSksICdTa2lwIGxhc3QgMicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8ocSA9PiBxICE9PSAzKSAvLyBza2lwIGFzIGxvbmcgYXMgY29uZGl0aW9uIGlzIGZhbHNlLCB0aGVuIHRha2UgcmVzdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXyhxID0+IHEgIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LnNlcXVlbmNlRXF1YWxfcV8oWzMsIDQsIDVdKSwgJ1NraXAgdW50aWwgMycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS5za2lwV2hpbGVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gMykgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA4ID0gWzEsIDIsIDMsIDQsIDVdLnNraXBXaGlsZV9xXygocSwgaWR4KSA9PiBpZHggIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA4LnNlcXVlbmNlRXF1YWxfcV8oWzQsIDVdKSwgJ1NraXBXaGlsZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnRha2VfcV8oMikgLy8gMSwyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDkgPSBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwOS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyXSksICdUYWtlIGZpcnN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZV9xXygzLDEpIC8vIDIsMyw0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlza2lwMSA9IFsxLCAyLCAzLCA0LCA1XS50YWtlX3FfKDMsIDEpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXNraXAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlza2lwMS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0XSksICdUYWtlIGZpcnN0IDMgYWZ0ZXIgc2tpcCAxJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkxJTlEgZG9lc24ndCBoYXZlIHRoZSBhYmlsaXR5IHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgbGlzdCBza2lwcGluZyBldmVyeSBuIHN0ZXBzLiBTbyBJIGFkZGVkIGl0LlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0uc3RlcF9xXygyKSAvLyAxLCAzLCA1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlzdGVwMSA9IFsxLCAyLCAzLCA0LCA1XS5zdGVwX3FfKDIpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXN0ZXAxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlzdGVwMS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAzLCA1XSksICdTdGVwIGV2ZXJ5IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNSwgNiwgN10uc3RlcF9xXygzKSAvLyAxLCA0LCA3YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDlzdGVwMiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5zdGVwX3FfKDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOXN0ZXAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDlzdGVwMi5zZXF1ZW5jZUVxdWFsX3FfKFsxLCA0LCA3XSksICdTdGVwIGV2ZXJ5IDMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZUxhc3RfcV8oMikgLy8gNCw1YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbMSwgMiwgMywgNCwgNV0udGFrZUxhc3RfcV8oMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTAuc2VxdWVuY2VFcXVhbF9xXyhbNCwgNV0pLCAnVGFrZSBsYXN0IDInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNCwgNV0udGFrZVdoaWxlX3FfKHEgPT4gcSAhPT0gMykgLy8gUmV0dXJuIHJvd3MgdW50aWwgY29uZGl0aW9uIGlzIHRydWUsIHRoZW4gc3RvcGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXyhxID0+IHEgIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDExLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ1Rha2VXaGlsZSBub3QgMycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1XS50YWtlV2hpbGVfcV8oKHE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gMykgLy8gZnVuY3Rpb24gY2FuIHRha2UgaW5kZXggYXMgMm5kIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gWzEsIDIsIDMsIDQsIDVdLnRha2VXaGlsZV9xXygocSwgaWR4KSA9PiBpZHggIT09IDMpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEyLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ1Rha2VXaGlsZSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDEsIDIsIDIsIDIsIDMsIDMsIDMsIDNdLmRpc3RpbmN0X3FfKCkgLy8gMSwyLDNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFsxLCAxLCAyLCAyLCAyLCAzLCAzLCAzLCAzXS5kaXN0aW5jdF9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEzLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0dldCBkaXN0aW5jdCBlbnRyaWVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XS5kaXN0aW5jdF9xXygocSwgcikgPT4gcS5hID09PSByLmEpIC8vIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwYXNzZWQgZS5nLiB0byBhbGxvdyBjb21wYXJpc29uIGJ5IGtleWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE0ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdF9xXygocSwgcikgPT4gcS5hID09PSByLmEpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE0Lm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgM10pLCAnRGlzdGluY3Qgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAyIH0sIHsgYTogMyB9LCB7IGE6IDMgfSwgeyBhOiAzIH1dLmRpc3RpbmN0QnlfcV8ocSA9PiBxLmEpIC8vIGRpc3RpbmN0QnkoKSBkb2VzIGl0cyBjaGVjayBiYXNlZCBvbiBhIGtleSBzZWxlY3RvciBmdW5jdGlvbmApO1xuICAgICAgICAgICAgdGhpcy5sb2coXCIoSSBrbm93IHRoaXMgaXMgYWxtb3N0IHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cywgYnV0IGl0IHdhcyBhZGRlZCBpbiAuTmV0IDYpXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE1ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNS5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0Rpc3RpbmN0IGJ5IGtleScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogMyB9LCB7IGE6IDMgfV0uZGlzdGluY3RCeV9xXyhxID0+IHEuYSwgKHEsIHIpID0+IHEgJSAyID09PSByICUgMikgLy8gYWxzbyB0YWtlcyBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH0sIHsgYTogMiB9LCB7IGE6IDMgfSwgeyBhOiAzIH0sIHsgYTogMyB9XVxuICAgICAgICAgICAgICAgIC5kaXN0aW5jdEJ5X3FfKHEgPT4gcS5hLCAocSwgcikgPT4gcSAlIDIgPT09IHIgJSAyKVxuICAgICAgICAgICAgICAgIC50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNi5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDJdKSwgJ0Rpc3RpbmN0IGJ5IGtleTogb25lIGV2ZW4gJiBvbmUgb2RkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlNlbGVjdE1hbnkoKSBsb29wcyB0aHJvdWdoIHRoZSBmaXJzdCBsZXZlbCwgZmxhdHRlbnMgYW4gYXJyYXkgd2l0aGluIHRoYXQgbGV2ZWwsIGFuZCByZXR1cm5zIGl0IGF0IHRoZSB0b3AgbGV2ZWwuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJjb25zdCBudW1iZXJTZXRzID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XTsgLy8gc2V2ZXJhbCBleGFtcGxlcyB3aWxsIHdvcmsgd2l0aCB0aGlzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYG51bWJlclNldHMuc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycykgLy8gMSwzLDUsMiw0LDYsMiw1LDcsMTFgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFt7IHR5cGU6ICdvZGQnLCBudW1iZXJzOiBbMSwgMywgNV0gfSwgeyB0eXBlOiAnZXZlbicsIG51bWJlcnM6IFsyLCA0LCA2XSB9LCB7IHR5cGU6ICdwcmltZScsIG51bWJlcnM6IFsyLCA1LCA3LCAxMV0gfV0uc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMywgNSwgMiwgNCwgNiwgMiwgNSwgNywgMTFdKSwgJ1NlbGVjdCBtYW55IGZsYXR0ZW5zIGluc2lkZSBhcnJheXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKChxOiB7IHR5cGU6IHN0cmluZywgbnVtYmVyczogbnVtYmVyW10gfSwgaWR4OiBudW1iZXIpID0+IHEubnVtYmVycy5tYXAobSA9PiBgJHtpZHh9OiAke219YCkgLy8gZnVuY3Rpb24gdG8gZ2V0IGl0ZXJhYmxlIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IHJlYWxseSBkb2Vzbid0IHdhbnQgdG8gZG8gYW55IGF1dG8tdHlwZW1hcHBpbmcgaGVyZVxuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gW3sgdHlwZTogJ29kZCcsIG51bWJlcnM6IFsxLCAzLCA1XSB9LCB7IHR5cGU6ICdldmVuJywgbnVtYmVyczogWzIsIDQsIDZdIH0sIHsgdHlwZTogJ3ByaW1lJywgbnVtYmVyczogWzIsIDUsIDcsIDExXSB9XS5zZWxlY3RNYW55X3FfKChxLCBpZHgpID0+IHEubnVtYmVycy5tYXAobSA9PiBgJHtpZHh9OiAke219YCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE4LnNlcXVlbmNlRXF1YWxfcV8oW1wiMDogMVwiLCBcIjA6IDNcIiwgXCIwOiA1XCIsIFwiMTogMlwiLCBcIjE6IDRcIiwgXCIxOiA2XCIsIFwiMjogMlwiLCBcIjI6IDVcIiwgXCIyOiA3XCIsIFwiMjogMTFcIl0pLCAnU2VsZWN0TWFueSB3aXRoIGluZGV4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIm51bWJlclNldHMuc2VsZWN0TWFueV9xXyhxID0+IHEubnVtYmVycywgKHMsIHJlcykgPT4gYCR7cy50eXBlfTogJHtyZXN9YCkgLy8gYW4gb3V0cHV0IGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCB0byBwcm9qZWN0IG9udG8gdGhlIGZsYXR0ZW5lZCByZXN1bHRzLCBsZXR0aW5nIHlvdSBjb21iaW5lIHBhcmVudCBhbmQgY2hpbGRcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8ocSA9PiBxLm51bWJlcnMsIChzLCByZXMpID0+IGAke3MudHlwZX06ICR7cmVzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE5LnNlcXVlbmNlRXF1YWxfcV8oW1wib2RkOiAxXCIsIFwib2RkOiAzXCIsIFwib2RkOiA1XCIsIFwiZXZlbjogMlwiLCBcImV2ZW46IDRcIiwgXCJldmVuOiA2XCIsIFwicHJpbWU6IDJcIiwgXCJwcmltZTogNVwiLCBcInByaW1lOiA3XCIsIFwicHJpbWU6IDExXCJdKSwgJ1NlbGVjdE1hbnkgd2l0aCBvdXRwdXQgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibnVtYmVyU2V0cy5zZWxlY3RNYW55X3FfKChxOiB7IHR5cGU6IHN0cmluZywgbnVtYmVyczogbnVtYmVyW10gfSwgaWR4OiBudW1iZXIpID0+IHEubnVtYmVycy5tYXAobSA9PiBgKCMke2lkeH0pICR7bX1gKSwgKHMsIHJlcykgPT4gYCR7cy50eXBlfSAke3Jlc31gKSAvLyBlbGVtZW50IGZ1bmN0aW9uIGNhbiB0YWtlIGluZGV4IGFzIDJuZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbeyB0eXBlOiAnb2RkJywgbnVtYmVyczogWzEsIDMsIDVdIH0sIHsgdHlwZTogJ2V2ZW4nLCBudW1iZXJzOiBbMiwgNCwgNl0gfSwgeyB0eXBlOiAncHJpbWUnLCBudW1iZXJzOiBbMiwgNSwgNywgMTFdIH1dLnNlbGVjdE1hbnlfcV8oKHEsIGlkeCkgPT4gcS5udW1iZXJzLm1hcChtID0+IGAoIyR7aWR4fSkgJHttfWApLCAocywgcmVzKSA9PiBgJHtzLnR5cGV9ICR7cmVzfWApLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLnNlcXVlbmNlRXF1YWxfcV8oW1wib2RkICgjMCkgMVwiLCBcIm9kZCAoIzApIDNcIiwgXCJvZGQgKCMwKSA1XCIsIFwiZXZlbiAoIzEpIDJcIiwgXCJldmVuICgjMSkgNFwiLCBcImV2ZW4gKCMxKSA2XCIsIFwicHJpbWUgKCMyKSAyXCIsIFwicHJpbWUgKCMyKSA1XCIsIFwicHJpbWUgKCMyKSA3XCIsIFwicHJpbWUgKCMyKSAxMVwiXSksIFwiU2VsZWN0TWFueSB3aXRoIGluZGV4IGluIG91dHB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uY2FzdF9xXyhudW0gPT4gbnVtLnRvU3RyaW5nKCkpIC8vIENhc3QoKSBpcyBpbXBvc3NpYmxlIGluIEpTLCBzbyBjYXN0X3FfKCkgaXMganVzdCBhbiBhbGlhcyBmb3Igc2VsZWN0X3FfKClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFsxLCAyLCAzXS5jYXN0X3FfKG51bSA9PiBudW0udG9TdHJpbmcoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCIxXCIsIFwiMlwiLCBcIjNcIl0pLCBcIkNhc3QgcnVucyBjb252ZXJzaW9uIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAndHdvJywgMywgJ3RocmVlJywgNCwgJ2ZvdXInXS5vZlR5cGVfcV8oJ251bWJlcicpIC8vIE9mVHlwZSgpIGlzIGFsc28gbm9uc2Vuc2UgaW4gSlMsIHNvIHRoaXMgZWl0aGVyIGRvZXMgdHlwZW9mIChpZiBhIHN0cmluZyBpcyBwYXNzZWQpIG9yIGluc3RhbmNlb2YgKGlmIGFueXRoaW5nIGVsc2UpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjIgPSBbMiwgJ3R3bycsIDMsICd0aHJlZScsIDQsICdmb3VyJ10ub2ZUeXBlX3FfKCdudW1iZXInKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0XSksICdPZlR5cGUgbnVtYmVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDMgPSBUZXN0MDAzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3NyYy9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG5jbGFzcyBUZXN0Vmlld01vZGVsIGV4dGVuZHMgVGVzdENhc2VWaWV3TW9kZWxfMS5UZXN0Q2FzZVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdBZHZhbmNlZCBTaW5nbGUtU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGlzIHBhZ2UgZGVhbHMgd2l0aCBtb3JlIGFkdmFuY2VkIHF1ZXJpZXMgdGhhdCBjYW4gYmUgY2FsbGVkIG9uIGEgc2luZ2xlIGl0ZXJhYmxlLjwvcD5gXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuY2xhc3MgVGVzdDAwNCBleHRlbmRzIFRlc3RDYXNlVmlld18xLlRlc3RDYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBUZXN0Vmlld01vZGVsKCkpO1xuICAgIH1cbiAgICB0ZXN0Q2FzZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERvIHlvdXIgdGVzdGluZyBoZXJlXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIVsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSksICdOb3QgZXF1YWw6IGRpZmZlcmVudCBsZW5ndGggMScpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pLCAnTm90IGVxdWFsOiBkaWZmZXJlbnQgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSwgJ05vdCBlcXVhbDogZGlmZmVyZW50IGl0ZW1zJyk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0FyZSBlcXVhbCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIFsxLDIsM11cbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uZGVmYXVsdElmRW1wdHlfcV8oKSAvLyBub3QgZW1wdHkgc28gaXQgcGFzc2VzIHRocm91Z2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzXS5kZWZhdWx0SWZFbXB0eV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSwgJ0RlZmF1bHRJZkVtcHR5IHdoZW4gbm90IGVtcHR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10uZGVmYXVsdElmRW1wdHlfcV8oLTEpIC8vIFstMV0gd2hlbiBubyBkYXRhYCk7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB3aGF0IHR5cGUgW10gaXMgc3VwcG9zZWQgdG8gYmUuXG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbXS5kZWZhdWx0SWZFbXB0eV9xXygtMSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDIubGVuZ3RoID09PSAxICYmIHRlc3QwMlswXSA9PT0gLTEsICdEZWZhdWx0SWZFbXB0eSBzdXBwbGllcyByb3cgd2hlbiBlbXB0eSBpdGVyYWJsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5hcHBlbmRfcV8oNCkgLy8gMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAzID0gWzEsIDIsIDNdLmFwcGVuZF9xXyg0KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMy5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzLCA0XSksICdBcHBlbmQgYWRkcyB0byBlbmQgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBcIm5ldyBmaXJzdFwiLFwiZmlyc3RcIixcInNlY29uZFwiXG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKSAvLyBhZGRzIG5ldyBmaXJzdCB0byBzdGFydGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWydmaXJzdCcsICdzZWNvbmQnXS5wcmVwZW5kX3FfKCduZXcgZmlyc3QnKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNC5zZXF1ZW5jZUVxdWFsX3FfKFsnbmV3IGZpcnN0JywgJ2ZpcnN0JywgJ3NlY29uZCddKSwgJ1ByZXBlbmQgYWRkcyB0byBiZWdpbm5pbmcgb2Ygc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgNCwgNiwgMSwgMywgNSwgN10ucmV2ZXJzZV9xXygpIC8vIHJldmVyc2VzIHRoZSBhcnJheWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzIsIDQsIDYsIDEsIDMsIDUsIDddLnJldmVyc2VfcV8oKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNS5zZXF1ZW5jZUVxdWFsX3FfKFs3LCA1LCAzLCAxLCA2LCA0LCAyXSksICdSZXZlcnNlIHJldmVyc2VzIGFsbCBlbGVtZW50cycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykgLy8gY29uY2F0ZW5hdGVzIHRoZSBzZXF1ZW5jZSB3aXRoIGl0c2VsZiBuIHRpbWVzIC4uLiB0aGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2Qgbm90IGluIExJTlFgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNiA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiXS5yZXBsaWNhdGVfcV8oMykudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIl0pLCAnUmVwbGljYXRlIHJlcGVhdHMgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2EnLCAnYicsIDEsIDJdLmVtcHR5X3FfKCkgLy8gY3JlYXRlIGFuIGVtcHR5IGFycmF5IG9mIHRoZSBzYW1lIHR5cGUgYXMgc2VxdWVuY2UgLi4uIG5vdGUgdGhhdCB0eXBlIG1lYW5zIHNvbWV0aGluZyBpbiB0eXBlc2NyaXB0IGJ1dCBqYXZhc2NyaXB0IGRvZXNuJ3QgY2FyZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWydhJywgJ2InLCAxLCAyXS5lbXB0eV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3Lmxlbmd0aCA9PT0gMCwgJ0VtcHR5KCkgcmV0dXJucyBlbXB0eSBlbnVtZXJhYmxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLmNodW5rX3FfKDMpIC8vIGJyZWFrIGFycmF5IGludG8gY2h1bmtzIG9mIHByb3ZpZGVkIHNpemVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5jaHVua19xXygzKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QwOCkgPT09IFwiW1sxLDIsM10sWzQsNSw2XSxbNyw4XV1cIiwgXCJDaHVuayBicmVha3MgaXRlcmFibGUgaW50byBjaHVua3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgb3JkZXJCeV9xXygpIGFuZCBvcmRlckJ5RGVzY2VuZGluZ19xXygpIG9yZGVyIGJ5IHRoZSByZXN1bHQgb2YgYSBwcm92aWRlZCBrZXkgc2VsZWN0b3IgbWV0aG9kLmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RoZSByZXN1bHQgb2YgdGhlIHR3byBvcmRlckJ5IG1ldGhvZHMgYXJlIGVudW1lcmFibGVzIHRoYXQgaGF2ZSB0d28gbWV0aG9kcyBub3QgZm91bmQgaW4gZGVmYXVsdCBFbnVtZXJhYmxlczonKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGB0aGVuQnlfcV88VEtleT4ob3JkZXJCeT86IElGdW5jMTxULCBUS2V5PiwgY29tcGFyZXI/OiBJRnVuYzI8VEtleSwgVEtleSwgMSB8IDAgfCAtMT4pOiBJT3JkZXJlZEVudW1lcmFibGU8VD47YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgdGhlbkJ5RGVzY2VuZGluZ19xXzxUS2V5PihvcmRlckJ5PzogSUZ1bmMxPFQsIFRLZXk+LCBjb21wYXJlcj86IElGdW5jMjxUS2V5LCBUS2V5LCAxIHwgMCB8IC0xPik6IElPcmRlcmVkRW51bWVyYWJsZTxUPmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5RGVzY2VuZGluZ19xXyhvID0+IG8pIC8vIG9yZGVyIGJ5IHdvcmQgbGVuZ3RoIHRoZW4gcmV2ZXJzZSBhbHBoYWJldGljYWxgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwOSA9IFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlfcV8obyA9PiBvLmxlbmd0aCkudGhlbkJ5RGVzY2VuZGluZ19xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNlcXVlbmNlRXF1YWxfcV8oW1wiZG9nXCIsIFwiY2F0XCIsIFwiZmlzaFwiLCBcImJpcmRcIiwgXCJ0dXJ0bGVcIiwgXCJpZ3VhbmFcIl0pLCAnT3JkZXJCeSgpIGZvbGxvd2VkIGJ5IFRoZW5CeURlc2NlbmRpbmcoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlEZXNjZW5kaW5nX3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeV9xXygpIC8vIHJldmVyc2UgbGVuZ3RoIHRoZW4gYWxwaGFiZXRpY2FsIC4uLiBlbXB0eSBrZXlTZWxlY3RvciBpcyB0aGUgc2FtZSBhcyAoa2V5ID0+IGtleSlgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMCA9IFsnZG9nJywgJ2Zpc2gnLCAnY2F0JywgJ2JpcmQnLCAnaWd1YW5hJywgJ3R1cnRsZSddLm9yZGVyQnlEZXNjZW5kaW5nX3FfKG8gPT4gby5sZW5ndGgpLnRoZW5CeV9xXygpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDEwLnNlcXVlbmNlRXF1YWxfcV8oW1wiaWd1YW5hXCIsIFwidHVydGxlXCIsIFwiYmlyZFwiLCBcImZpc2hcIiwgXCJjYXRcIiwgXCJkb2dcIl0pLCAnT3JkZXJCeURlc2NlbmRpbmcoKSBmb2xsb3dlZCBieSBUaGVuQnkoKScpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RoZSBmb2xrcyBhdCBNaWNyb3NvZnQgZ2F2ZSB1cyBhIGxvdCBvZiBvdmVybG9hZHMgZm9yIEdyb3VwQnkoKSwgbW9zdCBvZiB0aGVtIG5vdCByZWFsbHkgbmVjZXNzYXJ5IG9yIGV4dHJlbWVseSB1c2VmdWwnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0pIC8vIEdyb3VwIGJ5IGZpcnN0IGxldHRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxMSkgPT09IGBbW1wiQXBwbGVcIixcIkFwcmljb3RcIl0sW1wiQ2FudGVsb3VwZVwiXSxbXCJCYW5hbmFcIixcIkJsdWViZXJyeVwiXV1gLCAnQmFzaWMgR3JvdXBCeScpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJXaGlsZSB0aGUgcmVzdWx0IG9mIHRoZSBncm91cCBvcGVyYXRpb24gaXMgYW4gaXRlcmFibGUgdGhhdCBhcHBlYXJzIGFzIGlmIGl0J3MganVzdCBhbiBhcnJheSwgaXQncyBhY3R1YWxseSBhbiBvYmplY3QgdGhhdCBjb250YWlucyBmaWVsZHMgbmFtZWQgJ2tleScgYW5kICd2YWx1ZXMnXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSkudG9BcnJheV9xXygpLm1hcChtID0+IG0ua2V5KSAvLyBzZWUgdGhlIGtleXMgb2YgZWFjaCBncm91cGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdKS50b0FycmF5X3FfKCkubWFwKG0gPT4gbS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTIuc2VxdWVuY2VFcXVhbF9xXyhbXCJBXCIsIFwiQ1wiLCBcIkJcIl0pLCBcIkFjY2VzcyBrZXkgb2YgZ3JvdXBpbmdcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSkgLy8gY2FuIHRha2UgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gdG8gYmUgYXBwbGllZCB0byBncm91cGluZyBlbGVtZW50c2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEzID0gWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTMpID09PSBgW1tcIkFQUExFXCIsXCJBUFJJQ09UXCJdLFtcIkNBTlRFTE9VUEVcIl0sW1wiQkFOQU5BXCIsXCJCTFVFQkVSUllcIl1dYCwgXCJHcm91cEJ5IHdpdGggZWxlbWVudCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdDYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ0JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUudG9VcHBlckNhc2UoKSwgKGssIGQpID0+IGAke2t9IGlzIGZvciAke2Quam9pbignIGFuZCAnKX1gKSAvLyBjYW4gdGFrZSBhbiBvcHRpb25hbCBvdXRwdXQgdHJhbnNmb3JtYXRpb24gdG8gYmUgcHJvamVjdGVkIG9udG8gdGhlIHJldHVybmVkIGdyb3VwaW5nc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgdSA9PiB1LnRvVXBwZXJDYXNlKCksIChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTQuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBUFBMRSBhbmQgQVBSSUNPVFwiLCBcIkMgaXMgZm9yIENBTlRFTE9VUEVcIiwgXCJCIGlzIGZvciBCQU5BTkEgYW5kIEJMVUVCRVJSWVwiXSksIFwiR3JvdXBCeSB3aXRoIG91dHB1dCBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUgKyAnIScsIChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAsIChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikpIC8vIGNhbiB0YWtlIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE1ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB1ID0+IHUgKyAnIScsIChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAsIChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1LnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGUhIGFuZCBCYW5hbmEhIGFuZCBBcHJpY290ISBzdGFydCB3aXRoIGNhcGl0YWxcIiwgXCJjYW50ZWxvdXBlISBhbmQgYmx1ZWJlcnJ5ISBzdGFydCB3aXRoIGxvd2VyY2FzZVwiXSksIFwiR3JvdXBCeSB3aXRoIGN1c3RvbSBlcXVhbGl0eVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTm93IGhlcmUncyB3aGVyZSBpdCB0dXJucyBpbnRvIGEgcmVhbCBtZXNzLiBVcCB1bnRpbCBub3csIHdlJ3ZlIGp1c3QgYmVlbiBhZGRpbmcgYSBuZXcgcGFyYW1ldGVyIGF0IHRoZSBlbmQuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJCdXQgd2hhdCBpZiB5b3Ugd2FudCB0byB1c2Ugb25seSB0aGUgY3VzdG9tIGVxdWFsaXR5LCBidXQgbm90aGluZyBlbHNlLiBFYXN5IHRvIGRvIGluIEMjLiBOb3Qgc28gZWFzeSBpbiBKUy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlR5cGVzY3JpcHQgaGFzIHNvbWUgc21hbGwgYW1vdW50IG9mIG92ZXJsb2FkIGRlY2xhcmF0aW9uLCBidXQgaXQncyB2ZXJ5IHdlYWsgYW5kIGRvZXNuJ3QgZW1pdCBhbnl0aGluZy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgU3VyZSwgeW91IGNvZGUgdGhlIGZvbGxvd2luZzpgKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24/OiBmdW5jdGlvbik7YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24/OiBmdW5jdGlvbik7YCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgQnV0IGphdmFzY3JpcHQgc2VlcyBvbmx5IGZ1bmN0aW9uIGdyb3VwQnlfcV8oZnVuY3Rpb24sIGZ1bmN0aW9uKS5gKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdXaGljaCBvdmVybG9hZCB3YXMgaXQ/IEphdmFzY3JpcHQgaGFzIG5vIGlkZWEgd2hhdHNvZXZlci4nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiU28gaWYgeW91IHdhbnQgdG8gc2tpcCBwYXJhbWV0ZXJzLCB5b3UgaGF2ZSB0byBlbmNsb3NlIHRoZW0gaW4gb2JqZWN0cy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBjdXN0b20gZXF1YWxpdHkgYnV0IG5vIGVsZW1lbnQgb3Igb3V0cHV0IGZ1bmN0aW9uc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QxNikgPT09IGBbW1wiQXBwbGVcIixcIkJhbmFuYVwiLFwiQXByaWNvdFwiXSxbXCJjYW50ZWxvdXBlXCIsXCJibHVlYmVycnlcIl1dYCwgJ0dyb3VwQnkgd2l0aCBvbmx5IGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkgLy8gY3VzdG9tIG91dHB1dCBwcm9qZWN0b3Igb25seVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBcHBsZSBhbmQgQXByaWNvdFwiLCBcIkMgaXMgZm9yIENhbnRlbG91cGVcIiwgXCJCIGlzIGZvciBCYW5hbmEgYW5kIEJsdWViZXJyeVwiXSksIFwiR3JvdXBCeSB3aXRoIG9ubHkgcHJvamVjdG9yXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgcHJvamVjdDogKGssIGQpID0+IGAke2Quam9pbignIGFuZCAnKX0gc3RhcnQgd2l0aCAkeyhrLnRvVXBwZXJDYXNlKCkgPT09IGsgPyAnY2FwaXRhbCcgOiAnbG93ZXJjYXNlJyl9YCB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBldmVyeXRoaW5nIGJ1dCBlbGVtZW50IGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTguc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZSBhbmQgQmFuYW5hIGFuZCBBcHJpY290IHN0YXJ0IHdpdGggY2FwaXRhbFwiLCBcImNhbnRlbG91cGUgYW5kIGJsdWViZXJyeSBzdGFydCB3aXRoIGxvd2VyY2FzZVwiXSksIFwiR3JvdXBCeSB3aXRoIG5vIGVsZW1lbnQgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHEgPT4gcSArICchJyB9LCB7IGVxdWFsczogKGEsIGIpID0+IChhLnRvVXBwZXJDYXNlKCkgPT09IGEpID09PSAoYi50b1VwcGVyQ2FzZSgpID09PSBiKSB9KSAvLyBldmVyeXRoaW5nIGJ1dCBvdXRwdXQgcHJvamVjdG9yYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTkgPSBbJ0FwcGxlJywgJ2NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnYmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogcSA9PiBxICsgJyEnIH0sIHsgZXF1YWxzOiAoYSwgYikgPT4gKGEudG9VcHBlckNhc2UoKSA9PT0gYSkgPT09IChiLnRvVXBwZXJDYXNlKCkgPT09IGIpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDE5KSA9PT0gYFtbXCJBcHBsZSFcIixcIkJhbmFuYSFcIixcIkFwcmljb3QhXCJdLFtcImNhbnRlbG91cGUhXCIsXCJibHVlYmVycnkhXCJdXWAsICdHcm91cEJ5IHdpdGggbm8gb3V0cHV0IGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIlsnQXBwbGUnLCAnQ2FudGVsb3VwZScsICdCYW5hbmEnLCAnQXByaWNvdCcsICdCbHVlYmVycnknXS5ncm91cEJ5X3FfKHEgPT4gcVswXSwgeyBlbGVtZW50OiB1ID0+IHUudG9VcHBlckNhc2UoKSB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtrfSBpcyBmb3IgJHtkLmpvaW4oJyBhbmQgJyl9YCB9KSAvLyBvYmplY3QgbmFtZXMgdXNlZCBidXQgb3RoZXJ3aXNlIHNhbWUgYXMgZ3JvdXBCeShrZXksIGVsZW1lbnQsIG91dHB1dClcIik7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbJ0FwcGxlJywgJ0NhbnRlbG91cGUnLCAnQmFuYW5hJywgJ0Fwcmljb3QnLCAnQmx1ZWJlcnJ5J10uZ3JvdXBCeV9xXyhxID0+IHFbMF0sIHsgZWxlbWVudDogdSA9PiB1LnRvVXBwZXJDYXNlKCkgfSwgeyBwcm9qZWN0OiAoaywgZCkgPT4gYCR7a30gaXMgZm9yICR7ZC5qb2luKCcgYW5kICcpfWAgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjAuc2VxdWVuY2VFcXVhbF9xXyhbXCJBIGlzIGZvciBBUFBMRSBhbmQgQVBSSUNPVFwiLCBcIkMgaXMgZm9yIENBTlRFTE9VUEVcIiwgXCJCIGlzIGZvciBCQU5BTkEgYW5kIEJMVUVCRVJSWVwiXSksIFwiR3JvdXBCeSB3aXRoIG9iamVjdCBuYW1lc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdSArICchJyB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkgLy8gZXZlcnl0aGluZyBzdXBwbGllZCwganVzdCBpbiBvYmplY3RzXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIxID0gWydBcHBsZScsICdjYW50ZWxvdXBlJywgJ0JhbmFuYScsICdBcHJpY290JywgJ2JsdWViZXJyeSddLmdyb3VwQnlfcV8ocSA9PiBxWzBdLCB7IGVsZW1lbnQ6IHUgPT4gdSArICchJyB9LCB7IHByb2plY3Q6IChrLCBkKSA9PiBgJHtkLmpvaW4oJyBhbmQgJyl9IHN0YXJ0IHdpdGggJHsoay50b1VwcGVyQ2FzZSgpID09PSBrID8gJ2NhcGl0YWwnIDogJ2xvd2VyY2FzZScpfWAgfSwgeyBlcXVhbHM6IChhLCBiKSA9PiAoYS50b1VwcGVyQ2FzZSgpID09PSBhKSA9PT0gKGIudG9VcHBlckNhc2UoKSA9PT0gYikgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjEuc2VxdWVuY2VFcXVhbF9xXyhbXCJBcHBsZSEgYW5kIEJhbmFuYSEgYW5kIEFwcmljb3QhIHN0YXJ0IHdpdGggY2FwaXRhbFwiLCBcImNhbnRlbG91cGUhIGFuZCBibHVlYmVycnkhIHN0YXJ0IHdpdGggbG93ZXJjYXNlXCJdKSwgJ0dyb3VwQnkgYWxsIGluIG9iamVjdHMnKTtcbiAgICAgICAgICAgIC8vIFRlc3Qgc3RhdGljIG1ldGhvZHMgb24gRW51bWVyYWJsZSAobm90IHBhcnQgb2YgSVF1ZXJ5YWJsZSwgYnV0IHN0aWxsIGluIFN5c3RlbS5MaW5xKS4uLlxuICAgICAgICAgICAgdGhpcy5sb2coYEVudW1lcmFibGUucmFuZ2VfcV8oMiwgMTApIC8vIFN5c3RlbS5MaW5xIGFsc28gaW5jbHVkZXMgdHdvIHN0YXRpYyBub24tZXh0ZW5zaW9uIG1ldGhvZHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMiA9IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJhbmdlX3FfKDIsIDEwKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMi5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdKSwgJ1JhbmdlKCkgcmV0dXJucyBhIHJhbmdlIG9mIG51bWJlcnMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBFbnVtZXJhYmxlLnJlcGVhdF9xXyhcInNwYW1cIiwgNCkgLy8gdGhpcyBpcyB0aGUgb3RoZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJlcGVhdF9xXyhcInNwYW1cIiwgNCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDIzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjMuc2VxdWVuY2VFcXVhbF9xXyhbXCJzcGFtXCIsIFwic3BhbVwiLCBcInNwYW1cIiwgXCJzcGFtXCJdKSwgJ1JlcGVhdCgpIHJlcGVhdHMgYW4gZWxlbWVudCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJOb3JtYWxseSB0byBjb3VudCBhbiBlbnVtZXJhYmxlLCB5b3UgbXVzdCBlbnVtZXJhdGUgaXQsIG1hdGVyaWFsaXppbmcgaXRzIGRhdGEuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJMSU5RIHByb3ZpZGVzIHRoaXMgbWV0aG9kLCB0cnlHZXROb25FbnVtZXJhdGVkQ291bnQoKSwgd2hpY2ggdHJpZXMgdG8gZ2V0IHRoZSBjb3VudCBmcm9tIHRoZSB1bmRlcmx5aW5nIG9iamVjdCwgd2hlbiBwb3NzaWJsZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiSXQgd29ya3MgdXNpbmcgYW4gb3V0IHZhciwgbGlrZSBhbGwgVHJ5R2V0U29tZXRoaW5nKCkgbWV0aG9kcyBpbiBDIy4gVGhpcyBkb2Vzbid0IGV4aXN0IGluIEpTLiBUbyBtYWtlIGl0IHdvcmssIHlvdSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0LCB3aGljaCBpcyB1cGRhdGVkLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBjb25zdCBjb3VudFZhbCA9IHsgdmFsdWU6IDAgfSAvLyBub3cgXCJ2YWx1ZVwiIGNhbiBiZSB1cGRhdGVkIGFuZCB0aGUgcmVmZXJlbmNlIHJldHVybmVkYCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zdCBjb3VudFZhbCA9IHsgdmFsdWU6IDAgfTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0udHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKSAvLyBzaG91bGQgcmV0dXJuIHRydWUgYW5kIDQsIGJlY2F1c2UgdGhpcyBpcyBhbiBhcnJheWApO1xuICAgICAgICAgICAgY29uc3QgY291bnQxID0gWzEsIDIsIDMsIDRdLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQxLCBjb3VudFZhbC52YWx1ZV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KGNvdW50MSAmJiBjb3VudFZhbC52YWx1ZSA9PT0gNCwgXCJ0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgcmV0dXJuZWQgYXJyYXkgY291bnRcIik7XG4gICAgICAgICAgICBjb3VudFZhbC52YWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3Qgc3F1YXJlcyA9IFsxLCAyLCAzLCA0XS5zZWxlY3RfcV8ocyA9PiBzICoqIDIpOyBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCkgLy8gbm90IHBvc3NpYmxlIGFzIHRoZSBhcnJheSBpcyBidXJpZWQgdW5kZXIgYSBnZW5lcmF0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSBbMSwgMiwgMywgNF0uc2VsZWN0X3FfKHMgPT4gTWF0aC5wb3cocywgMikpO1xuICAgICAgICAgICAgY29uc3QgY291bnQyID0gc3F1YXJlcy50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8oY291bnRWYWwpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGZhbHNlLCAwXG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQyLCBjb3VudFZhbC52YWx1ZV0sIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCFjb3VudDIgJiYgY291bnRWYWwudmFsdWUgPT09IDAsICd0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgY291bGQgbm90IGdldCBmcm9tIGdlbmVyYXRvcicpO1xuICAgICAgICAgICAgLy8gTm93IHdlJ3ZlIGdvbmUgYW5kIG1hdGVyaWFsaXplZCBpdCBzbyB3ZSBjYW4gZ2V0IHRoZSBjb3VudCAoaXQncyBhY3R1YWxseSB0aGUgZW51bWVyYXRlZCBjb3VudClcbiAgICAgICAgICAgIHRoaXMubG9nKGBzcXVhcmVzLmNvdW50X3FfKCk7IHNxdWFyZXMudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKGNvdW50VmFsKTsgLy8gTm93IHRoYXQgaXQncyBiZWVuIGVudW1lcmF0ZWQsIHlvdSBjYW4gZ2V0IHRoZSBjb3VudCB3aXRob3V0IGVudW1lcmF0aW5nIGl0IGFnYWluYCk7XG4gICAgICAgICAgICBjb25zdCBlbnVtZXJhdGVkQ291bnQgPSBzcXVhcmVzLmNvdW50X3FfKCk7XG4gICAgICAgICAgICBjb25zdCBjb3VudDMgPSBzcXVhcmVzLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhjb3VudFZhbCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhbY291bnQzLCBjb3VudFZhbC52YWx1ZSwgZW51bWVyYXRlZENvdW50XSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoY291bnQzICYmIGNvdW50VmFsLnZhbHVlID09PSBlbnVtZXJhdGVkQ291bnQsICd0cnlHZXROb25FbnVtZXJhdGVkQ291bnQgY291bGQgZ2V0IGZyb20gYmFja3VwJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkxJTlEgZG9lc24ndCBnaXZlIGEgd2F5IHRvIGV4ZWN1dGUgYW4gb3BlcmF0aW9uIHdpdGhvdXQgcmV0dXJuaW5nIHJlc3VsdHMsIGJ1dCBKT0lOIHByb3ZpZGVzIGZvckVhY2hcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcImNvbnN0IGZvckVhY2hUZXN0OiBzdHJpbmdbXSA9IFtdO1xcblsxLCAyLCAzXS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHsgZm9yRWFjaFRlc3QucHVzaChgJHtpZHh9PSR7aXRlbX1gKTsgfSk7XCIpO1xuICAgICAgICAgICAgY29uc3QgZm9yRWFjaFRlc3QgPSBbXTtcbiAgICAgICAgICAgIFsxLCAyLCAzXS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoVGVzdC5wdXNoKGAke2lkeH09JHtpdGVtfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyhmb3JFYWNoVGVzdCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoZm9yRWFjaFRlc3Quc2VxdWVuY2VFcXVhbF9xXyhbXCIwPTFcIiwgXCIxPTJcIiwgXCIyPTNcIl0pLCBcIkZvckVhY2ggbG9vcGVkIHRocm91Z2ggaXRlcmFibGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDQgPSBUZXN0MDA0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnU2luZ2xldG9uIFJlc3VsdHMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOiBgPHA+T25jZSB5b3UgaGF2ZSBhIHF1ZXJ5LCB5b3UgbWlnaHQgd2FudCB0byBwcm9jZXNzIHRoYXQgcXVlcnkgdG8gZ2V0IGEgcmVzdWx0LCB3aGV0aGVyIGl0IGJlIGNvdW50aW5nIHRoZSByb3dzLCBmaW5kaW5nIHRoZSBtaW4gb3IgbWF4IHZhbHVlLCBvciBwaWNraW5nIHRoZSBmaXJzdCBvciBsYXN0LiBUaGVzZSBvcGVyYXRpb25zIHdpbGwgZW51bWVyYXRlIHRoZSBkYXRhc2V0IChtYXRlcmlhbGl6aW5nIHRoZSBlbnVtZXJhYmxlKSB0byBmaW5kIHRoZSByZXN1bHQuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDA1IGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKSAvLyBsaWtlIGFycmF5WzNdYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDEgPSBbJ2xvc2VyJywgJ2xvc2VyJywgJ2xvc2VyJywgJ3dpbm5lcicsICdsb3NlciddLmVsZW1lbnRBdF9xXygzKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDAxID09PSAnd2lubmVyJywgJ0VsZW1lbnQgYXQgM3JkJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMykgLy8gd29ya3MgdGhlIHNhbWUgd2F5IC4uLmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDAyID0gWydsb3NlcicsICdsb3NlcicsICdsb3NlcicsICd3aW5uZXInLCAnbG9zZXInXS5lbGVtZW50QXRPckRlZmF1bHRfcV8oMyk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwMiA9PT0gJ3dpbm5lcicsICdFbGVtZW50QXREZWZhdWx0IDNyZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpIC8vIGVsZW1lbnRBdF9xXygxMykgd291bGQgaGF2ZSB0aHJvd25gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMyA9IFsnbG9zZXInLCAnbG9zZXInLCAnbG9zZXInLCAnd2lubmVyJywgJ2xvc2VyJ10uZWxlbWVudEF0T3JEZWZhdWx0X3FfKDEzLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDMgPT09ICdkZWZhdWx0JywgJ0VsZW1lbnRBdCB3aXRoIGRlZmF1bHQnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNCwgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA0ID0gWzEsIDMsIDQsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDQsICdBbGwgaXMgZmFsc2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMywgNV0uYWxsX3FfKG51bSA9PiBudW0gJSAyID09PSAxKSAvLyBjaGVjayBpZiBhbGwgYXJlIG9kZGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDMsIDVdLmFsbF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNSwgJ0FsbCBpcyB0cnVlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXygpIC8vIGRvZXMgc2VxdWVuY2UgaGF2ZSBhbnl0aGluZ2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDIsIDNdLmFueV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDYsICdBbnkgd2l0aCBmdWxsIGFycmF5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gQW55IGNhbiB0YWtlIGEgZmlsdGVyIGZ1bmN0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmFueSgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDcgPSBbMSwgMiwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA3LCAnQW55IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDNdLmFueV9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gc2hvdWxkIGJlIGZhbHNlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgM10uYW55X3FfKG51bSA9PiBudW0gJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwOCwgJ0FueSB3aXRoIGZpbHRlciBhbmQgbm8gbWF0Y2gnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uY29udGFpbnNfcV8oMykgLy8gaXMgZWxlbWVudCBpbiBzZXF1ZW5jZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDksICdDb250YWlucyB3aXRoIG1hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLmNvbnRhaW5zX3FfKDQpIC8vIG5vIG1hdGNoYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTAgPSBbMSwgMiwgM10uY29udGFpbnNfcV8oNCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTAsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MTAsICdDb250YWlucyB3aXRoIG5vIG1hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDIsIC0yXS5jb3VudF9xXygpIC8vIDRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMSA9IFsxLCAyLCAyLCAtMl0uY291bnRfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDExID09PSA0LCAnQ291bnQgYSBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5jb3VudF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCkgLy8gY291bnQgY2FuIHRha2UgYSBmaWx0ZXIgY29uZGl0aW9uLCBzYW1lIGFzIHdoZXJlKGZ1bmMpLmNvdW50KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XS5jb3VudF9xXyhudW0gPT4gbnVtICUgMiA9PT0gMCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMiA9PT0gMywgJ0NvdW50IHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wieFwiLCBcInlcIiwgXCJ6XCJdLmxvbmdDb3VudF9xXygpIC8vIHVzZSBsb25nY291bnQgdG8gY291bnQgbW9yZSB0aGFuIG1heCBpbnRlZ2VyIC4uLiBvbmx5IHdvcmtzIGluIEVDTUFTY3JpcHQgMjAyMCBvciBuZXdlciAuLi4gcHJvYmFibHkgdGFrZXMgYSBsb25nIHRpbWVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxMyA9IFtcInhcIiwgXCJ5XCIsIFwielwiXS5sb25nQ291bnRfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxMy50b1N0cmluZygpLCB0cnVlKTsgLy8gYnVpbHQtaW4gdG9KU09OIGNhbid0IHNlcmlhbGl6ZSBiaWdpbnRcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTMudG9TdHJpbmcoKSA9PT0gXCIzXCIsIFwiTG9uZ0NvdW50IGEgc2VxdWVuY2VcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwiWFwiXS5sb25nQ291bnRfcV8ocSA9PiBxLnRvTG93ZXJDYXNlKCkgPT09IFwieFwiKSAvLyBhbHNvIHRha2VzIGEgZmlsdGVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTQgPSBbXCJ4XCIsIFwieVwiLCBcInpcIiwgXCJYXCJdLmxvbmdDb3VudF9xXyhxID0+IHEudG9Mb3dlckNhc2UoKSA9PT0gXCJ4XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE0LnRvU3RyaW5nKCksIHRydWUpOyAvLyBidWlsdC1pbiB0b0pTT04gY2FuJ3Qgc2VyaWFsaXplIGJpZ2ludFxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC50b1N0cmluZygpID09PSBcIjJcIiwgXCJMb25nQ291bnQgd2l0aCBmaWx0ZXJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnN1bV9xXygpIC8vIHN1bSB0aGUgdmFsdWVzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTUgPSBbMSwgMiwgMywgNCwgNV0uc3VtX3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNSA9PT0gMTUsICdTdW0gc2VxdWVuY2UgdmFsdWVzJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDQsIDVdLnN1bV9xXyhxID0+IHEgKiAyKSAvLyBjYW4gYXBwbHkgYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBiZWZvcmUgc3VtbWluZ2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE2ID0gWzEsIDIsIDMsIDQsIDVdLnN1bV9xXyhxID0+IHEgKiAyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE2ID09PSAzMCwgJ1N1bSB3aXRoIHRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDMsIDQsIDRdLmF2ZXJhZ2VfcV8oKSAvLyAzIC4uLiB0aHJvd3MgaWYgZW1wdHksIGNhbid0IGRpdmlkZSBieSB6ZXJvYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTcgPSBbMSwgMywgNCwgNF0uYXZlcmFnZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcgPT09IDMsICdBdmVyYWdlIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDRdLmZpcnN0X3FfKCkgLy8gMmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gWzIsIDMsIDRdLmZpcnN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTgsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOCA9PT0gMiwgJ0ZpcnN0IGluIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICAvLyBzaG91bGQgcmV0dXJuIDRcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNF0uZmlyc3RfcV8ocSA9PiBxID4gMykgLy8gY2FuIHRha2UgYSBmaWx0ZXIgZnVuY3Rpb24sIHNhbWUgYXMgd2hlcmUoZnVuYykuZmlyc3QoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE5ID0gWzIsIDMsIDRdLmZpcnN0X3FfKHEgPT4gcSA+IDMpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTkgPT09IDQsICdGaXJzdCB3aXRoIGZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAxMDApIC8vIHRoaXMgd2lsbCB0aHJvdyBiZWNhdXNlIHRoZXJlIGFyZSBubyBtYXRjaGVzYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3cxID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsyLCAzLCA0XS5maXJzdF9xXyhxID0+IHEgPiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzEsICdGaXJzdCB0aHJldycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA0XS5maXJzdE9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAsIC0xKSAvLyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB2YWx1ZSBwcm92aWRlZCAob3IgdW5kZWZpbmVkIGlmIG5vbmUpIGluc3RlYWQgb2YgdGhyb3dpbmdgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMCA9IFsyLCAzLCA0XS5maXJzdE9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAsIC0xKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwID09PSAtMSwgJ0ZpcnN0T3JEZWZhdWx0IHdpdGggZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJTb21ldGltZXMgdGhpcyBBUEkgaXNuJ3QgYXMgY2xlYW4gYXMgdGhlIEMjIEFQSSBiZWNhdXNlIHR5cGUgY2hlY2tpbmcgaW4gSlMgaXMgYW1iaWd1b3VzIGFuZCBiZWNhdXNlIHBhcmFtZXRlcnMgZG9uJ3QgYWN0dWFsbHkgaGF2ZSBuYW1lcy5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcIkluIHRoaXMgY2FzZSwgd2hlbiBjYWxsZWQgd2l0aCBhIHNpbmdsZSBpbnB1dCwgaXQncyBub3QgcG9zc2libGUgaWYgdGhpcyBpcyB0aGUgb3B0aW9uYWwgZmlsdGVyIG9yIHRoZSBvcHRpb25hbCBkZWZhdWx0LiBJdCdzIGFzc3VtZWQgdG8gYmUgdGhlIGZpbHRlci5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10uZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IC0yIH0pIC8vIFVzZSB0aGlzIGZvcm1hdCB0byBwYXNzIGRlZmF1bHQgYnV0IG5vIGZpbHRlci5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMSA9IFtdLmZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAtMiB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIxID09PSAtMiwgXCJGaXJzdE9yRGVmYXVsdCB3aXRoIG9ubHkgZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8oKSAvLyBjYW4ndCBoYXZlIGZpcnN0IHdpdGhvdXQgbGFzdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjIsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMiA9PT0gJ2xhc3QnLCAnTGFzdCBvZiBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIFwiZm91cnRoXCJcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnbGFzdCddLmxhc3RfcV8ocSA9PiBxWzBdID09PSBcImZcIikgLy8gbGFzdCBjYW4gYWxzbyB0YWtlIGZpbHRlciwgc2FtZSBhcyB3aGVyZShmdW5jKS5sYXN0KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdsYXN0J10ubGFzdF9xXyhxID0+IHFbMF0gPT09IFwiZlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIzID09PSAnZm91cnRoJywgJ0xhc3Qgd2l0aCBmaWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCddLmxhc3RfcV8ocSA9PiBxLmxlbmd0aCA+IDEwMCkgLy8ganVzdCBsaWtlIHdpdGggZmlyc3QoKSB0aGlzIHdpbGwgdGhyb3dgKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXS5sYXN0X3FfKHEgPT4gcS5sZW5ndGggPiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzIsIFwiTGFzdCB0aHJvd3Mgb24gZW1wdHkgc2VxdWVuY2VcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0T3JEZWZhdWx0X3FfKHEgPT4gcVswXSA9PT0gXCJYXCIsIFwiZGVmYXVsdFwiKSAvLyBkb2Vzbid0IHRocm93LCBpbnN0ZWFkIHJldHVybnMgZGVmYXVsdGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI0ID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2xhc3QnXS5sYXN0T3JEZWZhdWx0X3FfKHEgPT4gcVswXSA9PT0gXCJYXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI0ID09PSAnZGVmYXVsdCcsICdMYXN0T3JEZWZhdWx0IHdpdGggZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtdLmxhc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiZGVmYXVsdFwiIH0pIC8vIGp1c3QgbGlrZSB3aXRoIGZpcnN0LCBwYXNzaW5nIG9ubHkgZGVmYXVsdCB2YWx1ZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI1ID0gW10ubGFzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJkZWZhdWx0XCIgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyNSA9PT0gJ2RlZmF1bHQnLCAnTGFzdE9yRGVmYXVsdCB3aXRoIG9ubHkgZGVmYXVsdCcpO1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIDFcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMV0uc2luZ2xlX3FfKCkgLy8gcmV0dXJucyByZWNvcmQgaWYgdGhlcmUgaXMgZXhhY3RseSBvbmUsIHRocm93aW5nIGlmIDAgb3IgbW9yZSB0aGFuIG9uZWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI2ID0gWzFdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjYgPT09IDEsICdTaW5nbGUgcmVjb3JkIGluIHNlcXVlbmNlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKSAvLyB0YWtlcyBhIGZpbHRlciBmdW5jdGlvbiwgc2FtZSBhcyB3aGVyZShmdW5jKS5zaW5nbGUoKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI3ID0gWzEsIDJdLnNpbmdsZV9xXyhxID0+IHEgJSAyID09PSAwKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDI3ID09PSAyLCAnU2luZ2xlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnNpbmdsZV9xXyhxID0+IHEgPCAzKSAvLyBzaW5nbGUgdGhyb3dzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzYCk7XG4gICAgICAgICAgICBsZXQgdGhyb3c0ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxIDwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdzQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRocm93NCwgJ1NpbmdsZSB0aHJvd3Mgd2hlbiBtdWx0aXBsZSByZXR1cm5lZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxID4gMTAwMDApIC8vIExpa2UgZmlyc3QoKSBhbmQgbGFzdCgpLCBzaW5nbGUoKSB0aHJvd3Mgb24gYW4gZW1wdHkgc2VxdWVuY2VgKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWzEsIDJdLnNpbmdsZV9xXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3czID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzMsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlJyk7XG4gICAgICAgICAgICBsZXQgdGhyb3c1ID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0XS5zaW5nbGVfcV8ocSA9PiBxID4gMTAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3c1ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0aHJvdzUsICdTaW5nbGUgdGhyb3dzIG9uIGVtcHR5IHNlcXVlbmNlIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXyhxID0+IHEgPiAxMDAwLCAtMSkgLy8gc2luZ2xlT3JEZWZhdWx0IHN1cHBsaWVzIGRlZmF1bHQgdmFsdWUgZm9yIGVtcHR5IHNlcXVlbmNlLCBzdGlsbCB0aHJvd3MgaWYgbXVsdGlwbGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOCA9IFsxLCAyLCAzLCA0XS5zaW5nbGVPckRlZmF1bHRfcV8ocSA9PiBxID4gMTAwMCwgLTEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjggPT09IC0xLCBcIkRlZmF1bHQgcmV0dXJuZWQgZm9yIHNpbmdsZU9yRGVmYXVsdFwiKTtcbiAgICAgICAgICAgIGxldCB0aHJvdzYgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWzEsIDIsIDMsIDRdLnNpbmdsZU9yRGVmYXVsdF9xXyhxID0+IHEgJSAyID09PSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZikge1xuICAgICAgICAgICAgICAgIHRocm93NiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGhyb3c2LCBcIlNpbmdsZU9yRGVmYXVsdCBzdGlsbCB0aHJvd3Mgb24gbXVsdGlwbGVcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1heF9xXygpIC8vIDcgaXMgbWF4aW11bWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI5ID0gWzIsIDMsIDUsIDcsIDYsIDQsIDFdLm1heF9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MjkgPT09IDcsICdNYXggcmV0dXJucyBtYXhpbXVtJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDMsIDUsIDYsIDQsIDFdLm1heF9xXyhxID0+IHEgKiBxKSAvLyBjYW4gdGFrZSBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGFwcGxpZWQgYmVmb3JlIG1heGltdW0sIHNhbWUgYXMgc2VsZWN0KGZ1bmMpLm1heCgpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzAgPSBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHEgPT4gcSAqIHEpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzAgPT09IDM2LCAnTWF4IHJldHVybmVkIHdpdGggZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiTWF4IGNhbiB0YWtlIGEgY3VzdG9tIGNvbXBhcmVyIHRoYXQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCB2YWx1ZSBpcyBncmVhdGVyLCAtMSBpcyB0aGUgc2Vjb25kLCBlbHNlIDBcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgY29uc3QgaWdub3JlRXZlbkNvbXBhcmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAwIDogeDtcbiAgICAgICAgICAgICAgICB5ID0geSAlIDIgPT09IDAgPyAwIDogeTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4IDwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWApO1xuICAgICAgICAgICAgY29uc3QgaWdub3JlRXZlbkNvbXBhcmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAwIDogeDtcbiAgICAgICAgICAgICAgICB5ID0geSAlIDIgPT09IDAgPyAwIDogeTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIpIC8vIG1heCBub3QgY291bnRpbmcgZXZlbnNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMSA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1heF9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDMxID09PSA1LCAnTWF4IHdpdGggY3VzdG9tIGNvbXBhcmVyIGFuZCB0cmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0LCAxXS5tYXhfcV8oe2NvbXBhcmU6IGlnbm9yZUV2ZW5Db21wYXJlciB9KSAvLyBjdXN0b20gY29tcGFyZXIgY2FuIGJlIHNlbnQgYXMgZmlyc3QgcGFyYW1ldGVyIGJ5IHB1dHRpbmcgaW4gSUNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzIgPSBbMiwgMywgNSwgNiwgNCwgMV0ubWF4X3FfKHtcbiAgICAgICAgICAgICAgICBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDMyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzIgPT09IDUsICdNYXggd2l0aCBjdXN0b20gY29tcGFyZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubikgLy8gbWF4QnkgdXNlcyBhIGtleSBzZWxlY3RvciBmdW5jdGlvbiwgY29tcGFyZXMgdGhlIGtleXMsIGJ1dCByZXR1cm5zIHRoZSBlbGVtZW50YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzMgPSBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzMy5uID09PSA2LCBcIk1heEJ5IHdpdGgga2V5IGxvb2t1cFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBuOiAyIH0sIHsgbjogMyB9LCB7IG46IDUgfSwgeyBuOiA2IH0sIHsgbjogNCB9XS5tYXhCeV9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyKSAvLyBtYXhCeSBhbHNvIHRha2VzIGN1c3RvbSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM0ID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWF4QnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNC5uID09PSA1LCAnTWF4Qnkgd2l0aCBjdXN0b20gY29tcGFyZXInKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWluX3FfKCkgLy8gMSBpcyBtaW5pbXVtYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzUgPSBbMiwgMywgNSwgNywgNiwgNCwgMV0ubWluX3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNSA9PT0gMSwgJ01pbiByZXR1cm5zIG1pbmltdW0nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHEgPT4gcSAqIHEpIC8vIG1pbiBhbHNvIHRha2VzIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLCBzYW1lIGFzIHNlbGVjdChmdW5jKS5taW4oKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM2ID0gWzIsIDMsIDUsIDYsIDRdLm1pbl9xXyhxID0+IHEgKiBxKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM2ID09PSA0LCAnTWluIHdpdGggZmlsdGVyJyk7XG4gICAgICAgICAgICBjb25zdCBpZ25vcmVFdmVuQ29tcGFyZXIyID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICB4ID0geCAlIDIgPT09IDAgPyAxMTAgOiB4O1xuICAgICAgICAgICAgICAgIHkgPSB5ICUgMiA9PT0gMCA/IDExMCA6IHk7XG4gICAgICAgICAgICAgICAgaWYgKHggPiB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIDMgKHRoZSBjdXN0b20gY29tcGFyZXIgZmlsdGVycyBvdXQgZXZlbnMpXG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluX3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKSAvLyBtaW4gYWxzbyB0YWtlcyBjdXN0b20gY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNyA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbl9xXyhxID0+IHEubiwgaWdub3JlRXZlbkNvbXBhcmVyMik7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QzNyA9PT0gMywgXCJNaW4gd2l0aCBjdXN0b20gY29tcGFyZXIgYW5kIHRyYW5zZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLCAzLCA1LCA2LCA0XS5taW5fcV8oeyBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXIyIH0pYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzggPSBbMiwgMywgNSwgNiwgNF0ubWluX3FfKHtcbiAgICAgICAgICAgICAgICBjb21wYXJlOiBpZ25vcmVFdmVuQ29tcGFyZXIyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDM4ID09PSAzLCBcIk1pbiB3aXRoIGN1c3RvbSBjb21wYXJlciBvbmx5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uKSAvLyBhbHNvIGEgbWluQnkgdGhhdCB0YWtlcyBhIGtleSBzZWxlY3RvcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM5ID0gW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MzkubiA9PT0gMiwgXCJNaW5CeSByZXR1cm5zIG1pbiB3aXRoIGtleSBsb29rdXBcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgbjogMiB9LCB7IG46IDMgfSwgeyBuOiA1IH0sIHsgbjogNiB9LCB7IG46IDQgfV0ubWluQnlfcV8ocSA9PiBxLm4sIGlnbm9yZUV2ZW5Db21wYXJlcjIpIC8vIG1pbkJ5IGFsc28gdGFrZXMgYSBjdXN0b20gY29tcGFyZXJgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MCA9IFt7IG46IDIgfSwgeyBuOiAzIH0sIHsgbjogNSB9LCB7IG46IDYgfSwgeyBuOiA0IH1dLm1pbkJ5X3FfKHEgPT4gcS5uLCBpZ25vcmVFdmVuQ29tcGFyZXIyKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQwLm4gPT09IDMsICdNaW5CeSB3aXRoIGN1c3RvbSBjb21wYXJlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJNYXgoKSBhbmQgTWluKCkgdGhyb3cgd2hlbiBjYWxsZWQgb24gYW4gZW1wdHkgc2VxdWVuY2UuIFRvIGhhbmRsZSB0aGF0LCBJIGNyZWF0ZWQgMiBKT0lOLXNwZWNpZmljIG1ldGhvZHMuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJCZWNhdXNlIG9mIHRoZSB3YXkgb3ZlcmxvYWRzIHdvcmsgaW4gSlMsIGlmIHlvdSBhcmVuJ3QgdXNpbmcgYWxsIGlucHV0cywgZW5jbG9zZSBpbiB7IGRlZmF1bHRWYWx1ZSB9LlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCcnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXS5tYXhPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KSAvLyBzYW1lIGFzIGRlZmF1bHRJZkVtcHR5KCdkZWZhdWx0JykubWF4KClgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0MSA9IFtdLm1heE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQxLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDEgPT09ICdkZWZhdWx0JywgJ21heCB2YWx1ZSBvciBkZWZhdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW10ubWluT3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlOiAnZGVmYXVsdCcgfSkgLy8gc2FtZSBhcyBkZWZhdWx0SWZFbXB0eSgnZGVmYXVsdCcpLm1pbigpYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDIgPSBbXS5taW5PckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3Q0MiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDQyID09PSAnZGVmYXVsdCcsICdtaW4gdmFsdWUgb3IgZGVmYXVsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXyhcbiAgICAgICAgICAgICAgICAobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0XG4gICAgICAgICAgICAgICAgKSAvLyBhZ2dyZWdhdGUgYWN0cyBsaWtlIHJlZHVjZSgpLCBpbiB0aGlzIGNhc2UgdHJhY2tpbmcgdGhlIG1heCBsZW5ndGggYnV0IGl0IGNvdWxkIHN1bSB1cCB0aGUgcmVzdWx0cywgZXRjYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDMgPSBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oKGxvbmdlc3QsIG5leHQpID0+IG5leHQubGVuZ3RoID4gbG9uZ2VzdC5sZW5ndGggPyBuZXh0IDogbG9uZ2VzdCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0NDMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3Q0MyA9PT0gJ3Bhc3Npb25mcnVpdCcsICdBZ2dyZWdhdGUgd2l0aCBvbmx5IGZ1bmN0b24nKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsXG4gICAgICAgICAgICAgICAgKGxvbmdlc3QsIG5leHQpID0+IEFycmF5LmZyb20obmV4dCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPiBBcnJheS5mcm9tKGxvbmdlc3QpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3RcbiAgICAgICAgICAgICkgLy8gaW5pdGlhbCB2YWx1ZSBjYW4gYmUgcHJvdmlkZWRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3Q0NCA9IFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJywgKGxvbmdlc3QsIG5leHQpID0+IEFycmF5LmZyb20obmV4dCkuZmlsdGVyKGYgPT4gZiA9PT0gJ24nKS5sZW5ndGggPiBBcnJheS5mcm9tKGxvbmdlc3QpLmZpbHRlcihmID0+IGYgPT09ICduJykubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQ0LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDQgPT09ICdiYW5hbmEnLCAnQWdncmVnYXRlIHdpdGggaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnYXBwbGUnLCAnbWFuZ28nLCAnb3JhbmdlJywgJ3Bhc3Npb25mcnVpdCcsICdncmFwZSddLmFnZ3JlZ2F0ZV9xXygnYmFuYW5hJyxcbiAgICAgICAgICAgICAgICAobG9uZ2VzdCwgbmV4dCkgPT4gbmV4dC5sZW5ndGggPiBsb25nZXN0Lmxlbmd0aCA/IG5leHQgOiBsb25nZXN0LFxuICAgICAgICAgICAgICAgIGZydWl0ID0+IGZydWl0LnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICkgLy8gY2FuIHRha2UgaW5pdGlhbCB2YWx1ZSBhbmQgYSBmdW5jdGlvbiBjYWxsZWQgdXBvbiB0aGUgZmluYWwgcmVzdWx0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0NDUgPSBbJ2FwcGxlJywgJ21hbmdvJywgJ29yYW5nZScsICdwYXNzaW9uZnJ1aXQnLCAnZ3JhcGUnXS5hZ2dyZWdhdGVfcV8oJ2JhbmFuYScsIChsb25nZXN0LCBuZXh0KSA9PiBuZXh0Lmxlbmd0aCA+IGxvbmdlc3QubGVuZ3RoID8gbmV4dCA6IGxvbmdlc3QsIGZydWl0ID0+IGZydWl0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDQ1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0NDUgPT09ICdQQVNTSU9ORlJVSVQnLCAnQWdncmVnYXRlIHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgb3V0cHV0IGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgVEVTVCAke3RoaXMudmlld01vZGVsLnRlc3ROdW1iZXJ9OiBUZXN0IHN1Y2Nlc3NmdWxgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3QwMDUgPSBUZXN0MDA1O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUZXN0Q2FzZVZpZXdNb2RlbF8xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3TW9kZWxcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL2Fzc2VydFwiKTtcbmNvbnN0IFRlc3RDYXNlVmlld18xID0gcmVxdWlyZShcIi4vVGVzdENhc2VWaWV3XCIpO1xuY2xhc3MgVGVzdFZpZXdNb2RlbCBleHRlbmRzIFRlc3RDYXNlVmlld01vZGVsXzEuVGVzdENhc2VWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiAnTXVsdGktU2VxdWVuY2UgUXVlcmllcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6IGA8cD5UaGVzZSBmdW5jdGlvbnMsIHdoaWNoIGluY2x1ZGUgaW5uZXIgam9pbnMsIG91dGVyIGpvaW5zLCBjb25jYXRlbmF0aW9uLCBhbmQgc2VtaS1qb2lucywgY29tcGFyZSBhbmQvb3IgY29tYmluZSBtdWx0aXBsZSBpdGVyYWJsZXMuPC9wPmBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5jbGFzcyBUZXN0MDA2IGV4dGVuZHMgVGVzdENhc2VWaWV3XzEuVGVzdENhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobmV3IFRlc3RWaWV3TW9kZWwoKSk7XG4gICAgfVxuICAgIHRlc3RDYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRG8geW91ciB0ZXN0aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMubG9nKGBUbyBiZSBlcXVhbCB0d28gc2VxdWVuY2VzIG5lZWQgdG8gYmUgdGhlIHNhbWUgbGVuZ3RoIGFuZCBoYXZlIHRoZSBzYW1lIGl0ZW1zIGluIHRoZSBzYW1lIG9yZGVyLmApO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSkgLy8gZGlmZmVyZW50IGxlbmd0aHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwMSA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAzXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KCF0ZXN0MDEsIFwiU2VxdWVuY2VFcXVhbCB0ZXN0cyBsZW5ndGggMVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pIC8vIGRpZmZlcmVudCBsZW5ndGhzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDIgPSBbMSwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAyLCBcIlNlcXVlbmNlRXF1YWwgdGVzdHMgbGVuZ3RoIDJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDMsIDFdKSAvLyBvcmRlciBtYXR0ZXJzYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDMgPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbMiwgMywgMV0pO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDAzLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDAzLCBcIlNlcXVlbmNlRXF1YWwgdGVzdHMgaXRlbXNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDNdKSAvLyB0aGlzIGlzIGdvb2RgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QwNCA9IFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFsxLCAyLCAzXSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MDQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QwNCwgXCJTZXF1ZW5jZUVxdWFsIG1hdGNoZXMgaXRlbXMgYW5kIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTIsIC0zXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA1ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA1LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCghdGVzdDA1LCAnU2VxdWVuY2VFcXVhbCB3aXRoIGN1c3RvbSBjb21wYXJlciB0ZXN0cyBsZW5ndGggMScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA2ID0gWzEsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwNiwgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdGVzdHMgbGVuZ3RoIDInKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzXS5zZXF1ZW5jZUVxdWFsX3FfKFstMiwgLTMsIC0xXSwgKHgsIHkpID0+IE1hdGguYWJzKHgpID09PSBNYXRoLmFicyh5KSkgLy8gd2l0aCBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA3ID0gWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0yLCAtMywgLTFdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoIXRlc3QwNywgJ1NlcXVlbmNlRXF1YWwgd2l0aCBjdXN0b20gY29tcGFyZXIgdGVzdHMgaXRlbXMnKTtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnVlXG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDNdLnNlcXVlbmNlRXF1YWxfcV8oWy0xLCAtMiwgLTNdLCAoeCwgeSkgPT4gTWF0aC5hYnMoeCkgPT09IE1hdGguYWJzKHkpKSAvLyB3aXRoIGEgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MDggPSBbMSwgMiwgM10uc2VxdWVuY2VFcXVhbF9xXyhbLTEsIC0yLCAtM10sICh4LCB5KSA9PiBNYXRoLmFicyh4KSA9PT0gTWF0aC5hYnMoeSkpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDA4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MDgsICdTZXF1ZW5jZUVxdWFsIHdpdGggY3VzdG9tIGNvbXBhcmVyIHRvIGVxdWF0ZSBhYnNvbHV0ZSB2YWx1ZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMl0uY29uY2F0X3FfKFszLCA0XSkgLy8gMSwyLDMsNGApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDA5ID0gWzEsIDJdLmNvbmNhdF9xXyhbMywgNF0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QwOSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDA5LnNlcXVlbmNlRXF1YWxfcV8oWzEsIDIsIDMsIDRdKSwgXCJDb25jYXQgY29uY2F0ZW5hdGVzIHNlcXVlbmNlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgMywgNCwgMl0udW5pb25fcV8oWzIsIDMsIDQsIDUsIDYsIDZdKSAvLyAxLDIsMyw0LDUsNiAoY29uY2F0ZW5hdGVzIGFuZCBkZWR1cGVzKWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEwID0gWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEwLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTAuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMiwgMywgNCwgNSwgNl0pLCBcIlVuaW9uIGNvbmNhdGVuYXRlcyBhbmQgcmVtb3ZlcyBkdXBsaWNhdGVzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCAzLCA0LCAyXS51bmlvbl9xXyhbMiwgMywgNCwgNSwgNiwgNl0sICh4LCB5KSA9PiB4ICUgMiA9PT0geSAlIDIpIC8vIGN1c3RvbSBldmVuL29kZCBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDExID0gWzEsIDIsIDMsIDMsIDQsIDJdLnVuaW9uX3FfKFsyLCAzLCA0LCA1LCA2LCA2XSwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDExLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTEuc2VxdWVuY2VFcXVhbF9xXyhbMSwgMl0pLCAndW5pb24gd2l0aCBjdXN0b20gY29tcGFyZXIgdG8gbWF0Y2ggZXZlbnMvb2RkcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IHg6IDEgfSwgeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogMiB9XS51bmlvbkJ5X3FfKFt7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDUgfSwgeyB4OiA2IH0sIHsgeDogNiB9XSwgcSA9PiBxLngpIC8vIGRvZXMgYSB1bmlvbiBvbiBrZXlzIHJldHVybmVkIGJ5IGtleSBzZWxlY3RvciBmdW5jdGlvbiwgcmV0dXJuaW5nIHRoZSBpdGVtc2ApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDEyID0gW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDEyLCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MTIpID09PSBgW3tcInhcIjoxfSx7XCJ4XCI6Mn0se1wieFwiOjN9LHtcInhcIjo0fSx7XCJ4XCI6NX0se1wieFwiOjZ9XWAsIFwidW5pb25CeSByZXR1cm5zIG9uZSBpdGVtIGZvciBlYWNoIHVuaXF1ZSBrZXlcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW3sgeDogMSB9LCB7IHg6IDIgfSwgeyB4OiAzIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiAyIH1dLnVuaW9uQnlfcV8oW3sgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiA0IH0sIHsgeDogNSB9LCB7IHg6IDYgfSwgeyB4OiA2IH1dLCBxID0+IHEueCwgKHgsIHkpID0+IHggJSAyID09PSB5ICUgMikgLy8gY3VzdG9tIGV2ZW4vb2RkIGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTMgPSBbeyB4OiAxIH0sIHsgeDogMiB9LCB7IHg6IDMgfSwgeyB4OiAzIH0sIHsgeDogNCB9LCB7IHg6IDIgfV0udW5pb25CeV9xXyhbeyB4OiAyIH0sIHsgeDogMyB9LCB7IHg6IDQgfSwgeyB4OiA1IH0sIHsgeDogNiB9LCB7IHg6IDYgfV0sIHEgPT4gcS54LCAoeCwgeSkgPT4geCAlIDIgPT09IHkgJSAyKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxMy5sZW5ndGggPT09IDIgJiYgdGVzdDEzWzBdLnggPT09IDEgJiYgdGVzdDEzWzFdLnggPT09IDIsIFwiVW5pb25CeSB3aXRoIGN1c3RvbSBjb21wYXJlciB0byBtYXRjaCBldmVucy9vZGRzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQScsICdBJywgJ0MnLCAnUScsICdCJywgJ0QnLCAnWCddLmludGVyc2VjdF9xXyhbJ1cnLCAnQScsICdDJywgJ0InLCAnTSddKSAvLyBkZWR1cGVkIHJlY29yZHMgdGhhdCBhcmUgaW4gYm90aCBzZXF1ZW5jZXNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNCA9IFsnQScsICdBJywgJ0MnLCAnUScsICdCJywgJ0QnLCAnWCddLmludGVyc2VjdF9xXyhbJ1cnLCAnQScsICdDJywgJ0InLCAnTSddKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNC5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFcIiwgXCJDXCIsIFwiQlwiXSksIFwiSW50ZXJzZWN0aW9uIHJldHVybnMgc2V0IHJlc3VsdCBvZiBpdGVtcyBpbiAyIHNlcXVlbmNlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnV2F0ZXJtZWxvbicsICdBdm9jYWRvJywgJ0N1Y3VtYmVyJywgJ0JlcnJ5JywgJ01hbmdvJywgJ2Itd3JvbmcnXSwgcSA9PiBxWzBdKSAvLyBmaW5kIGRlZHVwZWQga2V5cyB0aGF0IGFyZSBpbiBib3RoIHNlcXVlbmNlcyBhbmQgcmV0dXJuIGZpcnN0IGl0ZW0gZm9yIGVhY2hgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNSA9IFsnQXBwbGUnLCAnQXJ0aWNob2tlJywgJ0NhbnRlbG91cGUnLCAnUXVpbmNlJywgJ0JhbmFuYScsICdEYXRlJywgJ1hpZ3VhJ10uaW50ZXJzZWN0QnlfcV8oWydXYXRlcm1lbG9uJywgJ0F2b2NhZG8nLCAnQ3VjdW1iZXInLCAnQmVycnknLCAnTWFuZ28nLCAnYi13cm9uZyddLCBxID0+IHFbMF0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QxNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDE1LnNlcXVlbmNlRXF1YWxfcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlXCIsIFwiQmFuYW5hXCJdKSwgXCJpbnRlcnNlY3RCeSByZXR1cm5zIGludGVyc2VjdGlvbiBieSBrZXkgc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWydBcHBsZScsICdBcnRpY2hva2UnLCAnQ2FudGVsb3VwZScsICdRdWluY2UnLCAnQmFuYW5hJywgJ0RhdGUnLCAnWGlndWEnXS5pbnRlcnNlY3RCeV9xXyhbJ3dhdGVybWVsb24nLCAnYXZvY2FkbycsICdjdWN1bWJlcicsICdCZXJyeScsICdtYW5nbyddLCBxID0+IHFbMF0sICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkgLy8gY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MTYgPSBbJ0FwcGxlJywgJ0FydGljaG9rZScsICdDYW50ZWxvdXBlJywgJ1F1aW5jZScsICdCYW5hbmEnLCAnRGF0ZScsICdYaWd1YSddLmludGVyc2VjdEJ5X3FfKFsnd2F0ZXJtZWxvbicsICdhdm9jYWRvJywgJ2N1Y3VtYmVyJywgJ0JlcnJ5JywgJ21hbmdvJ10sIHEgPT4gcVswXSwgKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTYsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxNi5zZXF1ZW5jZUVxdWFsX3FfKFtcIkFwcGxlXCIsIFwiQ2FudGVsb3VwZVwiLCBcIkJhbmFuYVwiXSkpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsyLjAsIDIuMCwgMi4xLCAyLjIsIDIuMywgMi40LCAyLjVdLmV4Y2VwdF9xXyhbMi4yXSkgLy8gZGVkdXBlZCBpdGVtcyBmcm9tIGZpcnN0IG5vdCBpbiBzZWNvbmRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxNyA9IFsyLjAsIDIuMCwgMi4xLCAyLjIsIDIuMywgMi40LCAyLjVdLmV4Y2VwdF9xXyhbMi4yXSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE3LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTcuc2VxdWVuY2VFcXVhbF9xXyhbMiwgMi4xLCAyLjMsIDIuNCwgMi41XSksICdFeGNlcHQgcmVtb3ZlcyBpdGVtcyBmcm9tIHNlY29uZCBzZXF1ZW5jZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRfcV8oW3sgYTogMi4yIH1dLCAocSwgcikgPT4gcS5hID09PSByLmEpIC8vIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDE4ID0gW3sgYTogMi4wIH0sIHsgYTogMi4wIH0sIHsgYTogMi4xIH0sIHsgYTogMi4yIH0sIHsgYTogMi4zIH0sIHsgYTogMi40IH0sIHsgYTogMi41IH1dLmV4Y2VwdF9xXyhbeyBhOiAyLjIgfV0sIChxLCByKSA9PiBxLmEgPT09IHIuYSlcbiAgICAgICAgICAgICAgICAudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDE4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydCh0ZXN0MTgubWFwKG0gPT4gbS5hKS5zZXF1ZW5jZUVxdWFsX3FfKFsyLCAyLjEsIDIuMywgMi40LCAyLjVdKSwgJ0V4Y2VwdCB3aXRoIGN1c3RvbSBlcXVhbGl0eScpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRCeV9xXyhbeyBhOiAyLjIgfV0sIHEgPT4gcS5hKSAvLyBleGNlcHRCeSByZXR1cm5zIGV4Y2VwdGlvbiBieSBrZXkgc2VsZWN0b3JgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QxOSA9IFt7IGE6IDIuMCB9LCB7IGE6IDIuMCB9LCB7IGE6IDIuMSB9LCB7IGE6IDIuMiB9LCB7IGE6IDIuMyB9LCB7IGE6IDIuNCB9LCB7IGE6IDIuNSB9XS5leGNlcHRCeV9xXyhbeyBhOiAyLjIgfV0sIHEgPT4gcS5hKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MTksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QxOS5tYXAobSA9PiBtLmEpLnNlcXVlbmNlRXF1YWxfcV8oWzIsIDIuMSwgMi4zLCAyLjQsIDIuNV0pLCAnRXhjZXB0QnkgdXNlcyBrZXkgc2VsZWN0b3InKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogNCB9LCB7IGE6IDUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMiB9XSxcbiAgICAgICAgICAgICAgICBxID0+IHEuYSwgKHEsIHIpID0+IHEgJSAyID09PSByICUgMikgLy8gY3VzdG9tIGVxdWFsaXR5IHRvIG1ha2UgYWxsIGV2ZW5zIGFuZCBhbGwgb2RkcyBsb29rIHRoZSBzYW1lYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjAgPSBbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfSwgeyBhOiAzIH0sIHsgYTogNCB9LCB7IGE6IDUgfV0uZXhjZXB0QnlfcV8oW3sgYTogMiB9XSwgcSA9PiBxLmEsIChxLCByKSA9PiBxICUgMiA9PT0gciAlIDIpXG4gICAgICAgICAgICAgICAgLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIwLm1hcChtID0+IG0uYSkuc2VxdWVuY2VFcXVhbF9xXyhbMV0pLCAnRXhjZXB0Qnkgd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQW55b25lIHdpdGggU1FMIGV4cGVyaWVuY2Ugc2hvdWxkIGtub3cgd2hhdCBhbiBJbm5lciBKb2luIGlzLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiQW4gaW5uZXIgam9pbiBtYXRjaGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIGZpcnN0IHNlcXVlbmNlIHdpdGggZXZlcnkgaXRlbSBpbiB0aGUgc2Vjb25kIHNlcXVlbmNlIGJ5IG1hdGNoaW5nIGtleXMsIGFuZCByZXR1cm5zIHRob3NlIHJlY29yZHMgd2hlcmUgdGhlIGtleSBtYXRjaCBpcyB0cnVlLCBib3RoIGluIHRoZSBzYW1lIHJvd1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiVGhlIExJTlEgam9pbiByZXF1aXJlcyB5b3UgdG8gc2VuZCB0d28gc2VxdWVuY2VzLCBhIGtleSBzZWxlY3RvciBmb3Igc2VxdWVuY2UgMSwgYSBrZXkgc2VsZWN0b3IgZm9yIHNlcXVlbmNlIDIsIGFuZCBhbiBvdXRwdXQgcHJvamVjdGlvbiBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSByb3dzIHRvIHJldHVybi5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiQXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcImItd3JvbmdcIiwgXCJBdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCkgLy8gam9pbmluZyBvbiBmaXJzdCBsZXR0ZXIsIHJldHVybmluZyBsZWZ0IGZpcnN0IGxldHRlciBhbmQgcmlnaHQgZnVsbCB3b3JkJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjEgPSBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ3VjdW1iZXJcIl0uam9pbl9xXyhbXCJBcHBsZVwiLCBcIkNhbnRlbG91cGUgSXNsYW5kXCIsIFwiRHVyaWFuXCIsIFwiYi13cm9uZ1wiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gYCR7bFswXX0gaXMgZm9yICR7cn1gKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KHRlc3QyMS5zZXF1ZW5jZUVxdWFsX3FfKFtcIkEgaXMgZm9yIEFwcGxlXCIsIFwiQSBpcyBmb3IgQXZvY2Fkb1wiLCBcIkMgaXMgZm9yIENhbnRlbG91cGUgSXNsYW5kXCJdKSwgJ0pvaW4gY29tYmluZXMgdHdvIHNlcXVlbmNlcyByb3ctd2lzZScpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1tcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDdWN1bWJlclwiXS5qb2luX3FfKFtcImFwcGxlXCIsIFwiY2FudGVsb3VwZSBJc2xhbmRcIiwgXCJkdXJpYW5cIiwgXCJhdm9jYWRvXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+IGAke2xbMF19IGlzIGZvciAke3J9YCwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KSAvLyBjYW4gdGFrZSBhIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlcicpO1xuICAgICAgICAgICAgY29uc3QgdGVzdDIyID0gW1wiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkN1Y3VtYmVyXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJjYW50ZWxvdXBlIElzbGFuZFwiLCBcImR1cmlhblwiLCBcImF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCAobCwgcikgPT4gYCR7bFswXX0gaXMgZm9yICR7cn1gLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQodGVzdDIyLnNlcXVlbmNlRXF1YWxfcV8oW1wiQSBpcyBmb3IgYXBwbGVcIiwgXCJBIGlzIGZvciBhdm9jYWRvXCIsIFwiQyBpcyBmb3IgY2FudGVsb3VwZSBJc2xhbmRcIl0pLCAnSm9pbiBjYW4gdGFrZSBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwiSW4gTElOUSdzIGpvaW4sIHRoZSBvdXRwdXQgZnVuY3Rpb24gaXMgcmVxdWlyZWQuIEluIEpPSU4sIHlvdSBjYW4gaWdub3JlIGl0LiBJZiB5b3UgZG8gc28sIHNpbXBsZSB0dXBsZXMgYXJlIHJldHVybmVkLlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHJpY290XCIsIFwiQmFuYW5hXCJdLmpvaW5fcV8oW1wiYXBwbGVcIiwgXCJDYW50ZWxvdXBlIElzbGFuZFwiLCBcIkR1cmlhblwiLCBcIkF2b2NhZG9cIl0sIGwgPT4gbFswXSwgciA9PiByWzBdLCB7IGVxdWFsczogKHgsIHkpID0+IHgudG9Mb3dlckNhc2UoKSA9PT0geS50b0xvd2VyQ2FzZSgpIH0pIC8vIHNraXBwaW5nIHRoZSBvdXRwdXQgZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyMyA9IFtcIkFwcmljb3RcIiwgXCJCYW5hbmFcIl0uam9pbl9xXyhbXCJhcHBsZVwiLCBcIkNhbnRlbG91cGUgSXNsYW5kXCIsIFwiRHVyaWFuXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyMykgPT09IGBbW1wiQXByaWNvdFwiLFwiYXBwbGVcIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXV1gLCAnSm9pbigpIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgTElOUSBkb2VzIG5vdCBwcm92aWRlIGFuIG91dGVyIGpvaW4gb3BlcmF0b3IuIEl0IGNhbiBiZSBkb25lIChpbiBhIHRydWx5IHVnbHkgd2F5KSBpbiB0aGUgcXVlcnkgc3ludGF4LCBidXQgbm90IGluIGZsdWVudCBtZXRob2RzYCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyBidXQgSk9JTiBkb2VzIGhhdmUgYW4gb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDI0ID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjQsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNCkgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn1dYCwgJ291dGVySm9pbiBtYXRjaGluZyBKb2luKCkgc3ludGF4Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiLCBcIkFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSkgLy8gZGVmYXVsdCB0dXBsZSBvdXRwdXQgZnJvbSBqb2luX3FfKCkgaXMgYWxzbyBoZXJlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjUgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLm91dGVySm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCIsIFwiQXBwbGVcIl0sIGwgPT4gbFswXSwgciA9PiByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjUsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXBwbGVcIixcIkFwcGxlXCJdLFtcIkFwcmljb3RcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXBwbGVcIl0sW1wiQmFuYW5hXCIsXCJCZXJyeVwiXSxbXCJDYW50ZWxvdXBlXCIsbnVsbF1dYCwgJ291dGVySm9pbiB3aXRoIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiYmVycnlcIiwgXCJ3YXRlcm1lbG9uXCIsIFwiYXZvY2Fkb1wiLCBcImFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSksICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSkgLy8gY3VzdG9tIGVxdWFsaXR5YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MjYgPSBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pLCAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QyNiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDI2KSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiYXZvY2Fkb1wifSx7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiYXBwbGVcIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcImFwcGxlXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcImF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiYXBwbGVcIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJiZXJyeVwifSx7XCJsXCI6XCJDYW50ZWxvdXBlXCJ9XWAsICdvdXRlckpvaW4gd2l0aCBjdXN0b20gZXF1YWxpdHknKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbXCJBcHBsZVwiLCBcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0ub3V0ZXJKb2luX3FfKFtcImJlcnJ5XCIsIFwid2F0ZXJtZWxvblwiLCBcImF2b2NhZG9cIiwgXCJhcHBsZVwiXSwgbCA9PiBsWzBdLCByID0+IHJbMF0sIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b0xvd2VyQ2FzZSgpID09PSB5LnRvTG93ZXJDYXNlKCkgfSkgLy8gY3VzdG9tIGVxdWFsaXR5IGFuZCB0dXBsZSBvdXRwdXRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyNyA9IFtcIkFwcGxlXCIsIFwiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5vdXRlckpvaW5fcV8oW1wiYmVycnlcIiwgXCJ3YXRlcm1lbG9uXCIsIFwiYXZvY2Fkb1wiLCBcImFwcGxlXCJdLCBsID0+IGxbMF0sIHIgPT4gclswXSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvTG93ZXJDYXNlKCkgPT09IHkudG9Mb3dlckNhc2UoKSB9KS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjcsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyNykgPT09IGBbW1wiQXBwbGVcIixcImF2b2NhZG9cIl0sW1wiQXBwbGVcIixcImFwcGxlXCJdLFtcIkFwcGxlXCIsXCJhdm9jYWRvXCJdLFtcIkFwcGxlXCIsXCJhcHBsZVwiXSxbXCJBcHJpY290XCIsXCJhdm9jYWRvXCJdLFtcIkFwcmljb3RcIixcImFwcGxlXCJdLFtcIkJhbmFuYVwiLFwiYmVycnlcIl0sW1wiQ2FudGVsb3VwZVwiLG51bGxdXWAsICdvdXRlckpvaW4gd2l0aCBjdXN0b20gZXF1YWxpdHkgYW5kIHR1cGxlIG91dHB1dCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJUaGUgam9pbigpIGluIExJTlEgaXMga2luZCBvZiBhIHBhaW4uIEkgYWx3YXlzIGZpbmQgbXlzZWxmIHdvbmRlcmluZyB3aGF0IGFyZSB0aGUgaW5wdXRzLCB3aGljaCBpcyB0aGUgZmlyc3QsIHdoaWNoIGlzIHRoZSBzZWNvbmQsIHdoeSBkaWQgdGhleSB1c2UgJ2lubmVyJyBhbmQgJ291dGVyJyBmb3IgdGhpbmdzIHRoYXQgYXJlbid0IGlubmVyIG9yIG91dGVyLCBldGMuIEkga2VlcCBoYXZpbmcgdG8gZ29vZ2xlIGl0LiBTbyBKT0lOIGNvbnRhaW5zIGEgZnJpZW5kbHkgdmVyc2lvbiB0aGF0IGNvbWJpbmVzIHR3byBrZXkgc2VsZWN0b3JzIGFuZCBjdXN0b20gZXF1YWxpdHkgaW50byBhIHNpbmdsZSBmdW5jdGlvbi5cIik7XG4gICAgICAgICAgICB0aGlzLmxvZygnJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5pbm5lckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyBqb2luIG9uIGZpcnN0IGxldHRlciBhbmQgcmV0dXJuIG9iamVjdHNgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOCA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdLCAobCwgcikgPT4gKHsgbCwgciB9KSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDI4LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MjgpID09PSBgW3tcImxcIjpcIkFwcGxlXCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkFwcmljb3RcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQmFuYW5hXCIsXCJyXCI6XCJCZXJyeVwifV1gLCBcIkJhc2ljIGlubmVySm9pbiBoZWxwZXJcIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5pbm5lckpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0pIC8vIHJldHVybnMgdHVwbGVzLCBvdXRwdXQgZnVuY3Rpb24gaXMgb3B0aW9uYWxgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QyOSA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uaW5uZXJKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MjksIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QyOSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXSxbXCJCYW5hbmFcIixcIkJlcnJ5XCJdXWAsICdJbm5lckpvaW4gaGVscGVyIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpIC8vIHRoZXJlJ3MgYWxzbyBhIGxlZnQgb3V0ZXIgam9pbmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDMwID0gW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDMwKSA9PT0gYFt7XCJsXCI6XCJBcHBsZVwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJBcHJpY290XCIsXCJyXCI6XCJBdm9jYWRvXCJ9LHtcImxcIjpcIkJhbmFuYVwiLFwiclwiOlwiQmVycnlcIn0se1wibFwiOlwiQ2FudGVsb3VwZVwifV1gLCAnTGVmdEpvaW4gaGVscGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5sZWZ0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSkgLy8gYWxzbyBhbGxvd3MgdHVwbGUgb3V0cHV0YCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzEgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLmxlZnRKb2luX3FfKFtcIkJlcnJ5XCIsIFwiV2F0ZXJtZWxvblwiLCBcIkF2b2NhZG9cIl0sIChsLCByKSA9PiBsWzBdID09PSByWzBdKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzEsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMSkgPT09IGBbW1wiQXBwbGVcIixcIkF2b2NhZG9cIl0sW1wiQXByaWNvdFwiLFwiQXZvY2Fkb1wiXSxbXCJCYW5hbmFcIixcIkJlcnJ5XCJdLFtcIkNhbnRlbG91cGVcIixudWxsXV1gLCAnTGVmdEpvaW4gaGVscGVyIHdpdGggdHVwbGUgb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgW1wiQXBwbGVcIiwgXCJBcHJpY290XCIsIFwiQmFuYW5hXCIsIFwiQ2FudGVsb3VwZVwiXS5yaWdodEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSByaWdodCBvdXRlciBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzIgPSBbXCJBcHBsZVwiLCBcIkFwcmljb3RcIiwgXCJCYW5hbmFcIiwgXCJDYW50ZWxvdXBlXCJdLnJpZ2h0Sm9pbl9xXyhbXCJCZXJyeVwiLCBcIldhdGVybWVsb25cIiwgXCJBdm9jYWRvXCJdLCAobCwgcikgPT4gbFswXSA9PT0gclswXSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzMiwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDMyKSA9PT0gYFt7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcInJcIjpcIldhdGVybWVsb25cIn0se1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifV1gLCAnUmlnaHRKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uZnVsbEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGVyZSdzIGFsc28gYSBmdWxsIG91dGVyIGpvaW5gKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzMyA9IFtcIkFwcGxlXCIsIFwiQXByaWNvdFwiLCBcIkJhbmFuYVwiLCBcIkNhbnRlbG91cGVcIl0uZnVsbEpvaW5fcV8oW1wiQmVycnlcIiwgXCJXYXRlcm1lbG9uXCIsIFwiQXZvY2Fkb1wiXSwgKGwsIHIpID0+IGxbMF0gPT09IHJbMF0sIChsLCByKSA9PiAoeyBsLCByIH0pKS50b0FycmF5X3FfKCk7XG4gICAgICAgICAgICB0aGlzLmxvZyh0ZXN0MzMsIHRydWUpO1xuICAgICAgICAgICAgYXNzZXJ0XzEuYXNzZXJ0KEpTT04uc3RyaW5naWZ5KHRlc3QzMykgPT09IGBbe1wibFwiOlwiQXBwbGVcIixcInJcIjpcIkF2b2NhZG9cIn0se1wibFwiOlwiQXByaWNvdFwiLFwiclwiOlwiQXZvY2Fkb1wifSx7XCJsXCI6XCJCYW5hbmFcIixcInJcIjpcIkJlcnJ5XCJ9LHtcImxcIjpcIkNhbnRlbG91cGVcIn0se1wiclwiOlwiV2F0ZXJtZWxvblwifV1gLCAnRnVsbEpvaW4gaGVscGVyJyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzIsIDNdLmNyb3NzSm9pbl9xXyhbNSwgNl0sIChsLCByKSA9PiAoeyBsLCByIH0pKSAvLyB0aGUgam9pbiBjb2xsZWN0aW9uIGlzbid0IGNvbXBsZXRlIHdpdGhvdXQgYSBjcm9zcyBqb2luYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzQgPSBbMiwgM10uY3Jvc3NKb2luX3FfKFs1LCA2XSwgKGwsIHIpID0+ICh7IGwsIHIgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM0KSA9PT0gYFt7XCJsXCI6MixcInJcIjo1fSx7XCJsXCI6MixcInJcIjo2fSx7XCJsXCI6MyxcInJcIjo1fSx7XCJsXCI6MyxcInJcIjo2fV1gLCAnQ3Jvc3NKb2luIGhlbHBlcicpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJHcm91cEpvaW4gaXMgYSB3ZWlyZCBvbmUgdGhhdCBzb3VuZHMgbGlrZSBhbm90aGVyIGN1c3RvbSBtZXRob2QsIGJ1dCB0aGlzIG9uZSBjb21lcyBmcm9tIE1pY3Jvc29mdC4gQSBncm91cCBqb2luIGlzIGxpa2UgYSBjb21iaW5hdGlvbiBvZiBvdXRlciBqb2luIGFuZCBoYWxmIGEgZ3JvdXBCeS4gVGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUgYXJlIGpvaW5lZCBhbmQgdGhlbiB0aGUgcmlnaHQgc2lkZSBpcyBncm91cGVkIG9uIHRoZSBqb2luaW5nIGtleS4gSWYgbm90aGluZyBpcyBvbiB0aGUgcmlnaHQsIHRoZSBncm91cCBsaXN0IGlzIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhpcy5sb2coJycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydBdmVyYWdlJywgJ0FscGhhYmV0JywgJ0NhcnRvZ3JhcGhlcicsICdjLXdyb25nJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSkpIC8vIGpvaW4gb24gZmlyc3QgbGV0dGVycyBhbmQgZ3JvdXAgcmlnaHRgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QzNSA9IFsnQXBwbGUnLCAnQmFuYW5hJywgJ0FwcGxlJywgJ0NhbnRlbG91cGUnXS5ncm91cEpvaW5fcV8oWydBdmVyYWdlJywgJ0FscGhhYmV0JywgJ0NhcnRvZ3JhcGhlcicsICdjLXdyb25nJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSkpLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNSwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM1KSA9PT0gYFt7XCJ3b3JkXCI6XCJBcHBsZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQXZlcmFnZVwiLFwiQWxwaGFiZXRcIl19LHtcIndvcmRcIjpcIkJhbmFuYVwiLFwiYWxzb01hdGNoaW5nXCI6W119LHtcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJBdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQ2FudGVsb3VwZVwiLFwiYWxzb01hdGNoaW5nXCI6W1wiQ2FydG9ncmFwaGVyXCJdfV1gLCAnR3JvdXBKb2luIGpvaW5zIGFuZCBncm91cHMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbJ0FwcGxlJywgJ0JhbmFuYScsICdBcHBsZScsICdDYW50ZWxvdXBlJ10uZ3JvdXBKb2luX3FfKFsnYXZlcmFnZScsICdBbHBoYWJldCcsICdjYXJ0b2dyYXBoZXInXSwgcSA9PiBxWzBdLCBxID0+IHFbMF0sICh3b3JkLCBhbHNvTWF0Y2hpbmcpID0+ICh7IHdvcmQsIGFsc29NYXRjaGluZyB9KSwgeyBlcXVhbHM6ICh4LCB5KSA9PiB4LnRvVXBwZXJDYXNlKCkgPT09IHkudG9VcHBlckNhc2UoKSB9KSAvLyBjYW4gdGFrZSBhIGN1c3RvbSBlcXVhbGl0eWApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM2ID0gWydBcHBsZScsICdCYW5hbmEnLCAnQXBwbGUnLCAnQ2FudGVsb3VwZSddLmdyb3VwSm9pbl9xXyhbJ2F2ZXJhZ2UnLCAnQWxwaGFiZXQnLCAnY2FydG9ncmFwaGVyJ10sIHEgPT4gcVswXSwgcSA9PiBxWzBdLCAod29yZCwgYWxzb01hdGNoaW5nKSA9PiAoeyB3b3JkLCBhbHNvTWF0Y2hpbmcgfSksIHsgZXF1YWxzOiAoeCwgeSkgPT4geC50b1VwcGVyQ2FzZSgpID09PSB5LnRvVXBwZXJDYXNlKCkgfSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM2LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzYpID09PSBgW3tcIndvcmRcIjpcIkFwcGxlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJhdmVyYWdlXCIsXCJBbHBoYWJldFwiXX0se1wid29yZFwiOlwiQmFuYW5hXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXX0se1wid29yZFwiOlwiQXBwbGVcIixcImFsc29NYXRjaGluZ1wiOltcImF2ZXJhZ2VcIixcIkFscGhhYmV0XCJdfSx7XCJ3b3JkXCI6XCJDYW50ZWxvdXBlXCIsXCJhbHNvTWF0Y2hpbmdcIjpbXCJjYXJ0b2dyYXBoZXJcIl19XWAsICdHcm91cCBqb2luIHdpdGggY3VzdG9tIGVxdWFsaXR5Jyk7XG4gICAgICAgICAgICB0aGlzLmxvZyhgWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10pIC8vIHdpbGwgcmV0dXJuIDMgdHVwbGVzLCBbMSw1XSwgWzIsNl0sIGFuZCBbMyw3XSwgb25lIGZyb20gZWFjaCBzZXF1ZW5jZSBpbiBvcmRlcmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM3ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzNywgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM3KSA9PT0gYFtbMSw1XSxbMiw2XSxbMyw3XV1gLCAnWmlwIHR3byBzZXF1ZW5jZXMgaW50byBhIHNlcXVlbmNlIG9mIHR1cGxlcycpO1xuICAgICAgICAgICAgdGhpcy5sb2coYFsxLCAyLCAzLCA0XS56aXBfcV8oWzUsIDYsIDddLCBbOCwgOSwgMTAsIDExXSkgLy8gY2FuIHppcCBhIHRoaXJkIHR1cGxlYCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0MzggPSBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgWzgsIDksIDEwLCAxMV0pLnRvQXJyYXlfcV8oKTtcbiAgICAgICAgICAgIHRoaXMubG9nKHRlc3QzOCwgdHJ1ZSk7XG4gICAgICAgICAgICBhc3NlcnRfMS5hc3NlcnQoSlNPTi5zdHJpbmdpZnkodGVzdDM4KSA9PT0gYFtbMSw1LDhdLFsyLDYsOV0sWzMsNywxMF1dYCwgJ1ppcCB0aHJlZSBzZXF1ZW5jZXMnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBbMSwgMiwgMywgNF0uemlwX3FfKFs1LCA2LCA3XSwgKHgsIHkpID0+IHggKiB5KSAvLyBpbiBwbGFjZSBvZiB0aGUgdGhpcmQgdHVwbGUgeW91IGNhbiBzZW5kIGEgZnVuY3Rpb24gdGhhdCBjb21iaW5lcyB0aGUgZmlyc3QgMmApO1xuICAgICAgICAgICAgY29uc3QgdGVzdDM5ID0gWzEsIDIsIDMsIDRdLnppcF9xXyhbNSwgNiwgN10sICh4LCB5KSA9PiB4ICogeSkudG9BcnJheV9xXygpO1xuICAgICAgICAgICAgdGhpcy5sb2codGVzdDM5LCB0cnVlKTtcbiAgICAgICAgICAgIGFzc2VydF8xLmFzc2VydChKU09OLnN0cmluZ2lmeSh0ZXN0MzkpID09PSBgW1sxLDUsNV0sWzIsNiwxMl0sWzMsNywyMV1dYCwgJ1ppcCB0d28gc2VxdWVuY2VzIGFuZCBhIHZpcnR1YWwgc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKGBURVNUICR7dGhpcy52aWV3TW9kZWwudGVzdE51bWJlcn06IFRlc3Qgc3VjY2Vzc2Z1bGApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdDAwNiA9IFRlc3QwMDY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRlc3RIZWFkZXJfMSA9IHJlcXVpcmUoXCIuL1Rlc3RIZWFkZXJcIik7XG5jb25zdCBDb25zb2xlVmlld18xID0gcmVxdWlyZShcIi4vQ29uc29sZVZpZXdcIik7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RDYXNlVmlldyBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ldyBUZXN0SGVhZGVyXzEuVGVzdEhlYWRlcih2aWV3TW9kZWwpKTtcbiAgICAgICAgdGhpcy5jb25zb2xlID0gbmV3IENvbnNvbGVWaWV3XzEuQ29uc29sZVZpZXcoKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmNvbnNvbGUpO1xuICAgICAgICAvLyBOb3RlOiBUaGlzIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgRE9NIGJ5IHRoZSBQYWdlUm91dGVyIGltbWVkaWF0ZWx5IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgICAgLy8gTm90aGluZyBpbiB0aGUgaW5oZXJpdGluZyBjbGFzcyBjYW4gcmVmZXJlbmNlIHRoaXMgY29tcG9uZW50IHVudGlsIGFmdGVyIGl0IGlzIGNvbnN0cnVjdGVkLlxuICAgICAgICAvLyBIZXJlIHdlIGRvbid0IGNhcmUuXG4gICAgICAgIHRoaXMudGVzdENhc2UoKTtcbiAgICB9XG4gICAgbG9nKHRoaW5nLCByZXN1bHQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKHRoaW5nLCByZXN1bHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENhc2VWaWV3ID0gVGVzdENhc2VWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJY2hpZ29fMSA9IHJlcXVpcmUoXCIuL0ljaGlnb1wiKTtcbmNsYXNzIFRlc3RDYXNlVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGRlc2NyaXB0aW9uSHRtbCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gSWNoaWdvXzEuZXNjYXBlSHRtbChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSHRtbDtcbiAgICAgICAgdGhpcy50ZXN0TnVtYmVyID0gSWNoaWdvXzEuUGFnZVJvdXRlci5wYXJhbXMuZ2V0KCdpZCcpIHx8ICc/JztcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDYXNlVmlld01vZGVsID0gVGVzdENhc2VWaWV3TW9kZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgVGVzdEhlYWRlciBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iodm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHZtLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoSWNoaWdvXzEucGFyYWdyYXBoKGA8aDE+VGVzdCAke3ZtLnRlc3ROdW1iZXJ9OiAke3ZtLm5hbWV9PC9oMT5gKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKEljaGlnb18xLnNwYW4odm0uZGVzY3JpcHRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdEhlYWRlciA9IFRlc3RIZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEljaGlnb18xID0gcmVxdWlyZShcIi4vSWNoaWdvXCIpO1xuY2xhc3MgVGVzdGJlbmNoVmlldyBleHRlbmRzIEljaGlnb18xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGlkOiAndGVzdC1iZW5jaCcsXG4gICAgICAgICAgICBpbm5lckh0bWw6IGA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXN0LWxpbmtcIj5QcmV2aW91cyBUZXN0PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidGVzdEhlYWRlclwiPlRlc3QgIzA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRlc3QtbGlua1wiIGRhdGEtbmV4dD1cIjFcIj5OZXh0IFRlc3Q8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxheW91dC1ib2R5PjwvbGF5b3V0LWJvZHk+YFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGRyID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0SGVhZGVyJyk7XG4gICAgICAgIGlmIChoZHIpIHtcbiAgICAgICAgICAgIGhkci5pbm5lckhUTUwgPSBcIlRlc3QgI1wiICsgSWNoaWdvXzEuUGFnZVJvdXRlci5tYXRjaGVkUm91dGUucGFyYW1zLmdldCgnaWQnKSB8fCAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwYWdlciB0byBnbyB0aHJvdWdoIHRlc3RzLlxuICAgICAgICBmb3IgKGNvbnN0IGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXN0LWxpbmsnKSkge1xuICAgICAgICAgICAgbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ290b05leHRUZXN0LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdvdG9OZXh0VGVzdChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKEljaGlnb18xLlBhZ2VSb3V0ZXIubWF0Y2hlZFJvdXRlLnBhcmFtcy5nZXQoJ2lkJykgfHwgJzAnKTtcbiAgICAgICAgbGV0IG5leHRpZDtcbiAgICAgICAgaWYgKGV2dC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmV4dCkge1xuICAgICAgICAgICAgbmV4dGlkID0gaWQgKyAxO1xuICAgICAgICAgICAgLy8gQXQgdGhlIG1vbWVudCwgdGhlcmUncyBleGFjdGx5IG9uZSByb3V0ZSBwZXIgdGVzdCwgc28gd2UgY2FuIGNoZWFwbHkga25vdyB3ZSdyZSBhdCB0aGUgZW5kXG4gICAgICAgICAgICAvLyBldmVuIHdpdGhvdXQgYW55IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB0ZXN0cyBiZWluZyBpbiB0aGlzIGNsYXNzLiBUaGlzIGlzIGEgY2hlYXQsIHRob3VnaCxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgY291bGQgZWFzaWx5IGhhdmUgYWRkZWQgc29tZSBvdGhlciByb3V0ZXMuXG4gICAgICAgICAgICBpZiAobmV4dGlkID49IEljaGlnb18xLlBhZ2VSb3V0ZXIuYWxsUm91dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5leHRpZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0aWQgPSBpZCAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dGlkIDwgMCkge1xuICAgICAgICAgICAgICAgIG5leHRpZCA9IEljaGlnb18xLlBhZ2VSb3V0ZXIuYWxsUm91dGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGRyID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0SGVhZGVyJyk7XG4gICAgICAgIGlmIChoZHIpIHtcbiAgICAgICAgICAgIGhkci5pbm5lckhUTUwgPSBcIlRlc3QgI1wiICsgbmV4dGlkO1xuICAgICAgICB9XG4gICAgICAgIEljaGlnb18xLlBhZ2VSb3V0ZXIucm91dGUoJ3Rlc3QvJyArIG5leHRpZCk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0YmVuY2hWaWV3ID0gVGVzdGJlbmNoVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gYXNzZXJ0KHRlc3QsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIXRlc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCcpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIl19
