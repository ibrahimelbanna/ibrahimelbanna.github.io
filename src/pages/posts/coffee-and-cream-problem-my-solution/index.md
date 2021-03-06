---
title: Coffee and Cream problem, My solution
author: zeyadetman
comments: true
categories: math
layout: post
date: "2016-06-21"
---

<strong>Here's the problem from <a href="http://mrhonner.com/" target="_blank">Mr.Honner Blog</a>:</strong>

<blockquote>

I was recently reminded of an excellent math problem involving mixtures.

<em>Imagine yourself sitting in front of a cup of coffee and a cup of cream.</em>

<img class="  wp-image-1353 aligncenter img-fluid" src="https://zeyadetman.files.wordpress.com/2016/06/coffee-and-cream-solution-1.jpg" alt="coffee-and-cream-solution-1" width="260" height="130" />

<em>Suppose you take a spoonful of cream, pour it into the coffee, and stir it up. Now once that’s thoroughly mixed, you take a spoonful of the mixture and pour it back into the cream. Then you mix that up. </em><em>After all of this, is there more coffee in the cream, more cream in the coffee, or equal amounts in both?</em>

I encourage you to think about the problem before perusing the several solutions below!

</blockquote>
<strong><span style="color:#333333;">Here's my solution:</span></strong>
my answer is more cream in the coffee.
my explanation is in the first step the spoonful consisted of pure cream, then the second spoonful from the coffee cup consisted of “cream and coffee” and for each step the spoonful will consist of the mix and impossible it contains pure coffee in any step.
let's using math...
we will assume that x+n=1; //1 as the size of spoonful.
and will assume that 5 as a cup size.

coffee -> 5cf , cream -> 5cr
cf-->coffee , cr-->cream
<span style="color:#ff0000;">-important note-</span>
<span style="color:#ff0000;">\*the ratio is the origin content/the other content and we'll <em> compare ratios.</em></span>

1st step: 5cr-1cr, 5cf+1cr = 4cr , 5cf + 1cr
2nd step: 4cr+ncf+(x-n)cr=(4+x-n)cr+ncf, 5cf+1cr-ncf-(x-n)cr= (5-n)cf + (1-x+n)cr //General formula
let’s try some cases like n=0.2 , n=0.1 and n=0.6;

1st cup”cr” (ratio) — 2nd cup”cf” (ratio)
(4.6)cr+.8cf (5.75) — (4.8)cf+(1.6)cr (3) // cr > in coffee
(4.8)cr+.1cf (48) — (4.9)cf+(1.8)cr (2.7) // cr > in coffee
(3.8)cr+.6cf (6.3) — (4.4)cf+(1.2)cr (3.7) // cr > in coffee
let’s try n=0.5 :)
4cr+.5cf (8) — 4.5cf+1cr (4.5) //cr > in coffee, okay that’s great! make sense
