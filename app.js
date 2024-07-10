
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    signOut 
        } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCONkXlkPecjbkqujwGeLJ2df63-1aE-oc",
    authDomain: "first-project-646af.firebaseapp.com",
    projectId: "first-project-646af",
    storageBucket: "first-project-646af.appspot.com",
    messagingSenderId: "849285449116",
    appId: "1:849285449116:web:653562c3bdfa43c9833459",
    measurementId: "G-KW0RMVSYP8"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 const auth = getAuth(app);

 const sign_up = document.getElementById("sign_up"); 
 const signup_pswrd = document.getElementById("signup_pswrd"); 
 const signup_btn = document.getElementById("signup_btn"); 
  signup_btn.addEventListener("click",createaccount);
  const one_cont= document.getElementById("one_cont");
  const two_cont = document.getElementById("two_cont");
  const three_cont = document.getElementById("three_cont");

onAuthStateChanged(auth, (user) => {
  const body= document.getElementById("body");
  if (user) {
    const uid = user.uid;
     one_cont.style.display="none";
     two_cont.style.display="block";
     body.style.backgroundImage =`url(https://t3.ftcdn.net/jpg/03/09/21/90/360_F_309219079_o7hZNE1dT8JUXGIsPNT3bW7906g4tj0Y.jpg)`
     body.style.backgroundSize=`90rem`;  
     body.style.backgroundPositionX;

     
     alert(`Sign_In`); 

    } else {
      one_cont.style.display="block";
      two_cont.style.display="none";
      body.style.backgroundImage =`url(https://static.vecteezy.com/system/resources/previews/010/925/820/non_2x/colorful-welcome-design-template-free-vector.jpg)`
      body.style.backgroundSize=`90rem`
      body.style.backgroundPositionX;
      

      alert(`Sign_out`); 
      
 
    
    }
    }
  );

  function createaccount(){
      createUserWithEmailAndPassword(auth, sign_up.value, signup_pswrd.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  
  });
  }
  
  const Sign_In = document.getElementById("Sign_In"); 
  const signin_pswrd = document.getElementById("signin_pswrd"); 
  const signin_btn = document.getElementById("signin_btn"); 
  signin_btn.addEventListener("click",signin_account)
  
  function signin_account(){

    signInWithEmailAndPassword(auth, Sign_In.value, signin_pswrd.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`wclome${user.email}`)
      
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

}
let Sign_Out = document.getElementById("Sign_Out"); 
Sign_Out.addEventListener("click",sig_out)


 function sig_out(){
 console.log(sig_out)
  // const auth = getAuth(app);
  signOut(auth).then(() => {
  
 })
 .catch((error) => {
     });

 };







  
  
