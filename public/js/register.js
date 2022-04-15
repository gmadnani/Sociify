const registerFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#RegisterEmail').value.trim();
    const password = document.querySelector('#RegisterPassword').value.trim();
    const name = document.querySelector('#RegisterName').value.trim();
    console.log(email, password, name)
  
    if (email && password && name) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          console.log("we are logged in")

          const newProfile = await fetch('/api/profile/createProfile', {
              method: 'POST'
          });
        // If successful, redirect the browser to the profile page
        document.location.replace('/editProfile');
      } else {
        alert(response.statusText);
      }
    }
  };
  

document
  .querySelector('.registerForm')
  .addEventListener('submit', registerFormHandler);