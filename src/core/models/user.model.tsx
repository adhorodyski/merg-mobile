import { ACCOUNTS } from 'src/app/core/models/accounts.enum';
import { IProvider } from 'src/app/core/models/provider.model';

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
