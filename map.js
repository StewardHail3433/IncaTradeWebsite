/// <reference types="leaflet" />

var map = L.map('map').setView([-14, -75], 4.2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Esri, Vantor, Earthstar Geographics, and the GIS User Community'
}).addTo(map);



L.marker([-13.532, -71.9675]).addTo(map).on("click", (e) => clickContent("Cusco")).bindPopup('Cusco');
L.marker([-13.1631, -72.5450]).addTo(map).on("click", (e) => clickContent("Machu Picchu")).bindPopup("Machu Picchu");

const legend = L.control({ position: 'topright' });
legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = '<b>Legend</b><br>' +
        '<span style="color:#878718">&#9632;</span> Inca Empire<br>' +
        '<span style="color:#d9534f">&#8212;&#8212;</span> Qhapaq Ñan <br>' +
        '<span style="color:#0077b6">&#9679;</span> Cities';
    return div;
};
legend.addTo(map);

const incaEmpireBackwardsPolygon = [
    [-78.9913303, 1.5152002],
    [-80.3975803, 0.8122246],
    [-81.2764865, -1.560602],
    [-80.485489, -3.1302471],
    [-81.5401765, -4.5661732],
    [-81.1336824, -6.4142636],
    [-81.1336824, -6.4142636],
    [-79.5345715, -8.1253186],
    [-77.1615246, -13.0481864],
    [-76.5584432, -14.7382998],
    [-70.757662, -18.4854085],
    [-70.6576183, -22.1678318],
    [-71.3607433, -28.5177038],
    [-71.806455, -30.7131805],
    [-71.806455, -30.7131805],
    [-70.3060558, -31.2604844],
    [-68.7240246, -30.2787661],
    [-68.4603527, -28.0533284],
    [-67.4935558, -24.8273834],
    [-66.6146496, -22.4930294],
    [-65.1577853, -21.6206968],
    [-66.263087, -16.8523358],
    [-67.8451183, -15.1627531],
    [-69.339259, -12.7911898],
    [-71.9759777, -8.2992973],
    [-74.7884777, -3.1413506],
    [-76.7945165, 0.2879219],
    [-78.9913303, 1.5152002]
];
const incaEmpirePolygon = [];

for (let i = 0; i < incaEmpireBackwardsPolygon.length; i++) {
    incaEmpirePolygon.push([incaEmpireBackwardsPolygon[i][1], incaEmpireBackwardsPolygon[i][0]])
}
var polygon = L.polygon(incaEmpirePolygon).setStyle({ color: "#878718" }).addTo(map).bindPopup("The Inca Empire<br>Try clicking a point or path").on("click", (e) => clickContent(""));

function clickContent(info) {
    const div = document.getElementById("clickContent")
    switch(info) {
        case "Machu Picchu":
            div.innerHTML = "<h1>Machu Picchu</h1><p>Be sure to visit our many sites like the beautiful Machu Picchu, a stunning stone marvel and testament to the architectural craftsmanship of Incan society. Translated to “old mountain”, Machu Picchu stands approximately 2430 meters above sea level. Atop some of the highest mountains in the eastern Andes lies the masterfully engineered stone monuments which could facilitate an entire day of exploring. Visiting this iconic landmark is a must.</p><img src='machu-picchu-llama.jpg'>";
            break;
        case "Cusco":
            div.innerHTML = "<h1>Cusco</h1><p>Cusco is the captial of the Inca Empire. It is a must stop city where you can see the decentants of Inti, the Sun God, as they govern the empire. During the day you will see the Chasqui bring these wilts of knots that hold messages across the land. Being on one of the Qhapaq Ñan parallels, all the goods including coca tea would be imported. If you can try to drink some as it is tea that heals the sick and the tea is mainly for the rulers.</p><img src='Map_of_Cusco_by_Sebastian_Munster_(1574).jpg'>";
            break;
        case "Qhapaq Ñan":
            div.innerHTML = "<h1>Qhapaq Ñan</h1><p>Qhapaq Ñan is the main road system of the Inca Empire. It is composed of 2 parallel roads that are connected and it goes through cities like Cusco, Paria, and Ranchillos. The 30,000 km covered by the road system would lead to travellers going across deserts, mountains, and rainforests. To make travel easier for the merchants, runner, millary, and herders, the builder made rope bridges. The would allow for easy crossing between valleys. Those the road system was used for the movement of coca, leaves, sliver, gold, and camelids, another big part of the system was sharing information. Check out <a href='things.html'>Things to do</a> and <a href='travelMeans.html'>Means of Travel</a> to learn more. </p><img style='width:100%' src='rope_bridge.jfif'>";
            break;
        default:
            div.innerHTML = "<h1>Click A Point<h1><p>Click a point or trail to learn more about it and it's importants in the Inca Empire.</p>";
            break;
    }
}

