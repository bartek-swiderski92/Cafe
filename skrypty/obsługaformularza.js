    (function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja  || {};
  var $ = window.jQuery;
  var mocKawy = document.getElementById('mocKawy');
  function ObsługaFormularza(selektor){
    if (!selektor) {
      throw new Error('Brak Selektora');
    }
    this.$elementFormularza = $(selektor);
    if (this.$elementFormularza === 0) {
      throw new Error('Brak Elementow odpowiadających selektorowi: ' + selektor)
    }
  }
  ObsługaFormularza.prototype.dodajObsługęWysyłki = function(fn) {
    console.log('Utworzenie obsługi zdarzenia submit formularza')
    this.$elementFormularza.on('submit', function(zdarzenie) {
      zdarzenie.preventDefault();
      var dane = {};
      $(this).serializeArray().forEach(function(element) {
        dane[element.name] = element.value;
        console.log('Element ' + element.name + ' ma wartość ' + element.value);
      })
      console.log(dane);
      fn(dane);
      this.reset();
      this.elements[0].focus();
    })
  }
  $("#mocKawy").change(function() {
    document.getElementById("wartośćMocKawy").innerHTML = mocKawy.value;
  });

  function changeInputColor(input, value) {
          $(input).removeClass();
  if (value < 35) {
    $(input).addClass('weak-coffee');
    }
    else if (value >= 35 && value <= 75) {
      $(input).addClass('medium-coffee');
    } else {
      $(input).addClass('strong-coffee')
    }
  }
changeInputColor('#wartośćMocKawy', mocKawy.value)
  Aplikacja.ObsługaFormularza = ObsługaFormularza;
  window.Aplikacja = Aplikacja;
})(window);
