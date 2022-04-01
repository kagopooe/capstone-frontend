import http from '../http-common'
class MenuService {
    getAll() {
        return http.get('test/products')
    }
}
export default new MenuService();