import express from 'express';
import parcelController from '../controllers/parcelController';
import userController from '../controllers/userController';
import DbConnectors from '../controllers/parcelDBController';


const router = express.Router();
// get all parcels
router.get('/api/v1/parcels', parcelController.getAllParcels);

// get parcel by Id
router.get('/api/v1/parcels/:Pid', parcelController.getParcelByID);

// create a new parcel
router.post('/api/v1/parcels', parcelController.createParcel);

// change the status of any parcel
router.put('/api/v1/parcels/:Pid/update', parcelController.changeParcelStatus);

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
router.get('/api/v2/parcels', DbConnectors.getAllParcels);

// Get any Parcel By Id
router.get('/api/v2/parcels/:Pid', DbConnectors.getParcelById);

// create a new parcel
router.post('/api/v2/parcels', DbConnectors.createParcel);

// changing destination of a parcel
router.put('/api/v2/parcels/:Pid', DbConnectors.changeDestination);

// changing Status of a parcel
router.put('/api/v2/parcels/:Pid', DbConnectors.changeStatus);
export default router;
