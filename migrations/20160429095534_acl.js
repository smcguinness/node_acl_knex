'use strict'

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('meta', function(t) {
      t.text('key').primary().notNullable();
      t.text('value').notNullable();
    }),
    knex.schema.createTableIfNotExists('parents', function(t) {
      t.text('key').primary().notNullable();
      t.text('value').notNullable();
    }),
    knex.schema.createTableIfNotExists('permissions', function(t) {
      t.text('key').primary().notNullable();
      t.json('value').notNullable();
    }),
    knex.schema.createTableIfNotExists('resources', function(t) {
      t.text('key').primary().notNullable();
      t.text('value').notNullable();
    }),
    knex.schema.createTableIfNotExists('users', function(t) {
      t.text('key').primary().notNullable();
      t.text('value').notNullable();
    }),
    knex.schema.createTableIfNotExists('roles', function(t) {
      t.text('key').primary().notNullable();
      t.text('value').notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('meta'),
    knex.schema.dropTableIfExists('parents'),
    knex.schema.dropTableIfExists('permissions'),
    knex.schema.dropTableIfExists('resources'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('roles')
  ]);
};
