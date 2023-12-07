import BaseService from '@Core/service';
import authPathUrl from './path-url';

class AuthService extends BaseService {
   BASE_ENDPOINT = authPathUrl.BASE;

   constructor() {
      super();
      this.setRequest();
   }

   getUser() {
      return this.request.get(this.BASE_ENDPOINT + '/' + authPathUrl.GET_USER);
   }
}

const authService = new AuthService();

export default authService;
