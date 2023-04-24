https://teachablemachine.withgoogle.com/models/ZHW5MVO48/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classfier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZHW5MVO48/model.json",modelready);
}
function modelready(){
    classfier.classify(gotResult);
}
function gotResult(error,results){
 if(error){
    console.error(error);
 }
 else{
    console.log(results);
 }
}