export async function seed(knex) {
    await knex('lists').del();
    await knex('lists').insert([
        {
            id: 1,
            goal: "Complete Project",
            description: "Project tasks",
            status: "In Progress"
        },
        {
            id: 2,
            goal: "Prepare Presentation",
            description: "Presentation tasks",
            status: "Not Started"
        }
    ])
}
