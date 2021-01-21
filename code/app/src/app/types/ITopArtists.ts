import { IImage } from './IImage';

export interface ITopArtists {
    items: [{
        external_urls: {
            spotify: string;
        };
        followers: {
            href: null; // check
            total: number;
        };
        genres: [string];
        href: string;
        id: string;
        images: [IImage];
        name: string;
        popularity: number;
        type: string;
        uri: string;
    }];
    total: number;
    limit: number;
    offset: number;
    previous: null; // check for non null val type
    href: string;
    next: string;
};