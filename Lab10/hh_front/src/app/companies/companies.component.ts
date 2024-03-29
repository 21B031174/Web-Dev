import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies()
  }
  getCompanies(){
    this.companyService.getCompanies().subscribe((data)=>{
      this.companies = data;
      console.log(data);
    });
  }
}
