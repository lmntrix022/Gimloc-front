import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, city, postalCode, streetAddress, country, cartProducts, daysBetween } = req.body;

    try {
      await client.connect();
      const database = client.db('carRental');
      const reservations = database.collection('reservations');

      const reservation = {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        cartProducts,
        daysBetween,
        createdAt: new Date(),
      };

      const result = await reservations.insertOne(reservation);

      res.status(201).json({ message: 'Reservation saved', reservationId: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save reservation' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
