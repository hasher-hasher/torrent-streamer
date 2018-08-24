var client = new WebTorrent();
    
var magnetURI = $("#input_magnet_URI");
var submitButton = $("#submit_button");

submitButton.click(function() {
    client.add(magnetURI.val(), function(torrent) {
        alert(torrent.magnetURI);
        // TODO iniciar download do torrent
    });
});