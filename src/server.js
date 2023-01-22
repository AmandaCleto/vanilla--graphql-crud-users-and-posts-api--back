import { ApolloServer, PubSub } from "apollo-server";
import mongoose from "mongoose";
import config from "./config/config";

function startServer({ typeDefs, resolvers }) {
    mongoose.connect(
        `mongodb+srv://${config.DATABASE_CONNECTION_NAME}:${config.DATABASE_CONNECTION_PW}@cluster0.${config.DATABASE_CONNECTION_TYPE}.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const pubsub = new PubSub();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { pubsub },
    });

    server
        .listen()
        .then(({ url }) => console.log(`🔥 Server is ready at ${url}`));
}

export default startServer;
