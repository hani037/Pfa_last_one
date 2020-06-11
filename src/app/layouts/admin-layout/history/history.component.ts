import { Component, OnInit } from '@angular/core';
import {RequestService} from "../security-req/request.service";
import {AuditService} from "../dashbord/audit.service";
export interface audit {
  _id:string,
  level: string,
  title: string,
  user_id: string,
  ONLINE_MASVS_VERSION:string,
  MSTG_VERSION:string,
  ONLINE_MSTG_VERSION:string,
  Client_Name:string,
  Test_location:string,
  Start_Date:string,
  Closing_Date:string,
  Name_Of_Tester:string,
  Testing_Scope:string,
  Application_Name:string,
  Google_PlayStore_Link:string,
  Filename:string,
  Version:string,
  SHA256_HASH_OF_APK:string,
  MASVS_VERSION:string
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
public audits:audit[];
  px: string;
  sel: boolean=false;
  constructor(private requestService:RequestService,private  auditService:AuditService) { }

  async ngOnInit() {
    await this.get_audits();
  }

  public async get_audits(){
    this.audits=await this.requestService.getauditbyuser().toPromise();
    console.log(this.audits);
    this.sel=true;
  }
  public open_audit(_id: string,level:string,close:string) {
    if(close==""){
      this.auditService.open_audit(_id,level,false);
    }else {
      this.auditService.open_audit(_id,level,true);
    }
  }
  public  delete_audit(_id: string,title:string) {
    if(confirm("Are you sure to delete "+title)) {
      this.auditService.delete_audit(_id).subscribe(data=>{
        console.log(data);
        this.get_audits()
      });    }

  }
}
