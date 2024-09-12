export function up(knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments('id').unsigned().primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
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
            table.string('task_name').notNullable();
            table.string('description').notNullable();
            table.timestamp('start_date_and_time').notNullable();
            table.timestamp('end_date_and_time').notNullable();
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
        .createTable("goals", (table) => {
            table.increments('id').primary();
            table.integer('task_id').unsigned()
                .references('task_id')
                .inTable('tasks')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('goal').notNullable();
            table.string('description').notNullable();
            table.timestamp('start_date_and_time').notNullable();
            table.timestamp('end_date_and_time').notNullable();
            table.string('status');
            table.timestamp('created_at').default(knex.fn.now());
            table.timestamp('updated_at').default(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

export function down(knex) {
    return knex.schema
        .dropTableIfExists('goals')
        .dropTableIfExists('calendar')
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
