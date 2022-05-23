// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env.local' });

module.exports = {
  overwrite: true,
  schema: [
    {
      "https://workout-220216.hasura.app/v1/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/libs/graphql/queries/*.ts', 'src/libs/graphql/mutations/*.ts', 'src/libs/graphql/queries/*.graphql', 'src/libs/graphql/mutations/*.graphql'],
  generates: {
    'src/libs/graphql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        useIndexSignature: true,
        withComponent: false,
        withHooks: true,
        withHOC: false,
        scalars: {
          date: 'string',
          numeric: 'number',
          timestamptz: 'string',
        },
      },
    },
    'src/libs/graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};
