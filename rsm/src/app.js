var stage;
function init() {
    stage = new createjs.Stage("kort");
    var images = [];

    addImage("/assets/images/kort.png", 0.65, 0.65, 0, 0);
    addImage("/assets/images/kirke.png", 0.25, 0.25, 250, 250);
    addImage("/assets/images/mølle.png", 0.4, 0.4, 335, 100);
    addImage("/assets/images/skib.png", 0.25, 0.25, 30, 375);
    addImage("/assets/images/hestesko.png", 0.3, 0.3, 100, 75);

    function addImage(url, scaleX, scaleY, locX, locY) {
        var image = new Image();
        image.src = url;
        image.onload = function() { //indsæt kun billede når det er loadet
            var imageBitmap = new createjs.Bitmap(image);
            imageBitmap.x = locX;
            imageBitmap.y = locY;
            imageBitmap.scaleX=scaleX;
            imageBitmap.scaleY=scaleY;
            images.push(imageBitmap);
            
            stage.addChild(imageBitmap);
            stage.update();
        }    
    }

    /*images.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log("image clicked");
        });
    });*/
    
}