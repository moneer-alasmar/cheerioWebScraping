const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// WRITE HEADERS
writeStream.write(`Title,Link,imgSrc \n`);

request("https://old.reddit.com/r/all/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    $(".top-matter").each((index, element) => {
      const title = $(element)
        .find(".title")
        .text();

      const link = $(element)
        .find("a")
        .attr("href");

      const imgSrc = $(element)
        .find("img")
        .attr("src");

      // WRITE ROW TO CSV
      writeStream.write(`${title}, ${link}, ${imgSrc} \n`);
    });
    console.log("Done scraping reddit :)");
  }
});
