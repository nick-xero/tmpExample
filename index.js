const tmp = require('tmp');
const express = require('express')
const app = express()
const PORT = 3010;

tmp.setGracefulCleanup();

app.get('/', (_req, res) => {
  main((err,filename)=>{
    console.log("🚀 ~ file: index.js ~ line 7 ~ err", err)
    console.log("🚀 ~ file: index.js ~ line 7 ~ res", filename)
    res.send('hello world')
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});

function main(callback){
    tmp.file('test', (err, result, _fdm, cleanUp) => {
      // cleanUp()
        callback(err,result);
    })
}
// lsof | grep node | grep tmp | tail -5