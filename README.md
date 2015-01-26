# exchange-checkuser
A way to check if an user exists in Microsoft Exchange


## Example:
```javascript
var exchangeCheckuser = require('exchange-checkuser');
exchangeCheckuser('company-login-page.com', 'your_user', 'your_password', function(err, exists, statusCode) {
	console.log(exists);
});
```