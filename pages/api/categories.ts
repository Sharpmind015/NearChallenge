// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  src: string,
  title: string,
  colorType: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { title: 'Exchanges', src: '/Exchanges.png', colorType: 'bg-blue-500' },
    { title: 'Games', src: '/Games.png', colorType: 'bg-gray-700' },
    { title: 'Marketplaces', src: '/Marketplaces.png', colorType: 'bg-green-100' },
    { title: 'Defi2', src: '/Defi2.png', colorType: 'bg-pink-100' },
    { title: 'Collectibles', src: '/Collectibles.png', colorType: 'bg-blue-200' },
    { title: 'Utilities', src: '/Utilities.png', colorType: 'bg-blue-600' },
  ])
}
