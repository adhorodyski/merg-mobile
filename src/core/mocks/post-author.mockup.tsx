import { ACCOUNTS, PROVIDERS, IPostAuthor } from '../models';

export const mockedPostAuthor: IPostAuthor = {
    accountType: ACCOUNTS.CREATOR,
    username: 'thefutur',
    name: 'Chris Do',
    email: 'cdo@mail.com',
    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
    about:
        'Teach creatives how to make money doing what they love. Impact 1 Billion lives. Entrepreneur, Educator, Agitator.',
    providers: [
        {
            name: PROVIDERS.INSTAGRAM,
            details: [
                {
                    username: 'thefutur',
                    avatar: 'https://bit.ly/3bf1qj7',
                },
            ],
        },
        {
            name: PROVIDERS.TWITTER,
            details: [
                {
                    username: 'futur',
                    avatar: 'https://bit.ly/394qU17',
                },
            ],
        },
    ],
    followers: [],
    follows: [],
};
