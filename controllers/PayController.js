class FormController{
    form(req, res){
        return res.render('form');
    }

    check(req, res){
        console.log(req.body.name);
        console.log(req.body.CVV.length);
        console.log(req.body.PAN[0] + req.body.PAN[1]);

        if(req.body.cardType == "AmericanExpress"){
            //se começa com 4 digitos
            if(req.body.cvv.length !=4)
                return res.status(400);
                //se começa por 34 ou 37
            //if(req.body.PAN)
        }

        return res.render('index', { title: 'Express' });
    }
}

module.exports = new FormController();