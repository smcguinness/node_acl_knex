'use strict';

const chai = require("chai");
const assert = require('chai').assert;
const expect = require('chai').expect;
const KnexBackend = require('../');

const knex = require('knex');
const tests = require('../node_modules/acl/test/tests');

var options;

function run() {
	Object.keys(tests).forEach(function (test) {
		tests[test]();
	});
}

/*describe('KnexBackend', function () {
  before(function(done){
    this.db = knex(require('../knexfile.js').development);
    done();
  })
  after(function(){
    // db.destroy();
  })
  describe('Create db Object', function(){
    it('should connect to database',function(){
      expect(this.db).itself.to.respondTo('select');
    })
  });
  describe('Latest Migration', function() {
    beforeEach(function(){
      return this.db.migrate.rollback();
    })
    after(function(){
      return this.db.migrate.latest();
    })
    it('should run Up migrations', function () {
      return this.db.migrate.latest().then(function(migration) {
          return expect(migration).to.be.instanceof(Array);
      });
    })
    it('should run Down migrations', function () {
      return this.db.migrate.rollback().then(function(migration) {
          return expect(migration).to.be.instanceof(Array);
      });
    })
  });
  describe('ACL Tests', function () {
    before(function(){
      this.backend = new KnexBackend(this.db);
    })

    run();
  });
});*/

describe('KnexBackend', function () {
	describe('testing setup method', function () {
		before(function (done) {
			//error = null;
			options = {
				meta: 'meta',
				parents: 'parents',
				permissions: 'permissions',
				resources: 'resources',
				roles: 'roles',
				users: 'users'
			};
      this.db = knex(require('../knexfile.js').development);
      done();
    });
    describe('Create db Object', function(){
      it('should connect to database',function(){
        expect(this.db).itself.to.respondTo('select');
      })
    });
    describe('Latest Migration', function() {
      beforeEach(function(){
        return this.db.migrate.rollback();
      })
      after(function(){
        return this.db.migrate.latest();
      })
      it('should run Up migrations', function () {
        return this.db.migrate.latest().then(function(migration) {
          return expect(migration).to.be.instanceof(Array);
        });
      })
      it('should run Down migrations', function () {
        return this.db.migrate.rollback().then(function(migration) {
          return expect(migration).to.be.instanceof(Array);
        });
      })
    });

    describe('Acl Test', function () {
      before(function (done) {
        this.backend = new KnexBackend(this.db, '');
        done();
     });

      run();
    });
  });
});

// Mysql and SQLite support coming soon.

// describe('MySql', function () {
// 	before(function (done) {
// 		var self = this;
// 		var db = knex({
// 			client: 'mysql',
// 			connection: {
// 				host: '127.0.0.1',
// 				port: 3306,
// 				user: 'root',
// 				password: ''
// 				database: 'travis_ci_test'
// 			}
// 		});

// 		var downSql = 'DROP TABLE IF EXISTS acl_meta, acl_resources, acl_parents, acl_users, acl_permissions';

// 		db.raw(downSql)
// 			.then(function() {
// 				self.backend = new KnexBackend(db, 'mysql', 'acl_');
// 				done();
// 			})
// 		;

// 	});

// 	run();
// });

// describe('SQLite', function () {
// 	before(function (done) {
// 		var self = this;
// 		var db = knex({
// 			client: 'sqlite',
// 			connection: {
// 				filename: './travis_ci_test.sqlite'
// 			}
// 		});

// 	});

// 	run();
// });
