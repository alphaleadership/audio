const fs = require('fs');
const ytdl = require('ytdl-core');
var scan =(url2,filename)=>{
    ytdl(url2)
    .pipe(fs.createWriteStream(`./video/${filename}.mp4`));console.log(`${filename} a bien été traité `)
}
module.exports = scan