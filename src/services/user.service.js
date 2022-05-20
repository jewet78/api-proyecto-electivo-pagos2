'use-strict'

const { userRepo } = require('../data')

const UserService = () => {
    const findAllUsers = async () => {
        return await userRepo.findAll();
    }

    // create new user on database
    const createUser = async ({ name, email, password }) => {
        try {
            if (!name) {
                console.error("UserService.createUser name is empty")
                return { error: true, message: "name is required" }
            }
            if (!email) {
                console.error("UserService.createUser email is empty")
                return { error: true, message: "email is required" }
            }
            if (!password) {
                console.error("UserService.createUser password is empty")
                return { error: true, message: "password is required" }
            }

            return await userRepo.create({ name, email, password });
        } catch (error) {
            return Promise.reject({ error: true, message: error })
        }
    }
    // find user on database
    const findUser = (id) => {
        let user = {
            id
        };
        return user;
    }
    // update user on database
    const updateUser = (id) => {
        let user = {};
        return user;
    }
    // delete user on database
    const deleteUser = (id) => {
        let user = {};
        return user;
    }

    return {
        findAll: findAllUsers,
        create: createUser,
        find: findUser,
        update: updateUser,
        delete: deleteUser
    }
}

module.exports = UserService();