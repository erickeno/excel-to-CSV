import { expect } from 'chai';
import { excelToCSV } from '../src'

describe('excelToCSV', () => {
  it('throw error if inputFile is missing', () => {
    expect(()=> excelToCSV()).to.throw('inputFile is required')
  });
  it('should not throw error if inputFile is passed', () => {
    const inputfile = 'path/to/excel/file.xlsx';
    expect(()=> excelToCSV(inputfile)).to.not.throw('inputFile is required');
  })
});
