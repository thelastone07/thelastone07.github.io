---
title: "Building a camera from scratch"
date: 2026-10-22
categories : ['optics', 'cameras']
layout: post
excerpt : 'Starting from a bare surface and fixing blur after blur until we have a lens, and a look at the eye'
---

Imagine a world without cameras. No memories, no cinematography. People don’t believe you when you say there’s an animal with a long nose, another with a longer neck. Goddamnit!! We need a camera. 

![Photography is truth. Cinema is truth twenty-four times per second. - Jean-Luc Godard](/assets/building_a_camera_from_scratch/godard-quote.png)


### Gather your light

I would start by capturing light rays onto a screen. Some chemicals some magic and let’s say I capture these rays. 

![A screen as big as the scene catches every ray](/assets/building_a_camera_from_scratch/camera-0-screen.svg)


This works. The only problem is that you would need the surface to be the size of the scene you want to capture. (*Smirk)*

![A pinhole box projecting an upside-down tree](/assets/building_a_camera_from_scratch/camera-1-pinhole.svg)

We have pasted the surface inside a box and have made a circular opening. Now, even humongous scenes can be captured as well. 

- The pinhole setting can capture scenes of height h1 at distance d1 where $h1 = h2 / d2 * d1$. In order to capture larger or smaller scene you need to physically move away or towards to change d1. I don’t want to do that.
- Also, the hole is not a infinitesimal point, it has a diameter D. So each point of the scene doesn’t map exactly 1:1, instead it creates a circular representation. Colors from other scenes would overlap these points and would create a blur. A blur due to geometry. Ugghh!

![One point of the scene smeared across the screen by a hole of diameter D](/assets/building_a_camera_from_scratch/camera-1b-geometric-blur.svg)

- Diffraction blur. We had assumed light to be particles hence the rays, but is it?

What is diffraction? Light is weird, it bends around objects, small slits and stuff, we can’t stop that. This causes unnecessary problems. At some place, this bent light gather more than what we actually need, some place none. So we get a patch of black and white pattern — kind of another blur. Can we reduce this? Sure. Diffraction blur is inversely proportional to the size of the diameter apparently. A big enough aperture and light doesn’t know where to bend? 

> For nerds : The intuition behind this is — larger the D we know the transverse position of the wave to this limit. If you confine a wave to length D, then it’s uncertainty in angle is proportional to  $1 / D$. This is somewhat of the form of Heisenberg’s uncertainty principle — $\Delta{x} * \Delta{\theta} >= z$.
> 

## Is that a glass?

We are making progress. To solve the diffraction blur we increase the hole or aperture. Now, we have worse geometric blur (a point gets mapped into a circular patch on the screen). But we can solve it by introducing the (drumroll) — lens. Convex lens.

What does introducing a lens do? Refracts. The change in optical medium and Fermat’s principle — light takes the path of minimum stationary time (yeah!!). What it says that light will bend when it enters a different (optical)medium. Now, a cone of rays converges to a single point. 

#### Where do I place the lens?

We know Snell’s law : the relation between refractive indices and the angle of entry and exit. We follow one ray with it’s entry and exit. With small angle approximations (the entry and exit angles are very small), and some spherical geometry, we can get the mathematical relation between the refractive index, curvature of lens surfaces, object position and screen distance. After some hard mathematical derivation, we can adjust the lens position to get better image. 

Wait a minute!! My scene isn’t 2D. It is a complex 3D environment. Can this setup get accurate image? The rays from object further away or nearer converges in front or behind the screen. Converging behind the screen implies a geometric blur on the screen. If this blur is smaller than what an eye can perceive, then this setup works!! Geometric blur depends on the aperture, let’s see what it does. Larger D implies fat cone and out-of-focus things blur quickly (shallow depth of field). The cone due to smaller D blurs slowly (deep depth of field). We can get a range of D for which this blur isn’t significant for the human eye. To see what I mean by depth of field, look at this screen quite intently. There has to be some objects in your surroundings. You can see them but not quite clearly. Try squinting. You are essentially decreasing the aperture of your eyes, better focus on surrounding objects? (visit a doctor otherwise) 

![Big and small apertures compared: how fast out-of-focus points blur](/assets/building_a_camera_from_scratch/camera-5-depth-of-field.svg)

Human eye is also very sensitive to intensity of light. Shrinking or expanding D changes the amount of light. We can control that though, by adjusting the shutter speed. The lens spreads the light across the screen. So, for each pixel the light we get is proportional to $D/f = 1 / N$. We call this ratio as f-stop. Getting this ratio is useful for future setups where we can set our aperture to a f-stop without worrying about the actual values of $f$ and $D$. 

Remember the small angel approximation that we had to take. There will be rays that come from the edges of our lens having huge angle from the axis. This would cause spherical aberration. So, to get sharper image, we shrink the aperture, but a smaller opening lets lesser light, so every gain in depth of field in paid with brightness. Stating in the nomenclature of f-stops, the diffraction blur also gets pronounced with higher f-stop and aberration blur with lower f-stop. 

We have been ignoring another aspect of light passing through a lens — dispersion. This is the last property of light I promise. Imagine refraction but say the angle of bend that a light ray does depends on what color of light it is. Different color light converges at different places on our screen, axially and laterally — chromatic aberration. To solve this, we can take a converging lens with low dispersion (current setup) and add a low diverging lens with high dispersion. Glue them together, we are at a perfect setup. Somewhat of adding water to your salty dish. 

![Blue and red light focusing at different distances behind one lens](/assets/building_a_camera_from_scratch/camera-6-chromatic.svg)

## Third Eye

We have been talking about human this, human eye that. Let’s get into this and that and others. 

![Source : Pinterest ([Pin on Artsy Fartsy](https://ca.pinterest.com/pin/198017714836403807/))](/assets/building_a_camera_from_scratch/image-4.png)


Our earlier squinting experiment helped us understand that we can indeed change the aperture of our eyes. Look at the ciliary muscle in the figure — they help you squint. An average human blinks around 500 million times in his lifetime. I don’t know why I calculated that, but there is an interesting story from [Sum](https://www.goodreads.com/en/book/show/4948826-sum) where you have to do a certain task before moving onto the other in your afterlife. Imagine blinking 500 million times, sitting, unable to think, move or wonder. Woahh!!! That took a dark turn; back to our topic.

I will avoid going into details of its working and discuss what I find interesting. The figure is somewhat self-explanatory. Lens act as lens. The cornea refracts lights due to change in its medium. Light falls onto the retina which acts as the screen. But our eye has just a single lens. Do we not have any spherical or chromatic aberration? We do. The correction exists as well. The correction isn’t optical but computational. Our amazing brain takes all these aberrations and solves them somehow and we see things with zero distortion. How awesome is this!!

## We are done for now

We built a good setup where we are able to capture light. I believe we have solved the optical part quite well. Still, there are improvements to make. We are far from the modern innovations. On the next parts, I shall take this setup and build a modern camera setup.


The eye illustration : Pinterest ([Pin on Artsy Fartsy](https://ca.pinterest.com/pin/198017714836403807/))

Jean-Luc Godard. Source : Reddit ([r/QuotesPorn](https://www.reddit.com/r/QuotesPorn/comments/4wl1fd/photography_is_truth_jeanluc_godard_1609x2168_oc/))

Illustrations in the style of [Ian Xiaohei Illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) by Ian