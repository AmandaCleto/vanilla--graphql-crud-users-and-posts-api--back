import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import config from './config/config';

function startServer({ typeDefs, resolvers }) {
    mongoose.connect(`mongodb+srv://${config.DATABASE_CONNECTION_NAME}:${config.DATABASE_CONNECTION_PASSWORD}@cluster0.zubjunw.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const server = new ApolloServer({ typeDefs, resolvers });

    server
        .listen()
        .then(({ url }) => console.log(`🔥 Server is ready at ${url}! `));
}

export default startServer;
