import axios from 'axios'
import * as cheerio from 'cheerio'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// URL to scrape
const url = 'https://ahsllc.applicantstack.com/x/openings'

// Get Current Directory Name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper Functions
function cleanPosition(position) {
    if (position.startsWith("Full Time ")) {
        return position.substring("Full Time ".length).trim()
    } else if (position.startsWith("Part Time ")) {
        return position.substring("Part Time ".length).trim()
    }
    return position.trim()
}

function extractPositionAndOther(text){
    const delimiters = ['-','(']
    for (const delimiter of delimiters) {
        const index = text.indexOf(delimiter)
        if (index !== -1) {
            let position = text.substring(0, index).trim()
            position = cleanPosition(position)
            const other = text.substring(index).trim()
            return { position: position, other: other }
        }
    }
    return { position: text.trim(), other: '' }
}  

function createJobPath(text) {
    // Remove -, (, ), and commas
    let cleanedText = text.replace(/[-(),]/g, '')
    // Replace multiple spaces with a single dash
    cleanedText = cleanedText.replace(/\s+/g, '-')
    // Convert to lowercase
    cleanedText = cleanedText.toLowerCase()
    return cleanedText
}

function extractAcroynm(path) {
    const segments = path.split('-')
    for (const segment of segments) {
        if ((segment.length === 2 || segment.length === 3) && segment.toLowerCase() !== 'il') {
            return segment.toUpperCase()
        }
    }
    return null
}

function extractCityFromPath(path) {
    const pattern = /-(\w+)-il$/
    const match = path.match(pattern)
    if (match) {
        let city = match[1].replace(/-/g, ' ') // Replace dashes with spaces if needed
        city = city.charAt(0).toUpperCase() + city.slice(1) // Capitalize the first character
        return city
    }
    return "Springfield Area"
}


// Scrape Jobs from URL
async function scrapeJobs() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const rows = $('#ascontent tbody tr')
        const jobs = []

        rows.each((index, element) => {
            const linkElement = $(element).find('td:first-child a')
            const url = linkElement.attr('href')
            const text = linkElement.text()
            const path = createJobPath(text)
            const position = extractPositionAndOther(text).position
            const type = ''
            const city = extractCityFromPath(path)
            const stateAbbrev = 'IL'
            const state = 'Illinois'
            const acronym = extractAcroynm(path)
            const other = extractPositionAndOther(text).other
            

            jobs.push({ position, acronym, type, city, state, url, text, stateAbbrev, other, path })
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