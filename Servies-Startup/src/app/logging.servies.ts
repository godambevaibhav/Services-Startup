export class LoggingService {
    logMessage(message: string, id : number){
        console.log("Service Logger", message, id);
    }
}