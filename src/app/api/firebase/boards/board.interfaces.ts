import { Task } from '../tasks/task.interfaces';

export interface Board {
  id: string;
  uid: string;
  title?: string;
  priority?: number;
  tasks?: Task[];
}
