import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RequestService} from '../security-req/request.service';
import {AuditService} from "../dashbord/audit.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  is_edited=false;
  comment='';
  sel=0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {comment:string, id:string},private requestService:RequestService,
              private auditService:AuditService ) { }

  ngOnInit() {
    this.comment=this.data.comment;
  }

  submit(comment) {
    console.log(comment.value);
    this.requestService.update_comment(comment.value,this.data.id);
    this.sel=0;
    this.comment=comment.value;
    this.is_edited=true;
  }

  edit() {
    this.sel=1;
  }
}
