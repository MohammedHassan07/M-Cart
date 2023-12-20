import fs from 'fs/promises'

// retrive image from folder
const getImgSrc = async (location) => {

    try {

        const imgSrc = await fs.readFile(location, { encoding: 'base64' })

        return imgSrc

    } catch (error) {
        console.log('getting images: ', error.message)
    }
}

export default getImgSrc


