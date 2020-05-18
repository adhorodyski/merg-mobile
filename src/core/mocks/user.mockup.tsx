import { ACCOUNTS, PROVIDERS, IUser } from 'core/models';

export const mockedUser: IUser = {
    accountType: ACCOUNTS.CREATOR,
    username: 'm_brownlee',
    name: 'MKBHD',
    email: 'mbrown@mail.com',
    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
    about: 'I promise I wont overdo the filters.',
    tags: ['music', 'technology'],
    providers: [
        {
            name: PROVIDERS.YOUTUBE,
            details: [
                {
                    username: 'MKBHD',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
        {
            name: PROVIDERS.INSTAGRAM,
            details: [
                {
                    username: 'marcus_brownlee',
                    avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
                },
                {
                    username: 'mkbhd',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
    ],
    followers: [],
    follows: [],
};
