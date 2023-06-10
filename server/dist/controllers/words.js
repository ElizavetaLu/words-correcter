"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWord = exports.setBrandNewWord = exports.setCorrectedWord = exports.getWords = void 0;
const correctedWords_1 = require("../models/correctedWords");
const words_1 = require("../models/words");
const getWords = async (req, res, next) => {
    const { page, limit, keyWords } = req.query;
    const { sourceLang, targetLang } = req.body;
    const userId = req.user;
    const options = {
        page: typeof page === 'string' ? parseInt(page) : 1,
        limit: typeof limit === 'string' ? parseInt(limit) : 15
    };
    const query = {
        "sourceLang.code": sourceLang.code,
        "targetLang.code": targetLang.code,
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
    const { sourceLang, sourceWord, targetLang, targetWord, sourceSpeechPart, sourceTranscriptions, sourceSynonyms, sourceAntonyms, sourceDefinitions, sourceExamples, targetSpeechPart, targetTranscriptions, targetSynonyms, targetAntonyms, targetDefinitions, targetExamples, id } = req.body;
    const userId = req.user;
    words_1.Words.updateOne({ _id: id }, { $addToSet: { usersList: userId } })
        .then(() => { })
        .catch(() => { });
    const words = new correctedWords_1.CorrectedWords({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        sourceSpeechPart,
        sourceTranscriptions,
        sourceSynonyms,
        sourceAntonyms,
        sourceDefinitions,
        sourceExamples,
        targetSpeechPart,
        targetTranscriptions,
        targetSynonyms,
        targetAntonyms,
        targetDefinitions,
        targetExamples,
        correct: true,
        userId
    });
    words.save()
        .then(() => res.status(200).send({ result: 'Changes were successfully saved!' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }));
};
exports.setCorrectedWord = setCorrectedWord;
const setBrandNewWord = (req, res, next) => {
    const { sourceLang, sourceWord, targetLang, targetWord, sourceSpeechPart, sourceTranscriptions, sourceSynonyms, sourceAntonyms, sourceDefinitions, sourceExamples, targetSpeechPart, targetTranscriptions, targetSynonyms, targetAntonyms, targetDefinitions, targetExamples, } = req.body;
    const userId = req.user;
    const word = new words_1.Words({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        sourceSpeechPart,
        sourceTranscriptions,
        sourceSynonyms,
        sourceAntonyms,
        sourceDefinitions,
        sourceExamples,
        targetSpeechPart,
        targetTranscriptions,
        targetSynonyms,
        targetAntonyms,
        targetDefinitions,
        targetExamples,
        usersList: [userId],
        correct: false
    });
    word.save()
        .then(() => res.status(200).send({ result: 'New word was added!' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }));
};
exports.setBrandNewWord = setBrandNewWord;
const deleteWord = async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        res.status(422).send({ error: 'Item id was not provided' });
    words_1.Words.deleteOne({ _id: id })
        .then(() => res.status(200).send({ result: 'Word was successfully deleted!' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }));
};
exports.deleteWord = deleteWord;
// CorrectedWords.deleteMany({ "sourceLang": "en"}).then(res=>console.log(res))
// const newWord = new Words({
//     sourceLang: {
//         name: 'English',
//         code: 'en',
//         flag: 'gb'
//     },
//     sourceWord: "text",
//     targetLang: {
//         name: 'Ukrainian',
//         code: 'uk',
//         flag: 'ua'
//     },
//     targetWord: "pip",
//     sourceSpeechPart: ['noun'],
//     sourceTranscription: '[wɜːrd]',
//     sourceSynonyms: ['test'],
//     sourceAntonyms: ['test', 'test'],
//     sourceDefinitions: ['a single unit of language that means something and can be spoken or written'],
//     sourceExamples: ['Do you know the words to this song?', "word for something What's the Spanish word for ‘table’?"],
//     targetSpeechPart: ['назоўнік'],
//     targetTranscription: '[wɜːrd]',
//     targetSynonyms: ['test'],
//     targetAntonyms: ['test'],
//     targetDefinitions: ['unit of language'],
//     targetExamples: ['He was a true friend in all senses of the word.', "I could hear every word they were saying."],
//     usersList: [],
//     correct: false
// })
// newWord.save().then(() => { })
