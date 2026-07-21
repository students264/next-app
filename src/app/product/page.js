"use client"
import ProductDetail from "../Components/ProductDetail";
import axios from "axios";
import {useEffect , useState} from "react";
export default function Product() {
    const [product, setProduct] = useState([]);
    let getproduct = ()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            setProduct(res.data.products)
            console.log(res.data.products)
        })
    }
    useEffect(()=>{
        getproduct()
    },[])
    return (
     <main className="w-full max-w-6xl mx-auto px-4 my-8 z-0">
        <ProductDetail product={product} />
     </main>
    );
}