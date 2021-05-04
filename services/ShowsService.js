import requests from "utils/requests"

const baseUrl = process.env.API_BASE_URL || "https://api.themoviedb.org/3"

class ShowsService {
  async getByGenre(genre) {
    const relativeUrl = requests[genre]?.url || requests.Trending.url
    const response = await fetch(`${baseUrl}${relativeUrl}`)
    return await response.json()
  }
}

export const showsService = new ShowsService()
