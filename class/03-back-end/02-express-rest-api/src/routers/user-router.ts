import express from "express";
import {
  createNewUser,
  deleteAllUser,
  deleteUserById,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user-controller.js";
// import { helloMiddleware } from "../middlewares/hello-middleware.js";
// import { verifyMiddleware } from "../middlewares/verify-middleware.js";

const router = express.Router();

router
  .route("/users")
  .get(getAllUser)
  .post(createNewUser)
  .delete(deleteAllUser);
router
  .route("/users/:userId")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUserById);

export default router;
