import React,{Component} from "react";
import axios from 'axios';

const FilmesApi = axios.create({
    baseURL :'https://api.themoviedb.org/3/movie/popular?api_key=e0736b3525480e4b9195eeaf6c06ee2f&language=pt-BR&page=1'
}) 

class App extends Component {
  render(){
    return(
     <div>
      
     </div>
    )
  }
}