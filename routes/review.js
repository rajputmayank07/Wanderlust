const express = require("express");
const router= express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review= require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const { createReview, deleteReview } = require("../controllers/reviews.js");

//Reviews
//Post reviews route
router.post("/",isLoggedIn,validateReview,wrapAsync(createReview));
  
// delete reviews route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(deleteReview));
  
module.exports=router;