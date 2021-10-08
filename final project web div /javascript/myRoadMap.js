


// 10 card   the value should from back end but here we make a dict to show the page
var cards =[
    {
        isFinishCss:"cardNot",
        isFinishText: "not enroll",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year3",
        grade:"-",

    },
    {
        isFinishCss:"cardNot",
        isFinishText: "not enroll",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year2",
        grade:"-"

    },
    {
        isFinishCss:"cardNot",
        isFinishText: "not enroll",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year2",
        grade:"-"

    },
    {
        isFinishCss:"cardInProgress",
        isFinishText: "InProgress",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year2",
        grade:"-"

    },
    {
        isFinishCss:"cardInProgress",
        isFinishText: "InProgress",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year2",
        grade:"-"

    },
    {
        isFinishCss:"cardInProgress",
        isFinishText: "InProgress",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year2",
        grade:"-"

    },
    {
        isFinishCss:"cardFinished",
        isFinishText: "finished",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year1",
        grade:"A+"

    },
    {
        isFinishCss:"cardFinished",
        isFinishText: "finished",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year1",
        grade:"A"

    },
    {
        isFinishCss:"cardFinished",
        isFinishText: "finished",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year1",
        grade:"A"

    },
    {
        isFinishCss:"cardFinished",
        isFinishText: "finished",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year1",
        grade:"b"

    },
    {
        isFinishCss:"cardFinished",
        isFinishText: "finished",
        courseName:"Introduction to Computer Science and Programming",
        subject:"computer science",
        link:"#",
        level:"year1",
        grade:"A"

    },


];

// so the function should transfer dict to html and  add into page
// meanwhile count if course is finished
// use jquery

var finishedCourse=0;

for(i=0;i<cards.length;i++){
    roadmapCard= "<div class='card text-left roadmapCard " +cards[i].isFinishCss+"' >"+
    "<div class='progressCard card-body'>" +
    "<span>"+cards[i].isFinishText+"</span>"+
    "<h5 class='card-title'>"+
        cards[i].courseName+
    "</h5>"+
    
    "<h6 class='card-subtitle mb-2 text-muted'>"+
        cards[i].subject+
    "</h6>"+
    "<div class='card-text'>grade: "+ cards[i].grade+"</div>"+
    "<a href='"+ cards[i].link+"' class='card-link continue'>detail</a>"+
    "</div></div>";

        $('.'+cards[i].level).append(roadmapCard);
        if(cards[i].isFinishText == "finished")
        {
        finishedCourse+=1;
        }

}
console.log(finishedCourse);
$(".roadmap progress").attr("value",finishedCourse);
$(".roadmap progress").attr("max",cards.length);
$(".roadmap progress").next().text("("+finishedCourse+"/"+cards.length+")");

$(".roadmapDetailShow").on( "click",function(){
    console.log("fuck!");
    $("#roadmapDetail").fadeToggle();
})

