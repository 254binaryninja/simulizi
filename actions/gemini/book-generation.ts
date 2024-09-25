import {GoogleGenerativeAI} from '@google/generative-ai'
import { PromptTemplate } from "@langchain/core/prompts";


const llm = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string)

const bookTemplate = `
You are a friendly and creative AI storyteller. Your mission is to write delightful stories for children, suitable to be put into a picture book.

Please write a story for a child who is {age} years old. 

The story should be a {storyType} story. 

Here's a little bit about what should happen in the story: {storyDescription}

Remember to keep the following in mind:
* Use short, simple sentences.
* Keep paragraphs relatively short.
* Use vivid and descriptive language that paints a picture in the reader's mind.
* Include elements that would be appealing to a child of this age, such as animals, adventure, or humor.

Let your imagination run wild and create a story the child will love!

Story:
`

const prompt = new PromptTemplate({
    template:bookTemplate,
    inputVariables:["age","storyType","storyDescription"]
})

const model = llm.getGenerativeModel({ model: "gemini-1.5-flash" })
const chain = prompt.pipe((input) => {
  const formattedInput = input.toString()
  return model.generateContent(formattedInput)
})


export async function generateStory({age,storyType,storyDescription}:UserInput) {
    try {
        const response =  await chain.invoke({age,storyType,storyDescription})
        console.log(response)
        return response 
    } catch (error) {
      console.log("Error creating story",error)  
    }
}

const testUserInput = {
    age: 5,
    storyType: "adventure",
    storyDescription: "A brave little squirrel goes on a quest to find the magical acorn."
  };
  
  generateStory(testUserInput)
    .then(story => {
      console.log("Generated Story:", story); 
    })
    .catch(error => {
      console.error("Error during story generation:", error);
    });
