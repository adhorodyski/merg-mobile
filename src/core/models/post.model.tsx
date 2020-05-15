import { PROVIDERS, IPostAuthor } from '@core/models';

export interface IPost {
    author: IPostAuthor;
    provider: PROVIDERS;
    timestamp: Date;
    source: string;
    embed: string;
}
