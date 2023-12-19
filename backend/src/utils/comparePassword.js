import bcryptjs  from 'bcryptjs'

// we cannot use it as middleware because middleware is used in between req, and res

const comparePassword = async (password) => {

    const salt = bcryptjs.genSaltSync(10)
    const valid = await bcryptjs.compare(password, salt)

    if (valid) {

        return true
    }
    return false
}

export default comparePassword