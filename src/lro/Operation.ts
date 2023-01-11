import { RecognitionResponse } from '../stt/RecognitionResponse'

export interface Operation {
    id: string
    done: boolean
    createdAt: string
    createdBy: string
    modifiedAt: string
    response?: RecognitionResponse
}