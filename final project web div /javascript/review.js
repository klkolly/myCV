
//count the input words
function countWord() {

    var text=""
    var textInputElement = document.getElementById('reviewInput');
    textInputElement.addEventListener('keyup', function(){
      text = textInputElement.value;
      var textLength=text.length;
      var template = document.getElementById('countWordTemplate').innerHTML;
      var rendered = Mustache.render(template, { countWord: textLength });
      
      document.getElementById("countWord").innerHTML=rendered;
    });
  }

countWord();


// when hover or click rating star make sure this star and previous stars are become light
$(".rating label").hover(function(){
    $(this).css( "background", "blue" );
    $(this).prevAll().css( "background", "blue" );
    $(this).nextAll().css( "background", "#ccc");
    },
    function(){
        $(this).css( "background", "#ccc" );
        $(this).prevAll("label").css( "background", "#ccc" );
        $(".rating input").css( "background", "#ccc");
        $(".rating input:checked").prevAll().css( "background", "rgb(0,0,254)" );
        
    }
)


