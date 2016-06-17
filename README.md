# gridSlider
html part should be like the following three classes

1. grid-slide => it respresents each slide content including caption, images and values
2. grid-img => it represents each 'grid-slid' class's  image
3. grid-cap => it represents each 'grid-slid' class's  Caption

html should be in the following way

	<div class="grid-slide" data-sec="2000" data-source="0" style="height: 220px;">
		<div class="capt grid-cap"></div>
		<div class="greydout grid-img"></div>
	</div>

here, 

1. each data-* attributes in 'grid-slid' class will be considered as object for slider
2. we are not providing any stlysheet apart from basic styles

data should be the following format

var psDataSource = [
  {   
    gridHead: "ANTOFAGASTA Montt",
    gridId: "ANTOFAGASTA",
    gridImagePaths: ["images/Antofagasta_1.jpg", "images/La_Serena_1.jpg", "images/Iquique_1.jpg", "images/Valparaiso_1.jpg", "images/Copiapo_1.jpg", "images/Arica_1.jpg", "images/santiago_1.jpg"],
    gridCitiesAndCost: [["ANTOFAGASTA","$35.000"], ["LA SERENA", "$15.000"], ["IQUIQUE", "$15.000"], ["VALPARAÍSO", "$15.000"], ["COPIAPÓ", "$15.000"], ["ARICA", "$15.000"], ["SANTIAGO", "$15.000"]]
 },
 {
    gridHead: "LA SERENA",
    gridId: "LA SERENA",
    gridImagePaths: ["images/La_Serena_2.jpg", "images/Iquique_2.jpg", "images/Valparaiso_2.jpg", "images/Copiapo_2.jpg", "images/Arica_2.jpg", "images/santiago_2.jpg", "images/Antofagasta_2.jpg"],
    gridCitiesAndCost: [["LA SERENA", "$15.000"], ["IQUIQUE", "$15.000"], ["VALPARAÍSO", "$15.000"], ["COPIAPÓ", "$15.000"], ["ARICA", "$15.000"], ["SANTIAGO", "$15.000"], ["ANTOFAGASTA","$35.000"]]
 }]