import { TestBed, async } from '@angular/core/testing';

import { FieldToLabelPipe } from './fieldToLabel.pipe';

describe('FieldToLabelPipe', () => {
    it('should convert to uppercase if input is id', async(() => {
        let pipe = new FieldToLabelPipe();
        let result = pipe.transform("id");
        let expected = "ID";
        expect(result).toBe(expected);
    }));

    it('should capitalize the text if input is not id', async(() => {
        let pipe = new FieldToLabelPipe();
        let result = pipe.transform("TITLE");
        let expected = "Title";
        expect(result).toBe(expected);
    }));
});
