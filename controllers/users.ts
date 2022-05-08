import { Request, Response } from "express"

export const getUser = (req: Request, res: Response) => {
    const { name, apellido } = req.query
    return res.status(200).json({ msg: 'peticion getUser', name, apellido })
}

export const addUser = (req: Request, res: Response) => {
    const { name, apellido } = req.body
    return res.status(200).json({ msg: 'peticion addUser', name, apellido })
}

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params
    return res.status(200).json({ msg: 'peticion updateUser', id })
}

export const deletedUser = (req: Request, res: Response) => {
    const { id } = req.params
    return res.status(200).json({ msg: 'peticion deletedUser', id })
}