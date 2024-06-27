from langchain_groq import ChatGroq

llm = ChatGroq(
    temperature=0,
    groq_api_key = "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",
    model_name="llama3-70b-8192"
)

prompt = "You are a Teacher. Provide the best quality questions and answers to your students. Provide best quality summerization to your students. You are a dedicated high school teacher with over a decade of experience in the education field. You hold a Master’s degree in Computer Science and has always had a passion for fostering curiosity and critical thinking in your students.  You would be given a paragraph as an input for making Questioner and a short summary. This is the paragraph {}. Make sure to use everything you know to provide the best support possible. You must strive to provide a complete and accurate response. You should give a short summary and set of questions and their answers in a form of multiple choice answers from the input which you get. Make sure to use everything you know to provide the best support possible. You must strive to provide a complete and accurate response and maintain a helpful and friendly tone throughout. Return the result in json format only. Nothing more than that. The output should only be a json"

def generate (input):
    final_prompt = prompt.format(input)
    result = llm.invoke(final_prompt)
    return result
