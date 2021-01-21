import { IImage } from './IImage';

export interface INewReleases {
    href: string;
    items: [{
        album_type: string;
        artists: [{
            external_urls: {
                spotify: string;
            }
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }];
        available_markets: [string];
        external_urls: string;
        href: string;
        id: string;
        images: [IImage];
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
    }];
    limit: number;
    next: string;
    offset: number;
    previous: null; // check what the non-null val is
    total: 99;
}