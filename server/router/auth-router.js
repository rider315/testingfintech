const express=require("express");
const router=express.Router();
const authcontrollers=require("../controllers/auth-controller");
const {signupSchema,loginSchema}=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");



// const {home,register}=require("../controllers/auth-controller");
router.route("/").get(authcontrollers.home);
// router.route("/register").post(authcontrollers.register);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login);

const authMiddleware=require("../middlewares/auth-middleware");

// const {signupSchema,loginSchema} =require("../validators/auth-validator");
// const validate=require("../middlewares/validate-middleware");
// router.route("/").get(authcontrollers.home);
// // router.route("/register").post(authcontrollers.register);
// router.route("/register").post(validate(signupSchema),authcontrollers.register);
// // router.route("/login").post(validate(signupSchema),authcontrollers.login);
// router.route("/login").post(validate(loginSchema),authcontrollers.login);
router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports=router; 
