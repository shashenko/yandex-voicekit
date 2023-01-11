import type { RecognitionConfig } from './RecognitionConfig'
import type { RecognitionAudio } from './RecognitionAudio'
import { RecognitionResponse } from './RecognitionResponse'

export interface LongRunningRecognizeRequest {
    /**
     * Recognition configuration.
     */
    config?: RecognitionConfig | null

    /**
     * Audio to recognize.
     */
    audio?: RecognitionAudio | null
}

export interface LongRunningRecognizeRequestOutput {
    /**
     * Operation ID
     */
    id: string

    done: boolean

    createdAt: string

    createdBy: string

    modifiedAt: string

    response?: RecognitionResponse
}