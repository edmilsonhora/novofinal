import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {


  list!:todo[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe((result) => {this.list = result});

  }

}

interface todo{
  userId: number;
  id:number;
  title:string;
  completed:boolean
}
