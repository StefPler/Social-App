const User = require('../schemas/Users');

class UserService {

    async createUser(data) {
        return User.create({
            name: "Trueba Tetano",
            email: "trueba@gmail.com"
        });
    }

    async getUsers() {
        return User.find({});
    }

    async getUser() {

    }

    async updateUser() {

    }

    async deleteUser() {

    }
}

module.exports = UserService;