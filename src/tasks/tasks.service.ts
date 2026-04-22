import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    getAllTasks(): Task[] {
        return [];
    }

    createTask(title: string, description: string): Task {
        return {} as Task;
    }

    updateTask(id: string): Task {
        return {} as Task;
    }

    deleteTask(id: string): void {}

}
