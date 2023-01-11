import { WordInfo } from './WordInfo'

export interface RecognitionAlternative {
    words: WordInfo[]
    text: string
    confidence: number
}