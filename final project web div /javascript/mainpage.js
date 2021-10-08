
// select interest topic
// use dom 
alltopic = document.querySelectorAll(".topic p");
for (i = 0; i < alltopic.length; i++) {
  alltopic[i].style.borderColor = "black";

  alltopic[i].addEventListener("click", function () {
    // toggle
    if (this.style.borderColor == "black") {
      this.style.borderColor = "green";
    } else {
      this.style.borderColor = "black";
    }
  });
}

// add article to the page
for (i=0;i<10;i++)
{
  head="head could be one row or two";
  link="article.html";
  shortContent="this is a article and shortcontent and the schort content always more than 2 row ...";
  dayTime="Mar 1st, 2021";
  articleLong = 5;
  authorImgSrc= 'images/intro/learner1.jpg';
  authorName="this is name";
  articleImgSrc='images/intro/learner2.jpg';

  // jQuery code
  articlesHtmlCode= "<div class='article'><div class='leftcontent'><a href='"+link+"'><h2> <strong>"+
                    i+head + "</strong></h2><p>" + shortContent+ "</p></a><div class='readinfo'><span>" +
                    dayTime + "</span> <span class='dot'>•</span><span>" + articleLong+"min read</span></div>" +
                    "<div class='authorinfo'><img src='" + authorImgSrc +"' />"+
                    "<h6>"+authorName+"</h6>"+"</div></div>"+
                    "<div class='rightimg'><div><img src="+articleImgSrc+" /></div></div></div>";

  addInMainarticle=$(".mainsection .articles").append(articlesHtmlCode);
}

// get the static element position
// to get element position 
// console.log(followListPosition.top+","+followListPosition.left);
// from https://stackoverflow.com/questions/17441065/how-to-detect-scroll-position-of-page-using-jquery
var followListPosition=$(".viewlistitems").offset();

// scroll to follow 
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  
  if (scroll>=followListPosition.top){
    $(".staticViewList").addClass("unvisableItem");
    $(".fixViewList").removeClass("unvisableItem");

  }
  else
  {
    $(".staticViewList").removeClass("unvisableItem");
    $(".fixViewList").addClass("unvisableItem");
  }
  console.log(scroll);
});