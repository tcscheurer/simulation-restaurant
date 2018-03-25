module.exports = (app) => {

    app.get('/api/confirmsession', (req,res)=>{        
        res.status(200).send(req.session)
    })


    app.post('/api/auth/login', (req,res)=>{
        const {
            username,
            password
        } = req.body;
        app.get('db').getUser(username).then(respose=>{
            if(!respose[0]){
                app.get('db').createUser([username,password]).then(res=>{
                    req.session.user.id = res[0].id;
                    req.session.user.username = res[0].username;
                    res.status(200).send(req.session.user);
                })
            } else{
                req.session.user.id = respose[0].id;
                req.session.user.username = respose[0].username;
                res.status(200).send(req.session.user);
            }
        })
    });

    app.post('/api/auth/logout', (req,res)=>{
        req.session.destroy(()=>{
            res.status(200).json({ success: "User has been logged out" });
          });
    })

    app.get('/api/food',(req,res)=>{
        app.get('db').getAllFood().then(respose=>{
            res.status(200).send(response);
        });
    });
}