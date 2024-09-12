export async function seed(knex) {
    await knex('tasks').del();
    await knex('tasks').insert([
        {
            user_id: 1,
            task_name: "Capstone Project",
            description: "final project for BrainStation Software Engineering Bootcamp",
            start_date_and_time: new Date(2024, 8, 11),
            end_date_and_time: new Date(2024, 8, 22),
            status: "In Progress"
        },
        {
            user_id: 1,
            task_name: "test",
            description: "Description for test",
            start_date_and_time: new Date(2024, 8, 13, 15, 30, 0),
            end_date_and_time: new Date(2024, 8, 13, 18, 30, 0),
            status: "Pending"
        },
        {
            user_id: 1,
            task_name: "Last day of class",
            description: "Description for Last day of class",
            start_date_and_time: new Date(2024, 8, 27, 15, 30, 0),
            end_date_and_time: new Date(2024, 8, 27, 16, 0, 0),
            status: "Pending"
        }
    ])
}
