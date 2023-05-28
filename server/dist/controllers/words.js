"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBrandNewWord = exports.setCorrectedWord = exports.getWords = void 0;
const correctedWords_1 = require("../models/correctedWords");
const words_1 = require("../models/words");
const getWords = async (req, res, next) => {
    const { page, limit, sourceLang, targetLang, keyWords } = req.query;
    const userId = req.user;
    const options = {
        page: typeof page === 'string' ? parseInt(page) : 1,
        limit: typeof limit === 'string' ? parseInt(limit) : 15
    };
    const query = {
        sourceLang,
        targetLang,
        sourceWord: { $regex: keyWords ? keyWords : '', $options: 'i' },
        usersList: { $nin: userId }
    };
    words_1.Words.paginate(query, options, (error, result) => {
        if (error)
            return res.status(422).json({ error });
        res.status(200).send(result);
    });
};
exports.getWords = getWords;
const setCorrectedWord = (req, res, next) => {
    const { sourceLang, sourceWord, targetLang, targetWord, speechPart, transcriptions, synonyms, antonyms, definitions, examples, id } = req.body;
    const userId = req.user;
    words_1.Words.updateOne({ _id: id }, { $addToSet: { usersList: userId } })
        .then(() => { })
        .catch(() => { });
    const words = new correctedWords_1.CorrectedWords({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        examples,
        correct: true,
        userId
    });
    words.save()
        .then(() => res.status(200).send({ result: 'Changes were successfully saved' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }));
};
exports.setCorrectedWord = setCorrectedWord;
const setBrandNewWord = (req, res, next) => {
    const { sourceLang, sourceWord, targetLang, targetWord, speechPart, transcriptions, synonyms, antonyms, definitions, examples } = req.body;
    const userId = req.user;
    const word = new words_1.Words({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        examples,
        usersList: [userId],
        correct: false
    });
    word.save()
        .then(() => res.status(200).send({ result: 'New word was added' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }));
};
exports.setBrandNewWord = setBrandNewWord;
// const word = new Words({
//     sourceLang: 'en',
//     sourceWord: 'kr,;ltbms',
//     targetLang: 'be',
//     targetWord: ';eknlk',
//     speechPart: ['adf','advc'],
//     transcriptions: ['/dsfv/', '/tyhndt/'],
//     synonyms: ['sdfgb','rbtrtb','rtbsr','srbs','sbdsfb'],
//     antonyms: ['sedfv','tuikui','qwefqdwe','uikui'],
//     definitions: ['gvhrefjkkwdll gbkreflwd jhbeknflw', 'kebn; eqklwlkq cv jae hje cea'],
//     examples: ['kdjbf dfsvdfv df as dade', 'qerfq erfqer fre f', 'hbjakn akdnv;al awkjefkje'],
//     usersList: [],
//     correct: false
// });
// word.save().then(res=>console.log(res))
// CorrectedWords.deleteMany({sourceLang:"en"}).then(res=>console.log(res))
