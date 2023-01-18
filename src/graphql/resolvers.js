import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const typeDefs = mergeResolvers(typesArray);

console.log(typeDefs);

export default typeDefs;