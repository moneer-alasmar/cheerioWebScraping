const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops",
  (err, res, html) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteHeading = $(".caption");

      // console.log(siteHeading.html());
      // console.log(siteHeading.text());
      // console.log(siteHeading.find("a").text());
      // console.log(siteHeading.children("h4").text());
      // const output = siteHeading
      //   .children("h4")
      //   .next()
      //   .text();
      // console.log(output);

      // LOOPING THROUGH ITEMS
      $(".menuitm").each((index, element) => {
        const item = $(element).text();
        const link = $(element).attr("href");
        console.log(item);
      });
    }
  }
);
