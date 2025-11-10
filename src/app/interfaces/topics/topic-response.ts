import { ICourseResponse } from '../courses/course-response';
import { IUserResponse } from '../users/user-response';

export interface ITopicResponse {
  id: number;
  title: string;
  course: ICourseResponse;
  author: IUserResponse;
  status: 'NOT_ANSWERED' | 'NOT_SOLVED' | 'SOLVED' | 'CLOSED';
  countViews: number;
  isActive: boolean;
}
