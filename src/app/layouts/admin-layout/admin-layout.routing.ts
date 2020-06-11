import { Routes } from '@angular/router';


import {TestComponent} from './test/test.component';
import {HistoryComponent} from './history/history.component';
import {SecurityReqComponent} from './security-req/security-req.component';
import {AuditGuardService} from "./audit-guard.service";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'history', component: HistoryComponent },
  {path:'security_req',component:SecurityReqComponent,
    canActivate:[AuditGuardService]}

];
