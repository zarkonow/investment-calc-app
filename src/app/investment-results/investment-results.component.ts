import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';


import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//reslts = input()
private investmentService = inject(InvestmentService)

results= this.investmentService.resultData.asReadonly()
}


