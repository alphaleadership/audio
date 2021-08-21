const yt = require("./yt")
const fs = require("fs")
const add = require("./add") 
const path =process.env.APPDATA
if(!fs.existsSync(`${path}/data`)){
  fs.mkdirSync(`${path}/data`, 0766, function(err){
      if(err){
          console.log(err);
          // echo the result back
          response.send("ERROR! Can't make the directory! \n");
      }
  });
}
if(!fs.existsSync("./video")){
  fs.mkdirSync("./video", 0766, function(err){
      if(err){
          console.log(err);
          // echo the result back
          response.send("ERROR! Can't make the directory! \n");
      }
  });
}
var args =process.argv.slice(2)
console .log()
var action =args[0]
var type = args[1] 
var number = args[2]
if(action=="add"){add(type,number)} else
if(action=="clear"){
  fs.readdir(`${path}/data`, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log(path);
      files.forEach(file => {
        console.time(file)
        fs.unlinkSync(`${path}/data/${file}`)
       console.timeEnd(file)
  })}})
} else 
if(action=="use"){
  fs.readdir(`${path}/data`, (err, files) => {
      if (err)
        console.log(err);
      else {
        console.log(path);
        files.forEach(file => {
          console.time(file)
          let temp = require(`${path}/data/${file}`)
          yt(temp.url,temp.filename)
         console.timeEnd(file)
    })}})}

