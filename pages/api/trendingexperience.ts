// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  src: string,
  title: string,
  description: string,
  users: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { title: 'DeFi Swap', src: '/DeFi.png', description: 'Swap your digital assets', users: '200' },
    { title: 'Docu sign', src: '/Docu.png', description: 'sign smart contracts seamlessly', users: '1k' }
  ])
}
