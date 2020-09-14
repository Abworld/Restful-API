const express = require("express");
const router = express.Router();

//
const RestSub = require("../models/restSub");
//retrieving details
router.get("/subscribers", (req, res, next) => {
  RestSub.find((err, subscribers) => {
    res.json({ subscribers });
  });
});

// adding post
router.post("/restSub", (req, res, next) => {
  let newdetails = new RestSub({
    group_name: req.body.group_name,
    candidate_name: req.body.candidate_name,
    phone_no: req.body.phone_no,
  });

  newdetails.save((err, restSub) => {
    if (err) {
      res.json({ msg: `${err}  cannot be processed!` });
    } else {
      res.json({ msg: " restSub successfully posted" });
    }
  });
});
//Getting all
router.get("/", (req, res) => {
  res.send("<h2>Hello world on router</h2>");
});
//Getting one ID
router.get("/:id", (req, res) => {
  RestSub.findById(req.params.id)
    .then((rest) => res.json(rest))
    .catch((err) => res.status(400).json("Error:" + err));
});
//Creating One
router.post("/", (req, res) => {
  //
});
// Updating One
router.post("/restSub/:id", (req, res, next) => {
  RestSub.findById(req.params.id)
    .then((restSub) => {
      restSub.group_name = req.body.group_name;
      restSub.candidate_name = req.body.candidate_name;
      restSub.phone_no = Number(req.body.phone_no);
      restSub
        .save()
        .then(() => res.json({ msg: " restSub successfully updated" }))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

//Deleting One
router.delete("/restSub/:id", (req, res, next) => {
  RestSub.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ msg: "restSub successfully deleted" });
    }
  });
});

module.exports = router;
