const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: 'ivaylo@favourmake.com',
  password: '!ot1do6',
  host: 'avourmake.com',
  port: 21,
  // eslint-disable-next-line no-path-concat
  localRoot: __dirname + '/dist',
  remoteRoot: '',
  include: ['*'],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
}

ftpDeploy
  .deploy(config)
  // eslint-disable-next-line no-console
  .then(res => console.log('finished:', res))
  // eslint-disable-next-line no-console
  .catch(err => console.log(err))
