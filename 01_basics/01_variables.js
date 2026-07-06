const accountId = 123
let accountEmail = "abc@bc.com"
var accountPassword = "password123"

// accountId = 2 // not allowed because accountId is a constant

accountEmail = "hc@hc.com"
accountPassword = "456"

/* prefer not to use var because it is function scoped 
and blocked scope. Use let or const instead. */

console.table([accountId, accountEmail, accountPassword]);
 