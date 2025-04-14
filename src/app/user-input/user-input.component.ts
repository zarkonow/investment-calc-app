import { Component, signal } from '@angular/core';


import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');


  constructor(private investmentService: InvestmentService) { }


  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    })

    this.enteredAnnualInvestment.set('0')
    this.enteredInitialInvestment.set('0')
    this.enteredDuration.set('10')
    this.enteredExpectedReturn.set('5')

  }
}
