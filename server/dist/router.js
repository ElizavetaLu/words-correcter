"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./controllers/words");
const authentication_1 = require("./controllers/authentication");
const passport_1 = __importDefault(require("./services/passport"));
const checkToken_1 = require("./middleware/checkToken");
const requireAuth = passport_1.default.authenticate('jwt', { session: false });
const requireLogin = passport_1.default.authenticate('local', { session: false });
exports.default = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ success: true });
    });
    app.post('/login', requireLogin, authentication_1.logIn);
    app.get('/words', checkToken_1.checkToken, words_1.getWords);
    app.post('/new-word', checkToken_1.checkToken, words_1.setBrandNewWord);
    app.post('/corrected-word', checkToken_1.checkToken, words_1.setCorrectedWord);
    app.delete('/delete-word', checkToken_1.checkToken, words_1.deleteWord);
};
