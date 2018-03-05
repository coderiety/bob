const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    emailAddresses: require('./email-addresses'),
    id: {type: new GraphQLNonNull(require('../uuid'))},
    name: {type: new GraphQLNonNull(GraphQLString)},
    createdAt: {type: new GraphQLNonNull(GraphQLString)},
    updatedAt: {type: new GraphQLNonNull(GraphQLString)}
  })
});