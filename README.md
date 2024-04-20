![Introduction](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JtNjRmMmYwZnBzb2J0a3hxY3g1ZjZ3OTF0b216YTR0NWdtNTF6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PWiW9Wq3BnlRLlJkDw/giphy.gif)

[Project Link](https://github.com/Gyanesh-Rao28/smartverify)

## **Team Details**
**N-Bytes**
- Krish Srivastava    ([Github)](https://github.com/retr0-kernel/)
- S. Gyanesh Rao      ([Github)](https://github.com/Gyanesh-Rao28)
- Amrit Kumar Singha  ([Github)](https://github.com/Amrit-Kumar-Singha)
- Aniruddha Dewangan  ([Github)](https://github.com/Ani-RudE)

The increasing use of blockchain technologies highlights the importance of smart contract security. Recognizing this need, our team has developed a web application to examine and scan Solidity files, which are the foundation of Ethereum smart contracts. The web application ensures that the smart contracts are safe, effective and are scaleable, that is, keeping in mind the gas fees using a machine learning model.

## **Core Features of the Vulnerability Scanner**

Our web application specifically checks for four criticial vulnerabilities in Solidity files:

**1. Reentrancy Vulnerability:** 

This occurs when external contracts are allowed to make new calls to your contract before the initial execution is completed, potentially leading to unexpected behaviors or losses.

**2. Timestamp Dependence Vulnerability:**  

Contracts relying on block timestamps can be manipulated by miners, as these timestamps are not as predictable as they might seem.

**3. Delegate Call Vulnerability:**

Misuse of the delegate call can lead to serious security issues, including state variables being altered unexpectedly. 

**4. Integer Overflow Vulnerability:**

Poorly handled integer operations can overflow, leading to logic errors and enabling attackers to exploit contract functions.

## **How it Works**

When you upload a Solidity file through our Contract Upload Page, the backend ML model immediately evaluates the file against the aforementioned vulnerabilities. The process is as follows:

**1. Upload:** Users can provide a link to the Solidity file easily through a user-friendly interface. 

**2. Analysis:** The file undergoes a thorough check by our ML model that's trained to identify patterns and signatures associated with the four types of vulnerabilities.

**3. Results:** The analysis results are displayed on the Result Page, which offers a detailed breakdown of potential vulnerabilities and their severity.

## **Additional Features**

- **History:** Users can view all their previous uploads, along with their respective analyses, in the History section. This allows for easy tracking and comparison over time.

- **Home Page:** A clean and informative homepage that outlines the functionalities and benefits of using our scanner.

## **Technical Stack**

- **Frontend:** TypeScript, Next.js, and TailwindCSS for a responsive and modern user interface.
- **Backend:** Flask and Node.js for robust server-side operations, with Prisma for database interactions and Clerk for authentication.
- **ML Model:**  Built with PyTorch, utilizing transfer learning to efficiently identify vulnerabilities in Solidity files.
- **Deployment:** Vercel, Ngrok

![Intro](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gnos6k0f9wrvdew1llj3.jpg)


![bleh](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ed8tg7esp03aif0dask8.jpg)


![la](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f5aqm0qcntl1srm3gaae.jpg)





![ja](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7om00g5l9dz4zb6kfxz.jpg)

## **Challenges Faced**

- **ML Model:**

1. **Dataset Search:** Finding a suitable dataset for training our machine learning model was an initial challenge. Smart contract vulnerabilities are a relatively new domain, and publicly available datasets are limited. We spent considerable time researching and curating a dataset that accurately represented the types of vulnerabilities we aimed to detect.

2. **ML Model Size:** Initially, our machine learning model's size was about 2GB, making it impractical for deployment on a web application. We addressed this issue by exploring different model architectures and optimization techniques. Ultimately, we implemented quantization and pruning strategies, which allowed us to significantly reduce the model's size without compromising its performance.

3. **Training Environment Requirements:** During the training phase, we encountered a hurdle due to the computational requirements of our machine learning model. Specifically, we needed to leverage PyCuda with an integrated NVIDIA graphics card to accelerate the training process. We overcame by this issue by using a T1000 8GB Nvidia Graphics.

- **API:**

1. **API Deployment:** Deploying our machine learning model as an API service presented challenges due to its initial size of approximately 2GB. Hosting such a large model on a web server or cloud platform can be resource-intensive and costly. We addressed this issue by implementing model optimization techniques, such as quantization and pruning, to reduce the model's size without compromising its performance significantly.

2. **Node.js to ML Model Integration:** Integrating our Node.js backend with the Python-based machine learning model required a seamless communication interface. We explored various options, including containerization with Docker and leveraging serverless architectures like Azure. Ultimately, we opted for a Flask-based API that could handle incoming requests from our Node.js backend.

3. **Ngrok Deployment:** Facing challenges with the large size and high operational costs of deploying a 2GB ML model on Azure, AWS, and Hugging Face, we eventually opted for Ngrok to facilitate deployment due to its cost-effectiveness and simplicity.

## **Conclusion**

Security is a crucial consideration in digital transactions, especially with the rise of blockchain and smart contracts. By examining Solidity contracts for vulnerabilities, our webapp offers an essential service that makes blockchain applications safer.

This project helps you secure your smart contracts and can be used as a teaching tool for developers who want to learn more about blockchain security. 
