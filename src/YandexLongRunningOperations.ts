import YandexApi from './YandexApi.js'
import { ListOperationsRequest, ListOperationsRequestOutput } from './lro/ListOperationsRequest.js'
import { GetOperationRequest, GetOperationRequestOutput } from './lro/GetOperationRequest.js'
import { CancelOperationRequest } from './lro/CancelOperationRequest.js'
import { Operation } from './lro/Operation.js'

export {
    Operation,
    ListOperationsRequest,
    ListOperationsRequestOutput,
    GetOperationRequest,
    GetOperationRequestOutput,
    CancelOperationRequest,
}

export default class YandexLongRunningOperations extends YandexApi {
    constructor(apiKey: string) {
        super('https://operation.api.cloud.yandex.net/operations/', apiKey)
    }

    /**
     * List of operations.
     */
    public async listOperations(params: ListOperationsRequest): Promise<ListOperationsRequestOutput> {
        return await this.request('get', 'operations', params) as ListOperationsRequestOutput
    }

    /**
     * Get operation status.
     * Returns operation status.
     */
    public async getOperation(params: GetOperationRequest): Promise<Operation> {
        return await this.request('get', params.id) as Operation
    }

    /**
     * Cancel specified operations.
     */
    public async cancelOperation(params: CancelOperationRequest): Promise<true> {
        await this.request('post', `${params.id}:cancel`)
        return true
    }
}