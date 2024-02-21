import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wealthgain'
})
export class WealthgainPipe implements PipeTransform {

  transform(monthlysipAmount:number,numberofYears:number,annualinterestRate:number): number {
    let monthlyInterestRate = annualinterestRate/12/100;
    let totalMonths = numberofYears * 12;
    let expectedAmount = 0;
    expectedAmount = monthlysipAmount*(Math.pow(1+monthlyInterestRate,totalMonths)-1)/monthlyInterestRate;
    let wealthGain = 0;
    wealthGain = expectedAmount-monthlysipAmount * 12 * numberofYears;
    return wealthGain;
  }

}
