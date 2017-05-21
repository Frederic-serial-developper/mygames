import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CollectionStatistics } from '../model/collectionStatistics';

@Injectable()
export class CollectionStatisticsService {

    constructor(private http: Http) { }

    getCollectionStatisticsFromFile(): Observable<CollectionStatistics> {
        return this.http.get("app/games-statistics/collection-stats.json").map((response: Response) => {
            return <CollectionStatistics>response.json();
        }).catch(this.handleError);
    }

    getCollectionStatistics(bggUser: string, service: string, includeExpansion: boolean): Observable<CollectionStatistics> {
        return this.http.get(service + "/bgg/collection/" + bggUser + "/stats?includeExpansions=" + includeExpansion).map((response: Response) => {
            return <CollectionStatistics>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }

}
