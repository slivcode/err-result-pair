import fromPromise from './main/fromPromise';
import fromTryCatch from './main/fromTryCatch';
import fromThunk from './main/fromThunk';

const ErrResultPair = {
  fromTryCatch,
  fromPromise,
  fromThunk,
};
export default ErrResultPair;