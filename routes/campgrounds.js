var express		= require("express");

 var router		= express.Router();
 var Campground  	=require("../models/campground");



router.get("/campgrounds",function(req,res){
	Campground.find({},function(err,allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/Index.ejs",{campgrounds:allCampgrounds, currentUser: req.user});
		}
	});
	
});

router.get("/campgrounds/new", isLoggedIn, function(req,res){
	res.render("campgrounds/new"); 
});
router.post("/campgrounds", isLoggedIn ,function(req,res){
	var name =req.body.name;
	var image = req.body.image;
	var desc =req.body.description;
	//console.log(req.user);
	var author= {
		id : req.user._id,
		username: req.user.username
	}; 
	var newCampground={
		name: name, 
		image:image,
		description :desc,
		author : author
	};
	//campgrounds.push(newCampground);
	Campground.create(newCampground, function(err,newlyCreated){
		if(err){
			console.log(err);
		}else{
			console.log(newlyCreated);
			res.redirect("/campgrounds");
		}
	});
	
});
//shows info about single camp round
router.get("/campgrounds/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec( function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			
			res.render("campgrounds/show",{campground:foundCampground});
		}
	});
	
	// res.send("THIS WILL BE THE SHOW PAGE ONE DAY");
});


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}



module.exports= router; 