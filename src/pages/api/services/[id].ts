import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      // Перевірка, чи передано ID
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'ID is required and must be a string' });
      }

      // Отримання послуги з бази даних
      const service = await prisma.service.findUnique({
        where: { id: parseInt(id, 10) },
      });

      // Якщо послуга не знайдена
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }

      res.status(200).json(service);
    } catch (error) {
      console.error('Error fetching service:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}