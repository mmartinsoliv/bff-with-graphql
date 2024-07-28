const resolvers = {
    Query: {
      // returns an array of Tracks that will be used to populate the homepage grid of our web client
      tracksForHome: (_, __, { dataSources }) => {
        return dataSources.trackAPI.getTracksForHome();
      },
      repository: async (_parent, { owner, repo }, { dataSources }) => {
        return dataSources.githubAPI.getRepos(owner, repo);
      },
      characters: async (_parent, _args, { dataSources }) => {
        return dataSources.rickAndMortyAPI.getCharacters();
      },
    },
    Track: {
      author: ({ authorId }, _, { dataSources }) => {
        return dataSources.trackAPI.getAuthor(authorId);
      },
    },
  };
  
  module.exports = resolvers;