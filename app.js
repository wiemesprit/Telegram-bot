const { Telegraf } = require('telegraf')
const bot = new Telegraf('1606818779:AAG3nvFWzJbftuUiGj4_8-ws9Tyd47RLlzQ')
bot.start((ctx) => {
    ctx.reply("the bot has started !! \n OK lets start! \n Do you want to set up you splash screen?\n 1. /yes \n 2. /no \n Type /help for extra commands")

 
})
bot.hears('/yes',(ctx) =>{
    ctx.reply("upload your image please!")
    bot.on('photo',(ctx) =>{
        ctx.reply("Image saved as splash screen!")
    
    })

})
bot.hears('/no',(ctx) =>{
    ctx.reply("If you don't like to have a splashscreen on your app so maybe you would like to start with login page? \n 1. /yes_please \n 2. /no_I_dont \n Type /help for extra commands")
    bot.hears('/yes_please',(ctx) =>{
        ctx.reply("would you like to login with  \n/Google \n/Facebook \n/Both")
        bot.hears('/Google',(ctx) =>{
            ctx.reply("Please inter your Google authetification API key then press \n  /OK ")})
            bot.hears('/Facebook',(ctx) =>{
                ctx.reply("Please inter your Facebook authetification API key then press \n  /OK ")})
                bot.hears('/Both',(ctx) =>{
                    ctx.reply("Please inter your Google and Facebook authetification API key then press /OK ")})
                       
                        
    
    })
    bot.hears('/OK',(ctx) =>{
    ctx.reply("authtification Key added succesfully,now let's move to the HomePage;\n Do you want to add !\n/side-menu \n/static-menu \n/fixed-menu \n/bottom-menu \n/Exit")
    bot.hears('/Exit',(ctx) =>{
        ctx.reply("thank you for using our bot.. GoodBye!")
        
        
    })
    })

    bot.hears("/no_I_dont",(ctx)=>{
        ctx.reply("Do you wante to customise your HomePage? \n 1. /I_would_like_to \n 2. /no_thank_you \n Type /help for extra commands")
        bot.hears('/I_would_like_to',(ctx) =>{
            ctx.reply("Do you want to add as menu!\n/side\n/static \n/fixed \n/bottom \n/none \n/Exit")
            bot.hears('/Exit',(ctx) =>{
                ctx.reply("thank you for using our bot.. GoodBye!")
                
                
            })
            
            
        })
            bot.hears('/no_thank_you',(ctx) =>{
                ctx.reply("thank you for using our bot.. GoodBye!")
                
                
            })
    })

})
bot.help((ctx) => {
    ctx.reply("this bot can perform the following commands \n -/start\n - /help \n - /Exit")
  
})



bot.launch()
/*bot.start((ctx)=>{


    ctx.reply("bot has been started")
    
    })
    
    bot.help((ctx)=>{
    
    
    ctx.reply("this bot can perform the following commandes\n -/start\n -/help\n -/project")
    
    })
    
    bot.command('project',(ctx)=>{
    
    
        ctx.telegram.sendMessage(ctx.chat.id,'OK lets start! \n Do you want to set up you splash screen? \n type /help for extra commands',{
        
        reply_markup :{
        
        inline_keyboard :[
        
        
          [{text:"yes",callback_data:"A1"}],
        
          [{text:"no",callback_data:"A2"}],
         
         
         
        
        ]
      
      }
      
      }) })
        
    bot.action('A1',(ctx)=>{
    
        ctx.reply("upload your image please!")
        bot.on('photo',(ctx) =>{
            ctx.reply("Image saved as splash screen!")})
    
    })
        
    bot.action('A2',(ctx)=>{
      
        ctx.reply("If you don't like to have a splashscreen on your app so maybe youwould like to start with login page?")
        bot.action('A3',(ctx) =>{
            ctx.reply("would you like to login with Google, Facebook or both?")
            bot.action('A4',(ctx) =>{
                ctx.reply("authtification with Google is added succesfully")})
                bot.action('A5',(ctx) =>{
                    ctx.reply("authtification with Facebook is added succesfully")})
                    bot.action('A6',(ctx) =>{
                        ctx.reply("authtification with google and Facebook is added succesfully")})
        
        })
    
    })
    
    bot.launch()*/