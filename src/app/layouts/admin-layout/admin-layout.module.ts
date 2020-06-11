import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { HistoryComponent } from './history/history.component';
import { SecurityReqComponent } from './security-req/security-req.component';
import { CommentComponent } from './comment/comment.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InfoComponent } from './info/info.component';
import { ImagesComponent } from './images/images.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe } from './filter.pipe';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HighchartsChartModule,
    EditorModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 40,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
    }),
    MatIconModule
  ],
  declarations: [
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    TestComponent,
    HistoryComponent,
    SecurityReqComponent,
    CommentComponent,
    GraphsComponent,
    DashbordComponent,
    InfoComponent,
    ImagesComponent,
    FilterPipe,
    // RtlComponent
  ],
  entryComponents: [DashbordComponent,InfoComponent,GraphsComponent,ImagesComponent,CommentComponent]

})
export class AdminLayoutModule {}
