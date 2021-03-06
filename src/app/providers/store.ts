import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreProvider {
    public url: string = "http://localhost:7777/api";
    public noImageBase64 = 'data:image/jpeg;base64,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';

    constructor(public http: HttpClient) {

    }

    addStore(parameters) {
        return this.http.post(this.url + "/addStore", parameters);
    }

    getNoImageBase64() {
        return this.noImageBase64;
    }

    addProduct(parameters) {
        return this.http.post(this.url + "/addProduct", parameters);
    }

    updateStore(parameters) {
        return this.http.post(this.url + "/updateStore", parameters);
    }

    updateProduct(parameters) {
        return this.http.post(this.url + "/updateProduct", parameters);
    }

    deleteProduct(parameters) {
        return this.http.post(this.url + "/deleteProductById", parameters);
    }

    uploadProductImage(file) {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post(this.url + "/uploadProductImage",formData);
    }

    getStoreByUserId(parameters) {
        return this.http.post(this.url + "/getStoreByUserId", parameters);
    }
    
    productisDuplicate(parameters) {
        return this.http.post(this.url + "/productisDuplicate", parameters);
    }

    getProductsStoreById(parameters) {
        return this.http.post(this.url + "/getProductsStoreById", parameters);
    }

    getStoreById(parameters) {
        return this.http.post(this.url + "/getStoreById", parameters);
    }
}