const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'EmailAddress',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    user: require('./user'),
    emailAddress: {type: new GraphQLNonNull(require('../email-address-string'))},
    createdAt: {type: new GraphQLNonNull(GraphQLString)},
    updatedAt: {type: new GraphQLNonNull(GraphQLString)}
  })
});