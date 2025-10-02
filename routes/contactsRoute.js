const express = require("express")
const router = express.Router()

router.route("/").get( (req, res) =>{
  res.status(200).json({message:"Get all Contacts"})
})

router.route("/").post( (req, res) =>{
  res.status(200).json({message:"create Contact"})
})

router.route("/:id").get((req, res) =>{
  res.status(200).json({message:`Get Contact for ${req.params.id}`})
})

router.route("/:id").put((req, res) =>{
  res.status(200).json({message:`update Contact for ${req.params.id}`})
})

router.route("/:id").delete( (req, res) =>{
  res.status(200).json({message:`Delete contacts ${req.params.id}`})
})
module.exports = router;
