import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() data = new EventEmitter<any>()
  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })
  }

  add() {
    let value = this.addUserForm.value;
    this.data.emit(value)
  }

  get name() {
    return this.addUserForm.get('name')
  }

  get email() {
    return this.addUserForm.get('email')
  }

  get address() {
    return this.addUserForm.get('address')
  }

  get phone() {
    return this.addUserForm.get('phone')
  }

}
