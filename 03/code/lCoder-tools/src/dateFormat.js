
function dateFormat(dateStr){
    const dtStr = new Date(dateStr)

    const y = dtStr.getFullYear()
    const m = padZero(dtStr.getMonth() + 1)
    const d = padZero(dtStr.getDate())

    const hh = padZero(dtStr.getHours())
    const mm = padZero(dtStr.getMinutes())
    const ss = padZero(dtStr.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
} 
function padZero(n){
    return n > 9 ? n : n+1
}

module.exports = {
    dateFormat
}