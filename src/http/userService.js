
const testUser = {
    id: "001",
    userName: "Admin",
    userType: "admin",
    password: "test"
};

class UserService {
    checkCredentials(userName, password) {
        console.log(userName, password)
        if(userName === testUser.userName && password === testUser.password) {
            return testUser;
        } else {
            throw new Error('Неверный логин или пароль');
        }
    }
}

export default new UserService();