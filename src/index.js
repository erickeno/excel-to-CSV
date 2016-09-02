import XLSX from 'xlsx'
import fs from 'fs'
import json2csv from 'json2csv'

export const excelToCSV = (inputFile) => {
	if (!inputFile) {
		throw new Error('inputFile is required')
	}
	const outputFile = inputFile.replace(/xlsx$/ig, 'csv')

	const workbook = XLSX.readFile(inputFile);
	const jsonFile = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

	json2csv({
			data: jsonFile,
			quotes: '',
			del: '\t',
		},
		(err, csv) => {
			if (err) throw err
			fs.writeFile(outputFile, csv, err => {
				if (err) throw err
				console.log('file saved');
			})
		}
	)
}
