import { prisma } from '@/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        switch (req.method) {
            case "GET":
                const data = await prisma.queimadas.findMany({

                    where: {

                    },

                    take: 1000
                })
                res.status(200).json({ data })
                break;
        }
    } catch (error: any) {
        console.log(error)
        res.status(500).json(error)
    }

}
