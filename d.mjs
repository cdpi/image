
import { download } from "./apod.mjs";
import { astronomyPictureOfTheDay } from "./nasa.mjs";

astronomyPictureOfTheDay().then(url =>
	{
	download(url, "apod.jpg", "image/jpeg").then(file =>
		{
		//file.s
		});
	});
