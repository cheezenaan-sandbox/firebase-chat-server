/* eslint-disable */
declare type FIXME = any;

export interface User {
  id: string;
  nickname: string;
  avatar?: string;
}

export interface Message {
  date: string;
  body: string;
  user: User;
}
