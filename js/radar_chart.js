

L_data = [
    {
    type: 'scatterpolar',
    r: [10, 10, 10, 10],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill: 'toself',
    name: 'Mandarin'
    },
    {
    type: 'scatterpolar',
    r: [8, 8, 8, 8],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill : 'toself',
    // fillcolor:'green',
    name: 'English',
    },
    {
    type: 'scatterpolar',
    r: [9, 7, 9, 7],
    theta: ['Speaking', 'Writing', 'Listening','Reading'],
    fill: 'toself',
    // fillcolor:'red',
    name: 'Japanese'
    }
    ]
    
    layout = {
    title: 'Languages Skill',
    polar: {
        radialaxis: {
        visible: true,
        range: [0, 10]
        }
    }
    }
    
    Plotly.newPlot("myDiv", L_data, layout)

P_data = [
    {
        type: 'scatterpolar',
        r: [9.5, 7, 9, 5, 8, 7],
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

