// ingredienti
var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');

var burgerName = document.getElementsByClassName('burger-name')[0];

// variabile prezzo
var price = 2;

// array codici sconto
var discount = ['XMASDISCOUNT2020', 'REFUND2020', 'DISCOUNT20'];

// evento click
document.getElementById('button').addEventListener("click", function() {
  var price = 2;

  if (burgerName.value === '') {
    alert('Inserisci un nome per il tuo burger')
  } else {
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        price += parseInt(ingredients[i].value);
      }
    }
    document.getElementById('price').innerHTML = price;
  }
});
