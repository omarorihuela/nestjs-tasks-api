import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'
 
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/getAllTasks')
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post('/createTask')
    createTask(@Body() taskData: CreateTaskDto): Task {
        const { title, description } = taskData;
        return this.tasksService.createTask(title, description);
    }

    @Put('/updateTask/:id')
    updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDto): Task | string {
        const task = taskData == null || taskData == undefined ? {} as UpdateTaskDto : taskData;
        return this.tasksService.updateTask(id, task);
    }

    @Delete('/deleteTask/:id')
    deleteTask(@Param('id') id: string): string {
        return this.tasksService.deleteTask(id);
    }
}
