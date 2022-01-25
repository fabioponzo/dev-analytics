import dotenv from 'dotenv'

dotenv.config()

export const LOG_INFO = 0;
export const LOG_ERROR = 1;
export const LOG_WARNING = 2;

export default function log(message, logType, object) {
    let logInfo = process.env.LOG_INFO

    if (logType == LOG_INFO && logInfo == 'all' || logType == LOG_ERROR || logType == LOG_WARNING && logInfo != 'none') {

        if (logType == LOG_ERROR) console.error(message); else console.log(message)

        if (object) {
            if (logType == LOG_ERROR) console.error(object); else console.log(object)
        }
    }
}