import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DashbordComponent} from '../dashbord/dashbord.component';
import {AuditService} from "../dashbord/audit.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  sel=false;
  constructor(public dialog: MatDialog,private auditService:AuditService) { }

  ngOnInit() {
    this.auditService.is_submit.subscribe(data=>this.sel=true)
  }
  public start(){
    this.dialog.open(DashbordComponent,{      backdropClass: 'backdropBackground' // This is the "wanted" line
    });
  }

}
