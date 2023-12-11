import { TimestampParserPipe } from './TimestampParser.pipe';

describe('TimestampParserPipe', () => {
  it('create an instance', () => {
    const pipe = new TimestampParserPipe();
    expect(pipe).toBeTruthy();
  });
});
