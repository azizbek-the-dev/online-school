import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
}) 
export class CodeEditorComponent implements OnInit {
  ngOnInit(): void {
  }

  out: any;
  code: any = `<!DOCTYPE html>
  <html>
    <head>
     <meta charset="utf-8">
    </head>
    <body>
      <h1>Salom dunyo!</h1>

      <p>Bu Azizbek-Academy onlayn dasturlash maktabi!</p>

      <!-- Serverda ishlatish tugmasiga bir marta bosing va hohlagancha o'zgartiring, o'zgartirish davomida natija avtomatik yangilanadi. Kod yozishda omad :) -->
    </body>
  </html>`;

}