import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    constructor(private readonly httpAdaperHost: HttpAdapterHost) { }

    catch(exception: any, host: ArgumentsHost) {

        const { httpAdapter } = this.httpAdaperHost;
        const ctx = host.switchToHttp();
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.BAD_REQUEST;

        const responseBody = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message: exception.message
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, status);
    }

}