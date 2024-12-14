
// One of the most popular websites at NASA is the Astronomy Picture of the Day.
// In fact, this website is one of the most popular websites across all federal agencies.
// It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata
// so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then
// keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for
// twitter or instagram feeds; but generally help with discoverability of relevant imagery.

/*
{
"date": "2024-12-14",
"explanation": "Awkward and angular looking, Apollo 17's lunar module Challenger ... to the astronauts' return to planet Earth.",
"hdurl": "https://apod.nasa.gov/apod/image/2412/AS17-149-22859-2v2SmlWmk.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Apollo 17's Moonship",
"url":"https://apod.nasa.gov/apod/image/2412/AS17-149-22859-2v2SmlWmk1024.jpg"
}
*/

let apod = null;

async function astronomyPictureOfTheDay(apiKey = "DEMO_KEY")
	{
	if (apod !== null)
		{
		return apod;
		}

	let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

	let json = await response.json();

	apod = json.url;

	return apod;
	}

export
	{
	astronomyPictureOfTheDay
	};
