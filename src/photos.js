$(function(){
    $.getScript('src/jquery.flickr.js', function(){
        $('#photos').flickr({ link_to_size:'m', thumbnail_size:'m' })
            .photosSearch({ user_id:'91992600@N03' });
    });
});

