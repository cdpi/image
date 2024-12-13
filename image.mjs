
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

	let rows = Math.floor(image.height / pixelSize);
	let columns = Math.floor(image.width / pixelSize);

	let pixels = getPixels(image);

	for (let row = 0; row < rows; row++)
		{
		let offsetY = row * pixelSize * image.width * 4;

		for (let column = 0; column < columns; column++)
			{
			let offsetX = column * pixelSize * 4;

			for (let y = 0; y < pixelSize; y++)
				{
				for (let x = 0; x < pixelSize; x++)
					{
					//let red = pixels.data[offset];
					//let green = pixels.data[offset + 1];
					//let blue = pixels.data[offset + 2];
					}
				}

			//console.debug(`${row},${column}; ${offsetX},${offsetY}; ${offset} = ${red}, ${green}, ${blue}`);
			}
		}
	}

export
	{
	loadImage,
	getPixels,
	pixelate
	};
