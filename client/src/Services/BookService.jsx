import axios from "axios";
 
// local routing for books api database
const BOOKS_URL = 'http://localhost:8080/books/'
 
class BooksService{
    getBook = (isbn) => {
        return axios.get(BOOKS_URL + isbn);
    };
    getAllBooks = () => {
        return axios.get(BOOKS_URL);
    };
    postBooks = (object) => {
        return axios.post(BOOKS_URL, object);
    };
    patchBooks = (object) => {
        return axios.patch(BOOKS_URL, object);
    };
    deleteBooks = (isbn) =>{
        return axios.delete(BOOKS_URL + isbn);
    };
}
 
export default new BooksService();