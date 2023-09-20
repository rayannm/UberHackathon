import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from statsmodels.tsa.stattools import adfuller
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
from tensorflow import keras
from keras import callbacks
from keras import Sequential
from sklearn.metrics import mean_squared_error

import warnings
warnings.filterwarnings("ignore")

data = pd.read_csv("traffic.csv")
data.head()

data["DateTime"]= pd.to_datetime(data["DateTime"])
data = data.drop(["ID"], axis=1) 
data.info()

data['Hour'] = data['DateTime'].dt.hour

df=data.copy() 
colors = ["#ffb55a", "#ffee65", "#beb9db", "#fdcce5"]
plt.figure(figsize=(20,20),facecolor="#627D78")
Time_series=sns.lineplot(x=df['DateTime'],y="Vehicles",data=df, hue="Junction", palette=colors)
Time_series.set_title("Traffic On Junctions Over Years", color="#627D78")
Time_series.set_ylabel("Number of Vehicles", color="#627D78")
Time_series.set_xlabel("Date", color="#627D78")
# Calculate statistics for each junction
junction_stats = df.groupby('Junction')['Vehicles'].agg(['mean', 'std', 'min', 'max']).reset_index()
print(junction_stats)

for i, junction in enumerate(junction_stats['Junction']):
    mean = junction_stats.iloc[i]['mean']
    std = junction_stats.iloc[i]['std']
    plt.text(df['DateTime'].max(), mean, f" Mean: {mean:.2f}\n Std Dev: {std:.2f}", color=colors[i])



