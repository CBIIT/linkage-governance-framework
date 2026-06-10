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


<div class="margin-top-5">
  {% for story in collections.userstory %}
<ul class="usa-card-group" >
  <li class="usa-card tablet-lg:grid-col-10 widescreen:grid-col-8 usa-card--header-first">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading"><a href="{{ story.url}}"> {{story.data.title}}</a></h4>
      </div>
      <div class="usa-card__media">
        <div class="usa-card__img card-white padding-4">
    {% image_with_class story.data.story_image "card imgc50" story.data.story_image_alt %}
        </div>
      </div>
      <div class="usa-card__body">
        <p>
          {{ story.data.description }}
        </p>
      </div>
      <div class="usa-card__footer">
        <a href="{{ story.url}}">Read their story</a>
      </div>
    </div>
  </li>
</ul>
  

  {% endfor %}
</div>

-----

{% render 'pagenavigation.html', prevTitle: 'Framework Playbook', prevUrl:'/framework/playbook.html', nextTitle: 'Investigator', nextUrl:'/userstories/investigator.html' %}   