const privacyUpdate = async (e) => {
  e.preventDefault();

  console.log("switch clicked");

  const response = await fetch(`/api/profile/privacy`, {
    method: "PUT",
    // body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    setTimeout(() => {
      location.replace("/editProfile");
    }, 200);
  } else {
    showModal(response.statusText);
  }
};

document
  .querySelector("#privacySwitch")
  .addEventListener("click", privacyUpdate);
