import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import TampilanProduk from "../../views/produk";

const kategori = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/produk", fetcher);

    const handleRefresh = () => {
        mutate();
    };

    const products = data?.data || [];

    return (
        <div>
            <button className="border-2 border-black p-2 rounded mb-4 ml-8 mt-4" onClick={handleRefresh}>
                Refresh Data
            </button>
            <TampilanProduk products={products} isLoading={isLoading} />
        </div>
    );
};

export default kategori;