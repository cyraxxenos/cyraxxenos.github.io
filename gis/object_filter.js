ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
		center: [59.209858, 39.908239], //59.21156, 39.83260
		zoom: 17,
		type: 'yandex#satellite',
		controls: ['zoomControl','rulerControl','typeSelector','geolocationControl','fullscreenControl']
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
            point.coordinates, {balloonContentBody: point.properties}
        ));
    }
    // Добавляем коллекцию меток на карту
    myMap.geoObjects.add(myCollection);

    // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
        options: {
            // Заменяем стандартный провайдер данных (геокодер) нашим собственным
            provider: new CustomSearchProvider(jsdata),
            // Не будем показывать еще одну метку при выборе результата поиска, т.к. метки коллекции myCollection уже добавлены на карту
            noPlacemark: true,
            resultsPerPage: 5
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
	listBoxItems.push(new ymaps.control.ListBoxItem({ data: {content: "  <img src='gray.png'>   Другие"},	state: {selected: true} }));

        // Теперь создадим список, содержащий пункты
	listBoxControl = new ymaps.control.ListBox({
		data: {content:'Тематические слои 15', title:'Фильтр по тематическим слоям'},
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

	// Добавим отслеживание количества меток
	var singleCounter = 0, clusterCounter = 0;
	objectManager.objects.each(function (object) {
		var objectState = objectManager.getObjectState(object.id);
		if (objectState.isClustered) {clusterCounter++} else {
			if (objectState.isShown) {singleCounter++}
		}
	});	document.getElementById('map5').innerHTML = 'Одиночных меток на карте: '+ singleCounter +'<br>Кластеризированных меток: '+ clusterCounter;

    });

	//$.ajax({url:"data.json"}).done(function(data) {objectManager.add(data)});

	myMap.events.add('click', function() {myMap.balloon.close()});

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function(filters) {
	// Применим фильтр
	objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories){
	return function(obj){
		var content = obj.properties.balloonContent;
		return categories[content]
	}
    }


// Провайдер данных для элемента управления ymaps.control.SearchControl.
// Осуществляет поиск геообъектов в по массиву points.
// Реализует интерфейс IGeocodeProvider.
function CustomSearchProvider(points) {this.points = points}

// Провайдер ищет по полю properties стандартным методом String.ptototype.indexOf.
CustomSearchProvider.prototype.geocode = function (request, options) {
    var deferred = new ymaps.vow.defer(),
        geoObjects = new ymaps.GeoObjectCollection(),
    // Сколько результатов нужно пропустить.
        offset = options.skip || 0,
    // Количество возвращаемых результатов.
        limit = options.results || 20;
        
    var points = [];
    // Ищем в свойстве properties каждого элемента массива.
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (point.properties.toLowerCase().indexOf(request.toLowerCase()) != -1) {
            points.push(point);
        }
    }
    // При формировании ответа можно учитывать offset и limit.
    points = points.splice(offset, limit);
    // Добавляем точки в результирующую коллекцию.
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i],
            coords = point.coordinates,
                    text = point.properties;

        geoObjects.add(new ymaps.Placemark(coords, {
            name: text + ' name',
            description: text + ' description',
            balloonContentBody: '<p>' + text + '</p>',
            boundedBy: [coords, coords]
        }));
    }

    deferred.resolve({
        // Геообъекты поисковой выдачи.
        geoObjects: geoObjects,
        // Метаинформация ответа.
        metaData: {
            geocoder: {
                // Строка обработанного запроса.
                request: request,
                // Количество найденных результатов.
                found: geoObjects.getLength(),
                // Количество возвращенных результатов.
                results: limit,
                // Количество пропущенных результатов.
                skip: offset
            }
        }
    });

    // Возвращаем объект-обещание.
    return deferred.promise();
};


}