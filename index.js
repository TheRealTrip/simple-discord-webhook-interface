let targets = ["foo", "bar"] // put discord ids here
let avatarurl = "linkhere" //Leave blank if you want no avatar for your webhook
let webhookurl = "WEBHOOK URL HERE" //webhook url here
let ratelimit = (5); // Message rate limit (Should be fine with default)

/////////////-------------------------/////////////////////////// unless you know what your doing don't touch the code below.

const {Webhook} = require('simple-discord-webhooks'); // init the webhook module
const prompt = require('prompt-sync')(); // Init the prompt module

const pingamount = prompt('How many times do you want to ping your selected people? '); // asks user for the amount of times they want to ping.
const username = prompt('What do you want to name the webhook? ')
const webhook = new Webhook(webhookurl, username, avatarurl); //defines webhook



let pingamount = parseInt(pingamount); // parse user input (str) as an int
if (pingamount > ratelimit) { // checking if user is trying to send more messages than possible.
    console.log("Thats too many pings. You will get rate-limited, please try below the limit of " + ratelimit + ".") // Let user know about their input being too high
}else{
    console.log(`I am sending ${pingamount}` + ` message(s).`);
    for (; pingamount !== 0; pingamount--) {
        for (t=0; t > targets.length; t++) {
            webhook.send("@" + targets[t])

        }

        
    }
}



    


