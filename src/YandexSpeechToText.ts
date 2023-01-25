import YandexStorage from 'yandex-storage-sdk'
import YandexApi from './YandexApi.js'
import { LongRunningRecognizeRequest, LongRunningRecognizeRequestOutput } from './stt/LongRunningRecognizeRequest.js'

export {
    LongRunningRecognizeRequest,
    LongRunningRecognizeRequestOutput,
}

export default class YandexSpeechToText extends YandexApi {
    private readonly s3: YandexStorage

    constructor(apiKey: string, accessKeyId: string, secretAccessKey: string, bucketName: string) {
        super('', apiKey)
        this.s3 = new YandexStorage(accessKeyId, secretAccessKey, bucketName)
    }

    public get storage(): YandexStorage {
        return this.s3
    }

    public async longRunningRecognize(params: LongRunningRecognizeRequest): Promise<LongRunningRecognizeRequestOutput> {
        return await this.request(
            'post',
            'https://transcribe.api.cloud.yandex.net/speech/stt/v2/longRunningRecognize',
            params
        ) as LongRunningRecognizeRequestOutput
    }
}