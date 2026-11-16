# LESS transition-property regression

Install LESS (for example, `npm install --no-save --package-lock=false less@2.7.3`)
and run `node tests/less-transition-properties.js` from the repository root.

The test compiles the real LESS entry point, rejects quoted transition-property
values, and checks both standard and WebKit declarations for all 11 affected
effects. No generated distribution files are overwritten.
