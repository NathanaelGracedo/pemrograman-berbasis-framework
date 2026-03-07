import fetcher from '@/utils/swr/fetcher';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduk';
import { ProductType } from "@/types/Product.type"; 

const HalamanProduk = ({product}:{product: ProductType}) => {
// digunakan client-side  rendering
//    const {query} = useRouter();
//     const {data, error, isLoading} = useSWR(`/api/produk/${query.id}`, fetcher);
//     return (
//         <div>
//           <DetailProduk products={isLoading ? [] : data.data}></DetailProduk>
//         </div>
//     );
// };

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
};

export default HalamanProduk;

// digunakan server-side rendering
export async function getServerSideProps({ params } : { params: { id: string}} ) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`);
  const response = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}