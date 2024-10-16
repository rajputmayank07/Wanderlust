 //Index Route
 const express= require("express");
 const router= express.Router({mergeParams:true});
 const wrapAsync=require("../utils/wrapAsync.js");
 const Listing = require("../models/listing.js");
 const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const { index, renderNewForm, showListing, createListing, editListing, updateListing, deleteListing } = require("../controllers/listings.js");

const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

//index and create route
router.route("/")
.get(wrapAsync(index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(createListing));

//New Route
router.get("/new",isLoggedIn, renderNewForm);

//show update and delete route
router.route("/:id")
.get(isLoggedIn, wrapAsync(showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing, wrapAsync(updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(deleteListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(editListing));
  
module.exports=router;