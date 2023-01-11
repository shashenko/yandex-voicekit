export interface RecognitionSpecification {
    audioEncoding?: string
    languageCode?: string
    model?: string
    profanityFilter?: boolean
    sampleRateHertz?: number
    audioChannelCount?: number
    rawResults?: boolean
    literatureText?: boolean
}

export interface RecognitionConfig {
    specification?: RecognitionSpecification
}