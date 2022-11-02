/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable("restaurants", (table) => {
    table.bigincrements("id").unique().primary();
     table.string("name").notNullable();
     table.string("lat").default(0);
     table.string("lng").default(0);
    table.string("gf_items_count")
    table.boolean("if_gf_available")
    table.string("gf_option_count")
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("restaurants");
};
