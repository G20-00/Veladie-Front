import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { findProductByCategorySuccess } from './product.action';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_BASE_URL = 'https://careful-outfit-crab.cyclic.app';

  constructor(private http: HttpClient) {}

  private getHeader(): HttpHeaders {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImN1YXRybyIsInN1YiI6IjY1Njc3YTNlYzdlZDAyNTM3MjljNWFkMSIsInJvbGVzIjoiYWRtaW4iLCJjYXJ0IjoiNjU2NzdhM2VjN2VkMDI1MzcyOWM1YWNkIiwiZmF2b3JpdGVzIjoiNjU2NzdhM2VjN2VkMDI1MzcyOWM1YWNmIiwiaWF0IjoxNzAxMjgwNTk0LCJleHAiOjMxNzI0NTcyMjk5NH0.71yO9BbnR8ai1DGzliJYXX1VD2bKubhjXt9mC1YYJTQ';
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  findAll() {
    const headers = this.getHeader();

    return this.http.get(`${this.API_BASE_URL}/products`, { headers }).pipe(
      map((data: any) => {
        console.log('products data', data);
        return findProductByCategorySuccess({ payload: data });
      }),
      catchError((error: HttpErrorResponse) => {
        // Manejo de errores aquí
        console.error('Ha ocurrido un error:', error);
        return throwError('Ocurrió un error al cargar los productos. Por favor, inténtelo de nuevo más tarde.');
      })
    );
  }
}
