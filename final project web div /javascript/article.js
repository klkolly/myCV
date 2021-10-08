// select the parent
//design idea from reddit 
// [9] reddit [online] avaiable: https://www.reddit.com/

// a function to hide and show commnent at same parent
$('.lightBox').click(function() {
          
    $(this).parent().parent().next().removeClass("unvisableItem");
    $(this).parent().parent().removeClass("commentFull");
    $(this).parent().parent().addClass("unvisableItem");
});

$('.commentHide').click(function() {
    
    $(this).prev().addClass("commentFull");
    $(this).prev().removeClass("unvisableItem");
   
    $(this).addClass("unvisableItem");
});