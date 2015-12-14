var User      = require('./controller/user');

// API Server Endpoints
exports.endpoints = [
    { method: 'POST', path: '/user', config: User.create},
    { method: 'POST', path: '/login', config: User.login},
    { method: 'POST', path: '/userList', config: User.userList},
    { method: 'POST', path: '/updateUser', config: User.updateUser},
    { method: 'POST', path: '/lastLogin', config: User.lastLogin}
];