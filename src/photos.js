$(function(){
    setTimeout(function(){
        $('#videos a').replaceWith(function(){
            return this.href
                .replace(/^.+youtu.be\/(.+)/,
                         '<iframe src=//youtube.com/embed/$1?autohide=1&showinfo=0&rel=0 allowfullscreen></iframe>')
                .replace(/^.+vimeo.com\/(.+)/,
                        '<iframe src=//player.vimeo.com/video/$1 allowfullscreen></iframe>');
        });
        $.getScript('src/jquery.flickr.js', function(){
            $('#photos').flickr({ link_to_size:'m', thumbnail_size:'m' })
                .photosSearch({ user_id:'91992600@N03' });
        });
    }, 1e3);
});

