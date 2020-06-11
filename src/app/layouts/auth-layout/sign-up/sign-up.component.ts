import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  message:string;
  constructor(public authService:AuthService,public router:Router) {}

  ngOnInit() {
  }
  onSubmit(f) {
    console.log(f.value);
    this.authService.signup(f.value.email,f.value.password).subscribe(data => {
      console.log(data);
      if(data.message==='user allready exists.'){
        this.message='user allready exists';
      } else if (data.message){
        this.router.navigate(['login'])
      }
    });
  }
}
