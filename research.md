---
layout: default
title: Research
---

# Research

<p class="section-intro">
My research focuses on efficient AI systems, model compression, and sustainable urban computing at Arizona State University.
</p>

## Current Research

<div class="card">
    <h3>Research Intern</h3>
    <span class="meta">Data Mining and Reinforcement Learning Lab, ASU | September 2024 – Present</span>
    <p>
        I work under Professor Hua Wei exploring how to make AI training more efficient and deployable in real-world scenarios. My research spans multiple projects that tackle the computational challenges of modern machine learning systems.
    </p>
    <p>
        On the dataset distillation front, I'm developing methods to compress massive reinforcement learning training runs into tiny synthetic datasets that capture the essence of what an expert agent learns. The core idea is using meta-learning to optimize synthetic states that allow new agents to learn 100x faster while maintaining most of the original performance—imagine distilling days of training into minutes.
    </p>
    <p>
        I'm also investigating how large language models can optimize urban transportation networks by intelligently updating origin-destination matrices. This involves designing prompting strategies that integrate domain-specific knowledge from civil engineers, bridging the gap between pure AI and real-world infrastructure planning. This work is currently under journal review.
    </p>
    <p>
        Through the Fulton Undergraduate Research Initiative, I led a project on deploying depth estimation models on edge devices like the Jetson Nano. The challenge was maintaining accuracy while drastically reducing computational requirements—we achieved significant improvements in latency and model size through careful quantization and optimization techniques. I presented these findings at the 2025 Fulton Forge Research Expo.
    </p>
    <p>
        Additionally, I contributed to research on multi-agent traffic control systems, comparing different policy architectures under various weather conditions and network configurations. This work was published at the Reinforcement Learning Conference 2025.
    </p>
    
    <span class="badge">PyTorch</span>
    <span class="badge">Reinforcement Learning</span>
    <span class="badge">LLMs</span>
    <span class="badge">Edge Computing</span>
    <span class="badge">Model Compression</span>
</div>

<div class="card">
    <h3>Research Intern</h3>
    <span class="meta">ASU Center for Semiconductor Microelectronics (ACME) | June 2025 – August 2025</span>
    <p>
        I investigated energy efficiency in Mixture-of-Experts large language models, specifically profiling Mixtral-8x7B to understand where computational resources are actually being spent. Through detailed system-level analysis using GPU and CPU profiling tools, I discovered that the majority of energy consumption and latency comes from moving expert weights between GPU and CPU memory—not from the actual computation.
    </p>
    <p>
        This insight led me to propose a smarter routing policy that predicts which experts will be needed next and proactively loads them into GPU memory, potentially cutting energy usage dramatically. The project involved building cost models that capture the complex tradeoffs between computation, memory, and data transfer in modern AI systems.
    </p>
    
    <span class="badge">Large Language Models</span>
    <span class="badge">Energy Profiling</span>
    <span class="badge">System Optimization</span>
    <span class="badge">Mixtral</span>
</div>

## Research Interests

- **Model Compression & Efficiency**: Dataset distillation, quantization, and optimization for resource-constrained environments
- **Sustainable AI**: Energy-efficient inference, profiling, and system-level optimization for large models
- **Urban Computing**: Applications of AI to transportation planning, traffic control, and smart city infrastructure
- **Edge Deployment**: Deploying state-of-the-art models on embedded systems and edge devices

## Technical Skills

**Languages & Tools:** Python, PyTorch, Java, C, C++, R, JavaScript, SQL, MATLAB, Git, Docker

**ML Frameworks:** PyTorch, HuggingFace Transformers, Scikit-Learn, Stable-Baselines3, Accelerate, vLLM

**AI/ML:** LLMs, Computer Vision, Reinforcement Learning, Model Compression, Fine-tuning, RAG

**Deployment:** ONNX, TensorRT, AWS (S3, EC2), REST APIs, FastAPI

**Research Tools:** OpenCV, Weights & Biases, Jupyter, LaTeX
