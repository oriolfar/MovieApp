import React, { useEffect } from 'react'
import { MovieFull } from '../interfaces/movieInterfaces';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


export const useMovieDetails = (movieId: number) => {

    const [state, setState] = React.useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }


    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}
