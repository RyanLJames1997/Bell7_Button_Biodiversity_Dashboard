// Create a constant for url provided for samples.json
let biology_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch JSON data 
d3.json(biology_url).then(function(data) {

    // Create variables for overall data 
    let biology_samples = data.samples;
    let metadata = data.metadata;
    let id = data.names;

    // Create a function to make bar chart 
    function makeBarChart(bacteria_ID) {

        // Create variables sample_values, otu_ids & otu_labels 
        let sample_values = biology_samples[bacteria_ID].sample_values;
        let otu_ids = biology_samples[bacteria_ID].otu_ids;
        let otu_labels = biology_samples[bacteria_ID].otu_labels;
        // OTU (Operational Taxonomic Unit): method of classifying and grouping similar sequences of DNA or protein.

        // Create components of the bar chart 
        let trace1 = {
            x: sample_values.slice(0, 10),
            y: otu_ids.slice(0, 10).map(id => `OTU ${id}`), // Label OTU IDs
            text: otu_labels,
            type: 'bar',
            orientation: 'h', 
            transforms: [{
                type: 'sort', 
                target: 'y', 
                order: 'descending'}]
             // Creates horizontal bar chart
        };

        // Make bar components into a list of lists 
        let data = [trace1];

        // Create layout variable 
        let layout = {
            title: "Top 10 Bacteria OTUs Found Per Individual"
        };

        // Plot chart through Plotly 
        Plotly.newPlot("bar", data, layout);
    }

    // Make a function to make a bubble chart 
    function makeBubbleChart(bacteria_ID) {
        let sample_values = biology_samples[bacteria_ID].sample_values;
        let otu_ids = biology_samples[bacteria_ID].otu_ids;
        let otu_labels = biology_samples[bacteria_ID].otu_labels;

        // Create components of the bar chart  
        let trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                color: otu_ids, 
                size: sample_values,
                colorscale: 'Portland'}
            }
        
            // Make bar components into a list of lists 
            let data = [trace]; 

            // Create layout variable   
            let layout = {
                title: "Bacteria Sample values Per OTU ID",
                xaxis: {title:`OTU ID`},
                yaxis: {title: 'Number of Bacteria'}
            };

            // Plot the bubble chart with created components 
            Plotly.newPlot('bubble', data, layout)
        }
    
    // Make a function for the metadata 
    function makeMetadata(bacteria_ID,metadata) {

        // Clear the existing content in the sample-metadata div
        d3.select("#sample-metadata").html("");
    
        // Use D3.js to select the sample-metadata div and append a new panel-body div
        let panelBody = d3.select("#sample-metadata").append("div")
            .attr("class", "panel-body");

        let fields = ["ID", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"];
    
        // Add metadata information to the panel-body
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            panelBody.append("p").style("font-size", "12px").text(`${field}: ${metadata[bacteria_ID][field]}`);
        };

    }
    
    // Create a function to make the Belly Button Gauge 
    function makeGaugeBar(bacteria_ID){

        // Create variable for washing frequency 
        let weekly_washing_Frequency = metadata[bacteria_ID].wfreq

        // Components of Gauge bar 
        let data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: weekly_washing_Frequency,
                title: { text: "Belly Button Washing Frequency"},
                type: "indicator",
                mode: "gauge+number",
                text: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                direction: 'clockwise',
                textinfo: 'text',
                textposition: 'inside',
                marker: {
                    colors: ['', '', '', '', '', '', '', '', 'white'],
                    labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                    hoverinfo: 'label'
                },
                gauge: {
                    axis: {
                        range: [0, 9],
                        tickmode: "linear"  
                    },
                    steps: [
                        { range: [0, 1], color: "#F8F9F9", name: "0-1" },
                        { range: [1, 2], color: "#F2F3F4" },
                        { range: [2, 3], color: "#E5E7E9" },
                        { range: [3, 4], color: "#D7DBDD" }, 
                        { range: [4, 5], color: "#CACFD2" }, 
                        { range: [5, 6], color: "#BDC3C7" }, 
                        { range: [6, 7], color: "#A6ACAF" },
                        { range: [7, 8], color: "#909497" }, 
                        { range: [8, 9], color: "#797D7F" }  
                    ]
                }
            }
        ];
        
        // Layout for gauge 
        let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);
    }
    // Create function to initiate all functions except bubble chart 
    function optionChanged(bacteria_ID) {
        makeBarChart(bacteria_ID);
        makeMetadata(bacteria_ID, metadata);
        makeGaugeBar(bacteria_ID);
        makeBubbleChart(bacteria_ID);
    }

    // Create a dropdown with options
    let dropdown = d3.select('#selDataset');

    // Loop through id and add value to dropdown option
    for (let i = 0; i < id.length; i++) {
        let option = dropdown.append('option');
        option.attr('value', i).text(id[i]);
    }

    // Set an event listener to call the optionChanged function when the dropdown selection changes
    dropdown.on('change', function() {
        let bacteria_ID = +this.value; // Get the selected value as a number
        optionChanged(bacteria_ID);
    });

    // Initially, create the bubble chart and other data to display with the first ID as default
    optionChanged(0)
    }
);