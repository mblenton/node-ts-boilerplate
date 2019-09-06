import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const index = (req: Request, res: Response) => {
  res.render('layouts/home', {
    title: 'Home',
    message: 'Hi!'
  });
};
export const testPost = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.json({
    success: true,
    data: req.body
  });
};
