function testWrite(res) {
    res.write('nerp');
    res.end();
}

exports.testWrite = testWrite;