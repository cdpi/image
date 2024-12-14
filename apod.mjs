
/**
 * @param {String} url
 * @param {String} fileName
 * @param {String} mimeType
 * @returns 
 */
async function download(url, fileName, mimeType)
	{
	let response = await fetch(url);

	let blob = await response.arrayBuffer();

	return new File([blob], fileName, {type: mimeType});
	}

export
	{
	download
	};


/*

astronomyPictureOfTheDay().then(async url =>

https://stackoverflow.com/a/38935544

	//load src and convert to a File instance object
//work for any type of src, not only image src.
//return a promise that resolves with a File instance
function srcToFile(src, fileName, mimeType){
    return (fetch(src)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], fileName, {type:mimeType});})
    );
}

//usage example: (works in Chrome and Firefox)
//convert src to File and upload to server php
srcToFile('/images/logo.png', 'new.png', 'image/png')
.then(function(file){
    var fd = new FormData();
    fd.append('file1', file);
    return fetch('/upload.php', {method:'POST', body:fd});
})
.then(function(res){
    return res.text();
})
.then(console.log)
.catch(console.error)
;
*/
