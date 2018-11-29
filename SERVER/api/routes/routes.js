import express from 'express';
import dotenv from 'dotenv';
import parcelController from '../controllers/parcelController';
import userController from '../controllers/userController';
import DbConnectors from '../controllers/parcelDBController';
import userDbControllers from '../controllers/userDBcontroller';
import Auth from '../../helpers/auth';

dotenv.config();
const router = express.Router();
// get all parcels
router.get('/api/v1/parcels', parcelController.getAllParcels);

// get parcel by Id
router.get('/api/v1/parcels/:Pid', parcelController.getParcelByID);

// create a new parcel
router.post('/api/v1/parcels', parcelController.createParcel);

// change the status of any parcel
router.put('/api/v1/parcels/:Pid/update/status', parcelController.changeParcelStatus);

// change destinationof any parcel
router.put('/api/v1/parcels/:Pid/update/destination', parcelController.changeParcelDestination);

// cancel any parcel
router.put('/api/v1/parcels/:Pid/cancel', parcelController.cancelParcel);

// delete any canceles parcel
router.delete('/api/v1/parcels/:Pid/delete', parcelController.removeParcel);

// user API ENDPOINTS

// get all parcels created by any user.
router.get('/api/v1/users/:userId/parcels', userController.getParcelByUser);

// create a new user
router.post('/api/v1/users', userController.addUser);


// Start of Database Api

// Get all parcles
router.get('/api/v2/parcels', Auth.verifyToken, DbConnectors.getAllParcels);

// Get any Parcel By Id
router.get('/api/v2/parcels/:Pid', Auth.verifyToken, DbConnectors.getParcelById);

// create a new parcel
router.post('/api/v2/parcels', Auth.verifyToken, DbConnectors.createParcel);

// changing destination of a parcel
router.put('/api/v2/parcels/:Pid/destination', Auth.verifyToken, DbConnectors.changeParcelDestination);

// changing Status of a parcel
router.put('/api/v2/parcels/:Pid/status', Auth.verifyToken, DbConnectors.changeParcelStatus);

// creating a new user
router.post('/auth/signup', userDbControllers.userSignUp);

// loging in a user
router.post('/auth/login', userDbControllers.userLogin);
export default router;
