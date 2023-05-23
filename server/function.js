import openai from "./api.js"

const generateSql = async (query) => {

const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "system", content: `You are a translator from plain English to SQL.` },
        { role: "user", content: `Convert the following natural language description into a SQL query:\n\nShow all the elements in the table users.` },
        { role: "assistant", content: "SELECT * FROM users;" },
        { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${query}.` },
    ]
})
    
    return result.data.choices[0].message.content

}

export default generateSql
