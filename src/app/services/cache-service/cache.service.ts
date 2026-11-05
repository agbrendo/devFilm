import { Injectable } from '@angular/core';
import { IUser } from './cache.model';

@Injectable()
export class CacheService {
    private readonly keyUser = 'userInfo';

    public saveUser(user: IUser) {
        const userString = JSON.stringify(user);
        sessionStorage.setItem(this.keyUser, userString);
    }

    public getUser() {
        return JSON.parse(sessionStorage.getItem(this.keyUser) ?? '');
    }

    public removeUser() {
        sessionStorage.removeItem(this.keyUser);
    }
}
