


// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the login form
//     const email = document.querySelector('#userEmail').value.trim();
//     const password = document.querySelector('#userPassword').value.trim();
//     console.log(email,password)
  
//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//           console.log("we are logged in")
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/api/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);