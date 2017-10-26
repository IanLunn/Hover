# Hover.css

[![Join the chat at https://gitter.im/IanLunn/Hover](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/IanLunn/Hover?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, Stylus and LESS.

[Demo](http://ianlunn.github.io/Hover)  |
[Tutorial](http://ianlunn.co.uk/articles/hover-css-tutorial-introduction/)

## Download/Install

- NPM: `npm install hover.css --save`
- Bower: `bower install hover --save`
- [Download Zip](https://github.com/IanLunn/Hover/archive/master.zip)

## How To Use
Hover.css can be used in a number of ways; either copy and paste the effect you'd like to use in your own stylesheet or reference the stylesheet. Then just add the class name of the effect to the element you'd like it applied to.

### A. Copy and Paste an Effect
If you plan on only using one or several effects, it's better practice to copy and paste an effect into your own stylesheet, so a user doesn't have to download `css/hover.css` in its entirety.

Assuming you want to use the Grow effect:

1. Download Hover.css
2. In `css/hover.css`, find the Grow CSS (each effect is named using a comment above it):

    ```css
    /* Grow */
    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.3s;
        transition-property: transform;
    }

    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        transform: scale(1.1);
    }
    ```
3. Copy this effect and then paste it into your own stylesheet.
4. In the HTML file which you'd like the effect to appear, add the class of `.hvr-grow` to your chosen element.

Example element before applying Hover.css effect:

```html
<a href="#">Add to Basket</a>
```

Example element after applying Hover.css effect:

```html
<a href="#" class="hvr-grow">Add to Basket</a>
```

**Note**: As of `2.0.0` all Hover.css class names are prefixed with `hvr-` to prevent conflicts with other libraries/stylesheets. If using Sass/Stylus/LESS, this can easily be changed using the `$nameSpace`/`@nameSpace` variable in `scss/_options.scss`, `styl/options.styl` or `less/_options.less`.

### B. Reference Hover.css

If you plan on using many Hover.css effects, you may like to reference the entire Hover.css stylesheet.

1. Download `hover-min.css`
2. Add `hover-min.css` to your websites files, in a directory named `css` for example
3. Reference `hover-min.css` in `<head>` of the HTML page you'd like to add Hover.css effects to:
```html
<head>
	<link href="css/hover-min.css" rel="stylesheet">
</head>
```
Alternatively you can add a reference into an existing stylesheet like so (this may be useful to WordPress users who are unable to edit HTML):
```css
@import url("hover-min.css");
```
4. Assuming you want to use the Grow effect, in the HTML file you'd like to use this effect, add the class of `.hvr-grow` to your chosen element.

Example element before applying Hover.css effect:

```html
<a href="#" class="button">Add to Basket</a>
```

Example element after applying Hover.css effect:

```html
<a href="#" class="button hvr-grow">Add to Basket</a>
```

### A Note on the `display` Property

To make an element "transformable", Hover.css  gives the following to all elements it is applied to:

```css
display: inline-block;
vertical-align: middle;
```

Should you wish to override this behavior, either remove the above CSS from Hover.css or change the `display` property for the element. Be sure to declare the override after the Hover.css declarations so the CSS cascade will take effect. Alternatively, if you are using the Sass/Stylus/LESS version of Hover.css, you can remove/comment out the `forceBlockLevel()` mixin found in `scss/_hacks.scss`, `styl/hacks.styl` or `less/_hacks.less`.

For more information about Transformable elements, see the [CSS Transforms Module](http://www.w3.org/TR/css3-transforms/#transformable-element).

### Using FontAwesome with Icon Effects

Hover.css uses [FontAwesome](https://fortawesome.github.io/Font-Awesome/) for its icon effects. For these effects to work, a reference to the FontAwesome stylesheet must be added by placing the following in the `<head></head>` of your web page:

```html
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="all">
```

Hover.css icons are added to elements via the `:before` pseudo-element. Let's take the Icon Forward effect as an example (browser prefixes and additional styles removed for brevity):

```css
.hvr-icon-forward:before {
    content: "\f138";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    transform: translateZ(0);
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
}
```

What's important in the above example are the `font-family` and `content` declarations. `font-family: FontAwesome` tells the browser we want to use a FontAwesome icon in this pseudo-element, and the `content` value says which one. Should you wish to change the icon, change the value of the `content` property. A [full list of the values and the icon they represent can be found here](http://astronautweb.co/snippet/font-awesome/#font-awesome-list).

If you'd rather not tamper with Hover.css itself, you can override the default content value simply by declaring the same declaration again (providing it be declared after the default one either in Hover.css or another stylesheet):

```css
.hvr-icon-forward:before {
    content: "\f001";
}
```

The Icon Forward effect will then display a musical note that moves forward when hovered over (instead of the default arrow in a circle).

## What's Included?

The project consists of the following folders and files:

### css

- **demo-page.css** - Contains styles to demonstrate Hover. Not required in your projects
- **hover-min.css** - The minified/production version of Hover.css
- **hover.css** - The development version of Hover.css

### scss/styl/less

- **effects** - Contains each individual effect sorted into categorized folders
- **_hacks.scss/hacks.styl/_hacks.less, _mixins.scss/mixins.styl/_mixins.less, _options.scss/options.styl/_options.less** - Sass/Stylus/LESS Utilities
- **hover.scss/hover.styl/hover.less** - Development version of Hover.css in Sass and LESS flavours

### Other

Other files of note include:

- **index.html** - Demonstrates all Hover.css effects
- **Gruntfile.js** - Used for [development of Hover.css via Grunt](#using-grunt-for-development).

## Browser Support
Many Hover.css effects rely on CSS3 features such as transitions, animations, transforms and pseudo-elements, for that reason, effects may not fully work in older browsers.

- [Transitions](http://caniuse.com/#search=transitions) and [Animations](http://caniuse.com/#search=animations) - not supported below Internet Explorer 9
- [Transforms](http://caniuse.com/#search=transforms) - not supported below Internet Explorer 10
- [Generated Content (pseudo-elements)](http://caniuse.com/#search=pseudo-elements) - not supported below Internet Explorer 8

Aside from the above mentioned browsers, Hover.css is supported across all major browsers. Please see [caniuse.com](http://caniuse.com/) for full support for many web technologies and test your webpages accordingly. It is recommended to apply fallback effects for older browsers, using CSS supported by those browsers or a feature testing library such as [Modernizr](http://modernizr.com/).

## Using Grunt for Development

Grunt is non-essential but can speed up development. With [Grunt installed](http://gruntjs.com/getting-started), run `grunt` from the command line to set up a development server accessed at [http://127.0.0.1:8000/](http://127.0.0.1:8000/) or your local IP for network testing. With Grunt running, Sass or LESS will be preprocessed (depending on whether you work out of the `scss`, `styl` or `less` folder) and CSS files will be minified.

**Note:** Originally Grunt was set up to autoprefix CSS properties but to make the project as accessible as possible, this is no longer the case. The `prefixed(property, value)` Sass/Stylus/LESS mixin should be used for browser prefixing instead. See [Using Sass/Stylus/LESS for Development](#using-sassstylusless-for-development) and [Using LESS for Development].

## Using Sass/Stylus/LESS for Development

Sass/Stylus/LESS are non-essential but can speed up development. Preprocess Sass/Stylus/LESS with your favourite software or the environment provided via [Grunt](#using-grunt-for-development).

Sass/Stylus/LESS is used in the Hover.css project to separate various CSS into specific files. Each effect is within its own file in the `effects` directory. Hover.css also uses the following `.scss`, `.styl` and `.less` files:

### _hacks
Contains hacks (undesirable but usually necessary lines of code) applied to certain effects. [Hacks explained here](https://github.com/IanLunn/Hover/wiki/Hacks-Explained).

### _mixins
Contains `prefixed` and `keyframes` mixins that apply the necessary prefixes you specify in `_options.scss`, `options.styl` or `_options.less` to properties and keyframes.

Properties can be prefixed like so:

- Sass:
```css
@include prefixed(transition-duration, .3s);
```
- Stylus:
```css
$prefixed(transition-duration, .3s);
```
- LESS:
```css
.prefixed(transition-duration, .3s);
```

The `prefixed` mixin is passed the property you want to prefix, followed by its value.

Keyframes can be prefixed like so:

- Sass:
```css
@include keyframes(my-animation) {
    to {
        color: red;
    }
}
```
The `keyframes` mixin is passed the keyframe name, followed by the content using the @content directive.


- Stylus:
```css
+$keyframes(my-animation) {
    to {
        color: red;
    }
}
```
The `keyframes` block mixin is passed the keyframe name, followed by the content using the passed {block}.


- LESS:
```css
.keyframes(my-animation, {
    to {
        color: red;
    }
});
```
The `keyframes` mixin is passed the keyframe name, followed by the content, both as arguments.


### _options
Contains default options, various effect options and the browser prefixes you'd like to use with the `prefixed` mixin. By default, only the `-webkit-` prefix is set to `true` (due to most browsers not requiring prefixes now).

As of `2.0.0`, `_options` also includes a `$nameSpace` / `@nameSpace` option which allows you to change the name all classes are prefixed with. The default namespace is `hvr`.

The `$includeClasses` / `@includeClasses` option by default is set to `true` and will generate all Hover.css effects under their own class names, `hvr-grow` for example. Should you wish to add the properties that make up Hover.css effects to your own class names, set this option to `false`.

## Contribute to Hover.css

If you'd like to contribute your own effects, please see the [Contributing Guide](https://github.com/IanLunn/Hover/blob/master/CONTRIBUTING.md).

## Licenses

Hover.css is made available under a free personal/open source or paid commercial licenses depending on your requirements. To compare licenses please visit the [Ian Lunn Design Limited Store](https://ianlunn.co.uk/store/licenses/) and [purchase a commercial license here](https://ianlunn.co.uk/store/hover-css/).

### Personal/Open Source

For personal/open source use, Hover.css is made available under a [MIT license](https://opensource.org/licenses/MIT)

- Use in unlimited personal applications
- Your application can't be sold
- Your modifications remain open-source
- Free updates

[Read full license](https://ianlunn.co.uk/store/licenses/personal/)

### Commercial

For commercial use, Hover.css is made available under Commercial, Extended Commercial, and OEM Commercial licenses.

#### Commercial License

- Use in 1 application
- Sell your application once only (e.g. a website sold to a client)
- Your code is kept proprietary, to yourself
- Free updates to the major version

[Purchase](https://ianlunn.co.uk/store/hover-css/?attribute_pa_licenses=commercial) | [Read full license](https://ianlunn.co.uk/store/licenses/commercial/)

#### Extended Commercial License

- Use in unlimited applications
- Sell your applications an unlimited number of times (e.g. a website template sold on a theme store)*
- Your code is kept proprietary, to yourself
- Free updates to the major version

*With the exception of applications that allow end users to produce separate applications. See the OEM Commercial License.

[Purchase](https://ianlunn.co.uk/store/hover-css/?attribute_pa_licenses=extended-commercial) | [Read full license](https://ianlunn.co.uk/store/licenses/extended-commercial/)

#### OEM Commercial License

Should your application enable end users to produce separate applications that incorporate Ian Lunn Design Limited's software, for example, a development toolkit, library, or application builder, you must obtain an OEM Commercial License. Please [contact us](https://ianlunn.co.uk/contact/) for more information about the OEM Commercial License.

### MIT License (Pre v2.2.0 / 24th March 2017)

Hover.css was previously made available under a MIT License for both commercial and non-commercial use. Anyone that obtained a MIT license for commercial use before v2.2.0 (24th March 2017) may continue to use Hover.css versions prior to v2.2.0 under that same license.

If you'd like to upgrade to v2.2.0 or above, or would like to simply show your support for Hover.css (we'd much appreciate it!), please purchase an up-to-date commercial license. [Purchase a Commercial License](https://ianlunn.co.uk/store/hover-css/).

## Hire Ian Lunn

[Ian Lunn](http://ianlunn.co.uk) is a Freelance Front-end Developer and author of [CSS3 Foundations](http://css3foundations.com/).

Hire [Ian](http://ianlunn.co.uk) for responsive websites, WordPress websites, JavaScript, animation, and optimization.
