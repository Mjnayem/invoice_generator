import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-get-pdf',
  templateUrl: './get-pdf.component.html',
  styleUrls: ['./get-pdf.component.css']
})
export class GetPdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPdf(){
    const doc = new jsPDF();

    let content = `
    
    <div>
    <h1>INVOICE</h1>
    </div>
    
    `;

    doc.html(content,10);

    doc.save('test.pdf');
  }

}
