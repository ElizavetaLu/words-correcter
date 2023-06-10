import mongoose, { Document, Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';


interface ILanguage {
    name: string,
    code: string,
    flag: string
}

export interface IWords extends Document {
    sourceLang: ILanguage,
    sourceWord: string,
    targetLang: ILanguage,
    targetWord: string,

    sourceSpeechPart: string[],
    sourceTranscription: string,
    sourceSynonyms: string[],
    sourceAntonyms: string[],
    sourceDefinitions: string[],
    sourceExamples: string[],

    targetSpeechPart: string[],
    targetTranscription: string,
    targetSynonyms: string[],
    targetAntonyms: string[],
    targetDefinitions: string[],
    targetExamples: string[],

    usersList: string[],
    correct: boolean
};

const wordsSchema: Schema = new Schema({
    sourceLang: {
        name: String,
        code: String,
        flag: String
    },
    sourceWord: String,
    targetLang: {
        name: String,
        code: String,
        flag: String
    },
    targetWord: String,

    sourceSpeechPart: [String],
    sourceTranscription: String,
    sourceSynonyms: [String],
    sourceAntonyms: [String],
    sourceDefinitions: [String],
    sourceExamples: [String],

    targetSpeechPart: [String],
    targetTranscription: String,
    targetSynonyms: [String],
    targetAntonyms: [String],
    targetDefinitions: [String],
    targetExamples: [String],

    usersList: [String],
    correct: Boolean
});

wordsSchema.plugin(paginate);

interface WordsDocument extends mongoose.Document, IWords { };


export const Words = mongoose.model<
    WordsDocument,
    mongoose.PaginateModel<WordsDocument>
>('Words', wordsSchema, 'words');