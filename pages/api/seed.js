import db from '../../utils/db';
import User from '../../models/User';
import data from '../../utils/data';

const handler = async (req, res) => {
  await db.connect();
  User.deleteMany();
  User.insertMany(data.users);

  res.send({ message: 'seeded successfully' });
};

export default handler;
