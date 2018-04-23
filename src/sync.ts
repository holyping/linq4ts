import { IComparer, ITuple, IEqualityComparer, IConstructor, RecOrdMap, InvalidOperationException, ErrorString, StrictEqualityComparer, ArgumentOutOfRangeException, EqualityComparer, toiterator, AsTuple } from "./shared";

export interface IEnumerable<TSource> extends Iterable<TSource> {
        aggregate(func: (x: TSource, y: TSource) => TSource): TSource,
        aggregate<TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate): TAccumulate,
        aggregate<TAccumulate, TResult>(
                seed: TAccumulate,
                func: (x: TAccumulate, y: TSource) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): TResult,
        all(predicate: (x: TSource) => boolean): boolean,
        any(predicate?: (x: TSource) => boolean): boolean,
        average(this: IEnumerable<number>): number
        average(selector: (x: TSource) => number): number,
        concat(second: IEnumerable<TSource>): IEnumerable<TSource>,
        contains(value: TSource, comparer?: IEqualityComparer<TSource>): boolean,
        count(predicate?: (x: TSource) => boolean): number
        distinct(comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>,
        elementAt(index: number): TSource,
        elementAtOrDefault(index: number): TSource | null,
        except(second: Iterable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>,
        first(predicate?: (x: TSource) => boolean): TSource,
        firstOrDefault(predicate?: (x: TSource) => boolean): TSource | null,
        each(action: (x: TSource) => void): IEnumerable<TSource>,
        groupBy(keySelector: (x: TSource) => number): IEnumerable<IGrouping<number, TSource>>
        groupBy(keySelector: (x: TSource) => string): IEnumerable<IGrouping<string, TSource>>
        groupBy<TKey>(
                keySelector: (x: TSource) => TKey,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TSource>>,
        groupByWithSel<TElement>(
                keySelector: ((x: TSource) => number),
                elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<number, TElement>>
        groupByWithSel<TElement>(
                keySelector: ((x: TSource) => string),
                elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<string, TElement>>
        groupByWithSel<TKey, TElement>(
                keySelector: ((x: TSource) => TKey),
                elementSelector: (x: TSource) => TElement,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>,
        intersect(second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>,
        // join in LINQ - but renamed to avoid clash with Array.prototype.join
        joinByKey<TInner, TKey, TResult>(
                inner: IEnumerable<TInner>,
                outerKeySelector: (x: TSource) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: TSource, y: TInner) => TResult,
                comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>,
        last(predicate?: (x: TSource) => boolean): TSource,
        lastOrDefault(predicate?: (x: TSource) => boolean): TSource | null,
        max(this: IEnumerable<number>): number,
        max(selector: (x: TSource) => number): number,
        min(this: IEnumerable<number>): number | never,
        min(selector: (x: TSource) => number): number | never,
        /* tslint:disable:ban-types */
        ofType(type: "object"): IEnumerable<Object>
        ofType(type: "function"): IEnumerable<Function>
        ofType(type: "symbol"): IEnumerable<Symbol>
        /* tslint:enable:ban-types */
        ofType(type: "boolean"): IEnumerable<boolean>
        ofType(type: "number"): IEnumerable<number>
        ofType(type: "string"): IEnumerable<string>
        ofType<TResult>(type: IConstructor<TResult>): IEnumerable<TResult>,
        orderBy(predicate: (x: TSource) => number | string): IOrderedEnumerable<TSource>
        orderBy(predicate: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
        orderBy(predicate: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>,
        orderByDescending(predicate: (x: TSource) => number | string): IOrderedEnumerable<TSource>
        orderByDescending(predicate: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
        orderByDescending(predicate: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>,
        reverse(): IEnumerable<TSource>,
        select<OUT>(selector: (x: TSource) => OUT): IEnumerable<OUT>
        select<TKey extends keyof TSource>(key: TKey): IEnumerable<TSource[TKey]>,
        selectMany<OUT>(selector: (x: TSource) => Iterable<OUT>): IEnumerable<OUT>,
        selectMany<TBindedSource extends { [key: string]: Iterable<TOut> }, TOut>(
                this: IEnumerable<TBindedSource>,
                selector: keyof TBindedSource): IEnumerable<TOut>,
        sequenceEquals(second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): boolean,
        single(predicate?: (x: TSource) => boolean): TSource,
        singleOrDefault(predicate?: (x: TSource) => boolean): TSource | null,
        skip(count: number): IEnumerable<TSource>,
        skipWhile(predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource>,
        sum(this: IEnumerable<number>): number
        sum(selector: (x: TSource) => number): number,
        take(amount: number): IEnumerable<TSource>,
        takeWhile(predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource>,
        toArray(): TSource[],
        // = ToDictionary
        toMap<TKey>(selector: (x: TSource) => TKey): Map<TKey, TSource[]>,
        toSet(): Set<TSource>,
        union(second: Iterable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>,
        where(predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource>,
        zip<TSecond>(second: Iterable<TSecond>): IEnumerable<ITuple<TSource, TSecond>>,
        zip<TSecond, TResult>(
                second: Iterable<TSecond>,
                resultSelector: (x: TSource, y: TSecond) => TResult): IEnumerable<TResult>,
        [Symbol.iterator](): IterableIterator<TSource>
}

export interface IOrderedEnumerable<TSource> extends IEnumerable<TSource> {
        thenBy: {
                (keySelector: (x: TSource) => string | number): IOrderedEnumerable<TSource>
                (keySelector: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
                (keySelector: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>,
        }
        thenByDescending: {
                (keySelector: (x: TSource) => string | number): IOrderedEnumerable<TSource>
                (keySelector: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
                (keySelector: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>,
        }
        getMap: {
                (): RecOrdMap<TSource>,
        }
}
export interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {
        readonly key: TKey
}


//====================impl=======================

export class Enumerable {

        public static aggregate<TSource>(
                source: Iterable<TSource>,
                func: (x: TSource, y: TSource) => TSource): TSource
        public static aggregate<TSource, TAccumulate>(
                source: Iterable<TSource>,
                seed: TAccumulate,
                func: (x: TAccumulate, y: TSource) => TAccumulate): TAccumulate
        public static aggregate<TSource, TAccumulate, TResult>(
                source: Iterable<TSource>,
                seed: TAccumulate,
                func: (x: TAccumulate, y: TSource) => TAccumulate,
                resultSelector: (x: TAccumulate) => TResult): TResult
        public static aggregate<TSource, TAccumulate, TResult>(
                source: Iterable<TSource>,
                seedOrFunc: ((x: TSource, y: TSource) => TSource) | TAccumulate,
                func?: (x: TAccumulate, y: TSource) => TAccumulate,
                resultSelector?: (x: TAccumulate) => TResult): TSource | TAccumulate | TResult | null {
                if (resultSelector) {
                        if (!func) {
                                throw new ReferenceError(`TAccumulate function is undefined`)
                        }

                        return Enumerable.aggregate_3(source, seedOrFunc as TAccumulate, func, resultSelector)
                } else if (func) {
                        return Enumerable.aggregate_2(source, seedOrFunc as TAccumulate, func)
                } else {
                        return Enumerable.aggregate_1(source, seedOrFunc as ((x: TSource, y: TSource) => TSource))
                }
        }

        private static aggregate_1<TSource>(
                source: Iterable<TSource>,
                func: (x: TSource, y: TSource) => TSource): TSource | null {
                let aggregateValue: TSource | undefined

                for (const value of source) {
                        if (aggregateValue) {
                                aggregateValue = func(aggregateValue, value)
                        } else {
                                aggregateValue = value
                        }
                }

                if (aggregateValue === undefined) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return aggregateValue
        }

        private static aggregate_2<TSource, TAccumulate>(
                source: Iterable<TSource>,
                seed: TAccumulate,
                func: (x: TAccumulate, y: TSource) => TAccumulate): TAccumulate {
                let aggregateValue = seed

                for (const value of source) {
                        aggregateValue = func(aggregateValue, value)
                }

                return aggregateValue
        }

        private static aggregate_3<TSource, TAccumulate, TResult>(
                source: Iterable<TSource>,
                seed: TAccumulate,
                func: (x: TAccumulate, y: TSource) => TAccumulate,
                resultSelector: (x: TAccumulate) => TResult): TResult {
                let aggregateValue = seed

                for (const value of source) {
                        aggregateValue = func(aggregateValue, value)
                }

                return resultSelector(aggregateValue)
        }

        public static all<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): boolean {
                for (const item of source) {
                        if (predicate(item) === false) {
                                return false
                        }
                }

                return true
        }

        public static any<TSource>(
                source: Iterable<TSource>,
                predicate?: (x: TSource) => boolean): boolean {
                if (predicate) {
                        return Enumerable.any_2(source, predicate)
                } else {
                        return Enumerable.any_1(source)
                }
        }

        private static any_1<TSource>(source: Iterable<TSource>): boolean {
                for (const _ of source) {
                        return true
                }

                return false
        }

        private static any_2<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): boolean {
                for (const item of source) {
                        if (predicate(item) === true) {
                                return true
                        }
                }

                return false
        }

        public static average(source: Iterable<number>): number
        public static average<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number
        public static average<TSource>(
                source: Iterable<TSource> | Iterable<number>,
                selector?: (x: TSource) => number): number {
                if (selector) {
                        return Enumerable.average_2(source as Iterable<TSource>, selector)
                } else {
                        return Enumerable.average_1(source as Iterable<number>)
                }
        }

        private static average_1(source: Iterable<number>): number {
                let value: number | undefined
                let count: number | undefined
                for (const item of source) {
                        value = (value || 0) + item
                        count = (count || 0) + 1
                }

                if (value === undefined) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return value / (count as number)
        }

        private static average_2<TSource>(source: Iterable<TSource>, func: (x: TSource) => number): number {
                let value: number | undefined
                let count: number | undefined
                for (const item of source) {
                        value = (value || 0) + func(item)
                        count = (count || 0) + 1
                }

                if (value === undefined) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return value / (count as number)
        }

        public static concat<TSource>(first: Iterable<TSource>, second: IEnumerable<TSource>): IEnumerable<TSource> {
                function* iterator() {
                        yield* first
                        yield* second
                }

                return new BasicEnumerable(iterator)
        }

        public static contains<TSource>(
                source: Iterable<TSource>,
                value: TSource,
                comparer: IEqualityComparer<TSource> = StrictEqualityComparer): boolean {

                for (const item of source) {
                        if (comparer(value, item)) {
                                return true
                        }
                }

                return false
        }

        public static count<TSource>(source: Iterable<TSource>): number
        public static count<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): number
        public static count<TSource>(source: Iterable<TSource>, predicate?: (x: TSource) => boolean): number {
                if (predicate) {
                        return Enumerable.count_2(source, predicate)
                } else {
                        return Enumerable.count_1(source)
                }
        }

        private static count_1<T>(source: Iterable<T>): number {
                let count = 0

                for (const _ of source) {
                        count++
                }

                return count
        }

        private static count_2<T>(source: Iterable<T>, predicate: (x: T) => boolean): number {
                let count = 0
                for (const value of source) {
                        if (predicate(value) === true) {
                                count++
                        }
                }
                return count
        }

        public static distinct<TSource>(
                source: Iterable<TSource>,
                comparer: IEqualityComparer<TSource> = StrictEqualityComparer): IEnumerable<TSource> {

                function* iterator() {
                        const distinctElements: TSource[] = []
                        for (const item of source) {

                                const foundItem = distinctElements.find((x) => comparer(x, item))

                                if (!foundItem) {
                                        distinctElements.push(item)
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static each<TSource>(source: Iterable<TSource>, action: (x: TSource) => void): IEnumerable<TSource> {
                function* generator() {
                        for (const value of source) {
                                action(value)
                                yield value
                        }
                }

                return new BasicEnumerable(generator)
        }

        public static elementAt<TSource>(source: Iterable<TSource>, index: number): TSource {
                let i = 0
                for (const item of source) {
                        if (index === i++) {
                                return item
                        }
                }

                throw new ArgumentOutOfRangeException("index")
        }

        public static elementAtOrDefault<TSource>(source: Iterable<TSource>, index: number): TSource | null {
                let i = 0
                for (const item of source) {
                        if (index === i++) {
                                return item
                        }
                }

                return null
        }

        public static enumerateObject<TInput>(source: TInput): IEnumerable<ITuple<keyof TInput, TInput[keyof TInput]>> {
                function* iterable() {
                        // tslint:disable-next-line:forin
                        for (const key in source) {
                                yield {
                                        first: key,
                                        second: source[key],
                                }
                        }
                }

                return new BasicEnumerable(iterable)
        }

        public static except<TSource>(
                first: Iterable<TSource>,
                second: Iterable<TSource>,
                comparer: IEqualityComparer<TSource> = EqualityComparer): IEnumerable<TSource> {

                function* iterator() {
                        const secondArray = [...second]

                        for (const firstItem of first) {

                                let exists = false
                                for (let j = 0; j < secondArray.length; j++) {
                                        const secondItem = secondArray[j]

                                        if (comparer(firstItem, secondItem) === true) {
                                                exists = true
                                                break
                                        }
                                }

                                if (exists === false) {
                                        yield firstItem
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static first<TSource>(source: Iterable<TSource>): TSource
        public static first<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): TSource
        public static first<TSource>(source: Iterable<TSource>, predicate?: (x: TSource) => boolean): TSource {
                if (predicate) {
                        return Enumerable.first_2(source, predicate)
                } else {
                        return Enumerable.first_1(source)
                }
        }

        private static first_1<T>(source: Iterable<T>) {
                const first = source[Symbol.iterator]().next()

                if (first.done === true) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return first.value
        }

        private static first_2<T>(source: Iterable<T>, predicate: (x: T) => boolean): T {
                for (const value of source) {
                        if (predicate(value) === true) {
                                return value
                        }
                }

                throw new InvalidOperationException(ErrorString.NoMatch)
        }

        public static firstOrDefault<T>(source: Iterable<T>): T | null
        public static firstOrDefault<T>(source: Iterable<T>, predicate: (x: T) => boolean): T | null
        public static firstOrDefault<T>(source: Iterable<T>, predicate?: (x: T) => boolean): T | null {
                if (predicate) {
                        return Enumerable.firstOrDefault_2(source, predicate)
                } else {
                        return Enumerable.firstOrDefault_1(source)
                }
        }

        private static firstOrDefault_1<T>(source: Iterable<T>): T | null {
                const first = source[Symbol.iterator]().next()
                return first.value || null
        }

        private static firstOrDefault_2<T>(source: Iterable<T>, predicate: (x: T) => boolean): T | null {
                for (const value of source) {
                        if (predicate(value) === true) {
                                return value
                        }
                }

                return null
        }

        public static flatten<TSource>(source: Iterable<TSource | Iterable<TSource>>): IEnumerable<TSource>
        public static flatten<TSource>(
                source: Iterable<TSource | Iterable<TSource>>, shallow: false): IEnumerable<TSource>
        public static flatten<TSource>(
                source: Iterable<TSource | Iterable<TSource>>, shallow: true): IEnumerable<TSource | Iterable<TSource>>
        public static flatten<TSource>(
                source: Iterable<TSource | Iterable<TSource>>, shallow?: boolean): IEnumerable<TSource | Iterable<TSource>> {

                // tslint:disable-next-line:no-shadowed-variable
                function* iterator(source: Iterable<any>): IterableIterator<TSource | Iterable<TSource>> {
                        for (const item of source) {
                                // JS string is an Iterable.
                                // We exclude it from being flattened
                                if (item[Symbol.iterator] !== undefined && typeof item !== "string") {
                                        yield* shallow ? item : iterator(item)
                                } else {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable(() => iterator(source))
        }

        /**
         * Creates an IEnumerable from an array
         * @param source Array of Elements
         */
        public static from<TSource>(source: TSource[]): IEnumerable<TSource>
        /**
         * Creates an IEnumerable from an iteration of elements
         * @param source Iteration of Elements
         */
        public static from<TSource>(source: IterableIterator<TSource>): IEnumerable<TSource>
        public static from<TSource>(source: TSource[] | IterableIterator<TSource>): IEnumerable<TSource> {
                if (Array.isArray(source)) {
                        return new BasicEnumerable(() => toiterator(source))
                } else {
                        return new BasicEnumerable(() => source)
                }
        }

        public static groupBy<TSource>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => number): IEnumerable<IGrouping<number, TSource>>
        public static groupBy<TSource>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => string): IEnumerable<IGrouping<string, TSource>>
        public static groupBy<TSource, TKey>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TSource>>
        public static groupBy<TSource, TKey>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => TKey) | ((x: TSource) => number) | ((x: TSource) => string),
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<any, TSource>> {

                if (comparer) {
                        return Enumerable.groupBy_0<TSource, TKey>(source,
                                keySelector as (x: TSource) => TKey, comparer)
                } else {
                        return Enumerable.groupBy_0_Simple(source,
                                keySelector as ((x: TSource) => number) | ((x: TSource) => string))
                }
        }

        private static groupBy_0_Simple<TSource>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => string) | ((x: TSource) => number)):
                IEnumerable<IGrouping<string | number, TSource>> {

                function* iterator(): IterableIterator<IGrouping<string | number, TSource>> {
                        const keyMap: { [key: string]: Grouping<string | number, TSource> } = {}
                        for (const value of source) {

                                const key = keySelector(value)
                                const grouping: Grouping<string | number, TSource> = keyMap[key]

                                if (grouping) {
                                        grouping.push(value)
                                } else {
                                        keyMap[key] = new Grouping<string | number, TSource>(key, value)
                                }
                        }

                        // tslint:disable-next-line:forin
                        for (const value in keyMap) {
                                yield keyMap[value]
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static groupBy_0<TSource, TKey>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TSource>> {

                function* generate(): IterableIterator<IGrouping<TKey, TSource>> {

                        const keyMap = new Array<Grouping<TKey, TSource>>()

                        for (const value of source) {
                                const key = keySelector(value)
                                let found = false

                                for (let i = 0; i < keyMap.length; i++) {
                                        const group = keyMap[i]
                                        if (comparer(group.key, key)) {
                                                group.push(value)
                                                found = true
                                                break
                                        }
                                }

                                if (found === false) {
                                        keyMap.push(new Grouping<TKey, TSource>(key, value))
                                }

                        }

                        for (const keyValue of keyMap) {
                                yield keyValue
                        }
                }

                return new BasicEnumerable(generate)
        }

        public static groupByWithSel<TSource, TElement>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => number),
                elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<number, TElement>>
        public static groupByWithSel<TSource, TElement>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => string),
                elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<string, TElement>>
        public static groupByWithSel<TSource, TKey, TElement>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => TKey),
                elementSelector: (x: TSource) => TElement,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>
        public static groupByWithSel<TSource, TKey, TElement>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => TKey) | ((x: TSource) => number) | ((x: TSource) => string),
                elementSelector: (x: TSource) => TElement,
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<any, TElement>> {

                if (comparer) {
                        return Enumerable.groupBy_1(source,
                                keySelector as (x: TSource) => TKey, elementSelector, comparer)
                } else {
                        return Enumerable.groupBy_1_Simple(source,
                                keySelector as (x: TSource) => number | string, elementSelector)
                }
        }

        private static groupBy_1_Simple<TSource, TElement>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => string | number,
                elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<string | number, TElement>> {

                function* generate(): IterableIterator<IGrouping<string | number, TElement>> {
                        const keyMap: { [key: string]: Grouping<string | number, TElement> } = {}
                        for (const value of source) {

                                const key = keySelector(value)
                                const grouping: Grouping<string | number, TElement> = keyMap[key]
                                const element = elementSelector(value)

                                if (grouping) {
                                        grouping.push(element)
                                } else {
                                        keyMap[key] = new Grouping<string | number, TElement>(key, element)
                                }
                        }

                        /* tslint:disable:forin */
                        for (const value in keyMap) {
                                yield keyMap[value]
                        }
                        /* tslint:enable */
                }

                return new BasicEnumerable(generate)
        }

        private static groupBy_1<TSource, TKey, TElement>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                elementSelector: (x: TSource) => TElement,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>> {

                function* generate(): IterableIterator<IGrouping<TKey, TElement>> {
                        const keyMap = new Array<Grouping<TKey, TElement>>()
                        for (const value of source) {
                                const key = keySelector(value)
                                let found = false

                                for (let i = 0; i < keyMap.length; i++) {
                                        const group = keyMap[i]
                                        if (comparer(group.key, key)) {
                                                group.push(elementSelector(value))
                                                found = true
                                                break
                                        }
                                }

                                if (found === false) {
                                        const element = elementSelector(value)
                                        keyMap.push(new Grouping<TKey, TElement>(key, element))
                                }

                        }

                        for (const keyValue of keyMap) {
                                yield keyValue
                        }
                }

                return new BasicEnumerable(generate)
        }

        public static groupByWithResult<TSource, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => string,
                resultSelector: (x: string, values: IEnumerable<TSource>) => TResult): IEnumerable<TResult>
        public static groupByWithResult<TSource, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => string,
                resultSelector: (x: string, values: IEnumerable<TSource>) => TResult,
                comparer: IEqualityComparer<string>): IEnumerable<TResult>

        public static groupByWithResult<TSource, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => number,
                resultSelector: (x: number, values: IEnumerable<TSource>) => TResult): IEnumerable<TResult>
        public static groupByWithResult<TSource, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => number,
                resultSelector: (x: number, values: IEnumerable<TSource>) => TResult,
                comparer: IEqualityComparer<number>): IEnumerable<TResult>

        public static groupByWithResult<TSource, TKey, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                resultSelector: (x: TKey, values: IEnumerable<TSource>) => TResult): IEnumerable<TResult>
        public static groupByWithResult<TSource, TKey, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => number,
                resultSelector: (x: TKey, values: IEnumerable<TSource>) => TResult,
                comparer: IEqualityComparer<TKey>): IEnumerable<TResult>

        public static groupByWithResult<TSource, TKey, TResult>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => TKey) | ((x: TSource) => string) | ((x: TSource) => number),
                resultSelector: (x: string | number | TKey, values: IEnumerable<TSource>) => TResult,
                comparer?: IEqualityComparer<TKey>): IEnumerable<TResult> {

                if (comparer) {
                        return Enumerable.groupBy_2(source,
                                keySelector as (x: TSource) => TKey,
                                resultSelector,
                                comparer)
                } else {
                        return Enumerable.groupBy_2_Simple(source,
                                keySelector as ((x: TSource) => string) | ((x: TSource) => number),
                                resultSelector)
                }
        }

        private static groupBy_2_Simple<TSource, TResult>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => string) | ((x: TSource) => number),
                resultSelector: (x: string | number, values: IEnumerable<TSource>) => TResult): IEnumerable<TResult> {

                function* iterator(): IterableIterator<TResult> {
                        const groupByResult = Enumerable.groupBy_0_Simple(source, keySelector)

                        for (const group of groupByResult) {
                                yield resultSelector(group.key, group)
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static groupBy_2<TSource, TKey, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                resultSelector: (x: TKey, values: IEnumerable<TSource>) => TResult,
                comparer: IEqualityComparer<TKey> = StrictEqualityComparer): IEnumerable<TResult> {

                function* iterator(): IterableIterator<TResult> {
                        const groupByResult = Enumerable.groupBy_0(source, keySelector, comparer)

                        for (const group of groupByResult) {
                                yield resultSelector(group.key, group)
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static GroupByWithResultAndSelector<TSource, TKey, TElement, TResult>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => TKey) | ((x: TSource) => string) | ((x: TSource) => number),
                elementSelector: (x: TSource) => TElement,
                resultSelector: ((key: TKey, values: IEnumerable<TElement>) => TResult) |
                        ((key: string | number, values: IEnumerable<TElement>) => TResult),
                comparer?: IEqualityComparer<TKey>): IEnumerable<TResult> {
                if (comparer) {
                        return Enumerable.groupBy_3(source,
                                keySelector as (x: TSource) => TKey,
                                elementSelector,
                                resultSelector as (key: TKey, values: IEnumerable<TElement>) => TResult)
                } else {
                        return Enumerable.groupBy_3_Simple(source,
                                keySelector as ((x: TSource) => string) | ((x: TSource) => number),
                                elementSelector,
                                resultSelector as (key: string | number, values: IEnumerable<TElement>) => TResult)
                }
        }

        private static groupBy_3<TSource, TKey, TElement, TResult>(
                source: Iterable<TSource>,
                keySelector: (x: TSource) => TKey,
                elementSelector: (x: TSource) => TElement,
                resultSelector: (key: TKey, values: IEnumerable<TElement>) => TResult,
                comparer: IEqualityComparer<TKey> = StrictEqualityComparer): IEnumerable<TResult> {

                function* iterator(): IterableIterator<TResult> {
                        const groupByResult = Enumerable.groupBy_1(source, keySelector, elementSelector, comparer)

                        for (const group of groupByResult) {
                                yield resultSelector(group.key, group)
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static groupBy_3_Simple<TSource, TElement, TResult>(
                source: Iterable<TSource>,
                keySelector: ((x: TSource) => string) | ((x: TSource) => number),
                elementSelector: (x: TSource) => TElement,
                resultSelector: (key: string | number, values: IEnumerable<TElement>) => TResult): IEnumerable<TResult> {

                function* iterator(): IterableIterator<TResult> {
                        const groupByResult = Enumerable.groupBy_1_Simple(source, keySelector, elementSelector)

                        for (const group of groupByResult) {
                                yield resultSelector(group.key, group)
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static join<TOuter, TInner, TKey, TResult>(
                outer: Iterable<TOuter>,
                inner: Iterable<TInner>,
                outerKeySelector: (x: TOuter) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: TOuter, y: TInner) => TResult): IEnumerable<TResult>
        public static join<TOuter, TInner, TKey, TResult>(
                outer: Iterable<TOuter>,
                inner: Iterable<TInner>,
                outerKeySelector: (x: TOuter) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: TOuter, y: TInner) => TResult,
                comparer: IEqualityComparer<TKey>): IEnumerable<TResult>
        public static join<TOuter, TInner, TKey, TResult>(
                outer: Iterable<TOuter>,
                inner: Iterable<TInner>,
                outerKeySelector: (x: TOuter) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: TOuter, y: TInner) => TResult,
                comparer: IEqualityComparer<TKey> = StrictEqualityComparer): IEnumerable<TResult> {
                function* iterator(): IterableIterator<TResult> {
                        const innerArray = [...inner]
                        for (const o of outer) {
                                const outerKey = outerKeySelector(o)

                                for (const i of innerArray) {
                                        const innerKey = innerKeySelector(i)
                                        if (comparer(outerKey, innerKey) === true) {
                                                yield resultSelector(o, i)
                                        }
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static intersect<TSource>(
                first: IEnumerable<TSource>,
                second: Iterable<TSource>,
                comparer: IEqualityComparer<TSource> = StrictEqualityComparer): IEnumerable<TSource> {

                function* iterator(): IterableIterator<TSource> {

                        const firstResults = [...first.distinct(comparer)]

                        if (firstResults.length === 0) {
                                return
                        }

                        const secondResults = [...second]

                        for (let i = 0; i < firstResults.length; i++) {
                                const firstValue = firstResults[i]

                                for (let j = 0; j < secondResults.length; j++) {
                                        const secondValue = secondResults[j]

                                        if (comparer(firstValue, secondValue) === true) {
                                                yield firstValue
                                                break
                                        }
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static partition<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): TSource[][] {
                const fail: TSource[] = []
                const pass: TSource[] = []

                for (const value of source) {
                        if (predicate(value) === true) {
                                pass.push(value)
                        } else {
                                fail.push(value)
                        }
                }

                return [fail, pass]
        }

        public static select<TSource, TResult>(
                source: Iterable<TSource>, selector: (x: TSource) => TResult): IEnumerable<TResult>
        public static select<TSource, TKey extends keyof TSource>(
                source: Iterable<TSource>, key: TKey): IEnumerable<TSource[TKey]>
        public static select<TSource, TKey extends keyof TSource, TResult>(
                source: Iterable<TSource>,
                selector: ((x: TSource) => TResult) | TKey): IEnumerable<TSource[TKey]> | IEnumerable<TResult> {

                if (typeof selector === "string") {
                        return Enumerable.select_2(source, selector)
                } else {
                        return Enumerable.select_1(source, selector)
                }
        }

        private static select_1<TSource, TResult>(
                source: Iterable<TSource>, selector: (x: TSource) => TResult): IEnumerable<TResult> {
                function* iterator() {
                        for (const value of source) {
                                yield selector(value)
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static select_2<TSource, TKey extends keyof TSource>(
                source: Iterable<TSource>, key: TKey): IEnumerable<TSource[TKey]> {
                function* iterator() {
                        for (const value of source) {
                                yield value[key]
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static selectMany<TSource, TResult>(
                source: Iterable<TSource>,
                selector: (x: TSource) => Iterable<TResult>): IEnumerable<TResult>
        public static selectMany<
                TSource extends { [key: string]: Iterable<TResult> }, TResult>(
                        source: Iterable<TSource>,
                        selector: keyof TSource): IEnumerable<TResult>
        public static selectMany<TSource extends { [key: string]: Iterable<TResult> }, TResult>(
                source: Iterable<TSource>,
                selector: ((x: TSource) => Iterable<TResult>) | keyof TSource) {
                if (typeof selector === "string") {
                        return Enumerable.selectMany_2(source, selector)
                } else {
                        return Enumerable.selectMany_1(source, selector as (x: TSource) => Iterable<TResult>)
                }
        }

        private static selectMany_1<TSource, TResult>(
                source: Iterable<TSource>,
                selector: (x: TSource) => Iterable<TResult>): IEnumerable<TResult> {
                function* iterator() {
                        for (const value of source) {
                                for (const selectorValue of selector(value)) {
                                        yield selectorValue
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static selectMany_2<TSource extends { [key: string]: Iterable<TResult> }, TResult>(
                source: Iterable<TSource>, selector: keyof TSource) {
                function* iterator() {
                        for (const value of source) {
                                for (const selectorValue of value[selector]) {
                                        yield selectorValue
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static single<TSource>(source: Iterable<TSource>, predicate?: (x: TSource) => boolean): TSource {
                if (predicate) {
                        return Enumerable.single_2(source, predicate)
                } else {
                        return Enumerable.single_1(source)
                }
        }

        private static single_1<TSource>(source: Iterable<TSource>): TSource {
                let hasValue = false
                let singleValue: TSource | null = null

                for (const value of source) {
                        if (hasValue === true) {
                                throw new InvalidOperationException(ErrorString.MoreThanOneElement)
                        } else {
                                hasValue = true
                                singleValue = value
                        }
                }

                if (hasValue === false) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return singleValue as TSource
        }

        private static single_2<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): TSource {
                let hasValue = false
                let singleValue: TSource | null = null

                for (const value of source) {
                        if (predicate(value)) {
                                if (hasValue === true) {
                                        throw new InvalidOperationException(ErrorString.MoreThanOneElement)
                                } else {
                                        hasValue = true
                                        singleValue = value
                                }
                        }
                }

                if (hasValue === false) {
                        throw new InvalidOperationException(ErrorString.NoMatch)
                }

                return singleValue as TSource
        }

        public static singleOrDefault<TSource>(
                source: Iterable<TSource>,
                predicate?: (x: TSource) => boolean): TSource | null {

                if (predicate) {
                        return Enumerable.singleOrDefault_2(source, predicate)
                } else {
                        return Enumerable.singleOrDefault_1(source)
                }
        }

        private static singleOrDefault_1<TSource>(source: Iterable<TSource>): TSource | null {
                let hasValue = false
                let singleValue: TSource | null = null

                for (const value of source) {
                        if (hasValue === true) {
                                throw new InvalidOperationException(ErrorString.MoreThanOneElement)
                        } else {
                                hasValue = true
                                singleValue = value
                        }
                }

                return singleValue
        }

        private static singleOrDefault_2<TSource>(
                source: Iterable<TSource>,
                predicate: (x: TSource) => boolean): TSource | null {

                let hasValue = false
                let singleValue: TSource | null = null

                for (const value of source) {
                        if (predicate(value)) {
                                if (hasValue === true) {
                                        throw new InvalidOperationException(ErrorString.MoreThanOneElement)
                                } else {
                                        hasValue = true
                                        singleValue = value
                                }
                        }
                }

                return singleValue
        }

        public static skipWhile<TSource>(
                source: Iterable<TSource>,
                predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource> {

                if (predicate.length === 1) {
                        return Enumerable.skipWhile_1(source, predicate as (x: TSource) => boolean)
                } else {
                        return Enumerable.skipWhile_2(source, predicate)
                }
        }

        private static skipWhile_1<TSource>(
                source: Iterable<TSource>,
                predicate: (x: TSource) => boolean): IEnumerable<TSource> {

                function* iterator() {
                        let skip = true
                        for (const item of source) {

                                if (skip === false) {
                                        yield item
                                } else if (predicate(item) === false) {
                                        skip = false
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static skipWhile_2<TSource>(
                source: Iterable<TSource>,
                predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource> {

                function* iterator() {
                        let index = 0
                        let skip = true
                        for (const item of source) {

                                if (skip === false) {
                                        yield item
                                } else if (predicate(item, index) === false) {
                                        skip = false
                                        yield item
                                }

                                index++
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static skip<TSource>(source: Iterable<TSource>, count: number): IEnumerable<TSource> {

                function* iterator() {
                        let i = 0
                        for (const item of source) {
                                if (i++ >= count) {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable<TSource>(iterator)
        }

        public static empty<TSource>(): IEnumerable<TSource> {
                const iterator = function* () {
                        for (const x of [] as TSource[]) {
                                yield x
                        }
                }
                return new BasicEnumerable(iterator)
        }

        public static last<TSource>(source: Iterable<TSource>, predicate?: (x: TSource) => boolean): TSource {
                if (predicate) {
                        return Enumerable.last_2(source, predicate)
                } else {
                        return Enumerable.last_1(source)
                }
        }

        private static last_1<TSource>(source: Iterable<TSource>): TSource {
                let last: TSource | undefined

                for (const value of source) {
                        last = value
                }

                if (!last) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                return last
        }

        private static last_2<TSource>(source: Iterable<TSource>, predicate: (x: TSource) => boolean): TSource {
                let last: TSource | undefined

                for (const value of source) {
                        if (predicate(value) === true) {
                                last = value
                        }
                }

                if (!last) {
                        throw new InvalidOperationException(ErrorString.NoMatch)
                }

                return last
        }

        public static lastOrDefault<TSource>(
                source: Iterable<TSource>,
                predicate?: (x: TSource) => boolean): TSource | null {

                if (predicate) {
                        return Enumerable.lastOrDefault_2(source, predicate)
                } else {
                        return Enumerable.lastOrDefault_1(source)
                }
        }

        private static lastOrDefault_1<TSource>(source: Iterable<TSource>): TSource | null {
                let last: TSource | null = null

                for (const value of source) {
                        last = value
                }

                return last
        }

        private static lastOrDefault_2<TSource>(
                source: Iterable<TSource>,
                predicate: (x: TSource) => boolean): TSource | null {

                let last: TSource | null = null

                for (const value of source) {
                        if (predicate(value) === true) {
                                last = value
                        }
                }

                return last
        }

        public static max(source: Iterable<number>): number
        public static max<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number
        public static max<TSource>(
                source: Iterable<TSource> | Iterable<number>,
                selector?: (x: TSource) => number): number {
                if (selector) {
                        return Enumerable.max_2<TSource>(source as Iterable<TSource>, selector)
                } else {
                        return Enumerable.max_1(source as Iterable<number>)
                }
        }

        private static max_1(source: Iterable<number>): number {
                let max: number | null = null
                for (const item of source) {
                        max = Math.max(max || Number.NEGATIVE_INFINITY, item)
                }

                if (max === null) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                } else {
                        return max
                }
        }

        private static max_2<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number {
                let max: number | null = null
                for (const item of source) {
                        max = Math.max(max || Number.NEGATIVE_INFINITY, selector(item))
                }

                if (max === null) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                } else {
                        return max
                }
        }

        public static min(source: Iterable<number>): number
        public static min<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number
        public static min<TSource>(source: Iterable<TSource> | Iterable<number>,
                selector?: (x: TSource) => number): number {
                if (selector) {
                        return Enumerable.min_2(source as Iterable<TSource>, selector)
                } else {
                        return Enumerable.min_1(source as Iterable<number>)
                }
        }

        private static min_1(source: Iterable<number>) {
                let min: number | null = null
                for (const item of source) {
                        min = Math.min(min || Number.POSITIVE_INFINITY, item)
                }

                if (min === null) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                } else {
                        return min
                }
        }

        private static min_2<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number) {
                let min: number | null = null
                for (const item of source) {
                        min = Math.min(min || Number.POSITIVE_INFINITY, selector(item))
                }

                if (min === null) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                } else {
                        return min
                }
        }

        public static ofType<TSource, TResult>(
                source: Iterable<TSource>,
                type: IConstructor<TResult> | string): IEnumerable<TResult> {

                const typeCheck = typeof type === "string" ?
                        ((x) => typeof x === type) as (x: any) => x is TResult :
                        ((x) => x instanceof type) as (x: any) => x is TResult

                function* iterator(): IterableIterator<TResult> {
                        for (const item of source) {
                                if (typeCheck(item)) {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static orderByInner<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number | string): () => Map<number | string, TSource[]> {
                return function lazyMap(): Map<number | string, TSource[]> {
                        const map = new Map<number | string, TSource[]>()
                        for (const item of source) {
                                const key = keySelector(item)
                                const currentMapping = map.get(key)

                                if (currentMapping) {
                                        currentMapping.push(item)
                                } else {
                                        map.set(key, [item])
                                }
                        }

                        return map
                }
        }

        public static orderBy<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => string): IOrderedEnumerable<TSource>
        public static orderBy<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => string,
                comparer: IComparer<string>): IOrderedEnumerable<TSource>
        public static orderBy<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number): IOrderedEnumerable<TSource>
        public static orderBy<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number,
                comparer: IComparer<number>): IOrderedEnumerable<TSource>
        public static orderBy<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number | string,
                comparer?: IComparer<number> | IComparer<string>): IOrderedEnumerable<TSource> {
                return new OrderedEnumerable(Enumerable.orderByInner(source, keySelector), comparer as any)
        }

        public static orderByDescending<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => string): IOrderedEnumerable<TSource>
        public static orderByDescending<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => string,
                comparer: IComparer<string>): IOrderedEnumerable<TSource>
        public static orderByDescending<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number): IOrderedEnumerable<TSource>
        public static orderByDescending<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number,
                comparer: IComparer<number>): IOrderedEnumerable<TSource>
        public static orderByDescending<TSource>(
                source: IEnumerable<TSource>,
                keySelector: (x: TSource) => number | string,
                comparer?: IComparer<number> | IComparer<string>): IOrderedEnumerable<TSource> {
                return new OrderedEnumerableDescending(Enumerable.orderByInner(source, keySelector), comparer as any)
        }

        public static range(start: number, count: number): IEnumerable<number> {
                function* iterator() {
                        const max = start + count
                        for (let i = start; i < max; i++) {
                                yield i
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static repeat<T>(element: T, count: number): IEnumerable<T> {
                function* iterator() {
                        for (let i = 0; i < count; i++) {
                                yield element
                        }
                }

                return new BasicEnumerable(iterator)
        }

        /**
         * Reverses an Iterable
         * @param source Iterable
         */
        public static reverse<TSource>(source: Iterable<TSource>): IEnumerable<TSource> {
                function* iterator() {
                        for (const x of [...source].reverse()) {
                                yield x
                        }
                }

                return new BasicEnumerable(iterator)
        }

        /**
         * Determines whether or not two sequences are equal
         * @param first first iterable
         * @param second second iterable
         * @param comparer Compare function to use, by default is @see {StrictEqualityComparer}
         */
        public static sequenceEquals<TSource>(
                first: Iterable<TSource>,
                second: Iterable<TSource>,
                comparer: IEqualityComparer<TSource> = StrictEqualityComparer): boolean {

                const firstIterator = first[Symbol.iterator]()
                const secondIterator = second[Symbol.iterator]()

                let firstResult = firstIterator.next()
                let secondResult = secondIterator.next()

                while (!firstResult.done && !secondResult.done) {
                        if (!comparer(firstResult.value, secondResult.value)) {
                                return false
                        }

                        firstResult = firstIterator.next()
                        secondResult = secondIterator.next()
                }

                return firstResult.done && secondResult.done
        }

        public static sum(source: Iterable<number>): number
        public static sum<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number
        public static sum<TSource>(
                source: Iterable<number> | Iterable<TSource>,
                selector?: (x: TSource) => number): number {

                if (selector) {
                        return Enumerable.sum_2(source as Iterable<TSource>, selector)
                } else {
                        return Enumerable.sum_1(source as Iterable<number>)
                }
        }

        private static sum_1(source: Iterable<number>): number {
                let sum = 0
                for (const value of source) {
                        sum += value
                }

                return sum
        }

        private static sum_2<TSource>(source: Iterable<TSource>, selector: (x: TSource) => number): number {
                let sum = 0
                for (const value of source) {
                        sum += selector(value)
                }

                return sum
        }

        public static take<T>(source: Iterable<T>, amount: number): IEnumerable<T> {

                function* iterator() {
                        // negative amounts should yield empty
                        let amountLeft = amount > 0 ? amount : 0
                        for (const item of source) {
                                if (amountLeft-- === 0) {
                                        break
                                } else {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable<T>(iterator)
        }

        public static takeWhile<T>(
                source: Iterable<T>,
                predicate: (x: T, index: number) => boolean): IEnumerable<T> {

                if (predicate.length === 1) {
                        return Enumerable.takeWhile_1(source, predicate as (x: T) => boolean)
                } else {
                        return Enumerable.takeWhile_2(source, predicate as (x: T, index: number) => boolean)
                }
        }

        private static takeWhile_1<T>(source: Iterable<T>, predicate: (x: T) => boolean): IEnumerable<T> {
                function* iterator() {
                        for (const item of source) {
                                if (predicate(item)) {
                                        yield item
                                } else {
                                        break
                                }
                        }
                }

                return new BasicEnumerable<T>(iterator)
        }

        private static takeWhile_2<T>(source: Iterable<T>, predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                function* iterator() {
                        let index = 0
                        for (const item of source) {
                                if (predicate(item, index++)) {
                                        yield item
                                } else {
                                        break
                                }
                        }
                }

                return new BasicEnumerable<T>(iterator)
        }

        public static thenBy<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => string): IOrderedEnumerable<TSource>
        public static thenBy<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => string,
                comparer: IComparer<string>): IOrderedEnumerable<TSource>
        public static thenBy<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => number): IOrderedEnumerable<TSource>
        public static thenBy<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => number,
                comparer: IComparer<number>): IOrderedEnumerable<TSource>
        public static thenBy<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: ((x: TSource) => number) | ((x: TSource) => string),
                comparer?: IComparer<number> | IComparer<string>): IOrderedEnumerable<TSource> {

                function sortInnerMost(item: TSource[] | RecOrdMap<TSource>): RecOrdMap<TSource> {

                        if (item instanceof Map) {
                                for (const key of item.keys()) {
                                        item.set(key, sortInnerMost(item.get(key) as TSource[] | RecOrdMap<TSource>))
                                }

                                return item
                        } else {
                                const map = new Map<number | string, TSource[]>()
                                for (let i = 0; i < item.length; i++) {
                                        const value = item[i]
                                        const key = keySelector(value)

                                        const mapping = map.get(key)
                                        if (mapping) {
                                                mapping.push(value)
                                        } else {
                                                map.set(key, [value])
                                        }
                                }

                                return map
                        }
                }

                return new OrderedEnumerable(() => sortInnerMost(source.getMap()), comparer as any)
        }

        public static thenByDescending<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => string): IOrderedEnumerable<TSource>
        public static thenByDescending<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => string,
                comparer: IComparer<string>): IOrderedEnumerable<TSource>
        public static thenByDescending<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => number): IOrderedEnumerable<TSource>
        public static thenByDescending<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: (x: TSource) => number,
                comparer: IComparer<number>): IOrderedEnumerable<TSource>
        public static thenByDescending<TSource>(
                source: IOrderedEnumerable<TSource>,
                keySelector: ((x: TSource) => number) | ((x: TSource) => string),
                comparer?: IComparer<number> | IComparer<string>): IOrderedEnumerable<TSource> {

                function sortInnerMost(item: TSource[] | RecOrdMap<TSource>): RecOrdMap<TSource> {

                        if (item instanceof Map) {
                                for (const key of item.keys()) {
                                        item.set(key, sortInnerMost(item.get(key) as TSource[] | RecOrdMap<TSource>))
                                }

                                return item
                        } else {
                                const map = new Map<number | string, TSource[]>()
                                for (let i = 0; i < item.length; i++) {
                                        const value = item[i]
                                        const key = keySelector(value)

                                        const mapping = map.get(key)
                                        if (mapping) {
                                                mapping.push(value)
                                        } else {
                                                map.set(key, [value])
                                        }
                                }

                                return map
                        }
                }

                return new OrderedEnumerableDescending(() => sortInnerMost(source.getMap()), comparer as any)
        }

        public static toArray<TSource>(source: Iterable<TSource>): TSource[] {
                return [...source]
        }

        public static toMap<K, V>(source: Iterable<V>, selector: (x: V) => K): Map<K, V[]> {
                const map = new Map<K, V[]>()

                for (const value of source) {
                        const key = selector(value)
                        const array = map.get(key)

                        if (array === undefined) {
                                map.set(key, [value])
                        } else {
                                array.push(value)
                        }
                }

                return map
        }

        public static toObject<TSource>(
                source: Iterable<TSource>,
                selector: (x: TSource) => string): { [key: string]: TSource } {

                const map: { [key: string]: TSource } = {}

                for (const value of source) {
                        map[selector(value)] = value
                }

                return map
        }

        public static toSet<TSource>(source: Iterable<TSource>): Set<TSource> {
                return new Set<TSource>(source)
        }

        public static union<TSource>(
                first: Iterable<TSource>,
                second: Iterable<TSource>,
                comparer?: IEqualityComparer<TSource>): IEnumerable<TSource> {
                if (comparer) {
                        return Enumerable.union_2(first, second, comparer)
                } else {
                        return Enumerable.union_1(first, second)
                }
        }

        private static union_1<TSource>(
                first: Iterable<TSource>,
                second: Iterable<TSource>) {

                function* iterator() {

                        const set = new Set<TSource>()

                        for (const item of first) {
                                if (set.has(item) === false) {
                                        yield item
                                        set.add(item)
                                }
                        }

                        for (const item of second) {
                                if (set.has(item) === false) {
                                        yield item
                                        set.add(item)
                                }
                        }
                }

                return new BasicEnumerable<TSource>(iterator)
        }

        private static union_2<TSource>(
                first: Iterable<TSource>,
                second: Iterable<TSource>,
                comparer: IEqualityComparer<TSource>) {

                function* iterator(): IterableIterator<TSource> {
                        const result: TSource[] = []

                        for (const source of [first, second]) {
                                for (const value of source) {
                                        let exists = false

                                        for (const resultValue of result) {
                                                if (comparer(value, resultValue) === true) {
                                                        exists = true
                                                        break
                                                }
                                        }

                                        if (exists === false) {
                                                yield value
                                                result.push(value)
                                        }
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        public static where<T>(
                source: Iterable<T>,
                predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                if (predicate.length === 1) {
                        return Enumerable.where_1(source, predicate as (x: T) => boolean)
                } else {
                        return Enumerable.where_2(source, predicate as (x: T, index: number) => boolean)
                }
        }

        private static where_1<T>(source: Iterable<T>, predicate: (x: T) => boolean): IEnumerable<T> {
                function* iterator() {
                        for (const item of source) {
                                if (predicate(item) === true) {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable<T>(iterator)
        }

        private static where_2<T>(source: Iterable<T>, predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                function* iterator() {
                        let i = 0
                        for (const item of source) {
                                if (predicate(item, i++) === true) {
                                        yield item
                                }
                        }
                }

                return new BasicEnumerable<T>(iterator)
        }

        public static zip<T, Y>(
                source: Iterable<T>,
                second: Iterable<Y>): IEnumerable<ITuple<T, Y>>
        public static zip<T, Y, OUT>(
                source: Iterable<T>,
                second: Iterable<Y>,
                resultSelector: (x: T, y: Y) => OUT): IEnumerable<OUT>
        public static zip<T, Y, OUT>(
                source: Iterable<T>,
                second: Iterable<Y>,
                resultSelector?: (x: T, y: Y) => OUT): IEnumerable<OUT> | IEnumerable<ITuple<T, Y>> {
                if (resultSelector) {
                        return Enumerable.zip_2(source, second, resultSelector)
                } else {
                        return Enumerable.zip_1(source, second)
                }
        }

        private static zip_1<T, Y>(source: Iterable<T>, second: Iterable<Y>): IEnumerable<ITuple<T, Y>> {
                function* iterator() {
                        const firstIterator = source[Symbol.iterator]()
                        const secondIterator = second[Symbol.iterator]()

                        while (true) {
                                const a = firstIterator.next()
                                const b = secondIterator.next()

                                if (a.done && b.done) {
                                        break
                                } else {
                                        yield AsTuple(a.value, b.value)
                                }
                        }
                }

                return new BasicEnumerable(iterator)
        }

        private static zip_2<T, Y, OUT>(
                source: Iterable<T>,
                second: Iterable<Y>,
                resultSelector: (x: T, y: Y) => OUT): IEnumerable<OUT> {

                return new BasicEnumerable(() => zipiterator(source, second, resultSelector))
        }

        private constructor() {
                /* */
        }
}

function* zipiterator(source: any, second: any, resultSelector: any) {
        const firstIterator = source[Symbol.iterator]()
        const secondIterator = second[Symbol.iterator]()

        while (true) {
                const a = firstIterator.next()
                const b = secondIterator.next()

                if (a.done && b.done) {
                        break
                } else {
                        yield resultSelector(a.value, b.value)
                }
        }
}

export abstract class BaseEnumerable<T> implements IEnumerable<T> {
        public aggregate(func: (x: T, y: T) => T): T
        public aggregate<TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: T) => TAccumulate): TAccumulate
        public aggregate<TAccumulate, TResult>(
                seed: TAccumulate,
                func: (x: TAccumulate, y: T) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): T
        public aggregate<TAccumulate, TResult>(
                seedOrFunc: ((x: T, y: T) => T) | TAccumulate,
                func?: (x: TAccumulate, y: T) => TAccumulate,
                resultSelector?: (x: TAccumulate) => TResult): T | TAccumulate | TResult {
                return Enumerable.aggregate(this, seedOrFunc, func as any, resultSelector as any)
        }

        public all(predicate: (x: T) => boolean): boolean {
                return Enumerable.all(this, predicate)
        }

        public any(predicate?: (x: T) => boolean): boolean {
                return Enumerable.any(this, predicate)
        }

        public average(this: IEnumerable<number>): number
        public average(selector: (x: T) => number): number
        public average(selector?: (x: T) => number): number {
                return Enumerable.average(this, selector as any)
        }

        public concat(second: IEnumerable<T>): IEnumerable<T> {
                return Enumerable.concat(this, second)
        }

        public contains(value: T): boolean
        public contains(value: T, comparer: IEqualityComparer<T>): boolean
        public contains(value: T, comparer?: IEqualityComparer<T>): boolean {
                return Enumerable.contains(this, value, comparer as any)
        }

        public count(predicate?: (x: T) => boolean): number {
                return Enumerable.count(this, predicate as any)
        }

        public distinct(comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.distinct(this, comparer)
        }

        public elementAt(index: number): T {
                return Enumerable.elementAt(this, index)
        }

        public elementAtOrDefault(index: number): T | null {
                return Enumerable.elementAtOrDefault(this, index)
        }

        public except(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.except(this, second, comparer as any)
        }

        public first(predicate?: (x: T) => boolean): T {
                return Enumerable.first(this, predicate as any)
        }

        public firstOrDefault(predicate?: (x: T) => boolean): T | null {
                return Enumerable.firstOrDefault(this, predicate as any)
        }

        public each(action: (x: T) => void): IEnumerable<T> {
                return Enumerable.each(this, action)
        }

        public groupBy(keySelector: (x: T) => number): IEnumerable<IGrouping<number, T>>
        public groupBy(keySelector: (x: T) => string): IEnumerable<IGrouping<string, T>>
        public groupBy<TKey>(
                keySelector: (x: T) => TKey,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>
        public groupBy<TKey>(
                keySelector: (x: T) => TKey,
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>> {
                return Enumerable.groupBy(this, keySelector, comparer as any)
        }

        public groupByWithSel<TElement>(
                keySelector: ((x: T) => number),
                elementSelector: (x: T) => TElement): IEnumerable<IGrouping<number, TElement>>
        public groupByWithSel<TElement>(
                keySelector: ((x: T) => string),
                elementSelector: (x: T) => TElement): IEnumerable<IGrouping<string, TElement>>
        public groupByWithSel<TKey, TElement>(
                keySelector: ((x: T) => TKey),
                elementSelector: (x: T) => TElement,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>
        public groupByWithSel<TKey, TElement>(
                keySelector: ((x: T) => TKey),
                elementSelector: (x: T) => TElement,
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>> {
                return Enumerable.groupByWithSel(this, keySelector, elementSelector, comparer as any)
        }

        public intersect(second: IEnumerable<T>): IEnumerable<T>
        public intersect(second: IEnumerable<T>, comparer: IEqualityComparer<T>): IEnumerable<T>
        public intersect(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.intersect(this, second, comparer as any)
        }

        public joinByKey<TInner, TKey, TResult>(
                inner: IEnumerable<TInner>,
                outerKeySelector: (x: T) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: T, y: TInner) => TResult,
                comparer?: IEqualityComparer<TKey>): IEnumerable<TResult> {
                return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer as any)
        }

        public last(predicate?: (x: T) => boolean): T {
                return Enumerable.last(this, predicate)
        }

        public lastOrDefault(predicate?: (x: T) => boolean): T | null {
                return Enumerable.lastOrDefault(this, predicate)
        }

        public max(this: IEnumerable<number>): number | never
        public max(selector: (x: T) => number): number | never
        public max(selector?: (x: T) => number): number | never {
                return Enumerable.max(this, selector as any)
        }

        public min(this: IEnumerable<number>): number | never
        public min(selector: (x: T) => number): number | never
        public min(selector?: (x: T) => number): number | never {
                return Enumerable.min(this, selector as any)
        }

        // tslint:disable:ban-types

        public ofType(type: "object"): IEnumerable<Object>
        public ofType(type: "function"): IEnumerable<Function>
        public ofType(type: "symbol"): IEnumerable<Symbol>
        public ofType(type: "boolean"): IEnumerable<boolean>
        public ofType(type: "number"): IEnumerable<number>
        public ofType(type: "string"): IEnumerable<string>
        public ofType<TResult>(type: IConstructor<TResult>): IEnumerable<TResult>
        public ofType(type: string | IConstructor<any>) {
                return Enumerable.ofType(this, type)
        }

        // tslint:enable:ban-types

        public orderBy(predicate: (x: T) => number | string): IOrderedEnumerable<T>
        public orderBy(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public orderBy(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public orderBy(predicate: any, comparer?: IComparer<number> | IComparer<string>) {
                return Enumerable.orderBy(this, predicate, comparer as any)
        }

        public orderByDescending(predicate: (x: T) => number | string): IOrderedEnumerable<T>
        public orderByDescending(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public orderByDescending(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public orderByDescending(predicate: any, comparer?: IComparer<any>) {
                return Enumerable.orderByDescending(this, predicate, comparer as any)
        }

        public reverse(): IEnumerable<T> {
                return Enumerable.reverse(this)
        }

        public select<OUT>(selector: (x: T) => OUT): IEnumerable<OUT>
        public select<TKey extends keyof T>(
                this: IEnumerable<{ [key: string]: Iterable<T[TKey]> }>,
                selector: TKey): IEnumerable<T[TKey]>
        public select(keyOrSelector: any): IEnumerable<any> {
                return Enumerable.select(this, keyOrSelector)
        }

        public selectMany<TBindedSource extends { [key: string]: Iterable<TOut> }, TOut>(
                this: IEnumerable<TBindedSource>,
                selector: keyof TBindedSource): IEnumerable<TOut>
        public selectMany<OUT>(selector: (x: T) => Iterable<OUT>): IEnumerable<OUT>
        public selectMany<OUT>(selector: ((x: T) => Iterable<OUT>) | string): IEnumerable<OUT> {
                return Enumerable.selectMany(this as any, selector as any)
        }

        public sequenceEquals(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): boolean {
                return Enumerable.sequenceEquals(this, second, comparer)
        }

        public single(predicate?: (x: T) => boolean): T {
                return Enumerable.single(this, predicate)
        }

        public singleOrDefault(predicate?: (x: T) => boolean): T | null {
                return Enumerable.singleOrDefault(this, predicate)
        }

        public skip(count: number): IEnumerable<T> {
                return Enumerable.skip(this, count)
        }

        public skipWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.skipWhile(this, predicate)
        }

        public sum(this: IEnumerable<number>): number
        public sum(selector: (x: T) => number): number
        public sum(selector?: (x: T) => number): number {
                return Enumerable.sum(this, selector as any)
        }

        public take(amount: number): IEnumerable<T> {
                return Enumerable.take(this, amount)
        }

        public takeWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.takeWhile(this, predicate)
        }

        public toArray(): T[] {
                return Enumerable.toArray(this)
        }

        public toMap<TKey>(selector: (x: T) => TKey): Map<TKey, T[]> {
                return Enumerable.toMap(this, selector)
        }

        public toSet(): Set<T> {
                return Enumerable.toSet(this)
        }

        public union(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.union(this, second, comparer as any)
        }

        public where(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.where(this, predicate)
        }

        public zip<TSecond>(second: Iterable<TSecond>): IEnumerable<ITuple<T, TSecond>>
        public zip<TSecond, TResult>(
                second: Iterable<TSecond>,
                resultSelector: (x: T, y: TSecond) => TResult): IEnumerable<TResult>
        public zip<TSecond>(second: Iterable<TSecond>, resultSelector?: (x: T, y: TSecond) => any): IEnumerable<any> {
                return Enumerable.zip(this, second, resultSelector as any)
        }

        public abstract [Symbol.iterator](): IterableIterator<T>
}


export class BasicEnumerable<TSource> extends BaseEnumerable<TSource> {
        constructor(private readonly iterator: () => IterableIterator<TSource>) {
                super()
        }

        public [Symbol.iterator](): IterableIterator<TSource> {
                return this.iterator()
        }
}

export class OrderedEnumerable<T> extends BasicEnumerable<T> implements IOrderedEnumerable<T> {

        private static *unrollAndSort<T>(
                map: RecOrdMap<T>,
                comparer?: IComparer<string | number>): IterableIterator<T> {

                for (const key of [...map.keys()].sort(comparer ? comparer : undefined)) {
                        const values = map.get(key)

                        if (values instanceof Map) {
                                yield* OrderedEnumerable.unrollAndSort(values as RecOrdMap<T>, comparer)
                        } else {
                                // Because the key is from the same map
                                // as the values, values cannot be undefined
                                for (const value of values as T[]) {
                                        yield value
                                }
                        }
                }
        }

        private static generate<T>(
                mapFunc: () => RecOrdMap<T>,
                comparer?: IComparer<number | string>): () => IterableIterator<T> {
                return () => OrderedEnumerable.unrollAndSort(mapFunc(), comparer)
        }

        constructor(private readonly map: () => RecOrdMap<T>, comparer?: IComparer<number | string>) {
                super(OrderedEnumerable.generate(map, comparer))
        }

        public getMap(): RecOrdMap<T> {
                return this.map()
        }

        public thenBy(keySelector: (x: T) => string | number): IOrderedEnumerable<T>
        public thenBy(keySelector: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public thenBy(keySelector: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public thenBy(keySelector: any, comparer?: any) {
                return Enumerable.thenBy(this, keySelector, comparer)
        }

        public thenByDescending(keySelector: (x: T) => string | number): IOrderedEnumerable<T>
        public thenByDescending(keySelector: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public thenByDescending(keySelector: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public thenByDescending(keySelector: any, comparer?: any) {
                return Enumerable.thenByDescending(this, keySelector, comparer)
        }

}

export class OrderedEnumerableDescending<T> extends BasicEnumerable<T> implements IOrderedEnumerable<T> {

        private static *unrollAndSort<T>(
                map: RecOrdMap<T>,
                comparer?: IComparer<string | number>): IterableIterator<T> {

                const sortedKeys = [...map.keys()].sort(comparer ? comparer : undefined)

                for (let i = sortedKeys.length - 1; i >= 0; i--) {
                        const key = sortedKeys[i]
                        const values = map.get(key)

                        if (values instanceof Map) {
                                yield* OrderedEnumerableDescending.unrollAndSort(values as RecOrdMap<T>, comparer)
                        } else {
                                // Because the key is from the same map
                                // as the values, values cannot be undefined
                                for (const value of values as T[]) {
                                        yield value
                                }
                        }
                }
        }

        private static generate<T>(
                mapFunc: () => RecOrdMap<T>,
                comparer?: IComparer<number | string>): () => IterableIterator<T> {
                return () => OrderedEnumerableDescending.unrollAndSort(mapFunc(), comparer)
        }

        constructor(private readonly map: () => RecOrdMap<T>, comparer?: IComparer<number | string>) {
                super(OrderedEnumerableDescending.generate(map, comparer))
        }

        public getMap(): RecOrdMap<T> {
                return this.map()
        }

        public thenBy(keySelector: (x: T) => string | number): IOrderedEnumerable<T>
        public thenBy(keySelector: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public thenBy(keySelector: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public thenBy(keySelector: any, comparer?: any) {
                return Enumerable.thenBy(this, keySelector, comparer)
        }

        public thenByDescending(keySelector: (x: T) => string | number): IOrderedEnumerable<T>
        public thenByDescending(keySelector: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public thenByDescending(keySelector: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public thenByDescending(keySelector: any, comparer?: any) {
                return Enumerable.thenByDescending(this, keySelector, comparer)
        }
}

function* concatiterator<T>(source1: IEnumerable<T>, source2: IEnumerable<T>) {
        for (const x of source1) {
                yield x
        }
        for (const x of source2) {
                yield x
        }
}

export class ArrayEnumerable<T> extends Array<T> implements IEnumerable<T> {
        public aggregate(func: (x: T, y: T) => T): T
        public aggregate<TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: T) => TAccumulate): TAccumulate
        public aggregate<TAccumulate, TResult>(
                seed: TAccumulate,
                func: (x: TAccumulate, y: T) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): T
        public aggregate<TAccumulate, TResult>(
                seedOrFunc: ((x: T, y: T) => T) | TAccumulate,
                func?: (x: TAccumulate, y: T) => TAccumulate,
                resultSelector?: (x: TAccumulate) => TResult): T | TAccumulate | TResult {
                return Enumerable.aggregate(this, seedOrFunc, func as any, resultSelector as any)
        }

        public all(predicate: (x: T) => boolean): boolean {
                return super.every(predicate)
        }

        public any(predicate?: (x: T) => boolean): boolean {
                return this.some(predicate || (() => true))
        }

        public average(this: IEnumerable<number>): number
        public average(selector: (x: T) => number): number
        public average(selector?: (x: T) => number): number {
                return Enumerable.average(this, selector as any)
        }

        public concat(items: IEnumerable<T>): IEnumerable<T>
        public concat(...items: Array<ReadonlyArray<T>>): ArrayEnumerable<T>
        public concat(...items: Array<T | ReadonlyArray<T>>): ArrayEnumerable<T>
        public concat() {
                let items: any
                if (arguments.length === 1) {
                        items = arguments[0]
                } else {
                        items = [...arguments]
                }

                if (items instanceof BasicEnumerable) {
                        // this scoping
                        const enumerable = this;

                        return new BasicEnumerable(() => concatiterator(enumerable, items))
                } else {
                        return super.concat.apply(this, [items])
                }
        }

        public contains(value: T, comparer?: IEqualityComparer<T>): boolean {
                return Enumerable.contains(this, value, comparer)
        }

        public count(): number
        public count(predicate: (x: T) => boolean): number
        public count(predicate?: (x: T) => boolean): number {
                if (predicate) {
                        let count = 0
                        for (let i = 0; i < this.length; i++) {
                                if (predicate(this[i]) === true) {
                                        count++
                                }
                        }
                        return count
                } else {
                        return this.length
                }
        }

        public distinct(comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.distinct(this, comparer)
        }

        public elementAt(index: number): T {
                if (index >= this.length) {
                        throw new ArgumentOutOfRangeException("index")
                }

                return this[index]
        }

        public elementAtOrDefault(index: number): T | null {
                return Enumerable.elementAtOrDefault(this, index)
        }

        public except(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.except(this, second, comparer)
        }

        public first(predicate?: (x: T) => boolean): T {
                if (predicate) {
                        const value = this.find(predicate)
                        if (value === undefined) {
                                throw new InvalidOperationException(ErrorString.NoMatch)
                        } else {
                                return value
                        }
                } else {
                        if (this.length === 0) {
                                throw new InvalidOperationException(ErrorString.NoElements)
                        }

                        return this[0]
                }
        }

        public firstOrDefault(): T | null
        public firstOrDefault(predicate: (x: T) => boolean): T | null
        public firstOrDefault(predicate?: (x: T) => boolean): T | null {
                if (predicate) {
                        const value = this.find(predicate)
                        if (value === undefined) {
                                return null
                        } else {
                                return value
                        }
                } else {
                        return this.length === 0 ? null : this[0]
                }
        }

        public each(action: (x: T) => void): IEnumerable<T> {
                return Enumerable.each(this, action)
        }

        public groupBy(keySelector: (x: T) => number): IEnumerable<IGrouping<number, T>>
        public groupBy(keySelector: (x: T) => string): IEnumerable<IGrouping<string, T>>
        public groupBy<TKey>(
                keySelector: (x: T) => TKey,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>
        public groupBy<TKey>(
                keySelector: (x: T) => TKey,
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>> {
                return Enumerable.groupBy(this, keySelector, comparer as any)
        }

        public groupByWithSel<TElement>(
                keySelector: ((x: T) => number),
                elementSelector: (x: T) => TElement): IEnumerable<IGrouping<number, TElement>>
        public groupByWithSel<TElement>(
                keySelector: ((x: T) => string),
                elementSelector: (x: T) => TElement): IEnumerable<IGrouping<string, TElement>>
        public groupByWithSel<TKey, TElement>(
                keySelector: ((x: T) => TKey),
                elementSelector: (x: T) => TElement,
                comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>
        public groupByWithSel<TKey, TElement>(
                keySelector: ((x: T) => TKey),
                elementSelector: (x: T) => TElement,
                comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>> {
                return Enumerable.groupByWithSel(this, keySelector, elementSelector, comparer as any)
        }

        public intersect(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.intersect(this, second, comparer)
        }

        public joinByKey<TInner, TKey, TResult>(
                inner: IEnumerable<TInner>,
                outerKeySelector: (x: T) => TKey,
                innerKeySelector: (x: TInner) => TKey,
                resultSelector: (x: T, y: TInner) => TResult,
                comparer?: IEqualityComparer<TKey>): IEnumerable<TResult> {
                return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer as any)
        }

        public last(predicate?: (x: T) => boolean): T {
                if (predicate) {
                        for (let i = this.length - 1; i >= 0; i--) {
                                const value = this[i]
                                if (predicate(value) === true) {
                                        return value
                                }
                        }

                        throw new InvalidOperationException(ErrorString.NoMatch)
                } else {
                        if (this.length === 0) {
                                throw new InvalidOperationException(ErrorString.NoElements)
                        }

                        return this[this.length - 1]
                }
        }

        public lastOrDefault(predicate?: (x: T) => boolean): T | null {
                if (predicate) {
                        for (let i = this.length - 1; i >= 0; i--) {
                                const value = this[i]
                                if (predicate(value) === true) {
                                        return value
                                }
                        }

                        return null
                } else {
                        return this.length === 0 ? null : this[this.length - 1]
                }
        }

        public max(this: IEnumerable<number>): number | never
        public max(selector: (x: T) => number): number | never
        public max(selector?: (x: T) => number): number | never {
                if (this.length === 0) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                if (selector) {
                        let max = Number.MIN_VALUE

                        for (let i = 0; i < this.length; i++) {
                                max = Math.max(selector(this[i]), max)
                        }

                        return max
                } else {
                        return Math.max.apply(null, this as ArrayEnumerable<any>)
                }
        }

        public min(this: IEnumerable<number>): number | never
        public min(selector: (x: T) => number): number | never
        public min(selector?: (x: T) => number): number | never {
                if (this.length === 0) {
                        throw new InvalidOperationException(ErrorString.NoElements)
                }

                if (selector) {
                        let min = Number.MAX_VALUE

                        for (let i = 0; i < this.length; i++) {
                                min = Math.min(selector(this[i]), min)
                        }

                        return min
                } else {
                        return Math.min.apply(null, this as ArrayEnumerable<any>)
                }
        }

        // tslint:disable:ban-types

        public ofType(type: "object"): IEnumerable<Object>
        public ofType(type: "function"): IEnumerable<Function>
        public ofType(type: "symbol"): IEnumerable<Symbol>
        public ofType(type: "boolean"): IEnumerable<boolean>
        public ofType(type: "number"): IEnumerable<number>
        public ofType(type: "string"): IEnumerable<string>
        public ofType<TResult>(type: IConstructor<TResult>): IEnumerable<TResult>
        public ofType(type: string | IConstructor<any>) {
                return Enumerable.ofType(this, type)
        }

        // tslint:enable:ban-types

        public orderBy(predicate: (x: T) => number | string): IOrderedEnumerable<T>
        public orderBy(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public orderBy(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public orderBy(predicate: any, comparer?: IComparer<any>) {
                return Enumerable.orderBy(this, predicate, comparer as any)
        }

        public orderByDescending(predicate: (x: T) => number | string): IOrderedEnumerable<T>
        public orderByDescending(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>
        public orderByDescending(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>
        public orderByDescending(predicate: any, comparer?: IComparer<any>) {
                return Enumerable.orderByDescending(this, predicate, comparer as any)
        }

        public reverse(): ArrayEnumerable<T> {
                super.reverse()
                return this
        }

        public select<OUT>(selector: (x: T) => OUT): IEnumerable<OUT>
        public select<TKey extends keyof T>(
                this: IEnumerable<{ [key: string]: T[TKey] }>,
                selector: TKey): IEnumerable<T[TKey]>
        public select(keyOrSelector: any): IEnumerable<any> {
                return Enumerable.select(this, keyOrSelector)
        }

        public selectMany<TBindedSource extends { [key: string]: Iterable<TOut> }, TOut>(
                this: IEnumerable<TBindedSource>,
                selector: keyof TBindedSource): IEnumerable<TOut>
        public selectMany<OUT>(selector: (x: T) => Iterable<OUT>): IEnumerable<OUT>
        public selectMany<OUT>(selector: ((x: T) => Iterable<OUT>) | string): IEnumerable<OUT> {
                return Enumerable.selectMany(this as any, selector as any)
        }

        public sequenceEquals(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): boolean {
                return Enumerable.sequenceEquals(this, second, comparer)
        }

        public single(predicate?: (x: T) => boolean): T {
                return Enumerable.single(this, predicate)
        }

        public singleOrDefault(predicate?: (x: T) => boolean): T | null {
                return Enumerable.singleOrDefault(this, predicate)
        }

        public skip(count: number): IEnumerable<T> {
                return Enumerable.skip(this, count)
        }

        public skipWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.skipWhile(this, predicate)
        }

        public sum(this: IEnumerable<number>): number
        public sum(selector: (x: T) => number): number
        public sum(selector?: (x: T) => number): number {
                return Enumerable.sum(this, selector as any)
        }

        public take(amount: number): IEnumerable<T> {
                return Enumerable.take(this, amount)
        }

        public takeWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.takeWhile(this, predicate)
        }

        public toArray(): T[] {
                return Enumerable.toArray(this)
        }

        public toMap<TKey>(selector: (x: T) => TKey): Map<TKey, T[]> {
                return Enumerable.toMap(this, selector)
        }

        public toSet(): Set<T> {
                return Enumerable.toSet(this)
        }

        public union(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T> {
                return Enumerable.union(this, second, comparer)
        }

        public where(predicate: (x: T, index: number) => boolean): IEnumerable<T> {
                return Enumerable.where(this, predicate)
        }

        public zip<TSecond>(second: Iterable<TSecond>): IEnumerable<ITuple<T, TSecond>>
        public zip<TSecond, TResult>(
                second: Iterable<TSecond>,
                resultSelector: (x: T, y: TSecond) => TResult): IEnumerable<TResult>
        public zip<TSecond>(second: Iterable<TSecond>, resultSelector?: (x: T, y: TSecond) => any): any {
                return Enumerable.zip(this, second, resultSelector as any)
        }

}

export class Grouping<TKey, TElement> extends ArrayEnumerable<TElement> {
        public readonly key: TKey
        constructor(key: TKey, startingItem: TElement) {
                super(1)
                this.key = key
                this[0] = startingItem
        }
}