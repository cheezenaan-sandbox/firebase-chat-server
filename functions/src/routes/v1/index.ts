import express from 'express';

import { User } from '../../../custom';
import {
  createChannel,
  createMessage,
  fetchChannels,
  fetchMessages,
} from '../../actions';

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

// GET /api/v1/channels
router.get(
  '/channels',
  async (_req: express.Request, res: express.Response) => {
    const channels = await fetchChannels();
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ channels });
  }
);

interface Request extends express.Request {
  params: any;
  body: any;
  user?: User;
}

// POST /api/v1/:channelName/messages
router.post(
  '/channels/:channelName/messages',
  (req: Request, res: express.Response) => {
    const { params, body, user } = req;

    createMessage({
      channelName: params.channelName,
      body: body.body,
      user,
    });

    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).json({ result: 'ok' });
  }
);

// GET /api/v1/channels/:channelName/messages
router.get(
  '/channels/:channelName/messages',
  async (req: express.Request, res: express.Response) => {
    const { channelName } = req.params;

    const messages = await fetchMessages({ channelName });
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ messages });
  }
);
