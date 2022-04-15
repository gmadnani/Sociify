const router = require("express").Router();
const { Profile } = require("../../models");
const withAuth = require("../../utils/auth");

// AWS S3 setup
const AWS = require("aws-sdk");
const fs = require("fs");
// Initialise S3 interface
const s3 = new AWS.S3();
// Bucket name
const BUCKET_NAME = "sociify-profile-photos";

router.get("/", async (req, res) => {
  const profileData = await Profile.findAll().catch((err) => {
    res.json(err);
  });
  res.json(profileData);
});

router.get("/:id", async (req, res) => {
  const profileData = await Profile.findOne({
    where: { id: req.params.id },
  }).catch((err) => {
    res.json(err);
  });
  res.json(profileData);
});

router.post("/createProfile", withAuth, async (req, res) => {
  try {
    const newProfile = await Profile.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProfile);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/editProfile/:id", withAuth, async (req, res) => {
  try {
    const editProfile = await Profile.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(editProfile);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edit photo
router.put("/editPhoto/:id", withAuth, async (req, res) => {
  try {
    const editPhoto = await Profile.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(editPhoto);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Upload photo
router.put("/upload/:id", async (req, res) => {
  const file = Buffer.from(
    req.body.image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const extension = req.body.extension;
  const imageKey = req.session.user_id + "." + extension;

  // Setting up S3 upload parameters
  const params = {
    Bucket: BUCKET_NAME,
    Key: imageKey,
    Body: file,
    ContentEncoding: "base64",
    ContentType: "image/" + extension,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });

  try {
    const newImage = await Profile.update(
      {
        photo: `https://sociify-profile-photos.s3.eu-west-2.amazonaws.com/${req.session.user_id}.${extension}`,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(newImage);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const [affectedRows] = await Profile.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(400).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/privacy", withAuth, async (req, res) => {
  const privacyChange = await Profile.findOne({
    where: { user_id: req.session.user_id },
    attributes: ["id", "privacy"],
  });
  if (privacyChange.privacy == "private") {
    privacyChange.privacy = "public";
  } else {
    privacyChange.privacy = "private";
  }
  privacyChange.save();

  res.status(200).json(privacyChange);
});

module.exports = router;
