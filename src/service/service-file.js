export default class ServiceFile {
    baseURL = 'https://aviasales-test-api.kata.academy'
  
    async getResponce(url) {
      try {
        const result = await fetch(`${this.baseURL}/${url}`)
        if (!result.ok) {
          throw new Error(result.status)
        }
        return await result.json()
      } catch (err) {
        throw new Error(err)
      }
    }
  
    async getKey() {
      const res = await this.getResponce('search')
      return res
    }
  
    async getTicket(id) {
      const res = await this.getResponce(`tickets?searchId=${id}`)
      return res
    }
  }
  
  