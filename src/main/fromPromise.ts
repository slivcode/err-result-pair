import fromTryCatch from './fromTryCatch';

export default function fromPromise<R> (promiseFn: () => Promise<R>): Promise<[Error | null, R | null]> {
  return promiseFn()
    .then((s) => [null, s])
    .catch(e => [e, null]);
}