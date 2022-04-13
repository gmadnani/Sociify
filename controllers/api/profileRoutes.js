const router = require("express").Router();
const { Profile } = require("../../models"); 

router.get('/', async (req, res) => {
    const profileData = await Profile.findAll().catch((err) => {
        res.json( err );
    });
    res.json(profileData);
});

router.get('/:id', async(req, res) => {
    const profileData = await Profile.findOne({ where: { id: req.params.id}}).catch((err) => {
        res.json(err);
    });
    res.json(ProfileData);
});

router.post("/createProfile", async (req, res) => {
    try{
        const newProfile = await Profile.create(req.body);

        res.status(200).json(newProfile);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.put("/editProfile", async ( req, res ) => {
//     try { 
//         const edit
//     }
// })