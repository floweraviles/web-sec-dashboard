const db = require('../config/db');

//**
// Finds an application by base_url or creates it if not found.
// @params {string} name - The application name.
// @params {string} baseUrl - The application's base URL (used as identifier).
// @returns {Promise<number>} - The ID of the found or created application.
//  */

async function findOrCreateApplication(name, baseURL) {
    // TODO Day 4: Implement logic 
    // 1. Try to  find application by baseUrl
    // 2. If found, return its ID
    // 3. If not found, insert a new application
    // 4. Return the new application's ID
    console.log(`Stub: Need to find or create application: ${name} (${baseUrl})`);
    // Placeholder - replace with actual DB logic
    const placeholderId = 1; 
    return placeholderId;
}

//**
// Creates a new vulnerability record in the database.
// @param {object} vulnData - Object containing vulnerability details.
// @param {number} vulnData.application_id - The ID of the application. 
// @param {string} vulnData.name - Vulnerability name.
// @param {string} vulnData.severity - Critical, High, Medium, Low, Info.
// @param {string} vulnData.description - Detailed description.
// @param {string} vulnData.location_url - Specific URL where found.
// @param {string} [vulnData.location_param] - Specific parameter.
// @param {string} [vulnData.evidence] - Evidence snippet.
// @param {string} [vulnData.mitigation] - Suggested fix.
// @param {string} [vulnData.status='New'] - Initial status.
// @param {string} [vulnData.tool_specific_id] - Tool's identifier for the finding.
// @param {string} [vulnData.unique_identifier] - The calculated unique identifier hash.
// @returns {Promise<object>} - The created vulnerability record record (or null on error).
// */

async function createVulnerability(vulnData) {
    // TODO Day 4: Implement logic 
    // 1. Contruct INSERT query using vulnData
    // 2. Execute query using db.query
    // 3. Return the newly created vulnerability row
    console.log(`Stub: Need to create vulnerability: ${vulnData.name}`);
    //Placeholder - replace with actual DB logic
    return { id: 101, ...vulnData };
}

module.exports = {
    findOrCreateApplication,
    createVulnerability,
};