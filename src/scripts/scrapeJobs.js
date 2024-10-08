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

function extractTypeFromPath(path) {
    if (path.includes("full-time")) {
        return "Full Time"
    } else if (path.includes("part-time")) {
        return "Part Time"
    } else if (path.includes("8-hour")) {
        return "8 Hour Shifts"
    } else if (path.includes("weekends")) {
        return "Weekends"
    }
    return "Full Time (TBD)"
}


// Scrape Jobs from URL
async function scrapeJobs() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const rows = $('#ascontent tbody tr')
        const jobs = []

        for (const element of rows) {
            const linkElement = $(element).find('td:first-child a')
            const jobUrl = linkElement.attr('href')
            const text = linkElement.text()
            const path = createJobPath(text)
            const position = extractPositionAndOther(text).position
            const type = extractTypeFromPath(path)
            const city = extractCityFromPath(path)
            const stateAbbrev = 'IL'
            const state = 'Illinois'
            const acronym = extractAcroynm(path)
            const department = 'Client Care'

            // Fetch job detail page
            const jobDetailResponse = await axios.get(jobUrl)
            const jobDetailPage = cheerio.load(jobDetailResponse.data)
            const listingDescriptionHtml = jobDetailPage('.listing_description').html()
            const applyButtonsHtml = jobDetailPage('.buttons').html()

            jobs.push({ position, department, acronym, type, city, state, url: jobUrl, text, stateAbbrev, path, listingDescriptionHtml, applyButtonsHtml })
        }

        const filePath = path.join(__dirname, '../data/jobs.ts')
        const fileContent = `export const jobs = ${JSON.stringify(jobs, null, 2)}`
        fs.writeFileSync(filePath, fileContent)
        console.log('Jobs data saved to', filePath)

    } catch (e) {
        console.error('Error fetching URL', e)
    }
}

scrapeJobs()