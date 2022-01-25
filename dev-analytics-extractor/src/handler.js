import dotenv from 'dotenv'
import mysql from 'mysql'
import doRequest from './request.js'

dotenv.config()

const GITHUB_URL = 'https://api.github.com'
const GITHUB_REPOS = `${GITHUB_URL}/orgs/${process.env.GITHUB_ORG}/repos`


async function readAllRepositories() {
    return await doRequest(GITHUB_REPOS)
}

async function handler() {
    const repositories = await readAllRepositories()

    console.log(repositories)
}

await handler()