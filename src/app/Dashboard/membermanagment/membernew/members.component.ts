import { MytamwebserviceService } from '../../../services/mytamwebservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  member = {
    email: "ras.seidi65@gmail.com",
    password: "123456",
    role:'مدیر'

  };
  myForm: FormGroup;
  constructor( private service: MytamwebserviceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required],
      role: ['', Validators.required],
    });
  }
  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }
  get role() { return this.myForm.get('role'); }
  onSubmit(form: FormGroup) {
    const formData = new FormData();
  }
}
