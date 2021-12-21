var config = {
    style: 'mapbox://styles/daltonwb/ckx5j4u6i1c0x15p433alam68',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><img src="images/10ctw_logo.png" height="292" width="460" /><h1> </h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ulrich Eberle<br /><strong>Visualizations</strong>: Paul Franz<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'Brutal wars in Ethiopia and Yemen. Humanitarian catastrophe in Afghanistan. Global powers standing off over Ukraine, Taiwan and Iran’s nuclear program. Laments in Western capitals about a lack of U.S. leadership. Plus COVID-19 and the climate emergency’s looming menace.<br /><br />Several flashpoints across the world look increasingly perilous, with hostile powers potentially facing off and risking that a miscalculation could spin into disaster.<br /><br />Here are International Crisis Group’s 10 Conflicts to Watch in 2022.',
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
            description: 'Dismissing the threat of a Russian invasion of Ukraine as a bluff would be a mistake. An open conflict could have terrifying repercussions, potentially sucking in NATO members.<br /><br />Western powers need to clarify what they would do to support Ukraine, spell that out to Moscow and stick to their red lines.<br /><br />Here you can see dug-in trenches around an airplane hangar by forces in Donetsk.',
            location: {
              center: [37.811, 48.125],
              zoom: 16,
              pitch: 50.85,
              bearing: -164.60
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
                layer: 'ukr-labels',
                duration: 4000,
                opacity: 1
              },
              {
                layer: 'ukr-dots',
                duration: 4000,
                opacity: 1
              }

            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'ukr-labels',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'ukr-dots',
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: 'ETH',
            alignment: 'left',
            hidden: false,
            title: '2. Ethiopia',
            image: '',
            description: 'Fighting between Prime Minister Abiy’s federal army and forces from the northern Tigray region is tearing the country apart. All sides stand accused of atrocities. Neither is likely to deliver the other a mortal blow.<br /><br />Diplomats should keep pushing for at least a temporary truce to get humanitarian aid into Tigray, where famine looms, and explore whether compromise is now feasible.',
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
              }
          ]
        },
        {
            id: 'AFG',
            alignment: 'left',
            hidden: false,
            title: '3. Afghanistan',
            image: '',
            description: 'Humanitarian catastrophe is looming in Afghanistan, triggered mostly by Western governments cutting off aid after the Taliban’s takeover. The UN says 23 million people, more than half the population, will suffer from hunger by spring.<br /><br />International donors should ease sanctions to allow in more aid and permit regular economic activity.',
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
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: 'CNUS1',
            alignment: 'left',
            hidden: false,
            title: '4. U.S.-China',
            image: '',
            description: 'A direct confrontation between the U.S. and China over Taiwan is likely to happen in the near future, heightened tensions between Washington and Beijing provide plenty of opportunities for miscalculation and unintended escalation, particularly around the Taiwan strait and the South China Sea. Mounting tension between the US and China could see a show of force over Taiwan and the South China sea. For now, the potential for a direct military confrontation remains low as China is focused on the Winter Olympics and the 20th Party Congress, but the possibility of miscalculation or misinterpretation remains a concern.',
            location: {
              center: [120.199462, 18.345498],
              zoom: 4.25,
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
              }
            ],
            onChapterExit: [
              {
                layer: 'first-island-chain',
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
            description: 'Subi Reef, South China Sea. China’s irregular naval forces harass local fishermen and use bases like this one to project force into contested areas of the South China Sea.',
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
            description: 'If talks fall apart and the nuclear deal collapses, there’s a real danger of the U.S. or Israel using military strikes to try and set back Iran’s fast growing nuclear capability, with all the dangers of escalation that would entail.',
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
            description: 'Yemen’s devastating war is poised to get worse. Huthi rebels have encircled and advanced into the oil- and gas-rich governorate of Marib.<br /><br />To reach a genuine peace settlement, the new UN envoy needs a fresh approach that goes beyond two-party talks between the Huthis, on one hand, and on the other side, the Hadi government and its Saudi backers.',
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
            description: 'Hopes of a two-state solution are dying fast. The question this year is whether the world’s policy catches up. Diplomats’ lip-service to a two-state solution that is all but out of reach gives cover for Israel to advance toward de-facto annexation of the West Bank.<br /><br />Better now would be steps to end Israeli impunity for violations of Palestinian rights. It’s time, in other words, to address the situation on the ground as it is.',
            location: {
              center: [35.700359, 33.169155],
              zoom: 9,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'MALI',
            alignment: 'left',
            hidden: false,
            title: '8. Islamist militancy in Africa',
            image: '',
            description: 'Since ISIS lost its so-called caliphate in the Levant in 2017, Africa has suffered some of the world’s most ferocious battles between states and jihadists. Western-backed military operations help keep jihadists at bay. Yet they often alienate locals and there is little to show for years of foreign efforts to build up indigenous armies.<br /><br />A rethink is long overdue, and should include the possibility of controversial talks with some militant leaders.',
            location: {
              center: [5.987803, 18.463740],
              zoom: 4,
              pitch: 30,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'HT',
            alignment: 'left',
            hidden: false,
            title: '9. Haiti',
            image: '',
            description: '2021 stands out as particularly bleak for many Haitians. Few expect a brighter 2022. Violent gangs now lord over much of capital Port-au-Prince. The first priority is for Haitian political factions to reach consensus on a new administration and transition plan. Without those, Haitians’ despair about their futures will deepen. More will depart in search of better lives elsewhere.',
            location: {
              center: [-72.310913, 18.545446],
              zoom: 13.14,
              pitch: 72.50,
              bearing: 119.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'COVID',
            alignment: 'left',
            hidden: false,
            title: '10. (maybe?) Myanmar',
            image: '',
            description: 'Finally, the pandemic’s long tail is not over. From Colombia to Tunisia, from Lebanon to Sudan; COVID-19 has exacerbated grievances and led to unrest. Middle-income countries have been hit particularly hard by the economic downturn and the recovery looks increasingly divided between countries with high vaccination rates and parts of the world where vaccines and treatments are scarce.',
            location: {
              center: [96.934269, 22.566811],
              zoom: 4.5,
              pitch: 27,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 4000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        }
    ]
};
