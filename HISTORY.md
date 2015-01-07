## 2.0.0 - Jan 7, 2014

- Added lots of new effects
- Added LESS support
- Prefixed all effect names with `hvr-` (can be changed in `scss/_options.scss`)
- Updated some effects for better performance and/or browser support
- Moved default button styles out of library
- Moved all effects into sub folders with the name of the category they belong to
- Renamed `hover` and `hover shadow` effects to `bob` and `bob shadow`
- Removed `hover shadow` effect due to browser inconsistencies courtesy of [this Webkit/Blink bug](https://github.com/IanLunn/Hover/issues/24) which can't be worked around
- Updated `bob` (formerly `hover`) and `hang` effects to work around [this WebKit/Blink bug](https://github.com/IanLunn/Hover/issues/24)
- Change default `animation-timing-function` and `transition-timing-function` values for various effects
- Changed all instances of 'colour' to 'color'
- Added small amount of JS to demo page to prevent `<a href="#"></a>` elements from navigating (not required for hover.css to work)
- Added "What's Included?" section to README.md
