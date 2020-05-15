import { ACCOUNTS, IProvider } from '@core/models';

export interface IPostAuthor {
    username: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    accountType: ACCOUNTS;
    providers: IProvider[];
    followers: number[];
    follows: number[];
}
