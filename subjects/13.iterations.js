
for(var i=0; i<10; i++){
    console.log(i);
}
for(var i=10; i>0; i--){
    console.log(i);
}
var cities = ["İstanbul", "İzmir", "Ankara"];
var text = "";
for(var i=0; i<cities.length; i++){
    text += cities[i] + ' ';
}
console.log(text);
// text value will be İstanbul İzmir Ankara 