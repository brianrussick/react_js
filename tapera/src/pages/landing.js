import HeroImg from './../images/hero.jpg';
import Phone from './../images/phone.png';

export default function Landing() {

    return (
        <div class="bg-white ...">
            <div class="w-full flex mb-80 pb-20 lg:w-full 2xl:w-full lg:flex 2xl:flex lg:mb-96 2xl:mb-96 lg:pb-56 2xl:pb-96 ...">
            <div class="lg:flex-1 2xl:flex-1 lg:h-16 2xl:h-16 lg:mb-0 2xl:mb-48">
            <img class="mt-0 lg:absolute 2xl:absolute lg:inset-y-0 2xl:inset-y-0 lg:right-0 2xl:right-0 lg:w-1/3 2xl:w-1/3 h-84 lg:h-full 2xl:h-full lg:object-cover 2xl:object-cover shadow-2xl rounded-lg lg:mt-24 2xl:mt-24 pt-1 ..." alt ='' id='hero' src={HeroImg} />
        </div>

          <div class="absolute top-72 pt-60 lg:pt-0 right-8 w-full flex-1 lg:divide-y-0 mt-32 lg:mt-44 ml-0 pl-10 space-y-0.5 font-opensans lg:absolute lg:left-0 lg:top-10 ...">

          <div><p class="md:mt-64 lg:mt-0 text-4xl text-blue-600 lg:text-6xl lg:text-blue-600 mb-10 lg:ml-20 ...">The Future of Cash</p></div> 

          <div><p class="text-4xl mb-10 lg:ml-20 ...">DeFi for the Rest of Us</p></div>

            <div><p class="text-2xl opacity-60 lg:ml-20 ...">Decentralized money built for the borderless economy.</p></div>  
            <div><p class="text-2xl opacity-60 mb-10 lg:ml-20 ...">Tools to leverage your capital and gain spend.</p></div>  

            <div>
            <a href="#vision" class="text-sm px-10 py-4 leading-none border rounded
                        text-white bg-blue-500 mr-0.5 border-black
                        hover:bg-black lg:mt-0 font-opensans lg:ml-20">Learn More</a>
            </div>

          </div>    
        </div>

            
            
            

            <div class="flex float-right lg:flex lg:float-right mt-10 lg:mt-0">
            <img class="h-52 lg:absolute lg:left-0 lg:h-72 lg:w-84 lg:mt-20 ..." alt ='' id='phone' src={Phone} />
            </div>

            <div class="lg:space-y-5 lg:mt-96 lg:pt-10 bg-red-500 ...">
            <div><p id="vision" class="ml-2 mb-4 text-5xl text-white underline font-heading text-center lg:text-left lg:ml-24 ...">Our Vision</p></div>  

            <section class="lg:container lg:px-96 lg:ml-44">
      




    <div class="lg:grid">
    <div class="p-4 bg-white lg:rounded-lg">
        
         <div class="flex flex-col ml-5">
            <div class=" bg-gray-100 lg:flex lg:items-center">
    </div>
            <p class="text-2xl text-gray-800 mt-2">
            Our vision is to create an ecosystem where we process transactions in real time on the Algorand network
            which will enable equal access to all, afford anonymity, and facilitate the transfer of assets in a revolutionary way.
            </p>
            

            <p class="text-2xl text-gray-800 mt-10">
            Our first project, GARD, has given the world a truly decentralized crypto that always keeps the same value, without the
            transaction fees. Our users don't need a bank account, smart phone, or even an app to transfer their money. 
            </p>

            <div class="flex mt-10">
            </div>
         </div>
    </div>
    </div>
</section>
          
          
            <div class="ml-2 divide-y-0 space-y-0 lg:ml-8 ..."> 
            <div><p class="text-5xl text-red-500 font-opensans pb-5 text-center font-bold ...">Our Mission</p></div>

           
  
        </div>
        </div>
        </div>
        
    );
  }
  