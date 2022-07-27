/*
    on (key-down):
      add `playing` class
      play audio

    on (key-up):
      remove `playing` class
 */

const keyBoxes = document.querySelectorAll('.key');
const keyAudio = document.querySelectorAll('audio');

/*  */

window.addEventListener('keydown', (event) => {
  /*  `event.keyCode` is deprecated!!!
   *  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
   *
   *  Tutorial is outdated!
   */

  const { code, key, location, keyCode } = event;
  console.log({ code, key, location, keyCode });
});
