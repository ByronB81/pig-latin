var latin = function(string) {
  var words = string.toLowerCase().split(" ");

  words.forEach(function(word) {
    var splitWord = word.split("");
    if (splitWord[0].match(/[aeiou]/)) {
      splitWord = splitWord.join("");
      splitWord = splitWord + "ay";
    }
    console.log(splitWord);
    });
  };

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var englishInput = $("#english").val();
  var result = latin(englishInput);

  $(".translated").text(result);

  });
});
