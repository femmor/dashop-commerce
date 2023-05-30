import express from 'express';
import { getUsers, getUser } from '../controller/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);

export default router;
