/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
  
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  tweets.forEach(function(tweet) {
    $('#tweets-container').append(createTweetElement(tweet));
  });
}

// function that creates tweet article
const createTweetElement = function(tweet) {
  const $tweet = $(
    `<article>
      <header>
        <div class="username">
          <img src="${tweet.user.avatars}" alt="avatar"> ${tweet.user.name}
        </div>
        <div class="handle">${tweet.user.handle}</div>
      </header>
      <p>${escape(tweet.content.text)}</p>
      <footer>
        <div>
          <span class="need_to_be_rendered">${tweet.created_at}</span>
        </div>
        <div class="tweet-buttons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    <br>`
  );
  return $tweet;
}

$(document).ready(function() {
  // define a function called loadTweets that is responsible for fetching tweets from the http://localhost:8080/tweets page
  const loadTweets = function() {
    $.ajax({url: '/tweets', method: 'GET',
      success: function(response) {
        renderTweets(response);
        const datetimes = document.querySelectorAll('.need_to_be_rendered')
        datetimes.forEach(function(datetime) {
          datetime.innerHTML = timeago.format(datetime.innerHTML);
        });
      }
    });
  }
  loadTweets();
});
