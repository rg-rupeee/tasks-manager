import { Response } from 'express';

export const OK = (res: Response) => {
  return (data: any) => res.status(200).json({ success: true, data });
};

export const CREATED = (res: Response) => {
  return (data: any) => res.status(201).json({ success: true, data });
};
