sudo pm2 stop server
sudo pm2 delete server
rm -rf dist/
npm run build
sudo pm2 start server.js
