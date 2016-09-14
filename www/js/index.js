var app = {

  initialize: function() {
    console.log('Inicializando app');
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log('App inicializada');
  },
  onDeviceReady: function() {
    console.log('Dispositivo preparado');
    $('#btnFoto').click(function(event) {
      navigator.camera.getPicture(onSuccess, onFail, {
        /*
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
              */
      });
    });

  }
};



function onSuccess(imageURI) {
  alert('onSuccess');
  /*var image = document.getElementById('myImage');
  image.src = imageURI;
  alert('image.src: ' + image.src);*/
}

function onFail(message) {
  alert('Failed because: ' + message);
}

app.initialize();
