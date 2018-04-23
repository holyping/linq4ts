# linq4ts
Modified from https://github.com/arogozine/LinqToTypeScript
fixed bugs from max and min, as can't returns a proper value when collection has minus values.
And downgraded to ES5 so it can run on older browsers, as for this, async linq is not supported.

install:
npm i linq4ts

and add codes from start

import { initializeLinq, IEnumerable } from "../node_modules/linq4ts"

declare global {
    interface Array<T> extends IEnumerable<T> {
        concat(items: IEnumerable<T>): IEnumerable<T>; 
    }
    interface Uint8Array extends IEnumerable<number> { }
    interface Uint8ClampedArray extends IEnumerable<number> { }
    interface Uint16Array extends IEnumerable<number> { }
    interface Uint32Array extends IEnumerable<number> { }
    interface Int8Array extends IEnumerable<number> { }
    interface Int16Array extends IEnumerable<number> { }
    interface Int32Array extends IEnumerable<number> { }
    interface Float32Array extends IEnumerable<number> { }
    interface Float64Array extends IEnumerable<number> { }
    interface Map<K, V> extends IEnumerable<[K, V]> { }
    interface Set<T> extends IEnumerable<T> { }
}
initializeLinq();
