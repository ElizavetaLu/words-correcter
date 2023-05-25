import mongoose, { Document, Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';


export interface IWords extends Document {
    sourceLang: string,
    sourceWord: string,
    targetLang: string,
    targetWord: string,
    speechPart: string,
    transcriptions: string[],
    synonyms: string[],
    antonyms: string[],
    definitions: string[],
    usersList: string[],
    correct: boolean
};

const wordsSchema: Schema = new Schema({
    sourceLang: String,
    sourceWord: String,
    targetLang: String,
    targetWord: String,
    speechPart: String,
    transcriptions: [String],
    synonyms: [String],
    antonyms: [String],
    definitions: [String],
    usersList: [String],
    correct: Boolean
});

wordsSchema.plugin(paginate);

interface WordsDocument extends mongoose.Document, IWords { };


export const Words = mongoose.model<
    WordsDocument,
    mongoose.PaginateModel<WordsDocument>
>('Words', wordsSchema, 'words');