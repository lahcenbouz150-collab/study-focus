// =====================================
// Study Focus
// app.js
// Timer + Progress + Statistics + Init
// =====================================

"use strict";


// ===============================
// Timers
// ===============================


let runningTimers = {};



function startTimer(id){


const subject =
subjects.find(
s=>s.id===id
);


if(!subject)
return;



if(subject.status==="running")
return;



subject.status="running";



runningTimers[id] =
setInterval(()=>{


if(subject.remaining>0){


subject.remaining--;


updateCard(id);


saveSubjects();



}
else{


clearInterval(
runningTimers[id]
);



subject.status="completed";

subject.completed=true;


playAlarm();


showFinishModal();


saveSubjects();


renderSubjects();



}


},1000);



saveSubjects();

renderSubjects();


}




function pauseTimer(id){


if(runningTimers[id]){


clearInterval(
runningTimers[id]
);


delete runningTimers[id];


}



const subject =
subjects.find(
s=>s.id===id
);



if(subject){

subject.status="paused";

saveSubjects();

renderSubjects();

}


}




function resumeTimer(id){


startTimer(id);


}




function resetTimer(id){



if(runningTimers[id]){

clearInterval(
runningTimers[id]
);

delete runningTimers[id];

}



const subject =
subjects.find(
s=>s.id===id
);



if(subject){


subject.remaining =
subject.duration;


subject.status="waiting";

subject.completed=false;



saveSubjects();


renderSubjects();


}



}







// ===============================
// Update Timer UI
// ===============================


function updateCard(id){



const subject =
subjects.find(
s=>s.id===id
);


const cards =
document.querySelectorAll(
".subject-card"
);



subjects.forEach((s,index)=>{


if(s.id===id){



const card =
cards[index];



if(card){


card.querySelector(".time")
.textContent =
formatTime(
s.remaining
);



updateProgress(
card,
s
);



card.querySelector(".status")
.textContent =
t(s.status);



}


}


});



}





// ===============================
// Circular Progress
// ===============================


function updateProgress(card,subject){


const circle =
card.querySelector(
".circle-progress"
);



if(!circle)
return;



const total =
264;



const percent =
subject.remaining /
subject.duration;



circle.style.strokeDashoffset =
total -
(total * (1-percent));



}






// ===============================
// Statistics
// ===============================


function updateStatistics(){


const total =
document.getElementById(
"totalSubjects"
);


const completed =
document.getElementById(
"completedSubjects"
);


const active =
document.getElementById(
"activeSubjects"
);



const time =
document.getElementById(
"totalStudyTime"
);



if(!total)
return;



total.textContent =
subjects.length;



completed.textContent =
subjects.filter(
s=>s.completed
).length;



active.textContent =
subjects.filter(
s=>s.status==="running"
).length;



let seconds=0;


subjects.forEach(s=>{


seconds +=
s.duration -
s.remaining;


});



time.textContent =
formatShortTime(seconds);



}





function formatShortTime(sec){


let h =
Math.floor(sec/3600);


let m =
Math.floor(
(sec%3600)/60
);



return (

String(h).padStart(2,"0")
+
":"
+
String(m).padStart(2,"0")

);


}





// ===============================
// Alarm
// ===============================


function playAlarm(){


const audio =
document.getElementById(
"alarm"
);


if(audio){

audio.currentTime=0;

audio.play()
.catch(()=>{});

}


}







// ===============================
// Finish Modal
// ===============================


function showFinishModal(){


const modal =
document.getElementById(
"finishModal"
);



modal.classList.remove(
"hidden"
);



document.getElementById(
"finishTitle"
)
.textContent =
t("finishTitle");



document.getElementById(
"finishText"
)
.textContent =
t("finishMessage");


}





document
.getElementById("finishClose")
.onclick=()=>{


document
.getElementById("finishModal")
.classList
.add("hidden");


};







// ===============================
// Language Button
// ===============================


document
.getElementById("languageBtn")
.onclick =
toggleLanguage;






// ===============================
// Start Application
// ===============================


applyLanguage();

renderSubjects();

updateStatistics();