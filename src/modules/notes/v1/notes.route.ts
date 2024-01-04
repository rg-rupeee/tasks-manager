import { Router } from 'express';

import validationMiddleware from '@middlewares/validation.middleware';
import protect from '@middlewares/auth.middleware';
import authController from './notes.controller';
import {
  createNoteDTO,
  deleteNoteDTO,
  getNoteDTO,
  getNotesDTO,
  shareNoteDTO,
  updateNoteDTO,
} from './notes.schema';

const router = Router();
const controller = new authController();

router.get('/', validationMiddleware(getNotesDTO, 'body'), controller.getNotes);

router.get(
  '/:id',
  protect,
  validationMiddleware(getNoteDTO, 'body'),
  controller.getNote,
);

router.post(
  '/',
  validationMiddleware(createNoteDTO, 'body'),
  controller.createNote,
);

router.put(
  '/:id',
  validationMiddleware(updateNoteDTO, 'body'),
  controller.updateNote,
);

router.delete(
  '/:id',
  validationMiddleware(deleteNoteDTO, 'body'),
  controller.deleteNote,
);

router.post(
  '/:id/share',
  validationMiddleware(shareNoteDTO, 'body'),
  controller.shareNote,
);

export default router;
