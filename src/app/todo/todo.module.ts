import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';


@NgModule({
  declarations: [
    TodolistComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
