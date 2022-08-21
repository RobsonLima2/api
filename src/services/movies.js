import React,{Component} from "react";
import axios from 'axios';

const FilmesApi = axios.create({
    baseURL :'https://api.themoviedb.org/3/movie/popular?api_key=e0736b3525480e4b9195eeaf6c06ee2f&language=pt-BR&page=1'
}) 

class Movies extends Component {
    state={
        movies:[]
    }
    
    componentDidMount(){
        this.getMovies()
    }
    
    
    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta)
    
        const AllFilmes = resposta.data.results.map((item) => {
            return{
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        console.log(AllFilmes)
        this.setState({
            movies:AllFilmes
        })
        console.log(this.state.movies)
    }
    
        render() {
            return (
                <div>
                    {this.state.movies.map((item) => (
                        <>
                        <ul>
                            <li>{item.original_title}</li>
                            <li>{item.overview}</li>
                            <p>{item.vote_average}</p>
                        </ul>
                        <figure>
                            <img src={item.image}/>
                        </figure>
                        </>
                    ))}
                </div>
            );
        }
    }
    
    export default Movies;