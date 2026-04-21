---
title: Framework Pilot
description: 'Framework Pilot'
permalink: /framework/framework-pilot.html
layout: layouts/page
section: framework
nav: cgf
tags: 
  - framework
eleventyNavigation:
  parent: cgf-framework
  key: pilot
  order: 3
  title: Framework Pilot
sidenav: true
sticky_sidenav: true
---

# Operational Exercise

The [Linkage Governance Framework](/framework) was piloted through an Operational Exercise. The purpose of the Operational Exercise was to gather evidence about which aspects of the framework work well and which need improvement. Piloting the framework translated to running two mock research use cases through the Common Governance Process to test the process with real datasets and their governance. Each mock research use case represented desirable linkages and compelling research that is impossible today.  

## Approach

The Operational Exercise had two connected workstreams: 

- Individual working sessions where participants walked through the Common Governance Process for each use case. 
- Group working sessions where participants discussed their experience in the process and suggested ways to make the process more efficient. 

The Operational Exercise engaged participants from dataset holders across HHS. NCI project team members played the role of the investigator and MITRE played the role of the coordinating body.

### Use Case 1: Type 2 Diabetes and Cancer Among Older Adults 

Use Case 1 explored how genetic factors may relate to cancer diagnoses and cancer outcomes among adults ages 65–85 with type 2 diabetes. A linkage was proposed to combine a genomic dataset from a related research project with Medicare claims data and EHR-based clinical data accessed via the [National Clinical Cohort Collaborative](https://ncats.nih.gov/research/research-activities/n3c/overview) (N3C). Using the privacy-preserving record linkage (PPRL) method, person-level deidentified tokens would be used to match individuals and generate a linked dataset, accessible only within the N3C secure enclave.

### Use Case 2: Late Complications Following Immunotherapy Among Children, Adolescents, and Young Adults 

Use Case 2 focused on late complications following immunotherapy in children and young adults (0–25 years) with cancer. A linkage was proposed to combine registry and EHR data from the [National Childhood Cancer Registry](https://cancercontrol.cancer.gov/research-emphasis/supplement/childhood-cancer-registry) (NCCR), adverse event data from the FDA BEST program, and genomic data from past research projects &ndash; accessed via [dbGaP](https://dbgap.ncbi.nlm.nih.gov/home/). Two linkage methods were proposed to connect these data: PPRL to connect NCCR and FDA adverse event data and the [Childhood Cancer Data Initiative](https://www.cancer.gov/research/areas/childhood/childhood-cancer-data-initiative) (CCDI) Participant Index (CPI) to connect NCCR data to genomic data.

## Next Steps 

Learnings from the Operational Exercise will be used to improve the Linkage Governance Framework, refine the Common Governance Process, and plan for future implementation.   

-----

{% render 'pagenavigation.html', prevTitle: 'Common Governance Process', prevUrl:'/framework/common-governance-process.html', nextTitle: 'Framework Playbook', nextUrl:'/framework/playbook.html' %}   