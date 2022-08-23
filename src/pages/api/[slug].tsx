import {NextApiRequest, NextApiResponse} from 'next'
import { NextApiRequestQuery } from 'next/dist/server/api-utils'
import {prisma} from "../../db/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {query} = req.query;
 
    console.log(query, req)
    // const data = await prisma.shortLink.findFirst({
    //     where:{
    //         slug:{
    //             equals:query.id
    //         }
    //     }
    // })
    
}