var express				=require("express"),
    app 				= express(),
    bodyParser			=require("body-parser"), 
    mongoose 			=require("mongoose"),
	passport 			=require("passport"),
	LocalStrategy		= require("passport-local"),
	Campground 			= require("./models/campground"),
	Comment  			=require("./models/comment"),
	User				= 	require("./models/user"),
	seedDB    			= require("./seeds");

// requring routes

var commentRoutes 		= require("./routes/comments"),
	campgroundRoutes	= require("./routes/campgrounds"),
	indexRoutes			= require("./routes/index");

//seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

//passport configuration
app.use(require("express-session")({
	secret: "shubham kumar puri",
	resave: false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
});

app.use(indexRoutes);
app.use(commentRoutes);
app.use(campgroundRoutes);
app.listen(8000,function(){
	console.log("serving demo on port 8000");
});