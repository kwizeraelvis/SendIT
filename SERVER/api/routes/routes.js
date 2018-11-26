import express from 'express';
import parcelController from '../controllers/parcelController';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/api/v1/parcels', parcelController.getAllParcels);
router.get('/api/v1/parcels/:Pid', parcelController.getParcelByID);
router.get('/api/v1/users/:userId/parcels', userController.getParcelByUser);
router.post('/api/v1/parcels', parcelController.createParcel);
router.put('/api/v1/parcels/:Pid/update', parcelController.changeParcelStatus);
router.put('/api/v1/parcels/:Pid/cancel', parcelController.cancelParcel);
router.delete('/api/v1/parcels/:Pid/delete', parcelController.removeParcel);

export default router;
