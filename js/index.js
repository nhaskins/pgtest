var app = {

    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        alert("device ready pass");
        // var url = "http://maps.google.com/maps?daddr=51%20N%20Gore%20Ave.%20Webster%20Groves,%20MO%2063119"
        // var ref = window.open(url, '_system', 'location=yes');
        // ref.addEventListener('loadstart', function() { alert(event.url); });


    }
};
