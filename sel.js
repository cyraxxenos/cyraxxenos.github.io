function S2(j) {var s = ["",
	"Андреева Дарья Николаевна",
	"Басалаева Валентина Матвеевна",
	"Биссеринкин Андрей Михайлович",
	"Дыбина Ульяна Викторовна",
	"Ершова Людмила Игоревна",
	"Жидкова Наталья Сергеевна",
	"Ивина Марина Алексеевна",
	"Колтакова Юлия Михайловна",
	"Крылов Никита Александрович",
	"Левчук  Екатерина Юрьевна",
	"Маркова Анна Викторовна",
	"Маркова Наталья Андреевна",
	"Мусаев Артур Магомедович",
	"Одинцова Дарья Александровна",
	"Ожигина Ольга Борисовна",
	"Скакунова Ксения Александровна",
	"Соломонов Андрей Николаевич",
	"Тукуев Александр Анатольевич",
	"Туманова Дарья Игоревна",
	"Цветкова Валерия Дмитриевна",
	"Шабанова Юлия Андреевна",
	"Шушкова Алёна Николаевна"];
	s[0] ="<br>"+ ' <select onchange="top.location = this.value; this.value=0">'+
		'<option value=0 selected> </option>';
	for (var i=1; i<s.length; i++){
		s[0] += '<option value="https://cyraxxenos.github.io/A2/'+ i +'.html">'+
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
	s[0] ="<br>"+ j.slice(-1) +') <select id="S4_'+ j +'" onchange="top.location = this.value; this.value=0">'+
		'<option value=0 selected> </option>';
	for (var i=1; i<s.length; i++){
		s[0] += '<option value="https://cyraxxenos.github.io/A4/A'+ j +"_"+ i +'.html">'+
			(i<10?'  ':'') + i +') '+ s[i] +'</option>';
	} return (s[0] += "</select><br>")
}
