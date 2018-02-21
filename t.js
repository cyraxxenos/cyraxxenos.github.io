var jade = {d:0, m:0, w:0, hr:0, mn:0, sc:0}
var ID = function(a) {return document.getElementById(a)}
var time100=new time100()
function time100(){
var ca=0,tD=0,tout=0,updint=1000,tl="",u="undefined",i
var p={n:["Воскресенье.Понедельник.Вторник.Среда.Четверг.Пятница.Суббота.Вск.Пнд.Вто.Срд.Чтв.Птн.Суб.Январь.Февраль.Март.Апрель.Май.Июнь.Июль.Август.Сентябрь.Октябрь.Ноябрь.Декабрь.Янв.Фев.Мрт.Апр.Май.Июн.Июл.Авг.Сен.Окт.Ноя.Дек"],w:"неделя ",W:"неделя .n",dy:" день"}
for(i in p)p[i]=decodeURIComponent(p[i])
p["n"]=p["n"].split(".")
this.init=function(cl){
if(tout!=0)clearInterval(time100.tout)
var i,j,q=[],c={},dF="%H:%i:%s"
for(i in cl){
cl[i]["p"]=""
if(typeof cl[i]["format"]!=u)dF=cl[i]["format"]
for(j in c)dF=dF.replace(/j/g,c[j])
cl[i]["format"]=dF
if(cl[i]["format"].indexOf("<sp")==-1)cl[i]["format"] = "<span id='ti'>" + cl[i]["format"] + "</span>"
if(typeof cl[i]["v"]==u)q.push(cl[i]["id"])
}
this.ca=cl
if(0<q.length){
i=document.createElement("script")
i.setAttribute("src", "//time100.ru/api.php?type=cb&t="+new Date().getTime())
j=document.getElementsByTagName("head").item(0)
j.appendChild(i)
}
else this.tick()
}
this.cb=function(t,r,a){
var rpT=new Date(),n=0
time100.tD=rpT.getTime()-t-Math.round((rpT-r)/2);time100.t=t
for(i in this.ca)this.ca[i]["v"]=0
this.tick()
}
this.tick=function(){
var tU=new Date(),t=new Date(),i,c,pw
tU.setTime(tU.getTime()-this.tD)
for(i in this.ca){
c=this.ca[i]
{
czone=gz(c["zone"])
t.setTime(czone*60*60000+tU.getTime())
var d,y=t.getUTCFullYear()+"",m=t.getUTCMonth()+1,N=new Date(y,0,1),o=N.getDay()-1
if(o==-1)o=6
var W=Math.floor((t-N+N.getTimezoneOffset()*60000)/604800000+(o/7))
if(o<4)W++
if(W==0){
W=52
if(new Date(y-1,0,1).getDay()==4||new Date(y-1,11,31).getDay()==4)W=53
}
var g={t:t.getUTCHours()},h={},j
for(j in g){
h[j]=(g[j])
h[j+"H"]=h[j]
h[j+"M"]="AM"
if(h[j]>11){
h[j+"M"]="PM"
h[j]=(h[j]-12)
}
if(h[j]=="0")h[j]=12
}
if(c["format"].search("%u")!=-1)updint=5
d=c["format"].replace(/%d/g,l0(t.getUTCDate())).replace(/%D/g,p["n"][7+t.getUTCDay()]).replace(/%j/g,t.getUTCDate()).replace(/%l/g,p["n"][t.getUTCDay()]).replace(/%N/g,(t.getUTCDay()==0)?7:t.getUTCDay()).replace(/%S/g,u).replace(/%w/g,(t.getUTCDay())).replace(/%z/g,Math.floor((t-N+N.getTimezoneOffset()*60000)/86400000+1)).replace(/%W/g,W).replace(/%F/g,p["n"][13+m]).replace(/%m/g,l0(m)).replace(/%M/g,p["n"][25+m]).replace(/%n/g,m).replace(/%t/g,new Date(y, m, 0).getDate()).replace(/%L/g,(y%4==0)?1:0).replace(/%Y/g,y).replace(/%y/g,y.substr(2,2)).replace(/%a/g,h["tM"].toLowerCase()).replace(/%A/g,h["tM"]).replace(/%B/g,u).replace(/%g/g,h["t"]).replace(/%G/g,t.getUTCHours()).replace(/%h/g,l0(h["t"])).replace(/%H/g,l0(h["tH"])).replace(/%i/g,l0(t.getUTCMinutes())).replace(/%s/g,l0(t.getUTCSeconds())).replace(/%u/g,l00(t.getUTCMilliseconds())).replace(/%O/g,u).replace(/%P/g,u).replace(/%T/g,u).replace(/%Z/g,u).replace(/%c/g,u).replace(/%r/g,u).replace(/%U/g,Math.round(t.getTime() / 1000))
j=d.indexOf(">")
if(d!=c["p"]){
if(document.querySelectorAll)o=document.querySelectorAll('span.'+i);
else o=eval()
if(o[0]!=null){
for(var ic in o)o[ic].innerHTML=d;
c["p"]=d
}}}}
      jade.w = t.getUTCDay()
      jade.hr = t.getUTCHours()
      jade.mn = t.getUTCMinutes()
      //jade.sc = t.getUTCSeconds()
      if(jade.hr<11 || jade.hr>=15) {ID("r").innerHTML = ""}
      if(!ID("S2_1") && jade.w==2 && jade.hr==11 && jade.mn==35) { ID("r").innerHTML = ("Варианты по фамилиям (2 курс) для ЛР:<br>"+ S2(1)) }
      if(!ID("S4_2") && jade.w==4) {
            if((jade.hr==11 && jade.mn>45) || (jade.hr>11 && jade.hr<15)) { ID("r").innerHTML = ("Варианты по фамилиям (4 курс) для ЛР:<br>"+ S4(1)+S4(2)) }
      }
tout=setTimeout('time100.tick("")',updint-tU%updint)
}
function l0(n){return n>9?n:"0"+n}
function l00(n){return n>9?(n>99?n:"0"+n):"00"+n}
function gz(z){
var zz={"Europe/Moscow":"+3","UTC":"+0"}
if(typeof zz[z]==u){if(isNaN(parseFloat(z)))zz[z]=0
else zz[z]=parseFloat(z)}
return zz[z]}
}
