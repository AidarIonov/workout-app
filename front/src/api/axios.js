import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    'Content-type': 'application/json',
  },
})

export const _api = async ({ url, type = 'GET', auth = true, body }) => {
  if (auth) {
    const token = localStorage.getItem('token')
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  let data

  try {
    switch (type) {
      case 'GET':
      default:
        data = await axiosClient.get(url)
        break
      case 'POST':
        data = await axiosClient.post(url, body)
        break

      case 'PUT':
        data = await axiosClient.PUT(url, body)
        break

      case 'DELETE':
        data = await axiosClient.delete(url)
        break
    }
    return data.data
  } catch (e) {
    console.log(e)
    throw e.response && e.response.data ? e.response.data.message : e.message
  }
}
