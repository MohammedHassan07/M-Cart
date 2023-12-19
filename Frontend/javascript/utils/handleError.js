export function isEmpty(data) {
   
    for (const key in data) {

        if (data.hasOwnProperty(key)) {

            const value = data[key]

            if (value === '' || value === undefined || value === null) return true
        }
    }

    return false
}