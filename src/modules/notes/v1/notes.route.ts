import { Router } from 'express';

import validationMiddleware from '@middlewares/validation.middleware';
import protect from '@middlewares/auth.middleware';
import authController from './notes.controller';
import {
  getNoteDTO,
  shareNoteDTO,
  updateNoteDTO,
  createNoteDTO,
  deleteNoteDTO,
  shareNoteBodyDTO,
  updateNoteBodyDTO,
} from './notes.schema';

const router = Router();
const controller = new authController();

router.get('/', protect, controller.getNotes);

router.get(
  '/:id',
  protect,
  validationMiddleware(getNoteDTO, 'params'),
  controller.getNote,
);

router.post(
  '/',
  protect,
  validationMiddleware(createNoteDTO, 'body'),
  controller.createNote,
);

router.put(
  '/:id',
  protect,
  validationMiddleware(updateNoteDTO, 'params'),
  validationMiddleware(updateNoteBodyDTO, 'body'),
  controller.updateNote,
);

router.delete(
  '/:id',
  protect,
  validationMiddleware(deleteNoteDTO, 'params'),
  controller.deleteNote,
);

router.post(
  '/:id/share',
  protect,
  validationMiddleware(shareNoteDTO, 'params'),
  validationMiddleware(shareNoteBodyDTO, 'body'),
  controller.shareNote,
);

export default router;
