d-update-url-from-path
======================

[Derby JS](http://derbyjs.com) component to update the page's url with a path value when it changes.

Installation
------------

    npm install d-update-url-from-path --save

Example
-------

Update the path */users/:username* when the user's name changes:

    <d-update-url-from-path segment="2" value="{{#root._page.user.name}}" />
