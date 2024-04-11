import fs from "fs";

const file = fs.readdirSync("./");

fs.readdir("$", (err, file) => {
  if (err) console.log(err);
  console.log(file);
});
