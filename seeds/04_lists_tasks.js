export async function seed(knex) {
    await knex('list_tasks').del();
    await knex('list_tasks').insert([
        { id: 1, list_id: 1, task_id: 1 },
        { id: 2, list_id: 1, task_id: 2 },
        { id: 3, list_id: 2, task_id: 3 }
    ])
}
