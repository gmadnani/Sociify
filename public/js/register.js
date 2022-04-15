


const registerFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#nameEmail').value.trim();
    const email = document.querySelector('#registerEmail').value.trim();
    const password = document.querySelector('#registerPassword').value.trim();
    console.log(name,email,password)
  
    if (email && password && name) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          console.log("we are logged in")
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  

document
  .querySelector('.registerForm')
  .addEventListener('submit', registerFormHandler);