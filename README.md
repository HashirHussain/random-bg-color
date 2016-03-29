# random-bg-color
Play with background colors on any HTML elements.
## Usage
1. Include `<script src="path/to/your/directory/random-bg-color.js">`
2. Put `<script>bgColors.apply();</script>`

## Options
By default if no element is given, colors would be applied to `<body>` tag.You can pass list of elements by their `classes` or `ids` or by thier name itself.
e.g.

1. Single element `bgColors.targetElements = '#myId';`
2. Multiple elements `bgColors.targetElements = ['#myId','#anotherId','#onemoreId'];`
3. Mix elements `bgColors.targetElements = ['#myId','.myClass','.anotherClass','span'];`

You can also pass list of colors to be choose from like :
`bgColors.colors = ['#1abc9c', '#d3d3d3','#ffeeee'];`

### Combining all along as 
`bgColors.targetElements = ['.t1','#g1','div'];
bgColors.colors = ['#1abc9c', '#d3d3d3'];
bgColors.apply();`

#### Stay tuned for more options





