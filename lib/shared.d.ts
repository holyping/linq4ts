export declare type IComparer<TKey> = (x: TKey, y: TKey) => number;
export interface IConstructor<TResult> extends Function {
    readonly prototype: TResult;
}
export declare type IEqualityComparer<T> = (x: T, y: T) => boolean;
export interface ITuple<X, Y> {
    readonly first: X;
    readonly second: Y;
}
export declare type RecOrdMap<T> = Map<number | string, T[] | Map<number | string, any>>;
export declare function StrictEqualityComparer<T>(x: T, y: T): boolean;
export declare function EqualityComparer<T>(x: T, y: T): boolean;
export declare function StringifyComparer<T>(x: T, y: T): boolean;
export declare function NumberComparer(x: number, y: number): number;
export declare function AsTuple<X, Y>(first: X, second: Y): ITuple<X, Y>;
export declare const ErrorString: Readonly<{
    MoreThanOneElement: string;
    NoElements: string;
    NoMatch: string;
}>;
export declare class InvalidOperationException extends Error {
    message: string;
    constructor(message: string);
}
export declare class ArgumentOutOfRangeException extends RangeError {
    paramName: string;
    constructor(paramName: string);
}
export declare function toiterator<T>(source: T[]): IterableIterator<T>;
