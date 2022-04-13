const AWS = require("aws-sdk");
const fs = require("fs");

// Initialise S3 interface
const s3 = new AWS.S3();

// Bucket name
const BUCKET_NAME = "sociify-profile-photos";

// Upload file function
const uploadFile = (file, name) => {
  // Read content from the file
  const fileContent = fs.readFileSync(file);

  // Setting up S3 upload parameters
  const params = {
    Bucket: BUCKET_NAME,
    Key: name, // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

// Run upload function
// uploadFile("./public/img/profile-placeholder.png");

module.exports = {
  uploadFile,
};
