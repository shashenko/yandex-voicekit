import type { Duration } from '../base/Duration'

export interface WordInfo {
    /**
     * Word start time inside input audiostream.
     */
    startTime?: Duration | null

    /**
     * Word end time inside input audiostream.
     */
    endTime?: Duration | null

    /**
     * Word inside phrase.
     */
    word?: string

    /**
     * Relative confidence factor (relative to other words of the phrase and to words of other alternatives
     * for requests configuration with max_alternatives > 1). Value may be negative.
     */
    confidence?: number | string
}