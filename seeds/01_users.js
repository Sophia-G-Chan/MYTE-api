export async function seed(knex) {
    await knex('users').del();
    await knex('users').insert([
        {
            username: "testuser",
            email: true,
            password:'test@example.com'
        }
    ])
}
