var client = new WebTorrent();
    
var magnetURI = $("#input_magnet_URI");
var submitButton = $("#submit_button");
var progress = $('#progress');

submitButton.click(function() {
        client.on('error', function(err) {
            alert('There is an error on client side: ' + err.message);
        });
        
        client.add(magnetURI.val(), function(torrent) {
            torrent.on('error', function(err) {
                alert('There is an error reaching the torrent: ' + err.message);
            });
            var file = torrent.files.find(function (file) {
                return file.name.endsWith('.mp4')
            });
            file.appendTo('#video-append', function(err, elem) {
                if (err) throw err // file failed to download or display in the DOM
                console.log('New DOM node with the content', elem)
            });
        });
});