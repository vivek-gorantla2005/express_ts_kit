import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleWare.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router();

//AUTH
router.post('/auth/login',AuthController.login)


//chatgroups routes
router.post('/chat-group',authMiddleware,ChatGroupController.store)
router.get('/chat-group/:id',authMiddleware,ChatGroupController.show)
router.get('/chat-group',authMiddleware,ChatGroupController.index)
router.put('/chat-group/:id',authMiddleware,ChatGroupController.update)
router.delete('/chat-group/:id',authMiddleware,ChatGroupController.destroy)


export default router;