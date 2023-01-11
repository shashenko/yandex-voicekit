export interface ListOperationsRequest {
    /**
     * Disk ID
     */
    disk_id: string
    
    /**
     * Maximum number of results per response page
     */
    page_size: number

    /**
     * Token of the requested result page
     */
    page_token: string
}

export interface ListOperationsRequestOutput {
    /**
     * Operation ID
     */
    id: string
}