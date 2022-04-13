const router = require("express").Router();
const { User } = require("../../models");
// Get all users route
router.get("/", async (req, res) => {
//   try {
//     // Get all users and JOIN with profile data
//     const userData = await Users.findAll({
//       include: [
//           {
//             model: User,
//             attributes: ["name"],
//           },
//           {
//             model: Profile,
//             // attributes: ["id", "content", "post_id", "user_id", "date_created"],
//             include: {
//               model: User,
//               attributes: ["name"],
//             },
//           },
//       ],
//     });

//     // Serialize data so the template can read it
//     const users = userData.map((user) => user.get({ plain: true }));
//     // Pass serialized data and session flag into template
//     res.render("all-profile", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
res.render('all-profile')
});
router.get('/edit',(req,res)=>{
    res.render('edit-profile')
})
router.get('/my-profile',(req,res)=>{
    res.render('my-profile')
})
router.get('/single',(req,res)=>{
    res.render('single-profile')
})
module.exports=router