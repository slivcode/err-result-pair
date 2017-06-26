import fromPromise from './fromPromise';

export default function fromThunk<T> (thunkFn: (f) => any): Promise<[Error, T]> {
  return fromPromise<T>(() => new Promise((r, d) => {
    thunkFn((e, s) => e ? r(s) : d(e));
  }));
}