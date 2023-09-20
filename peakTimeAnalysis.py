import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
data = pd.read_csv('traffic.csv')

# Convert the 'DateTime' column to a datetime object
data['DateTime'] = pd.to_datetime(data['DateTime'])

# Extract the hour from the 'DateTime' column
data['Hour'] = data['DateTime'].dt.hour

# Group the data by 'Hour' and calculate the average number of vehicles in each hour
hourly_avg_vehicle_counts = data.groupby('Hour')['Vehicles'].mean()

# Plot the graph
plt.figure(figsize=(12, 6))
plt.plot(hourly_avg_vehicle_counts.index, hourly_avg_vehicle_counts.values, marker='o', linestyle='-', color='b')
plt.title('Average Number of Vehicles per Hour')
plt.xlabel('Hour of the Day')
plt.ylabel('Average Number of Vehicles')
plt.grid(True)
plt.xticks(range(24))  # Set x-axis ticks for each hour
plt.show()
