[![Build Status](https://travis-ci.org/kwizeraelvis/SendIT.svg?branch=develop)](https://travis-ci.org/kwizeraelvis/SendIT)    [![Coverage Status](https://coveralls.io/repos/github/kwizeraelvis/SendIT/badge.svg?branch=develop)](https://coveralls.io/github/kwizeraelvis/SendIT?branch=develop)

# SendIT

### SendIt is a courier service that helps users deliver parcels to over 220 locations WorldWide.

### Built Using

## UI/Frontend

- HTML
- CSS
- Javascript

## Backend

- Express
- Nodejs

### Features Available

- User can Signup for SendIT
- User can login to their account
- User can create a parcel delivery order
- User can change the destination or a cancel a parcel delivery order
- Users can view details about the orders they ahve created

### Installation

- Fork this repo to your local storage.
- Run npm install to install diffrent dependencies needed for functioning
- Run npm run devstart to start the API server
- N.B. More commands can be found in the package.json 

### Available API Endpoints

| EndPoint                                    | Functionality                                         |
|:--------------------------------------------|:------------------------------------------------------|
|GET /api/v1/parcels                          | Gets all parcels available                            |
|GET /api/v1/parcels/:pid                     | Gets a specific parcel by Id                          |
|POST /api/v1/parcels                         | Creates a Parcle delivery Order                       |
|PUT /api/v1/parcels/:Pid/update/status       | Updates the parcel status of any specified parcel     |
|PUT /api/v1/parcels/:Pid/update/destination  | Updates the destination of a specifred parcel         |
-------------------------------------------------------------------------------------------------------

## Database Endpoints

| EndPoint                                    | Functionality                                         |
|:--------------------------------------------|:------------------------------------------------------|
|GET /api/v2/parcels                          | Fetch all PArcels in database                         |
|GET /api/v2/parcels/:Pid                     | Fetch a specified parcel from database                |
|POST /api/v2/parcels                         | Create a new parcel                                   |
|PUT /api/v2/parcels/:Pid/destination         | Changes Destination for parcel in database            |
|PUT /api/v2/parcels/:Pid/status              | Changes status for parcel in database                 |
|POST /auth/signup                            | Creates a user account                                |
|POST /auth/signin                            | Allows registered user to login into sendIT           |
-------------------------------------------------------------------------------------------------------
