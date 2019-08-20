import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class LoaderService {
    public loader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    setLoader(isLoader: boolean): void {
        this.loader$.next(isLoader);
    }
}
