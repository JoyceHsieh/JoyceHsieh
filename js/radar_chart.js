

L_data = [
    {
    type: 'scatterpolar',
    r: [5, 5, 5, 5],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill: 'toself',
    name: 'Mandarin'
    },
    {
    type: 'scatterpolar',
    r: [5, 3, 5, 4],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill: 'toself',
    name: 'Japanese'
    },
    {
    type: 'scatterpolar',
    r: [4, 4, 4, 4],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill: 'toself',
    name: 'English'
    }
    ]
    
    layout = {
    title: 'Languages Skill',
    polar: {
        radialaxis: {
        visible: true,
        range: [0, 5]
        }
    }
    }
    
    Plotly.newPlot("myDiv", L_data, layout)

P_data = [
    {
        type: 'scatterpolar',
        r: [9, 6, 8, 5, 8, 4],
        theta: ['Python', 'Tableau', 'HTML/CSS/JavaScript','VBA','SQL/DataBase', 'R'],
        fill: 'toself',
        name: 'Python'
        }
]

layout_2 = {
    title: 'CS Languages Skill',
    polar: {
        // bgcolor: 'chartreuse',
        radialaxis: {
        visible: true,
        range: [0, 10]
        }
    }
    }

Plotly.newPlot("my_plotly", P_data, layout_2)
