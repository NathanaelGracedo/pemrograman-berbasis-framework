import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import TampilanProduk from "../../views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const kategori = () => {
    const {push} = useRouter();
    const [products, setProducts] = useState([]);

    const {data, error, isLoading } = useSWR("/api/products", fetcher);

    return (
        <div>
            <TampilanProduk products={isLoading || !data ? [] : data.data } />
        </div>
    );
};

export default kategori;