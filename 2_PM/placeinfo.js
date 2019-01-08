/* TODO: Write a program which takes in a place name via the command line and 
/ returns the distance, in kilometers, that place is from the current location */

const client = require('./google_api')

client.findPlace({input: process.argv[2], inputtype: 'textquery'})
  .asPromise()
  .then((response) => {
    const placeid = response.json.candidates[0].place_id
    client.place({placeid}).asPromise().then(response => {
        const {lat, lng} = response.json.result.geometry.location
        console.log(`${process.argv[2]} is located at coordinates ${lat}, ${lng}, at the address ${response.json.result.formatted_address}.`)
    }).catch(err => {
        console.log(err)
    })
  })
  .catch((err) => {
    console.log(err);
  });