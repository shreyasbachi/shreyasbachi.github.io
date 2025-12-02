---
layout: default
title: Projects
---

# Projects

<p class="section-intro">
Personal and hackathon projects exploring AI applications in sustainability, computer vision, and language models.
</p>

<div class="card">
    <h3><a href="https://devpost.com/software/u-plan" target="_blank">U-Plan - AI-Driven Urban Heat Island Mitigation</a></h3>
    <span class="meta">HackHarvard 2024 • 1st Place Sustainability Track 🏆</span>
    
    <div style="text-align: center; margin: 1.5rem 0;">
        <img src="/files/uplan-demo.gif" alt="U-Plan Demo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    </div>
    
    <p>
        Led team of four to develop city-scale sustainability platform analyzing urban heat, vegetation, and water coverage across 50+ Phoenix ZIP codes using SAM segmentation, GIS processing, and remote-sensing analytics.
    </p>
    <ul>
        <li>Built end-to-end Python pipelines and interactive 3D GIS visualizations</li>
        <li>Computed environmental indices (NDVI, NDWI, LST) from satellite data</li>
        <li>Generated localized heat-mitigation strategies using LLM-powered recommendations</li>
    </ul>
    
    <span class="badge">Python</span>
    <span class="badge">Segment Anything Model</span>
    <span class="badge">LLMs</span>
    <span class="badge">Mapbox</span>
    <span class="badge">GIS</span>
</div>

<div class="card">
    <h3>TransformersNotFound - Creating an Open-Source GPT</h3>
    <span class="meta">Personal Project</span>
    <p>
        Fine-tuned LLaMA-3.2B model using parameter-efficient LoRA adapters for reasoning tasks on custom Chain-of-Thought dataset.
    </p>
    <ul>
        <li>Implemented multi-GPU distributed training using HuggingFace Accelerate</li>
        <li>Optimized model inference using vLLM for high-throughput serving</li>
        <li>Built FastAPI endpoints for production deployment</li>
    </ul>
    
    <span class="badge">Python</span>
    <span class="badge">PyTorch</span>
    <span class="badge">HuggingFace</span>
    <span class="badge">LoRA</span>
    <span class="badge">vLLM</span>
    <span class="badge">FastAPI</span>
</div>

<div class="card">
    <h3>Feal? - Fake vs Real Image Binary Classifier</h3>
    <span class="meta">Computer Vision Project</span>
    
    <div style="text-align: center; margin: 1.5rem 0;">
        <img src="/files/feal-demo.gif" alt="Feal Demo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
    </div>
    
    <p>
        Achieved 97.3% accuracy in binary classification of real vs. AI-generated images by fine-tuning ResNet-18 model.
    </p>
    <ul>
        <li>Fine-tuned ResNet-18 with PyTorch on augmented dataset</li>
        <li>Enriched dataset with 10,000+ synthetic images from custom Deep Convolutional GAN</li>
        <li>Implemented data augmentation strategies for improved generalization</li>
    </ul>
    
    <span class="badge">Python</span>
    <span class="badge">PyTorch</span>
    <span class="badge">ResNet</span>
    <span class="badge">GANs</span>
    <span class="badge">Scikit-Learn</span>
</div>
