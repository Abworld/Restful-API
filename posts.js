const express = require("express");
const router = express.Router();

const Posting = require("../models/postmodel");
//retrieving details
// router.route("/posts").get((req, res) => {
//   User.find()
//     .then((posts) => res.json(posts))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
router.get("/posts", (req, res, next) => {
  Posting.find((err, posts) => {
    res.send;
    res.json({ posts });
  });
});
// router.get("/", (req, res) => {
//   Posting.find()
//     .then((posts) => res.json(posts))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// adding post
router.post("/posts", (req, res, next) => {
  let infoDetails = new Posting({
    location: req.body.location,
    email: req.body.email,
    name: req.body.name,
    comment: req.body.comment,
    //attachement: File(req.body.attachement),
  });

  infoDetails.save((err, posts) => {
    if (err) {
      res.json({ msg: `${err}  cannot be processed!` });
    } else {
      res.json({ msg: " Post successfully posted" });
    }
  });
});
//Getting one ID
router.get("/:id", (req, res) => {
  Posting.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error:" + err));
});
// Updating One
router.post("/posts/:id", (req, res, next) => {
  Posting.findById(req.params.id)
    .then((posts) => {
      posts.location = req.body.location;
      posts.email = req.body.email;
      posts.name = req.body.name;
      posts.comment = req.body.comment;
      posts
        .save()
        .then(() => res.json({ msg: " posts successfully updated" }))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
