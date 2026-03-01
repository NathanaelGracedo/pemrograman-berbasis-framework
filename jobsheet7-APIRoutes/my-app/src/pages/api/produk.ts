import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: boolean;
    status_code: number;
    data: {
        id: string;
        nama: string;
        harga: number;
        ukuran: string;
        warna: string;
    }[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
)
    {
        const data = 
        [
            {
                id: '1',
                nama: 'Baju',
                harga: 100000,
                ukuran: 'L',
                warna: 'Merah'
            },
            {
                id: '2',
                nama: 'Celana',
                harga: 150000,
                ukuran: 'M',
                warna: 'Hitam'
            },
            {
                id: '3',
                nama: 'Sepatu',
                harga: 200000,
                ukuran: '42',
                warna: 'Putih'
            },
        ];
        res.status(200).json({status: true, status_code: 200, data: data});
    }