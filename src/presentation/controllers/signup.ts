import { MissingParamError } from '../errors/missing.param.error'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse | any {

        // if (!httpRequest.body.name) {
        //     return badRequest(new MissingParamError('name'))
        // }

        // if (!httpRequest.body.email) {
        //     return badRequest(new MissingParamError('email'))
        // }



        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
    }
}
