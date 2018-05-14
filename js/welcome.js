var images = [
    "images/alexis-brown-85793-unsplash.jpeg",
    "images/naassom-azevedo-541451-unsplash.jpeg",
    "images/shanique-wright-368291-unsplash.jpeg",
    "images/stephen-cook-373395-unsplash.jpg",
    "images/tu_1.jpeg"
  ];
var $body = $("body"),
$bg = $("#bg"),
n = images.length,
c = 0; // Loop Counter

// Preload Array of images...
for(var i=0; i<n; i++){
var tImg = new Image();
tImg.src = images[i];
}

$body.css({backgroundImage : "url("+images[c]+")"}); 

(function loopBg(){
$bg.hide().css({backgroundImage : "url("+images[++c%n]+")"}).delay(3000).fadeTo(1200, 1, function(){
$body.css({
backgroundImage : "url("+images[c%n]+")"

});

loopBg();
});
}());