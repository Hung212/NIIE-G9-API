//controller
//import mongoose from 'mongoose';
const Hotel = require ('../models/hotel');

// create new room
exports.hotel_create = function createHotel (req, res) {
	const hotel = new Hotel({
	  title: req.body.title,
	  description: req.body.description,
	});
	
	return hotel
	  .save()
	  .then((newHotel) => {
		return res.status(201).json({
		  success: true,
		  message: 'New room created successfully',
		  Hotel: newHotel,
		});
	  })
	  .catch((error) => {
		  console.log(error);
		res.status(500).json({
		  success: false,
		  message: 'Server error. Please try again.',
		  error: error.message,
		});
	  });
  }

  //get all room
  exports.hotel_getAll = async function (req,res){
	Hotel.find()
    .select('_id title description')
    .then((allHotel) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all room',
        Student: allHotel,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
  }

  //get single room
  exports.hotel_getSingle = function getSingleHotel (req,res){
	const id = req.params.hotelId;
  	Hotel.findById(id)
    .then((getSingleHotel) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleHotel.title}`,
        Hotel: singleHotel,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This room does not exist',
        error: err.message,
      });
   });
  }

  //update a room
  exports.hotel_update = function updateHotel(req, res) {
	const id = req.params.hotelId;
	const updateObject = req.body;
	Hotel.update({ _id:id }, { $set:updateObject })
	  .exec()
	  .then(() => {
		res.status(200).json({
		  success: true,
		  message: 'Room is updated',
		  updateHotel: updateObject,
		});
	  })
	  .catch((err) => {
		res.status(500).json({
		  success: false,
		  message: 'Server error. Please try again.'
		});
	  });
  }

// delete a room
exports.hotel_delete = function deleteHotel(req, res) {
	const id = req.params.hotelId;
	Hotel.findByIdAndRemove(id)
	  .exec()
	  .then(()=> res.status(204).json({
		success: true,
	  }))
	  .catch((err) => res.status(500).json({
		success: false,
	  }));
  }





