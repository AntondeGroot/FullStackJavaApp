import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  
  executeHelloWorldBeanService(){
    this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean").subscribe(
      response => this.handleSuccessfulResponse(response),
      error => handleErrorResponse(error)
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(name: String){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }

  handleSuccessfulResponse(response: any){
    console.log(response.text);
  }
}

export class HelloWorldBean {
  constructor(public text: string) {}
}

function handleErrorResponse(error: any): void {
  throw new Error('Function not implemented.');
}

