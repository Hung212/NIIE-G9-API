//router
const express = require('express');
const Hotel = require ('../controllers/hotel');
const router = express.Router();

//CRUD Hotels
//create a new hotel rooms
router.post('/hotels', Hotel.hotel_create);
//get all hotel rooms
router.get('/hotels', Hotel.hotel_getAll);
//get single hotel room 
router.get('/hotels/:hotelId', Hotel.hotel_getSingle);
//update hotel room
router.patch('/hotels/:hotelId', Hotel.hotel_update);
//delete hotel room 
router.delete('/hotels/:hotelId', Hotel.hotel_delete);
module.exports = router