# exchange-checkuser
A way to check if an user exists in Microsoft Exchange


## Example:
```javascript
var exchangeCheckuser = require('exchange-checkuser');
exchangeCheckuser('company-login-page.com', 'your_user', 'your_password', function(err, exists, statusCode) {
	console.log(exists);
});
```

## Insecure example:
```javascript
var exchangeCheckuser = require('exchange-checkuser');
exchangeCheckuser('company-login-page.com', 'your_user', 'your_password', true, function(err, exists, statusCode) {
	console.log(exists);
});
```

## Custom endpoint example (in case default is Moved Permanently):
```javascript
var exchangeCheckuser = require('exchange-checkuser');
exchangeCheckuser('company-login-page.com', 'your_user', 'your_password', 'Services.wsdl', function(err, exists, statusCode) {
	console.log(exists);
});
```

## Insecure example with custom endpoint example (in case default is Moved Permanently):
```javascript
var exchangeCheckuser = require('exchange-checkuser');
exchangeCheckuser('company-login-page.com', 'your_user', 'your_password', true, 'Services.wsdl', function(err, exists, statusCode) {
	console.log(exists);
});
```
