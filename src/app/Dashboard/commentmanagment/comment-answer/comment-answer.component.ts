import { MytamwebserviceService } from 'src/app/services/mytamwebservice.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-answer',
  templateUrl: './comment-answer.component.html',
  styleUrls: ['./comment-answer.component.scss']
})
export class CommentAnswerComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private service: MytamwebserviceService,
    private  fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      replay:['', Validators.required],

    });
  }
  get name() {
    return this.myForm.get("name");
  }
  get replay() {
    return this.myForm.get("replay");
  }


  onSubmit(form: FormGroup) {
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("replay", form.value.replay);

  }

}
