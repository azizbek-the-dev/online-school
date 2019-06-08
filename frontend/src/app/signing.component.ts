import { Component } from '@angular/core';

@Component({
  selector: 'signing',
  template: `   <mat-card>
                      <mat-card-header>
                            <mat-card-title>Ma'lumot kiritish darchasi</mat-card-title>
                            <mat-card-subtitle>Kerakli malumotlarni kiriting</mat-card-subtitle>
                        </mat-card-header><br><br>
                        <mat-card-content>
                          <mat-form-field appearance="outline">
                              <mat-label>Ismingizni kiriting:</mat-label>
                              <input matInput placeholder="Ism kiritish majburiy!" required>
                              <mat-hint>Kiritilishi majburiy</mat-hint>
                          </mat-form-field>
                      </mat-card-content>                              
                </mat-card>
            `,
})
export class SigningComponent {

} 