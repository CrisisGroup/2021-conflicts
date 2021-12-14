var config = {
    style: 'mapbox://styles/daltonwb/ckx5j4u6i1c0x15p433alam68',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>10 Conflicts to Watch – 2021</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ulrich Eberle<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support: </strong>Andrew Ciacci and Juan Sebastian Lozano<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
        {
            id: 'UKR',
            alignment: 'left',
            hidden: false,
            title: '1. Ukraine',
            image: '',
            description: 'Vodiane, Ukraine. Here you can see dug in trenches from Ukrainian military positions.',
            location: {
              center: [37.805448, 47.144850],
              zoom: 15.50,
              pitch: 50.85,
              bearing: -164.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'AFG',
            alignment: 'left',
            hidden: false,
            title: '2. Afghanistan',
            image: '',
            description: 'Kabul. A major humanitarian catastrophe is looming in Afghanistan. International donors have cut off all but insufficient emergency aid after the Taliban’s takeover. Donor countries should now re-engage with Afghanistan and work with the state apparatus to preserve its basic functions.',
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

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'CNUS',
            alignment: 'left',
            hidden: false,
            title: 'US-China Flashpoints',
            image: '',
            description: 'Subi Reef, South China Sea. Mounting tension between the US and China could see a show of force over Taiwan and the South China sea. For now, the potential for a direct military confrontation remains low as China is focused on the Winter Olympics and the 20th Party Congress, but the possibility of miscalculation or misinterpretation remains a concern. ',
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

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'ETH',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Lorem ipsum dolor amet.',
            location: {
              center: [36.450255, 10.096885],
              zoom: 5,
              pitch: 12.36,
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
            id: 'YEM',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The civil war in Yemen may have faded from the  headlines, the conflict has nonetheless  become more bloody and more intractable. All eyes are now on the city of Marib and its reserve and oil and gas. Losing this bastion to the Huthis would deal a deadly blow to the internationally-recognized government. A showdown in Marib would likely destroy the city and exact a heavy toll on civilians.',
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
            id: 'IRUS',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Lorem ipsum dolor amet.',
            location: {
              center: [56.142973, 29.489849],
              zoom: 5.80,
              pitch: 48.72,
              bearing: 17.95
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
            title: '',
            image: '',
            description: 'In the past year, the new government in Israel has further solidified its grip over the occupied Palestinian territories towards what now looks more and more like a de facto annexation. This permanent statu quo is however untenable and violent outbursts will inevitably occur. ',
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
            id: 'HT',
            alignment: 'left',
            hidden: false,
            title: 'Haiti',
            image: '',
            description: 'Port-au-Prince. 2021 was one of the bleakest years for Haiti. The assassination of President Jovenel Moïse has left the country in disarray. Violent gangs now control most of the capital Port-au-Prince. In order to restore a functioning state, Haiti will need a consensus government and renewed support by its partners. ',
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
            id: 'MALI',
            alignment: 'left',
            hidden: false,
            title: 'Haiti',
            image: '',
            description: 'Insurgencies in the Sahel are expanding and the security situation in Mali, Burkina and Niger continues to deteriorate. And France has made it clear it wants to end its military involvement.  This prospect however is pushing local governments to seek a dialogue with the jihadists that could lead to negotiated solutions.',
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
            title: 'Haiti',
            image: '',
            description: 'Finally, the pandemic’s long tail is not over. From Colombia to Tunisia, from Lebanon to Sudan; COVID-19 has exacerbated grievances and led to unrest. Middle-income countries have been hit particularly hard by the economic downturn and the recovery looks increasingly divided between countries with high vaccination rates and parts of the world where vaccines and treatments are scarce. ',
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
        }
    ]
};
