import express from 'express';
import parcelController from '../controllers/parcelController';

const router = express.Router();

router.get('/api/v1/parcels', parcelController.getAllParcels);
router.get('/api/v1/parcels/:Pid', parcelController.getParcelByID);
router.post('/api/v1/parcels', parcelController.createParcel);
router.put('/api/v1/parcels/:Pid', parcelController.updaetParcel);
router.delete('/api/v1/parcels/:Pid', parcelController.cancelParcel);

export default router;
