from node:alpine
workdir /app
copy . /app
expose 5173 
run npm install
cmd ["npm","run","dev","--","--host"]