const { RESTDataSource } = require('@apollo/datasource-rest')

class GithubAPI extends RESTDataSource {
  constructor() {
      super();
      this.baseURL = 'https://api.github.com/';
  }
  
  async getRepos(owner, repo) {
    const response = await this.get(`repos/${owner}/${repo}`);
    return {
      name: response.name,
      owner: response.owner.login,
      description: response.description,
      stargazerCount: response.stargazers_count,
      forkCount: response.forks_count,
      url: response.html_url,
    };
  }
}

module.exports = GithubAPI