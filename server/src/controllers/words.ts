import { CorrectedWords } from '../models/correctedWords';
import { Words } from '../models/words';
import { RequestHandler } from 'express';


export const getWords: RequestHandler = async (req, res, next) => {

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

    Words.paginate(query, options, (error: Error, result: any) => {

        if (error) return res.status(422).json({ error });

        res.status(200).send(result)
    });
}

export const setCorrectedWord: RequestHandler = (req, res, next) => {

    const {
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        id
    } = req.body;

    const userId = req.user;

    Words.updateOne({ _id: id }, { $addToSet: { usersList: userId } })
        .then(() => { })
        .catch(() => { })

    const words = new CorrectedWords({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        correct: true,
        userId
    });

    words.save()
        .then(() => res.status(200).send({ result: 'Changes were successfully saved' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }))
}


export const setBrandNewWord: RequestHandler = (req, res, next) => {

    const {
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions
    } = req.body;

    const userId = req.user;

    const sentences = new Words({
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        usersList: [userId],
        correct: false
    });

    sentences.save()
        .then(() => res.status(200).send({ result: 'New word was added' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }))
}