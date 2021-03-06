const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  messages: function() {
    return this.hasMany('Message');
  },
  roles: function() {
    return this.belongsToMany('Role', 'users_roles', 'user_id');
  },
  projects: function() {
    return this.hasMany('Project');
  },
  youtubes: function() {
    return this.hasMany('Youtube');
  },
  followsUpvotes: function() {
    return this.hasMany('Follow_Upvote');
  },
  contributions: function() {
    return this.hasMany('UserProjectContribution');
  }
});

module.exports = db.model('Profile', Profile);
