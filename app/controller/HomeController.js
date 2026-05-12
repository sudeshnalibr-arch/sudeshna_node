



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
}







module.exports=new HomeController()