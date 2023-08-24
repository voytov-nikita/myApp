import {Injectable}  from "@angular/core"
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http"
import {Observable, delay, catchError, throwError, retry} from "rxjs"
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
    
    getAll() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>("https://fakestoreapi.com/products", {
            params: new HttpParams({
                fromObject: {limit: 10}
                })
            }).pipe(
                delay(200),
                catchError(this.errorHandler.bind(this)),
                retry(2)
            )
    }



    private errorHandler(error:HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(()=> error.message)
    }
}