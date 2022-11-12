import {signinFirebase} from '../config/firebase.js';

window.signin = async function(){

    // getting user email and password from the field

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        await signinFirebase(email, password);
        await swal({
            title: "Successfully Login",
            icon: "success",
            button: "Ok",
            timer: 3000
          });

          window.location.href="../views/admin-panel/admin-panel.html";
        
    }catch(e){
        await swal({
            title: "Invalid",
            icon: "error",
            button: "Ok",
            timer: 3000,
            text: "Please Enter Valid Info"
          });
    }

}


window.test = function(){
    alert("Hello");
}
