describe("numToWords", function() {

  it("converts numbers 1 to 19 correctly to words", function() {
    expect(numToWords(19)).to.equal("nineteen");
  });

  it("converts numbers 1 to 99 correctly to words", function() {
    expect(numToWords(95)).to.equal("ninety-five");
  });

  it("converts numbers 1 to 999 correctly to words", function() {
    expect(numToWords(951)).to.equal("nine hundred fifty-one");
  });

  it("converts numbers 1 to 999,999 correctly to words", function() {
    expect(numToWords(931876)).to.equal("nine hundred thirty-one thousand eight hundred seventy-six");
  });

  it("works when second digit is 1", function() {
    expect(numToWords(911)).to.equal("nine hundred eleven");
  });

  it("converts numbers 1 to 999,999,999 correctly to words", function() {
    expect(numToWords(111931876)).to.equal("one hundred eleven million nine hundred thirty-one thousand eight hundred seventy-six");
  });

  it("converts numbers 1 to 999,999,999,999 correctly to words", function() {
    expect(numToWords(1111931876)).to.equal("one billion one hundred eleven million nine hundred thirty-one thousand eight hundred seventy-six");
  });





});
