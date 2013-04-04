
$(document).ready(function () {

    var draw = function () {
        var body = $(".tweets");
        body.html("")

        for (var i = window.streams.home.length - 1; i >= 0; i--) {
            tweet = window.streams.home[i]
            body.append("<p><a href='#' class='tweetMsg'>" + tweet.user + "</a> " + tweet.message + "</br> <span class='tweetTime'>" + moment(tweet.created_at).fromNow() + "</span> </p>");
        };


        $('.tweets a').click(function () {
            event.preventDefault();

            $("ul li:nth-child(2)").addClass('highlight');
            var twitterUser = $(this).text();
            var userCollection = streams.users[twitterUser];

            $('.tweets').html("<h1>" + twitterUser + "</h1>");

            for (var i = userCollection.length - 1; i >= 0; i--) {
                $('.tweets').append("<p class='tweetMsg'>" + userCollection[i].message + "</br> <span class='tweetTime'>" + moment(userCollection[i].created_at).fromNow() + "</span></p>");
            }
        });
    };

    // var displayTime = function(time) {
    //   //take time and display (tweet.createdat)
    //   //if under one minute show string (under a minute ago.)
    //   //else use default moment
    // };

    setTimeout(draw, 1000);

    $('#tab1').click(function () {
        event.preventDefault();

        $('ul li:nth-child(2)').removeClass('highlight');
        return draw();
    });

    $('#submit').click(function () {
        event.preventDefault();
        var $tweetContent = $('textarea').val();

        if ($tweetContent.length > 1 && $tweetContent.length < 140) {
            add_tweet({
                user: window.streams.visitor,
                message: $tweetContent,
                created_at: new Date()
            });

        } else if ($tweetContent.length > 1 && $tweetContent.length > 140) {
            $('textarea').val('140 characters only, come on man!');
        } else {
            $('textarea').val('Write a tweet before submitting next time dumbass!');
        };

        return draw();
    });

    //login function todo: show username of current user

    $('#submitlogin').click(function () {
        event.preventDefault();
        window.streams.visitor = $('#user').val();

        window.streams.users[window.streams.visitor] = [];
        $('.loggedout').removeClass('loggedout');
        $(' ')
    });
});