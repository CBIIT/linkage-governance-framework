---
permalink: /
title: Linkage Governance Framework
layout: layouts/home
nav: cgf
eleventyNavigation:
  key: cgf
  order: 1
  title: About this guide
description: Linkage Governance Framework to Connect Individual-level Health Data for Research
---

<section id="hero">
  <div class="faded-background">
  <div class="usa-prose grid-container section usa-section">
  <div class="grid-row">
    <div class="tablet-lg:grid-col-8">
    
# A Governance Framework for Linking Individual-level Health Data for Research{.usa-sr-only}
   
## Linking individual-level health data in ways that are secure, compliant and protect privacy can allow researchers to accelerate discoveries that improve patient health and outcomes.
  
The Linkage Governance Framework is a new model for governance that addresses the challenges that can make it hard to link individual-level health data.
   
    </div>
    <div class="tablet-lg:grid-col-4"></div>
  </div>
  </div>
  </div>
</section>

<div class="usa-section grid-container layout--sections">

  <section class="usa-prose section usa-section ">
  {% render "wip.html" %}

# The Rationale for a Linkage Governance Framework
  <div class="grid-row">
    <div class="grid-col-8">
    
Safe and secure patient-guided research can be delayed by rules and processes that are unclear, slow and duplicative. This framework was inspired by [the challenges](/problem) that arise when research investigators need to work with multiple dataset holder organizations to access, link and study data:

- Investigators and requesting institutions require substantial up-front effort to coordinate their requests across multiple organizations 
- Dataset holders vary widely in the information they require for a data access request, including for linkage, leading to a lot of time-consuming iterations with investigators
- Review processes are sequenced differently so that investigators must coordinate multiple asynchronous processes  
- Investigators may learn too late that conflicting governance rules make linkage impossible with no clear way to reconcile these conflicts  
    </div>
    <div class="grid-col-4">
      {% render 'summary-box.html', title: '', body: '<b>Data governance:</b> Policies, processes, and decisions that dictate how data can be managed and used. Key to data governance are consideration of data security and individual privacy.<br><br><b>Data governance rules:</b> Rules that express requirements for data access, sharing, linkage, use and dissemination.' %}
          </div>
  </div>
  
The Linkage Governance Framework was developed to help investigators, requesting institutions, and dataset holders to create linked data for research, including patient-centered research. It aims to speed up data linkage decisions, streamline governance processes, and enable safe and secure linkages.   

{% image_with_class "assets/resources/img/placemat.png" "img100" "Diagram of Linkage Governance Framework" %}

This framework differs from the current state of governance for linkage by introducing the following innovation:

- Creating a neutral coordinating body to be the interface between investigators, requesting institutions and dataset holders 
- Simplifying the process for investigators to propose linkage of multiple datasets 
- Synchronizing review processes across dataset holders 
- Launching a collaborative process to harmonize governance rules with dataset holders

----- 

{% render 'callout.html', title: 'Acknowledgement', body:'Framework development was funded by the <a href="https://aspe.hhs.gov/collaborations-committees-advisory-groups/os-pcortf">Office of the Secretary Patient-Centered Outcomes Research Trust Fund</a> (OS-PCORTF), whose mission is to build and strengthen data capacity for patient-centered outcomes research through coordination across agencies and federal programs.' %}

----- 

{% render 'pagenavigation.html', nextTitle: 'Problem Overview', nextUrl:'/problem' %}            

  </section>

</div>