const http = require("http");
const url = require("url");
const port = 8000;

const requestHandler = (request, response) => {
  const exampleUrl = `http://localhost:8000/?name=bernard&city=liverpool`;
  const parsedUrl = url.parse(exampleUrl, false);
  const name = parsedUrl.query;
  const city = parsedUrl.query;
  const urlNoquery = "/about";
  console.log(parsedUrl.query);

  if (request.url === "/") {
    response.end(`Hello`);
  } else if (request.url === urlNoquery) {
    response.end("this is all about you always wants to know");
  } else if (request.url == "?name" || request.url == "?city") {
    const parsedUrl = url.parse(response, true);
    response.end(`Hello, ${name} from ${city}`);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error("something bad happened");
  } else {
    console.log(`server is listening on ${port}`);
  }
});

//const exampleUrl = "/about?name=Jane&city=Boston";
//const parsedUrl = url.parse(exampleUrl, true);
//console.log("parsed query string");
//console.log(parsedUrl.query);
//const urlNoquery = "/about";
//const parsedUrlNoQuery = url.parse(urlNoquery, true);
//console.log(parsedUrlNoQuery.query);
