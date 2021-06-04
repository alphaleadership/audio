const yt = require("./yt")
const fs = require("fs")

fs.readdir("./data", (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("vidéo");
      files.forEach(file => {
        let temp = require(`./data/${file}`)
        yt(temp.url,temp.filename)
      })
    }
  })
  process.exit()