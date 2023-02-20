Webcam.attach("#camara")
camara =document.getElementById("camara")
Webcam.set({
    width :350,
    height:300,
    image_format:"png",
    png_quality:90
})
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = "<img id='selfie_img' src='"+data_uri+"' >"
    })
}
classifier=ml5.imageClassifier("",modelLoaded)
function modelLoaded() {
    console.log("modelo cargado")
}
function check() {
    img =document.getElementById("selfie_img")
    classifier.classify(img,gotResult)
}