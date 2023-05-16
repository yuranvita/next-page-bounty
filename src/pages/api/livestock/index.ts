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
                const data = await prisma.pecuaria.findMany()

                res.status(200).json({ base: data })
        }
    } catch (error: any) {
        res.status(500).json(error)
    }

}
