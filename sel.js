var jade = {st:[], d:0, m:0, w:0, hr:0, mn:0, sc:0}

function Sel(j) {var ABC = function(j){return "&#"+ (64+j) +";"},
	s = ["",
	"Бараева Виктория Сергеевна",
	"Головина Юлия Сергеевна",
	"Евсейчик Полина Алексеевна",
	"Ершова Наталия Евгеньевна",
	"Костылева Дарина Александровна",
	"Краева Ольга Николаевна",
	"Кузнецов Антон Романович",
	"Кузнецов Сергей Евгеньевич",
	"Лебедев Дмитрий Валерьевич",
	"Лисицинская Дарья Александровна",
	"Лучина Ольга Юрьевна",
	"Маклакова Екатерина Анатольевна",
	"Миронова Светлана Викторовна",
	"Мирохина Вера Игоревна",
	"Озорнина Наталья Николаевна",
	"Паршева Наталия Дмитриевна",
	"Пахомова Любовь Викторовна",
	"Попова Анжела Олеговна",
	"Русакова Мария Юрьевна",
	"Ситник Ксения Андреевна",
	"Славская Виктория Андреевна",
	"Сысоева Анастасия Александровна",
	"Чикмасова Ирина Валерьевна",
	"Щукина Яна Ивановна"];
	jade.st[j] ="<br>"+ j +') <select id="sel'+ j +'" onchange="top.location = this.value; this.value=0">'+
		'<option value='+ s[0] +' selected> </option>';
	for (var i=1; i<s.length; i++){
		s[0] = 'https://cyraxxenos.github.io/'+ ABC(j) +"/"+ ABC(j) + i +'.html';
		jade.st[j] += '<option value="'+ s[0] +'">'+ (i<10?'  ':'') + i +') '+ s[i] +'</option>';
	} return (jade.st[j] += "</select><br>");
}
