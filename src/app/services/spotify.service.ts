import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDJRPrfbi1PkioF7VJUWX7tHa0XApSuFwLgiGCauqWT1_Fj2j7lYIfZTc85omCmn5EfYdtZbAGiwAGNvic"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }
  getArtista(termino:string){
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDJRPrfbi1PkioF7VJUWX7tHa0XApSuFwLgiGCauqWT1_Fj2j7lYIfZTc85omCmn5EfYdtZbAGiwAGNvic"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
      headers
    });
  }
}
