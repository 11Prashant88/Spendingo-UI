import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs/operators'
import { Expense } from "../models/expense.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ExpenseService{
    public creating: boolean = false;
    constructor(private http: HttpClient){

    }
    getExpenses(){
        return this.http.get<Expense[]>(`${environment.apiUrl}/expenses`).pipe(delay(3000));
    }
    addExpense(expense: Expense){
        return this.http.post<Expense>(`${environment.apiUrl}/expenses`, expense);
    }
}
