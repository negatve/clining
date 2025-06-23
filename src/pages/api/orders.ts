import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const orders = await prisma.order.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: "Помилка сервера. Спробуйте пізніше." });
    }
  }

  if (req.method === "POST") {
    try {
      const {
        serviceName,
        name,
        phone,
        email,
        city,
        address,
        area,
        date,
        time,
        comments,
        paymentMethod,
        agree,
      } = req.body;

      if (!serviceName || !name || !phone || !city || !address || !area || !date || !time || !agree) {
        return res.status(400).json({ error: "Будь ласка, заповніть усі обов’язкові поля." });
      }

      const order = await prisma.order.create({
        data: {
          serviceName,
          name,
          phone,
          email,
          city,
          address,
          area: parseFloat(area),
          date: new Date(date),
          time,
          comments,
          paymentMethod,
          agree,
        },
      });

      return res.status(201).json(order);
    } catch (error) {
      return res.status(500).json({ error: "Помилка сервера. Спробуйте пізніше." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: `Метод ${req.method} не дозволений.` });
}