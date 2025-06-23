import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    // Перевірка наявності токена доступу в заголовках запиту
    if (req.method === 'POST') {
        console.log('Запит отримано:', req.body);

        const {
            name,
            description,
            price,
            unit,
            duration,
            category,
            is_active,
            image_url,
            discount,
            is_popular,
            service_code,
            rating,
        } = req.body;

        // Приведення даних до правильних типів
        const parsedPrice = parseFloat(price);
        const parsedDuration = parseInt(duration, 10);
        const parsedDiscount = discount ? parseInt(discount, 10) : null;
        const parsedRating = rating ? parseFloat(rating) : null;

        if (!name || !description || isNaN(parsedPrice) || !unit || isNaN(parsedDuration) || !category || !service_code) {
            console.log('Помилка: Обов’язкові поля не заповнені або мають неправильний формат');
            return res.status(400).json({ error: 'Всі обов’язкові поля мають бути заповнені та мати правильний формат' });
        }

        try {
            const newService = await prisma.service.create({
                data: {
                    name,
                    description,
                    price: parsedPrice,
                    unit,
                    duration: parsedDuration,
                    category,
                    is_active: is_active ?? true,
                    image_url,
                    discount: parsedDiscount,
                    is_popular: is_popular ?? false,
                    service_code,
                    rating: parsedRating,
                },
            });

            console.log('Послуга успішно додана:', newService);
            res.status(200).json({ message: 'Послуга успішно додана', service: newService });
        } catch (error) {
            console.error('Помилка під час створення послуги:', error);
            res.status(500).json({ error: 'Не вдалося додати послугу' });
        }
    } else {
        res.status(405).json({ error: 'Метод не дозволений' });
    }

    if (req.method === 'GET') {
        try {
            const popularServices = await prisma.service.findMany({
                where: {
                    is_popular: true,
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