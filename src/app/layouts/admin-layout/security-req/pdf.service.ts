import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {test} from './test.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export interface Interface {
  pass:number,
  fail:number,
  NA:number,
  percentage:number,
}
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  data=[ 'V1', '0', '0', '6','0.00%' ];

  constructor() { }
  // tslint:disable-next-line:no-shadowed-variable
  generatePdf(test:test[]){
    const documentDefinition = this.getDocumentDefinition(test);
    pdfMake.createPdf(documentDefinition).open();
  }
  getDocumentDefinition(test:test[]) {


    return {
      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: "this.resume.name",
              style: 'name'
            },
              {
                text: "this.resume.address"
              },
              {
                text: 'Email : ' + "this.resume.email",
              },
              {
                text: 'Contant No : ' + "this.resume.contactNo",
              },
              {
                text: 'GitHub: ' + "this.resume.socialProfile",
                link: "this.resume.socialProfile",
                color: 'blue',
              }
            ],
            [
              // Document definition for Profile pic
            ]
          ]
        },
        {
          /*table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*','*', 'auto', 100, '*' ],
            body: [
              [ '','P', 'F', 'N/A', '%' ],
              tab
            ]
          }*/
        }
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    };
  }
}
