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
    const currentMaxId = Math.max(...this.storage.map((t) => Number(t.id)));
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

  remove(id: number) {
    const lenBeforeRemovel = this.storage.length;
    const modifiedTodos = this.storage.filter((t) => t.id != id);
    if (modifiedTodos.length === lenBeforeRemovel) return 404;
    this.storage = modifiedTodos;
    return 204;
  }
}
