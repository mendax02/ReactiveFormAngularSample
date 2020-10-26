import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  lastaddedHobbyIndex = 0;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'fGroupUserInfo': new FormGroup({
          'username': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email])}),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

  }
  onSubmit() {
    console.log(this.signupForm);
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    if (this.lastaddedHobbyIndex > 0 ) {
      const  hobbiesControls  = this.signupForm.get('hobbies') as FormArray;
      const lastControlAdded = hobbiesControls.at(this.lastaddedHobbyIndex - 1);
     // console.log(lastControlAdd);
      if (!lastControlAdded.invalid) {
        (<FormArray>this.signupForm.get('hobbies')).push(control);
      }

    } else {
      if (this.lastaddedHobbyIndex === 0) {
        (<FormArray>this.signupForm.get('hobbies')).push(control);
      }
    }
    this.lastaddedHobbyIndex = (<FormArray>this.signupForm.get('hobbies')).length;

    // console.log(this.lastaddedHobbyIndex) ;
  }

}
