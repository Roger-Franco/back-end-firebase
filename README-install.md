Firebase login
Firebase init
npm run build => na pasta function 
firebase serve => na pasta function 
npm install express --save
npm install firebase-admin --save => dentro da pasta functions, depois faz as configurações descritas nesse link: https://firebase.google.com/docs/firestore/quickstart#node.js (console > engrenagem > config. do projeto > contas de serviço > gerar nova chave > depois colocar o código descrito em index.ts > colocar dentro da pasta config a chave baixada OBS: Eu alterei essa parte, pelo fato do meu código não estar lendo arquivo json, eu coloquei o código numa variável dentro do index.)

npm run serve

Para usarmos o emulador: (youtube.com/watch?v=bXlgsY5Es48&list=PLWOeg0VagJCQTPCtLXrMm2RM4OtpUOy_S&index=16&ab_channel=GuilhermedeSouzaSilveira) No vídeo tem a explicação:
The Firestore Emulator is currently not running.
If you are not using Firestore in your testing, everything is fine. If you want to use Firestore in your testing, then the best way to set it up and start it is to run the following command to initialize the Firestore Emulator: firebase init emulators. Followed by: firebase emulators:start.
firebase init emulators
firebase emulators:start => tive alguns problemas com versões do JAVA, mas resolvi depois;

Documentar o código: https://jsdoc.app/