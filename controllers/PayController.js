class FormController{
    form(req, res){
        return res.render('form');
    }

    check(req, res){
        console.log(req.body.firstname);
        console.log(req.body.lastname);
        console.log(req.body.CVV);
        console.log(req.body.PAN[0] + req.body.PAN[1]);
        console.log(req.body.cardexpiry);
        const currentDate = new Date()
        let year = req.body.cardexpiry[0];
        for (let index = 1; index < 4; index++) {
            year += req.body.cardexpiry[index];
            
        }
        console.log(year);


        if (req.body.PAN.length <16 || req.body.PAN.length >19)
            return res.render('errordisplay', { response: 'Size matters'});
        if (req.body.year)
        /*dizer ao programa a datapresente  
        se data < datapresente return error */     

        if(req.body.cardType == "AmericanExpress"){
            
            if(req.body.CVV.length !=4)
                return res.render('errordisplay', { response: 'CVV must have 4 numbers'});
                //se começa por 34 ou 37
            if(req.body.PAN[0] !=3)
                return res.render('errordisplay', { response: 'PAN must start with number 3'});
            if(req.body.PAN[1] !=4 && req.body.PAN[1] !=7)
                return res.render('errordisplay', { response: 'PAN second number must be 4 or 7'});
        }
        else{
            if(req.body.CVV.length != 3)
            return res.status(403).json({error: "Error CVV length must be 3 numbers"});
        }
        return res.render('index', { title: 'Express' });
    }
}

module.exports = new FormController();