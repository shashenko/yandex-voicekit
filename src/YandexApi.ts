import request, { CoreOptions, RequiredUriUrl, Request, RequestAPI } from 'request'
import queryString from 'querystring'

export default class YandexApi {
    private readonly api: RequestAPI<Request, CoreOptions, RequiredUriUrl>

    constructor(baseUrl: string, apiKey: string) {
        this.api = request.defaults({
            baseUrl: baseUrl,
            json: true,
            headers: {
                Authorization: `Api-key ${apiKey}`,
            }
        })
    }

    protected async request(method: 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch', command: string, params?: Record<string, any>): Promise<Record<string, any>> {
        return await new Promise((resolve, reject) => {
            const config: Record<string, any> = {}
            if (params) {
                config.body = params
            }
            this.api[method](command, config, (err, response, data) => {
                if (err) {
                    reject(err)
                } else if (response.headers['grpc-message']) {
                    reject(queryString.parse(response.headers['grpc-message'] as string))
                } else {
                    resolve(data)
                }
            })
        })
    }
}