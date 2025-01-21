# ng build --define

examples

- without an environment configuration `npm run build -- --define="ENVIRONMENT_NAME='this is a demo environment!!'"`

- for staging `npm run build -- --configuration staging --define="ENVIRONMENT_NAME='staging'"` or

- for production `npm run build -- --configuration production --define="ENVIRONMENT_NAME='production'"`

## Windows 11 PowerShell

````PowerShell
Set-Item env:ENVIRONMENT_NAME 'this is a test (10/1/2025)'

echo $env:ENVIRONMENT_NAME

npm run build -- --define="ENVIRONMENT_NAME='$env:ENVIRONMENT_NAME'"

npm run local

```
