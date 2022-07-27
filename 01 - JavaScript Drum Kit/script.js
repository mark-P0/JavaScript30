/*
    on (key-down):
      add `playing` class
      play audio

    on (key-up):
      remove `playing` class
 */

function* zip(...iterables) {
  /* TODO: Check if all are iterables */
  // ...

  /* Get minimum length of iterables */
  const iterablesLengths = iterables.map(({ length }) => length);
  const length = Math.min(...iterablesLengths);

  /* Get common-index values of iterables */
  for (let idx = 0; idx < length; idx++) {
    yield iterables.map((iterable) => iterable[idx]);
  }
}

const keyBoxes = document.querySelectorAll('.key');
const keyAudio = document.querySelectorAll('audio');

const mapBoxAudio = [...zip(keyBoxes, keyAudio)].reduce((acmlObj, pair) => {
  const dataKeys = pair.map((element) => element.getAttribute('data-key'));
  const areKeysAllSame = dataKeys.every((key) => dataKeys[0]);

  /* TODO: More descriptive error text? */
  if (!areKeysAllSame) throw 'Not all keys properly correspond; please check.';

  const key = dataKeys[0];
  const [box, audio] = pair;
  acmlObj[key] = { box, audio };

  return acmlObj;
}, {});
console.table(mapBoxAudio);
