import { AxiosInstance } from 'axios';
import createInstance from '../axios';

class BaseService {
   //
   BASE_URL: string = import.meta.env.VITE_BASE_URL + '/api';

   BASE_ENDPOINT: string = '';

   DEFAULT_LIMIT: number = 10;

   DEFAULT_PAGE: number = 1;

   PRIMARY_KEY: string = 'id';

   DEFAULT_SORT: 'asc' | 'desc' = 'asc';

   request!: AxiosInstance;

   requestParams: TypeRequestParams | null = null;

   constructor() {
      this.setRequest();
   }

   setRequest() {
      this.request = createInstance(this.BASE_URL);

      this.requestParams = {
         page_index: this.DEFAULT_PAGE,
         page_size: this.DEFAULT_LIMIT,
         sort: this.DEFAULT_SORT,
      };
   }

   /**
    * @param {Object} query
    * @returns
    */
   get<G>(query?: TypeRequestParams | G): Promise<Array<G>> {
      const params = {
         ...this.requestParams,
         ...query,
      };

      return this.request.get(this.BASE_ENDPOINT, { params });
   }

   /**
    * @param {string} id
    * @returns
    */
   find<F>(id: string): Promise<F> {
      const url = `${this.BASE_ENDPOINT}/${id}`;
      return this.request.get(url);
   }

   /**
    * @param {Object} data
    * @returns
    */
   create<C>(data: TDataBaseService): Promise<C> {
      return this.request.post(this.BASE_ENDPOINT, data);
   }

   /**
    * @param {Object} data
    * @returns
    */
   update<U>(data: TDataBaseService, id?: string, method: 'put' | 'patch' = 'put'): Promise<U> {
      const updateId = id || data[this.PRIMARY_KEY];
      return this.request[method](`${this.BASE_ENDPOINT}/${updateId}`, data);
   }

   /**
    * @param {Object} data
    * @returns
    */
   save<S>(data: TDataBaseService): Promise<S> {
      // kiểm tra xem có id nếu có thì update còn chưa thì tạo mới
      if (data.hasOwnProperty(this.PRIMARY_KEY) && data[this.PRIMARY_KEY]) {
         return this.update(data);
      } else {
         return this.create(data);
      }
   }

   /**
    * @param {string} id
    * @returns
    */
   delete(id: string): Promise<AxiosInstance> {
      return this.request.delete(this.BASE_ENDPOINT + '/' + id);
   }
}

export default BaseService;
