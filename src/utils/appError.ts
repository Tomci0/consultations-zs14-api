export default class AppError extends Error {
    public statusCode: number;
    public status: string;
    public error: boolean = true;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    }
}
