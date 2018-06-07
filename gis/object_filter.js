ymaps.ready(init);

function init() {

var myLayer = function () { return new ymaps.Layer('http://tile.openstreetmap.org/%z/%x/%y.png', {projection: ymaps.projection.sphericalMercator}) }
ymaps.layer.storage.add('OSM#layer', myLayer);			// Добавляем слой в хранилище слоёв
var myType = new ymaps.MapType('OSM Схема', ['OSM#layer']);	// Создаём свой тип карты, состоящий из одного слоя
ymaps.mapType.storage.add('OSM#mapType', myType);		// Добавляем тип карты в хранилище типов

ymaps.layer.storage.add('CartoDB#layer', function () {
	return new ymaps.Layer('http://basemaps.cartocdn.com/dark_all/%z/%x/%y.png', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('CartoDB#mapType', new ymaps.MapType('CartoDB (Dark)', ['CartoDB#layer']));

ymaps.layer.storage.add('OSMLand#layer', function () {
	return new ymaps.Layer('http://a.tile.thunderforest.com/landscape/%z/%x/%y.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('OSMLand#mapType', new ymaps.MapType('OSM Landscape', ['OSMLand#layer']));

ymaps.layer.storage.add('OSMOutdoors#layer', function () {
	return new ymaps.Layer('http://a.tile.thunderforest.com/outdoors/%z/%x/%y.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('OSMOutdoors#mapType', new ymaps.MapType('OSM Outdoors', ['OSMOutdoors#layer']));

ymaps.layer.storage.add('Wikimedia#layer', function () {
	return new ymaps.Layer('https://maps.wikimedia.org/osm-intl/%z/%x/%y.png', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('Wikimedia#mapType', new ymaps.MapType('Wikimedia', ['Wikimedia#layer']));

ymaps.layer.storage.add('Yandex#layer', function () {
	return new ymaps.Layer('http://vec01.maps.yandex.net/tiles?l=skl&v=4.55.2&z=%z&x=%x&y=%y&scale=2&lang=ru_RU')
}); ymaps.mapType.storage.add('Yandex#mapType', new ymaps.MapType('Надписи', ['Yandex#layer']));

ymaps.layer.storage.add('Google#layer', function () {	// subdomains:['mt0','mt1','mt2','mt3']		Еще ссылка: http://mt0.google.com/vt/lyrs=m@176000000&hl=ru&%c
	return new ymaps.Layer('http://mt0.google.com/vt/lyrs=m&x=%x&y=%y&z=%z', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('Google#mapType', new ymaps.MapType('Google Схема', ['Google#layer']));

ymaps.layer.storage.add('GoogleP#layer', function () {
	return new ymaps.Layer('http://mt0.google.com/vt/lyrs=p&x=%x&y=%y&z=%z', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('GoogleP#mapType', new ymaps.MapType('Google Схема', ['GoogleP#layer']));

ymaps.layer.storage.add('GoogleR#layer', function () {
	return new ymaps.Layer('http://mt0.google.com/vt/lyrs=t&x=%x&y=%y&z=%z', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('GoogleR#mapType', new ymaps.MapType('Google Ландшафт', ['GoogleR#layer']));

ymaps.layer.storage.add('GoogleS#layer', function () {	// subdomains:['mt0','mt1','mt2','mt3']		Еще ссылка: http://mt0.google.com/vt/lyrs=s@176000000&hl=ru&%c
	return new ymaps.Layer('http://mt0.google.com/vt/lyrs=s&x=%x&y=%y&z=%z', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('GoogleS#mapType', new ymaps.MapType('Google Спутник', ['GoogleS#layer']));

ymaps.layer.storage.add('GoogleY#layer', function () {
	return new ymaps.Layer('http://mt0.google.com/vt/lyrs=y&x=%x&y=%y&z=%z', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('GoogleY#mapType', new ymaps.MapType('Google Гибрид', ['GoogleY#layer']));

ymaps.layer.storage.add('2GIS#layer', function () {
	return new ymaps.Layer('http://tile2.maps.2gis.com/tiles?z=%z&x=%x&y=%y', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('2GIS#mapType', new ymaps.MapType('2GIS', ['2GIS#layer']));

ymaps.layer.storage.add('ESRI#layer', function () {
	return new ymaps.Layer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/%z/%y/%x', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('ESRI#mapType', new ymaps.MapType('ESRI Схема', ['ESRI#layer']));

ymaps.layer.storage.add('ESRIS#layer', function () {
	return new ymaps.Layer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/%z/%y/%x', {projection: ymaps.projection.sphericalMercator})
}); ymaps.mapType.storage.add('ESRIS#mapType', new ymaps.MapType('ESRI Спутник', ['ESRIS#layer']));

ymaps.layer.storage.add('Concrete', function () {return new ymaps.Layer('grc-texture-250x250.jpg')});
ymaps.mapType.storage.add('Concrete#mapType', new ymaps.MapType('Concrete', ['Concrete']));

// h = roads only
// m = standard roadmap
// p = terrain
// r = somehow altered roadmap
// s = satellite only
// t = terrain only
// y = hybrid

	var myMap = new ymaps.Map('map', {
		center: (location.href.split('?')[1]=='v' ? [59.21, 39.9078] : [59.2118, 39.8323]),
		zoom: (location.href.split('?')[1]=='v' ? 19 : 18),
		type: 'yandex#satellite', // или null, чтобы не загружался слой Схема Яндекс.Карт // 'yandex#satellite', 'yandex#hybrid'
		controls: ['zoomControl','rulerControl','typeSelector','geolocationControl'] //'fullscreenControl'
	}, {	searchControlProvider: 'yandex#search'
	}),
	objectManager = new ymaps.ObjectManager({
		clusterize: true,	// Чтобы метки начали кластеризоваться, выставляем опцию
		gridSize: 128,		// ObjectManager принимает те же опции, что и кластеризатор
		maxZoom: 17,
		clusterIconLayout: "default#pieChart"	// Макет метки кластера pieChart
	}), jdata = [], jsdata = [], st;

	var PolyColl = new ymaps.GeoObjectCollection();	myMap.geoObjects.add(PolyColl);

	var CollP = [	new ymaps.GeoObject(my297ploC, {fillImageHref:'sand-texture.jpg', fillMethod:'tile', fillOpacity:0.8, stroke:true, strokeColor:"#740f", strokeWidth:1.5}),	// Детская площадка
			new ymaps.GeoObject(my297ploV, {fillImageHref:'sand-texture.jpg', fillMethod:'tile', fillOpacity:0.8, stroke:true, strokeColor:"#740f", strokeWidth:1.5}),	// Футбольная площадка
			new ymaps.GeoObject(my297ploS, {fillImageHref:'sand-texture.jpg', fillMethod:'tile', fillOpacity:0.8, stroke:true, strokeColor:"#740f", strokeWidth:1.5})];	// Спортивная площадка

	var CollG = [	new ymaps.GeoObject(my297gidro, {fillImageHref:'g-texture.jpg', fillMethod:'tile', fillOpacity:1, stroke:true, strokeColor:"#3aff", strokeWidth:1.5})];		// Гидрография

	var CollK = [	new ymaps.GeoObject(my297, {fillColor:"#fff2", strokeColor:"#f00f", strokeWidth:2}),	// Кадастровый ЗУ
			new ymaps.GeoObject(HomeK, {fillColor:"#fa0a", strokeColor:"#f00f", strokeWidth:2})];	// Кадастровый ЗУ

	var CollA = [	new ymaps.GeoObject(my297Area, {fillColor:"#5a40", strokeColor:"#5faf", strokeWidth:1.5}),	// Территория объекта
			new ymaps.GeoObject(HomeArea, {fillColor:"#5a40", strokeColor:"#5faf", strokeWidth:1.5})];	// Территория объекта

	var CollS = [	new ymaps.GeoObject(my297road, {fillImageHref:'rubber-texture.jpg', fillMethod:'tile', stroke:true, strokeColor:"#222f", strokeWidth:1}),	// Дорожки
			new ymaps.GeoObject(HomeRoad, {fillColor:"#fcca", strokeColor:"#aaaf", strokeWidth:1.5}),	// Дорожки
			new ymaps.GeoObject(Home, {fillColor:"#fff5", strokeColor:"#f000", strokeWidth:0}),	// А/б вокруг дома
			new ymaps.GeoObject(HomeB, {strokeColor:"#35ff", strokeWidth:1.5})];

	var CollSk = [];	// Инфраструктура
	my297sk.forEach( function (obj) {CollSk.push(new ymaps.GeoObject(obj,{iconLayout:"default#image",iconImageHref:"icon/sk.svg",iconImageSize:[16,16],iconImageOffset:[-8,-8]}))} );
	my297fo.forEach( function (obj) {CollSk.push(new ymaps.GeoObject(obj,{iconLayout:"default#image",iconImageHref:"icon/fo.svg",iconImageSize:[16,16],iconImageOffset:[-8,-16]}))} );
	HomeSk.forEach( function (obj) {CollSk.push(new ymaps.GeoObject(obj,{iconLayout:"default#image",iconImageHref:"icon/sk.svg",iconImageSize:[16,16],iconImageOffset:[-8,-8]}))} );
	HomeFo.forEach( function (obj) {CollSk.push(new ymaps.GeoObject(obj,{iconLayout:"default#image",iconImageHref:"icon/fo.svg",iconImageSize:[16,16],iconImageOffset:[-8,-16]}))} );

	var CollZ = [], CollZcolorS = ["#9370db","#0f0","#008000","#ffc0cb","#a52a2a","#ff0","#f0f","#f00","#0ff","#ffa500","#00f"];
	for (var i=0; i<my297grP.length; i++){
		my297grP[i].forEach( function (obj) {CollZ.push(new ymaps.GeoObject(obj, {fillColor:CollZcolorS[i], strokeColor:"#000", opacity:0.6}))} );	// Зоны произрастания
	}
	var CollZcolorV = ["#9370db","#800000","#0f0","#008000","#fff","#008080","#ff0","#808000","#800080","#f00"];
	for (var i=0; i<HomegrP.length; i++){
		HomegrP[i].forEach( function (obj) {CollZ.push(new ymaps.GeoObject(obj, {fillColor:CollZcolorV[i], strokeColor:"#000", opacity:0.6}))} );	// Зоны произрастания
	}

	var rectangle = [new ymaps.Rectangle([[59.2150061667 + x, 39.8239375556 + y], [59.2075578889 + x, 39.8433379722 + y]], {}, {fillImageHref:'Photo.png'})];
	//myMap.geoObjects.add(rectangle);

	myMap.geoObjects.each( function (obj) {obj.options.set('opacity', 1)} );

	var ObjC = function (a,b) {a.forEach( function (obj) {if(b) {PolyColl.add(obj)} else PolyColl.remove(obj)} )}
	var ObjO = function (a,b,c) {a.forEach( function (obj) {obj.options.set('opacity', ID(b).checked ? c:0)} )}
	var ObjV = function (a,b) {a.forEach( function (obj) {obj.options.set('visible', b ? true:false)} )}
	var zI = function (a,b) {a.forEach( function (obj) {obj.options.set('zIndex', b)} )}

	var ID = function(a) {return document.getElementById(a)};
	ID('sk').onclick = function () {ObjC(CollSk, ID('sk').checked ? 1:0)};
	ID('p').onclick = function () {ObjC(CollP,ID('p').checked ? 1:0)};
	ID('k').onclick = function () {ObjC(CollK,ID('k').checked ? 1:0)};	// Кадастровый ЗУ
	ID('a').onclick = function () {ObjC(CollA,ID('a').checked ? 1:0)};
	ID('z').onclick = function () {ObjC(CollZ,ID('z').checked ? 1:0)};
	ID('s').onclick = function () {ObjC(CollS,ID('s').checked ? 1:0)};
	ID('g').onclick = function () {ObjC(CollG,ID('g').checked ? 1:0)};
	ID('f').onclick = function () {ObjC(rectangle,ID('f').checked ? 1:0)};
	ID('i').onclick = function () {ID('map5').style.display = ID('mapC').style.display = ID('i').checked ? '':'none'};

	ObjC(CollA,1);	// Территория объекта
	//ObjC(CollZ,1);	// Полигоны произрастания
	//ObjC(CollK,1);	// Кадастровый ЗУ
	ObjC(CollP,1);	// Площадки
	ObjC(CollS,1);	// Дорожки
	ObjC(CollG,1);	// Гидрография
	ObjC(CollSk,1);	// Инфраструктура

	zI(rectangle,0);// Территория объекта
	zI(CollA,1);	// Территория объекта
	zI(CollK,2);	// Кадастровый ЗУ
	zI(CollS,3);	// Дорожки
	zI(CollP,4);	// Площадки
	zI(CollZ,5);	// Полигоны произрастания
	zI(CollG,6);	// Гидрография
	zI(CollSk,7);	// Инфраструктура

	myMap.events.add('boundschange', function (e) {
		//if (myMap.getZoom()<16 && ID('sk').checked) {ID('sk').click()}
	});

	// Если используется стандартный набор типов карты, и мы хотим добавить слой из хранилища mapType.storage между типами Спутник и Схема.
	var typeSelector = myMap.controls.get('typeSelector');
	typeSelector.addMapType('Yandex#mapType', 15);
	typeSelector.addMapType('OSM#mapType', 20);
	typeSelector.addMapType('CartoDB#mapType', 21);
	typeSelector.addMapType('OSMLand#mapType', 22);
	typeSelector.addMapType('OSMOutdoors#mapType', 23);
	typeSelector.addMapType('Wikimedia#mapType', 24);
	typeSelector.addMapType('Google#mapType', 30);
	typeSelector.addMapType('GoogleP#mapType', 31);
	typeSelector.addMapType('GoogleR#mapType', 32);
	typeSelector.addMapType('GoogleS#mapType', 33);
	typeSelector.addMapType('GoogleY#mapType', 34);
	typeSelector.addMapType('2GIS#mapType', 35);
	typeSelector.addMapType('ESRI#mapType', 36);
	typeSelector.addMapType('ESRIS#mapType', 37);
	typeSelector.addMapType('Concrete#mapType', 40);

	// 0.00001 (x) и 0.00007 (y) - для Ковыринского сада, 0.000005 (xH) и 0.00003 (yH) - для сквера Петра

	$.getJSON('https://cyraxxenos.github.io/gis/data.json').done(function (geoJson) {
		objectManager.add(geoJson);		// Добавляем описание объектов в формате JSON в менеджер объектов
		objectManager.objects.each(function (object) { var a = object.geometry.coordinates;
			a[0] += x;
			a[1] += y;
		});
		myMap.geoObjects.add(objectManager);	// Добавляем объекты на карту
		objectManager.objects.each(function (object) { jdata.push(object.properties); jsdata.push(object) });
	});

	$.getJSON('https://cyraxxenos.github.io/gis/dataV.json').done(function (geoJson) {
		objectManager.add(geoJson);
		objectManager.objects.each(function (object) { var a = object.geometry.coordinates;
			a[0] -= x; a[0] += xH;
			a[1] -= y; a[1] += yH + 0.000008;
		});
	});

    // Создаем коллекцию
	var myCollection = new ymaps.GeoObjectCollection({},{preset:"twirl#greenIcon" });
    // Заполняем коллекцию данными (для поиска данных в data.json)
    for (var i = 0, l = jsdata.length; i < l; i++) {
	var point = jsdata[i];
	myCollection.add(new ymaps.Placemark(
	    point.geometry.coordinates, {balloonContentBody: JSON.stringify(point.properties.Keys)}
	));
    }
	// Добавляем коллекцию меток на карту
	myMap.geoObjects.add(myCollection);

    // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
	data: {title: "Поиск по тематическим слоям"},
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

	var listBoxItems = [], cl = function (a,b) { return new ymaps.control.ListBoxItem({ data:{content:"  <img src='"+a+".png'>   "+b}, state:{selected:true} }) };
	listBoxItems.push(cl('mediumpurple','Акация'));	// #9370db
	listBoxItems.push(cl('maroon','Барбарис'));	// #800000
	listBoxItems.push(cl('lime','Берёза'));		// #0f0
	listBoxItems.push(cl('green','Вяз'));		// #008000
	listBoxItems.push(cl('white','Дуб'));		// #fff
	listBoxItems.push(cl('pink','Ива'));		// #ffc0cb
	listBoxItems.push(cl('brown','Клён'));		// #a52a2a
	listBoxItems.push(cl('teal','Лапчатка'));	// #008080
	listBoxItems.push(cl('yellow','Липа'));		// #ff0
	listBoxItems.push(cl('olive','Лиственница'));	// #808000
	listBoxItems.push(cl('magenta','Ольха'));	// #f0f
	listBoxItems.push(cl('purple','Осина'));	// #800080
	listBoxItems.push(cl('red','Рябина'));		// #f00
	listBoxItems.push(cl('cyan','Тополь'));		// #0ff
	listBoxItems.push(cl('orange','Яблоня'));	// #ffa500
	listBoxItems.push(cl('blue','Ясень'));		// #00f
	listBoxItems.push(new ymaps.control.ListBoxItem({options: {type:'separator'}}));
	listBoxItems.push(cl('gray','Другие'));		//<svg width='10' height='10'><circle cx='5' cy='5' r='4' style='fill:blue; stroke:black; stroke-width:1'/></svg>
	// Теперь создадим список, содержащий пункты
	listBoxControl = new ymaps.control.ListBox({
		data: {content:'Растительность', title:'Фильтр по тематическим слоям'},
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

	ID('gr').onclick = function () {listBoxItems.forEach( function (obj) {obj.state.set('selected',ID('gr').checked ? true:false)} ) };

	//$.ajax({url:"data.json"}).done(function(data) {objectManager.add(data)});

	function round_4(a) {return Math.round(parseFloat(a)*10000)/10000}
	function rplN(a) {return (a+'').replace(/[,]/g,'.')}
	function z2(a){var b=a; if (parseFloat(rplN(a))<10){b ='0'+ b} return b}
	function deg_dms3(val) {var R = deg_dms(val); return (R[0]==0?R[3]:"")+R[0]+"&#176;"+z2(R[1])+"&#8242;"+z2(R[2].toFixed(3))+"&#8243;"}
	function deg_dms(val) {
		var val_s = (val<0?"-":""), val_u = Math.abs(val);
		var g = Math.floor(val_u);
		var m = Math.floor((val_u-g)*60);
		var s = round_4((val_u-g-m/60)*3600);
		if (s==60) {s=0; m++}
		if (m==60) {m=0; g++}
		return [(val_s+g)*1, m, s, val_s]
	}

	listBoxControl.events.add('contextmenu', function(e) {
		window.open('','','scrollbars=1,width=885,height=650').document.body.appendChild(CreateTableFromJSON(jdata));
	});
	myMap.events.add('contextmenu', function(e) {
		var coor = e.get('coords');
		myMap.hint.open( coor, [coor[0].toFixed(8), coor[1].toFixed(8)].join(' ; ') +'<br>'+  [deg_dms3(coor[0].toFixed(12)), deg_dms3(coor[1].toFixed(12))].join(' ; '))
	});
	myMap.events.add('mousedown', function(e) {
		if (event.which == 2) {
			if (myMap.getCenter()[1] > 39.87) {myMap.setCenter([59.2118, 39.8323]); myMap.setZoom(18)}
			else {myMap.setCenter([59.21, 39.9078]); myMap.setZoom(18)}
		}
	});
	myMap.events.add('actionbegin', function() {getCou()});
	myMap.events.add('actionend', function() {getCou()});
	myMap.controls.get('rulerControl').events.add('contextmenu', function() {
		ID("cg").style.display = ID("cv").style.display = ID("cg").style.display==''?'none':''
	});
	myMap.controls.get('rulerControl').data.set('title','Измерение расстояний на карте (двойной клик управляет отображением перекрестия в центре карты)');
	myMap.controls.get('typeSelector').events.add('contextmenu', function() {
		myMap.setType('none');
		//myMap.layers.add(new ymaps.Layer('http://mt0.google.com/vt/lyrs=m@176000000&hl=ru&%c', {projection: ymaps.projection.sphericalMercator}));
	});

	document.addEventListener("mouseup", function() {getCou(); myMap.balloon.close(); myMap.hint.close();});

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
		var singleCou = 0, clusterCou = 0, coor;
		   objectManager.objects.each(function (object) {
			var objectState = objectManager.getObjectState(object.id);
			if (objectState.isClustered) {clusterCou++} else {
				if (objectState.isShown) {singleCou++}
			}
		   });
		coor = myMap.getCenter();
		document.getElementById('map5').innerHTML = 'Центр: '+ coor[0].toFixed(8) +' | '+ coor[1].toFixed(8) +'<br> = '+ deg_dms3(coor[0].toFixed(12)) +' | '+ deg_dms3(coor[1].toFixed(12))+
		'<br>Одиночных меток на карте: '+ singleCou +'<br>Кластеризированных меток: '+ clusterCou;
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
	if (JSON.stringify(point.properties.Keys).toLowerCase().indexOf(request.toLowerCase()) != -1) {
	    points.push(point);
	}
    }
    points = points.splice(offset, limit);	// При формировании ответа можно учитывать offset и limit
    for (var i = 0, l = points.length; i < l; i++) {	// Добавляем точки в результирующую коллекцию
	var point = points[i],
		coor = point.geometry.coordinates,
		properties = JSON.stringify(point.properties.Keys);
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