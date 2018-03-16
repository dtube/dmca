const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 3000
const jsonfile = require('jsonfile')
const file = 'dmca.json'
jsonfile.readFile(file, function(err, dmca) {
  app.get('/v/:author/:permlink', (req, res) => {
    if (dmca.authors.indexOf(req.params.author) > -1)
        res.json({dmca: 2})
    else if (dmca.videos.indexOf(req.params.author+'/'+req.params.permlink) > -1)
        res.json({dmca: 1})
    else
        res.json({dmca: 0})
  })
  app.listen(port, () => console.log('DMCA server is ready on port '+port))
})
