import openai from "./common/openAi";

const makeApiCall = async (customGptQuery) =>{

    try{
      debugger
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: customGptQuery }],
            model: "gpt-3.5-turbo",
          });
         
          console.log(gptResults);

    }catch (error){
      debugger
        if (error.response && error.response.status === 429) {
         
            setTimeout(() => makeApiCall(customGptQuery), 10000);
          } else {
            console.error("API error:", error);
          }
    }


}

function singleString(obj) {
  let result = '';

  for (const key in obj) {
      result += `${key} is ${obj[key]} `;
  }

  return result.trim(); // trim to remove trailing space
}

// const makeApiCalls = async (customGptQuery) => {
//     try {
//       const gptResults = await openai.chat.completions.create({
//         messages: [{ role: "user", content: customGptQuery }],
//         model: "gpt-3.5-turbo",
//       });
//       const GptRecommondedMovie =
//         gptResults.choices?.[0]?.message?.content.split(",");
//       const clean_GptRecommondedMovie = GptRecommondedMovie?.map((movie) =>
//         movie.trim()
//       );
//       const suggestedAllMoviesPromiseArray = clean_GptRecommondedMovie.map(
//         (movie) => GetSuggestedMoviefromTMDB(movie)
//       );
//       const suggestedAllMoviesArray = await Promise.all(
//         suggestedAllMoviesPromiseArray
//       );
      
//       dispatch(
//         addGptsuggestedMovies({
//           movieNames: clean_GptRecommondedMovie,
//           movieResult: suggestedAllMoviesArray,
//         })
//       );
     
//     } catch (error) {
//       if (error.response && error.response.status === 429) {
//         setTimeout(() => makeApiCall(customGptQuery), rateLimitDelay);
//       } else {
//         console.error("API error:", error);
//       }
//     }
//   };

const commonFunctions = {
    makeApiCall,
    singleString,
}

export default commonFunctions;