# Pandas CheatSheet


## Creating Data Frames
```
import pandas as pd
data_series = pd.Series(["UCLA", "UC Berkeley", "UC Irvine","University of Central Florida", "Rutgers University"])

states_dicts = [{"STATE": "New Jersey", "ABBREVIATION": "NJ"},{"STATE": "New York", "ABBREVIATION": "NY"}] 
df_states = pd.DataFrame(states_dicts)

df = pd.DataFrame({"Dynasty": ["Early Dynastic Period", "Old Kingdom"],"Pharoh": ["Thinis", "Memphis"]})

"Frame": ["Ornate", "Classical", "Modern", "Wood", "Cardboard"],"Price": [15.00, 12.50, 10.00, 5.00, 1.00],"Sales": [100, 200, 150, 300, "N/A"]})

painting_df = pd.DataFrame([
{"Painting": "Mona Lisa (Knockoff)", "Price": 25,"Popularity": "Very Popular"},
{"Painting": "Van Gogh (Knockoff)", "Price": 20, "Popularity": "Popular"},
{"Painting": "Starving Artist", "Price": 10, "Popularity": "Average"},
{"Painting": "Toddler Drawing", "Price": 1, "Popularity": "Not Popular"}
])

```

## Printing Results

```
training_data.head()
training_data.describe()
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzAxODIxMjM5XX0=
-->