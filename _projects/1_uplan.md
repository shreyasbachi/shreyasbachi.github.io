---
layout: page
title: U-Plan
description: AI-driven urban heat island mitigation — HackHarvard 2024 winner 🏆
img: assets/img/uplan-demo.gif
importance: 2
category: work
related_publications: false
---

**1st Place, Sustainability Track — [HackHarvard 2024](https://devpost.com/software/u-plan).** Selected from over 1,000 students across 284 universities and 22 countries.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uplan-demo.gif" title="U-Plan interactive 3D GIS demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    U-Plan's interactive 3D GIS dashboard — urban heat, vegetation, and water coverage across Phoenix ZIP codes.
</div>

I led a team of four to build a city-scale sustainability platform analyzing urban heat, vegetation, and water coverage across 50+ Phoenix ZIP codes using Segment Anything Model (SAM) segmentation, GIS processing, and remote-sensing analytics.

- Built end-to-end Python pipelines and interactive 3D GIS visualizations
- Computed environmental indices (NDVI, NDWI, LST) from satellite data
- Generated localized heat-mitigation strategies using LLM-powered recommendations

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/semantic-seg.gif" title="Semantic segmentation of urban satellite imagery" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    SAM-based semantic segmentation for urban density understanding — classifying vegetation, water, and built surfaces from satellite imagery.
</div>

**Stack:** Python · Segment Anything Model · LLMs · Mapbox · Rasterio · Geopy · Folium
