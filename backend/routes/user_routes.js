import express from "express";
import { register,login,logout, editProfile, updateProfilePicture, addressUpdate} from "../controllers/user_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";


const router=express.Router();

router.post("/register",upload.none(),register);
router.post("/login",login);
router.get('/logout',logout);
router.put("/editprofile",isAuthenticated,editProfile)
router.put("/updatepic", isAuthenticated, upload.single('profilePicture'), updateProfilePicture);
router.post("/updateaddress",isAuthenticated,addressUpdate);

export default router ;