let line1 = [
    [-70.1603323,-29.7344367],
    [-69.0616994,-27.8474405],
    [-68.6661916,-26.71481],
    [-68.6222463,-25.7688389],
    [-67.875176,-24.2555893],
    [-66.6007619,-23.6934366]
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-70.1603323,-29.7344367],
    [-70.8195119,-27.8085773],
    [-69.7208791,-25.3724297],
    [-69.5450979,-20.5593662],
    [-69.8087698,-17.4854549],
    [-71.0392385,-16.7294444],
    [-71.0392385,-15.2933099],
    [-69.8087698,-14.2735508],
    [-72.0499807,-13.5911157],
    [-73.0607229,-13.6338266],
    [-74.5548635,-12.3921677],
    [-76.3566213,-11.4031522]
]

drawlineWithBackwardsCoords(line1);


line1 = [
    [-70.8195119,-27.8085773],
    [-69.0616994,-27.8474405],
    [-68.6661916,-26.71481],
    [-69.6769338,-27.1848841],
    [-70.4679494,-26.7932916],
    [-68.8859182,-27.4191829]
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-70.4679494,-26.7932916],
    [-69.1056448,-24.8152678],
    [-67.875176,-24.2555893],
    [-67.3038869,-22.5618833],
    [-67.4796682,-20.8471183],
    [-68.0509573,-18.8632621],
    [-66.4249807,-19.7342465]
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-68.0509573,-18.8632621],
    [-68.2706838,-20.271071]
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-68.0509573,-18.8632621],
    [-68.2267385,-17.1078334],
    [-69.3693166,-16.0971311],
    [-69.8087698,-14.2735508],
    [-72.0499807,-13.5911157],
    [-72.9288869,-15.4627976],
    [-71.0392385,-16.7294444]

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-72.9288869,-15.4627976],
    [-73.6759573,-15.2085624],
    [-73.0607229,-13.6338266],
    [-74.7306448,-14.3587601],
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-73.6759573,-15.2085624],
    [-74.7306448,-14.3587601],
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-74.7306448,-14.3587601],
    [-75.609551,-13.5057192],
    [-74.5548635,-12.3921677],
    [-75.3019338,-11.9626522],
    [-76.2247854,-12.8210736],
    [-77.8947073,-10.1512921],

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-76.3566213,-11.4031522],
    [-77.1049911,-10.5272602],
    [-77.368663,-9.3152165],
    [-77.3247177,-8.4033851],

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-77.3247177,-8.4033851],
    [-75.3019338,-11.9626522],


]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-77.368663,-9.921799],
    [-77.5883895,-10.82955],
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-77.8947073,-10.1512921],
    [-78.6870223,-8.4468561],
    [-77.3247177,-8.4033851],
    [-78.2036239,-6.7480988],
    [-76.9731552,-6.2241323],

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-78.2036239,-6.7480988],
    [-79.7417098,-6.704456],
    [-79.5659286,-5.0433614],
    [-79.9614364,-3.9042836],
    [-78.9506942,-2.5880687],
    [-77.7641708,-2.7636582],
    [-77.6323348,-1.3583533],
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-77.7641708,-2.7636582],
    [-78.5991317,-5.3059584],
    [-79.5659286,-5.0433614],

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-78.5991317,-5.3059584],
    [-78.2036239,-6.7480988],
]

drawlineWithBackwardsCoords(line1);


line1 = [
    [-79.7417098,-6.704456],
    [-78.6870223,-8.4468561],

]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-76.2247854,-12.8210736],
    [-75.609551,-13.5057192],
]

drawlineWithBackwardsCoords(line1);

line1 = [
    [-70.3098411,-22.6837123],
    [-69.6286888,-23.3712484],
    [-68.5959739,-22.4605281],
]

drawlineWithBackwardsCoords(line1);



function drawlineWithBackwardsCoords(line) {
    let realLine = [];
    for (let i = 0; i < line.length; i++) {
        realLine.push([line[i][1], line[i][0]])
    }

    console.log(realLine)

    return L.polyline(realLine, {color: "red", weight: 3}).addTo(map).bindPopup("Qhapaq Ñan").on("click", (e) => clickContent("Qhapaq Ñan"));
}

clickContent("begin")