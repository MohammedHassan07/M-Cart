// takes the object, iterate through it and get the image name
// after getting image name get the images  from the folder using the getImgSrc function
// then update the object and return

const imageHandler = (data, loc) => {

    data.forEach(async (element) => {

        try {
            const name = element.name
            const location = loc + name

            const file = await getImgSrc(location)
            data.imgSrc = file
        } catch (error) {
            console.log('imageHandler: ', error.message)
        }

    });
}

export default imageHandler