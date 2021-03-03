
router.post('/', validateWith(schema), (req,res) => {
    const {email , password } = req.body;
    //using a middleware
    const user = usersStore.getUserByEmail(email)
    if(!user || user.password !== password)
    return res.status(400).send({ error:'Invalid email or passowrd'})

    const token = jwt.sign(
        {
            userId : user.id,
            name: user.name,
            email
        },
        "jwtPrivateKey"
    );
    res.send(token)
})

module.exports = router