import { ACCOUNTS, IProvider } from '@core/models';

export interface IUser {
    username: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    accountType: ACCOUNTS.CREATOR;
    providers?: IProvider[];
    tags: string[];
    followers: number[];
    follows: number[];
}
