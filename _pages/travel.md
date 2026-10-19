---
title: "旅行 Travel"
permalink: /travel/
layout: single
author_profile: false
---

## 出發 Departure

桃園機場出發 → 法蘭克福機場 → 柏林布蘭登堡機場
吃好、睡好，帶著一坨行李去到宿舍。

## 旅程 Trips

<style>
.tripgrid{display:grid;grid-template-columns:1fr 1fr;gap:28px 24px}
.card{display:block;color:inherit;text-decoration:none}
.card img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block}
.card h3{font-size:20px;margin:10px 0 0}
@media (max-width:640px){.tripgrid{grid-template-columns:1fr}}
</style>

<div class="tripgrid">
{% for post in site.posts %}
<a class="card" href="{{ post.url | relative_url }}">
  <img src="{{ post.cover | relative_url }}" alt="{{ post.title }}">
  <h3>{{ post.title }}</h3>
  <div>{{ post.date | date: "%Y" }}</div>
</a>
{% endfor %}
</div>
