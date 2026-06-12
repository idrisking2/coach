window.OS=(function(){
var today=new Date().toISOString().slice(0,10);
var tabs=[['dash','Dashboard'],['today','Heute'],['calendar','Kalender'],['live','Live'],['planner','Session-Builder'],['boulders','BoulderDB'],['year','52 Wochen'],['blocks','Blöcke'],['log','Log'],['finger','Finger/Kraft'],['tech','Techniklabor'],['moon','MoonBoard'],['tests','Tests'],['reports','Reports'],['rehab','Return-to-Load'],['analysis','Analyse'],['data','Daten']];
function base(){return{start:today,week:1,sessions:[],planned:[],boulders:[],attempts:[],moon:[],tests:[],goals:[['5er zuverlässiger','75-85% in einer Session','aktiv'],['Fingergesund bleiben','keine Ringbandreaktion','aktiv'],['Mehr über Füße ziehen','weniger Cut-loose','aktiv']],timer:180}}
var data;try{data=JSON.parse(localStorage.boulder_coach_os||'null')||base()}catch(e){data=base()}
function save(){localStorage.boulder_coach_os=JSON.stringify(data)}
function el(id){return document.getElementById(id)}
function esc(x){return String(x==null?'':x).replace(/[&<>]/g,function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[m]})}
function num(x){return Number(x||0)}
function diff(a,b){return Math.round((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/86400000)}
function phase(w){var p=(COACH_DATA.phases||[]).find(function(x){return w>=x.a&&w<=x.b});return p||COACH_DATA.phases[0]}
function block(){var p=phase(data.week);return COACH_DATA.blocks[p.id]||COACH_DATA.blocks.capacity}
function recent(days){return data.sessions.filter(function(s){return diff(s.date,today)>=0&&diff(s.date,today)<days})}
function isClimb(s){return ['Pause','Mobility/Analyse','Kraft/Capacity','Finger Density','Finger Recruitment'].indexOf(s.type)<0&&num(s.rpe)>0}
function status(){var r=recent(10),sum=0,cl=0,fs=0;for(var i=0;i<r.length;i++){sum+=num(r[i].rpe);fs+=num(r[i].finger||r[i].fingerRpe);if(isClimb(r[i]))cl++}var avg=r.length?fs/r.length:0,last=r.slice().sort(function(a,b){return b.date.localeCompare(a.date)})[0],score=100,w=[];if(last&&num(last.rpe)>=8){score-=30;w.push('Letzte Session RPE ≥8: Low-Day nötig.')}if(last&&num(last.finger||last.fingerRpe)>=7){score-=35;w.push('Finger-RPE hoch: kein Board/keine Leisten.')}if(r.some(function(s){return s.fstatus&&s.fstatus!='normal'})){score-=42;w.push('Fingerstatus auffällig: 48-72h vorsichtig.')}if(sum>=50||cl>=8){score-=18;w.push('10-Tage-Dichte hoch: Volumen senken.')}score=Math.max(0,Math.min(100,Math.round(score)));return{score:score,sum:sum,cl:cl,avg:avg,last:last,w:w,r:r}}
function cls(s){return s<45?'bad':s<70?'warn':'good'}
function bar(v,m){m=m||100;var p=Math.max(0,Math.min(100,v/m*100));return '<div class="bar"><span style="width:'+p+'%"></span></div>'}
function nav(){el('nav').innerHTML=tabs.map(function(t){return '<button id="b_'+t[0]+'" onclick="OS.show(\''+t[0]+'\')">'+t[1]+'</button>'}).join('')}
function show(id){tabs.forEach(function(t){var p=el('pg_'+t[0]),b=el('b_'+t[0]);if(p)p.classList.toggle('on',t[0]==id);if(b)b.classList.toggle('on',t[0]==id)});render()}
function safe(id,fn){try{if(typeof fn==='function'){fn()}else{el(id).innerHTML='<div class="card"><h2>Modul noch nicht geladen</h2></div>'}}catch(e){el(id).innerHTML='<div class="error"><b>Modulfehler</b><br>'+esc(e.message)+'</div>'}}
function render(){safe('pg_dash',UI.dash);safe('pg_today',UI.today);safe('pg_calendar',UI.calendar);safe('pg_live',UI.live);safe('pg_planner',UI.planner);safe('pg_boulders',UI.boulders);safe('pg_year',UI.year);safe('pg_blocks',UI.blocks);safe('pg_log',UI.log);safe('pg_finger',UI.finger);safe('pg_tech',UI.tech);safe('pg_moon',UI.moon);safe('pg_tests',UI.tests);safe('pg_reports',UI.reports);safe('pg_rehab',UI.rehab);safe('pg_analysis',UI.analysis);safe('pg_data',UI.dataPage)}
function start(){nav();tabs.forEach(function(t,i){var p=el('pg_'+t[0]);if(p)p.classList.toggle('on',i==0)});render()}
return{today:today,tabs:tabs,data:data,save:save,el:el,esc:esc,num:num,diff:diff,phase:phase,block:block,status:status,cls:cls,bar:bar,show:show,render:render,start:start};
})();