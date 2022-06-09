const express = require("express");

const app = express();

// Route for debugging purposes
app.all("*", (request, response) => {
  console.log(
    [
      `Got unhandled request ${request.method} ${request.url}`,
      "Headers",
      JSON.stringify(request.headers, null, 2),
      "Body",
      JSON.stringify(request.body, null, 2),
    ].join("\n")
  );
  response.sendStatus(404);
});

app.listen(7576, '0.0.0.0', () => {
  console.log("Started APERF server on port 7576");
});
