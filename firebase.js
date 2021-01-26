
function saveToFirebase() 
{
    const data = document.getElementById('emailForm').elements[0].value;
 

  if(ValidateEmail(data))
  {
    database.ref('emails').push({ email: data}).then(function(snapshot) {
      pass(); // some success method
      }, function(error) 
         {
            console.log('error' + error);
            fail(); // some error method
          });
     document.getElementById('frm1').reset();
  }

}

function ValidateEmail(mail) 
{
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        {
          pass();
          return (true);
        }
    else{
          fail();
          return (false);
          }
} 


function fail()
{

  $('#fail').finish().show().delay(1000).fadeOut(6000);

}
function pass()
{
 
$('#succ').finish().show().delay(1000).fadeOut(6000);

}


// generate stuff from firebase databases




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyCNaAQRfOLKjIMiIUXna4y9f1-vyFOZvXQ",
//     authDomain: "harrytaussig-dbf8e.firebaseapp.com",
//     projectId: "harrytaussig-dbf8e",
//     storageBucket: "harrytaussig-dbf8e.appspot.com",
//     messagingSenderId: "808291677606",
//     appId: "1:808291677606:web:3b2ace774e263291204b67",
//     measurementId: "G-T30LWKCDM7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCNaAQRfOLKjIMiIUXna4y9f1-vyFOZvXQ",
//     authDomain: "harrytaussig-dbf8e.firebaseapp.com",
//     projectId: "harrytaussig-dbf8e",
//     storageBucket: "harrytaussig-dbf8e.appspot.com",
//     messagingSenderId: "808291677606",
//     appId: "1:808291677606:web:3b2ace774e263291204b67",
//     measurementId: "G-T30LWKCDM7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-database.js"></script>