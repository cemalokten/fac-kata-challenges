//Filename Converter for Github

//Input Kata title to output lowercase '-' seperated file name

const fileName = function(str) {
	return `${str.toLowerCase().split(' ').join('-')}.js`;
};

fileName('Example File Name Goes Here'); //Expected output 'example-file-name-goes-here.js'
