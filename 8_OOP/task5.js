class User{
    #password;
    constructor(name, password){
        this._name = name;
        this.#password = password;
    }
    #updatePassword(newPassword){
        this.#password = newPassword
    }
    resetPassword(newPassword){
        this.#updatePassword(newPassword);
    }
}

class Admin extends User{
    isAdmin = true;
    constructor(name, password){
        super(name, password);
    }
    deleteUser(userToDelete){
        return `Пользователь ${userToDelete} был удален.`
    }
}

const testUser = new User('user', 'user123');
const testAdmin = new Admin('admin', 'admin123');

testUser.resetPassword('newPass123');

const result = [testUser, testAdmin];
console.log(result);
console.log(testAdmin.deleteUser('user123'));