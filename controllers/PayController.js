class FormController {
    form(req, res) {
        return res.render('form');
    }

    check(req, res) {
        //get real time date
        const currentDate = new Date()
        let year = req.body.cardexpiry[0];
        for (let index = 1; index < 4; index++) {
            year += req.body.cardexpiry[index];
        }
        //validate PAN number of digits
        if (req.body.PAN.length < 16 || req.body.PAN.length > 19)
            return res.render('errordisplay', { response: 'Size matters' });
        //validate inserted year, if smaller than current time return false, if equal or highter return true
        if (year < currentDate.getFullYear())
            return res.render('errordisplay', { response: 'Card Out of Date' });

        if (year == currentDate.getFullYear())
            if (req.body.cardexpiry.toString().substr(5) < (currentDate.getMonth() + 1))
                return res.render('errordisplay', { response: 'Card Out of Date' });
        //verify if card is American Express
        if (req.body.cardType == "AmericanExpress") {
            //verify if CVV length is 4 digits
            if (req.body.CVV.length != 4)
                return res.render('errordisplay', { response: 'CVV must have 4 numbers' });
            //verify if PAN first digit is 3
            if (req.body.PAN[0] != 3)
                return res.render('errordisplay', { response: 'PAN must start with number 3' });
            //verify if PAN second digit is 4 or 7
            if (req.body.PAN[1] != 4 && req.body.PAN[1] != 7)
                return res.render('errordisplay', { response: 'PAN second number must be a 4 or 7' });
        }
        //if the card is not Aexpress CVV must be 3 digits
        else {
            if (req.body.CVV.length != 3)
                return res.render('errordisplay', { response: 'CVV must have 3 numbers' });
        }
        return res.render('index', { title: 'Form Successfully Completed' });
    }
}

module.exports = new FormController();