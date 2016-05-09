import { Injectable, Inject } from 'angular2/core';

/*
 * We use the Http Object to access the REST services.
 */
import { Http, Response } from 'angular2/http';

import { Observable } from 'rxjs/Observable';

/*
 * Adds all the operators to Observable (map, catch).
 * Operators could also be added individually.
 */
import 'rxjs/Rx';

@Injectable()
export class Rest {
    /*
     * Properties
     */
    private _url: string = '';

    /*
     * Constructor
     */
    constructor(
        @Inject(Http) private http: Http
    ) {
        this._url = 'https://rawgit.com/josoroma/isLifeIsFun/master/api/';
    }

    /*
     * Get Object Method
     *
     * We use Observable.map() to transform the response in a format easily
     * consumable by the Observer.
     */
    public get(resource: string = '') {
        let url = this._url + resource + '.json';

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /*
    * Helper extractData
    */
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let response = res.json();

        return response || { };
    }

    /*
     * Error Handler
     */
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';

        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}
