import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Pool } from 'pg';
import bodyParser from 'body-parser'; // 追加

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password: 'postgrespassword',
  port: 5432,
});

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
    createUser(id: Int!, name: String!): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello, world!';
  },
  createUser: async ({ id, name }: { id: string, name: string }): Promise<string> => {
    const client = await pool.connect();
    try {
      await client.query('INSERT INTO users (id, name) VALUES ($1, $2)', [id, name]);
      return `User created with ID: ${id}`;
    } catch (error) {
      console.error('Error creating user:', error);
      return 'Error creating user';
    } finally {
      client.release();
    }
  },
};

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));

