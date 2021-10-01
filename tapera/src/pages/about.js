import Rylie from './../images/Rylie.jpg';
import David from './../images/David.jpg';
import Ryan from './../images/Ryan_Soscia.jpg';

export default function About() {

    return (
      <section class="lg:container lg:px-6 lg:py-4 lg:mx-auto lg:pt-10 2xl:pt-32">
  <div class="grid gap-4 lg:grid lg:gap-10 lg:mb-8 lg:grid-cols-1">
  {/* Card 1*/}
    <div class="lg:flex lg:items-start lg:p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <img alt="owner" class="w-96 h-72 rounded-md border-2 border-gray-300 object-cover" src={Rylie} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-5xl font-semibold mb-2 text-blue-500">Rylie Rueda</h4>
            <h4 id="subheading" class="text-3xl font-semibold mb-2">Founder & CEO - rylie.tapera@outlook.com</h4>
            <p id="job" class="text-2xl text-gray-800 mt-2">Rylie is a passion driven leader that has had lifelong interests in helping
            others and finance, specifically where these interests intersect. She has been involved in crypto since 2017 and is a firm
            believer in proof of stake blockchains, specifically Algorand, and how they will be part of this solution. Rylie's previous
            experiences in startups and finance have taught her how to ignore external noise and maintain a clear vision, while her
            athletic experience has taught her how to build and unify the teams she is a part of.</p>
            <div class="flex lg:mt-5">
            </div>
         </div>
    </div>
    {/* Card 2*/}
    <div class="lg:flex lg:items-start p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <img alt="employee" class="w-96 h-72 rounded-md border-2 border-gray-300 object-cover" src={David} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-5xl font-semibold mb-2 text-blue-500">David McCabe</h4>
            <h4 id="subheading" class="text-3xl font-semibold mb-2">Technical Lead</h4>
            <p id="job" class="text-2xl text-gray-800 mt-2">David is an experienced quantitative systems developer with a love for coding. 
            He is currently leading development on the GARD project. His previous roles provided him with large scale data processing experience.
            David also has  an academic background in CS, Math, and Finance. These experiences enabled him to easily transition to crypto
            and build innovative dApps on Algorand.</p>
            <div class="flex lg:mt-5">
            </div>
         </div>
    </div>
    {/* Card 3*/}
    <div class="lg:flex lg:items-start p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <img alt="employee" class="w-96 h-72 rounded-md border-2 border-gray-300 object-cover" src={Ryan} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-5xl font-semibold mb-2 text-blue-500">Ryan Soscia</h4>
            <h4 id="subheading" class="text-3xl font-semibold mb-2">Advisor & Board Member</h4>
            <p id="job" class="text-2xl text-gray-800 mt-2">Experienced startup Founder & CEO who has experience fundraising, generating revenue,
            and cultivating users at both the individual and institutional levels. Ryan's success and experience building his company, JDoe, 
            directly translates to Tapera's scaling as all startups, regardless of their market, encounter similar obstacles.</p>
            <div class="flex lg:mt-5">
            </div>
         </div>
    </div>
   
  </div>
</section>
    );
  }
  