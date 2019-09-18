import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `

type Query {
    games(query: String): [GAMES!]!
    user: USER!
}
type GAMES {
    id: ID!
    title:String!
    price: Float!
    image: String!
    platforms: [ICON!]
}

type ICON {
    name: String!
    image: String!
}

type USER {
    id: ID!
    name: String!
    email: String!
    wallet: Float!
    wishList: [GAMES]
    
}
`;
// note: for images see if you can point to location as string

const resolvers = {
	user(parent, args, ctx, info) {
		return {
			id: 'learning',
			name: 'learning',
			email: 'learning',
			wallet: 'learning',
			wishList: 'learning'
		};
	},
	games(parent, args, ctx, info) {
		return args.filter((game) => {
			// learning: dynamic v
		});
	}
};
