import requests
import csv
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.basemap import Basemap

def get_coordinates(osm_node_id):
    overpass_url = "http://overpass-api.de/api/interpreter"
    overpass_query = f"""
    [out:json];
    node({osm_node_id});
    out;
    """
    response = requests.get(overpass_url, params={"data": overpass_query})
    data = response.json()
    if 'elements' in data and len(data['elements']) > 0:
        latitude = data['elements'][0]['lat']
        longitude = data['elements'][0]['lon']
        return latitude, longitude
    else:
        return None, None


start_node_id = "60922878"  
end_node_id = "595757808"  

start_lat, start_lon = get_coordinates(start_node_id)
end_lat, end_lon = get_coordinates(end_node_id)

print(f"Start Node Coordinates: ({start_lat}, {start_lon})")
print(f"End Node Coordinates: ({end_lat}, {end_lon})")

ny_lat_min = 40.4774
ny_lat_max = 41.01585
ny_lon_min = -74.25909
ny_lon_max = -73.7004


map = Basemap(
    projection='merc',
    llcrnrlat=ny_lat_min,
    urcrnrlat=ny_lat_max,
    llcrnrlon=ny_lon_min,
    urcrnrlon=ny_lon_max,
    resolution='l'
)

i = 0

with open("C:\\Users\\roude\\Documents\\GitHub\\UberHackathon\\movement-speeds-quarterly-by-hod-new-york-2019-Q2.csv", "r") as file:

    csv_reader = csv.reader(file)

    next(csv_reader) # skip the header row

    map.lat_0 = csv_reader
    
    for row in csv_reader:
        i += 1
        # Access the value from a specific column by index
        startID = row[6]
        #endID = row[7]

        #print(startID, endID)

        start_lat, start_lon = get_coordinates(str(startID))
        #end_lat, end_lon = get_coordinates(str(endID))
        if (start_lat != None or start_lon != None):
            map.plot(start_lat, start_lon, marker = 'D', color = 'r')
        #map.plot(end_lat, end_lon, 's')

        if i == 50:
            break

map.drawcoastlines()

plt.show()        

        
