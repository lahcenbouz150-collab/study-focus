// =====================================
// Study Focus
// storage.js
// Local Storage Management
// =====================================


"use strict";


// تحميل المواد المحفوظة

let subjects = JSON.parse(
    localStorage.getItem("study_focus_subjects")
) || [];


// تحميل اللغة

let currentLanguage =
localStorage.getItem("study_focus_language")
|| "en";


// حفظ المواد

function saveSubjects(){

    localStorage.setItem(
        "study_focus_subjects",
        JSON.stringify(subjects)
    );

}


// حفظ اللغة

function saveLanguage(){

    localStorage.setItem(
        "study_focus_language",
        currentLanguage
    );

}


// مسح كل البيانات (للاختبار)

function clearStorage(){

    localStorage.removeItem(
        "study_focus_subjects"
    );

    localStorage.removeItem(
        "study_focus_language"
    );

}