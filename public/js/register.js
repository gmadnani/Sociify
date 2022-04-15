const registerFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector("#registerName").value.trim();
  const email = document.querySelector("#registerEmail").value.trim();
  const password = document.querySelector("#registerPassword").value.trim();
  const confirmPassword = document
    .querySelector("#confirmPassword")
    .value.trim();

  const confirmPassError = document.querySelector("#passwordHelp");

  if (password !== confirmPassword) {
    confirmPassError.classList.remove("d-none");
  }

  if (email && password && name && password === confirmPassword) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("we are logged in");

      const newProfile = await fetch("/api/profile/createProfile", {
        method: "POST",
      });
      // If successful, redirect the browser to the profile page
      document.location.replace("/editProfile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".registerForm")
  .addEventListener("submit", registerFormHandler);
