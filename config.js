var config = {
     style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYW50aWV2aWN0aW9ubWFwIiwiYSI6ImNtYWtsYzdycTE0bzAyaXExdGd1bngwcWEifQ.oeMi-V4Y10FKFbSK9_hgTg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, 
    auto: false,
    title: 'Libertarian Tech Zones',
    subtitle: 'Visualizing Libertarian Tech Zones Around the World',
    byline: 'By Brian Bui and Edwin Bai with the <a href="https://www.antievictionlab.org">Anti-Eviction Lab</a> at the University of Washington under the direction of Erin McElroy',
    footer: 'Anti-Eviction Lab at the University of Washington <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'california-forever',
            alignment: 'left',
            hidden: false,
            title: 'California Forever - Solano County, California',
            image: './assets/01_Building-complete-neighborhoods_IMAGE-CREDIT_-Designed-by-SITELAB-urban-studio_CMG.webp',
            description: `California Forever is a project located in Solano County, California. Managed by California Forever Inc., which is owned by Jan Sramek, a Czech entrepreneur living in the US, the project seeks to build a walkable city of 400,000 people on 17,500 acres of what is currently farmland. Announced in 2024, California Forever has since purchased 50,000 acres of farmland in Solano County, with plans to rezone the land to accommodate the new city, which requires approval by voters in Solano County through a ballot initiative. California Forever pulled its initiative from the 2024 ballot, and plans to try again in the 2026 ballot once it publishes an EIR and development agreement. The main people involved are Nat Friedman, Michael Moritz, Mark Andreessen, and Patrik Collision. The project faces challenges with financial strategy, environmental impacts, and does not clearly benefit the residents of Solano County. Language in the initiative also greatly reduces the ability of the County and the general public to provide input on future projects in the plan area. Most of the land acquired is farmland, which displaces farmworkers and farmland that make up a substantial portion of Solano County, significantly affecting the local agricultural economy.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.archpaper.com/2024/01/new-renderings-details-california-forever-800-million-city-silicon-valley/" target="_blank" rel="noopener noreferrer">The Architects Newspaper (SITELABS/Courtesy California Forever)</a>
                </small>`,
            location: {
                center: [-121.795040, 38.190620],
                zoom: 10.5,
                pitch: 70,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            markers: [
                { coordinates: [-121.795040, 38.190620] }
            ], 
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'prospera',
            alignment: 'right',
            hidden: false,
            title: 'Prospera - Roatan, Honduras',
            image: './assets/prospera.avif',
            description: `Founded by Erick Brimen, CEO of Honduras Prospera LLC., Prospera is a Zone for Employment and Economic Development(ZEDE) on the island of Roatan in Honduras. A right-wing narco government passed legislation in 2013 legalizing such zones with the idea of creating special economic zones with high autonomy to increase economic growth in Honduras, and Prospera began construction in 2021. Located on 58 acres, Prospera is based on the principles of economic freedom and “right to work”, with low taxes, no social security, and adoption of cryptocurrency as legal tender. The main people involved are Balaji Srinivasan, Peter Thiel, and Marc Andreessen. Neighboring residents on the island have been displaced and are unhappy with the project due to its capacity to expand without consulting them. Currently, Prospera is suing Honduras for over $10 billion after the Supreme Court ruled all ZEDEs to be unconstitutional. It currently has few residents, and its offices have been shut down by the Roatan mayor.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.prospera.co/en" target="_blank" rel="noopener noreferrer">Prospera</a>
                </small>`,
            location: {
                center: [-86.46271, 16.37286],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            markers: [
                { coordinates: [-86.46271, 16.37286] }
            ], 
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'city-campus',
            alignment: 'left',
            hidden: false,
            title: 'City Campus - San Francisco',
            image: './assets/city-campus-main.jpg',
            description: `Founded in 2024 by Adi Melamed, Patricia Mou, Jason Benn, and Thomas Schulz, City Campus plans to convert 1 sq mi of land in Hayes Valley and Alamo Square into a libertarian tech zone. The project plans to combine all neighboring properties in the area by knocking down walls between properties. City Campus is divided into three subprojects: Solaris, Neighborhood SF, and The Commons SF. The main individuals are Jason Benn, Balaji Srinivasan, and Eric Wu–Srinivasan has explicitly stated that Democrats will be excluded from such tech cities. Currently, Solaris closed down in 2024, and its real estate has been put up for sale. Neighborhood SF has been on indefinite pause since 2024, and The Commons SF is established and is holding regular events
                <br><small class="image-credit">
                    Image credit: <a href="https://sfist.com/2024/04/30/tech-folk-propose-multigenerational-urban-campus/" target="_blank" rel="noopener noreferrer">SFIST</a>
                </small>`,
            location: {
                center: [-122.428855, 37.772985],
                zoom: 12.52,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-122.428855, 37.772985] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'starbase',
            alignment: 'right',
            hidden: false,
            title: 'Starbase - Bastrop County, Snailbrook - Cameron County',
            image: './assets/1-boca-chica-village-spacex-starbase-south-texas.jpg',
            description: `Elon Musk plans to create company towns called Snailbrook and Starbase, both of which are in Texas. Snailbrook is located in Bastrop County, next to Austin, and has been undergoing construction since 2021 with the goal of creating a libertarian tech city with 110 homes with low rent, mainly for Hyperloop employees. Musk has acquired 6,000 acres of land for the project, and has sought assurances from local government officials that the government will not impact the project. Another project called Starbase is located in Boca Chica, Texas, which primarily serves SpaceX employees. There have been concerns regarding the power Musk would have over his own city and how current residents may be displaced. Musk petitioned Cameron County in 2025 to begin an election that would make Starbase its own municipality. Musk is the main person involved.
                <br><small class="image-credit">
                    Image credit: <a href="https://starbasebrewery.com/pages/starbase-texas-map" target="_blank" rel="noopener noreferrer">Starbase Brewing</a>
                </small>`,
            location: {
                center: [-96.5, 28.5], 
                zoom: 6,               
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideDefaultMarker',
            markers: [
                { coordinates: [-97.18315047067445, 25.99057611992536], color: "#FF0000"},
                { coordinates: [-97.40539566161925, 30.154924825504786], color: "#0000FF" }
            
            ],
            onChapterEnter: [

            ],
            onChapterExit: [
            ]
        },
        {
            id: 'seasteading-institute',
            alignment: 'left',
            hidden: false,
            title: 'Seasteading Institute - Worldwide',
            image: './assets/seasteading-institute.jpg',
            description: `Conceptualized by Patri Friedman in the early 2000s, The Seasteading Institute(TSI) was founded on the idea of establishing autonomous mobile communities on seaborne platforms in international waters to avoid laws and regulations set by countries. TSI launched the floating city project in 2013 and met with French Polynesian officials in 2016 to sign an MOU regarding construction in their waters. TSI subsequently created “Blue Frontiers” to build and operate the prototype seazone; however, the French government backed out of the agreement in 2018, stating that the MOU was not a legal document and had expired by 2017. Currently, Blue Frontiers is still looking for a new host country for the project, and attempts to fundraise for the project have failed. TSI continues to work on nine other projects around the world.
                    <br><small class="image-credit">
                        Image credit: <a href="https://www.seasteading.org/about/" target="_blank" rel="noopener noreferrer">TSI</a>
                    </small>`,
            location: {
                center: [-79.8, 25.5],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: 'enableSpin',
            markers: [
                {coordinates: [121.9240, 11.9674]},
                {coordinates: [-79.8, 25.5]},
                {coordinates: [89.0, 5.0]},
                {coordinates: [80.3, 25.1]},
                {coordinates: [80.1347, 25.7368 ]},
                {coordinates: [123.1207, 49.2827]},
                {coordinates: [-79.9416, 9.3353]},
                {coordinates: [-63.0574, 18.2173]}
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'telosa',
            alignment: 'right',
            hidden: false,
            title: 'Telosa - US Western Desert',
            image: './assets/telosa.jpg',
            description: `Walmart CEO Marc Lore announced plans in 2021 to build a smart city in the US desert. The project is only in its planning phase, and hopes to host 5 million people by 2025 on 150,000 acres of land. The city is based on 15 minute principles, green energy, and Marc Lore’s concept of “equitism”, which itself is based on Green Growth. No money has yet been invested, but Bjarke Ingels will act as the architect on the project. Telosa continues to look for a spot to build and has narrowed to regions in Nevada, Arizona, and Utah, with plans to begin construction once land is secured.
                <br><small class="image-credit">
                    Image credit: <a href="https://newrepublic.com/article/164101/marc-lore-billionaire-telosa" target="_blank" rel="noopener noreferrer">The New Republic</a>
                </small>`,
            location: {
                center: [-114.0, 37.0],
                zoom: 5.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-114.0, 37.0] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'belmont',
            alignment: 'left',
            hidden: false,
            title: 'Belmont - West of Phoenix, AZ',
            image: './assets/belmont.jpg',
            description: `In 2017, Bill Gates purchased 24,800 acres of land west of Phoenix with the intent to build a smart city. Belmont is based on principles of high density, affordable housing, public transit, climate resilience, and autonomous vehicles. Gates plans to host a population of around 182,000 in 80,000 residential units, with thousands of acres dedicated to office space, industry, and green space. 13,300 acres are set aside for residential permits, meaning that if it is divided between 80,000 units, each unit may be less than 1/5th of an acre. There are issues with sourcing water, as Arizona is in a chronic drought, and there is not enough water to support even the existing population. The project does not have any notable individuals outside of Gates, and is currently stuck in planning as it struggles with finding a long-term source of water.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.idropnews.com/news/fast-tech/belmont-arizona-bill-gates-smart-city/55557/" target="_blank" rel="noopener noreferrer">iDrop News</a>
                </small>`,
            location: {
                center: [-112.8667, 33.4667],
                zoom: 9,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'stopSpin',
            markers: [
                { coordinates: [-112.8667, 33.4667] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'praxis',
            alignment: 'right',
            hidden: false,
            title: 'Praxis - Mediterranean',
            image: './assets/praxis.jpg',
            description: `Founded in 2019 by Dryden Brown, Charlie Callinan, and David Weinred, Praxis seeks to create a city in the Mediterranean with a planned population of 10,000 on 1000 acres. The city will be based on libertarian, Western-centric ideals with principles of racial exclusivity stemming from Julius Evola’s ideas of a society divided into 4 castes. Technology will be deregulated, cryptocurrency will be used as the primary currency, AI will supposedly act as a source of infinite labor, and food will be 3D printed. Zaha Hadid Architects is responsible for city design, and David Weinreb leads the development effort of the city. The project is backed by Peter Thiel, Patri Friedman, Balaji Srinivasan, and Joe Lonsdale. The project is still searching for a physical location, but it has an online community with thousands of members.
                <br><small class="image-credit">
                    Image credit: <a href="https://dmarge.com/luxury-lifestyle/tech-billionaire-ai-future-city" target="_blank" rel="noopener noreferrer">DMARGE</a>
                </small>`,
            location: {
                center: [18.0, 36.0],
                zoom: 5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [18.0, 36.0] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'greenland-freedom-city',
            alignment: 'left',
            hidden: false,
            title: 'Greenland Freedom City - Greenland',
            image: './assets/greenland-freedom-city.jpg',
            description: `In November 2024, Praxis co-founder Dryden Brown tweeted about how he attempted to purchase land in Greenland to host Praxis, but failed. There have been renewed efforts since the Trump administration to annex territory in Greenland, turning it into the site of a libertarian tech zone called Greenland Freedom City. Ken Howery, Trump’s pick for Denmark ambassador, raised the idea of promoting Greenland as a site for a freedom city based on libertarian ideals with minimal corporate regulations. Advocates claim that the city could become an AI hub, autonomous vehicles, space launches, and micro nuclear reactors. Brown claimed that Greenland was necessary to serve as a test run for Elon Musk’s settlement on Mars. The recent push for annexing Greenland may have been based on these ideas and influences, but ultimately, the project is a political dead end. The main people supporting it are Andreessen, Thiel, and Musk.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.popsci.com/technology/billionaire-freedom-city-greenland/" target="_blank" rel="noopener noreferrer">Popular Science</a>
                </small>`,
            location: {
                center: [-42.1736914, 69.6354163],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-42.1736914, 69.6354163] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twitter-tax-break-zone',
            alignment: 'right',
            hidden: false,
            title: 'Twitter Tax Break Zone - San Francisco',
            image: './assets/twitter-tax-break.jpg',
            description: `In 2011, San Francisco instituted a policy that for any company that relocated to mid-Market, their payroll tax would be waived for 6 years for all new jobs created. This was done to prevent Twitter from leaving the city for places elsewhere in the Bay where taxes were lower and the cost of labor was less expensive. The influx of tech companies led to rising rent prices and gentrification, while private tech shuttles utilized public transportation infrastructure without paying a fee for their use. Companies in the zone were required to create community benefit agreements, but many companies under-promised or didn’t follow through with commitments due to a lack of enforcement mechanisms. Mid-Market was revitalized, until COVID when work from home became the norm for tech companies. Currently, mid-Market struggles with high rates of vacancy, and small businesses continue to struggle since they do not benefit from tax breaks, unlike large corporations. The tax break ended in 2019, with no members of the Board of Supervisors acting to save it.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.sfgate.com/business/article/Companies-avoid-34M-in-city-taxes-thanks-to-6578396.php" target="_blank" rel="noopener noreferrer">SFGATE</a>
                </small>`,
            location: {
                center: [-122.4, 37.79],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-122.4, 37.79] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'silicon-docks',
            alignment: 'left',
            hidden: false,
            title: 'Silicon Docks - Dublin, Ireland',
            image: './assets/silicon-docks.jpg',
            description: `From 1999-2001, the Ireland Industrial Development Authority encouraged growing tech companies to move to Dublin, leading to a high concentration of large tech companies around the Grand Canal Dock. A main draw Ireland had to offer was a substantially lower corporate tax rate compared to the rest of Europe: 12.5% vs taxes that are generally over 20% in other European countries. The Grand Canal Docks were originally a working class community, but the influx of tech corporations has pushed out local residents. The influx of well-paid tech workers led to a massive increase in rents, resulting in a housing crisis in Dublin which eventually led tech firms to look elsewhere in Ireland with lower costs of living. The number of people in emergency homeless accommodations reached a record high of 15,000 at the end of 2024. The shift to work from home has also left Silicon Docks empty during the day, partly due to attempts by the developers of the Docks to physically prevent existing communities and the general public from accessing new developments.
                <br><small class="image-credit">
                    Image credit: <a href="https://brusselsresearchgroup.org/dublins-silicon-docks/" target="_blank" rel="noopener noreferrer">Brussels Research Group</a>
                </small>`,
            location: {
                center: [-6.2377, 53.35],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-6.2377, 53.35] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sidewalk-labs',
            alignment: 'right',
            hidden: false,
            title: 'Sidewalk Labs - Toronto, Canada',
            image: './assets/sidewalk-labs.jpg',
            description: `In 2017, Waterfront Toronto issued a request for proposals to solicit bids to develop a 12 acre, mixed-use project called Quayside development. Sidewalk labs, originally a subsidiary of Alphabet before becoming a subsidiary of Google, won the bid, and launched the Sidewalk Toronto project with the intention of creating people-centered neighborhoods. Sidewalk Labs proposed optimizing roads for self-driving vehicles, and creating digital lawyers of the urban system. The digital lawyer would manage a data repository, which stored urban data, that could be disseminated and sold to third parties. Sidewalk Labs stated that the urban data would be cleared of personal information, but a study found that such data could be restored to its original state if the dataset was associated with other datasets that did include personal data. Community backlash surrounding data privacy and collection led to the abandonment of Sidewalk Labs by Google in 2020, which cited COVID as the reason. Since then, Waterfront Toronto has begun working with Dream Unlimited and Great Gulf Group to redevelop the area, with construction expected to start in 2025 and completed by 2034.
                <br><small class="image-credit">
                    Image credit: <a href="https://www.architecturalrecord.com/articles/15573-the-end-of-sidewalk-labs" target="_blank" rel="noopener noreferrer">Architectural Record</a>
                </small>`,
            location: {
                center: [-79.3645521337776, 43.646143417333555],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            markers: [
                { coordinates: [-79.3645521337776, 43.646143417333555] }
            ],
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
