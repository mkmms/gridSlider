(function ( $ ) {
 	"use strict";

 	$.gridSlider = function(gridWrap, options){

 		var _slider = this;

 		var defaults = {
 			data: []
    }

 		_slider.singleGrid = function(){
			_slider.singleObj = new Object(); 
			_slider.gridWrap.find(".grid-slide").each(function(index, sGrid){
				var _data = $(sGrid).data();
				_slider.singleObj[index] = new Object();
				_slider.singleObj[index]["element"] = sGrid;
				$.each(_data, function(obj, data){
					_slider.singleObj[index][obj] = data;
				})
			})

			return _slider.singleObj;
		}

		_slider.captionAttach = function(capElement, source, _singleGrid, counter, isFirstTime){
			var _settings = _slider.settings;
			var capHtml = "";
			if(_settings.data[source] != undefined && _settings.data[source].gridCitiesAndCost != undefined){
				var currentData = _settings.data[source].gridCitiesAndCost;
				if(isFirstTime){
					var cap = currentData[0];
				}else{
					var cap = currentData[counter];
				}
				capHtml = cap[0] + "<div>" + cap[1] + "</div>";
				$(capElement).html(capHtml);
				$(_singleGrid["element"]).data("value", cap[0]);
			}
		}

		_slider.imageAttach = function(imgElement, source, _singleGrid, counter, isFirstTime){
			var _settings = _slider.settings;
			if(_settings.data[source] != undefined && _settings.data[source].gridImagePaths != undefined){
				var currentData = _settings.data[source].gridImagePaths;
				if(isFirstTime){
					var img = currentData[0];
				}else{
					var img = currentData[counter];
				}
				
				$(imgElement).css("background-image", "url("+img+")");
			}
		}

		_slider.attachEvents = function(imgElement, capElement, source, _singleGrid, counter, isFirstTime){
			var _settings = _slider.settings;
			_slider.captionAttach(capElement, source, _singleGrid, counter, true);
			_slider.imageAttach(imgElement, source, _singleGrid, counter, true);
			setInterval(function(){
				_slider.captionAttach(capElement, source, _singleGrid, counter, false);
				_slider.imageAttach(imgElement, source, _singleGrid, counter, false);
				counter = (_settings.data.length - 1) > counter ? counter + 1 : 0
			}, _singleGrid.sec)
		}

		_slider.contentSlide = function(_singleGrid){
			var source = parseInt(_singleGrid["source"]);
			var counter = {};
			counter[source] = 0;
			var capElement = $(_singleGrid["element"]).find(".grid-cap");
			var imageElement = $(_singleGrid["element"]).find(".grid-img");
			_slider.attachEvents(imageElement[0], capElement[0], source, _singleGrid, counter[source], true);
		}

		_slider.performSliding = function(){
			$.each(_slider.singleGrid(), function(obj, _singleGrid){
				_slider.contentSlide(_singleGrid);
			})
		}

		// initialize settings and gridparent Element
		_slider.init = function(){
			_slider.settings = $.extend({}, defaults, options);
			_slider.gridWrap = gridWrap;
			_slider.performSliding();
		}

		_slider.init();
 	}
 	/*
		==========================================
		Grid Slider
		==========================================
		each tile will slide along with caption
 	*/

  $.fn.gridSlider = function(options) {
		var slider = new $.gridSlider(this, options);
  };
 	

}( jQuery ));