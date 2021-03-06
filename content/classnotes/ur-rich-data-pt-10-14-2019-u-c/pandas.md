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

## Slicing Data
```
training_data["Trainer"] ### select a column
training_data[["Trainer", "Weight"]] ### select a list of columns
```

## Printing Results

```
training_data.head()
training_data.describe()
```

## Sorting etc...
```
training_data["Trainer"].unique()
```

## Aggregating
```
training_data["Trainer"].value_counts()
training_data.describe()
training_data["Weight"].mean()
training_data["Weight"].sum()
```

## Renaming Columns
```
hey_arnold_renamed = hey_arnold.rename(columns={"Character_in_show": "Character",
"color_of_hair": "Hair Color",
"Height": "Height",
"Football_Shaped_Head": "Football Head"
})
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg3NjU3NTg4OSwtMTM2NDAzMTMwNl19
-->