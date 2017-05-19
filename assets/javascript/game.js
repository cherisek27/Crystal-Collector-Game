  var number;
  var gem = [];
  var total = 0;
  var winCounter = 0;
  var loseCounter = 0;

  $(document).ready(function() {
    function reset() {
    
    gem = [];
    
    number = Math.floor((Math.random() * 101) + 19);
    $("#givenNumber").text(number);
      
    
        for (var i = 0; i < 4; i++) {
            gem[i] = Math.floor((Math.random() * 11) + 1);
            
        var repeat = true;
                while (repeat) {
                    repeat = false;
                    for (var j = 0; j < i; j++) {
                        if (gem[i] === gem[j]) {
                            repeat = true;
                            gem[i] = Math.floor((Math.random() * 11) + 1);
                        }
                    }
                }
      gem.push(gem[i]);
           
    }
    total = 0;
    $("#total").html(total);
    }
    
    reset();  
    $("#gem1").val(gem[0]);
    $("#gem2").val(gem[1]);
    $("#gem3").val(gem[2]);
    $("#gem4").val(gem[3]);
    
    $("button").click(function() {
      console.log(this);
      total = parseInt(total) + parseInt($(this).val());  
      $("#total").html(total);
      
      if (total == number) {
      winCounter++;
      $("#wins").html("Wins: " + winCounter);
      setTimeout(reset, 1000); 
      alert("You won!");
      } 
      else if (total > number) {
        loseCounter++;
      $("#losses").html("Losses: " + loseCounter);
      setTimeout(reset, 1000);
      alert("Sorry,you lose!");
      }
    });
    
  
  });