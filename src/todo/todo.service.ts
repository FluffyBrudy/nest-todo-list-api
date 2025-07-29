import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [
    {
      id: 0,
      completed: true,
      lable: 'Learn nestjs',
    },
  ];

  findall() {
    return this.storage;
  }

  create(todo: Todo): void {
    const currentMaxId = Math.max(...this.storage.map((t) => t.id || 0));
    todo.id = currentMaxId + 1;
    this.storage.push(todo);
  }

  findone(id: number) {
    return this.storage.find((t) => t.id === id) ?? null;
  }

  update(id: number, todo: Todo) {
    const todoExists = this.findone(id);
    if (!todoExists) return 404;
    this.storage[id] = { ...todo, id: id };
    return 204;
  }
}
