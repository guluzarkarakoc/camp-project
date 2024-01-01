import axios from 'axios'

export  default class ProductService{
 getProducts(){
  return axios.get("https://fakestoreapi.com/products")
  
 }

 getByProductId(productId){
   return axios.get(`https://localhost:44365/api/Products/getbyid?productId=${productId}`);
 
}
}