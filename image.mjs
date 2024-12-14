
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

	return context.getImageData(0, 0, image.width, image.height).data;
	}

/**
 * @param {String} url
 * @param {Number} pixelSize
 */
async function pixelate(url, pixelSize)
	{
	let image = await loadImage(url);

	let rows = Math.floor(image.height / pixelSize);
	let columns = Math.floor(image.width / pixelSize);

	let RW = image.width * 4;
	let PX = pixelSize * pixelSize;

	let result = new Array();

	let pixels = getPixels(image);

	for (let row = 0; row < rows; row++)
		{
		let line = new Array();

		for (let column = 0; column < columns; column++)
			{
			let red = 0;
			let green = 0;
			let blue = 0;

			for (let y = 0; y < pixelSize; y++)
				{
				let offsetY = row * pixelSize + y;

				for (let x = 0; x < pixelSize; x++)
					{
					let offsetX = column * pixelSize + x;

					let offset = offsetY * RW + offsetX * 4;

					red += pixels[offset];
					green += pixels[offset + 1];
					blue += pixels[offset + 2];
					}
				}

			red = Math.floor(red / PX);
			green = Math.floor(green / PX);
			blue = Math.floor(blue / PX);

			line.push([red, green, blue]);
			}

		result.push(line);
		}

	return result;
	}

/**
 * @param {Array<Array<Array<Number>>>} pixels
 * @param {Number} pixelSize
 */
function render(pixels, pixelSize)
	{
	}

export
	{
	loadImage,
	getPixels,
	pixelate
	};
