$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  // var sentence = $("input#userInput").val();
  // var characters = sentence.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
  // var letters = characters.split("");
  let cat = ["c","a","t","y"];
  let dog = ["d","o","g","y"];
 let pet = [
   ["c","a","t","y"],
   ["d","o","g","y"]
 ];
 for (let i =0; i<2; i++){
   console.log("Row #" + i) for (let j = 0; j < 4; j++) {
    console.log(i, j, pet[i][j])

 }
}


//     console.log(letters)
//
  });

});
