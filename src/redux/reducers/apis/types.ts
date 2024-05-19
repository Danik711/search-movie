export type MovieType = {
    aka?: string;
    year: number;
    rank?: number;
    title: string;
    actors: string;
    imdb_id: string;
    imdb_iv?: string;
    imdb_url?: string;
    img_poster: string;
    photo_width: number;
    photo_height: number;
};

export type ActorDetail = {
    name: string;
    photo: string;
};

export type MovieFullDetails = {
    name: string;
    image: string;
    keywords: string;
    description: string;
    actors: ActorDetail[];
    review: {
        author: string;
        comment: string;
    },
};

export type MovieTypeBackend = {
    "#AKA": string; 
    "#YEAR": number; 
    "#RANK"?: number; 
    "#TITLE": string; 
    "#ACTORS": string; 
    "#IMDB_ID": string; 
    "#IMDB_IV"?: string; 
    "#IMDB_URL"?: string; 
    "#IMG_POSTER": string; 
    "photo_width": number;
    "photo_height": number; 
};