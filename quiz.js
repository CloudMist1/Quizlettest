const _0x3c4fa4=_0x34ed;function _0x34ed(_0x5f31f7,_0x350ba5){const _0x595e86=_0x595e();return _0x34ed=function(_0x34ed4d,_0x205d5f){_0x34ed4d=_0x34ed4d-0xf2;let _0x5c8b6e=_0x595e86[_0x34ed4d];return _0x5c8b6e;},_0x34ed(_0x5f31f7,_0x350ba5);}(function(_0x2d3500,_0x2eecc5){const _0x1e260e=_0x34ed,_0x2b65fb=_0x2d3500();while(!![]){try{const _0x39ca1c=parseInt(_0x1e260e(0x107))/0x1+-parseInt(_0x1e260e(0x10c))/0x2+parseInt(_0x1e260e(0x111))/0x3+-parseInt(_0x1e260e(0x126))/0x4*(parseInt(_0x1e260e(0x133))/0x5)+-parseInt(_0x1e260e(0xff))/0x6+-parseInt(_0x1e260e(0x127))/0x7*(parseInt(_0x1e260e(0x10d))/0x8)+parseInt(_0x1e260e(0x120))/0x9;if(_0x39ca1c===_0x2eecc5)break;else _0x2b65fb['push'](_0x2b65fb['shift']());}catch(_0x22c936){_0x2b65fb['push'](_0x2b65fb['shift']());}}}(_0x595e,0x2b72c));const data={'checkpoint':{'question':_0x3c4fa4(0x132),'boxes':_0x3c4fa4(0xf6)},'normal':{'question':_0x3c4fa4(0x113),'boxes':'.QuestionView\x20>\x20div:nth-child(2)'}},parse=_0x40e421=>{const _0x23b372=_0x3c4fa4,_0x1c441c=_0x40e421[_0x23b372(0x12c)](_0x23b372(0xfb)),_0x4760fc=[];let _0x21856e=0x0;while(_0x21856e<_0x1c441c[_0x23b372(0x103)]){let _0x2a7ef7={};_0x2a7ef7['text']=_0x1c441c[_0x21856e][_0x23b372(0x11a)],_0x21856e++,_0x2a7ef7['answer']=_0x1c441c[_0x21856e][_0x23b372(0x11a)],_0x4760fc['push'](_0x2a7ef7),_0x21856e++;}return _0x4760fc;},findAnswer=(_0x3e2c05,_0x39adc2)=>{return _0x3e2c05['filter'](_0x330b48=>{const _0x45da2b=_0x34ed;if(_0x330b48[_0x45da2b(0x124)]===_0x39adc2)return _0x330b48[_0x45da2b(0x101)];else{if(_0x330b48[_0x45da2b(0x101)]===_0x39adc2)return _0x330b48['text'];}});},displayAnswer=(_0x1343e7,_0x5457a1)=>{const _0x124ef6=_0x3c4fa4,_0xa9b316=data[_0x5457a1][_0x124ef6(0x10e)];for(let _0x385909 of _0x1343e7){let _0x1ba46b=0x1;while(_0x1ba46b<=document[_0x124ef6(0x10f)](_0xa9b316)[_0x124ef6(0x118)][_0x124ef6(0x103)]){if(_0x5457a1==='checkpoint'){const _0x1e9f3a=document[_0x124ef6(0x10f)](_0xa9b316+'\x20>\x20div:nth-child('+_0x1ba46b+_0x124ef6(0xf9))['textContent'];if(_0x1e9f3a===_0x385909['text']||_0x1e9f3a===_0x385909[_0x124ef6(0x101)])document[_0x124ef6(0x10f)](_0xa9b316+_0x124ef6(0xfa)+_0x1ba46b+')')[_0x124ef6(0xfc)][_0x124ef6(0x11d)]=_0x124ef6(0x110);}else{if(_0x5457a1===_0x124ef6(0x10a)){const _0x1c3704=document[_0x124ef6(0x10f)](_0xa9b316+_0x124ef6(0xfa)+_0x1ba46b+_0x124ef6(0xfd)),_0x199d53=_0x1c3704[_0x124ef6(0x11a)];if(_0x199d53===_0x385909[_0x124ef6(0x124)]||_0x199d53===_0x385909['answer'])_0x1c3704[_0x124ef6(0xfc)][_0x124ef6(0x11d)]=_0x124ef6(0x110);}}_0x1ba46b++;}}},clearBackground=_0x431b3e=>{const _0x2b7f12=_0x3c4fa4,_0xf9c825=data[_0x431b3e][_0x2b7f12(0x10e)];let _0x1c14ef=0x1;while(_0x1c14ef<=document[_0x2b7f12(0x10f)](_0xf9c825)[_0x2b7f12(0x118)][_0x2b7f12(0x103)]){if(_0x431b3e===_0x2b7f12(0x10a))document[_0x2b7f12(0x10f)](_0xf9c825+_0x2b7f12(0xfa)+_0x1c14ef+_0x2b7f12(0xfd))[_0x2b7f12(0xfc)]['backgroundColor']=_0x2b7f12(0x130);else _0x431b3e===_0x2b7f12(0xf3)&&(document[_0x2b7f12(0x10f)](_0xf9c825+_0x2b7f12(0xfa)+_0x1c14ef+')')[_0x2b7f12(0xfc)][_0x2b7f12(0x11d)]=_0x2b7f12(0x130));_0x1c14ef++;}},showAnswers=(_0x16946e,_0x3b6bcd)=>{const _0x169826=_0x3c4fa4,_0x552fe3=data[_0x3b6bcd][_0x169826(0x117)];let _0x45f5af='';setInterval(()=>{const _0x24ed7b=_0x169826;if(document[_0x24ed7b(0x10f)](_0x552fe3)){const _0x3151da=document[_0x24ed7b(0x10f)](_0x552fe3)[_0x24ed7b(0x11a)];if(_0x45f5af!==_0x3151da){clearBackground(_0x3b6bcd);const _0x310933=findAnswer(_0x16946e,_0x3151da);displayAnswer(_0x310933,_0x3b6bcd),_0x45f5af=_0x3151da;}}},0x1f4);},info=()=>{const _0x2a0abb=_0x3c4fa4;console['log'](_0x2a0abb(0x11f),_0x2a0abb(0x106)),console[_0x2a0abb(0x121)](_0x2a0abb(0xf5),'font-size:\x2014px;'),console[_0x2a0abb(0x121)](_0x2a0abb(0xf7),_0x2a0abb(0x12f));},main=async()=>{const _0x1c11c7=_0x3c4fa4;console[_0x1c11c7(0x109)]();if(!(window[_0x1c11c7(0x128)]&&window['Quizlet'][_0x1c11c7(0x122)]))throw new Error(_0x1c11c7(0x11b));if(Quizlet['liveGameStudentData']['isPlayingCheckpoint']){const _0x22a5a8=Quizlet[_0x1c11c7(0x122)]['checkpointToken'],_0x2082d3=Quizlet[_0x1c11c7(0x122)][_0x1c11c7(0x129)],_0x3726c3=await(await fetch('https://checkpoint.quizlet.com/join?gameCode='+_0x2082d3+_0x1c11c7(0xf4)+_0x22a5a8))[_0x1c11c7(0x134)](),_0x1c668f=_0x3726c3[_0x1c11c7(0x114)],_0x9de186=await fetch(_0x1c11c7(0xf2)+_0x1c668f);if(_0x9de186[_0x1c11c7(0x10b)]!==0xc8)throw new Error(_0x1c11c7(0x12e));const _0x53ada6=await _0x9de186['text'](),_0xcc0c95=new DOMParser(),_0x18bd4c=_0xcc0c95['parseFromString'](_0x53ada6,_0x1c11c7(0x12d));return{'data':parse(_0x18bd4c),'type':'checkpoint'};}else{const _0x3f8a7f=Object[_0x1c11c7(0x12a)](document['getElementsByClassName']('StudentLayout')[0x0])[_0x1c11c7(0x12b)](_0x5a973e=>_0x5a973e[_0x1c11c7(0x115)]('__reactFiber$')),_0x3e6f5a=document['getElementsByClassName'](_0x1c11c7(0x11e))[0x0][_0x3f8a7f]['alternate'][_0x1c11c7(0x108)][_0x1c11c7(0x108)][_0x1c11c7(0x105)][_0x1c11c7(0x118)][0x2][_0x1c11c7(0x104)][_0x1c11c7(0x118)][_0x1c11c7(0x104)][_0x1c11c7(0xf8)];if(!_0x3e6f5a)throw new Error(_0x1c11c7(0x11b));const _0x4e2244=_0x3e6f5a[_0x1c11c7(0x125)][_0x1c11c7(0x123)],_0x21f8f5=_0x4e2244[_0x1c11c7(0x102)](_0x25b5e8=>{const _0x2269b4=_0x1c11c7;return{'text':_0x25b5e8[_0x2269b4(0x131)]['nodes'][0x4][_0x2269b4(0x11c)][0x1],'answer':_0x25b5e8[_0x2269b4(0x131)][_0x2269b4(0x112)][0xa][_0x2269b4(0x112)][0x0][_0x2269b4(0x112)][0x0][_0x2269b4(0x11c)][0x1]};});return{'data':_0x21f8f5,'type':'normal'};}},start=async()=>{const _0x149bef=_0x3c4fa4;try{const _0xa42c1b=await main();console[_0x149bef(0x121)](_0x149bef(0x116),'color:\x20#3e2d28;\x20font-size:\x2022px'),info(),showAnswers(_0xa42c1b[_0x149bef(0x100)],_0xa42c1b[_0x149bef(0xfe)]);}catch(_0x564321){console[_0x149bef(0x121)]('%c'+_0x564321,_0x149bef(0x119));}};start();function _0x595e(){const _0x2e1287=['length','props','memoizedProps','color:\x20#6366f1;\x20font-size:\x2016px;\x20font-weight:\x20bold;','302090kbCWav','alternate','clear','normal','status','246064LVvPfW','499752OUCDUq','boxes','querySelector','#3e2d28','1018377dfyUYM','nodes','.QuestionView\x20>\x20div\x20>\x20div:last-child\x20','studiableContainerId','startsWith','%cAnswers\x20downloaded\x20successfully','question','children','color:\x20#2D283E;\x20font-size:\x2022px','textContent','You\x20aren\x27t\x20in\x20Quizlet\x20game','entry','backgroundColor','StudentLayout','%cCheat\x20made\x20by\x20Quizit','2935485IpHOyW','log','liveGameStudentData','array','text','_tail','4ClxRnL','35cPfrLp','Quizlet','initialGameCode','keys','find','querySelectorAll','text/html','This\x20game\x20is\x20private','font-size:\x2014px;','#2D283E','_root','#LiveGameStudentTarget\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20h2\x20>\x20div\x20>\x20div','288370MXvMOW','json','https://quizlet.com/','checkpoint','&token=','%cYou\x20can\x20visit\x20our\x20website\x20for\x20other\x20cheats:\x20https://quizit.online/','#LiveGameStudentTarget\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20div:nth-child(3)','%cYou\x20can\x20also\x20join\x20our\x20Discord:\x20https://discord.gg/KEBsMh5UJ3','terms',')\x20>\x20div:nth-child(2)\x20>\x20div\x20>\x20div','\x20>\x20div:nth-child(','.TermText','style',')\x20>\x20span\x20>\x20button\x20>\x20span','type','1780194DtPFld','data','answer','map'];_0x595e=function(){return _0x2e1287;};return _0x595e();}
