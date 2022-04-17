const editFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#userEmail").value.trim();
  const city = document.querySelector("#userCity").value.trim();
  const country = document.querySelector("#userCountry").value.trim();
  const phone = document.querySelector("#userPhone").value.trim();
  const skills = document.querySelector("#userSkills").value.trim();
  const about = document.querySelector("#userAbout").value.trim();
  const experience = document.querySelector("#userExperience").value.trim();
  const hobbies = document.querySelector("#userHobbies").value.trim();
  const facebook_link = document.querySelector("#userFacebook").value.trim();
  const linkedin_link = document.querySelector("#userLinkedin").value.trim();
  const github_link = document.querySelector("#userGithub").value.trim();

  const id = document.querySelector("#profileImage").getAttribute("data-id");

  // Send a POST request to the API endpoint
  const response = await fetch(`/api/profile/editProfile/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      email,
      city,
      country,
      phone,
      skills,
      about,
      experience,
      hobbies,
      facebook_link,
      linkedin_link,
      github_link,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("success");

    // If successful, redirect the browser to the myProfile page
    document.location.replace("/myProfile");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".editForm");

document.querySelector("#save").addEventListener("click", editFormHandler);
