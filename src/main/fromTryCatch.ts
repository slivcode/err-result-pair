export default function fromTryCatch<T> (tryCatchFn: () => T): [Error | undefined, T | undefined] {
  try {
    return [, tryCatchFn()] as any;
  } catch (e) {
    return [e] as any;
  }
}