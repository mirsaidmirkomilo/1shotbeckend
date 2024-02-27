const { Router, request } = require('express');
const router = Router();
const User = require('../models/user');

// get
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.massage);
  }
});
// get

//post
router.post('/', async (req, res) => {
  const { name } = req.body;

  let user = await User.findOne({ name });
  if (user) return res.send('bu user uje bor!!');

  user = new User(req.body);
  await user.save();

  res.send('Fortinayt ili pabbji | ??');
});
//post



//getbyid

router.get(`/:_id`, async (req, res) => {
  try {
    const users = await User.findById(req.params._id);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.massage)
  }
})

//getbyid

//delete

router.delete(`/:_id`, async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params._id })
    res.send(`quidagi produkt : ${req.params._id} delete boldi`)
  } catch (error) {
    console.log({
      error,
      massage: "delete iwlamadi"
    })
  }
})

//delete


// patch
  router.patch(`/:_id`, async (req, res) => {
    try {
      const _id = req.params._id 
      const updUser = req.body

      const result = await User.findByIdAndUpdate(_id, updUser)
      res.send(result)

    } catch (error) {
      console.log({
        error,
        massage: "exxeeee kodlarinda xatoli borku jiyan"
      });
      
    }
  })
 

// put



module.exports = router;