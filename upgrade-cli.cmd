rm -rf node_modules dist tmp
cmd /C npm i @angular/cli@latest -D
cmd /C npm install

rem ng init --source-dir=src --style=scss --prefix=fint
