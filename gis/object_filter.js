ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
		center: [59.21156, 39.83260],
		zoom: 17,
		type: 'yandex#satellite',
		controls: ['zoomControl','rulerControl','typeSelector','geolocationControl','fullscreenControl']
	}, {
		searchControlProvider: 'yandex#search'
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
		state: {
	                // Признак, развернут ли список.
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


	var singleCounter = 0, clusterCounter = 0; // Добавим отслеживание количества меток.
	objectManager.objects.each(function (object) {
		var objectState = objectManager.getObjectState(object.id);
		if (objectState.isClustered) {clusterCounter++} else {
			if (objectState.isShown) {singleCounter++}
		}
	});	document.getElementById('map5').innerHTML = 'Одиночных меток на карте: '+ singleCounter +'<br>Кластеризированных меток: '+ clusterCounter;

	//var myBs = [];
	//objectManager.objects.each(function (object) {	myBs.push(JSON.stringify(object.properties))	}); //myBs = [myBs.join(",")]; CreateTableFromJSON(myBs)
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

}