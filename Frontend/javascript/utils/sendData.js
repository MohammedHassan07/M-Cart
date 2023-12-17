
// send data to server, it acceptes only objects
export async function sendData(url, dataObj) {

    console.log('sendData: ', dataObj)
    
    const res = await fetch(url, {

        method: 'POST',
        headers: {

            'Content-Type': 'Application/json'
        },

        body: JSON.stringify(dataObj)
    })

    const response = await res.json()

    return response
} 