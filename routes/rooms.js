import express from 'express';
const router=express.Router();



import { verifyAdmin } from "../utils/verifyToken.js";


import { createError } from "../utils/error.js";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';

//create
router.post("/:hotelid",createRoom);

//update

router.put("/:id/", updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid",  deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getAllRoom);






export default router