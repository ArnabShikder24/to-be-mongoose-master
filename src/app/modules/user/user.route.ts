import express from 'express';
import { createUser, getUsers, getUsersById } from './user.controller';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);

export default router;