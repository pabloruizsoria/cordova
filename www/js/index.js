var app = {

  initialize: function() {
    console.log('Inicializando app');
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log('App inicializada');
  },
  onDeviceReady: function() {
    console.log('Dispositivo preparado');
    $('#btnFoto').click(function(event) {
      console.log('Click en el bot´on btnFoto');
      console.log(navigator.camera);
      navigator.camera.getPicture(cameraSuccess, cameraError, {
        // Some common settings are 20, 50, and 100 
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery 
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks 
    });
    });

  }
};

app.initialize();
