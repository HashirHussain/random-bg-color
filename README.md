# random-bg-color
Play with background colors on any HTML elements.
## Usage
1. Include 
```javascript 
<script src="path/to/your/directory/random-bg-color.js">
```
2. Put 
```javascript 
<script>bgColors.apply();</script>
```

## Options
By default if no element is given, colors would be applied to `<body>` tag.You can pass list of elements by their `classes` or `ids` or by thier name itself.
e.g.

1. Single element 
```javascript 
bgColors.targetElements = '#myId'; or bgColors.targetElements = ['#myId'];
```
2. Multiple elements 
```javascript 
bgColors.targetElements = ['#myId','#anotherId','#onemoreId'];
``` 
3. Mix elements 
```javascript
bgColors.targetElements = ['#myId','.myClass','.anotherClass','span'];
```


You can also pass list of colors to be choose from
e.g.

1. Multiple colors 
```javascript 
bgColors.colors = ['#1abc9c', '#d3d3d3','#ffeeee'];
```
2. Only one color 
```javascript 
bgColors.colors = '#1abc9c' or bgColors.colors = ['#1abc9c'];
```

##### More options
1. If you want change colors without page reload set `bgColors.autoChange` value `true`.
e.g. 
```javascript 
bgColors.autoChange=true
```
2. You can set interval (in miliseconds) if you has set `autoChange true`.
e.g. 
```javascript
bgColors.autoChangeDelay = 2000;// Only works if autoChange is true`. 
``` 

### Combining all along 
```javascript
<script type="text/javascript">bgColors.targetElements = ['.t1','#g1','div'];
bgColors.colors = ['#1abc9c', '#d3d3d3'];
bgColors.apply();</script>
```

##### Stay tuned for more options ;)





