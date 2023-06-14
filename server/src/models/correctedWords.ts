import mongoose, { Model, Schema } from 'mongoose';
import { IWords } from './words';



export interface ICorrectedWords extends IWords {
    userId: string,
}


const correctedWordsSchema: Schema = new Schema({
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
    sourceTranscription: [String],
    sourceSynonyms: [String],
    sourceAntonyms: [String],
    sourceDefinitions: [String],
    sourceExamples: [String],

    targetSpeechPart: [String],
    targetTranscription: [String],
    targetSynonyms: [String],
    targetAntonyms: [String],
    targetDefinitions: [String],
    targetExamples: [String],

    correct: Boolean,
    userId: String
});



const CorrectedWords: Model<ICorrectedWords> = mongoose.model<ICorrectedWords>('corrected-words', correctedWordsSchema);

export { CorrectedWords }; 