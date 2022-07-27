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
const keyObjectEntries = Array.from(zip(keyBoxes, keyAudio));

/*  Ensure corresponding box and audio elements have the same data key
    TODO: Merge this together with the `.reduce()` below?
 */
for (const pair of keyObjectEntries) {
  const dataKeys = pair.map((element) => element.getAttribute('data-key'));

  /* TODO: More descriptive error text? */
  const areKeysAllSame = dataKeys.every((key) => dataKeys[0]);
  if (!areKeysAllSame) throw 'Not all keys properly correspond; please check.';
}

const mapBoxAudio = keyObjectEntries.reduce((acmlObj, pair) => {
  const [box, audio] = pair;
  const key = box.getAttribute('data-key'); // By this point, `box` and `audio` are assured to have the same `data-key`
  acmlObj[key] = { box, audio };

  return acmlObj;
}, {});
console.table(mapBoxAudio);
