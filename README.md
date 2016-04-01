# random-bg-color
Play with background colors on any HTML elements.
## Usage
- Include 
```javascript 
<script src="path/to/your/directory/random-bg-color.js">
OR
<script src="path/to/your/directory/random-bg-color.min.js">
```
- Put 
```javascript 
<script>bgColors.apply();</script>
```

## Options
By default if no element is given, colors would be applied to `<body>` tag.You can pass list of elements by their `classes` or `ids` or by thier name itself.
e.g.

- Single element 
```javascript 
bgColors.targetElements = '#myId'; or bgColors.targetElements = ['#myId'];
```
- Multiple elements 
```javascript 
bgColors.targetElements = ['#myId','#anotherId','#onemoreId'];
``` 
- Mix elements 
```javascript
bgColors.targetElements = ['#myId','.myClass','.anotherClass','span'];
```


You can also pass selected list of colors
e.g.

- Multiple colors 
```javascript 
bgColors.colors = ['#1abc9c', '#d3d3d3','#ffeeee'];
```
- Only one color 
```javascript 
bgColors.colors = '#1abc9c' or bgColors.colors = ['#1abc9c'];
```

##### More options
- If you want to change colors without page reload set `bgColors.autoChange` value `true`.
e.g. 
```javascript 
bgColors.autoChange=true
```
- You can set interval (in miliseconds) if you has set `autoChange true`.
e.g. 
```javascript
bgColors.autoChangeDelay = 2000;// Only works if autoChange is true. 
``` 

### Combining all along 
```javascript
<script type="text/javascript">
bgColors.targetElements = ['.t1','#g1','div'];
bgColors.colors = ['#1abc9c', '#d3d3d3'];
bgColors.apply();</script>
```

##### See Live Demo on [fiddle](https://jsfiddle.net/hashir/8nLzd0xo/){:target="_blank"}

##### Stay tuned for more options ;)





