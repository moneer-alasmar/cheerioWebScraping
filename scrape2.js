const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops",
  (err, res, html) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(html);

      $(".thumbnail").each((index, element) => {
        const title = $(element)
          .find(".title")
          .text();

        const link = $(element)
          .find("a")
          .attr("href");

        const imgSrc = $(element)
          .find("img")
          .attr("src");

        console.log(title, link, imgSrc);
      });
    }
  }
);
