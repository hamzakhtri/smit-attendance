import {logoutfromfirebase} from "../../config/firebase.js";

  window.logout = async function () {
    try {
      await logoutfromfirebase();
      await swal({
        title: "Successfully Logout",
        icon: "success",
        button: "Ok",
        timer: 3000
      });

      window.location.href="../../index.html";
    } catch (e) {
      console.log(e.message);
    }
  };

 

import {addClassToDb} from "../../config/firebase.js"
window.addClass = async function(){ 
    const classSchedule = document.getElementById("class-schedule").value;
    const classTiming = document.getElementById("class-timings").value;
    const teacherName = document.getElementById("teacher-name").value;
    const sectionName = document.getElementById("section-name").value;
    const courseName = document.getElementById("course-name").value;
    const batchNumber = document.getElementById("batch-number").value;

    try{
        await addClassToDb(classSchedule, classTiming, teacherName, sectionName, courseName, batchNumber);
        swal({
            title: "Class Successfully Added!",
            icon: "success",
            timer: 3000
        });
    }catch(e){
        console.log(e.message)
    }
}
