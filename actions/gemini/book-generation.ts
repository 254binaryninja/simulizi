import {GoogleGenerativeAI} from '@google/generative-ai';
import {PromptTemplate} from "@langchain/core/prompts";

// Initialize Google Generative AI
const api_key = 'AIzaSyAQkicr27IPI9-Mb1vR5UHdIR1nBf6ZTz8';
const llm = new GoogleGenerativeAI(api_key);

// Define the prompt template
const bookTemplate = `
You are a friendly and creative AI storyteller. Your mission is to write delightful stories for children, suitable to be put into a picture book.

Please write a story for a child who is {age} years old. 

The story should be a {storyType} story. 

Here's a little bit about what should happen in the story: {storyDescription}

The story should be written in {language}.

Remember to keep the following in mind:
* Use short, simple sentences based on the child's age.
* Keep paragraphs relatively  long such that they can fill a standard kids story book.
* Use vivid and descriptive language that paints a picture in the reader's mind.
* Include elements that would be appealing to a child of this age, such as animals, adventure, or humor.
* Also generate the title of the story.

Let your imagination run wild and create a story the child will love!

Story:
`;

// Create the PromptTemplate
const prompt = new PromptTemplate({
    template: bookTemplate,
    inputVariables: ["age", "storyType", "storyDescription","language"]
});

// Async function to generate the story
export async function generateStory({ age, storyType, storyDescription,language }: UserInput) {
    try {
        // Format the input using the prompt template
        const formattedPrompt = await prompt.format({ age, storyType, storyDescription,language });
        const model = llm.getGenerativeModel({ model: "gemini-1.5-flash" });
        // Generate the content using the Google Generative AI
        const response = await model.generateContent(formattedPrompt);

        if (!response.response.candidates || response.response.candidates.length === 0) {
            throw new Error("No story generated");
        }

          // Extract the story text
        return response.response.candidates[0].content.parts[0].text;  // Return the story text
    } catch (error) {
        console.error("Error creating story", error);
        throw error;  // Re-throw the error if necessary
    }
}

// // Example input for testing
// const testUserInput = {
//     age: 6,
//     storyType: "adventure",
//     storyDescription: "A brave little squirrel goes on a quest to find the magical acorn.",
//     language: "Swahili"
// };

// // Call the generateStory function and log the output
// generateStory(testUserInput)
//     .then(story => {
//         console.log("Generated Story:", story);
//     })
//     .catch(error => {
//         console.error("Error during story generation:", error);
//     });
