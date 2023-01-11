import { RecognitionAlternative } from './RecognitionAlternative'

export interface RecognitionChunk {
    alternatives: RecognitionAlternative[]
    channelTag: number | string
}