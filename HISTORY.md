## 2.0.0 - Dec 28, 2014

- Prefixed all effect names with `hvr-` (can be changed in `scss/_options.scss`)
- Moved default button styles out of library
- Moved all effects into sub folders with the name of the category they belong to
- Renamed `hover` and `hover shadow` effects to `bob` and `bob shadow`
- Removed `hover shadow` effect due to browser inconsistencies courtesy of [this Webkit/Blink bug](https://github.com/IanLunn/Hover/issues/24) which can't be worked around
- Updated `bob` (formerly `hover`) and `hang` effects to work around [this WebKit/Blink bug](https://github.com/IanLunn/Hover/issues/24)
- Change default `animation-timing-function` and `transition-timing-function` values for various effects
- Changed all instances of 'colour' to 'color'
