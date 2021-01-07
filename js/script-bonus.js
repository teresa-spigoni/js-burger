// Costants -----------------------------------------------------------
var minOne = 1;
var maxOne = 1;
var minTwo = 2;
var maxTwo = 2;
var burgerBaseCost = 1.5;
var discountTen = 0.9;
var discountTenCoupon = ['10DISCOUNT', 'tenDiscount', 'discountTen'];
var discountForty = 0.6;
var discountFortyCoupon = ['40DIS40', 'TODAY40', 'NoTfOrEvErYbOdY'];
// --------------------------------------------------------------------

// Order elements -----------------------------------------------------
var orderName = document.getElementById('order-name');
var bread = document.getElementsByClassName('breads')[0].getElementsByTagName('input');
var burger = document.getElementsByClassName('burgers')[0].getElementsByTagName('input');
var additionalIngredients = document.getElementsByClassName('add-ingredients')[0].getElementsByTagName('input');
var sauces = document.getElementsByClassName('saucess')[0].getElementsByTagName('input');
var chips = document.getElementsByClassName('chipss')[0].getElementsByTagName('input');
var salads = document.getElementsByClassName('saladss')[0].getElementsByTagName('input');
var vegetables = document.getElementsByClassName('vegetabless')[0].getElementsByTagName('input');
var drinks = document.getElementsByClassName('drinkss')[0].getElementsByTagName('input');
var desserts = document.getElementsByClassName('dessertss')[0].getElementsByTagName('input');
var fruit = document.getElementsByClassName('fruit')[0].getElementsByTagName('input');
// --------------------------------------------------------------------

// User's coupon and total price --------------------------------------
var userDiscount = document.getElementById('coupon');
var finalPrice = document.getElementById('total');
// --------------------------------------------------------------------

// Counters -----------------------------------------------------------
var bunCounter = 0;
var burgerCounter = 0;
var addIngCounter = 0;
var saucesCouter = 0;
var chipsCounter = 0;
var saladsCounter = 0;
var vegetablesCounter = 0;
var drinksCounter = 0;
var dessertsCounter = 0;
var fruitCounter = 0;
var cost = 0;
// ---------------------------------------------------------------------

// Click event----------------------------------------------------------
document.getElementById('button').addEventListener("click", function() {
  //Reset counters
  bunCounter = 0;
  burgerCounter = 0;
  addIngCounter = 0;
  saucesCouter = 0;
  chipsCounter = 0;
  saladsCounter = 0;
  vegetablesCounter = 0;
  drinksCounter = 0;
  dessertsCounter = 0;
  fruitCounter = 0;
  cost = burgerBaseCost;


// Cicles----------------------------------------------------------------
  // Bread
  for (var i = 0; i < bread.length; i++) {
    if(bread[i].checked) {
      bunCounter++;
      cost += parseFloat(bread[i].value);
    }
  }
  // Burger
  for (var i = 0; i < burger.length; i++) {
    if(burger[i].checked) {
      burgerCounter++;
      cost += parseFloat(burger[i].value);
    }
  }
  // Additional ingredients
  for (var i = 0; i < additionalIngredients.length; i++) {
    if(additionalIngredients[i].checked) {
      addIngCounter++;
      cost += parseFloat(additionalIngredients[i].value);
    }
  }
  // Sauces
  for (var i = 0; i < sauces.length; i++) {
    if(sauces[i].checked) {
      saucesCouter++;
      cost += parseFloat(sauces[i].value);
    }
  }
  // Chips
  for (var i = 0; i < chips.length; i++) {
    if(chips[i].checked) {
      chipsCounter++;
      cost += parseFloat(chips[i].value);
    }
  }
  // Salads
  for (var i = 0; i < salads.length; i++) {
    if(salads[i].checked) {
      saladsCounter++;
      cost += parseFloat(salads[i].value);
    }
  }
  // Vegetables
  for (var i = 0; i < vegetables.length; i++) {
    if(vegetables[i].checked) {
      vegetablesCounter++;
      cost += parseFloat(vegetables[i].value);
    }
  }
  // Drinks
  for (var i = 0; i < drinks.length; i++) {
    if(drinks[i].checked) {
      drinksCounter++;
      cost += parseFloat(drinks[i].value);
    }
  }
  // Desserts
  for (var i = 0; i < desserts.length; i++) {
    if(desserts[i].checked) {
      dessertsCounter++;
      cost += parseFloat(desserts[i].value);
    }
  }
  // Fruits
  for (var i = 0; i < fruit.length; i++) {
    if(fruit[i].checked){
      fruitCounter++;
      cost += parseFloat(fruit[i].value);
    }
  }
// ---------------------------------------------------------------------

// Validation ----------------------------------------------------------
  if(orderName.value.length === 0) {
    alert('Name your order.');
  } else if (bunCounter < minOne) {
    alert('Choose your burger bun.')
  } else if (burgerCounter < minOne) {
    alert('Choose your burger.')
  } else if (addIngCounter < minTwo) {
    alert('Choose at least ' + minTwo + ' additional ingredients.');
  } else if (saucesCouter > maxTwo) {
    alert('You can only choose ' + maxTwo + ' sauces.')
  } else if (chipsCounter > maxOne) {
    alert('You can only choose ' + maxOne + ' type of chips.')
  } else if (saladsCounter > maxOne) {
    alert('You can only choose ' + maxOne + ' salad.')
  } else if (vegetablesCounter > maxTwo) {
    alert('You can only choose ' + maxTwo + ' types of vegetables.')
  } else if (drinksCounter > maxTwo) {
    alert('You can only choose ' + maxTwo + ' drinks.')
  } else if (dessertsCounter > maxOne) {
    alert('You can only choose ' + maxOne + ' dessert.')
  } else if (fruitCounter < minOne) {
    alert('Choose whether or not you want fruit.')
  } else if (discountTenCoupon.indexOf(userDiscount.value) !== -1) {
    cost = cost * discountTen;
  } else if (discountFortyCoupon.indexOf(userDiscount.value) !== -1){
    cost = cost * discountForty
  }
// ----------------------------------------------------------------------

  cost = cost.toFixed(2);
  finalPrice.innerText = '€ ' + cost; //print the final price
});
// ---------------------------------------------------------------------
