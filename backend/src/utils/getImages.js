import fs from 'fs'

const getImgSrc = async () => {

    try {

        const imgSrc = await fs.readFile('../public/images', { encoding: 'base64' })

        return imgSrc

    } catch (error) {
        console.log('getting images: ', error.message)
    }
}

export default getImgSrc


