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
        .catch(() => res.status(400).send({ error: 'Bad request' }))
}


export const setBrandNewWord: RequestHandler = (req, res, next) => {

    const {
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
    } = req.body;

    const userId = req.user;

    const word = new Words({
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
        .catch(() => res.status(400).send({ error: 'Bad request' }))
}


export const deleteWord: RequestHandler = async (req, res, next) => {
    const { id } = req.query;

    if (!id) res.status(422).send({ error: 'Item id was not provided' });

    Words.deleteOne({ _id: id })
        .then(() => res.status(200).send({ result: 'Word was successfully deleted!' }))
        .catch(() => res.status(400).send({ error: 'Bad request' }))
}