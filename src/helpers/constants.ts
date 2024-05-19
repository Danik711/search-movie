import { MovieType } from "./types";

export const EXTRA_MOVIES: MovieType[] = [
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        imdb_id: "tt0120737",
        rank: 231,
        actors: "Elijah Wood, Ian McKellen",
        aka: "The Lord of the Rings: The Fellowship of the Ring (2001) ",
        imdb_url: "https://imdb.com/title/tt0120737",
        imdb_iv: "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0120737&rhash=77ed0696a538f4",
        img_poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        photo_width: 1978,
        photo_height: 2936
    },
    {
        title: "Interstellar",
        year: 2014,
        imdb_id: "tt0816692",
        rank: 205,
        actors: "Matthew McConaughey, Anne Hathaway",
        aka: "Interstellar (2014) ",
        imdb_url: "https://imdb.com/title/tt0816692",
        imdb_iv: "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0816692&rhash=77ed0696a538f4",
        img_poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        photo_width: 2430,
        photo_height: 3600
    },
    {
        title: "Iron Man",
        year: 2008,
        imdb_id: "tt0371746",
        rank: 1042,
        actors: "Robert Downey Jr., Gwyneth Paltrow",
        aka: "Iron Man (2008) ",
        imdb_url: "https://imdb.com/title/tt0371746",
        imdb_iv: "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0371746&rhash=77ed0696a538f4",
        img_poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
        photo_width: 1382,
        photo_height: 2048
    },
    {
        title: "Star Wars: Episode I - The Phantom Menace",
        year: 1999,
        imdb_id: "tt0120915",
        rank: 77,
        actors: "Ewan McGregor, Liam Neeson",
        aka: "Star Wars: Episode I - The Phantom Menace (1999) ",
        imdb_url: "https://imdb.com/title/tt0120915",
        imdb_iv: "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0120915&rhash=77ed0696a538f4",
        img_poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        photo_width: 1230,
        photo_height: 1845
    }
];

export const TEST_MOVIE_DETAIL = {
    "short": {
        "@context": "https://schema.org",
        "@type": "Movie",
        "url": "https://www.imdb.com/title/tt10366206/",
        "name": "John Wick: Chapter 4",
        "alternateName": "Джон Уик 4",
        "image": "https://m.media-amazon.com/images/M/MV5BOGYxMTI5NTItNGQ3ZC00ZTg0LWI1NmUtMzgzMjdiODQyNTQ0XkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_.jpg",
        "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "review": {
          "@type": "Review",
          "itemReviewed": {
            "@type": "Movie",
            "url": "https://www.imdb.com/title/tt10366206/"
          },
          "author": {
            "@type": "Person",
            "name": "maximkuzmin-09303"
          },
          "dateCreated": "2023-04-22",
          "inLanguage": "English",
          "name": "Great action scenes followed up with poor dialogues and story",
          "reviewBody": "Previous movies had a better story with more dialogues to make it interesting. Just felt like the movie was running out of ideas for the story and dialogues. But the action scenes were amazing shooting &amp; fight scenes were taken to another level. Filming one shooting scene from above to see what is going on the other side of the room was awesome and interesting.\n\nHopefully this will be a lesson for the producer, that people want dialogues aswell as action in movies. Not just Keanu saying sorry and you owe me... The dialogues were to few for today&apos;s audience to completely enjoy this movie. Story and dialogues are as important as action in a movie.",
          "reviewRating": {
            "@type": "Rating",
            "worstRating": 1,
            "bestRating": 10,
            "ratingValue": 6
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingCount": 335802,
          "bestRating": 10,
          "worstRating": 1,
          "ratingValue": 7.7
        },
        "contentRating": "18+",
        "genre": [
          "Action",
          "Crime",
          "Thriller"
        ],
        "datePublished": "2023-03-23",
        "keywords": "one man army,fourth part,john wick character,gun duel,assassin",
        "trailer": {
          "@type": "VideoObject",
          "name": "Final Trailer",
          "embedUrl": "https://www.imdb.com/video/imdb/vi289916185",
          "thumbnail": {
            "@type": "ImageObject",
            "contentUrl": "https://m.media-amazon.com/images/M/MV5BMjFjN2FjZWEtNzFlNC00Y2RiLThkMjgtMzMzZGMyMWUwNTM5XkEyXkFqcGdeQWpnYW1i._V1_.jpg"
          },
          "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjFjN2FjZWEtNzFlNC00Y2RiLThkMjgtMzMzZGMyMWUwNTM5XkEyXkFqcGdeQWpnYW1i._V1_.jpg",
          "url": "https://www.imdb.com/video/vi289916185/",
          "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
          "duration": "PT1M31S",
          "uploadDate": "2023-02-16T15:29:36.159Z"
        },
        "actor": [
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm0000206/",
            "name": "Keanu Reeves"
          },
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm0000401/",
            "name": "Laurence Fishburne"
          },
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm1745190/",
            "name": "George Georgiou"
          }
        ],
        "director": [
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm0821432/",
            "name": "Chad Stahelski"
          }
        ],
        "creator": [
          {
            "@type": "Organization",
            "url": "https://www.imdb.com/company/co0836036/"
          },
          {
            "@type": "Organization",
            "url": "https://www.imdb.com/company/co0060306/"
          },
          {
            "@type": "Organization",
            "url": "https://www.imdb.com/company/co0053177/"
          },
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm8748334/",
            "name": "Shay Hatten"
          },
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm3360218/",
            "name": "Michael Finch"
          },
          {
            "@type": "Person",
            "url": "https://www.imdb.com/name/nm4401003/",
            "name": "Derek Kolstad"
          }
        ],
        "duration": "PT2H49M"
    }
};