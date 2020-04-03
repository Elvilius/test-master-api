import express from 'express';
import {
  create,
  findOne,
  update,
  findAll,
} from './service';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const entity = await findOne({ id });
    if (!entity) {
      const newEntity = await create(req.body);
      return res.json({ data: newEntity });
    }
    const updatedEntity = await update(entity, req.body);
    return res.json({ data: updatedEntity });
  } catch (err) {
    res.status(500);
    return res.json({
      error: err.message,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const entities = await findAll();
    return res.json({ data: { entities } });
  } catch (err) {
    res.status(500);
    return res.json({
      error: err.message,
    });
  }
});

export default router;
