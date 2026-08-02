// JavaScript Document

var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
	logo1.src = "images/logo1.jpg";
	logo2.src = "images/logo2.jpg";
}

var imgArray = [
	'BirdDogLg.jpg',
	'HuntingDogsLg.jpg',
	'KidsDogLg.jpg',
	'CatandDogLg.jpg'
];

var titleArray = [
	'Bird and Dog',
	'Two Hunting Dogs',
	'Dog and Kids',
	'Cat and Dog'
];

var imgPath = "images/fullsize/";

function swapImage(imgID) {
	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');

	theImage.src = imgPath + imgArray[imgID];
	textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
	for (var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}

	var logoPreload1 = new Image();
	var logoPreload2 = new Image();
	logoPreload1.src = "images/logo1.jpg";
	logoPreload2.src = "images/logo2.jpg";
}