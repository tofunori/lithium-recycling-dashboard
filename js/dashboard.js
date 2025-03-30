// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    initializeMap();
    
    // Populate facilities list
    populateFacilitiesList();
    
    // Initialize charts
    initializeCharts();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update statistics
    updateStatistics();
});

// Initialize the Leaflet Map
function initializeMap() {
    // Create map centered on North America
    const map = L.map('map').setView([39.8283, -98.5795], 4);
    
    // Add OpenStreetMap as base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add alternate basemaps
    const basemaps = {
        "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }),
        "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 19
        }),
        "Terrain": L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        })
    };
    
    // Set default basemap
    basemaps["OpenStreetMap"].addTo(map);
    
    // Add layer control
    L.control.layers(basemaps).addTo(map);
    
    // Initialize marker cluster group
    const markers = L.markerClusterGroup();
    
    // Function to get marker color based on status
    function getMarkerColor(status) {
        switch(status.toLowerCase()) {
            case 'operating':
                return '#4CAF50'; // Green
            case 'under construction':
                return '#FFC107'; // Amber
            case 'planned':
                return '#2196F3'; // Blue
            case 'pilot':
                return '#9C27B0'; // Purple
            default:
                return '#757575'; // Grey
        }
    }
    
    // Create markers for each facility
    L.geoJSON(facilityData, {
        pointToLayer: function(feature, latlng) {
            const status = feature.properties.status;
            const color = getMarkerColor(status);
            
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: color,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function(feature, layer) {
            // Create popup content
            const props = feature.properties;
            const popupContent = `
                <div class="info-box">
                    <h3>${props.name}</h3>
                    <p class="info-company">Company: ${props.company}</p>
                    <p>Location: ${props.address}</p>
                    <p>Status: <strong>${props.status}</strong></p>
                    <p class="info-capacity">Capacity: ${props.capacity}</p>
                    <p>Technology: ${props.technology}</p>
                    <p>${props.description}</p>
                    <a href="facilities/${props.id}.html" class="btn btn-sm btn-primary mt-2">View Details</a>
                    <a href="${props.website}" target="_blank" class="btn btn-sm btn-outline-secondary mt-2">Visit Website</a>
                </div>
            `;
            
            layer.bindPopup(popupContent);
            
            // Add click listener to highlight facility in list
            layer.on('click', function() {
                highlightFacilityInList(props.id);
            });
        }
    }).addTo(markers);
    
    // Add marker cluster to map
    map.addLayer(markers);
}

// Populate the facilities list
function populateFacilitiesList() {
    const facilitiesList = document.getElementById('facilitiesList');
    
    if (!facilitiesList) {
        console.error('Facilities list element not found');
        return;
    }
    
    // Clear existing content
    facilitiesList.innerHTML = '';
    
    // Create list items for each facility
    facilityData.features.forEach(feature => {
        const props = feature.properties;
        const statusClass = getStatusClass(props.status);
        
        const facilityItem = document.createElement('div');
        facilityItem.className = `facility-item ${props.id}`;
        facilityItem.innerHTML = `
            <a href="facilities/${props.id}.html">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <h6 class="mb-0">${props.name}</h6>
                        <small class="text-muted">${props.company}, ${props.address}</small>
                    </div>
                    <span class="status-badge ${statusClass}">${props.status}</span>
                </div>
            </a>
        `;
        
        facilitiesList.appendChild(facilityItem);
    });
}

// Get CSS class for facility status
function getStatusClass(status) {
    switch(status.toLowerCase()) {
        case 'operating':
            return 'status-operating';
        case 'under construction':
            return 'status-construction';
        case 'planned':
            return 'status-planned';
        case 'pilot':
            return 'status-pilot';
        default:
            return '';
    }
}

// Highlight a facility in the list
function highlightFacilityInList(facilityId) {
    // Remove highlight from all facilities
    document.querySelectorAll('.facility-item').forEach(item => {
        item.classList.remove('bg-light');
    });
    
    // Add highlight to selected facility
    const facilityItem = document.querySelector(`.facility-item.${facilityId}`);
    if (facilityItem) {
        facilityItem.classList.add('bg-light');
        facilityItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Set up event listeners for interactive elements
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply filter
            const filter = this.getAttribute('data-filter');
            filterFacilities(filter);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('facilitySearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchFacilities(this.value);
        });
    }
}

