import express from 'express';
import { FIXME } from '../../../custom';
import { createChannel } from '../../actions/createChannel';
import { createMessage } from '../../actions/createMessage';
import { fetchChannels } from '../../actions/fetchChannels';

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

// POST /api/v1/:channelName/messages
router.post(
  '/channels/:channelName/messages',
  (req: FIXME, res: express.Response): void => {
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
