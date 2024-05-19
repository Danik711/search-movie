import { MovieType, MovieTypeBackend } from "./types";

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