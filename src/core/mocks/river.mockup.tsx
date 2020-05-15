import { PROVIDERS, IPost } from '@core/models';
import { mockedPostAuthor } from '@core/mocks';

export const mockedRiver: IPost[] = [
    {
        provider: PROVIDERS.YOUTUBE,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://youtube.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: PROVIDERS.INSTAGRAM,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://instagram.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: PROVIDERS.INSTAGRAM,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://instagram.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: PROVIDERS.YOUTUBE,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://youtube.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: PROVIDERS.TWITTER,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://twitter.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: PROVIDERS.FACEBOOK,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://facebook.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
];
