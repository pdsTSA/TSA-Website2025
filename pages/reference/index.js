import styles from  './index.module.css';

export const index = () => {
  return (
      <div>
        <div className = {styles.container}>
          <h1 className = {styles.title}>Reference Page</h1>
          <div className = {styles.b}>
          <button className = {styles.button}><a href = "/signup">
            Plan of Work Log
            </a>
          </button>
          <button className = {styles.button}><a href = "/signup">
            Student Copyright Checklist
            </a>
          </button>
          </div>
          <p className = {styles.subtitle}>
          As stated within the Regulations for the Webmaster event in the TSA High School Compeititve
          Events Guide for the 2024 and 2025 National TSA Conference, no pre-built templates, themes, 
          tools, or sites were used in the creation of this website. During the creation of this website,
          online sources were utilized to provide visual images to enhance user experience. 
          Outside resources are credited and listed below.
          </p>
          <h1 className = {styles.title}>Sources</h1>
          <p className = {styles.subtitle}>
          Kealoha, Rezel. "Mushroom Sisig." Rezel Kealoha, 18 Aug. 2024,
          rezelkealoha.com/mushroom-sisig. <br /><br />
          Jeeca. "Filipino Crispy Tofu Sisig (Vegan)." The Foodie Takes Flight, 18 May 2022,
thefoodietakesflight.com/crispy-tofu-sisig. <br /><br />
"Filipino Mushroom Sisig (Vegan)." The Foodie Takes Flight, 2 Nov. 2021,
thefoodietakesflight.com/filipino-mushroom-sisig. <br /> <br />
            "8 Vegetarian and Vegan Youtube Channels That Make Plant-Based Cooking Easy." Gotham Magazine, 14 May 2024,
              gothammag.com/plant-based-vegetarian-vegan-youtube-recipes <br /> <br />
Walterhouse, Ashley. "Easy Jackfruit Tacos." Fit Mitten Kitchen, 10 Sept. 2024,
www.fitmittenkitchen.com/jackfruit-tacos. <br /> <br />
Yum, Maya. "Chinese Eggplant Stir Fry." Wholesome Yum, 8 Aug. 2024,
www.wholesomeyum.com/chinese-eggplant. <br /> <br />
"Vegan Butter Chickpeas (Indian Butter Chicken-Inspired)." The Foodie Takes Flight, 19
Oct. 2022, thefoodietakesflight.com/vegan-butter-chickpeas. <br /> <br />
Lainey. "Atsara (Pickled Green Papaya)." Simply Bakings, 26 Jan. 2025,
simplybakings.com/atsara. <br /> <br />
ImmaculateBites. "Cassava Cake." Immaculate Bites, 28 Apr. 2021,
www.africanbites.com/cassava-cake. <br /> <br />
Kelly. "How to Make Peanut Butter: EASY Step-by-Step Recipe." Life Made Sweeter, 30
Sept. 2019, lifemadesweeter.com/homemade-peanut-butter. <br /><br />
Secrets, Kusina. "Authentic Ube Kalamay Recipe." Kusina Secrets, 12 Feb. 2025,
kusinasecrets.com/authentic-ube-kalamay-recipe. <br /> <br />
"Halo-Halo Dessert." The Spruce Eats, 28 Dec. 2022,
www.thespruceeats.com/halo-halo-5409582. <br /> <br />
SimpleDesign. Farm Store House Naive. Canva, n.d. <br /><br />
Nara Mochi. Philippine Sun Flag Symbol. Canva, n.d. <br /> <br />
Sidadong Design. Location Pin Icon. Canva, n.d. <br /> <br />
Flowicon. Medal Outline Icon. Canva, n.d. <br /> <br />
Yuliang11. Lumpia Spring Rolls. Canva, n.d. <br /> <br />
Liudmyla. Homemade Filipino Adobo. Canva, n.d. <br /> <br />
Studio Philippines. Halo Halo in Tall Glass. Canva, n.d. <br /> <br />
Heyrabbiticons. Recycle Signage Illustration. Canva, n.d. <br /> <br />
M. Wallflower. Lineless Detailed Archetype. Canva, n.d. <br /> <br />

          </p>
          <h1 className = {styles.title}>Software</h1>
          <p className = {styles.subtitle}>Our website was made with the React library and NextJs framework. It is hosted on Vercel. OAuth provided by Google.</p>
        </div>
       </div>
  )
}


export default index;
