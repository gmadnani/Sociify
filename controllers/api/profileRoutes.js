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
    res.json(profileData);
});

router.post("/createProfile", async (req, res) => {
    try{
        const newProfile = await Profile.create( );

        // console.log("hello", newProfile)
        res.status(200).json(newProfile);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/editProfile", async ( req, res ) => {
    try { 
        const editProfile = await Profile.update( req.body );
        // const editProfile = await Profile.update( req.body, {
        //     where: { 
        //         user_id: req.session.user_id,
        //     },
        // });
        res.status(200).json( editProfile )
    } catch (err) {
        res.status(400).json( err );
    }
});

router.put( "/editPhoto", async ( req, res ) => {
    try{
        const editPhoto = await Profile.update ( req.body);
        res.status(200).json( editPhoto );
    } catch (err) {
        res.status(400).json( err );
    }
});

router.delete( "/:id", async (req, res) => {
    const [affectedRows] = await Profile.destroy({
        where: {
            id: req.params.id,  
        },
    });

    if (affectedRows > 0) {
        res.status(200).end();
    } else {
        res.status(500).json(err);
    }
});

// router.post("/privacy", async (req, res) => {
//     const privacyChange = await Profile.findAll( { attributes: ['id', 'privacy']});
//     // const privacyChange = await Profile.update( req.body, {
//     //     where: { 
//     //         user_id: req.session.user_id,
//     //     },
//     // });
//     res.status(200).json(privacyChange);
// })

module.exports  = router; 
