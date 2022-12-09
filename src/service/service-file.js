export default class ServiceFile {
    baseURL = 'https://aviasales-test-api.kata.academy'
  
    async getResponce(url) {
      try {
        const result = await fetch(`${this.baseURL}/${url}`)
        console.log(result);
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
      console.log(res);
      return res
    }
  
    async getTicket(id) {
      const res = await this.getResponce(`tickets?searchId=${id}`)
      console.log(res);
      return res
    }
  }
  
  