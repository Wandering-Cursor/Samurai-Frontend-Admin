#!bin/fish

npx swagger-typescript-api -p http://localhost:8000/openapi.json --axios -o ./src/codegen --debug
w