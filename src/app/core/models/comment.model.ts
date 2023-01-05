import { User } from './user.model';

export interface Comment {
  id?: number;
  user: User;
  content: string;
  subComments: Comment[];
  createdAt?: Date;
  reply?: boolean;
  duration?: string;
  newContent?: string;
}

export interface CreateCommentRequest {
  content: string;
  userId?: number;
  eventId?: number;
  subjectId?: number;
  commentId?: number;
}
