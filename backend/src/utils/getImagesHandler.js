// takes the object, iterate through it and get the image name
// after getting image name get the images  from the folder using the getImgSrc function
// then update the object and return
import getImgSrc from '../utils/getImages.js'
import path from 'path'

const imageHandler = async (data, loc) => {

    for (const element of data) {

        try {
            const name = element.data.name
            const location = path.join(loc, name + '.jpg')

            const binData = await getImgSrc(location)
            element.data.imgSrc =  binData
        } catch (error) {
            console.log('imageHandler: ', error.message)
        }
    }

    return data
}

export default imageHandler