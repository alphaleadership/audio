


var uuid = require("uuid")
var path  =`${process.env.APPDATA}/data/`+ uuid.v4()+".json"
const fs = require('fs');
var writer = (url,filename)=>{
let data = `{
    "url":"${url}",
    "filename":"${filename}"
}`;
  
fs.writeFile(path, data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log(path)
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync(path, "utf8"));
  }
});}
module.exports=writer