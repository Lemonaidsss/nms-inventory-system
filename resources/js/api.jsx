import  {create} from 'apisauce';

const api = create({
    baseURL: '/',
    headers: { 'Accept': 'application/json' }
});

export default api;