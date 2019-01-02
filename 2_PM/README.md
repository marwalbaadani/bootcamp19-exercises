# Day 2, PM Exercise: Node.js - Modules, NPM, and External APIs

## GeoExplorer

### Specification:

We will be using our new skills with Node.js to create a few programs which hook up to the Google Maps API. The objection of this exercise is to familiarize you with working on a Node.js project, working with external packages, and importing/exporting between different files.

You will create an account on the Google Maps API, initialize a Node.js repository, hook it up to the Google Maps Places API, and then bring it all together by writing a Node.js program which takes in a placename via the command line and then prints information about that place back out to the user.

### Stages

1. Initialize Node.js repository

- Before we start working with Google API, we must set up a Node environment first in order for us to successfully import their packages. This entails setting up a `package.json` file so that we can use npm functionality. Perhaps some form of `npm init` can help us here ...

2. Set up Google API account

- Google Maps has many different tools that JavaScript developers can use. We will be using their Places API, which is meant for situations where we need to query their database of places. We'll need to set up accounts to get API keys which allow us to communicate with this API Key. Go to https://developers.google.com/places/web-service/intro and follow the instructions to do so.

3. Import correct Google API services

- Now that we've set up a Google API key, we need to find the right packages to help connect our code to this API.
- Google Places API does work with raw HTTP requests - fetching data from a certain URL with certain parameters - but this proves difficult and tedious to code. Instead, this would be a good place to use a Node.js package built by someone else.
- https://github.com/googlemaps/google-maps-services-js is a good package endorsed by Google - follow the directions in its `README.md` to import it into the repository.
- Remember to add the `--save` flag to the `npm install` command when importing libraries for the first time.
- Now, we can use `require` statements whenever we need to access these services.

4. Config file:

- Oftentimes, when we hook up APIs, we want to store our API data away from the main logic so that there is a single source of truth. If we need to change the API Key, for example, it is easier to do this in one main file which is exported everywhere else, than to change it in many different locations where it is used. In `config.js`, add the API key to the object, and export the config object so that you can import it anywhere you need to use the API key.
- Furthermore, it is also not a great thing to hard-code API keys and other sensitive information into a repositorty should a security breach occur. In this situation, we often use environment variables to store such information. Environment variables are often declared through hosting platforms like Heroku and AWS and therefore the information does not appear in the code. Even though we're only running our code locally, we can simulate having environment variables through an environment file, `sample.env`, a file which would ideally only appear in development. Put your API key in `sample.env`.
- Once you've done that, run `cp sample.env .env` to set the current environment to the one provided in `sample.env`. You will now be able to access all environment variables through `process.env` (e.g. `process.env.ENV_VARIABLE`), and do exactly this to

5. Set up connection

- First, to use the Google Places API, we have to create a client object. This should be done in its own file, `google_api.js`. Read the `google-maps-services-js` docs (`docs/HOME.md`) to figure out how to do this, and then export this connection object from this file so that it can be used in other projects. It would be inefficient to create a new connection every time we needed to use the API. Yay for modularity!

6. Write a program which takes a place name and returns a formatted message (see below) about that place.

- In `placeinfo.js`, import the connection object made in `google_api.js`, and use it to query the Google Places API about the placename inputted via the command line.
- https://developers.google.com/places/web-service/search has information about the parameters and response shape of this desired query.
- https://github.com/googlemaps/google-maps-services-js/blob/master/docs/HOME.md has information about how you can make the query through the Node package.
- The following message should be printed out to the user: 'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.'
- We will have to use promises here to make API requests - read the bit in the `google-maps-services-js` docs (in `HOME.md`) about using promises, in the 'Making API Requests' section. You can use either `.then()` syntax or `async / await` syntax: see lecture from yesterday for examples.
- Make sure you handle errors correctly - the shape of the return object will be different if no results are returned.