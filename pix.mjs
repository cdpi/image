
import sharp from "sharp";

async function getMetadata()
	{
	const metadata = await sharp("sammy.png").metadata();
	console.log(metadata);
	}

getMetadata();
