// Upload image function
const uploadImage = async (e) => {
  e.preventDefault();
  // File to upload
  const file = document.querySelector("#profileImage").files[0];
  console.log(file);

  // Error modal
  const modalElement = document.querySelector("#errorModal");
  errorModal = new bootstrap.Modal(modalElement, {
    keyboard: false,
  });

  // Show modal
  const showModal = (errorText) => {
    let errorTextElement = document.querySelector("#errorText");
    errorTextElement.textContent = errorText;
    errorModal.show();
  };

  // Check file selected
  let fileExtension = "";
  if (!file) {
    showModal("Please select a file");
    return;
    // Check file extension
  } else {
    fileExtension = file.name.split(".").pop();
    if (fileExtension !== "jpg" && fileExtension !== "png") {
      showModal("An image file must be selected. PNG or JPG only.");
      return;
    } else {
      // Check if file is bigger than 3MB
      // Get file size and convert to MB
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 3) {
        showModal("File must be smaller than 3MB");
        return;
      }
    }
  }

  console.log(fileExtension);

  // Read file
  const reader = new FileReader();
  reader.readAsDataURL(file);
  //
  reader.onloadend = async function () {
    const request = {
      image: reader.result,
      extension: fileExtension,
    };

    // User profile ID
    const id = document.querySelector("#profileImage").getAttribute("data-id");

    const response = await fetch(`/api/profile/upload/${id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      //   body: JSON.stringify({ photo: "hello" }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setTimeout(() => {
        location.replace("/profile");
      }, 200);
    } else {
      showModal(response.statusText);
    }
  };
};

document.querySelector("#saveImageBtn").addEventListener("click", uploadImage);

// //
// document.getElementById("file-submit").addEventListener("click", addPhoto);
// async function addPhoto(e) {
//   e.preventDefault();

//   var files = document.getElementById("file-upload").files;
//   var file = files[0];
//   if (!files.length) {
//     return alert("Please choose a file to upload first.");
//   }
//   if (files.length > 1) {
//     return alert("Please choose just one file.");
//   }
//   let extn = file.name.split(".").pop();
//   if (extn !== "jpg" && extn !== "png" && extn !== "gif") {
//     return alert("Please choose an image file");
//   }

// var reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onloadend = async function () {
//   const request = {
//     profile_pic: reader.result,
//     extn: extn,
//   };

//   const response = await fetch("/api/users/profilepic", {
//     method: "POST",
//     body: JSON.stringify(request),
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     setTimeout(() => {
//       location.replace("/myprofile");
//     }, 200);
//   } else {
//     alert(response.statusText);
//   }
// };
// }
