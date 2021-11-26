import axios from 'axios'

class UserService {
    private readonly baseURLRegister = 'http://localhost:4040/register'
    private readonly baseURLLogin = 'http://localhost:4040/login'

    async register(credentials: object) {
        try {
            const response = await axios.post(this.baseURLRegister, credentials)
            return response
        } catch (error) {
            console.log(error)
        }
        
    }

    async login(credentials: object) {
        try {
            const response = await axios.post(this.baseURLLogin, credentials)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserService
