import express from 'express';
import parcelController from '../controllers/parcelController';
import userController from '../controllers/userController';


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
export default router;
