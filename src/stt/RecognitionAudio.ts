export interface RecognitionAudio {
    /**
     * Input audio data chunk.
     */
    content?: Buffer | Uint8Array | string

    /**
     * Currently only supported for LongRunningRecognizeRequest. Input audio URI.
     */
    uri?: string
}