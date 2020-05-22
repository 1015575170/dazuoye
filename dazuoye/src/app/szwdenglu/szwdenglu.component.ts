
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

function userNameValidator(control: FormControl): { [s: string]: boolean} {
  if( !control.value.match(/^a/)){
    return { invalidUser: true};
  }
}
@Component({
  selector: 'app-szwdenglu',
  templateUrl: './szwdenglu.component.html',
  styleUrls: ['./szwdenglu.component.css']
})
export class SzwdengluComponent {
  myForm: FormGroup;


  userName: AbstractControl;


  password: AbstractControl;

  name$: Observable<string>;
  
  constructor(private fb: FormBuilder,private authService: AuthService){
    this.myForm = this.fb.group(
      {
        'userName': ['',Validators.compose([Validators.required,userNameValidator])],
        'password': ['',Validators.compose([Validators.required,Validators.minLength(5)])]
      }
    );
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.name$ = this.userName.valueChanges;
    this.userName.valueChanges.subscribe(val=>{
      console.log(val);
    })

  }
  onSubmit(value:any){
    console.log(value);
  }
  login() {
    this.authService.login();
    }
}
