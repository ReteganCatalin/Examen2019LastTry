import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actor, Movie} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url='http://localhost:8081/api/'

  constructor(private httpClient: HttpClient) { }

  filterMovies(): Observable<Movie[]>
  {
    let urlFilter=`http://localhost:8081/api/movies`
    return this.httpClient
      .get<Array<Movie>>(urlFilter);
  }

  getMovie(id:number): Observable<Movie>
  {
    let urlMovie=`http://localhost:8081/api/movie/detail/${id}`
    return this.httpClient.get<Movie>(urlMovie);
  }

  getAvailableActors(): Observable<Actor[]>
  {
    let urlAvailable=`http://localhost:8081/api/availableActors`
    return this.httpClient.get<Array<Actor>>(urlAvailable)
  }

  addActor(movieId:number,actorId:number): Observable<Movie>
  {
    let urlAdd=`http://localhost:8081/api/addActor/${movieId}/${actorId}`
    return this.httpClient.get<Movie>(urlAdd)
  }

}
