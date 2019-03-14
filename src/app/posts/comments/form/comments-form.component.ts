import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'prd-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})

export class CommentsFormComponent implements OnInit {

  submitted: boolean;
  form; FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        name:  ['', Validators.compose([ Validators.required, Validators.minLength(2) ]) ],
        price: ['', Validators.compose([ Validators.required, this.ValidatePrice ]) ]
      }
    );
  }

  // We can use min from Validators
  // but this is an example of a custom validator
  ValidatePrice(control: FormControl): {[s: string]: boolean} {
    if ( control.value <= 0 ) {
      return { price: true };
    }

    return null;
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    this.submitted = true;
    console.log(value);
  }
}
