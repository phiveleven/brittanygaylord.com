$.getScript('src/jquery.flickr.js', function(){
    $('#photos').flickr()
        .photosSearch({ user_id:'91992600@N03' });
});

