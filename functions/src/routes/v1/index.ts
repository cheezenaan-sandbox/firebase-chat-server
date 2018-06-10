import express from 'express';
import { createChannel } from '../../actions/createChannel';

export const router = express.Router();

// POST /api/v1/channels
router.post(
  '/channels',
  (req: express.Request, res: express.Response): void => {
    const { channelName } = req.body;
    createChannel(channelName);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).json({ result: 'ok' });
  }
);
