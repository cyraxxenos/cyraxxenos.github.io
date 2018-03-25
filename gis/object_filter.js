ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
		center: [59.21156, 39.83260],
		zoom: 17,
		type: 'yandex#satellite',
		controls: ['zoomControl','rulerControl','typeSelector','geolocationControl','fullscreenControl']
	}, {	searchControlProvider: 'yandex#search'
	}),
        objectManager = new ymaps.ObjectManager({
	// Чтобы метки начали кластеризоваться, выставляем опцию.
		clusterize: true,
	// ObjectManager принимает те же опции, что и кластеризатор.
		gridSize: 128,
		maxZoom: 17,
	// Макет метки кластера pieChart.
		clusterIconLayout: "default#pieChart"
	});
    myMap.geoObjects.add(objectManager);

	// Создадим 5 пунктов выпадающего списка.
    var listBoxItems = ['Вяз','Ясень','Липа','Ольха','Яблоня','Ива','Клён','Рябина','Тополь','Другие']
	.map(function(title) {
            return new ymaps.control.ListBoxItem({
		data: {content: title},
		state: {selected: true}
            })
	}),
        // Теперь создадим список, содержащий пункты.
	listBoxControl = new ymaps.control.ListBox({
		data: {content:'Тематические слои', title:'Фильтр по тематическим слоям'},
		items: listBoxItems,
		state: {	// Признак, развернут ли список.
	                expanded: true,
	                filters: listBoxItems.reduce(function(filters, filter) {
	                    filters[filter.data.get('content')] = filter.isSelected();
	                    return filters;
	                }, {})
		}
	});
	myMap.controls.add(listBoxControl);

	// Добавим отслеживание изменения признака, выбран ли пункт списка.
    listBoxControl.events.add(['select', 'deselect'], function(e) {
	var listBoxItem = e.get('target');
	var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
	filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
	listBoxControl.state.set('filters', filters);

	// Добавим отслеживание количества меток.
	var singleCounter = 0, clusterCounter = 0;
	objectManager.objects.each(function (object) {
		var objectState = objectManager.getObjectState(object.id);
		if (objectState.isClustered) {clusterCounter++} else {
			if (objectState.isShown) {singleCounter++}
		}
	});	document.getElementById('map5').innerHTML = 'Одиночных меток на карте: '+ singleCounter +'<br>Кластеризированных меток: '+ clusterCounter;

	//var myBs = [];
	//objectManager.objects.each(function (object) { myBs.push(JSON.stringify(object.properties)) });
	//myBs = [myBs.join(",")]; CreateTableFromJSON(myBs)
	//document.getElementById("map5").innerHTML = myBs.join(",");

    });


	myMap.events.add('click', function(e) {myMap.balloon.close()});

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function(filters) {
	// Применим фильтр.
	objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories){
	return function(obj){
		var content = obj.properties.balloonContent;
		return categories[content]
	}
    }

	$.ajax({url: "data.json"}).done(function (data) { objectManager.add(data) });

	var myCollection = new ymaps.GeoObjectCollection();
	$.ajax({url: "data.json"}).done(function (data) { myCollection.add(data) });
	// Добавляем коллекцию меток на карту.
	myMap.geoObjects.add(myCollection);

    // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
            // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
            provider: new CustomSearchProvider(myPoints),
            // Не будем показывать еще одну метку при выборе результата поиска, т.к. метки myCollection уже добавлены на карту.
            noPlacemark: true,
            resultsPerPage: 5
	});

    // Добавляем контрол в верхний правый угол,
    myMap.controls.add(mySearchControl, { right: 10, top: 50 })

// Провайдер данных для элемента управления ymaps.control.SearchControl.
// Осуществляет поиск геообъектов в по массиву points.
// Реализует интерфейс IGeocodeProvider.
function CustomSearchProvider(points) {this.points = points}

// Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
CustomSearchProvider.prototype.geocode = function (request, options) {
    var promise = new ymaps.util.Promise(),
        geoObjects = new ymaps.GeoObjectArray(),
        // Сколько результатов нужно пропустить.
        offset = options.skip || 0,
        // Количество возвращаемых результатов.
        limit = options.results || 20;

    var points = [];
    // Ищем в свойстве text каждого элемента массива.
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
            points.push(point);
        }
    }
    // При формировании ответа можно учитывать offset и limit.
    points = points.splice(offset, limit);
    // Добавляем точки в результирующую коллекцию.
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i],
            coords = point.coords,
                    text = point.text;

        geoObjects.add(new ymaps.Placemark(coords, {
            name: text + ' name',
            description: text + ' description',
            balloonContentBody: '<p>' + text + '</p>',
            boundedBy: [coords, coords]
        }));
    }

    promise.resolve({
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
	return promise;
};

}