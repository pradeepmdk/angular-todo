import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from './todo.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  todoName = new FormControl('', [Validators.required]);
  faEdit = faEdit;
  editData: any = {};
  faTrash = faTrash;
  constructor(private modalService: NgbModal, public service: TodoService) {}

  open(content: any) {
    this.todoName.setValue(this.editData!.name);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {},
        (reason) => {}
      );
    this.todoName.valueChanges.subscribe(() => {
      this.todoName.setErrors(null);
    })
  }

  onSave(modal: any) {
    if (this.todoName.invalid) return;
    if (!this.editData.id && this.service.valid(this.todoName.value!)) {
      this.todoName.setErrors({isExisit: true})
      return;
    }
    if(this.editData.id) {
      this.service.update(this.todoName.value!, this.editData.id);
    } else {
      this.service.add(this.todoName.value);
    }
    modal.close('Save click');

  }

  edit(item: any, content: any) {
    this.editData = item;
    this.open(content)
  }
}
