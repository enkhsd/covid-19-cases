# Introduction
In this lab 3, we utilized javascript and MapBox and visualized the COVID-19 case numbers and rates in the U.S in 2020.
We have used COVID-19 Data from <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">The New York Times</a> and population data from the <a href="https://data.census.gov/cedsci/table?g=0100000US.050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">American Community Survey, 2018</a>. The case rate is calculated as cases per thousand residents.
## Map 1
The first map is the choropleth map showing the U.S Covid rate in 2020. Once the map viewer hovers their mouse, they will be able to see the exact rate of covid by each county in the U.S. We can also get a general sense of how adverse the covid rate is by different colors. The darker and more red the color is, the Covid situation is more worse.

![Map_1](https://github.com/enkhsd/covid-19-cases/blob/main/img/Map1.png)
link: http://127.0.0.1:5500/map1.html

## Map 2
The second map is the proportional symbol map depicting the U.S Covid case numbers in 2020. As we can see, the different sized circles represent the number of cases by each county. Also, we can click on the dots to see the exact numbers.

![Map_2](https://github.com/enkhsd/covid-19-cases/blob/main/img/Map2.png)
link: http://127.0.0.1:5500/map2.html


Acknowledgement: This lab has been made possible by Professor Bo Zhao and TA Steven Bao in Advanced Geography course 458 at University of Washington, Seattle. The used materials are: <a href="https://github.com/jakobzhao/geog458/tree/master/labs/lab03">Lab 3</a> and <a href="https://github.com/jakobzhao/geog495/tree/main/labs/lab04">Lab 4</a>.

Resources: 

-<a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">The New York Times</a>

-<a href="https://data.census.gov/cedsci/table?g=0100000US.050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">American Community Survey, 2018</a>

-<a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html">The U.S Census, Shapefile</a>