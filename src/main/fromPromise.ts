function resolve (r) {
  return [, r];
}

function decline (e) {
  return [e];
}

export default function fromPromise<R> (promiseFn: () => Promise<R>): Promise<[Error, R]> {
  return promiseFn().then(resolve).catch(decline);
}