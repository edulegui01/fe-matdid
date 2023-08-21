import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global-service/global.service';
import { ServiceBase } from 'src/app/class/serviceAbstract';



@Injectable({
    providedIn: 'root'
})
export class EdificioService extends ServiceBase {

    constructor(
        private http: HttpClient,
        private globalSvc: GlobalService,
    ) {
        super();
        this.httpClient = http;
        this.globalServices = globalSvc;
    }
}
