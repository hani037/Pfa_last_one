import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {test} from "../../layouts/admin-layout/security-req/test.model";
import {RequestService} from "../../layouts/admin-layout/security-req/request.service";
import {AuditService} from "../../layouts/admin-layout/dashbord/audit.service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/test',
    title: 'Audit',
    icon: 'fa-user-secret',
    class: ''
  },
  {
    path: '/history',
    title: 'History',
    icon: 'fa-history',
    class: ''
  }
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  tests:test[];
  nb: number=0;
  constructor(private route:Router,private requestService:RequestService,private auditService:AuditService) {

  }

  async ngOnInit() {
      this.auditService.created_Audit.subscribe(async data => {
        this.tests = await this.requestService.getaudit().toPromise();
        this.nb=0;
        console.log("aaa")
      });
      if (localStorage.getItem('audit')&&!this.tests){
        this.tests = await this.requestService.getaudit().toPromise();

      }
      this.requestService.ischanged.subscribe(async data=>{
        this.tests = await this.requestService.getaudit().toPromise();

      });
    this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.requestService.selected_test.subscribe(data=>this.nb=data);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  navigate(i: number) {
   this.requestService.navigate(i);
   this.nb=i;
  }

  /*styleObject(data) {
    if (data==true ){
      return {color: '#78ff48'}
    }else if (data==false){
      return {color: 'red'}

    }
    return {color: 'grey'}
  }*/
}
