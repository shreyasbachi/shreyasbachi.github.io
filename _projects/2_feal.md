---
layout: page
title: Feal?
description: Fake vs. real image classifier — 97.3% accuracy
img: assets/img/feal-demo.gif
importance: 4
category: work
related_publications: false
---

A binary classifier that distinguishes real photographs from AI-generated images with **97.3% accuracy**, built by fine-tuning a ResNet-18 with PyTorch.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/feal-demo.gif" title="Feal? demo — classifying real vs. AI-generated images" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Feal? in action — classifying real photographs vs. AI-generated images.
</div>

- Fine-tuned ResNet-18 on an augmented dataset
- Enriched training data with 10,000+ synthetic images from a custom Deep Convolutional GAN
- Applied data-augmentation strategies for improved generalization

**Stack:** Python · PyTorch · ResNet · GANs · Scikit-Learn
