//switch the user privacy for public to private and vice versa
const privacyUpdate = async (e) => {
  e.preventDefault();

  const response = await fetch(`/api/profile/privacy`, {
    method: "PUT",
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
