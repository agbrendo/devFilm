export interface IMovie {
    id: string;
    title: string;
    imageUrl: string;
    duration: number;
    available: boolean;
    gender: string;
    description: string;
}

export interface IMovieGenres {
    [key: string]: IMovie[];
}
