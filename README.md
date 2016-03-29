# random-bg-color
Play with background colors on any HTML elements.
## Usage
1. Include `<script src="path/to/your/directory/random-bg-color.js">`
2. Put `<script>bgColors.apply();</script>`

## Options
By default if no element is given, colors would be applied to `<body>` tag.You can pass list of elements by their `classes` or `ids` or by thier name itself.
e.g.

1. Single element `bgColors.targetElements = '#myId'; or bgColors.targetElements = ['#myId'];`
2. Multiple elements `bgColors.targetElements = ['#myId','#anotherId','#onemoreId'];`
3. Mix elements `bgColors.targetElements = ['#myId','.myClass','.anotherClass','span'];`

You can also pass list of colors to be choose from
e.g.

1. Multiple colors `bgColors.colors = ['#1abc9c', '#d3d3d3','#ffeeee'];`
2. Only one color `bgColors.colors = '#1abc9c' or bgColors.colors = ['#1abc9c']`;

##### More options
1. If you want change colors without page reload set `bgColors.autoChange` value `true`.
e.g. `bgColors.autoChange=true`
2. You can set interval (in miliseconds) if you has set `autoChange true`.
e.g. `bgColors.autoChangeDelay = 2000;// Only works if autoChange is true`. 

### Combining all along 
`<script type="text/javascript"><br/>bgColors.targetElements = ['.t1','#g1','div'];<br/>
bgColors.colors = ['#1abc9c', '#d3d3d3'];<br/>bgColors.autoChange = true;<br/>
bgColors.autoChangeDelay = 2000;<br/>
bgColors.apply();<br/></script>`

##### Stay tuned for more options ;)





