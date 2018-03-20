var wms_layers = [];
var lyr_Photo_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Photo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Photo_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4433180.448719, 8225383.988246, 4435340.093351, 8227003.796365]
                            })
                        });var format_OGRGeoJSONLineString_1 = new ol.format.GeoJSON();
var features_OGRGeoJSONLineString_1 = format_OGRGeoJSONLineString_1.readFeatures(json_OGRGeoJSONLineString_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OGRGeoJSONLineString_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OGRGeoJSONLineString_1.addFeatures(features_OGRGeoJSONLineString_1);var lyr_OGRGeoJSONLineString_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OGRGeoJSONLineString_1, 
                style: style_OGRGeoJSONLineString_1,
                title: '<img src="styles/legend/OGRGeoJSONLineString_1.png" /> Ситуация (линии) OGRGeoJSON LineString'
            });var format_OGRGeoJSONPoint_2 = new ol.format.GeoJSON();
var features_OGRGeoJSONPoint_2 = format_OGRGeoJSONPoint_2.readFeatures(json_OGRGeoJSONPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OGRGeoJSONPoint_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OGRGeoJSONPoint_2.addFeatures(features_OGRGeoJSONPoint_2);var lyr_OGRGeoJSONPoint_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OGRGeoJSONPoint_2, 
                style: style_OGRGeoJSONPoint_2,
                title: '<img src="styles/legend/OGRGeoJSONPoint_2.png" /> Теодолитный ход (вершины) OGRGeoJSON Point'
            });var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__3.addFeatures(features__3);var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                title: '<img src="styles/legend/_3.png" /> Ситуация'
            });var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__4.addFeatures(features__4);var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                title: '<img src="styles/legend/_4.png" /> Растительность'
            });var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__5.addFeatures(features__5);var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                title: '<img src="styles/legend/_5.png" /> РастительностьА'
            });

lyr_Photo_0.setVisible(true);lyr_OGRGeoJSONLineString_1.setVisible(true);lyr_OGRGeoJSONPoint_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_Photo_0,lyr_OGRGeoJSONLineString_1,lyr_OGRGeoJSONPoint_2,lyr__3,lyr__4,lyr__5];
lyr_OGRGeoJSONLineString_1.set('fieldAliases', {'type': 'type', });
lyr_OGRGeoJSONPoint_2.set('fieldAliases', {'name': 'name', });
lyr__3.set('fieldAliases', {'ID': 'ID', });
lyr__4.set('fieldAliases', {'ID': 'ID', 'Обозначение дерева': 'Обозначение дерева', 'Высота (только деревья), м': 'Высота (только деревья), м', 'Диаметр на высоте 1,3 м, см': 'Диаметр на высоте 1,3 м, см', 'Диаметр на высоте 0,1 м, см': 'Диаметр на высоте 0,1 м, см', 'Протяженность зоны без сучьв, м': 'Протяженность зоны без сучьв, м', 'Диаметр кроны, м': 'Диаметр кроны, м', 'Балл санитарного состояния': 'Балл санитарного состояния', 'Ступень толщины': 'Ступень толщины', 'Наличие пороков': 'Наличие пороков', });
lyr__5.set('fieldAliases', {'ID': 'ID', 'Обозначение дерева': 'Обозначение дерева', 'Высота (только деревья), м': 'Высота (только деревья), м', 'Диаметр на высоте 1,3 м, см': 'Диаметр на высоте 1,3 м, см', 'Диаметр на высоте 0,1 м, см': 'Диаметр на высоте 0,1 м, см', 'Протяженность зоны без сучьв, м': 'Протяженность зоны без сучьв, м', 'Диаметр кроны, м': 'Диаметр кроны, м', 'Балл санитарного состояния': 'Балл санитарного состояния', 'Ступень толщины': 'Ступень толщины', 'Наличие пороков': 'Наличие пороков', 'X': 'X', 'Y': 'Y', });
lyr_OGRGeoJSONLineString_1.set('fieldImages', {'type': 'TextEdit', });
lyr_OGRGeoJSONPoint_2.set('fieldImages', {'name': 'TextEdit', });
lyr__3.set('fieldImages', {'ID': 'TextEdit', });
lyr__4.set('fieldImages', {'ID': 'TextEdit', 'Обозначение дерева': 'TextEdit', 'Высота (только деревья), м': 'TextEdit', 'Диаметр на высоте 1,3 м, см': 'TextEdit', 'Диаметр на высоте 0,1 м, см': 'TextEdit', 'Протяженность зоны без сучьв, м': 'TextEdit', 'Диаметр кроны, м': 'TextEdit', 'Балл санитарного состояния': 'TextEdit', 'Ступень толщины': 'TextEdit', 'Наличие пороков': 'TextEdit', });
lyr__5.set('fieldImages', {'ID': 'TextEdit', 'Обозначение дерева': 'TextEdit', 'Высота (только деревья), м': 'TextEdit', 'Диаметр на высоте 1,3 м, см': 'TextEdit', 'Диаметр на высоте 0,1 м, см': 'TextEdit', 'Протяженность зоны без сучьв, м': 'TextEdit', 'Диаметр кроны, м': 'TextEdit', 'Балл санитарного состояния': 'TextEdit', 'Ступень толщины': 'TextEdit', 'Наличие пороков': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_OGRGeoJSONLineString_1.set('fieldLabels', {'type': 'no label', });
lyr_OGRGeoJSONPoint_2.set('fieldLabels', {'name': 'no label', });
lyr__3.set('fieldLabels', {'ID': 'no label', });
lyr__4.set('fieldLabels', {'ID': 'no label', 'Обозначение дерева': 'no label', 'Высота (только деревья), м': 'no label', 'Диаметр на высоте 1,3 м, см': 'no label', 'Диаметр на высоте 0,1 м, см': 'no label', 'Протяженность зоны без сучьв, м': 'no label', 'Диаметр кроны, м': 'no label', 'Балл санитарного состояния': 'no label', 'Ступень толщины': 'no label', 'Наличие пороков': 'no label', });
lyr__5.set('fieldLabels', {'ID': 'no label', 'Обозначение дерева': 'no label', 'Высота (только деревья), м': 'no label', 'Диаметр на высоте 1,3 м, см': 'no label', 'Диаметр на высоте 0,1 м, см': 'no label', 'Протяженность зоны без сучьв, м': 'no label', 'Диаметр кроны, м': 'no label', 'Балл санитарного состояния': 'no label', 'Ступень толщины': 'no label', 'Наличие пороков': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});