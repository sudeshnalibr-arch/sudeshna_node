



class HomeController{

    index(req,res){
        const user={
            name:'webskitters',
            age:20
        }
        res.render('index',{
            title:'Home page',
            data:user
        })
    }
    blank(req,res){
        res.render('blank',{
            title:'Blank page'
        })
    }
    tables(req,res){
        res.render('tables',{
            title:'Tables page'
        })
    }
    cards(req,res){
        res.render('cards',{
            title:'Cards page'
        })
    }
    buttons(req,res){
        res.render('buttons',{
            title:'Buttons page'
        })
    }
    error404(req,res){
        res.render('error404',{
            title:'404 page'
        })
    }
    login(req,res){
        res.render('login',{
            title:'Login page'
        })
    }
    register(req,res){
        res.render('register',{
            title:'Register page'
        })
    }
    forgot_password(req,res){
        res.render('forgot_password',{
            title:'Register page'
        })
    }
    utilitiesAnimation(req,res){
        res.render('utilitiesAnimation',{
            title:'Animation page'
        })
    }
    utilitiesBorder(req,res){
        res.render('utilitiesBorder',{
            title:'Border page'
        })
    }
    utilitiesColor(req,res){
        res.render('utilitiesColor',{
            title:'Color page'
        })
    }
    utilitiesOthers(req,res){
        res.render('utilitiesOthers',{
            title:'Other pages'
        })
    }
    charts(req,res){
        res.render('charts',{
            title:'Charts page'
        })
    }
}







module.exports=new HomeController()