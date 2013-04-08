#Widget Guide

the basic widget code like this:

```
 <div class="widget">
  <div class="widget-header"></div>
	<div class="widget-content"></div>
	<div class="widget-footer"></div>
 </div>
```

the header and footer are both optional, such as: 

```
 <div class="widget">
  <!--without header-->
	<div class="widget-content"></div>
	<div class="widget-footer"></div>
 </div>
```

```
 <div class="widget">
  <div class="widget-header"></div>
	<div class="widget-content"></div>
	<!--without footer-->
 </div>
```

```
 <div class="widget">
	<div class="widget-content"></div>
	<div class="widget-footer"></div>
	<!--footer only-->
 </div>
```

the widget header colors:

* pink-bg-linear
* green-bg-linear
* grey-bg-linear
* white-bg-linear
* orange-bg-linear
* blue-bg-linear
* brown-bg-linear

```
 <div class="widget">
   <div class="widget-header pink-bg-linear"></div>
   <div class="widget-content"></div>
 </div>   
```