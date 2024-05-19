import { ActorDetail, MovieFullDetails, MovieType, MovieTypeBackend } from "./types";

export function mapBackEndMovieToFrontEnd(backEndMovie: MovieTypeBackend[]) {
    const parsedMovie: MovieType[] = [];
    
    backEndMovie.map((movie, index) => {
        parsedMovie.push({
            aka: movie["#AKA"],
            year: movie["#YEAR"],
            rank: movie["#RANK"],
            title: movie["#TITLE"],
            actors: movie["#ACTORS"],
            imdb_id: movie["#IMDB_ID"],
            imdb_iv: movie["#IMDB_IV"],
            imdb_url: movie["#IMDB_URL"],
            img_poster: movie["#IMG_POSTER"],
            photo_width: movie.photo_width,
            photo_height: movie.photo_height,
        });
    }); 

    return parsedMovie;
}

export function mapBackEndMovieFullDetailsToFrontEnd(backEndFullDetail: any) {
    const actors: ActorDetail[] = [];

    if(backEndFullDetail.actor && backEndFullDetail.actor.length > 0) {
        for(let i = 0; i < backEndFullDetail.actor.length; i++) {
            actors.push({
                name: backEndFullDetail.actor[i].name,
                photo: backEndFullDetail.actor[i].url
            });
        }
    }
    
    const comment = backEndFullDetail.review.reviewBody ?
    backEndFullDetail.review.reviewBody
    .replace(/&apos;/g, "\'")
    .replace(/&quot;/g, "\"") : "";


    const data: MovieFullDetails = {
        actors: actors,
        name: backEndFullDetail.name,
        image: backEndFullDetail.image,
        keywords: backEndFullDetail.keywords,
        description: backEndFullDetail.description,
        review: {
            comment: comment,
            author: backEndFullDetail.review.author.name,
        },
    };

    return data;
}