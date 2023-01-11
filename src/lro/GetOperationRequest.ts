import {Operation} from './Operation'

export interface GetOperationRequest {
    id: string
}

export interface GetOperationRequestOutput extends Operation {}