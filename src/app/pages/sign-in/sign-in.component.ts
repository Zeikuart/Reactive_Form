import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  str:string = ""
  isSubmitted:boolean = false
  success:boolean = true

  // Form Group
  credentialsForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  
  constructor(
    private router: Router,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    
  }

  // Submit Button
  onSubmit() {

    console.log('Credentals: ', this.credentialsForm.value, 'Valid: ', this.credentialsForm.invalid)
    this.success = true
    this.isSubmitted = true

    // Getting email and password from the form
    let email = this.credentialsForm.get('email')?.value
    let password = this.credentialsForm.get('password')?.value

    /* if(!(this.validate('email') && this.validate('password')) && (email === 'hi@gmail.com' && password === 'asdasd')){this.router.navigate(['dashboard'])}
    else{this.success = false} */

    // Simple validation without API
    if(!(this.validate('email') && this.validate('password'))){
      if(email === 'hi@gmail.com' && password === 'asdasd'){
        this.router.navigate(['dashboard'])
      }
      // Error Message Trigger
      else{this.success = false}
    }
  }

  // Method to validate if Email was typed correctly
  validate(input:string):boolean {

    return (
      (this.credentialsForm.get(input)?.invalid && 
      (this.credentialsForm.get(input)?.dirty || this.credentialsForm.get(input)?.touched || this.isSubmitted) && 
      this.isSubmitted) ? true : false
    )
  }

}
