var button = document.getElementById("btn");
console.log(button);
button.innerText="Cricket"

button.addEventListener("click", () => {
  var image = document.getElementById("image1");
  image.src =
    "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=";
});

var human = document.getElementById("brain");
human.innerText="Human Brain"
human.addEventListener("click", () => {
  var image = document.getElementById("image1");
  image.src =
    "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg";
  image.style.height = "430px";
});

var architech = document.getElementById("architect");
architech.innerText="Architect";

architech.addEventListener("click",()=>{
    var image=document.getElementById("image1");
    image.src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?cs=srgb&dl=pexels-pixabay-262367.jpg&fm=jpg";
    image.style.height="400px";
    image.style.width="500px"
})


var photo=document.getElementById("photo");
photo.innerText="Photography";

photo.addEventListener("click",()=>{
    var image=document.getElementById("image1");
    image.src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/339831623/original/145fb5632cedf94b31bfe54344b55d2194547ee8/take-a-product-photo-and-edit-it.jpg";
    image.style.height="400px"
})