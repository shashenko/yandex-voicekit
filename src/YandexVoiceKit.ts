import YandexSpeechToText, { LongRunningRecognizeRequest, LongRunningRecognizeRequestOutput } from './YandexSpeechToText.js'
import YandexLongRunningOperations, {
    Operation,
    GetOperationRequest,
    GetOperationRequestOutput,
    ListOperationsRequest,
    ListOperationsRequestOutput,
    CancelOperationRequest,
} from './YandexLongRunningOperations.js'

export {
    YandexLongRunningOperations,
    Operation,
    ListOperationsRequest,
    ListOperationsRequestOutput,
    GetOperationRequest,
    GetOperationRequestOutput,
    CancelOperationRequest,
}

export {
    YandexSpeechToText,
    LongRunningRecognizeRequest,
    LongRunningRecognizeRequestOutput,
}