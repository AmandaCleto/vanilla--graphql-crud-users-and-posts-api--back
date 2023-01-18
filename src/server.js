import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
    mongoose.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const server = new ApolloServer({ typeDefs, resolvers });

    console.log(typeDefs);
    console.log(resolvers);

    server
        .listen()
        .then(({ url }) => console.log(`🔥 Server is ready at ${url}!`));
}

export default startServer;
