---
title: Problem Overview
description: 'What are the current barriers to data linkage'
permalink: /problem/
layout: layouts/fullpage
nav: cgf
eleventyNavigation:
  parent: cgf-problem
  key: cgf-problem-main
  order: 1
  title: Problem Overview
sidenav: false
sticky_sidenav: true
---


# Individual-level health data linkage holds promise for innovative research &hellip;

<section>
  <div class="grid-row">
    <div class="mobile-lg:grid-col-12 tablet:grid-col-7 tablet-lg:grid-col-8">

People usually have health data held in multiple systems. Examples of this individual-level health data include clinical data from an electronic health record (EHR), claims from a health insurer, data from wearables, and data collected during research studies. Making sure these data are reliably available and transformed into actionable evidence through research is essential for patient-centered outcomes research. Importantly, a person's data should only be used as permitted by their consent and in a way that assures their privacy is protected.

When individual-level health data from different datasets can be matched and linked the combined dataset has more complete information and a fuller picture of the diverse factors contributing to the person’s health and illness over time. Linked data can drive innovative research questions and accelerates discovery, but creating linkages can have significant challenges that investigators might not anticipate. 

Some linkages of individual-level health data are happening today. For example, the [_All of Us_ Research Program](https://www.researchallofus.org) asks permission from its participants to link data from EHRs, surveys, and genomic repositories for research. Hundreds of studies have used the _All of Us_ linked data for scientific breakthroughs. However, most datasets have never been linked, and many promising safe and appropriate linkages remain out of reach.  
    </div>
    <div class="mobile-lg:grid-col-12 tablet:grid-col-5 tablet-lg:grid-col-4">

      {% render 'summary-box.html', title: '', body: '<b><a href="https://aspe.hhs.gov/collaborations-committees-advisory-groups/os-pcortf">Patient-centered outcomes research</a>:</b> Research that aims to generate high-quality evidence about the effectiveness of treatments, services, and other health care interventions on the full range of outcomes that patients, caregivers, clinicians, policymakers, and other stakeholders have identified as important.' %}
      
    </div>
  </div>    

  <div class="grid-row">
    <div class="mobile-lg:grid-col-12 tablet:grid-col-7 tablet-lg:grid-col-8">

# &hellip; but rich, complex data linkage can be challenging.

Some challenges to linking datasets are technical. This framework focuses on governance challenges.

Each dataset has its own unique governance rules. While there are typically many commonalities between datasets’ governance, datasets may have governance rules that conflict or may implement similar governance rules in different ways.

Complex linkages arise when various aspects of data governance make the data linkage especially difficult. For example, linking three or more datasets is complex because of the challenges blending the governance rules of three different datasets. 
 
    </div>
    <div class="mobile-lg:grid-col-12 tablet:grid-col-5 tablet-lg:grid-col-4">

      {% render 'summary-box.html', title: '', body: '<b>Data governance:</b> Policies, processes, and decisions that dictate how data can be managed and used. Key to data governance is consideration of data security and individual privacy.<br><br><b>Data governance rules:</b> Rules that express requirements for data access, sharing, linkage, use and dissemination.' %}
    </div>
  </div>      
</section>

# Investigators and dataset holders need a new way to overcome challenges and link data for research.

Investigators and dataset holders share a common goal to use data linkages to drive research that can improve health and save lives. Linkage governance as it stands today can make innovative complex linkages hard to create.  

<section>

## Investigators

  <div class="grid-row">
    <div class="mobile-lg:grid-col-12 tablet:grid-col-7 tablet-lg:grid-col-8">

{% image_with_class "assets/resources/img/investigator.png" "actor-icon" "Icon of Investigator" %} For investigators, governance processes are often fragmented, requiring time-consuming and duplicative work, and they can wait a long time for answers. Challenges can include:

- Time and effort needed to develop separate requests for multiple dataset holders.
- Asynchronous review processes to manage.
- No process or tools to integrate the separate sets of rules that govern the linked dataset.
- Conflicting governance rules may make linkage impossible without a way to reconcile the conflicts.

    </div>
    <div class="mobile-lg:grid-col-12 tablet:grid-col-5 tablet-lg:grid-col-4">
      {% render 'summary-box.html', title: '', body:'<b>Investigators:</b> Individuals responsible for the design, conduct, reporting, and scientific and ethical integrity of a research study. Investigators play a critical role ensuring the research is compliant with laws, regulations, and policies.' %}
    </div>
  </div>      
</section>


<section>

## Dataset Holders

  <div class="grid-row">
    <div class="mobile-lg:grid-col-12 tablet:grid-col-7 tablet-lg:grid-col-8">

{% image_with_class "assets/resources/img/dataset-holder.png" "actor-icon" "Icon of dataset holder" %}  Dataset holders are responsible for ensuring compliance with the  rules about access and use of their dataset. Complex data linkages create unique challenges for them:

- Limited or no coordination with other dataset holders to codesign complex linkages that comply with governance rules.
- Time and effort to understand unfamiliar linkage methods and authorize linkage software tools.
- Exceptions or modifications to existing processes to accommodate complex linkage requirements.

    </div>
    <div class="mobile-lg:grid-col-12 tablet:grid-col-5 tablet-lg:grid-col-4">
      {% render 'summary-box.html', title: '', body:'<b>Dataset holders:</b> Entities with the authority to make decisions about the access, sharing, linkage, and use of specific datasets.' %}
          </div>
  </div>      
</section>

      
    {% render 'callout.html', title: 'Note', body:'This project conducted a Current State Assessment to learn about the governance policies and practices of three dataset holders: N3C, PCORnet, and VRDC. The assessment and its findings can be accessed [here](/resources#current-state-assessment).' %}

----- 

{% render 'pagenavigation.html', prevTitle:'Home', prevUrl:'/', nextTitle: 'Framework', nextUrl:'/framework' %}