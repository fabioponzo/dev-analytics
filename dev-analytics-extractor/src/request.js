import axios from 'axios'
import log , {LOG_INFO, LOG_ERROR} from './log.js'
import dotenv from 'dotenv'

dotenv.config()

const requestOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`, 
    }
}

export default async function doRequest(url) {
    log(`options:`, LOG_INFO, requestOptions)
    log(`📞 Iniciando requisição: ${url}`, LOG_INFO)

    let data = null

    try {
        let response = await axios.get(url, requestOptions)

        log(`📞 Requisição Concluída: ${url}`, LOG_INFO)

        if (response.status == 200) {
            data = response.data
        }
    }
    catch (e) {
        log(`🐞 error trying to make request to ${url}`, LOG_ERROR, e)
    }

    return data;
}