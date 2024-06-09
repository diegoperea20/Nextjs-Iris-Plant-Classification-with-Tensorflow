# Nextjs Iris Plant Classification with Tensorflow

<p align="justify">
Nextjs Iris Plant Classification with Tensorflow converting a.h5 model to tensorflowjs that is .json and .bin
</p>

The training and dataset are in this IPynb [repository Pytorch-vs-Tensorflow](https://github.com/diegoperea20/Pytorch-vs-Tensorflow/blob/main/CLasification_with_data/Tensorflow_Clasification_data.ipynb)

<p align="center">
  <img src="README-images\homee.PNG" alt="Step1">
</p>
<p align="center">
  <img src="README-images/insertdata.PNG" alt="Step2">
</p>
<p align="center">
  <img src="README-images/setosaclassify.PNG" alt="Step3">
</p>
<p align="center">
  <img src="README-images/versicolorclassify.PNG" alt="Step4">
</p>
<p align="center">
  <img src="README-images/virginicaclassify.PNG" alt="Step5">
</p>

Loss
<p align="center">
  <img src="README-images/loss.png" alt="Step6">
</p>
Accuracy
<p align="center">
  <img src="README-images/accuracyy.png" alt="Step7">
</p>
Confusion Matrix 
<p align="center">
  <img src="README-images/matrixconfu.png" alt="Step8">
</p>

----
Convert h5 to Tensorflowjs in ipynb
```bash
!pip install tensorflowjs
```
```bash
!tensorflowjs_converter --input_format keras /root/to/your/model.h5 /root/to/your/folder/save
```
-----

Fronted Nextjs Options for do it:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Nodejs version v20.10.0 and Next.js version v14.2.3 

First
```bash
npm install
```
run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resolve : Error Nextjs Parsing error: Cannot find module 'next/babel'

Put this code in .eslintrc.json 
```bash
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```


Created by [Diego Ivan Perea Montealegre](https://github.com/diegoperea20)