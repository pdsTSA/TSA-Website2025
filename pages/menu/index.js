import styles from "@/styles/Menu.module.css";
import Image from "next/image";

export const index = () => {
  return (
      <>
        <section className={styles.hero}>
          <div className={styles.heroTextWrapper}>
            <p className={styles.title}>MENU</p>
            <p className={styles.subtitle}>BUILD-YOUR-OWN-BOWL</p>
          </div>
        </section>

        <section className={styles.sectionProteinBases}>
          <article className={styles.articleProteinBases}>
            <p className={styles.articleTitle}>Protein Choices</p>
            <div className={`${styles.informationContainer} ${styles.right}`}>
              <div>
                <p>Tofu Tocino <span>$4.99</span></p>
                <p>Sweet and smoky tofu, marinated in pineapple
                juice, soy sauce, and annatto, then pan-fried.</p>
              </div>
              <Image className={styles.articleProteinBaseImageRight} src="/MenuImages/TofuTocino.png" width={531} height={799} />
            </div>

            <div className={`${styles.informationContainer} ${styles.left}`}>
              <div>
                <p> Mushroom Sisig <span>$4.79</span></p>
                <p>Crispy mushrooms with onions, chili, and
                calamansi, served sizzling.</p>
              </div>
              <Image className={styles.articleProteinBaseImageLeft} src="/MenuImages/MushroomSisig.png" width={537} height={799} />
            </div>

            <div className={`${styles.informationContainer} ${styles.right}`}>
              <div>
                <p>Jackfruit Adobo <span>$5.49</span></p>
                <p>Langka (Young Unripe Jackfruit) braised in soy sauce, vinegar, garlic, and bay leaves.</p>
              </div>
              <Image className={styles.articleProteinBaseImageRight} src="/MenuImages/JackfruitAdobo.jpg" width={336} height={192} />
            </div>

            <div className={`${styles.informationContainer} ${styles.left}`}>
              <div>
                <p>Eggplant Bisteak <span>$5.29</span></p>
                <p>Eggplant simmered in soy-calamansi sauce with
                caramelized onions.</p>
              </div>
              <Image className={styles.articleProteinBaseImageLeft} src="/MenuImages/EggplantBistek.jpg" width={533} height={800} />
            </div>

            <div className={`${styles.informationContainer} ${styles.right}`}>
              <div>
                <p>Chickpea Kaldereta <span>$4.59</span></p>
                <p>A hearty and flavorful tomato stew with chickpeas, potatoes, and bell peppers.</p>
              </div>
              <Image className={styles.articleProteinBaseImageRight} src="/MenuImages/ChickpeaKaldereta.png" width={800} height={800} />
            </div>
          </article>

          <br />

          <article className={styles.articleProteinBases}>
            <p className={styles.articleTitle} >Bases</p>
            <ul>
              <li className={styles.baseItem}><span>Steamed Jasmine Rice</span> <span>$3.99</span></li>
              <li className={styles.baseItem}><span>Pako Salad</span> <span>$3.49</span></li>
              <li className={styles.baseItem}><span>Pandan Coconut Rice</span> <span>$3.79</span></li>
              <li className={styles.baseItem}><span>Brown Rice</span> <span>$4.49</span></li>
              <li className={styles.baseItem}><span>Pancit Canton (Wheat Noodles)</span> <span>$5.29</span></li>
            </ul>
          </article>
        </section>

        <section className={styles.sectionToppingSnacks}>
          <article className={styles.articleToppingSnacks}>
            <div className={`${styles.articleToppingSnacksTextContainer} ${styles.toppingSnacksLeft}`}>
              <p className={styles.articleTitle}>Toppings & Extras </p>
              <ul>
                <li className={styles.toppingItem}><span>Atsara (Pickled Papaya)</span> <span>$1.79</span></li>
                <li className={styles.toppingItem}><span>Crushed Peanuts</span> <span>$0.99</span></li>
                <li className={styles.toppingItem}><span>Fried Garlic Bits</span> <span>$1.49</span></li>
                <li className={styles.toppingItem}><span>Chili Flakes</span> <span>$2.29</span></li>
                <li className={styles.toppingItem}><span>Banana Ketchup Drizzle</span> <span>$1.29</span></li>
                <li className={styles.toppingItem}><span>Vegan Chicharon</span> <span>$0.79</span></li>
              </ul>
            </div>
            <div className={styles.articleToppingSnacksImageContainer}>
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/PickledPapaya.png" width={554} height={554} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/CrushedPeanuts.png" width={800} height={800} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/VeganChicharon.png" width={640} height={800} />
            </div>
          </article>

          <article className={styles.articleToppingSnacks}>
            <div className={styles.articleToppingSnacksImageContainer}>
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/HaloHalo.png" width={800} height={533} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/CassavaCake1.jpg" width={275} height={183} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/CassavaCake.jpg" width={225} height={225} />
            </div>
            <div className={`${styles.articleToppingSnacksTextContainer} ${styles.toppingSnacksRight}`}>
              <p className={styles.articleTitle}>Snacks & Desserts </p>
              <ul>
                <div>
                  <li className={styles.snackItem}><span>Halo-Halo</span> <span>$7.99</span></li>
                  <li>Shaved ice with coconut jelly, sweetbeans, jackfruit, and ube, topped with coconut milk</li>
                </div>
                <div>
                  <li className={styles.snackItem}><span>Cassava Cake</span> <span>$5.99</span></li>
                  <li>Sweet and chewy cassava with coconut milk and a caramelized top </li>
                </div>
                <div>
                  <li className={styles.snackItem}><span>Kalamay</span> <span>$5.49</span></li>
                  <li>Sticky rice cake with brown sugar and coconut</li>
                </div>
              </ul>
            </div>
          </article>

          <article className={styles.articleToppingSnacks}>
            <div className={`${styles.articleToppingSnacksTextContainer} ${styles.toppingSnacksLeft} ${styles.articleDrinksTextContainer}`}>
              <p className={styles.articleTitle}>Drinks</p>
              <ul>
                <div>
                  <li className={styles.snackItem}><span>Manilla Milkshake</span> <span>$7.99</span></li>
                  <li>Ice cream, milk, and vanilla beans straight from the Phillipines</li>
                </div>
                <div>
                  <li className={styles.snackItem}><span>Melon Juice</span> <span>$5.99</span></li>
                  <li>Melon Juice Water, cane sugar, and shredded ripe cantaloupe flesh topped with cream and ice</li>
                </div>
                <div>
                  <li className={styles.snackItem}><span>Calamansi Juice</span> <span>$5.49</span></li>
                  <li>Filipino-style lemonade made with calamansi, sugar, and water</li>
                </div>
                <li className={styles.snackItem}><span>Fountain Drink</span> <span>$5.49</span></li>
              </ul>
            </div>
            <div className={styles.articleToppingSnacksImageContainer}>
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/ManillaMilkshake.png" width={554} height={554} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/MelonJuice.png" width={800} height={800} />
              <Image className={styles.articleToppingSnacksImage} src="/MenuImages/CalamansiJuice.png" width={640} height={800} />
            </div>
          </article>
        </section>
      </>
  )
}


export default index;
