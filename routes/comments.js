var express		= require("express");

 var router		= express.Router();

var Campground  	=require("../models/campground");
var Comment 		=require("../models/comment");

router.get("/campgrounds/:id/comments/new", isLoggedIn ,function(req,res){
	//find campfground by id
	Campground.findById(req.params.id, function(err,campground){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new",{campground: campground});
		}
	});
	
});

router.post("/campgrounds/:id/comments",isLoggedIn ,function(req,res){
	//looking campground using Id
	Campground.findById(req.params.id, function(err,campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}else{
			//console.log(req.body.comment);
			Comment.create(req.body.comment,function(err, comment){
				
				if(err){
					console.log(err);
				}else{
					comment.author.id =req.user._id;
					comment.author.username=req.user.username;
					 comment.save();
					 campground.comments.push(comment);
					 campground.save();
	               
					res.redirect('/campgrounds/'+ campground._id);
				}
			});
			}
	});
	//create new comment
	//connect new  campground 
});


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}


module.exports = router;