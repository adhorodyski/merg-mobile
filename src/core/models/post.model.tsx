import { IPostAuthor } from 'src/app/core/models/post-author.model';
import { PROVIDERS } from 'src/app/core/models/providers.enum';

export interface IPost {
    author: IPostAuthor;
    provider: PROVIDERS;
    timestamp: Date;
    source: string;
    embed: string;
}
