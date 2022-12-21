const { User } = require('../../db/models');
const encrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signin : async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const checkUser = await User.findOne({ where: { email: email } });

            if(checkUser) {
                const checkPassword = encrypt.compareSync(password, checkUser.password);

                if(checkPassword) {
                    const token = jwt.sign(
                        {
                            user: {
                                id: checkUser.id,
                                name : checkUser.name,
                                email: checkUser.email,
                            },
                        }, 
                        'secret'
                    );
                    res.status(200).json({ message: 'Success Signin', data: token });
                } else {
                    res.status(403).json({ message : 'Invalid Password'})
                }
            } else {
                res.status(403).json({ message : 'Invalid Email'})
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    },

    signup : async (req, res, next) => {
        try {
            const {name, email, password, confirmPassword} = req.body;
            
            if(password !== confirmPassword) {
                return res.status(403).json({ message : "Password and confirm password doesn't match"});
            }

            const checkEmail = await User.findOne({ where: {email: email} });
            if(checkEmail) {
                return res.status(403).json({ message: 'Email registered'}) //need to change into 'return res.status(403)......
            }

            const user = await User.create({ name, email, password : encrypt.hashSync(password, 10), role: 'admin'});

            console.log(user);

            delete user.dataValues.password;

            res.status(201).json({
                message : 'Success Signup',
                data: user,
            })
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}