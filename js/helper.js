function twoletters() {
  var output = "";
  var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 2; i++)
    output += choices.charAt(Math.floor(Math.random() * choices.length));
  return output;
}

function shuffle(array) {
  var newarr = [];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    newarr[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return newarr;
}

function get_unid() {
  unid = twoletters() + twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9);
}

function randomdigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
