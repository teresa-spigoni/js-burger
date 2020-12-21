// ingredienti
var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');

// nome del burger
var burgerName = document.getElementsByClassName('burger-name')[0];

// variabile prezzo
var price = 2;

// array codici sconto
var discount = ['XMASDISCOUNT2020', 'REFUND2020', 'DISCOUNT20'];

// codice dell'uetnte
var userDiscount = document.getElementById('discount');

// evento click
document.getElementById('button').addEventListener("click", function() {
  var price = 2;
  if (burgerName.value === '') { //se non inserisco il nome al burger alert
    alert('Inserisci un nome per il tuo burger')
  } else { //calcolo del prezzo senza sconto
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        price += parseInt(ingredients[i].value);

        if (userDiscount.value === discount[i]) { //calcolo del prezzo con sconto(...)
          price = (price / 100) * 80;
        }
      }
    }
    //stampo il prezzo
    document.getElementById('price').innerHTML = price;
  }
});

// TODO: Cprezzo con lo sconto e almeno due checkbox true.
