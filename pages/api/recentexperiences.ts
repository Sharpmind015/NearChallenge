// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Res = {
  src: string,
  title: string,
  description: string,
  users: string,
  id: number
}

export type Data = {
  data: Res[]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(() => {
    res.status(200).json({data : [
      { title: 'DeFi Swap', src: '/DeFi.png', description: 'Swap your digital assets', users: '200', id: 0 },
      { title: 'Docu sign', src: '/Docu.png', description: 'sign smart contracts seamlessly', users: '1k', id: 1 }
    ]})
  }, 1500)
}
