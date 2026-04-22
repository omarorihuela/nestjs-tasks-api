import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
 
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/getAllTasks')
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }
}
