//"use strict";
//var input = document.querySelectorAll('textarea')[0],
  characterCount = document.querySelector('#characterCount'),
//  wordCount = document.querySelector('#wordCount'),
//  sentenceCount = document.querySelector('#sentenceCount'),
//  paragraphCount = document.querySelector('#paragraphCount'),



    // updating the displayed stats after every touch
    input.addEventListener('touchEnd', function() {

  //Possible use this in case text files get to large
  //console.clear();

  // character count
  characterCount.innerHTML = input.value.length;

  
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  // console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // sentence count using ./!/? as sentense separators
 // if (words) {
   // var sentences = input.value.split(/[.|!|?]+/g);

  //use this for paragraphCount

   // var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
