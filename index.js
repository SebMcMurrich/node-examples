const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'
const axios = require('axios');


/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/hello/:name', (req, res) =>
  res.send({
    message: `Hello ${req.params.name}`
  })
)

/**
 * @api {get} /nasa Returns NASA’s Astronomy Picture of the Day
 * @apiName Nasa
 * @apiSuccess (200) {Json} nasa API Json object
 */
app.get('/nasa', (req, res) => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
