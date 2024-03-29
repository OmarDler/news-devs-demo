exports.up = (knex) =>
  knex.schema.createTable("publisher", (table) => {
    table.increments("id").primary();
    table.string("username", 350).notNullable().defaultTo("");
    table.string("password", 350).notNullable().defaultTo("");
    table.string("uid", 350).notNullable().defaultTo("");
    table.string("email", 350).notNullable().defaultTo("");
    table.boolean("blocked").notNullable().defaultTo(0);
    table.datetime("created_at", { precision: 6 });
    table.charset("utf8");
    table.collate("utf8_general_ci");
  });

exports.down = (knex) => knex.schema.dropTable("publisher");
