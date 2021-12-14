var config = {
    style: 'mapbox://styles/daltonwb/ckwxqzgq71cxo14mo60snal4z',
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
            rotateAnimation: false,
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
            title: '',
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
            title: '',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        }
    ]
};
