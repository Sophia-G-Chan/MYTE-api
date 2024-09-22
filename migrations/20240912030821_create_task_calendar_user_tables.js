export async function up(knex) {
    await knex.schema
        .createTable("users", (table) => {
            table.increments('id').unsigned().primary();
            table.string('username').notNullable();
            table.string('email');
            table.string('password');
            table.timestamp('created_at').default(knex.fn.now());
            table.timestamp('updated_at').default(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable("tasks", (table) => {
            table.increments('task_id').primary();
            table.integer('user_id').unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('task_name', 255).notNullable();
            table.string('description', 255);
            table.string('priority');
            table.string('order');
            table.timestamp('start_date_and_time');
            table.timestamp('end_date_and_time');
            table.string('status');
            table.timestamp('created_at').default(knex.fn.now());
            table.timestamp('updated_at').default(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable("calendar", (table) => {
            table.increments('event_id').primary();
            table.integer('user_id').unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('task_id').unsigned()
                .references('task_id')
                .inTable('tasks')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('task_name').notNullable();
            table.string('description').notNullable();
            table.timestamp('start_date_and_time').notNullable();
            table.timestamp('end_date_and_time').notNullable();
            table.timestamp('created_at').default(knex.fn.now());
            table.timestamp('updated_at').default(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable("lists", (table) => {
            table.increments('id').primary();
            table.string('list_name', 255);
            table.timestamp('created_at').default(knex.fn.now());
            table.timestamp('updated_at').default(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable("list_tasks", (table) => {
            table.increments("id").primary();
            table.integer("list_id").unsigned()
                .references('id')
                .inTable('lists')
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.integer("task_id").unsigned()
                .references("task_id")
                .inTable("tasks")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        });

    await knex.raw('ALTER DATABASE journeytask CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci');
    await knex.raw('ALTER TABLE tasks CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    await knex.raw('ALTER TABLE tasks MODIFY task_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL')
    await knex.raw('ALTER TABLE tasks MODIFY description VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci')

    await knex.raw('ALTER TABLE lists MODIFY list_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ')
};

export function down(knex) {
    return knex.schema
        .dropTableIfExists('list_tasks')
        .dropTableIfExists('lists')
        .dropTableIfExists('calendar')
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
