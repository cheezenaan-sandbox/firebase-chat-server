import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';

import { Message } from '../../../custom';

const baseURL = 'https://getting-started-frontend-4545.firebaseapp.com/api/v1';

const instance: AxiosInstance = Axios.create({
  baseURL,
  timeout: 10000,
});

export const fetchMessages = (
  channelName: string,
  params = {},
  cancelToken: CancelToken | undefined = undefined // TODO: undefined でいいのか…?
): Promise<AxiosResponse<{ messages: Message[] }>> =>
  instance.get(`/channels/${channelName}/messages`, { params, cancelToken });

export const postMessage = (
  channelName: string,
  payload: Message,
  cancelToken: CancelToken
): Promise<AxiosResponse<Message>> =>
  instance.post(`/channels/${channelName}/messages`, payload, {
    cancelToken,
  });
