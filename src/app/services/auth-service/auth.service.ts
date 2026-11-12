import { inject, Injectable } from '@angular/core';
import { IPayloadUser } from './auth.model';
import { HttpClient } from '@angular/common/http';
import { APIs } from '../../enviroment';
import { IUser } from '../cache-service/cache.model';
import { map } from 'rxjs';
import { CacheService } from '../cache-service/cache.service';

@Injectable()
export class AuthService {
    private readonly httpClient = inject(HttpClient);
    private readonly cacheService = inject(CacheService);

    public creatUserHttp(payload: IPayloadUser) {
        return this.httpClient.post<IUser>(APIs.USER, payload);
    }

    public getUserHttp(email: string) {
        return this.httpClient
            .get<IUser[]>(APIs.USER)
            .pipe(map((user) => user.find((userItem) => userItem.email === email)));
    }

    public logout() {
        this.cacheService.removeUser();
    }
}
