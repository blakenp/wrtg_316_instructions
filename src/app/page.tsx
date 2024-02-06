import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
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
        <h2>Step 1: Create a Code Chunk</h2>
        <p>
          In Google Colab, click the +Code button in the top left corner to create a code chunk.
          Throughout these instructions, when asked to create
          a code chunk you will click this button.
        </p>
        <Image 
          src={"/add_code_button.png"}
          width={700}
          height={370}
          alt="Add Code Button"
          priority={true}
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: Another option for creating a code chunk is to use the keyboard shortcut Shift+Enter.
          This will run your code and create a new chunk automatically for you.
        </p>
        <h2>Step 2: Import Packages</h2>
        <p>
          In your newly created code chunk, 
          type the following commands to import the packages we"ll be using.
        </p>
        <p className="note">
          Note: In Python, a package is a useful collection of functions that 
          we are available to use in our programs. 
          We will import some packages to make our coding process easier.
        </p>
        <Image 
          src={"/required_packages.png"}
          width={700}
          height={95}
          alt="Required Python Packages"
          quality={100}
          className="Image"
        />
        <p>
          Press the play button next to your chunk of code, 
          and watch as Colab executes your commands.
        </p>
        <p className="note">
          Note: If your code has run successfully, 
          a check mark will appear next to it. 
          If there are errors, check your code for typos, 
          or skip to the end to read the troubleshooting section.
        </p>
        <div className="hazard-container">
          <div className="hazard-title">    
            <FontAwesomeIcon icon={faExclamationTriangle} className="hazard-icon"/>
            <h3>
              Caution
            </h3>
          </div>
          <p>
            Throughout these instructions,
            <b> the code must be written exactly as shown</b>, 
            including punctuation, spacing, and indents. Otherwise, you will get 
            error messages and your code will not work.
          </p>
        </div>
        <h2>Step 3: Import Some Data</h2>
        <p>
          Add a new code chunk (using the +Code button or Shift+Enter). 
          Type the following to <b>import and name the data</b>, and click play to run the code.
        </p>
        <Image
          src={"/df_initialization.png"}
          width={700}
          height={64}
          alt="DF Initialization"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: In Python, you can assign the data whatever name you'd like,
          but we are using hp_df to denote Harry Potter Data Frame.
        </p>
        <h2>Step 4: Check the Data</h2>
        <p>
          In a new code chunk, 
          <b> ensure that the data was imported correctly</b> using this command, and click play.
        </p>
        <Image
          src="/display_dataframe.png"
          width={700}
          height={80}
          alt="Display Dataframe"
          quality={100}
          className="Image"
        />
        <p>
          This table showing the first few rows of your data should appear:
        </p>
        <Image
          src={"/df_table.png"}
          width={700}
          height={150}
          alt="DF Table"
          unoptimized
          priority={true}
          quality={100}
          className="Image"
        />
      </div>
    </main>
  );
}
