'use strict'

module.exports = function *() {
  let ctx = this;
  // token        =[TOKEN]
  // team_id      =T0001
  // team_domain  =example
  // channel_id   =C2147483705
  // channel_name =test
  // timestamp    =1355517523.000005
  // user_id      =U2147483697
  // user_name    =Steve
  // text         =googlebot: What is the air-speed velocity of an unladen swallow?
  // trigger_word =googlebot:
  ctx.respond('Grettings from Cyberyne Systems Corporation.');
}
