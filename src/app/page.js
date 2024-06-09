"use client";
import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import Link from 'next/link';
import styles from './page.module.css';

function Page() {
  const [model, setModel] = useState(null);
  const [inputs, setInputs] = useState({ sepalLength: '', sepalWidth: '', petalLength: '', petalWidth: '' });
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const modelUrl = `${window.location.origin}/model/model.json`;
      const model = await tf.loadLayersModel(modelUrl);
      setModel(model);
      console.log('Modelo cargado');
    }
    loadModel();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handlePredict = async () => {
    if (model) {
      const inputTensor = tf.tensor2d([[parseFloat(inputs.sepalLength), parseFloat(inputs.sepalWidth), parseFloat(inputs.petalLength), parseFloat(inputs.petalWidth)]]);
      const predictionTensor = model.predict(inputTensor);
      const predictionArray = await predictionTensor.array();
      const predictedClassIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
      const classNames = ["setosa", "versicolor", "virginica"];
      setPrediction(classNames[predictedClassIndex]);
    }
  };

  return (
    <div>
    <h1>Iris Plant Classification</h1>
    <div className={styles.card}>
      <label>
       Sepal length:
       <br/>
      <br/>
        <input type="number" name="sepalLength" value={inputs.sepalLength} onChange={handleInputChange} />
      </label>
      <label>
      Sepal width:
      <br/>
      <br/>
        <input type="number" name="sepalWidth" value={inputs.sepalWidth} onChange={handleInputChange} />
      </label>
      <label>
      Petal length:
      <br/>
      <br/>
        <input type="number" name="petalLength" value={inputs.petalLength} onChange={handleInputChange} />
      </label>
      <label>
      Petal width:
      <br/>
      <br/>
      
        <input type="number" name="petalWidth" value={inputs.petalWidth} onChange={handleInputChange} />
      </label>
      <button onClick={handlePredict}>Classify Prediction</button>
      {prediction && (
        <div>
          <h3>Result:</h3>
          <h2>Iris {prediction}</h2>
        </div>
      )}
    </div>
    <div className="project-github">
      <p>This project is in </p>
      <Link href="https://github.com/diegoperea20">
        <img width="96" height="96" src="https://img.icons8.com/fluency/96/github.png" alt="github"/>
      </Link>
    </div>
  </div>
  );
}

export default Page;
