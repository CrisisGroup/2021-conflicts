var config = {
    style: 'mapbox://styles/daltonwb/ckxjavthg1mw514nomso4vc6a',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><img src="images/10ctw_logo.png" height="233" width="368" /><h1> </h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Comfort Ero and Richard Atwood<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support</strong>: Karim Lebhour<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'Wars in Ethiopia and Yemen. A looming humanitarian catastrophe in Afghanistan. Myanmar’s deepening political crisis. Global powers in standoffs over Ukraine, Taiwan and Iran’s nuclear program. Plus COVID-19 and the climate emergency’s looming menace.<br /><br />Flashpoints across the world look increasingly perilous, with hostile powers at odds, creating risks of miscalculations that could spin into disaster.<br /><br />Here are International Crisis Group’s 10 Conflicts to Watch in 2022.',
          location: {
            center: [12.234568, 23.422547],
            zoom: 2,
            pitch: 0,
            bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
              layer: '2021-conflicts',
              duration: 1000,
              opacity: 1
            },
            {
              layer: '2021-conflicts-labels',
              duration: 1000,
              opacity: 1
            },
            {
              layer: 'satellite',
              duration: 1000,
              opacity: 0
            }
          ],
          onChapterExit: [
            {
              layer: '2021-conflicts',
              duration: 1000,
              opacity: 0
            },
            {
              layer: '2021-conflicts-labels',
              duration: 1000,
              opacity: 0
            }
        ]
      },
        {
            id: 'UKR',
            alignment: 'left',
            hidden: false,
            title: '1. Ukraine',
            image: '',
            description: 'Dismissing the threat of a Russian invasion of Ukraine as a bluff would be a mistake. An open conflict could have terrifying repercussions, potentially sucking in NATO members.<br /><br />Western powers need to clarify what they would do to support Ukraine, spell that out to Moscow and stick to their red lines.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [37.811, 48.125],
              zoom: 15.5,
              pitch: 50.85,
              bearing: -164.60,
              speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 1,
                speed: 0.7
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 1,
                speed: 0.7
              },
              {
                layer: 'ukr-labels',
                duration: 8000,
                opacity: 1,
                speed: 0.7
              },
              {
                layer: 'ukr-dots',
                duration: 8000,
                opacity: 1,
                speed: 0.7
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 3000,
                opacity: 0
              },
              {
                layer: 'ukr-labels',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'ukr-dots',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 0,
                speed: 0.7
              }
          ]
        },
        {
            id: 'ETH',
            alignment: 'left',
            hidden: false,
            title: '2. Ethiopia',
            image: '',
            description: 'Fighting between Prime Minister Abiy’s federal army and forces from the northern Tigray region is tearing the country apart. All sides stand accused of atrocities. Neither is likely to deliver the other a mortal blow.<br /><br />Diplomats should push for a cessation of hostilities to get humanitarian aid into Tigray, where famine looms, and try to get the parties to peace talks.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [36.450255, 10.096885],
              zoom: 5,
              pitch: 35,
              bearing: 25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'ethiopia',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'tigray',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'eth-label',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'ethiopia',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'tigray',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'eth-label',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'AFG',
            alignment: 'left',
            hidden: false,
            title: '3. Afghanistan',
            image: '',
            description: 'A humanitarian catastrophe is looming in Afghanistan, triggered mostly by Western governments cutting off aid after the Taliban’s takeover. The UN says 23 million people, more than half the population, will suffer from hunger by spring.<br /><br />International donors should release money earmarked for Afghanistan, ease sanctions to allow in more aid and permit regular economic activity. Averting disaster likely requires working through Taliban ministries.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [69.191105, 34.534492],
              zoom: 11.93,
              pitch: 60.58,
              bearing: -29.18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 1,
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 0,
              }
          ]
        },
        {
            id: 'CNUS1',
            alignment: 'left',
            hidden: false,
            title: '4. U.S.-China',
            image: '',
            description: 'A direct U.S.-China clash over Taiwan is unlikely in the year ahead. But Chinese and U.S. planes and warships increasingly have close "encounters" around the island or near disputed rocks and reefs in the South China Sea.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [120.199462, 18.345498],
              zoom: 4,
              pitch: 27,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'first-island-chain',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'fic-label',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'pac-countries',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'first-island-chain',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'pac-countries',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'CNUS2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Against the backdrop of heightened competition, accidental clashes could lead to major crises.',
            location: {
              center: [114.081227, 10.918537],
              zoom: 13.52,
              pitch: 41.50,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 1,
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'IRUS',
            alignment: 'left',
            hidden: false,
            title: '5. Iran versus the U.S. and Israel',
            image: '',
            description: 'Hopes of reviving the Iranian nuclear deal are fading. If it collapses, the U.S. or Israel may attempt to knock out Iranian nuclear facilities, which could prompt Tehran to sprint toward obtaining a nuclear weapon and setting off a perilous retaliatory cycle across the Levant.<br /><br /><video width="100%" height="640"  autoplay loop muted>><source src="images/iran_stockpile.mp4" type="video/mp4"></video><br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [51.7236149, 33.7254932],
              zoom: 15.5,
              pitch: 48.72,
              bearing: 17.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'YEM',
            alignment: 'left',
            hidden: false,
            title: '6. Yemen',
            image: '',
            description: 'Yemen’s devastating war could be poised to get worse. Huthi rebels have encircled and advanced into the oil- and gas-rich governorate of Marib. A battle for Marib city would be deadly and would prolong rather than end the war.<br /><br />The new UN envoy should redouble efforts to avert an offensive on Marib, while pushing for an approach to peacemaking that goes beyond two-party talks between the Huthis, on one side, and the Hadi government and its Saudi backers on the other.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [45.318441, 15.469514],
              zoom: 13.53,
              pitch: 27.86,
              bearing: 22.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'ISPS',
            alignment: 'left',
            hidden: false,
            title: '7. Israel-Palestine',
            image: '',
            description: 'This past year saw the most destructive Gaza-Israel war in just over a decade, as well as clashes in Jerusalem, the West Bank and Israeli cities. The escalation illustrated once again that the status quo is untenable. Israel’s new government has continued repressing Palestinians and de-facto annexing the West Bank.<br /><br />The peace process is long dead and hope of a two-state solution dying fast. The question this year is whether the world’s policy catches up.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [35.2964851,31.7770816],
              zoom: 15,
              pitch: 45,
              bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'locators',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'HT',
            alignment: 'left',
            hidden: false,
            title: '8. Haiti',
            image: '',
            description: '2021 stands out as particularly bleak for many Haitians. Few expect a brighter 2022. Violent gangs now lord over much of the capital Port-au-Prince.<br /><br />The first priority is for Haitian political factions to reach consensus on a new administration and transition plan. Without those, Haitians’ despair about the future will deepen. More will depart in search of better lives elsewhere.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [-72.310913, 18.545446],
              zoom: 13.14,
              pitch: 72.50,
              bearing: 119.20,
              speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 1,
                speed: 0.7
              },
              {
                layer: 'locators',
                duration: 2000,
                opacity: 1,
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 0,
                speed: 0.7
              },
          ]
        },
        {
            id: 'MYM',
            alignment: 'left',
            hidden: false,
            title: '9. Myanmar',
            image: '',
            description: 'The February military coup  put an abrupt halt to a decade of reform in Myanmar. A brutal crackdown on mostly peaceful protests has triggered broad-based resistance, ranging from civil disobedience to armed attacks on security forces.<br /><br />The human cost of the standoff is devastating. Myanmar’s economy is in freefall, and health and education systems have collapsed. The world’s attention is waning despite the risk of a failed state at the heart of the Indo-Pacific.<br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [96.934269, 22.566811],
              zoom: 4.5,
              pitch: 27,
              bearing: 0,
              speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'myanmar',
                duration: 4000,
                opacity: .6,
                speed: 0.7
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'MALI',
            alignment: 'left',
            hidden: false,
            title: '10. Islamist militancy in Africa',
            image: '',
            description: 'Africa today is suffering some of the world’s most ferocious battles between states and Islamist militants. Western-backed military operations help keep jihadists at bay. Yet they often alienate locals and there is little to show for years of foreign efforts to build up indigenous armies.<br /><br />A rethink is long overdue and should include the possibility of talks with some militant leaders.<div class="flourish-embed flourish-chart" data-src="visualisation/8212983"></div><br /><br /><a href="https://www.crisisgroup.org/global/10-conflicts-watch-2022" target="_blank">[Read more]</a>',
            location: {
              center: [0.801167, -8.678834],
              zoom: 3.2,
              pitch: 40,
              bearing: 0,
              speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'central-sahel',
                duration: 4000,
                opacity: .6,
                speed: 0.7
              },
              {
                layer: 'sahel-countries',
                duration: 4000,
                opacity: 1,
                speed: 0.7
              },
              {
                layer: 'locators',
                duration: 4000,
                opacity: 0,
                speed: 0.7
              }
            ],
            onChapterExit: [
              {
                layer: 'central-sahel',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'sahel-countries',
                duration: 4000,
                opacity: 0,
                speed: 0.7
              },
              {
                layer: 'locators',
                duration: 4000,
                opacity: 0,
                speed: 0.7
              }
          ]
        }
    ]
};
