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
		clusterize: true,	// Чтобы метки начали кластеризоваться, выставляем опцию.
		gridSize: 128,		// ObjectManager принимает те же опции, что и кластеризатор.
		maxZoom: 17,
		clusterIconLayout: "default#pieChart"	// Макет метки кластера pieChart.
	}), jdata = [], st;

	$.getJSON('data.json').done(function (geoJson) {
		objectManager.add(geoJson);		// Добавляем описание объектов в формате JSON в менеджер объектов.
		myMap.geoObjects.add(objectManager);	// Добавляем объекты на карту.
		objectManager.objects.each(function (object) { jdata.push(JSON.stringify(object.properties)) });
		jdata = [jdata.join(",")];
		$.makeTable = function (jdata) {
			if (jdata.length <= 0) return "";
			return st = $('<table border=1>').append("<tr>" + $.map(jdata[0], function (val, key) {
				return "<th>" + key + "</th>";
			}).join("\n") + "</tr>").append($.map(jdata, function (index, value) {
				return "<tr>" + $.map(index, function (val, key) {
					return "<td>" + val + "</td>";
				}).join("\n") + "</tr>";
			}).join("\n"));
		};
	alert(st)
	});

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

}