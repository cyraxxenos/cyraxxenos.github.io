function fr(a) {window.open('','','scrollbars=1,width=1280,height=800').document.write('<title>Задание</title><style>body::-webkit-scrollbar, div::-webkit-scrollbar {margin:0; padding:0; display:none}</style><iframe src="'+ a +'" style="width:100%; height:98%; border:0"></iframe>')}
document.onkeydown = document.ondragstart = document.onselectstart = document.oncontextmenu = function(){return false}

function S2() {var s = ["",
	"Андреева Дарья Николаевна",
	"Басалаева Валентина Матвеевна",
	"Биссеринкин Андрей Михайлович",
	"Дыбина Ульяна Викторовна",
	"Ершова Людмила Игоревна",
	"Жидкова Наталья Сергеевна",
	"Ивина Марина Алексеевна",
	"Ившуков Андрей Ильич",
	"Колтакова Юлия Михайловна",
	"Крылов Никита Александрович",
	"Левчук Екатерина Юрьевна",
	"Маркова Анна Викторовна",
	"Маркова Наталья Андреевна",
	"Мусаев Артур Магомедович",
	"Одинцова Дарья Александровна",
	"Ожигина Ольга Борисовна",
	"Скакунова Ксения Александровна",
	"Смирнов Антон Сергеевич",
	"Суедова Кристина Николаевна",
	"Тукуев Александр Анатольевич",
	"Туманова Дарья Игоревна",
	"Цветкова Валерия Дмитриевна",
	"Шабанова Юлия Андреевна",
	"Шушкова Алёна Николаевна"];
	s[0] ="<br>"+ ' <select id="S2" onchange="top.location = this.value; this.value=0">'+
		'<option value=0 selected> </option>';
	for (var i=1; i<s.length; i++){
		s[0] += '<option value="A2/'+ i +'.html">'+
			(i<10?'  ':'') + i +') '+ s[i] +'</option>';
	} return (s[0] += "</select><br>")
}

function S4(j) {var s = ["",
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
	s[0] ="<br>"+ j.slice(-1) +') <select id="S4_'+ j +'" onchange="fr(this.value); this.value=0">'+
		'<option value=0 selected> </option>';
	for (var i=1; i<s.length; i++){
		s[0] += '<option value="A4/A'+ j +"_"+ i +'.html">'+
			(i<10?'  ':'') + i +') '+ s[i] +'</option>';
	} return (s[0] += "</select><br>")
}
