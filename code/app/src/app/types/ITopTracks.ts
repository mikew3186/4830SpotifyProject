import { IImage } from './IImage';
import { IArtist } from './IArtist';

export interface ITopTracks {
    items: [{
        external_urls: {
            spotify: string;
        };
        external_ids: {
            isrc: string;
        };
        album: {
            album_type: string;
            external_urls: {
                spotify: string;
            };
            artists: [IArtist];
            available_markets: [string];
            href: string;
            id: string;
            images: [IImage];
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
        };

        artists: [IArtist];
        available_markets: [string];
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        popularity: number;
        preview_url: string;
        track_number: string;
        type: string;
        uri: string;
        explicit: boolean;
        duration_ms: number;
        disc_number: number;

    }];
    total: number;
    limit: number;
    offset: number;
    previous: null; // check for non null val type
    href: string;
    next: string;
};