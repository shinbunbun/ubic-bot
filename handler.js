const line = require('@line/bot-sdk');
const axios = require('axios');
const client = new line.Client({ channelAccessToken: process.env.ACCESSTOKEN });
module.exports.bot = (event, context) => {
  const events = JSON.parse(event.body).events;
  events.forEach(async function (event) {
    console.log(JSON.stringify(event));
    if (event.type === 'beacon') await axios.post(process.env.SLACKURL, { text: 'ぶんぶんがUBICに帰宅しました' })
    context.succeed({ statusCode: 200, headers: { 'X-Line-Status': 'OK' }, body: '{"result":"completed"}' })
  });
};
