'use strict';

module.exports = function (app, cb) {

  app.models.Student.create([{
    id: 10000,
    username: 'student-1',
    password: 'student-1',
    name: 'Lorena',
    surname: 'Diez',
    email: 'student-1@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6
  }, {
    id: 10001,
    username: 'student-2',
    password: 'student-2',
    name: 'Rosario',
    surname: 'Arellano',
    email: 'student-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6
  }, {
    id: 10002,
    username: 'student-3',
    password: 'student-3',
    name: 'Gillermo',
    surname: 'Macho',
    email: 'student-3@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 7
  }, {
    id: 10004,
    username: 'student-4',
    password: 'student-4',
    name: 'Mariano',
    surname: 'Morales',
    email: 'student-4@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 7
  }, {
    id: 10005,
    username: 'student-5',
    password: 'student-5',
    name: 'Julia',
    surname: 'Rojo',
    email: 'student-5@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 6
  }, {
    id: 10006,
    username: 'student-6',
    password: 'student-6',
    name: 'Juan',
    surname: 'Alfonso',
    email: 'student-6@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 7
  }, {
    id: 10007,
    username: 'student-7',
    password: 'student-7',
    name: 'Eva',
    surname: 'Marchena',
    email: 'student-7@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 6
  }, {
    id: 10008,
    username: 'student-8',
    password: 'student-8',
    name: 'Alejandra',
    surname: 'Gonzalez',
    email: 'student-8@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6
  }, {
    id: 10009,
    username: 'student-9',
    password: 'student-9',
    name: 'Miguel',
    surname: 'Delgado',
    email: 'student-9@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7
  }, {
    id: 10010,
    username: 'student-10',
    password: 'student-10',
    name: 'Maria del Mar',
    surname: 'Olmo',
    email: 'student-10@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6
  }, {
    id: 10011,
    username: 'student-11',
    password: 'student-11',
    name: 'Angela',
    surname: 'Reyes',
    email: 'student-11@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6
  }, {
    id: 10012,
    username: 'student-12',
    password: 'student-12',
    name: 'Carlos',
    surname: 'Ramos',
    email: 'student-12@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7
  }, {
    id: 10013,
    username: 'student-13',
    password: 'student-13',
    name: 'Jesus',
    surname: 'Rodriguez',
    email: 'student-13@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7
    }], function (err, students) {
    if (err) throw err;

    app.models.Badge.create([{
      id: 1,
      name: 'badge 1',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Favorite_128x128.png',
      points: 10
    }, {
      id: 2,
      name: 'badge 2',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Misterwong_128x128.png',
      points: 20
    }], function (err, badges) {
      if (err) throw err;

      // Assign badges to students
      students[0].badges.add(badges[0], function (err) {
        if (err) throw err;
        students[0].badges.add(badges[1], function (err) {
          if (err) throw err;
          students[1].badges.add(badges[0], function (err) {
            if (err) throw err;
            students[2].badges.add(badges[1], function (err) {
              if (err) throw err;

              app.models.Group.create([{
                id: 1,
                name: 'Group 1',
                teacherId: 1000,
                gradeId: 1,
                matterId: 1
              }, {
                id: 2,
                name: 'Group 2',
                teacherId: 1000,
                gradeId: 1,
                matterId: 2
              }, {
                id: 3,
                name: 'Group 3',
                teacherId: 1000,
                gradeId: 2,
                matterId: 1
              }, {
                id: 4,
                name: 'Group 4',
                teacherId: 1001,
                gradeId: 1,
                matterId: 2
              }], function (err, groups) {

                groups[0].students.add(students[0], function (err) {
                  if (err) throw err;
                  groups[0].students.add(students[1], function (err) {
                    if (err) throw err;
                    groups[0].students.add(students[2], function (err) {
                      if (err) throw err;
                      groups[0].students.add(students[3], function (err) {
                        if (err) throw err;
                        groups[0].students.add(students[4], function (err) {
                          if (err) throw err;
                          groups[0].students.add(students[5], function (err) {
                            if (err) throw err;
                            groups[0].students.add(students[6], function (err) {
                              if (err) throw err;
                              groups[0].students.add(students[7], function (err) {
                                if (err) throw err;
                                groups[0].students.add(students[8], function (err) {
                                  if (err) throw err;
                                  groups[0].students.add(students[9], function (err) {
                                    if (err) throw err;
                                    groups[0].students.add(students[10], function (err) {
                                      if (err) throw err;
                                      groups[0].students.add(students[11], function (err) {
                                        if (err) throw err;
                                        groups[0].students.add(students[12], function (err) {
                                          if (err) throw err;
                                groups[1].students.add(students[2], function (err) {
                                  if (err) throw err;
                                  groups[1].students.add(students[3], function (err) {
                                    if (err) throw err;
                                    groups[1].students.add(students[4], function (err) {
                                      if (err) throw err;
                                      groups[1].students.add(students[5], function (err) {
                                        if (err) throw err;
                                        groups[1].students.add(students[6], function (err) {
                                          if (err) throw err;
                                          groups[2].students.add(students[3], function (err) {
                                            if (err) throw err;
                                            groups[3].students.add(students[1], function (err) {
                                              if (err) throw err;
                                              groups[3].students.add(students[2], function (err) {
                                                if (err) throw err;
                                                groups[3].students.add(students[3], function (err) {
                                                  if (err) throw err;

                                                  app.models.Competition.create([{
                                                    type:'Liga',
                                                    mode:'Individual',
                                                    name:'Bastetanos',
                                                    numParticipants: 13,
                                                    numJourneys: 12,
                                                    information: 'Bases de la liga',
                                                    teacherId: 1000
                                                  }, {
                                                    type:'Tenis',
                                                    mode:'Equipos',
                                                    name:'Los jeje',
                                                    numParticipants: 13,
                                                    numJourneys: 12,
                                                    information: 'Bases del torneo',
                                                    teacherId: 1000
                                                  }], function (err, competitions) {
                                                    if (err) throw err;

                                                    competitions[0].students.add(students[7], function (err) {
                                                      if (err) throw err;
                                                      competitions[0].students.add(students[8], function (err) {
                                                        if (err) throw err;
                                                        competitions[0].students.add(students[9], function (err) {
                                                          if (err) throw err;
                                                          competitions[0].students.add(students[10], function (err) {
                                                            if (err) throw err;
                                                            competitions[0].students.add(students[11], function (err) {
                                                              if (err) throw err;
                                                              competitions[0].students.add(students[12], function (err) {
                                                                if (err) throw err;
                                                                 process.nextTick(cb);
                                                              })
                                                            })
                                                          })
                                                        })
                                                      })
                                                    })
                                                });
                                              })
                                            })
                                          })
                                        })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          });
        })
      })
    })
  })
});
});
};
