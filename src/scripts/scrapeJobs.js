import axios from 'axios'
import * as cheerio from 'cheerio'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const url = 'https://ahsllc.applicantstack.com/x/openings'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function scrapeJobs() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const rows = $('#ascontent tbody tr')
        const jobs = []

        rows.each((index, element) => {
            const linkElement = $(element).find('td:first-child a')
            const href = linkElement.attr('href')
            const text = linkElement.text()
            jobs.push({ href, text })
        })

        const filePath = path.join(__dirname, '../data/jobs.ts')
        const fileContent = `export const jobs = ${JSON.stringify(jobs, null, 2)}`
        fs.writeFileSync(filePath, fileContent)
        console.log('Jobs data saved to', filePath)

    } catch (e) {
        console.error('Error fetching URL', e)
    }
}

scrapeJobs()