var mongoose =require("mongoose");

var Campground = require ("./models/campground");

var Comment 	=require("./models/comment");  
var data=[
		{
			name:"Shubhams 1",
			image:"https://www.w3schools.com/w3images/fjords.jpg",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			name:"Shubhams 2",
			image:"http://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			name:"Shubhams 3",
			image:"https://www.w3schools.com/w3css/img_lights.jpg",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
]
function seedDB(){
	//remove all campgrounds
	Campground.remove({},function(err){
	if(err){
		console.log(err);
	}
	console.log("removed everything");

			//Adding few campgrounds
			// data.forEach(function(seed){
			// 	Campground.create(seed, function(err, campground){
			// 		if(err){
			// 			console.log(err);
			// 		}else{
			// 			  console.log("added data");
			// 			  //create a comment
			// 			  Comment.create({
			// 			  	text:"this is awesome place ",
			// 			  	author:"shubham"
			// 			  },function(err, comment){
			// 			  	if(err){
			// 			  		console.log(err);
			// 			  	}else{
			// 			  		campground.comments.push(comment);
			// 				  	campground.save();
			// 				  	console.log("comment added");

			// 	 		  	}
						  	 
			// 			  });
			// 		}
			// 	});
			// });
	});
	
}

module.exports = seedDB;