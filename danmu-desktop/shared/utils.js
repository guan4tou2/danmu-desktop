/**
 * Shared utility functions for the danmu-desktop application.
 */

/**
 * Sanitizes a string for logging by removing newlines and tabs.
 * @param {any} input 
 * @returns {string}
 */
function sanitizeLog(input) {
    let strInput = String(input);
    strInput = strInput.replace(/\r\n|\r|\n/g, " ");
    strInput = strInput.replace(/\t/g, " ");
    return strInput;
}

/**
 * Validates an IP address or domain name.
 * @param {string} value 
 * @returns {boolean}
 */
function validateIP(value) {
    const ipRegex =
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex =
        /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
    return ipRegex.test(value) || domainRegex.test(value);
}

/**
 * Validates a port number.
 * @param {string} value 
 * @returns {boolean}
 */
function validatePort(value) {
    const portRegex = /^\d{1,5}$/;
    if (!portRegex.test(value)) return false;
    const port = parseInt(value);
    return port >= 1 && port <= 65535;
}

module.exports = {
    sanitizeLog,
    validateIP,
    validatePort
};
