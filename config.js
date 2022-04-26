//═══════[© 2022 Dark Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to ALLAH, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://api.dapuhy.xyz/api',
    genz: 'https://api.dapuhy.xyz/api',
    senz: 'https://api.dapuhy.xyz/api',	//credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://api.dapuhy.xyz/api': 'yOuq42JsfG',
    'https://api.dapuhy.xyz/api': '3knxiZaDti',
    'https://api.dapuhy.xyz/api': 'dktrhUwDDf',	//thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['14318136969'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['14318136969'] //another owner number
global.premium = ['14318136969'] //premium number
global.pengguna = 'Sam Kira Kun' //username
global.botnma = 'Sam Bot' //bot name
global.ownernma = 'Sam Kira Kun' //owner name
global.packname = 'Sam Bot' //sticker package name
global.author = '+14318136969' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '┃➥' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Sam Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner-Sam',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 30 //free user limit
}
global.thumb = fs.readFileSync('./DarkMedia/moonkingpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
