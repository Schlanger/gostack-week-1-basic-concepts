"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Leo',
        email: 'leoschlanger@gmail.com',
        password: '123456',
        techs: ['NodeJs', 'ReactJS', 'ReactNative', { title: 'JavaScript', experience: 100 }],
    });
    response.json({ title: 'Hello World', user: user });
}
exports.helloWorld = helloWorld;
