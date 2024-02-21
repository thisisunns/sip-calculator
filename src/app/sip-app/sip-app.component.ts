import { Component } from '@angular/core';

@Component({
  selector: 'app-sip-app',
  templateUrl: './sip-app.component.html',
  styleUrls: ['./sip-app.component.css']
})
export class SipAppComponent {
 
  monthlysipAmount!: number;
  annualinterestRate!: number;
  numberofYears!: number;
  expectedAmount!: number;
  amountInvested!: number;
  wealthGain!: number;
  monthlyInterestRate!: number;
  totalMonths!: number;
  
  constructor(){
    const monthlyInterestRate = this.annualinterestRate / 12 / 100;
    const totalMonths = this.numberofYears * 12;
    this.expectedAmount = this.monthlysipAmount*(Math.pow(1+monthlyInterestRate,totalMonths-1)/monthlyInterestRate);
    this.amountInvested = this.monthlysipAmount * totalMonths;
    this.wealthGain = this.expectedAmount - this.amountInvested;
  }
  
}
