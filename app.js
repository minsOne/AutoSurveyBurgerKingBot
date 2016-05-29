var http = require('http');
var token = // Secret 
var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });
var exec = require('child_process');

bot.onText(/^\/c (.+)$/, function (msg, match) {
  var surveyCode = match[1]
  console.log(surveyCode)
  if (surveyCode.length != 16) {
    var message = "입력하신 버거킹 코드의 길이가 다릅니다. 확인해주세요.\n코드 : " + surveyCode + "\n현재 : " + surveyCode.length + "자리, 가능 길이 : 16자리"
    bot.sendMessage(msg.chat.id, message)
  } 
  else {
	bot.sendMessage(msg.chat.id, "진행 중...")
	var p = exec.spawn('casperjs', ['index.js', surveyCode]);
	p.stdout.on('data', function(data) {
		console.log(data.toString())
		if (data.toString().split(":").length == 2) {
			bot.sendMessage(msg.chat.id, data.toString())
		}
	});
    p.on('exit', BotBridge.bind(this));
    function BotBridge() {
        bot.sendMessage(msg.chat.id, "끝")
    }
  }
});
