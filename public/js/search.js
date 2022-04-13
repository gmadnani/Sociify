// Function to filter users by search bar
const searchFilter = () => {
  const input = document.querySelector("#search");
  filter = input.value.toUpperCase();
  const profiles = document.querySelectorAll(".profile");
  // For each profile filter out if it does not match search
  profiles.forEach((profile) => {
    user = profile.textContent || a.innerText;
    if (user.toUpperCase().indexOf(filter) > -1) {
      profile.style.display = "";
    } else {
      profile.style.display = "none";
    }
  });
};

// Add event listener to search box
document.querySelector("#search").addEventListener("input", searchFilter);
