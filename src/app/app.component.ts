import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  submitted = false;
  // title = 'login';
  constructor(private fb: FormBuilder) {}
  RegisterForm!: FormGroup;

  ngOnInit(): void {
    console.log("Running");
    
    this.RegisterForm= this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      addr: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }
//   onsubmit(){
//     if(this.loginform.invalid){
//       this.submitted = true;
//       return 
//     }
//     console.log('welcome');
//     console.log(this.loginform.value);
//   }

//   onclick(){
//     console.log('Thank you')
//     alert('End')
//   }

//   getcall(sk:any){
// console.log(sk);
//   }
clicked(e:any){
  console.log(e.target.textContent);
  
}

onsubmit(): void {
  if (this.RegisterForm.invalid){
    this.submitted=true;
    return
  }

  console.log(this.RegisterForm.value);
  
}
}