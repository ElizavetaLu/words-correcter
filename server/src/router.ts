import { deleteWord, getWords, setBrandNewWord, setCorrectedWord } from './controllers/words';
import { logIn } from './controllers/authentication';
import passport from './services/passport';
import { checkToken } from './middleware/checkToken';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


export default (app: any) => {

    app.get('/', requireAuth, (req: any, res: any) => {
        res.send({ success: true })
    })

    app.post('/login', requireLogin, logIn);
 
    app.post('/words', checkToken, getWords);
    app.post('/new-word', checkToken, setBrandNewWord);
    app.post('/corrected-word', checkToken, setCorrectedWord);
    app.delete('/delete-word', checkToken, deleteWord);
}
