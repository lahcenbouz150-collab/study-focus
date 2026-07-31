// =====================================
// Study Focus - Main App
// =====================================


// ===============================
// Theme System
// ===============================

const themeBtn = document.getElementById("themeBtn");


function loadTheme(){

    const theme = localStorage.getItem("theme");


    if(theme === "light"){

        document.body.classList.add("light");

    }

}



if(themeBtn){

    themeBtn.addEventListener("click",()=>{


        document.body.classList.toggle("light");


        const mode =
        document.body.classList.contains("light")
        ?
        "light"
        :
        "dark";


        localStorage.setItem(
            "theme",
            mode
        );


    });

}



loadTheme();







// ===============================
// Add Subject Modal
// ===============================


const addButton =
document.getElementById("addButton");


const addModal =
document.getElementById("addModal");


const closeModal =
document.getElementById("closeModal");




if(addButton){

    addButton.addEventListener(
        "click",
        ()=>{

            addModal.classList.remove(
                "hidden"
            );

        }
    );

}




if(closeModal){

    closeModal.addEventListener(
        "click",
        ()=>{

            addModal.classList.add(
                "hidden"
            );

        }
    );

}






// ===============================
// Create Subject
// ===============================


const saveSubject =
document.getElementById("saveSubject");




if(saveSubject){


saveSubject.addEventListener(
"click",
()=>{


const name =
document.getElementById(
"subjectName"
).value.trim();



const hours =
Number(
document.getElementById("hours").value
)
||0;



const minutes =
Number(
document.getElementById("minutes").value
)
||0;



const duration =
(hours*3600)
+
(minutes*60);




if(name === "" || duration <=0){


alert(
"Enter subject name and duration"
);


return;


}





const newSubject = {


id:Date.now(),

name:name,

duration:duration,

remaining:duration,

status:"Waiting",

completed:false,

tasks:[]


};





// إذا كانت المصفوفة موجودة من subjects.js

if(typeof subjects !== "undefined"){


subjects.push(newSubject);


}



if(typeof saveSubjects === "function"){

saveSubjects();

}



if(typeof renderSubjects === "function"){

renderSubjects();

}





addModal.classList.add(
"hidden"
);



document.getElementById(
"subjectName"
).value="";


document.getElementById(
"hours"
).value="";


document.getElementById(
"minutes"
).value="";



}

);


}







// ===============================
// Close Finish Modal
// ===============================


const finishClose =
document.getElementById("finishClose");


const finishModal =
document.getElementById("finishModal");



if(finishClose){


finishClose.onclick=()=>{


finishModal.classList.add(
"hidden"
);


};


}







// ===============================
// Close Delete Modal
// ===============================


const cancelDelete =
document.getElementById("cancelDelete");


const deleteModal =
document.getElementById("deleteModal");



if(cancelDelete){


cancelDelete.onclick=()=>{


deleteModal.classList.add(
"hidden"
);


};


}





// ===============================
// Start App
// ===============================


document.addEventListener(
"DOMContentLoaded",
()=>{


if(typeof renderSubjects==="function"){

renderSubjects();

}


}
);