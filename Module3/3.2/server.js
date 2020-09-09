const express= require("express")
const nunjucks=require("nunjucks")

const server= express()
const pages=require("./data")

server.use(express.static("public"))

server.set("view engine","njk")
nunjucks.configure("views",{
  express:server,
  autoescape:false
})

server.get("/", function(req,res){
  const about={
    avatar_url:"https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg",
    company:"Rocketseat",
    company_url:"https://rocketseat.com.br/",
    intro:"E-learning platform in technology",
    technologies: [
      {avatar_tech:"https://xesque.rocketseat.dev/platform/tech/javascript.svg", name:"JavaScript"},
      {avatar_tech:"https://xesque.rocketseat.dev/platform/tech/node.svg", name:"NodeJS"},
      {avatar_tech:"https://xesque.rocketseat.dev/platform/tech/reactjs.svg", name:"ReactJS"},
      {avatar_tech:"https://xesque.rocketseat.dev/platform/tech/react-native.svg", name:"React Native"}
    ],
    links: [
      { media_img:"https://www.emmagilhuly.com/assets/img/github.png", media_url:"https://github.com/Rocketseat", media_name:"Github"},
      { media_img:"https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/INSTAGRAM-512.png", media_url:"https://www.instagram.com/rocketseat_oficial/?hl=en", media_name:"Instagram"},
      { media_img:"https://www.cfdiocese.org/wp-content/uploads/2015/04/facebook-icon-grey.png", media_url:"https://www.facebook.com/rocketseat/", media_name:"Facebook"}
    ]
  }
  return res.render("about",{about})
})

server.get("/courses", function(req,res){
  return res.render("courses", {items:pages})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log("wow, I'm learning")
})
