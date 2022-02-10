import {Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class FindProductController {
    async handle(request: Request, response: Response){
        const { id } = request.body;

        const product = await prismaClient.product.findFirst({
            where: {
                id,
            },
            //Trás somente a tabela do relacionamento
            // select: {
            //     ProductCategory: true,
            // },
            include: {
                ProductCategory: {},
            },
        });
        

        return response.json(product);
    }
}