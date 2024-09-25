import { generateStory } from "./book-generation";
import {supabaseClient} from "@/actions/supabase/backend";


//Extract the title from the generated story
const extractTitle = (text: string): string | null => {
    const titleMatch = text.match(/Generated Story: ##\s*(.*)/);
    return titleMatch ? titleMatch[1].trim() : null;
};

let userId:string;
const credits_to_deduct = 2;


const testUserInput = {
    age: 6,
    storyType: "adventure",
    storyDescription: "A brave little squirrel goes on a quest to find the magical acorn.",
    language: "Swahili"
};

//Fetch current credit amount
export async function generateBook(): Promise<Response | null> {
    let {data, error} = await supabaseClient
        .from('credits')
        .select('credit_amount')
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching credits', error);
        return null;
    }
    
    if (data && data.credit_amount >= credits_to_deduct){
        const newCreditAmount = data.credit_amount - credits_to_deduct;
        generateStory(testUserInput)
        .then(story => {
            return story
        })
        .catch(error => {
            console.error("Error during story generation:", error);
            return error
        });
        // Update the credit amount in the database
        const { error: updateError } = await supabaseClient
            .from('credits')
            .update({ credit_amount: newCreditAmount })
            .eq('user_id', userId);

        if (updateError) {
           return new Response(JSON.stringify({message: 'Error updating credits',updateError}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
           })
        }

        return new Response(JSON.stringify({message: 'Story generated successfully', credits: newCreditAmount}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({message: 'Insufficient credits'}), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
    });
}