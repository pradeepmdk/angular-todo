import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

interface ITodo {
  id: string;
  name: string;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = []
  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList')!) || [];
  }

  add(name: any) {
    const myId = uuid.v4();
    this.todoList.push({
      id: myId,
      name: name
    });
    this.updateLocalStorage();
  }

  remove(id: any) { 
    this.todoList = this.todoList.filter(t => t.id !== id);
    this.updateLocalStorage();
  }

  valid(name: string) {
    return this.todoList.find(t => t.name == name)
  }

  update(name: string, id: string) {
    const index = this.todoList.findIndex(t => t.id == id);
    this.todoList[index].name = name;
    this.updateLocalStorage();
  }

  completed(id: string) {
    const index = this.todoList.findIndex(t => t.id == id);
    this.todoList[index].completed = !this.todoList[index].completed;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
