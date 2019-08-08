import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProductProvider {
    public url: string = "http://localhost:7777/api";
    favoriteBooks: Observable<any>;
    constructor(public db: AngularFireDatabase,public http: HttpClient) {

    }

    getSpecialDeals() {
        return this.db.list('/products').valueChanges().pipe(map(
            products => 
                {
                   const specialDeals =<any> products.filter((item: any) => item.isOnSpecial == true);
                   return specialDeals;
                }
            ));
    }

    getProductsByCategory(parameters) {
        return this.http.post(this.url + "/getProductsByCategory", parameters);
    }

    getProductToApprove() {
        return this.http.get(this.url + "/getProductToApprove");
    }
}