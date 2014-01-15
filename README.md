#hover.css

A collection of CSS3 powered hover effects to be applied to call to actions, buttons, logos, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS and SASS.

##Demo and Tutorial

[Demo](http://ianlunn.github.io/Hover) | [Tutorial](http://ianlunn.co.uk/articles/hover-css-tutorial-introduction/)

##Author

- [Ian Lunn](https://twitter.com/IanLunn)  
- [ianlunn.co.uk](http://ianlunn.co.uk/)

##How To Use
hover.css can be used in a number of ways; either copy and paste the effect you'd like to use in your own stylesheet or reference the stylesheet. Then just add the class name of the effect to the element you'd like it applied to.

###Copy and Paste an Effect
If you plan on only using one or several effects, it's better practice to copy and paste an effect into your own stylesheet, so a user doesn't have to download hover.css in its entirety.

Assuming you want to use the `Grow` effect:

1. Download hover.css
2. In hover.css, find the 'Grow' CSS (each effect is named using a comment above it):
	
```css
/* Grow */

.grow {
  display: inline-block;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.grow:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
```

3. Copy this effect and then paste it into your own stylesheet.
4. In the HTML file which you'd like the effect to appear, add the class of `.grow` to your chosen element.

Example element before applying hover.css effect:
	
```html
<a class="button">Add to Basket</a>
```

Example element after applying hover.css effect:

```html
<a class="button grow">Add to Basket</a>
```

###Reference hover.css
If you plan on using many of hover.css' effects on your website, you may like to reference the entire hover.css stylesheet.

1. Download hover-min.css
2. Add `hover-min.css` to your websites files, in a directory named `css` for example
3. Reference hover-min.css in `<head>` of the HTML page you'd like to add hover.css effects to:
	
```html
<head>
	<link href="css/hover-min.css" rel="stylesheet">
</head>
```

4. Assuming you want to use the 'Grow' effect, in the HTML file you'd like to use this effect, add the class of `.grow` to your chosen element.

Example element before applying hover.css effect:
	
```html
<a class="button">Add to Basket</a>
```

Example element after applying hover.css effect:
	
```html
<a class="button grow">Add to Basket</a>
```

##Browser Support
Many of hover.css' effects rely on CSS3 features such as transitions, animations, transforms and pseudo-elements, for that reason, effects may not fully work in older browsers.

- [Transitions](http://caniuse.com/#search=transitions) and [Animations](http://caniuse.com/#search=animations) - not supported below Internet Explorer 9
- [Transforms](http://caniuse.com/#search=transforms) - not supported below Internet Explorer 10
- [Generated Content (pseudo-elements)](http://caniuse.com/#search=pseudo-elements) - not supported below Internet Explorer 8

Aside from the above mentioned browsers, hover.css is supported across all major browsers. Please see [caniuse.com](http://caniuse.com/) for full support for many web technologies and test your webpages accordingly.

##License
hover.css is open source, and made available under a [MIT License](http://www.opensource.org/licenses/mit-license.php). Distribute, use as-is, or modify to your liking in personal and commercial projects. Please retain the original readme and license files.

Placing author information in your stylesheet, credits page or humans.txt is much appreciated.