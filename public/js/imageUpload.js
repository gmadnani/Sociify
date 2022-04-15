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
        location.replace("/editProfile");
      }, 200);
    } else {
      showModal(response.statusText);
    }
  };
};

document.querySelector("#saveImageBtn").addEventListener("click", uploadImage);
