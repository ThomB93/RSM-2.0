var stage;
function init() {
    stage = new createjs.Stage("kort");

    addImage("https://videnpiloterne.dk/wp-content/uploads/2016/01/rksk-web.png", 0.65, 0.65, 0, 0);
    addImage("http://www.gratisskole.dk/sdata/minipic/008/00887-300.png", 0.25, 0.25, 250, 250);
    addImage("https://img.clipartfest.com/d57989e2bab24e922d1777fb69ffcccc_windmill20clipart-clipart-wind-mill-clip-art_199-199.png", 0.4, 0.4, 335, 100);
    addImage("http://www.gratisskole.dk/sdata/minipic/000/00068-300.png", 0.25, 0.25, 30, 375);
    addImage("http://www.clipartbest.com/cliparts/RTd/GoM/RTdGoMGT9.svg", 0.225, 0.225, 100, 75);

    function addImage(url, scaleX, scaleY, locX, locY) {
        var image = new Image();
        image.src = url;
        image.onload = function() {
            var imageBitmap = new createjs.Bitmap(image);
            imageBitmap.x = locX;
            imageBitmap.y = locY;
            imageBitmap.scaleX=scaleX;
            imageBitmap.scaleY=scaleY;
            stage.addChild(imageBitmap);
            stage.update();
        }    
    } 
}
/* kirke.addEventListener("click", function(evt){
    console.log("der bliv klikket på billedet");
    window.location ="www.google.dk";   
})*/