// =====================================
// Study Focus
// language.js
// English / Arabic System
// =====================================


"use strict";



const translations = {


en:{


title:"Study Focus",

subtitle:
"Stay focused. Finish your study sessions.",


subjects:"Subjects",

completed:"Completed",

active:"Active",

studyTime:"Study Time",


addSubject:"+ Add Subject",

modalTitle:"Add Subject",

subjectName:"Subject Name",

hours:"Hours",

minutes:"Minutes",

cancel:"Cancel",

create:"Create",


waiting:"Waiting",

running:"Studying",

paused:"Paused",

completedStatus:"Completed",


start:"▶ Start",

pause:"⏸ Pause",

resume:"▶ Resume",

reset:"🔄 Reset",

delete:"🗑 Delete",


todo:"Todo List",

newTask:"New Task",


finishTitle:
"Study Session Completed!",

finishMessage:
"Excellent work!",

close:"Close",


deleteTitle:
"Delete Subject?",

deleteMessage:
"This action cannot be undone."


},





ar:{


title:"Study Focus",

subtitle:
"ابقَ مركزاً. أنهِ جلسات دراستك.",


subjects:"المواد",

completed:"المكتملة",

active:"النشطة",

studyTime:"وقت الدراسة",


addSubject:"+ إضافة مادة",

modalTitle:"إضافة مادة",

subjectName:"اسم المادة",

hours:"الساعات",

minutes:"الدقائق",

cancel:"إلغاء",

create:"إنشاء",


waiting:"انتظار",

running:"يدرس الآن",

paused:"متوقف",

completedStatus:"مكتمل",


start:"▶ بدء",

pause:"⏸ إيقاف",

resume:"▶ متابعة",

reset:"🔄 إعادة",

delete:"🗑 حذف",


todo:"قائمة المهام",

newTask:"مهمة جديدة",


finishTitle:
"اكتملت جلسة الدراسة!",

finishMessage:
"عمل ممتاز!",

close:"إغلاق",


deleteTitle:
"حذف المادة؟",

deleteMessage:
"لا يمكن التراجع عن هذا الإجراء."


}


};






// الحصول على النص الحالي

function t(key){

    return translations[currentLanguage][key];

}





// تطبيق اللغة على الصفحة

function applyLanguage(){


document.documentElement.lang =
currentLanguage;


document.documentElement.dir =
currentLanguage === "ar"
?
"rtl"
:
"ltr";



document.getElementById("title")
.textContent =
t("title");



document.getElementById("subtitle")
.textContent =
t("subtitle");



document.getElementById("addButton")
.textContent =
"+";



const btn =
document.getElementById("languageBtn");

if(btn){

btn.textContent =
currentLanguage==="en"
?
"🌐 AR"
:
"🌐 EN";

}



}





// تغيير اللغة

function toggleLanguage(){


currentLanguage =
currentLanguage==="en"
?
"ar"
:
"en";


saveLanguage();


applyLanguage();


if(typeof renderSubjects === "function"){

    renderSubjects();

}


}