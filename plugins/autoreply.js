//=============================================Auto voice,msg.sticker commmnad=================================================================
const _0x3d6cae=_0x39d1;(function(_0x304a3b,_0x47450d){const _0x1ed1d4=_0x39d1,_0x3aad88=_0x304a3b();while(!![]){try{const _0x29720c=parseInt(_0x1ed1d4(0x12e))/0x1*(parseInt(_0x1ed1d4(0x121))/0x2)+parseInt(_0x1ed1d4(0x133))/0x3*(parseInt(_0x1ed1d4(0x137))/0x4)+parseInt(_0x1ed1d4(0x122))/0x5*(parseInt(_0x1ed1d4(0x128))/0x6)+-parseInt(_0x1ed1d4(0x13c))/0x7*(parseInt(_0x1ed1d4(0x135))/0x8)+-parseInt(_0x1ed1d4(0x123))/0x9*(parseInt(_0x1ed1d4(0x136))/0xa)+parseInt(_0x1ed1d4(0x131))/0xb+-parseInt(_0x1ed1d4(0x134))/0xc*(parseInt(_0x1ed1d4(0x139))/0xd);if(_0x29720c===_0x47450d)break;else _0x3aad88['push'](_0x3aad88['shift']());}catch(_0x58b195){_0x3aad88['push'](_0x3aad88['shift']());}}}(_0x19b7,0x59c0b));const config=require(_0x3d6cae(0x125)),fs=require('fs'),path=require(_0x3d6cae(0x120)),{cmd,commands}=require(_0x3d6cae(0x126));cmd({'on':_0x3d6cae(0x127)},async(_0x303329,_0x344e43,_0x1b1703,{from:_0x291ed2,body:_0x9aca1a,isOwner:_0x25a861})=>{const _0x1082ed=_0x3d6cae,_0x386f24=path[_0x1082ed(0x12d)](__dirname,'../media/autovoice.json'),_0x4a645d=JSON['parse'](fs['readFileSync'](_0x386f24,_0x1082ed(0x138)));for(const _0x4b8b46 in _0x4a645d){_0x9aca1a[_0x1082ed(0x132)]()==_0x4b8b46['toLowerCase']()&&(config[_0x1082ed(0x12c)]===_0x1082ed(0x129)&&(await _0x303329['sendPresenceUpdate'](_0x1082ed(0x12f),_0x291ed2),await _0x303329[_0x1082ed(0x130)](_0x291ed2,{'audio':{'url':_0x4a645d[_0x4b8b46]},'mimetype':_0x1082ed(0x12b),'ptt':!![]},{'quoted':_0x344e43})));}}),cmd({'on':_0x3d6cae(0x127)},async(_0x49e08e,_0x2d0b9d,_0x3c5950,{from:_0x14c30b,body:_0x2bea6e,isOwner:_0x2c7141})=>{const _0x32fe3d=_0x3d6cae,_0x150ed7=path[_0x32fe3d(0x12d)](__dirname,_0x32fe3d(0x13a)),_0x306348=JSON[_0x32fe3d(0x13d)](fs['readFileSync'](_0x150ed7,_0x32fe3d(0x138)));for(const _0x1bbe2a in _0x306348){_0x2bea6e[_0x32fe3d(0x132)]()===_0x1bbe2a[_0x32fe3d(0x132)]()&&(config[_0x32fe3d(0x12a)]===_0x32fe3d(0x129)&&await _0x49e08e['sendMessage'](_0x14c30b,{'sticker':{'url':_0x306348[_0x1bbe2a]},'package':'yourName'},{'quoted':_0x2d0b9d}));}}),cmd({'on':_0x3d6cae(0x127)},async(_0x1a5f71,_0x2ea4ba,_0x3701d1,{from:_0xcce429,body:_0x3450af,isOwner:_0x22473d})=>{const _0x27ddfd=_0x3d6cae,_0x17d9e1=path[_0x27ddfd(0x12d)](__dirname,_0x27ddfd(0x124)),_0x13eca1=JSON[_0x27ddfd(0x13d)](fs[_0x27ddfd(0x11f)](_0x17d9e1,_0x27ddfd(0x138)));for(const _0x45684b in _0x13eca1){_0x3450af['toLowerCase']()===_0x45684b[_0x27ddfd(0x132)]()&&(config[_0x27ddfd(0x13e)]===_0x27ddfd(0x129)&&await _0x3701d1['reply'](_0x13eca1[_0x45684b]));}}),cmd({'on':_0x3d6cae(0x127)},async(_0x2bdaa5,_0x13d3ce,_0x4191d6,{from:_0x111883,body:_0x20d48d,isOwner:_0x11a6bb})=>{const _0x3b6dd8=_0x3d6cae;await _0x2bdaa5[_0x3b6dd8(0x13b)](_0x3b6dd8(0x12f),_0x111883);});function _0x39d1(_0x1a88ec,_0x3cc3d4){const _0x19b791=_0x19b7();return _0x39d1=function(_0x39d1d2,_0x233d3b){_0x39d1d2=_0x39d1d2-0x11f;let _0x44333c=_0x19b791[_0x39d1d2];return _0x44333c;},_0x39d1(_0x1a88ec,_0x3cc3d4);}function _0x19b7(){const _0xecb918=['parse','AUTO_REPLY','readFileSync','path','1252358WqOMmf','35lDZxtq','806049pURpEA','../media/autoreply.json','../config','../command','body','578226UQDiYm','true','AUTO_STICKER','audio/mpeg','AUTO_VOICE','join','1WKdeaJ','recording','sendMessage','3324794FDUING','toLowerCase','29157ImTsIv','907320tadDhn','2696SvSKFQ','10pGlwLj','140DbZtDD','utf8','234dLTvoE','../media/autosticker.json','sendPresenceUpdate','2597TxuMQN'];_0x19b7=function(){return _0xecb918;};return _0x19b7();}
