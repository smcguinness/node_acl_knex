/**
  Buckets names default configuration.
  */

const _ = require('lodash');

const buckets = function buckets(options) {
  return _.extend({
    meta: 'meta',
    parents: 'parents',
    permissions: 'permissions',
    resources: 'resources',
    roles: 'roles',
    users: 'users',
  }, options);
};

exports = module.exports = buckets;
