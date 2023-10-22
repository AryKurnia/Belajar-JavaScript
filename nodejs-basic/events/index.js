const { EventEmitter } = require('events') // TODO 1
 
const birthdayEventListener = (name,salam) => {
    console.log(`Happy birthday ${name}!, dapat salam dari ${salam}`);
  }
const miladDayEventListener = (fromName) => {
    console.log(`Kami dari ${fromName} mengucapkan selamat hari Milad Nabi Muhammad`);
  }
   
const myEmitter = new EventEmitter();  // TODO 2
   
myEmitter.on('birthday',birthdayEventListener);  // TODO 3
myEmitter.on('miladday',miladDayEventListener);  // TODO 3
   
myEmitter.emit('birthday','Ary Kurnia','Abdul');  // TODO 
myEmitter.emit('miladday','MAPALA UHM');  // TODO 