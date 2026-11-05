import { inject, Injectable } from '@angular/core';
import { IPayloadUser } from './auth.model';
import { HttpClient } from '@angular/common/http';
import { APIs } from '../../enviroment';
import { IUser } from '../cache-service/cache.model';

@Injectable()
export class AuthService {
    private readonly httpClient = inject(HttpClient);

    public creatUserHttp(payload: IPayloadUser) {
        return this.httpClient.post<IUser>(APIs.USER, payload);
    }
}
