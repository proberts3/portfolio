<template>
  <div>
 <section>
   <v-layout
  column
  wrap
  class="my-5"
  align-center
   >
  <v-flex xs11 sm10 md8 class="my-3">
    <h1 class="mb-2 display-3 text-xs-center">
    Potluck</h1>
     <img src="/img/potluck.png" width="100%">
    <div class="keywords">
   <h3 class="prelist-header">Keywords: </h3>
   <ul>
     <li>
    Research
     </li>
     <li>
    Design
     </li>
     <li>
    Prototyping
     </li>
   </ul>
    </div>
    <div class="text-xs">
   <h2 class="space-top">About</h2>
   <p>
     For our first semester at Georgia Tech, Human-Computer Interaction (HCI) Masters students were tasked with solving a UX problem on campus. This was a semester long project, worked on in a four-person team, that is reflective of the entire UX process. Over the course of the project, we used:
   </p>
   <nav role="navigation">
     <v-flex xs8 offset-xs1 class="toc" elevation-8>
    <h2 class="small-font">Table of Contents</h2>
    <v-flex xs10 offset-xs1>
      <ol>
     <li>
       <a href="#ethno" v-smooth-scroll>Participant Observation</a>
     </li>
     <li>
       <a href="#coninq" v-smooth-scroll>Contextual Inquiry</a>
     </li>
     <li>
       <a href="#affinity" v-smooth-scroll>Affinity Diagram</a>
     </li>
     <li>
       <a href="#affinity" v-smooth-scroll>Hierarchal Task Analysis</a>
     </li>
     <li>
       <a href="#surveys" v-smooth-scroll>Surveys</a>
     </li>
     <li>
       <a href="#personas" v-smooth-scroll>Personas</a>
     </li>
     <li>
       <a href="#funcuser" v-smooth-scroll>Functional requirements and user needs</a>
     </li>
     <li>
       <a href="#funcuser" v-smooth-scroll>Impact/Feasability Diagramming</a>
     </li>
     <li>
       <a href="#rapid" v-smooth-scroll>Rapid Ideation & Parallel Design Workshop</a>
     </li>
     <li>
       <a href="#cardsort" v-smooth-scroll>Open Card Sort</a>
     </li>
     <li>
       <a href="#lowfi" v-smooth-scroll>Low Fidelity Prototyping</a>
     </li>
     <li>
       <a href="#heuristic" v-smooth-scroll>User Testing</a>
     </li>
     <li>
       <a href="#hifi" v-smooth-scroll>High Fidelity Prototype</a>
     </li>
      </ol>
      </v-flex>
     </v-flex>
   </nav>
   <section>
     <h2 id="ethno">Participant Observation</h2>
     <p>
    A total of eight observations were performed at various dining locations on campus. We examined the behavior of students as they ordered food and the different contexts of these tasks. We noticed a few behaviors such as international students ordering in groups, having a “designated translator”, or copying the choices of the person before them. Our findings, while insightful, weren't enough and we needed more information in a short timeframe.
     </p>
   </section>
   <section>
     <h2 id="coninq">Contextual Inquiry</h2>
     <p>
    After natural observations, we had collected a fair amount of objective qualitative data. We needed to understand further about our users’ feelings and problems, as well as the reasons that cause the problem. We also needed to identify how users’ personal traits relate to their problems.
    </p>
     <p> 
    We performed contextual interviews with over nine users who were first-year international students. We visited various food vendors on campus. We observed them using a “think aloud” process. After that we immediately interviewed them with an open questionnaire we had developed beforehand. We compared the recordings, notes, and answers to our questions and used these findings to create an Affinity Diagram and Task Analysis.
     </p>
     <h2 id="affinity">Hierarchal Task Analysis & Affinity Mapping</h2>
     <p>
    Based on our observations from observing the environment and our brief ethnography, we determined that a more “open form” Cognitive Task Analysis would be appropriate. Because the task involved many differing actions that could be performed in parallel or out-of-sequence, a Heuristic Task Analysis (HTA) would not be effective. For example: A user may be standing out of the queue to a restaurant while looking at the menu and the food, comparing prices, and their preferences. But they may also be making these decisions in the queue, while interacting with the server, or just arbitrarily disregarding the menu and pointing at foods that “look good” to eat. However, there were some questions that we still had after reviewing the HTA and required more information.
     </p>
     </section>
     <section class="float-left">
     <h2 id="surveys">Survey</h2>
     <p>From our HTA and Affinity Mapping we discovered several important patterns from our data. We had narrowed down our focus, now it was time to confirm our findings in a larger group of our target users. This was a short survey with closed-ended questions to identify student status and ask about eating preferences. We distributed the survey through social media groups of international students. There were 60 valid responses, giving us enough data to identify the broad problems faced by our users. We analyzed this data through a second phase of affinity diagramming where we grouped common themes and feedback from the surveys.
     </p>
      <h2 id="personas" class="pad-top">Personas</h2> <img src="/img/drawing.JPG" alt="developing personas on a whiteboard" width="100%" height="auto">
    <p>
      For our personas we analyzed our design needs and recommendations and compared those with the feedback we received from our interviews and surveys. We matched our personas to the broad trends we perceived in our data. We were able to identify three different major personas from these trends. There were also minor data points that we wanted to include to give some accuracy, richness, and variety to our personas. The major personality factors included length of stay in America, introversion/extroversion, and eating habits. The minor factors included wanting healthy foods and country of origin. The major factors between students were price, identifying foods, friends recommendations, understanding menu information, understanding procedure, and minimizing interaction with the serving staff. There were however different levels of influence that determined which of these would be a focus for each persona.
    </p>
    <img src="/img/Yan2.png" alt="yan persona" width="100%" height="auto">
    <img src="/img/Ram2.png" alt="ram persona" width="100%" height="auto">
    <img src="/img/Pablo2.png" alt="yan persona" width="100%" height="auto">
    <h2 id="funcuser">Functional Requirements, Needs and Task Analysis, Impact/Feasability Analysis</h2>
    <p>
      We worked through two iterations of ideation. We compared our ideas to solutions by other companies and how they solved the needs and wants of our users. We used stickynotes and stickers to create a graph with the two-axis of perceived feasibility and impact. We took our three highest-scoring ideas to form quick prototypes in parallel. These ideas were an augmented-reality menu, a gamified experience for trying new foods, and a social media of foods like application. The medium scoring ideas we saved as possible features to be added, as not one idea completely fufilled the needs of every persona.
    </p>
    <img src="/img/impact.png" alt="developing personas on a whiteboard" width="100%" height="auto">
    <h2 id="rapid">Rapid Ideation & Parallel Design Workshop</h2>
    <p>
      We presented our personas and prototypes among our peers who then voted on the ideas using a similar process as earlier. Particularly effective screens we also marked.  Our overall highest scoring idea was actually the gamification of trying food. Certain screens of the other prototypes however scored highly, and we included the features on those screens. This included the feedback from friends, descriptions and rankings of different foods, and the roulette wheel food picker.
    </p>
    <h2 id="cardsort">Card Sorting</h2>
    <p>
      After identifying the major ideas for the prototype, we needed to dertemine the information architechture and general flow of our prototype. We used an open card sort for generative purposes, then had experts perform heuristic analysis and usertesting for evaluation.
    </p>
    <h2 id="lowfi">Low-fidelity Paper prototyping and Cognitive Walkthrough</h2>
    <p>
      We first made a paper prototype and scanned it, making it an interactive prototype with Axure. The relationship between pages are shown as below:
    </p>
    <h2 id="heuristic">User Testing</h2>
    <p>
      We performed user testing on four users using a think aloud method and then an immediate survey. We took task-performance metrics of task success rate, time, and errors. Subjective reaction metrics were quantified into a System Usability Scale of 3.8/5 and a User Engagement Scale of 4/5. Our design wants to make trying food a game-like and social experience. Thus, in addition to the subjective usability metrics, we need to measure the engagement level of users so as to test the effectiveness of this concept. The engagement scale was based upon a method normally used in video games. (Wiebe, E. N., Lamb, A., Hardy, M., & Sharek, D. (2014)
    </p>
    <h2 id="hifi">Hi-Fidelity Prototype & User Testing</h2>
    <p>
      A High-fidelity prototype was created based on the feedback from the users and heuristic analysis performed by UX professionals. This was prototyped in Sketch and Invision and was tested on a mobile device in the Moe's restaurant at Georgia Tech. We had fully prototyped the ordering process for a few final tasks.  Again, we had the user dictate their thoughts as best as possible as they went through the process of using the app to assist their ordering process. Users had difficulty with some of the text and icons, understanding the recommendations from the roulette food=picker, and the rating and recommending food to a friend procedure. The gamification features, especially "throwing" food back at your friends if you didn't like their recommendation, was well received. However the point reward system and customization features were not well understood. From this point we perhaps ready to perform some more high-fidelity tests to refine the idea or an app to test!
    </p>
     </section>
    </div>
  </v-flex>
   </v-layout>
 </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Potluck 🍽'
  }
}
</script>

<style scoped>
.toc {
  background-color: rgb(246, 246, 246);
  border-radius: 2px;
  padding: 0.8em;
  margin: 0.8em;
  color: black;
}
.toc li {
  list-style-type: custom-emoji;
}
@counter-style custom-emoji {
  suffix: " ";
  symbols: "👁" "🕵🏻‍♀️" "▩" "🎛" "📄" "👨‍⚕️" "☑️" "⚖️" "💡" "🃏" "📝" "📊" "📲" "📈";
  system: cyclic;
}

li a {
  color: black !important;
  display: block;
}
li a:hover{
  background-color: white;
  outline: 1px rgb(60, 107, 190) solid;
}
li a:focus{
  background-color: white;
}
.space-top {
  margin: 1rem 0 0 0;
}
.prelist-header {
  display: inline;
}
.keywords ul {
  display: inline;
}
.keywords li {
  display: inline-block;
  margin: 0 0 0 1rem;
}
a {
  color: #b4e9ff !important;
}
.headline {
  text-align: center;
}
.overimage {
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
  background-color: rgba(0, 0, 0, 0.55);
}
img {
  padding-left: 1em;
}
</style>