// Filter facilities by status
function filterFacilities(filter) {
    const facilityItems = document.querySelectorAll('.facility-item');
    
    facilityItems.forEach(item => {
        const facilityId = Array.from(item.classList).find(cls => cls !== 'facility-item');
        const facility = getFacilityById(facilityId);
        
        if (!facility) return;
        
        const status = facility.properties.status.toLowerCase();
        
        if (filter === 'all' || 
            (filter === 'operating' && status === 'operating') ||
            (filter === 'construction' && status === 'under construction') ||
            (filter === 'planned' && (status === 'planned' || status === 'pilot'))) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Search facilities by name, company, or location
function searchFacilities(query) {
    const facilityItems = document.querySelectorAll('.facility-item');
    const searchQuery = query.toLowerCase();
    
    facilityItems.forEach(item => {
        const facilityId = Array.from(item.classList).find(cls => cls !== 'facility-item');
        const facility = getFacilityById(facilityId);
        
        if (!facility) return;
        
        const props = facility.properties;
        const searchText = `${props.name} ${props.company} ${props.address}`.toLowerCase();
        
        if (searchText.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize charts
function initializeCharts() {
    createCapacityChart();
    createTechnologiesChart();
    createRegionsChart();
}

// Create capacity by status chart
function createCapacityChart() {
    const ctx = document.getElementById('capacityChart');
    if (!ctx) return;
    
    // Calculate capacities by status
    const capacities = {
        'Operating': 0,
        'Under Construction': 0,
        'Planned': 0,
        'Pilot': 0
    };
    
    facilityData.features.forEach(feature => {
        const props = feature.properties;
        const capacityStr = props.capacity;
        const status = props.status;
        
        if (capacityStr && capacityStr.includes('tonnes')) {
            const match = capacityStr.match(/(\d+),?(\d+)?/);
            if (match) {
                const capacityNum = parseInt(match[0].replace(',', ''));
                if (!isNaN(capacityNum)) {
                    capacities[status] += capacityNum;
                }
            }
        }
    });
    
    // Create chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(capacities),
            datasets: [{
                label: 'Processing Capacity (tonnes/year)',
                data: Object.values(capacities),
                backgroundColor: [
                    '#4CAF50',
                    '#FFC107',
                    '#2196F3',
                    '#9C27B0'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tonnes per Year'
                    }
                }
            }
        }
    });
}

// Create technologies distribution chart
function createTechnologiesChart() {
    const ctx = document.getElementById('technologiesChart');
    if (!ctx) return;
    
    const techCounts = getFacilitiesByTechnology();
    
    // Create chart
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(techCounts),
            datasets: [{
                data: Object.values(techCounts),
                backgroundColor: [
                    '#4CAF50',
                    '#FFC107',
                    '#2196F3',
                    '#9C27B0',
                    '#FF5722',
                    '#607D8B'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Create regions distribution chart
function createRegionsChart() {
    const ctx = document.getElementById('regionsChart');
    if (!ctx) return;
    
    const regionCounts = getFacilitiesByRegion();
    
    // Create chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(regionCounts),
            datasets: [{
                data: Object.values(regionCounts),
                backgroundColor: [
                    '#4CAF50',
                    '#FFC107',
                    '#2196F3',
                    '#9C27B0',
                    '#FF5722',
                    '#607D8B'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Update statistics in the dashboard
function updateStatistics() {
    const statusCounts = getFacilitiesByStatus();
    
    // Update counters
    document.querySelector('.total-facilities').textContent = facilityData.features.length;
    document.querySelector('.operating-facilities').textContent = statusCounts['Operating'];
    document.querySelector('.construction-facilities').textContent = statusCounts['Under Construction'];
    document.querySelector('.planned-facilities').textContent = statusCounts['Planned'] + (statusCounts['Pilot'] || 0);
}
