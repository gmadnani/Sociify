const editFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const  email= document.querySelector("#userEmail").value.trim();
    const  city= document.querySelector("#userCity").value.trim();
    const  country= document.querySelector("#userCountry").value.trim();
    const phone= document.querySelector("#userPhone").value.trim();
    const skills= document.querySelector("#userSkills").value.trim();
    const about= document.querySelector("#userAbout").value.trim();
    const experience= document.querySelector("#userExperience").value.trim();
    const hobbies= document.querySelector("#userHobbies").value.trim();
    const facebook= document.querySelector("#userFacebook").value.trim();
    const linkedin= document.querySelector("#userLinkedin").value.trim();
    const github= document.querySelector("#userGithub").value.trim();


  
      // Send a POST request to the API endpoint
      const response = await fetch("/api/profile/editProfile", {
        method: "Put",
        body: JSON.stringify({ email, city, country, phone, skills, about, experience, hobbies, facebook, linkedin, github }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("success");
  
        // If successful, redirect the browser to the profile page
        document.location.replace("/myProfile");
      } else {
        alert(response.statusText);
      }
  };
  
  document
    .querySelector(".editForm")

    document.querySelector("#save").addEventListener("click", editFormHandler)
  