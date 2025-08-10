---
title: "Making a web extension"
date: 2025-07-14
categories : ['web-dev', 'js']    
layout: post
excerpt : 'creating simple tools to ease my life led to this'
---

So you started with HTML and CSS and kaboom, magic happens! You see changing some lines of code makes something happen. Unlike the previous case of sorting, solving math problems, you can actually see your code make something happen. This was the feeling I got when I coded my first website. It has been a long time since and this time I am dabbling with some extensions.

![A picture of extension](/assets/making_a_web_extension/house_extension.jpg)

_Wrong image. My bad. AI sometimes get confused while writing a blog._

## Extensions? What are they?

So, what are extensions? Why work with making extensions? What do you need to know to start making them?

Extensions, as their name suggest are some extended features that you can access in a website. Everyone who has been using a laptop must be using one. Heard of Dark Reader? Video Speed Controller? Show Password? These are some of the extensions that I use on a daily basis and for me they complete a browser experience. If you ever feel that your experience is uncomfortable in some manner while browsing, you need an extension!!

In order to start making an extension you need to be working knowledge of HTML, CSS and JS. Even if you are planning to use code copilots, the following sections would be helpful in understanding what the files represent. How to host an extension and how to get your extension easily reviewed.

## Parts of an extension

![Files Required](/assets/making_a_web_extension/file.png)

These are the only files you need for an extension. 

### icons 

You need ```.png``` format of ```16x16```, ```32x32```, ```48x148``` and ```128x128``` icons. You don't need to worry about what to do with those for now. 

### popup

This contains the code for the small window that pops up when you click on the extension icon on the extension list. It may look something like this.

![popup image](/assets/making_a_web_extension/popup.png)

### content 

Each website when loaded has its own set of content. HTML, CSS, JS codes. If you want to interact with the website, you need to have some code in content.

### background 

Now, look at the popup image. What happens when I click on Enable Reading Mode? Obviously it does something. What it does is it injects the content file into the website to do its job. But who tells content that the button has been pressed? This is where background comes in. It keeps running looking for changes and information through popup and content and relays them to each other. 


### manifest.json

Of course, you have come across many json files. Manifest.json seems like one of those json files containing build information and dependencies. But NO!! Manifest.json is the star of the show for extensions. It does contain some of those information but much more than that. This json in responsible for telling the chrome extension store which files are the popup, content and background. It also contains what different permissions are required for your extension to work. 


For example cases, you can visit the [Chrome Docs]("https://developer.chrome.com/docs/extensions/get-started").

Remember when submiting an extension, to keep the ```permissions``` required to a minimum for a fast approval.

If you know how to code, this information accompanied with some google APIs would enable to code any extension.

I have created two extensions if you want to check it out:
- [Copy Pasta]("https://github.com/thelastone07/copy-pasta")
- [ChatGPT Navigator]("https://github.com/thelastone07/chatgpt-navigator")

Consider checking the webstore for them as well. 
 
## References

- [Extension Picture]("https://ca.pinterest.com/pin/910712355904101879/")



If you find the blog helpful, please let me know. It is highly appreciated. Drop me a text on X or a mail. Any criticism is also most welcome. 




