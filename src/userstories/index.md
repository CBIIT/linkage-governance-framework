---
title: Use Cases
description: 'Example user stories for the Linkage Governance Framework'
permalink: /userstories/
layout: layouts/page
nav: cgf
tags: cgf
date: 2026-04-01
eleventyNavigation:
  parent: cgf-userstories
  key: cgf-userstories-main
  order: 1
  title: User Stories
sidenav: true
sticky_sidenav: true
---

# User Stories

The Linkage Governance Framework is conceptual, creating a vision of the future where linking individual-level health data is less difficult.  The stories below illustrate three different perspectives on the framework’s envisioned future and how it can help enable complex data linkages that are not currently possible today.


  {% for story in collections.userstory %}
    <h2><a href="{{ story.url}}"> {{story.data.title}}</a></h2>
    <p>{{ story.data.description }}</p>

  {% endfor %}

-----

{% render 'pagenavigation.html', prevTitle: 'Framework Playbook', prevUrl:'/framework/playbook.html', nextTitle: 'Dataset Holder', nextUrl:'/userstories/dataset-holder.html' %}   