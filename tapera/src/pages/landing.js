import HeroImg from './../images/hero.jpg';
import Phone from './../images/phone.png';

export default function Landing() {

    return (
        <div class="bg-white ...">
            <div class="w-full flex mb-96 pb-24 lg:w-full lg:flex lg:mb-96 lg:pb-96 ...">
            <div class="lg:flex-1 lg:h-16 lg:mb-48">
            <img class="mt-0 lg:absolute inset-y-0 right-0 lg:w-1/3 h-full object-cover shadow-2xl rounded-lg lg:mt-24 pt-1 ..." alt ='' id='hero' src={HeroImg} />
        </div>

          <div class="absolute top-72 pt-60 lg:pt-0 right-8 w-full flex-1 lg:divide-y-0 mt-44 ml-0 pl-10 space-y-0.5 font-opensans lg:absolute lg:left-0 lg:top-10 ...">

          <div><p class="lg:mt-0 text-4xl text-blue-600 lg:text-6xl lg:text-blue-600 mb-10 ...">The Future of Cash</p></div> 

          <div><p class="text-4xl mb-10 ...">Money like you’ve never had before</p></div>

            <div><p class="text-2xl opacity-60 ...">Send money to anyone,</p></div>  
            <div><p class="text-2xl opacity-60 mb-10 ...">spend money anywhere.</p></div>  

            <div>
            <a href="#about" class="text-sm px-10 py-4 leading-none border rounded
                        text-white bg-blue-500 mr-0.5 border-black
                        hover:bg-black lg:mt-0 font-opensans">Learn More</a>
            </div>

          </div>    
        </div>

            
            
            

            <div class="flex float-right lg:flex lg:float-right">
            <img class="lg:absolute lg:left-0 lg:h-full lg:w-full ..." alt ='' id='phone' src={Phone} />
            </div>

            <div class="lg:space-y-5 lg:mt-96 lg:pt-44 bg-red-500 ...">
            <div><p class="ml-2 mb-4 text-5xl text-white underline font-heading lg:ml-24 ...">What we do</p></div>  
            <div><p class="ml-2 text-xl lg:text-2xl font-opensans lg:ml-24 ...">Tapera's unique method of processing</p></div> 
            <div><p class="ml-2 text-xl lg:text-2xl font-opensans lg:ml-24 ...">transactions in real time on the </p></div>
            <div><p class="ml-2 text-xl lg:text-2xl font-opensans lg:ml-24 ...">Algorand network will enable equal access to all,</p></div>
            <div><p class="ml-2 text-xl lg:text-2xl font-opensans lg:ml-24 ...">afford anonymity, and facilitate the</p></div>
            <div><p class="ml-2 text-xl lg:text-2xl font-opensans lg:ml-24 ...">transfer of assets in a revolutionary way.</p></div>


            <div><p class="ml-2 text-3xl mt-9 lg:text-2xl font-opensans lg:ml-24 lg:mt-16 ...">Our users don't need to have a bank account,</p></div>
            <div><p class="ml-2 text-3xl lg:text-2xl font-opensans lg:ml-24 ...">smart phone, or even an app to participate</p></div>
            <div><p class="ml-2 text-3xl lg:text-2xl font-opensans lg:ml-24 ...">in our network just as these aren't</p></div>
            <div><p class="ml-2 text-3xl mb-10 lg:text-2xl font-opensans lg:ml-24 lg:mb-64 ...">prerequisites for using traditional cash.</p></div>

          
            <div class="space-y-4 pb-10 pt-10 bg-white ...">
            <div><p id="about" class="ml-3 text-3xl text-black text-left lg:ml-0 lg:text-center font-heading opacity-50 ...">About Us</p></div>

            <div class="ml-2 divide-y-0 space-y-0 lg:space-y-2 lg:ml-8 ..."> 
            <div><p class="text-5xl text-red-500 text-left lg:text-center font-opensans pb-7 font-bold ...">Our Mission</p></div>
            <div><p class="text-lg lg:text-2xl text-black font-opensans text-left lg:text-center ...">Our mission is to bring modern banking services to those that otherwise wouldn't have access to them;</p></div> 
            <div><p class="text-xl lg:text-2xl text-black font-opensans text-left lg:text-center ...">first and foremost by processing small transactions at no cost to our users.</p></div>
            
        </div>
        </div>
        </div>
        </div>
        
    );
  }
  