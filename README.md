# err-result-pair

Go Style Error Handling for javascript.

```js
import ErrResultPair from 'err-result-pair';
// or import fromPromise from 'err-result-pair/from-promise'; etc..., if you care about few byte.

(async function () {
    let [err, result] = await ErrResultPair.fromThunk(f => fs.readFile('notexist.txt', 'utf-8'));
    // => [err, result] = [Error('no such file'), null];
    let [err, result] = await ErrResultPair.fromThunk(f => fs.readFile('exist.txt', 'utf-8'));
    // => [err, result] = [null, exist.txt-content];

    // similarly
    await ErrResultPair.fromPromise(() => Promise.resolve('ok')) => [null, 'ok']
    await ErrResultPair.fromPromise(() => Promise.reject(new Error('fail'))) => ['fail', null]

    ErrResultPair.fromTryCatch(() => {return 'ok'}) => [null, 'ok']
    ErrResultPair.fromTryCatch(() => {throw new Error('fail')}) => [Error('fail'), null]
})

```

## changelog

0.0.2 updated to 
