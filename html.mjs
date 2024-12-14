
/**
 * @param {Array<Array<*>>} array
 */
function arrayToTable(array, td = cell => "")
	{
	let rows = array.map(row =>
		{
		let cells = row.map(cell => `<td${td(cell)}>${cell}</td>`).join("");

		return `<tr>${cells}</tr>`;
		});

	return `<table>${rows.join("\n")}</table>`;
	}

export
	{
	arrayToTable
	};
