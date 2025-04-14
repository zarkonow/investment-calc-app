
import { Component, computed, inject } from '@angular/core';


import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,

  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //reslts = input()
  private investmentService = inject(InvestmentService)

  results = this.investmentService.resultData.asReadonly()
}


