exports.seed = function (knex) {

  return knex("coffees").insert([{
      name: "UK - Costa Rica Reserve Coffee",
      description: "Costa Rica Reserve coffee beans are Strictly Hard Bean, meaning they are grown at elevations of 3,900ft or more. The high altitude slows the growth of the coffee trees, causing the cherries to mature much slower; the result is dense coffee cherries containing beans packed with rich flavor. Home to many micro mills, Costa Rica has devoted farmers who take pride in ensuring that their plantations only produce high-quality yields. This gourmet coffee is one of the finest coffees that Costa Rica has to offer.",
      price: 100,
      weight: "750 gr",
      picture: "costa-rica1.jpg",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Ethiopia Yirgacheffe Coffee",
      description: "Grown on the rolling hills of southwestern Ethiopia, Yirgacheffe gourmet coffee is now known as Ethiopia's Crown and Glory because of its high quality and distinctive flavor. For decades, this Ethiopian coffee has been meticulously hand sorted and harvested. Each batch is wet processed to improve its acidity and enhance its clean floral notes. Full bodied with mild earthy flavors, this coffee is truly at its finest when we roast it medium-light; it produces a unique fragrance and a lingering intensified finish. It boasts a sweet, rich, and smooth flavor making it a strong contender for the best African coffee in the world.",
      price: 110,
      weight: "750 gr",
      picture: "ethiopia.jpg",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Tanzania Peaberry Coffee",
      description: "Mount Kilimanjaro, a dormant volcano in northern Tanzania, is the highest peak in Africa at 19,330 feet. Kilimanjaro's lower slopes provide fertile soil to grow Tanzania Peaberry Coffee, and the climate provides excellent conditions for coffee trees to thrive. Grown and harvested on the slopes of Mount Kilimanjaro near the Kenyan border, this gourmet African coffee displays many of the characteristics of Kenyan coffee, though much lighter in acidity.Peaberry beans are small, round coffee beans with a cleft in the middle; they have a richer flavor than their oval- shaped counterparts, often rendering a livelier cup with a full body and distinguished aroma. Peaberry coffee is rare; only 10% of all coffee develops with this characteristic. As a result, peaberry coffee beans must be hand-sorted from the rest.",
      price: 90,
      weight: "750 gr",
      picture: "tanzania.jpg",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Sumatra Black Satin Coffee",
      description: "This Sumatran coffee is as rich in flavor as it is in history. Amazingly, this coffee was once thought to be lost to the world; it took over 100 years for this prized cultivar to be rediscovered because it was hidden amongst the lush jungles of Sumatra. Since then, these ancient Arabica trees have been replanted near Lake Takengon in West Sumatra, which is now world-famous for its production of gourmet coffee.Sumatra 'Black Satin' coffee is darkly roasted to produce a full and heavily bodied cup with mild, earthy undertones. Low in acidity and smooth, this dark roast coffee has a smoky aroma and a slight black pepper finish. ",
      price: 100,
      weight: "750 gr",
      picture: "sumatra.jpg",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Jamaica Blue Mountain Estate Coffee",
      description: "100% pure certified Jamaica Blue Mountain Estate Coffee, Grade 1 is known throughout the world as one of the best gourmet coffees. The standard of quality for Jamaica Blue Mountain Coffee is incomparable with any other coffee because of the stringent and precise regulations; this is the reason that this particular gourmet coffee is considered one of the most exceptional coffees in the world.High-grown in a precise geographical location and under specific conditions, these Arabica beans have earned their certification as 100% Pure Jamaica Blue Mountain Estate. The amount of coffee produced is limited due to the amount of production space, and the demand is extremely high because of its exclusively rich taste and characteristics.Jamaica Blue Mountain Estate Coffee has a full body that is well-balanced; it delivers subtle acidity and a smooth chocolate finish leaving not a single trace of bitterness.",
      price: 100,
      weight: "750 gr",
      picture: "IRISH.png",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Kenya AA Coffee",
      description: "Kenya AA coffee, which is grown at elevations of 4,900 to 6,800 feet, is nearing the top of the list of the world's finest Arabica bean coffees. When it comes to coffee production, Kenya has a reputation for absolute excellence, especially because it lies near the region where coffee beans originated.cThese gourmet coffee beans are grown on volcanic soils and are wet-processed; the beans are harvested, immediately removed from the cherries, and washed to remove the excess pulp. This process causes the coffee to have a full body of flavor with a heavy acidity. It also displays a gentle floral aroma as well as berry and citrus notes. ",
      price: 110,
      weight: "750 gr",
      picture: "kenya.jpg",
      size: "large",
      category_id: 4
    },
    {
      name: "UK - Earl Grey Tea",
      description: "According to legend, this flavored tea received its name from Charles Earl Grey, a man who served as Prime Minister during the 1830s under King William IV. It is said that it was given to Earl Grey as a gift from a Chinese Mandarin man in response to Grey's men saving the man's drowning son.Flavored with the oil of bergamot, a pear-shaped citrus that is grown near the Mediterranean, Earl Grey tea is a blended black tea that has an exotic complexity and aroma that is both distinctive and delightful.",
      price: 70,
      weight: "450 gr",
      picture: "earlgrey.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Iced Tea Blend",
      description: "Taste the difference that authentic loose-leaf tea makes. Our Iced Tea is a delicious blend of loose-leaf black tea that surpasses the flavors of the traditional store-bought teas. Whether you need an iced tea to cool you during the summer, or you would simply like to enjoy a steaming cup year-round, this is the classic iced tea blend for you.Brew the Iced Tea Blend using a French Press or teapot designed for loose-leaf teas. Delight in the beauty of the tea as it unfurls, and enjoy the smooth and luxurious flavor of an excellent beverage that will treat you to a little indulgence. ",
      price: 40,
      weight: "450 gr",
      picture: "iced-tea.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Masala Chai Tea",
      description: "Indulge in one of the most scrumptious Chai Teas available--Masala Chai Tea! This Broken Pekoe-grade chai features loose-leaf black tea from India and Kenya. The full-bodied tea enhances the South Indian masala spices, and the cardamom notes in the finish stand out from the lively ginger. With just a little milk and sugar to bring the flavors out, Masala Chai Tea becomes one of the best Chai Teas you'll ever experience!Chochin is the name of an ancient city in southern India near the site where this tea is grown. It's been under the rule of many different groups, including the famous Kublai Khan. The Portuguese and Dutch added a European flair to the area, but they've never lost their Indian roots. However, the cosmopolitan nature of the city is reflected in its tea. There are so many flavors that blend together to create one incredible whole. Try Masala Chai Tea today! ",
      price: 60,
      weight: "450 gr",
      picture: "masala.png",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Formosa Oolong Tea",
      description: "Oolong tea gets its name from the Chinese word wu-lung, meaning 'Black Dragon', because it represents a cross between green and black tea.Formosa Oolong teas are produced in Taiwan, and they yield the largest quantity of Oolong in the world. While still growing, the leaves are sometimes intentionally and slightly bruised to stimulate the fermentation process. Tea artisans that are waiting for the perfect blend of red and green leaves watch over them carefully. Leaves are then plucked as the sun rises and are laid out to wither in the hot sun. The leaves are expertly graded and passed through strict quality control for packaging.Gaining more and more popularity in the US, Formosa Oolong tea might possibly turn out to be your new favorite! This full-bodied, refreshing tea has a fruity-sweet aroma and flavor to match. Give your body something rejuvenating while enjoying a flavorful cup of tea.",
      price: 65,
      weight: "450 gr",
      picture: "formosa2.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Rooibos 'African Red Bush' Herbal Tea",
      description: "Rooibos is an Afrikaans word meaning 'Red Bush'. With a broom-like exterior and reddish needle-shaped leaves, Rooibos herbal tea creates a very bright red appearance when steeped; hence, this is how it received its name.High in antioxidants and naturally delicious, South Africans have enjoyed the benefits of the African Red Bush Tea because it refreshes your senses. You don't need to add any milk or sweeteners to this already flavorful tea; with hints of nuttiness and natural sweetness, Rooibos African Tea is perfect as it is. Since it is also caffeine-free, it is perfect for those who are sensitive to caffeine.Treat yourself to the goodness of Rooibos African Red Bush Tea; you will not have regrets!",
      price: 95,
      weight: "450 gr",
      picture: "rooibos.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Sencha Kyoto Cherry Rose Tea",
      description: "Make every day a good day with Sencha Kyoto Cherry Rose green tea. This incredible blend of the best Japanese green tea will serenade your senses and help you relax. Just imagine watching the sunrise with a warm cup of this tea in your hands. As the sweet cherry aroma wafts through the room, you'll find yourself at peace and ready to take on whatever the day may bring.Refreshing, rejuvenating, and simply delicious, Sencha Kyoto Cherry Rose green tea is a wonderful import from Japan. The cherry flavoring complements the grassy taste of the tea, giving it a very green and natural flavor. Let the tea linger on your taste buds and you'll notice even more of the amazing cherry flavor. We know that it'll become one of your favorite green teas; it's certainly one of ours!",
      price: 80,
      weight: "450 gr",
      picture: "sencha.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Apricot Supreme Tisane",
      description: "This Supreme Apricot Tisane tea is the sweetest apricot flavor around. If you love the sweet fruit with its soft fragrance and delicious taste, you will love the fresh apricot, rosehips, hibiscus leaves, and marigold petals.With a fresh, rejuvenating flavor, the Supreme Apricot Tisane is perfect hot or cold. If you like the benefits of drinking tea and you’re looking for a warm, delicious flavor – the Supreme Apricot tea is a succulent treat that will give you all the health benefits with the entire sweet, succulent flavor. ",
      price: 55,
      weight: "450 gr",
      picture: "apricot.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "UK - Blueberry Flavored Tea",
      description: "Blueberry flavored tea offers the tangy-tart sweetness we all love with our Chinese black tea and calendula petals for that perfect cup of tea. The fruity aroma of blueberry flavored tea is sure to put a spring in your step and a smile on your face. Sun-kissed flavored goodness in every freshly brewed cup will keep you coming back for more!",
      price: 70,
      weight: "450 gr",
      picture: "blueberry.jpg",
      size: "medium",
      category_id: 3
    },
    {
      name: "Espresso",
      description: "Espresso is a form of concentrated coffee that is usually served as shots. All espresso based drinks have three common ingredients: espresso, steamed milk and foam. The process of making espresso is called pulling a shot in which hot water is pressurized and poured over finely grounded coffee beans. All espresso have cream in them which is the froth over it in brownish-red color and gives the rich flavor and smell to the coffee.Aforementioned, espresso is served in shots and regardless of how big or small the size be, they are served in demitasse cups that hold 2 to 4 ounces of espresso per serving. It usually takes 3 to 5 minutes to make an espresso shot, made with finely grounded coffee beans and lukewarm water. The coffee beans are finely grounded and then some amount of water is added to it to strengthen the taste of the coffee.",
      price: 55,
      weight: "50 ml",
      picture: "ESPRESSO.png",
      size: "small",
      category_id: 5
    },
    {
      name: "Caffe Latte",
      description: "Cafe latte is made with espresso and steamed milk of which, one third is espresso and two third is steamed milk and also consists of at least a centimeter of foam. It is an Italian coffee-based drink that is now enjoyed by people worldwide and is similar to the French drink cafe au lait. In Italian, cafe latte means coffee and milk, which defines the purpose of how it is prepared.Latte is served in a 8 ounce glass or cup that consists of a shot of espresso which will be about 30 ml and then poured over with steamed milk and thick foam of about half an inch on the top layer. The ratio of coffee to steamed milk in the mixture is 1:1. Latte tastes similar to a cappuccino with the only difference that the amount of milk foam in a cappuccino is about three-fourth inch. It takes approximately 5 minutes to brew a cup of cafe latte.",
      price: 50,
      weight: "150 ml",
      picture: "LATTE.png",
      size: "small",
      category_id: 5
    },
    {
      name: "Frappuccino",
      description: "Frappuccino is a signature drink of Starbucks but is now available in almost all local coffee shops. The essential ingredients in a frappuccino are ice, espresso, whole milk, and flavored syrup. It takes somewhere between 5 to 10 minutes to prepare it. The best part about this drink is that it is topped with a large and thick whipped cream, adding the right amount of sweetness to this drink.To brew frappuccino, grind the coffee beans finely and let the grounded coffee cool for sometime at room temperature. After it has cooled down, add sugar, milk and flavored syrup in the blender as per your taste preference and mix it for about 20 seconds. Then add ice to it and pour it in a glass or tall cup and add whipped cream to it if you want to.",
      price: 50,
      weight: "250 ml",
      picture: "FRAPUCCINO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Cafe Mocha",
      description: "Cafe mocha is a blend of hot chocolate and cappuccino that is prepared by mixing chocolate powder with an espresso shot, which is then mixed with skimmed steamed milk, foam and whipped cream. For this process, you will need one espresso shot, one spoon of chocolate powder, half a cup of steamed milk and 2-3 cm of microfoam.It takes approximately 15 minutes to prepare cafe mocha. Mocha is an American coffee drink which is similar to cafe latte with the only difference that chocolate syrup and/or chocolate powder is added to it. Alike cafe latte, cafe mocha is also an espresso based drink that is also referred to as hot chocolate. Sometimes they are also served with whipped cream and marshmallows and dusted with cinnamon powder.",
      price: 50,
      weight: "150 ml",
      picture: "MOCHA.png",
      size: "small",
      category_id: 5
    },
    {
      name: "Caramel Macchiato",
      description: "Caramel Macchiato is a signature drink of Starbucks that is similar to Frappuccino in taste and can be brewed in close to 5 minutes. It is perfect for parties or for an evening tea session. The ingredients needed to make caramel macchiato are cold milk, caramel sauce, 2 shots of strongly brewed espresso, vanilla syrup and lots of ice.Add the two espresso shots along with milk, vanilla syrup and ice in a cup and blend it to create a smooth texture. Once the texture is created, add caramel sauce on the top of it and your caramel macchiato will be prepared. If you want to make three layers in the macchiato, add cold milk and foam on top of the espresso and then swirl the cup a few times to mix the espresso with the milk.",
      price: 50,
      weight: "250 ml",
      picture: "MACCHIATO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Turkish Coffee",
      description: "Turkish coffee, also known as Oriental coffee, is a popular beverage that is enjoyed throughout the Middle East. It is made in a long handled pot which is mostly made of copper or brass and is called cezve or ibrik. Ibrik or cezve is usually a long handled pot that comes with a narrow neck and a wider bottom. One rule of thumb for making this exotic drink is to ensure that your coffee is finely grounded – they cannot be coarse.Turkish people mostly use a brass grinder to grind the coffee beans which is expected to be as fine as caster sugar. This coffee is typically drunk from small cups, which is called Finjan. The coffee making process is only complete when the powder has fully settled at the bottom of the cup. A lot of people prefer using Arabica beans while brewing Turkish coffee but the choice of coffee beans is not really a matter of concern as long as it is medium roast since you have to roast it again through the process of brewing the coffee.",
      price: 50,
      weight: "90 ml",
      picture: "TURKISH-COFFEE.png",
      size: "small",
      category_id: 5
    },
    {
      name: "Americano",
      description: "Americano is a coffee drink that is brewed by adding hot water to espresso and giving it the same strength as that of an espresso shot but different in flavour from traditional coffee. How strong you prepare the americano depends on the number of espresso shots you add to it and also the quantity of hot water to it. In Italy, even filtered coffee is added in lieu of hot water with the espresso shot.It takes not more than 2-4 minutes to prepare americano and there is nothing much you need except espresso shots and hot water. Americano is a strong drink which might not be preferred by all so if you want to make the taste sweet you could also add sugar or some flavoured syrup to it depending on your taste. All espresso-based drinks usually use steamed or cold milk to them but the same is not the case with Americano as hot water is used in place of milk.",
      price: 50,
      weight: "250 ml",
      picture: "AMERICANO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Irish Coffee",
      description: "Irish coffee is a type of hot coffee that consists of whiskey, hot double espresso and sugar, topped with thick cream. You are supposed to drink it through the cream on the top. However, unlike most other coffee drinks, Irish coffee does not use whipped cream on the top. It is not however the same as Bailey’s coffee which replaces milk and cream with Bailey’s drink.Preparing Irish coffee takes close to 10 minutes. All you need to do is warm the glass and add whiskey to it and then mix it with sugar and hot double espresso. Once it is stirred well, add thick cream on the top as per your taste. This drink is usually served as a cocktail drink after dinner and usually in winter or autumn nights.",
      price: 50,
      weight: "250 ml",
      picture: "IRISH.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Cafe Cubano",
      description: "Cafe cubano is a Cuban coffee drink which is made out of espresso and is typical to the Cuban drinks. The espresso shot is used as the base for this drink and is then sweetened after brewing it. It twice stronger than the taste of Americano. This drink is used as a part of the morning ritual for the Cubans. It takes close to 10 minutes approximately to prepare this drink. All you need is an espresso shot, a cup of water and 4 to 6 teaspoons of sugar to brew it.Add sugar as per your taste with the espresso shot in a demitasse cup. Now brew it just like you normally brew coffee and let the sugar caramelize well in the drink. The coffee beans used in this drink has to be dark roasted ones.",
      price: 50,
      weight: "250 ml",
      picture: "CUBANO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Cappuccino",
      description: "Cappuccino is an Italian coffee drink that is made by mixing double espresso shots with steam milk foam. You could even use cream in place of milk in case you want to make the drink thick. The steamed milk is poured on top of the espresso shot and is then topped with whipped cream or thick milk foam. In a traditional cappuccino, the amount of espresso in the mix is 150 ml while the quantity of milk is 180 ml.It takes approximately 10-15 minutes to prepare a glass or cup of cappuccino. It is similar to cafe latte but is smaller in size, but the froth is thicker. To prepare a cup of cappuccino, add a shot of espresso in a cup and pour steamed milk over it. Now add up to 2-3 cm of foam over the steamed milk. You could sprinkle chocolate powder over it if you want, or even add whipped cream over it, depending on your preference in taste.",
      price: 50,
      weight: "250 ml",
      picture: "CAPPUCINO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Cortado",
      description: "Cortado is a much loved coffee drink in Portugal, Spain and Latin America, and is usually enjoyed as an afternoon drink. This drink is prepared with espresso and steamed milk, to decrease the level of acidity in it. This drink is similar to Macchiato but the milk that is used to prepare it is slightly cooler than macchiato, but the amount of milk in it is of the same level as that of macchiato. The amount of time required to prepare it is 3 minutes.To prepare Cortado is pretty simple! Put the espresso in the cup and add steamed milk to it and it will be ready to be served.",
      price: 50,
      weight: "250 ml",
      picture: "CORTADO.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Plain Coffee",
      description: "Nothing beats the taste of plain coffee. It is basic compared to all the other coffee drinks in this list but is the most widely consumed all over the world. It does not take more than 5 minutes to prepare coffee but brewing good old plain coffee is an art of its own. All you need is freshly and finely grounded coffee and water and mix them well in steam. You could choose to add milk too to it but that depends entirely on you.There is no ideal time, season or hour of the day to consume coffee – it can be enjoyed at any point of time. Some people cannot even start their day without having coffee. Plain coffee has a place of its own and no matter how fancy you try to make an espresso or coffee drink – it is unbeatable compared to a cup of plain and simple coffee.",
      price: 50,
      weight: "250 ml",
      picture: "PLAIN-COFFEE.png",
      size: "medium",
      category_id: 5
    },
    {
      name: "Special-Espresso",
      description: "The espresso, also known as a short black, is approximately one ounce of highly concentrated coffee. Although simple in appearance, it can be difficult to master.    Ratio: 1 shot of espresso    Cup: 2-4 oz. Espresso Cup",
      price: 75,
      weight: "75 ml",
      picture: "coffee-drinks_espresso.jpg",
      size: "small",
      category_id: 6
    },
    {
      name: "Special-Double-Espresso",
      description: "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.    Ratio: 2 shots of espresso    Cup: 3-4 oz. Demitasse Cup",
      price: 75,
      weight: "120 ml",
      picture: "coffee-drinks_double-espresso.jpg",
      size: "small",
      category_id: 6
    },
    {
      name: "Special-Red-Eye",
      description: "The red eye's purpose is to add a boost of caffeine to your standard cup of coffee.    Ratio: 1 shot of espresso + 6 oz. of drip brewed coffee    Cup: 8 oz. Coffee Mug",
      price: 75,
      weight: "235 ml",
      picture: "coffee-drinks_red-eye.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Black-Eye",
      description: "The black eye is just the doubled version of the red eye and is very high in caffeine.    Ratio: 2 shots of espresso + 6 oz. of drip brewed coffee    Cup: 8-10 oz. Coffee Mug",
      price: 75,
      weight: "235 ml",
      picture: "coffee-drinks_black-eye.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Americano",
      description: "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine.    Ratio: 1 shot of espresso + 3 oz. of hot water    Cup: 5-6 oz. Glass Coffee Mug",
      price: 75,
      weight: "200 ml",
      picture: "coffee-drinks_americano.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Long-Black",
      description: "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano.    Ratio: 2 shots of espresso + 3 oz. of hot water    Cup: 6-8 oz. Glass Coffee Mug",
      price: 75,
      weight: "250 ml",
      picture: "coffee-drinks_long-black.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Macchiato",
      description: "The word “macchiato” means mark or stain. This is in reference to the mark that steamed milk leaves on the surface of the espresso as it is dashed into the drink. Flavoring syrups are often added to the drink according to customer preference.    Ratio: 1 shot of espresso + 1 to 2 teaspoons of steamed milk    Cup: 3 oz. Glass Espresso Cup",
      price: 75,
      weight: "80 ml",
      picture: "coffee-drinks_macchiato.jpg",
      size: "small",
      category_id: 6
    },
    {
      name: "Special-Long-Macchiato",
      description: "Often confused with a standard macchiato, the long macchiato is a taller version and will usually be identifiable by its distinct layers of coffee and steamed milk.    Ratio: 2 shots of espresso + 2 to 4 teaspoons of steamed milk    Cup: 5 oz. Rocks Glass",
      price: 75,
      weight: "200 ml",
      picture: "coffee-drinks_long-macchiato.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Cortado",
      description: "The cortado takes the macchiato one step further by evenly balancing the espresso with warm milk in order to reduce the acidity.    Ratio: 1 shot of espresso + 1 ounce of warm milk + 1 cm of foam    Cup: 5 oz. Rocks Glass",
      price: 75,
      weight: "200 ml",
      picture: "coffee-drinks_cortado.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Breve",
      description: "The breve provides a decadent twist on the average espresso adding steamed half-and-half to create a rich and creamy texture.    Ratio: 1 shot of espresso + 3 oz. of steamed half-and-half + 1 cm of foam    Cup: 5-7 oz. Low Cup",
      price: 75,
      weight: "200 ml",
      picture: "coffee-drinks_breve.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Cappuccino",
      description: "This creamy coffee drink is usually consumed at breakfast time in Italy and is loved in the United States as well. It is usually associated with indulgence and comfort due to its thick foam layer and additional flavorings that can be added to it.    Ratio: 1-2 shots of espresso + 2 oz. of steamed milk + 2 oz. of foamed milk + sprinkling of chocolate powder (optional)    Cup: 6-8 oz. Cappuccino Mug",
      price: 75,
      weight: "235 ml",
      picture: "coffee-drinks_cappuccino.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Flat-White",
      description: "A flat white also originates from New Zealand and Australia and is very similar to a cappuccino but lacks the foam layer and chocolate powder. To keep the drink creamy rather than frothy, steamed milk from the bottom of the jug is used instead of from the top.    Ratio: 1 shot of espresso + 4 oz. of steamed milk    Cup: 6 oz. Glass Tumbler",
      price: 75,
      weight: "235 ml",
      picture: "coffee-drinks_flat-white.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Caffee-Latte",
      description: "Cafe lattes are considered to be an introductory coffee drink since the acidity and bitterness of coffee is cut by the amount of milk in the beverage. Flavoring syrups are often added to the latte for those who enjoy sweeter drinks.    Ratio: 1 shot of espresso + 8-10 oz. of steamed milk + 1 cm of foam    Cup: 14 oz. Mixing Glass",
      price: 75,
      weight: "450 ml",
      picture: "coffee-drinks_caffe-latte.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Mocha",
      description: "The mocha is considered to be like a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor and cuts the acidity of the espresso.    Ratio: 1 shot of espresso + 1-2 oz. of chocolate syrup/powder + 1-3 oz. of steamed milk + 2-3 cm of foam or whipped cream    Cup: 6-8 oz Irish Coffee Mug",
      price: 75,
      weight: "235 ml",
      picture: "coffee-drinks_mocha.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Vienna",
      description: "There are a few variations on the vienna, but one of the most common is made with two ingredients: espresso and whipped cream. The whipped cream takes the place of milk and sugar to provide a creamy texture.    Ratio: 1-2 shots of espresso + 2 oz. of whipped cream    Cup: 4-5 oz. Espresso Mug",
      price: 75,
      weight: "150 ml",
      picture: "coffee-drinks_vienna.jpg",
      size: "small",
      category_id: 6
    },
    {
      name: "Special-Affogato",
      description: "Affogatos are more for a dessert coffee than a drink you would find at a cafe, but they can add a fun twist to your menu. They are made by pouring a shot of espresso over a scoop of vanilla ice cream to create a sweet after-meal treat.    Ratio: 1-2 shots of espresso + 1 scoop of vanilla ice cream    Cup: 5-7 oz. Dessert Dish",
      price: 100,
      weight: "200 ml",
      picture: "coffee-drinks_affogato.jpg",
      size: "medium",
      category_id: 6
    },
    {
      name: "Special-Cafe-au-Lait",
      description: "The cafe au lait is typically made with french press coffee instead of an espresso shot to bring out the different flavors in the coffee. It is then paired with scalded milk instead of steamed milk and poured at a 50/50 ratio.    Ratio: 5 oz. french press coffee + 5 oz. scalded milk    Cup: 12 oz. Coffee Mug",
      price: 100,
      weight: "350 ml",
      picture: "coffee-drinks_cafe-au-lait.jpg",
      size: "large",
      category_id: 6
    },
    {
      name: "Special-Iced-Coffee",
      description: "Iced coffees become very popular in the summer time in the United States. The recipes do have some variance, with some locations choosing to interchange milk with water in the recipe. Often, different flavoring syrups will be added per the preference of the customer.    Ratio: 2 oz. drip coffee or espresso + 4 oz. of ice + 4-6 oz of milk or water + flavoring syrup to taste    Cup: 14 oz. Mixing Glass",
      price: 100,
      weight: "450 ml",
      picture: "coffee-drinks_iced-coffee.jpg",
      size: "large",
      category_id: 6
    },
    {
      name: "Cold-Brew",
      description: "Cold brew also known as cold press is basically a drink which is made by keeping grounded coffee emerged in cold water or water at room temperature for an extended period of time. In this process the coarse coffee beans are soaked in water for prolonged period say about 12 to 13 hours. Then the water is filtered to remove the ground coffee particles with the help of coffee paper filter, French press or felt, fine metal sieve or by using some other advanced machine. The resultant is a coffee concentrate which can be diluted with milk or water and served either hot or cold. Cold brew coffee usually tastes sweeter because of its low acidity content, the reason being that the coffee beans never come in contact with hot water.",
      price: 60,
      weight: "200 ml",
      picture: "1.PNG",
      size: "small",
      category_id: 2
    },
    {
      name: "Turkish-Coffee-Strong",
      description: "This consists of mixing the coffee grounds which has been made into fine powder with water and heating until the mixture boils. In the Mideast about four degrees of sweetness is used with this drink. Mix the required amount of sugar and keep on churning till the sugar is dissolved and coffee sinks to make a perfect drink.",
      price: 60,
      weight: "150 ml",
      picture: "2.PNG",
      size: "small",
      category_id: 1
    },
    {
      name: "Caffe Latte Small",
      description: "This is made by mixing a single shot of espresso with three parts of steamed milk. Add sugar to your latte to make it taste better. You can even add sponge cake, cookies or some bread pieces to turn your drink into a breakfast.",
      price: 60,
      weight: "100 ml",
      picture: "3.PNG",
      size: "small",
      category_id: 1
    },
    {
      name: "Espresso Black",
      description: "Espresso is a type of black coffee that is developed using espresso machines. This machine forces a small amount of steam and water ranging about 86 to 95 degree Celsius through a finely compacted and grounded coffee under immense pressure. The espresso machines where patented around 1901 and it spread slowly throughout the world. Coffee brewed with the help of espresso is usually denser then coffee brewed by other methods. The espresso which has been perfectly brewed will have thick golden brown foam on the drink’s surface. The quality of the creme can be determined when the sugar floats on it for few seconds prior to sinking. If the creme is good then it will surely float for few seconds. Espresso is known to be the foundation of different types of coffee drinks like latte, cappuccino, etc.",
      price: 60,
      weight: "60 ml",
      picture: "4.PNG",
      size: "small",
      category_id: 1
    },
    {
      name: "Cappuccino Steamed Milk",
      description: "This is one of the most popular types coffee drinks generally available in all types of restaurants and coffee shops. The original form of cappuccino is a mixture of steamed milk, espresso and milk froth is equal amounts. You can even sprinkle some grated dark chocolate or unsweetened cocoa powder on it to enhance its flavor. If made properly with accurate mixing of its content then it can be regarded as a luxurious drink.",
      price: 60,
      weight: "300 ml",
      picture: "5.PNG",
      size: "large",
      category_id: 1
    },
    {
      name: "Viennal Coffee",
      description: "Vienna coffee is a type of coffee made by topping coffee with whipped cream. This type of coffee drink is one of the favorite for the cream lovers. Add milk to the espresso content and then top it with a good amount of cream. You can then sprinkle cinnamon, chocolate or vanilla powder on it to enhance its taste. Austria generally has a number of coffee drinks with whipped cream.",
      price: 60,
      weight: "250 ml",
      picture: "6.PNG",
      size: "medium",
      category_id: 1
    },
    {
      name: "Caf' Mocha",
      description: "Caf mocha is either caffe latte or cappuccino with dark chocolate powder or chocolate syrup. This drink is very famous among youngsters. To add some twist to the drink you can top it with some whipped cream. Cream will enhance its flavor to a great extent. Sprinkle some chocolate powder or cinnamon to improve its look.",
      price: 60,
      weight: "350 ml",
      picture: "7.PNG",
      size: "large",
      category_id: 1
    },
    {
      name: "Double Caramel Macchiato",
      description: "This is another coffee types prepared and served by number of coffee houses. It is prepared by combining caramel, espresso and foamed milk. Many coffee houses even add vanilla to provide an extra flavor. You can add a twist to this drink by adding some caramel sauce to the drink. This type of coffee drink is very addictive and can provide you a heavenly java experience.",
      price: 60,
      weight: "400 ml",
      picture: "8.PNG",
      size: "large",
      category_id: 1
    },
    {
      name: "Original Coffee with Milk",
      description: "In this drink coffee syrup is mixed with milk. This drink is prepared by adding a sugared coffee concentrate to the milk, just similar to chocolate milk.",
      price: 60,
      weight: "250 ml",
      picture: "9.PNG",
      size: "medium",
      category_id: 1
    },
    {
      name: "Refreshing Brew",
      description: "Cold Brew Coffee is a smooth, cold beverage prepared by brewing freshly ground coffee in cold water. In the Cold Brew process, time makes up for heat.",
      price: 60,
      weight: "250 ml",
      picture: "cold brew.jpg",
      size: "medium",
      category_id: 2
    },
    {
      name: "Frappe",
      description: "Rich iced coffee made of espresso, milk and ice. Flavoured syrup can be added (about 300 ml). Mixed in a blender and served for example in a latte glass.",
      price: 60,
      weight: "300 ml",
      picture: "Frappe.jpg",
      size: "large",
      category_id: 2
    },
    {
      name: "Freakshake",
      description: "Basically anything that is blended/mixed/stirred and served with various topping that are very 'instagrammable'. Coffee Freakshakes are often made with cold brew coffee.",
      price: 60,
      weight: "350 ml",
      picture: "freakshake.jpg",
      size: "large",
      category_id: 2
    },
    {
      name: "Iced Latte",
      description: "Ice, cold milk and an espresso in a latte glass (about 300 ml), often mixed with some sugar or flavoured syrup. Served in a latte glass.",
      price: 60,
      weight: "350 ml",
      picture: "ice latte.jpg",
      size: "large",
      category_id: 2
    },
    {
      name: "Iced Mocha",
      description: "Cold Caffè mocha. Prepared like iced latte, but garnished and flavoured like caffè mocha (about 300 ml). Served in a latte glass.",
      price: 60,
      weight: "250 ml",
      picture: "Cafe_Mocha.jpg",
      size: "medium",
      category_id: 2
    }
  ]);
}