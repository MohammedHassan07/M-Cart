import bcryptjs  from 'bcryptjs'

const comparePassword = async (password) => {

    const salt = bcryptjs.genSaltSync(10)
    const valid = await bcryptjs.compare(password, salt)

    if (valid) {

        return true
    }
    return false
}

export default comparePassword