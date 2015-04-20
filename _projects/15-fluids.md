---
git: 'https://github.com/kyeah/Cloth-Fluids-Solver'
title: 3D Fluid Interactions
vid: 'img/projects/fluids.webm'
vid-poster: 'img/projects/fluids-poster.png'
img-large: 'img/projects/fluids-poster.png'
id: 'fluids'
anchorid: '#fluids'
---

A basic 3D fluid solver implementing the stable Navier-Stokes fluid methods described in Jos Stam&rsquo;s Stable Fluids paper.

This implementation does not use the speed and accuracy optimizations mentioned in the paper, such as FFT and Vorticity Confinement, but instead uses Gauss-Seidel iterative relaxation methods to avoid expensive linear system solvers.