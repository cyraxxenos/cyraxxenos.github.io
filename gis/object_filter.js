ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
		center: [59.209858, 39.908239], //59.21156, 39.83260
		zoom: 17,
		type: 'yandex#satellite',
		controls: ['zoomControl','rulerControl','typeSelector','geolocationControl'] //'fullscreenControl'
	}, {	searchControlProvider: 'yandex#search'
	}),
        objectManager = new ymaps.ObjectManager({
		clusterize: true,	// Чтобы метки начали кластеризоваться, выставляем опцию
		gridSize: 128,		// ObjectManager принимает те же опции, что и кластеризатор
		maxZoom: 17,
		clusterIconLayout: "default#pieChart"	// Макет метки кластера pieChart
	}), jdata = [], jsdata = [], st;

	$.getJSON('data.json').done(function (geoJson) {
		objectManager.add(geoJson);		// Добавляем описание объектов в формате JSON в менеджер объектов
		myMap.geoObjects.add(objectManager);	// Добавляем объекты на карту
		objectManager.objects.each(function (object) { jdata.push(object.properties); jsdata.push(object) });
		myMap.events.add('dblclick', function() {window.open('','','scrollbars=1,width=885,height=650').document.body.appendChild(CreateTableFromJSON(jdata))})
	});

    // Создаем коллекцию
	var myCollection = new ymaps.GeoObjectCollection();
    // Заполняем коллекцию данными (для поиска данных в data.json)
    for (var i = 0, l = jsdata.length; i < l; i++) {
        var point = jsdata[i];
        myCollection.add(new ymaps.Placemark(
            point.geometry.coordinates, {balloonContentBody: JSON.stringify(point.properties.Обозначение)}
        ));
    }
    // Добавляем коллекцию меток на карту
    myMap.geoObjects.add(myCollection);

    // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
        options: {
            provider: new CustomSearchProvider(jsdata),	// Заменяем стандартный провайдер данных (геокодер) нашим собственным
            // Не будем показывать еще одну метку при выборе результата поиска, т.к. метки коллекции уже добавлены на карту
            noPlacemark: false,
            resultsPerPage: 50
        }});

    // Добавляем контрол в верхний правый угол
    myMap.controls.add(mySearchControl, {float:'right'});

	// Создадим 5 пунктов выпадающего списка
//    var listBoxItems = ['Вяз','Ясень','Липа','Ольха','Яблоня','Ива','Клён','Рябина','Тополь','Другие']
//	.map(function(title) {
//		return new ymaps.control.ListBoxItem({ data: {content: ' <span style="color:Green">'+ title +'</span>'}, state: {selected: true} })
//	}),

	var listBoxItems = [];
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='maroon.png'>   Барбарис"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='lime.png'>   Берёза"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='green.png'>   Вяз"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='white.png'>   Дуб"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='pink.png'>   Ива"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='brown.png'>   Клён"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='teal.png'>   Лапчатка"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='yellow.png'>   Липа"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='olive.png'>   Лиственница"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='magenta.png'>   Ольха"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='purple.png'>   Осина"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='red.png'>   Рябина"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='cyan.png'>   Тополь"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='orange.png'>   Яблоня"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='blue.png'>   Ясень"},	state: {selected: true} }));
	listBoxItems.push(new ymaps.control.ListBoxItem({options: {type:'separator'}}));
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='gray.png'>   Другие"},	state: {selected: true} }));

        // Теперь создадим список, содержащий пункты
	listBoxControl = new ymaps.control.ListBox({
		data: {content:'Тематические слои', title:'Фильтр по тематическим слоям'},
		items: listBoxItems,
		state: {expanded: true,	// Признак, развернут ли список
	                filters: listBoxItems.reduce(function(filters, filter) {
	                    filters[filter.data.get('content')] = filter.isSelected();
	                    return filters;
	                }, {})
		}
	});
	myMap.controls.add(listBoxControl);

	// Добавим отслеживание изменения признака, выбран ли пункт списка
    listBoxControl.events.add(['select', 'deselect'], function(e) {
	var listBoxItem = e.get('target');
	var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
	filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
	listBoxControl.state.set('filters', filters);
	getCou();
    });

	//$.ajax({url:"data.json"}).done(function(data) {objectManager.add(data)});

	//myMap.events.add('mouseup', function() {getCou(); myMap.balloon.close()});

	document.addEventListener("mouseup", function() {
		getCou(); myMap.balloon.close()
	});

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function(filters) {
	objectManager.setFilter(getFilterFunction(filters));	// Применим фильтр
    });

    function getFilterFunction(categories){
	return function(obj){
		var content = obj.properties.balloonContent;
		return categories[content]
	}
    }

    function getCou(){	// Добавим отслеживание количества меток
	var singleCou = 0, clusterCou = 0;
	   objectManager.objects.each(function (object) {
		var objectState = objectManager.getObjectState(object.id);
		if (objectState.isClustered) {clusterCou++} else {
			if (objectState.isShown) {singleCou++}
		}
	   });	document.getElementById('map5').innerHTML = 'Одиночных меток на карте: '+ singleCou +'<br>Кластеризированных меток: '+ clusterCou;
    }


// Провайдер данных для элемента управления ymaps.control.SearchControl
// Осуществляет поиск геообъектов в по массиву points
// Реализует интерфейс IGeocodeProvider
function CustomSearchProvider(points) {this.points = points}

// Провайдер ищет по полю properties стандартным методом String.ptototype.indexOf
CustomSearchProvider.prototype.geocode = function (request, options) {
    var deferred = new ymaps.vow.defer(),
        geoObjects = new ymaps.GeoObjectCollection(),
        offset = options.skip || 0,	// Сколько результатов нужно пропустить
        limit = options.results || 500;	// Количество возвращаемых результатов

    var points = [];
    // Ищем в свойстве properties каждого элемента массива
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (JSON.stringify(point.properties.Обозначение).toLowerCase().indexOf(request.toLowerCase()) != -1) {
            points.push(point);
        }
    }
    points = points.splice(offset, limit);	// При формировании ответа можно учитывать offset и limit
    for (var i = 0, l = points.length; i < l; i++) {	// Добавляем точки в результирующую коллекцию
	var point = points[i],
		coor = point.geometry.coordinates,
		properties = JSON.stringify(point.properties.Обозначение);
        geoObjects.add(new ymaps.Placemark(coor, {
            name: properties +' name',
            description: properties +' description',
            balloonContentBody: '<p>'+ properties +'</p>',
            boundedBy: [coor, coor]
        }));
    }
    deferred.resolve({
	geoObjects: geoObjects,	// Геообъекты поисковой выдачи
	metaData: {		// Метаинформация ответа
            geocoder: {
		request: request,		// Строка обработанного запроса
		found: geoObjects.getLength(),	// Количество найденных результатов
		results: limit,			// Количество возвращенных результатов
		skip: offset			// Количество пропущенных результатов
            }
	}
    });
    return deferred.promise();	// Возвращаем объект-обещание
};


}