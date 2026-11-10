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
        const user = sessionStorage.getItem(this.keyUser);

        if (!user) return;

        return JSON.parse(user);
    }

    public removeUser() {
        sessionStorage.removeItem(this.keyUser);
    }
}
