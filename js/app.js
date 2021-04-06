var images = [
    'https://res.cloudinary.com/du4mbzbao/image/upload/v1617092387/Bikers%20club/listings-home_pf8hpd.jpg',
    'https://res.cloudinary.com/du4mbzbao/image/upload/v1617092465/Bikers%20club/offers_v22tar.jpg',
    'https://res.cloudinary.com/du4mbzbao/image/upload/v1617092465/Bikers%20club/reviews_qwzvgj.jpg',
    'https://res.cloudinary.com/du4mbzbao/image/upload/v1617092427/Bikers%20club/featured_e0iwsx.jpg',
];

var myVar = setInterval(next, 5000);

var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}


var textArr=[
    'Inventory 🏢',
    'our best offers 🚀',
    'sell us 🧭'
];


var n=0;

var textTimer=setInterval(slidertext,7000);

function slidertext()
{
   var sliderText=document.getElementById('slidertext');
   n++;
   if (n>=textArr.length) {
       n=0;
   }
   sliderText.innerHTML=textArr[n];   
}
