import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuditService} from "./audit.service";
import {map} from "rxjs/operators";
import {FormArray, FormControl, NgForm, Validators} from "@angular/forms";
import {Subject} from "rxjs";
export interface audit_1 {
  title:string,
  level:string,
  ONLINE_MASVS_VERSION:string,
  MSTG_VERSION:string,
  ONLINE_MSTG_VERSION:string,
  Client_Name:string,
  Test_location:string,
  Start_Date:string,
  Closing_Date:string,
  Name_Of_Tester:string,
  Testing_Scope:string,
  MASVS_VERSION:string
}
export interface audit_2 {
  Application_Name:string,
  Google_PlayStore_Link:string,
  Filename:string,
  Version:string,
  SHA256_HASH_OF_APK:string
}
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  public sel;

  audit_1:audit_1;
  audit_2:audit_2;
  representative_name = new FormArray([]);
  representative_title = new FormArray([]);
  representative_org = new FormArray([]);
  representative_phone = new FormArray([]);
  representative_email = new FormArray([]);

  constructor(private router:Router,private auditService:AuditService) {
    this.sel=1;
    this.representative_name.push(new FormControl('',[Validators.required]));
    this.representative_org.push(new FormControl('',[Validators.required]));
    this.representative_phone.push(new FormControl('',[Validators.required]));
    this.representative_title.push(new FormControl('',[Validators.required]));
    this.representative_email.push(new FormControl('',[Validators.required,Validators.email]));

  }

  ngOnInit() {
  }
  next(f:NgForm){
    if (this.sel==1){
     this.audit_1=f.value;

    }else if (this.sel==2){
      this.audit_2=f.value;

    }
    this.sel++;
  }

  async submit() {
    console.log(this.representative_name);
    this.auditService.is_submit.next(true);
    this.auditService.crate_audit(this.audit_1,this.audit_2,
      this.representative_name,this.representative_title,this.representative_phone,this.representative_org,this.representative_email);
  }

  addrep() {
    this.representative_name.push(new FormControl('',[Validators.required]));
    this.representative_org.push(new FormControl('',[Validators.required]));
    this.representative_phone.push(new FormControl('',[Validators.required]));
    this.representative_title.push(new FormControl('',[Validators.required]));
    this.representative_email.push(new FormControl('',[Validators.required,Validators.email]));
  }
}
