$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  var sentence = $("input#userInput").val();
  var characters = sentence.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
  var letters = characters.split("");
  var k = letters.length;
  var rec= Math.sqrt(k);
var x = new Array(rec);
for (var i=0; i<x.length; i++){
  x[i]= new Array(rec);
}
console.log(x);
  // var rectangle = Math.pow(k);
  // let monday = ["m", "o", "n", "d"];
  // let tuesday = ["t", "u", "e", "s"];
  //
  // let temps = [
  //    ["c", "a", "t", "y"],
  //    ["d", "o", "g", "y"],
  //
  // ];

  for (let i = 0; i < k; i++) {

     console.log("Row #" + letters[i])
      for (let j = 0; j < rec; j++) {
        console.log(i, letters[i])
     }
  }

//     console.log(letters)
//
  });

});
