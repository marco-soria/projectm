import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {
  constructor(
    private dialog: Dialog
  ) { }

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games'
        }
      ]
    }
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
    });
  }
}
