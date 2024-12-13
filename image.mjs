
/**
 * @param {String} url
 */
async function loadImage(url)
	{
	return new Promise((resolve, reject) =>
		{
		let image = new Image();

		image.onload = () => resolve(image);
		image.onerror = reject;

		image.src = url;
		});
	}

/**
 * @param {HTMLImageElement} image
 */
function getPixels(image)
	{
	let canvas = document.createElement("canvas");

	canvas.width = image.width;
	canvas.height = image.height;

	let context = canvas.getContext("2d");

	context.drawImage(image, 0, 0);

	return context.getImageData(0, 0, image.width, image.height);
	}

/**
 * @param {String} url
 * @param {Number} pixelSize
 */
async function pixelate(url, pixelSize)
	{
	let image = await loadImage(url);

	let pixels = getPixels(image);

	let columns = Math.floor(image.width / pixelSize);
	let rows = Math.floor(image.height / pixelSize);

	for (let row = 0; row < rows; row++)
		{
		for (let column = 0; column < column; column++)
			{
			//let offset = row * (image.width * 4) + column * 4;
			//let red = pixels.data[offset];
			//let green = pixels.data[offset + 1];
			//let blue = pixels.data[offset + 2];
			//console.debug(`${red}, ${green}, ${blue}`);
			}
		}
	}

export
	{
	loadImage,
	getPixels,
	pixelate
	};
