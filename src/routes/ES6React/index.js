/*module.exports = {
  path: 'course/:courseId/ren',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/Announcements'),
        require('./routes/Assignments'),
        require('./routes/Grades')
      ])
    })
  },

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Course'))
    })
  }
}
*/

module.exports={
  path:"ES6React",
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../layouts/ES6React/eS6React'))
    })
  }
}