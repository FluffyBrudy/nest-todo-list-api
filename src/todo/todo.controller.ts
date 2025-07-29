import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { Response } from 'express';

@Controller('api/todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findall request');
    return this.todoService.findall();
  }

  @Post()
  create(@Body() todo: Todo) {
    this.logger.log('Handling create() request');
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: Todo,
    @Res() res: Response,
  ) {
    this.logger.log('Handling update() request with id=' + id + '...');
    const status = this.todoService.update(id, todo);
    res.status(status).json({});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(
      'handling findone request. {id}=' + id + '. typeof id=' + typeof id,
    );
    return this.todoService.findone(id);
  }
}
