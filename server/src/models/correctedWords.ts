import mongoose, { Model, Schema } from 'mongoose';
import { IWords } from './words';



export interface ICorrectedWords extends IWords {
    userId: string,
}


const correctedWordsSchema: Schema = new Schema({
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
    correct: Boolean,
    userId: String
});



const CorrectedWords: Model<ICorrectedWords> = mongoose.model<ICorrectedWords>('corrected-words', correctedWordsSchema);

export { CorrectedWords }; 