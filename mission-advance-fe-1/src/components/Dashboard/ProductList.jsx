import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { getProducts } from "../../services/product.service";


export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="flex flex-col gap-5 sm:flex-wrap sm:flex-row sm:justify-center sm:gap-y-8 sm:gap-x-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}