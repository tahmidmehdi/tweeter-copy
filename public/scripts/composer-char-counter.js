$(document).ready(function() {
  // --- our code goes here ---
  console.log('composer-char-counter.js loaded');
  // Using jQuery and an appropriate selector, register an event handler to the textarea
  const tweetBox = document.querySelector('#tweet-text');
  tweetBox.addEventListener('keyup', function(event) {
    const tweetText = this.value;
    const tweetLength = tweetText.length;
    const tweetCounter = this.parentNode.querySelector('div.button-counter > output.counter');
    tweetCounter.innerHTML = 140 - tweetLength;
    if (tweetCounter.innerHTML < 0) {
      tweetCounter.style.color = 'red';
    } else {
      tweetCounter.style.color = 'black';
    }
  });
});
