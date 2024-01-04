import {
  connect as connectMongoDB,
  disconnect as disconnectMongoDB,
} from './mongoDB/index';

const connectDatabases = async () => {
  await connectMongoDB();
};

const disconnectDatabases = async () => {
  await disconnectMongoDB();
};

export { connectDatabases, disconnectDatabases };
