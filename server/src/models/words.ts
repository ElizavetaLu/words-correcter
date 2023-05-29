import mongoose, { Document, Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';


export interface IWords extends Document {
    sourceLang: string,
    sourceWord: string,
    targetLang: string,
    targetWord: string,

    sourceSpeechPart: string[],
    sourceTranscriptions: string[],
    sourceSynonyms: string[],
    sourceAntonyms: string[],
    sourceDefinitions: string[],
    sourceExamples: string[],

    targetSpeechPart: string[],
    targetTranscriptions: string[],
    targetSynonyms: string[],
    targetAntonyms: string[],
    targetDefinitions: string[],
    targetExamples: string[],

    usersList: string[],
    correct: boolean
};

const wordsSchema: Schema = new Schema({
    sourceLang: String,
    sourceWord: String,
    targetLang: String,
    targetWord: String,

    sourceSpeechPart: [String],
    sourceTranscriptions: [String],
    sourceSynonyms: [String],
    sourceAntonyms: [String],
    sourceDefinitions: [String],
    sourceExamples: [String],
    
    targetSpeechPart: [String],
    targetTranscriptions: [String],
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