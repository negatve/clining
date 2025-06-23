import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Отримання популярних послуг із бази даних
            const popularServices = await prisma.service.findMany({
                where: {
                    is_popular: true, // Фільтруємо тільки популярні послуги
                },
                orderBy: {
                    name: 'asc', // Сортуємо за назвою (опціонально)
                },
            });

            res.status(200).json(popularServices);
        } catch (error) {
            console.error('Помилка при отриманні популярних послуг:', error);
            res.status(500).json({ error: 'Не вдалося отримати популярні послуги' });
        }
    } else {
        res.status(405).json({ error: 'Метод не дозволений' });
    }
}