import { IPayloadUser } from "../auth-service/auth.model";

export interface IUser extends IPayloadUser{
    id: string,
}