import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="div-container">
        <h1>How To Create a Bar Graph in Python</h1>
        <p>
          The ability to create graphs that communicate data is one of the most
          important tools for a data scientist to have.
          These instructions will walk you through the process, step by step,
          until you feel confident creating a simple bar graph in Python!
        </p>
        <h3>Materials:</h3>
        <ul>
          <li>Computer (Provided)</li>
          <li>Google Colab (Provided)</li>
          <li>A data set (Provided)</li>
          <li>Hands to type</li>
        </ul>
        <Image 
          src={'/add_code_button.png'}
          width={700}
          height={370}
          alt="Step 1 Image"
        />
      </div>
    </main>
  );
}
