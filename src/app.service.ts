import { Injectable } from '@nestjs/common';
import axios from './utils/axios';
const config = require('config');

@Injectable()
export class AppService {
  healthCheck(): object {
    return { status: 200, message: 'OK' }
  }
  async getUsers(query : any): Promise<any> {
    console.log("url",config.get('app').url)
    let res = await axios(config.get('app').url).get(`/users`);
    return res.data;
  }
}
