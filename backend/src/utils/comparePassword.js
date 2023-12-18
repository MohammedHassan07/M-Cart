import compare  from 'bcryptjs'

const comparePassword = async (password) => {

    const valid = await compare(password, process.env.HASH_SECRET_SALT)

    if (valid) {

        return true
    }
    return false
}

export default comparePassword