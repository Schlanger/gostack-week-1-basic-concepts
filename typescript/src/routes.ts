import {Request, Response} from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld (request: Request, response: Response){
  const user = CreateUser({
    name:'Leo',
    email:'leoschlanger@gmail.com',
    password:'123456',
    techs:['NodeJs','ReactJS','ReactNative',{title:'JavaScript', experience:100}],
  });
  
  response.json({title: 'Hello World', user});
}