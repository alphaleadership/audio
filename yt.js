const fs = require('fs');
const ytdl = require('ytdl-core');const ffmpeg = require("ffmpeg") 
var scan =async(url2,filename)=>{
    var path = "./video/"+filename
    
    
    await ytdl(url2)
    .pipe(fs.createWriteStream(path+".mp4"));
}

module.exports = scan
