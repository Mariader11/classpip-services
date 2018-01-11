'use strict';

module.exports = function (app, cb) {

  app.models.Competition.create([{
    type:'Liga',
    mode:'Individual',
    name:'Los mejores',
    numParticipants: 13,
    numJourneys: 12,
    information: 'Esto es un ejemplo'
  }, {
    type:'Tenis',
    mode:'Equipos',
    name:'Los jeje',
    numParticipants: 13,
    numJourneys: 12,
    information: 'Esto es otro ejemplo'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
