del /q dist
mkdir dist\cjs
mkdir dist\mjs
echo {"type":"commonjs"} > dist/cjs/package.json
echo {"type":"module"} > dist/mjs/package.json