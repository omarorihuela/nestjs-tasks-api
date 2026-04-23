import { Injectable } from '@nestjs/common';
import { Task, TaskStatus} from './task.entity';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    private generateId(): string {
        return crypto.randomUUID();
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const newTask = {
            id: this.generateId(),
            title,
            description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(newTask);
        
        return newTask;
    }

    updateTask(id: string, taskData: Task): Task | string{
        const { title, description, status } = taskData;
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        if (taskIndex === -1) {
            return 'No task found with the given id';
        }
        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...(title && { title }),
            ...(description && { description }),
            ...(status && { status })
        };


        return this.tasks[taskIndex];
    }

    deleteTask(id: string): string {
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        if (taskIndex === -1) {
            return 'No task found with the given id';
        }
        this.tasks.splice(taskIndex, 1);
        return 'Task deleted successfully';
    }

}
