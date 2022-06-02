/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useState} from 'react';

export type Comment = {
  author: string;
  content: string;
  id: string;
  timeStamp: number;
  type: 'comment';
};

export type Thread = {
  comments: Array<Comment>;
  id: string;
  quote: string;
  type: 'thread';
};

export type Comments = Array<Thread | Comment>;

function createUID(): string {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
}

export function createComment(content: string): Comment {
  return {
    author: 'Playground User',
    content,
    id: createUID(),
    timeStamp: performance.now(),
    type: 'comment',
  };
}

export function createThread(quote: string, content: string): Thread {
  return {
    comments: [createComment(content)],
    id: createUID(),
    quote,
    type: 'thread',
  };
}

export function cloneThread(thread: Thread): Thread {
  return {
    comments: Array.from(thread.comments),
    id: thread.id,
    quote: thread.quote,
    type: 'thread',
  };
}

export class CommentStore {
  _comments: Comments;
  _isCollab: boolean;

  constructor(isCollab: boolean) {
    this._comments = [];
    this._isCollab = isCollab;
  }

  getComments(): Comments {
    return this._comments;
  }

  addComment(commentOrThread: Comment | Thread, thread?: Thread): void {}

  deleteComment(comment: Comment, thread?: Thread): void {}
}

export function useCommentStore(commentStore: CommentStore): Comments {
  const [comments, setComments] = useState<Comments>(
    commentStore.getComments(),
  );

  return comments;
}
