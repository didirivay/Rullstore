const fs = require('fs')



global.namabot = "RULL BOT"

global.namaowner = "Didirivay"

global.footer_text = "© " + namabot

global.pp_bot = fs.readFileSync("foto.jpg")

global.qris = fs.readFileSync("qris.jpg")

global.owner = ['6289615659930']

global.sessionName = 'session'

global.prefa = ['-_-']

global.caption_pay = `Dana / Shopepay / OVO :
089615659930 
Jago : 105571110623

Bukti Transfer Kirim Group.
Terimakasih🙏`

//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.

module.exports.helpMenu = (pushname) =>{

  return `Halo ${pushname}



*「 FITUR BOT 」*



\`\`\`• !owner

• !addsewa

• !delsewa

• !ceksewa

• !listsewa

• !pay

• !setpay

• !list

• !addlist

• !updatelist

• !dellist

• !jeda

• !tambah

• !kurang

• !kali

• !bagi

• !setproses

• !changeproses

• !delsetproses

• !setdone

• !changedone

• !delsetdone

• !proses

• !done

• !welcome

• !goodbye

• !setwelcome

• !changewelcome

• !delsetwelcome

• !setleft

• !changeleft

• !delsetleft

• !antiwame

• !antiwame2

• !antilink

• !antilink2

• !open

• !close

• !hidetag

• !add

• !kick

• !stiker

• !ffid

• !mlid

\`\`\`



📝 *NOTE*: 

Fitur nya bisa dipakai dengan atau

tanpa prefix (simbol awalan). Sebagai contoh 

fitur .owner (prefix)

dan bisa juga owner (tanpa prefix)

`

}
