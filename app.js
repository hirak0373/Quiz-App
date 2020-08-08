var Qno = 0;
var score = 0;
var name = "";

function save()
{
    name = document.getElementById("name").value;
    console.log(name);
}
var question_Array=[
    {
        
        "question":"Which of the following is a storage device?",
        "answer":"All of the above",
        "options":["Hard Disk","USB Disk","All of the above"]
    },
    {
        "question":"Every number system has a base, which is called __________.",
        "answer":"Radix",
        "options":["Index","Subscript","Radix"]
    },
    {
        "question":"________________ is the process in which a user sends computer information from his computer to another computer through modem.",
        "answer":"Uploading",
        "options":["Downloading","Uploading","All of the above"]
    },
    {
        "question":"Collection of 1024 Bytes:",
        "answer":"1KB",
        "options":["1MB","1KB","1GB"]
    },
    {
        "question":"ISP stands for:",
        "answer":"Internet Service Provider",
        "options":["International Service Provider","Internet Service Provider","Internet Service Presenter"]
    }

]

function quizquestions()
{
    console.log(name)
    //disabled();
    var q = document.getElementById("question");
   q.innerHTML = question_Array[Qno].question;
   var op = document.getElementsByClassName("list-group-item");
   for( var i = 0; i< op.length;i++)
   {
       op[i].innerHTML=question_Array[Qno].options[i];
   }
}

function putactive(e)
{
    removeactive();
    e.classList.add("active");
}


function removeactive()
{
    var a = document.getElementsByClassName("active");
    for (var i =0 ;i<a.length;i++ )
    {
    a[i].classList.remove("active");
    }
}

function next()
{
//    check();
    score1();
    if(Qno == question_Array.length-1)
    {
        end()
        disabled();
    }
    if(Qno != question_Array.length-1)
    {
        Qno++;
        removeactive();
        quizquestions();
    }
    if(Qno == question_Array.length-1)
    {
      var d =  document.getElementById("next");
      d.innerText = "Done";
    }
    
   
}


function disabled()
{
   
    var n =document.getElementById("next");
     
        n.disabled = true;
        n.style.color="black";

     
}

function score1()
{
    var a =document.getElementsByClassName("active")[0].innerHTML;
    console.log(a);
    if(a == question_Array[Qno].answer)
    {
        score=score+1;
        console.log(score);
    }
    else
    {
        console.log("Check")
    }
    console.log(question_Array[Qno].answer);
    console.log(score);
    
}

function end()
{
  var b = document.getElementById("para");
    b.innerHTML="<h2>"+"Your Score is: "+score+" out of "+question_Array.length+"</h2>"+"<br>"+"<a href='index.html' class='card-link'><button> <b>Go Back To Home Page</b></button></a>";
}
