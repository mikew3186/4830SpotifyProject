import {IImage} from 'src/app/types/IImage';


export interface BubbleArtists {
    artistName: string,
    followers: number,
    images: [IImage],
    popularity: number
}

