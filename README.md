
### IMAGE SEARCH ABSTRUCTION LAYER IN IMGUR API
A simple project for a free-code-camp challenge.
The app was created with the help of this guide 'http://lefkowitz.me/thoughts/2016/11/01/image-search-microservice-api/'
and was highly influenced by it.

To use this app, you must specify a new url address at the url inbox at the top of this page. 

If you wish to view some images content, add the '/search/' to the end of the current page address 
and the term of the images you want to withdraw from the API right afterwords.
You can also specify the page you want to view by adding offset and set it to the page number you want to view.
For example, the adress https://imagesrc.glitch.me/search/puppies?offset=3 will return results of puppies images 
that are displayed in page number 3 in the Imgur API. 

To view the latest 10 searches in this app, simply add /latest to the url adress above. 
The complete url adress will then look like https://imagesrc.glitch.me/latest.
