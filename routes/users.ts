import { getUser, addUser, updateUser, deletedUser } from "../controllers/users";
import { Router } from "express";

export const router = Router()

router.get('/', getUser)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deletedUser)