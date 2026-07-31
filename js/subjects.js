// =====================================
// Study Focus
// subjects.js
// Subjects + Cards + Todo + Delete
// =====================================

"use strict";



const subjectsContainer =
document.getElementById("subjectsContainer");


const subjectTemplate =
document.getElementById("subjectTemplate");



let deleteSubjectId = null;




// ===============================
// Render Subjects
// ===============================


function renderSubjects(){


    subjectsContainer.innerHTML = "";


    subjects.forEach(subject => {


        const clone =
        subjectTemplate.content.cloneNode(true);



        const card =
        clone.querySelector(".subject-card");



        const name =
        clone.querySelector(".subject-name");


        const status =
        clone.querySelector(".status");


        const time =
        clone.querySelector(".time");



        name.textContent =
        subject.name;


        status.textContent =
        t(subject.status);



        time.textContent =
        formatTime(subject.remaining);



        // Buttons


        const start =
        clone.querySelector(".start");


        const pause =
        clone.querySelector(".pause");


        const resume =
        clone.querySelector(".resume");


        const reset =
        clone.querySelector(".reset");


        const del =
        clone.querySelector(".delete");



        start.textContent =
        t("start");


        pause.textContent =
        t("pause");


        resume.textContent =
        t("resume");


        reset.textContent =
        t("reset");


        del.textContent =
        t("delete");



        start.onclick = ()=>{

            startTimer(subject.id);

        };



        pause.onclick = ()=>{

            pauseTimer(subject.id);

        };


        resume.onclick = ()=>{

            resumeTimer(subject.id);

        };


        reset.onclick = ()=>{

            resetTimer(subject.id);

        };


        del.onclick = ()=>{


            deleteSubjectId =
            subject.id;


            document
            .getElementById("deleteModal")
            .classList
            .remove("hidden");


        };



        // ===============================
        // Todo
        // ===============================


        const input =
        clone.querySelector(".taskInput");


        const addTask =
        clone.querySelector(".addTask");


        const tasks =
        clone.querySelector(".tasks");



        input.placeholder =
        t("newTask");



        addTask.onclick = ()=>{


            const value =
            input.value.trim();


            if(value==="")
            return;



            subject.tasks.push({

                id:Date.now(),

                text:value,

                done:false

            });


            saveSubjects();


            renderSubjects();


        };



        subject.tasks.forEach(task=>{


            const li =
            document.createElement("li");



            li.innerHTML = `

            <span>
            ${task.done ? "☑" : "☐"}
            ${task.text}
            </span>

            <button>
            🗑
            </button>

            `;



            li.querySelector("span")
            .onclick = ()=>{


                task.done =
                !task.done;


                saveSubjects();

                renderSubjects();


            };



            li.querySelector("button")
            .onclick = ()=>{


                subject.tasks =
                subject.tasks.filter(
                    t=>t.id!==task.id
                );


                saveSubjects();

                renderSubjects();


            };



            tasks.appendChild(li);


        });




        subjectsContainer.appendChild(clone);



    });



    updateStatistics();


}





// ===============================
// Delete System
// ===============================


document
.getElementById("cancelDelete")
.onclick = ()=>{


document
.getElementById("deleteModal")
.classList
.add("hidden");


};




document
.getElementById("confirmDelete")
.onclick = ()=>{


subjects =
subjects.filter(
s=>s.id!==deleteSubjectId
);



saveSubjects();


document
.getElementById("deleteModal")
.classList
.add("hidden");



renderSubjects();


};






// ===============================
// Format Time
// ===============================


function formatTime(seconds){


let h =
Math.floor(seconds/3600);


let m =
Math.floor(
(seconds%3600)/60
);


let s =
seconds%60;



return (

String(h).padStart(2,"0")
+
":"
+
String(m).padStart(2,"0")
+
":"
+
String(s).padStart(2,"0")

);


}
const createBtn = document.getElementById("saveSubject");

createBtn.onclick = () => {

    const name =
    document.getElementById("subjectName").value.trim();


    const hours =
    Number(document.getElementById("hours").value) || 0;


    const minutes =
    Number(document.getElementById("minutes").value) || 0;


    const duration =
    (hours * 3600) + (minutes * 60);



    if(name === "" || duration <= 0){

        alert(
            currentLanguage === "ar"
            ?
            "أدخل اسم المادة والمدة"
            :
            "Enter subject name and duration"
        );

        return;
    }



    subjects.push({

        id: Date.now(),

        name:name,

        duration:duration,

        remaining:duration,

        status:"waiting",

        completed:false,

        tasks:[]

    });



    saveSubjects();


    renderSubjects();



    document
    .getElementById("addModal")
    .classList
    .add("hidden");



    document.getElementById("subjectName").value="";
    document.getElementById("hours").value="";
    document.getElementById("minutes").value="";


};
