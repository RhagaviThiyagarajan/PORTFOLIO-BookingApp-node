import express from 'express';
const router=express.Router();
import {updateUser} from "../controllers/user.js";
import {getUser} from '../controllers/user.js';
import {getAllUser} from '../controllers/user.js';
import {deleteUser} from '../controllers/user.js';
import {verifyAdmin, verifyToken, verifyUser} from '../utils/verifyToken.js';

//update

router.put("/:id",verifyUser, updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);

//get
router.get("/:id",verifyUser, getUser);

//get all
router.get("/",verifyAdmin, getAllUser);


//get


//  router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//    res.send("hello user, you are logged in")
//  })

 
//  router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
//   })

//  router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })



export default router