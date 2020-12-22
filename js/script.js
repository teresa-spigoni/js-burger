// costanti ------------------------------------------------------
var minIngredients = 2;
var burgerBaseCost = 2;
var discount = 0.8;
var discountCoupon = ['XMASDISCOUNT2020', 'REFUND2020', 'DISCOUNT20'];
// ---------------------------------------------------------------


var burgerName = document.getElementsByClassName('burger-name')[0];
var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');

var price = document.getElementById('price');
var userDiscount = document.getElementById('discount');


var counter = 0;
var cost = 0;


// evento click
document.getElementById('button').addEventListener("click", function() {

  counter = 0;
  cost = burgerBaseCost;

  for(var i = 0; i < ingredients.length; i++) {
    if(ingredients[i].checked) {
      counter++;
      cost += parseInt(ingredients[i].value);
    }
  }

  if(burgerName.value.length === 0) {
    alert('Scegli un nome per il tuo burger!')
  } else if (counter < minIngredients) {
    alert('Seleziona almeno ' + minIngredients + ' ingredienti.')
  } else {
    if(discountCoupon.indexOf(userDiscount.value) !== -1) {
      cost = cost * discount;
    }

  }
  price.innerText = '$ ' + cost;
});
