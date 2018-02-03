var time100=new time100()
function time100(){
var ca=0,tD=0,tout=0,updint=5000,tl="",u="undefined",i
var p={n:["%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%8C%D0%B5.%D0%9F%D0%BE%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA.%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA.%D0%A1%D1%80%D0%B5%D0%B4%D0%B0.%D0%A7%D0%B5%D1%82%D0%B2%D0%B5%D1%80%D0%B3.%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0.%D0%A1%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D0%B0.%D0%92%D1%81%D0%BA.%D0%9F%D0%BD%D0%B4.%D0%92%D1%82%D0%BE.%D0%A1%D1%80%D0%B4.%D0%A7%D1%82%D0%B2.%D0%9F%D1%82%D0%BD.%D0%A1%D1%83%D0%B1.%D0%AF%D0%BD%D0%B2%D0%B0%D1%80%D1%8C.%D0%A4%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8C.%D0%9C%D0%B0%D1%80%D1%82.%D0%90%D0%BF%D1%80%D0%B5%D0%BB%D1%8C.%D0%9C%D0%B0%D0%B9.%D0%98%D1%8E%D0%BD%D1%8C.%D0%98%D1%8E%D0%BB%D1%8C.%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82.%D0%A1%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C.%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C.%D0%9D%D0%BE%D1%8F%D0%B1%D1%80%D1%8C.%D0%94%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8C.%D0%AF%D0%BD%D0%B2.%D0%A4%D0%B5%D0%B2.%D0%9C%D1%80%D1%82.%D0%90%D0%BF%D1%80.%D0%9C%D0%B0%D0%B9.%D0%98%D1%8E%D0%BD.%D0%98%D1%8E%D0%BB.%D0%90%D0%B2%D0%B3.%D0%A1%D0%B5%D0%BD.%D0%9E%D0%BA%D1%82.%D0%9D%D0%BE%D1%8F.%D0%94%D0%B5%D0%BA"],w:"%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F ",W:"%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F .n",dy:" %D0%B4%D0%B5%D0%BD%D1%8C"}
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
      document.getElementById("r").innerHTML += cl[i]["format"]
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
tout=setTimeout('time100.tick("")',updint-tU%updint)
}
function l0(n){return n>9?n:"0"+n}
function l00(n){return n>9?(n>99?n:"0"+n):"00"+n}
function gz(z){
var zz={"Africa/Abidjan":"+0","Africa/Accra":"+0","Africa/Addis_Ababa":"+3","Africa/Algiers":"+1","Africa/Asmara":"+3","Africa/Bamako":"+0","Africa/Bangui":"+1","Africa/Banjul":"+0","Africa/Bissau":"+0","Africa/Blantyre":"+2","Africa/Brazzaville":"+1","Africa/Bujumbura":"+2","Africa/Cairo":"+2","Africa/Casablanca":"+0","Africa/Ceuta":"+1","Africa/Conakry":"+0","Africa/Dakar":"+0","Africa/Dar_es_Salaam":"+3","Africa/Djibouti":"+3","Africa/Douala":"+1","Africa/El_Aaiun":"+0","Africa/Freetown":"+0","Africa/Gaborone":"+2","Africa/Harare":"+2","Africa/Johannesburg":"+2","Africa/Juba":"+3","Africa/Kampala":"+3","Africa/Khartoum":"+2","Africa/Kigali":"+2","Africa/Kinshasa":"+1","Africa/Lagos":"+1","Africa/Libreville":"+1","Africa/Lome":"+0","Africa/Luanda":"+1","Africa/Lubumbashi":"+2","Africa/Lusaka":"+2","Africa/Malabo":"+1","Africa/Maputo":"+2","Africa/Maseru":"+2","Africa/Mbabane":"+2","Africa/Mogadishu":"+3","Africa/Monrovia":"+0","Africa/Nairobi":"+3","Africa/Ndjamena":"+1","Africa/Niamey":"+1","Africa/Nouakchott":"+0","Africa/Ouagadougou":"+0","Africa/Porto-Novo":"+1","Africa/Sao_Tome":"+1","Africa/Tripoli":"+2","Africa/Tunis":"+1","Africa/Windhoek":"+2","America/Adak":"-10","America/Anchorage":"-9","America/Anguilla":"-4","America/Antigua":"-4","America/Araguaina":"-3","America/Argentina/Buenos_Aires":"-3","America/Argentina/Catamarca":"-3","America/Argentina/Cordoba":"-3","America/Argentina/Jujuy":"-3","America/Argentina/La_Rioja":"-3","America/Argentina/Mendoza":"-3","America/Argentina/Rio_Gallegos":"-3","America/Argentina/Salta":"-3","America/Argentina/San_Juan":"-3","America/Argentina/San_Luis":"-3","America/Argentina/Tucuman":"-3","America/Argentina/Ushuaia":"-3","America/Aruba":"-4","America/Asuncion":"-3","America/Atikokan":"-5","America/Bahia":"-3","America/Bahia_Banderas":"-6","America/Barbados":"-4","America/Belem":"-3","America/Belize":"-6","America/Blanc-Sablon":"-4","America/Boa_Vista":"-4","America/Bogota":"-5","America/Boise":"-7","America/Cambridge_Bay":"-7","America/Campo_Grande":"-3","America/Cancun":"-5","America/Caracas":"-4","America/Cayenne":"-3","America/Cayman":"-5","America/Chicago":"-6","America/Chihuahua":"-7","America/Costa_Rica":"-6","America/Creston":"-7","America/Cuiaba":"-3","America/Curacao":"-4","America/Danmarkshavn":"+0","America/Dawson":"-8","America/Dawson_Creek":"-7","America/Denver":"-7","America/Detroit":"-5","America/Dominica":"-4","America/Edmonton":"-7","America/Eirunepe":"-5","America/El_Salvador":"-6","America/Fort_Nelson":"-7","America/Fortaleza":"-3","America/Glace_Bay":"-4","America/Godthab":"-3","America/Goose_Bay":"-4","America/Grand_Turk":"-4","America/Grenada":"-4","America/Guadeloupe":"-4","America/Guatemala":"-6","America/Guayaquil":"-5","America/Guyana":"-4","America/Halifax":"-4","America/Havana":"-5","America/Hermosillo":"-7","America/Indiana/Indianapolis":"-5","America/Indiana/Knox":"-6","America/Indiana/Marengo":"-5","America/Indiana/Petersburg":"-5","America/Indiana/Tell_City":"-6","America/Indiana/Vevay":"-5","America/Indiana/Vincennes":"-5","America/Indiana/Winamac":"-5","America/Inuvik":"-7","America/Iqaluit":"-5","America/Jamaica":"-5","America/Juneau":"-9","America/Kentucky/Louisville":"-5","America/Kentucky/Monticello":"-5","America/Kralendijk":"-4","America/La_Paz":"-4","America/Lima":"-5","America/Los_Angeles":"-8","America/Lower_Princes":"-4","America/Maceio":"-3","America/Managua":"-6","America/Manaus":"-4","America/Marigot":"-4","America/Martinique":"-4","America/Matamoros":"-6","America/Mazatlan":"-7","America/Menominee":"-6","America/Merida":"-6","America/Metlakatla":"-9","America/Mexico_City":"-6","America/Miquelon":"-3","America/Moncton":"-4","America/Monterrey":"-6","America/Montevideo":"-3","America/Montserrat":"-4","America/Nassau":"-5","America/New_York":"-5","America/Nipigon":"-5","America/Nome":"-9","America/Noronha":"-2","America/North_Dakota/Beulah":"-6","America/North_Dakota/Center":"-6","America/North_Dakota/New_Salem":"-6","America/Ojinaga":"-7","America/Panama":"-5","America/Pangnirtung":"-5","America/Paramaribo":"-3","America/Phoenix":"-7","America/Port-au-Prince":"-5","America/Port_of_Spain":"-4","America/Porto_Velho":"-4","America/Puerto_Rico":"-4","America/Punta_Arenas":"-3","America/Rainy_River":"-6","America/Rankin_Inlet":"-6","America/Recife":"-3","America/Regina":"-6","America/Resolute":"-6","America/Rio_Branco":"-5","America/Santarem":"-3","America/Santiago":"-3","America/Santo_Domingo":"-4","America/Sao_Paulo":"-2","America/Scoresbysund":"-1","America/Sitka":"-9","America/St_Barthelemy":"-4","America/St_Johns":"-3.5","America/St_Kitts":"-4","America/St_Lucia":"-4","America/St_Thomas":"-4","America/St_Vincent":"-4","America/Swift_Current":"-6","America/Tegucigalpa":"-6","America/Thule":"-4","America/Thunder_Bay":"-5","America/Tijuana":"-8","America/Toronto":"-5","America/Tortola":"-4","America/Vancouver":"-8","America/Whitehorse":"-8","America/Winnipeg":"-6","America/Yakutat":"-9","America/Yellowknife":"-7","Antarctica/Casey":"+11","Antarctica/Davis":"+7","Antarctica/DumontDUrville":"+10","Antarctica/Macquarie":"+11","Antarctica/Mawson":"+5","Antarctica/McMurdo":"+13","Antarctica/Palmer":"-3","Antarctica/Rothera":"-3","Antarctica/Syowa":"+3","Antarctica/Troll":"+0","Antarctica/Vostok":"+6","Arctic/Longyearbyen":"+1","Asia/Aden":"+3","Asia/Almaty":"+6","Asia/Amman":"+2","Asia/Anadyr":"+12","Asia/Aqtau":"+5","Asia/Aqtobe":"+5","Asia/Ashgabat":"+5","Asia/Atyrau":"+5","Asia/Baghdad":"+3","Asia/Bahrain":"+3","Asia/Baku":"+4","Asia/Bangkok":"+7","Asia/Barnaul":"+7","Asia/Beirut":"+2","Asia/Bishkek":"+6","Asia/Brunei":"+8","Asia/Chita":"+9","Asia/Choibalsan":"+8","Asia/Colombo":"+5.5","Asia/Damascus":"+2","Asia/Dhaka":"+6","Asia/Dili":"+9","Asia/Dubai":"+4","Asia/Dushanbe":"+5","Asia/Famagusta":"+2","Asia/Gaza":"+2","Asia/Hebron":"+2","Asia/Ho_Chi_Minh":"+7","Asia/Hong_Kong":"+8","Asia/Hovd":"+7","Asia/Irkutsk":"+8","Asia/Jakarta":"+7","Asia/Jayapura":"+9","Asia/Jerusalem":"+2","Asia/Kabul":"+4.5","Asia/Kamchatka":"+12","Asia/Karachi":"+5","Asia/Kathmandu":"+5.75","Asia/Khandyga":"+9","Asia/Kolkata":"+5.5","Asia/Krasnoyarsk":"+7","Asia/Kuala_Lumpur":"+8","Asia/Kuching":"+8","Asia/Kuwait":"+3","Asia/Macau":"+8","Asia/Magadan":"+11","Asia/Makassar":"+8","Asia/Manila":"+8","Asia/Muscat":"+4","Asia/Nicosia":"+2","Asia/Novokuznetsk":"+7","Asia/Novosibirsk":"+7","Asia/Omsk":"+6","Asia/Oral":"+5","Asia/Phnom_Penh":"+7","Asia/Pontianak":"+7","Asia/Pyongyang":"+8.5","Asia/Qatar":"+3","Asia/Qyzylorda":"+6","Asia/Riyadh":"+3","Asia/Sakhalin":"+11","Asia/Samarkand":"+5","Asia/Seoul":"+9","Asia/Shanghai":"+8","Asia/Singapore":"+8","Asia/Srednekolymsk":"+11","Asia/Taipei":"+8","Asia/Tashkent":"+5","Asia/Tbilisi":"+4","Asia/Tehran":"+3.5","Asia/Thimphu":"+6","Asia/Tokyo":"+9","Asia/Tomsk":"+7","Asia/Ulaanbaatar":"+8","Asia/Urumqi":"+6","Asia/Ust-Nera":"+10","Asia/Vientiane":"+7","Asia/Vladivostok":"+10","Asia/Yakutsk":"+9","Asia/Yangon":"+6.5","Asia/Yekaterinburg":"+5","Asia/Yerevan":"+4","Atlantic/Azores":"-1","Atlantic/Bermuda":"-4","Atlantic/Canary":"+0","Atlantic/Cape_Verde":"-1","Atlantic/Faroe":"+0","Atlantic/Madeira":"+0","Atlantic/Reykjavik":"+0","Atlantic/South_Georgia":"-2","Atlantic/St_Helena":"+0","Atlantic/Stanley":"-3","Australia/Adelaide":"+10.5","Australia/Brisbane":"+10","Australia/Broken_Hill":"+10.5","Australia/Currie":"+11","Australia/Darwin":"+9.5","Australia/Eucla":"+8.75","Australia/Hobart":"+11","Australia/Lindeman":"+10","Australia/Lord_Howe":"+11","Australia/Melbourne":"+11","Australia/Perth":"+8","Australia/Sydney":"+11","Europe/Amsterdam":"+1","Europe/Andorra":"+1","Europe/Astrakhan":"+4","Europe/Athens":"+2","Europe/Belgrade":"+1","Europe/Berlin":"+1","Europe/Bratislava":"+1","Europe/Brussels":"+1","Europe/Bucharest":"+2","Europe/Budapest":"+1","Europe/Busingen":"+1","Europe/Chisinau":"+2","Europe/Copenhagen":"+1","Europe/Dublin":"+0","Europe/Gibraltar":"+1","Europe/Guernsey":"+0","Europe/Helsinki":"+2","Europe/Isle_of_Man":"+0","Europe/Istanbul":"+3","Europe/Jersey":"+0","Europe/Kaliningrad":"+2","Europe/Kiev":"+2","Europe/Kirov":"+3","Europe/Lisbon":"+0","Europe/Ljubljana":"+1","Europe/London":"+0","Europe/Luxembourg":"+1","Europe/Madrid":"+1","Europe/Malta":"+1","Europe/Mariehamn":"+2","Europe/Minsk":"+3","Europe/Monaco":"+1","Europe/Moscow":"+3","Europe/Oslo":"+1","Europe/Paris":"+1","Europe/Podgorica":"+1","Europe/Prague":"+1","Europe/Riga":"+2","Europe/Rome":"+1","Europe/Samara":"+4","Europe/San_Marino":"+1","Europe/Sarajevo":"+1","Europe/Saratov":"+4","Europe/Simferopol":"+3","Europe/Skopje":"+1","Europe/Sofia":"+2","Europe/Stockholm":"+1","Europe/Tallinn":"+2","Europe/Tirane":"+1","Europe/Ulyanovsk":"+4","Europe/Uzhgorod":"+2","Europe/Vaduz":"+1","Europe/Vatican":"+1","Europe/Vienna":"+1","Europe/Vilnius":"+2","Europe/Volgograd":"+3","Europe/Warsaw":"+1","Europe/Zagreb":"+1","Europe/Zaporozhye":"+2","Europe/Zurich":"+1","Indian/Antananarivo":"+3","Indian/Chagos":"+6","Indian/Christmas":"+7","Indian/Cocos":"+6.5","Indian/Comoro":"+3","Indian/Kerguelen":"+5","Indian/Mahe":"+4","Indian/Maldives":"+5","Indian/Mauritius":"+4","Indian/Mayotte":"+3","Indian/Reunion":"+4","Pacific/Apia":"+14","Pacific/Auckland":"+13","Pacific/Bougainville":"+11","Pacific/Chatham":"+13.75","Pacific/Chuuk":"+10","Pacific/Easter":"-5","Pacific/Efate":"+11","Pacific/Enderbury":"+13","Pacific/Fakaofo":"+13","Pacific/Fiji":"+12","Pacific/Funafuti":"+12","Pacific/Galapagos":"-6","Pacific/Gambier":"-9","Pacific/Guadalcanal":"+11","Pacific/Guam":"+10","Pacific/Honolulu":"-10","Pacific/Kiritimati":"+14","Pacific/Kosrae":"+11","Pacific/Kwajalein":"+12","Pacific/Majuro":"+12","Pacific/Marquesas":"-9.5","Pacific/Midway":"-11","Pacific/Nauru":"+12","Pacific/Niue":"-11","Pacific/Norfolk":"+11","Pacific/Noumea":"+11","Pacific/Pago_Pago":"-11","Pacific/Palau":"+9","Pacific/Pitcairn":"-8","Pacific/Pohnpei":"+11","Pacific/Port_Moresby":"+10","Pacific/Rarotonga":"-10","Pacific/Saipan":"+10","Pacific/Tahiti":"-10","Pacific/Tarawa":"+12","Pacific/Tongatapu":"+13","Pacific/Wake":"+12","Pacific/Wallis":"+12","UTC":"+0"}
if(typeof zz[z]==u){if(isNaN(parseFloat(z)))zz[z]=0
else zz[z]=parseFloat(z)}
return zz[z]}
}
