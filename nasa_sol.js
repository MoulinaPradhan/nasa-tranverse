var solItem=$('#sol');
var pageItem=$('#pade');
var nasaImages=$('#nasa-images')

$('button').click(function(e){
    e.preventDefault();
    let sol=solItem.val();
    let page=pageItem.val();
    
    if(sol==="" || page===""){
        alert('Please fill the required field');
    }
let url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page=" + page + "&api_key=DEMO_KEY";
$.get(url,function(data){
    let photos= data.photos;
    for(let photo of photos){
        nasaImages.append('<img src="'+ photo.img_src + '" alt="' + photo.id +'">');  
       }
    if(photos.lenght===0){
        alert("there is no photo");
     
    } 
})


})
