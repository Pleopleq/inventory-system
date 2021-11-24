import axios from 'axios'

class UserService {
    private readonly baseURLRegister = 'http://localhost:4040/register'
    private readonly baseURLLogin = 'http://localhost:4040/login'

    async register(credentials: object) {
        const response = await axios.post(this.baseURLRegister, credentials)
        return response.data
    }

    async login(credentials: object) {
        const response = await axios.post(this.baseURLLogin, credentials)
        return response.data
    }
}

export default UserService
