import {Injectable}  from "@angular/core"
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http"
import {Observable, delay, catchError, throwError, retry, tap} from "rxjs"
import { IProduct } from "../components/data/product"
import { ErrorService } from "./error.service"

@Injectable({
    providedIn : "root"
})
export class ProductService {
    constructor(
        private http:HttpClient,
        private errorService: ErrorService
        ) {

    }
    
    products: IProduct[] = []

    getAll() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>("https://fakestoreapi.com/products", {
            params: new HttpParams({
                fromObject: {limit: 3}
                })
            }).pipe(
                delay(200),
                catchError(this.errorHandler.bind(this)),
                retry(2),
                tap(
                products => this.products = products)
                
            )
    }

    create(product:IProduct): Observable<IProduct> {
        console.log(product)
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
        .pipe(
            tap(prod => {this.products.push(prod)
           
                })
        )
    }



    private errorHandler(error:HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(()=> error.message)
    }
}