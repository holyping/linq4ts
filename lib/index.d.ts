import { IConstructor } from "./shared";
export { IEnumerable } from "./sync";
export interface IPrototype<T, Y extends Iterable<T>> extends IConstructor<{
    [key: string]: any;
}> {
    new (_?: any): Y;
}
export declare function bindLinq<T, Y extends Iterable<T>>(object: IPrototype<T, Y>): void;
export declare function bindArray<T, Y extends Iterable<T> & ArrayLike<T>>(object: IPrototype<T, Y>): void;
export declare function initializeLinq(): void;
