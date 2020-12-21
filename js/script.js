var ingredients = document.getElementsByClassName('ingredients')[0].getElementsByTagName('input');
var price = 2;

document.getElementById('button').addEventListener("click", function() {
  var price = 2;
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i].checked) {
      price += parseInt(ingredients[i].value);
    }
  }
  document.getElementById('price').innerHTML = price;
});
