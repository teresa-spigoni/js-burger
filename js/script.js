// constant ------------------------------------------------------
var minIngredients = 2;
var burgerBaseCost = 2;
var discount = 0.8;
var discountCoupon = ['XMASDISCOUNT2020', 'REFUND2020', 'DISCOUNT20'];
// ---------------------------------------------------------------


// burger name, ingredients, price and discount ------------------
var burgerName = document.getElementsByClassName('burger-name')[0];
var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');
var price = document.getElementById('price');
var userDiscount = document.getElementById('discount');
// ----------------------------------------------------------------


// counters -------------------------------------------------------
var counter = 0;
var cost = 0;
// ----------------------------------------------------------------


// click event ----------------------------------------------------
document.getElementById('button').addEventListener("click", function() {
  // reset counters
  counter = 0;
  cost = burgerBaseCost;

  for(var i = 0; i < ingredients.length; i++) {  //cycle checked ingredients to obtain partial price
    //for each checked checkbox add 1 to the counter and add the value of the ingredient to the cost
    if(ingredients[i].checked) {
      counter++;
      cost += parseInt(ingredients[i].value);
    }
  }

  if(burgerName.value.length === 0) {  //if there is no burger name
    alert('Scegli un nome per il tuo burger!')
  } else if (counter < minIngredients) {  //if there are less than 2 checked checkboxes
    alert('Seleziona almeno ' + minIngredients + ' ingredienti.')
  } else {
    if(discountCoupon.indexOf(userDiscount.value) !== -1) {  //apply the discount
      cost = cost * discount;
    }

  }
  cost = cost.toFixed(2);  //obtain a number of only two decimal places
  price.innerText = '$ ' + cost;  //print the final price
});
// ----------------------------------------------------------------
