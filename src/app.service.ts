import { Injectable } from '@nestjs/common';
import axios from './utils/axios';
const config = require('config');

@Injectable()
export class AppService {
  healthCheck(): object {
    return { status: 200, message: 'OK' }
  }
  async getUsers(query : any): Promise<any> {
    let querystr = '';
    for(let field in query)
    {
      querystr += `${field}=${query[field]}&`
    }
    querystr = querystr.substring(0, querystr.length-1);
    let res = await axios(config.get('app').url).get(`/users?${querystr}`);
    return res.data;
  }
  async createUsers(input : any): Promise<any> {
    let res = await axios(config.get('app').url).post('/users', input);
    return res.data;
  }
}
