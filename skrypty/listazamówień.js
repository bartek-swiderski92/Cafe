(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var $ = window.jQuery;

  function ListaZamówień(selektor) {
    if (!selektor) {
      throw new Error('Brak selektora');
    }
    this.$element = $(selektor);
    if (this.$element.length === 0) {
      throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
    }
  }

  ListaZamówień.prototype.dodajWiersz = function(zamówienie) {
    //utworzenie nowego obiektu wiersza na podstawie danych zamówienieKawy
    var elementWiersza = new Wiersz(zamówienie);
    //Dodanie właściwości $element nowego obiektu do listy kontrolnej
    this.$element.append(elementWiersza.$element);
  };

  function Wiersz(zamówienie) {
    var $div = $('<div></div>', {
      'data-zamówienie': 'polewyboru',
      'class': 'checkbox'
    });
    var $etykieta = $('<label></label>');
    var $poleWyboru = $('<input></input>', {
      type: 'checkbox',
      value: zamówienie.adresEmail
    });
    var opis = zamówienie.wielkość + ' ';
    if (zamówienie.smak) {
      opis += zamówienie.smak + ' ';
    }
    opis += zamówienie.kawa + ', ';
    opis += ' (' + zamówienie.adresEmail + ')';
    opis += ' [' + zamówienie.moc + 'x]';

    $etykieta.append($poleWyboru);
    $etykieta.append(opis);
    $div.append($etykieta);

    this.$element = $div;
  }
  Aplikacja.ListaZamówień = ListaZamówień;
  window.Aplikacja = Aplikacja
})
