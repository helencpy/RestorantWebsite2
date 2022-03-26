import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getPromotions(): Observable<Promotion[]> {
      return this.http.get<Promotion[]>(baseURL + 'promotions')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getPromotion(id: string): Observable<Promotion> {
      return this.http.get<Promotion>(baseURL + 'promotions/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  
    }
  
    getFeaturedPromotion(): Observable<Promotion> {
      return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotion => promotion[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    
  // getPromotions(): Promise<Promotion[]> {
  //   return Promise.resolve(PROMOTIONS);
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  // }

  // getPromotions(): Promise<Promotion[]> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS), 2000);
  //   });
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return new Promise(resolve=>{
  //     // Simulate server latency with 2 second delay
  //     setTimeout(()=>resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
  //   });

  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return new Promise(resolve=>{
  //     // Simulate server latency with 2 second delay
  //     setTimeout(()=>resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  //   });
  // }

  // getPromotions(): Promise<Promotion[]> {
  //   return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  // }

  // getPromotion(id: string): Promise<Promotion> {
  //   return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)).toPromise();

  // }

  // getFeaturedPromotion(): Promise<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)).toPromise();
  // }

  // getPromotions(): Observable<Promotion[]> {
  //   return of(PROMOTIONS).pipe(delay(2000));
  // }

  // getPromotion(id: string): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));

  // }

  // getFeaturedPromotion(): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  // }
  
}
