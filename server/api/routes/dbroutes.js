import express from 'express';
import parcelDbController from '../controllers/parcelDBController';
import userDbControllers from '../controllers/userDBcontroller';
import Auth from '../helpers/auth';


const dbRoutes = express.Router();

// Get all parcles
dbRoutes.get('/api/v2/parcels', Auth.verifyToken, parcelDbController.getAllParcels);

// Get any Parcel By Id
dbRoutes.get('/api/v2/parcels/:Pid', Auth.verifyToken, parcelDbController.getParcelById);

// create a new parcel
dbRoutes.post('/api/v2/parcels', Auth.verifyToken, parcelDbController.createParcel);

// changing destination of a parcel
dbRoutes.put('/api/v2/parcels/:Pid/destination', Auth.verifyToken, parcelDbController.changeParcelDestination);

// changing Status of a parcel
dbRoutes.put('/api/v2/parcels/:Pid/status', Auth.verifyToken, parcelDbController.changeParcelStatus);

// creating a new user
dbRoutes.post('/auth/signup', userDbControllers.userSignUp);

// loging in a user
dbRoutes.post('/auth/login', userDbControllers.userLogin);

export default dbRoutes;
