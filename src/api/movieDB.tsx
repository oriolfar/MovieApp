import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "5ac5fc08cb5f310039bd0660612db4bd",
        language: "en-EN",
    },
});

export default movieDB;
