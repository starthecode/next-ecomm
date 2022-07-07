import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('Already connected');
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  //Make new connection

  // const options = {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
  // };

  const uri = process.env.MONGODB_URI;
  const db = mongoose.connect(uri);
  console.log('new connection');
  connection.isConnected = db;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

const db = { connect };
export default db;
