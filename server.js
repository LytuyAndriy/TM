var express=require('express')
var app=express();
app.use(express.static(__dirname)); //без цього не запуститься CSS і буде помилка 404!!!

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');

})
app.listen(8080);
console.log('Server run!');