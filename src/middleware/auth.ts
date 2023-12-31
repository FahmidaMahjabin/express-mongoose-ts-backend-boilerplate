import { NextFunction, Request, Response } from 'express'

export const auth =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      next()
    } catch (error) {
      next(error)
    }
  }
