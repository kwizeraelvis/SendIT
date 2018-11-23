import express from 'express';
import parcelController from '../controllers/parcelController';

const router = express.Router();

router.get('/', parcelController.getAllParcels);
router.get('/api/v1/parcels', parcelController.getAllParcels);
router.get('/api/v1/parcels/:Pid', parcelController.getParcelByID);
router.post('/api/v1/parcels', parcelController.createParcel);
router.put('/api/v1/parcels/:Pid/update', parcelController.updateParcel);
router.delete('/api/v1/parcels/:Pid/cancel', parcelController.cancelParcel);

export default router;
