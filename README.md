# Belly_Button_Biodiversity_Dashboard
Module 14 Challenge: UWA/ edX Data Analytics & Visualisation Bootcamp
Dashboard Results: [https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard)

## Table of Content
- `Introduction`
- `Goal`
- `Dataset`
- `Dashboard Creation`
   - `Part 1` : Horizontal Bar Chart
   - `Part 2` : Bubble Chart
   - `Part 3` : MetaData Information
   - `Bonus Section` : Belly Button Washing Frequency Gauge Graph
- `References`

## Introduction

### Goal
In this assignment, we are required to build an interactive dashboard to explore the [Belly Button Biodoversity Dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Furthermore, all results will output test subject ID No: `940`.

### Dataset

Description of documents included in this repository:

1. `index.html` : Showcases the [`html`](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/blob/main/Starter_Code/index.html) code.
2. `static_folder` : Includes the completed [`app.js`](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/blob/main/Starter_Code/static/js/app.js) code.
3. `images_file` : Screenshots of completed [`dashboard & graphs`](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/tree/main/Starter_Code/Images)
4. `samples.json` : Belly_Button JSON URL file data @ 
   ```sh
   "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
   ```   

## Dashboard Creation

<img width="678" alt="Belly_Button_Dashboard_Preview" src="https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/assets/141802851/a3fc12cb-9cd5-40c3-87ba-002dc9fc581c">

- This project used in amalgamation with code structures found at plotly.js

### Part 1: Horizontal Bar Chart

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. This was completed by using the D3 library to read in `samples.json ` from the `URL`.
- Use `sample_vales` as the values for the bar chart.
- Use `otu_ids` as the labels for the bar chart.
- Use `otu_labels` as the hovertext for the chart.

![Top_10_Bacteria](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/assets/141802851/b8325c0a-3567-417d-afda-eadb0c457f51)

Test Subject ID No: `940`

### Part 2: Bubble Chart

Create a bubble chart which displays each sample per OTU ID
- Use `otu_ids` for the x values.
- Use `sample_values` for the y values.
- Use `sample_values` for the marker size.
- Use `otu_ids` for the marker colors.
- Use `otu_labels` for the text values.

![Bacteria_Samples](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/assets/141802851/0352ccaf-f89f-4242-9275-b3c55db1e8cc)

Test Subject ID No: `940`

### Part 3: MetaData Information

Create a dropdown table to display the samples metadata (individual's demographic information):
This was created by:
- Looping through each key-value pair from the metadata JSON object and create a text string.
- Append an html tag with that text to the `#sample-metadata` panel.

<img width="94" alt="Metadata_Demographic_Info" src="https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/assets/141802851/158b8fec-b7c7-45d3-aea7-c8b9ef95131d">

Test Subject ID No: `940`

### Bonus Section: Belly Button Washing Frequency Gauge Graph

Create a gauge chart to plot the weekly belly button washing frequency for an individual.

![Washing_Frequency](https://github.com/RyanLJames1997/Belly_Button_Biodiversity_Dashboard/assets/141802851/248d4243-2231-43cb-b47d-e576654e53d7)

Test Subject ID No: `940`

## References

Plotly: [Plotly: Bubble Charts](https://plotly.com/javascript/bubble-charts/)
Colour Designer: [Colour Scale Generator](https://colordesigner.io/gradient-generator)
Coding:
- Aspects of Syntax code was taken from edX bootcamp module 14 slides.
- Chatgpt for Syntax





