var app = {
    
  initialize: function() {
    console.log('Inicializando app');
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log('App inicializada');
  },
  onDeviceReady: function() {
    console.log('Dispositivo preparado');
  }
};

app.initialize();