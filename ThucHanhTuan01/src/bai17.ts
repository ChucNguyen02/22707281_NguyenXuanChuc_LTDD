export class Logger {
    private static instance: Logger;

    private constructor() {}

    // Lấy instance duy nhất
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // Hàm log
    public log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}
